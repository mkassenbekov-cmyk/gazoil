import express from "express";
import Database from "better-sqlite3";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = Number(process.env.PORT || 5173);
const DATA_DIR = process.env.GAZOIL_DATA_DIR || path.join(__dirname, "data");
const DB_PATH = process.env.GAZOIL_DB_PATH || path.join(DATA_DIR, "gazoil-crm.sqlite");

fs.mkdirSync(DATA_DIR, { recursive: true });

const db = new Database(DB_PATH);
db.pragma("journal_mode = WAL");
db.pragma("foreign_keys = ON");

db.exec(`
  CREATE TABLE IF NOT EXISTS app_state (
    id INTEGER PRIMARY KEY CHECK (id = 1),
    version INTEGER NOT NULL DEFAULT 1,
    state_json TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS api_events (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    event_type TEXT NOT NULL,
    actor TEXT,
    payload_json TEXT,
    created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS crm_entities (
    id TEXT PRIMARY KEY,
    entity_type TEXT NOT NULL,
    payload_json TEXT NOT NULL,
    updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  );
`);

const stateSelect = db.prepare("SELECT version, state_json, updated_at FROM app_state WHERE id = 1");
const stateUpsert = db.prepare(`
  INSERT INTO app_state (id, version, state_json, updated_at)
  VALUES (1, 1, @stateJson, CURRENT_TIMESTAMP)
  ON CONFLICT(id) DO UPDATE SET
    version = version + 1,
    state_json = excluded.state_json,
    updated_at = CURRENT_TIMESTAMP
`);
const eventInsert = db.prepare("INSERT INTO api_events (event_type, actor, payload_json) VALUES (@eventType, @actor, @payloadJson)");
const entityUpsert = db.prepare(`
  INSERT INTO crm_entities (id, entity_type, payload_json, updated_at)
  VALUES (@id, @entityType, @payloadJson, CURRENT_TIMESTAMP)
  ON CONFLICT(id) DO UPDATE SET
    entity_type = excluded.entity_type,
    payload_json = excluded.payload_json,
    updated_at = CURRENT_TIMESTAMP
`);

function saveEntitySnapshots(state) {
  const entities = [
    ...(Array.isArray(state.clients) ? state.clients.map((item) => ({ id: item.id, entityType: "client", payloadJson: JSON.stringify(item) })) : []),
    ...(Array.isArray(state.processes) ? state.processes.map((item) => ({ id: item.id, entityType: item.type || "process", payloadJson: JSON.stringify(item) })) : []),
    ...(Array.isArray(state.users) ? state.users.filter((item) => item.roleId).map((item) => ({ id: item.id, entityType: "user", payloadJson: JSON.stringify(item) })) : []),
  ];
  const writeMany = db.transaction((rows) => rows.forEach((row) => entityUpsert.run(row)));
  writeMany(entities);
}

function readState() {
  const row = stateSelect.get();
  if (!row) return { state: null, version: 0, updatedAt: "" };
  return { state: JSON.parse(row.state_json), version: row.version, updatedAt: row.updated_at };
}

function persistState(state, actor = "frontend") {
  const stateJson = JSON.stringify(state);
  const write = db.transaction(() => {
    stateUpsert.run({ stateJson });
    saveEntitySnapshots(state);
    eventInsert.run({
      eventType: "state_saved",
      actor,
      payloadJson: JSON.stringify({
        clients: Array.isArray(state.clients) ? state.clients.length : 0,
        processes: Array.isArray(state.processes) ? state.processes.length : 0,
        auditLog: Array.isArray(state.auditLog) ? state.auditLog.length : 0,
      }),
    });
  });
  write();
  return readState();
}

const app = express();
app.disable("x-powered-by");
app.use(express.json({ limit: "50mb" }));

app.get("/api/health", (_request, response) => {
  response.json({
    ok: true,
    service: "gazoil-crm-api",
    dbPath: DB_PATH,
    time: new Date().toISOString(),
  });
});

app.get("/api/state", (_request, response) => {
  response.json(readState());
});

app.put("/api/state", (request, response) => {
  const state = request.body?.state;
  if (!state || !Array.isArray(state.clients) || !Array.isArray(state.processes)) {
    return response.status(400).json({ ok: false, error: "Invalid CRM state payload" });
  }
  const actor = request.body?.actor || "frontend";
  response.json({ ok: true, ...persistState(state, actor) });
});

app.post("/api/events", (request, response) => {
  const eventType = String(request.body?.eventType || "").trim();
  if (!eventType) return response.status(400).json({ ok: false, error: "eventType is required" });
  eventInsert.run({
    eventType,
    actor: request.body?.actor || "frontend",
    payloadJson: JSON.stringify(request.body?.payload || {}),
  });
  response.json({ ok: true });
});

app.get("/api/entities/:type", (request, response) => {
  const rows = db
    .prepare("SELECT id, entity_type, payload_json, updated_at FROM crm_entities WHERE entity_type = ? ORDER BY updated_at DESC")
    .all(request.params.type);
  response.json({
    items: rows.map((row) => ({
      id: row.id,
      type: row.entity_type,
      updatedAt: row.updated_at,
      payload: JSON.parse(row.payload_json),
    })),
  });
});

app.use(express.static(__dirname));
app.get("*", (_request, response) => {
  response.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, "127.0.0.1", () => {
  console.log(`GAZOIL CRM backend running at http://127.0.0.1:${PORT}`);
  console.log(`SQLite database: ${DB_PATH}`);
});
