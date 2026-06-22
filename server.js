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

const SERVICE_MANAGER_NAMES = ["Ельжан", "Жанара", "Екатерина"];
const SERVICE_MANAGER_STATUSES = ["На работе / активен", "Занят", "На звонке", "Отошёл", "Обед", "Завершил смену", "Не в сети"];
const SERVICE_AUTO_ASSIGN_STATUSES = ["На работе / активен"];
const SERVICE_BUSY_FALLBACK_STATUSES = ["Занят", "На звонке"];
const DEFAULT_SLA_SETTINGS = {
  firstResponseMinutes: 15,
  classificationMinutes: 30,
  processCreationMinutes: 30,
  missedCallMinutes: 20,
  consultationHours: 24,
};
const FUEL_PRICE = {
  "АИ-92": 205,
  "АИ-95": 245,
  "АИ-98": 285,
  "ДТ лето": 295,
  "ДТ зима": 320,
  Автогаз: 95,
};
const APPEAL_PROCESS_BY_CLASSIFICATION = {
  Договор: "contracts",
  Счёт: "orders",
  "Заказ топлива": "orders",
  "Выдача топлива": "orders",
  Талоны: "orders",
  "Топливная карта": "orders",
  Опт: "orders",
  Продление: "extensions",
  Возврат: "refunds",
  Госзакупки: "tenders",
};

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

  CREATE TABLE IF NOT EXISTS crm_users (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    role_id TEXT,
    active INTEGER NOT NULL DEFAULT 1,
    payload_json TEXT NOT NULL,
    updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS crm_clients (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    bin TEXT,
    phone TEXT,
    email TEXT,
    responsible TEXT,
    status TEXT,
    client_type TEXT,
    payload_json TEXT NOT NULL,
    updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS crm_processes (
    id TEXT PRIMARY KEY,
    process_type TEXT NOT NULL,
    client_id TEXT,
    owner TEXT,
    stage TEXT,
    company_key TEXT,
    due_state TEXT,
    priority TEXT,
    payload_json TEXT NOT NULL,
    updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS crm_tasks (
    id TEXT PRIMARY KEY,
    process_id TEXT NOT NULL,
    title TEXT NOT NULL,
    owner TEXT,
    due TEXT,
    due_at TEXT,
    status TEXT,
    done INTEGER NOT NULL DEFAULT 0,
    priority TEXT,
    automation_key TEXT,
    payload_json TEXT NOT NULL,
    updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS crm_audit_log (
    id TEXT PRIMARY KEY,
    action TEXT NOT NULL,
    object_type TEXT,
    object_id TEXT,
    actor TEXT,
    payload_json TEXT NOT NULL,
    created_at TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS service_manager_statuses (
    manager_name TEXT PRIMARY KEY,
    status TEXT NOT NULL,
    last_shift_at TEXT,
    updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  );

  CREATE INDEX IF NOT EXISTS idx_process_type_owner ON crm_processes(process_type, owner);
  CREATE INDEX IF NOT EXISTS idx_process_client ON crm_processes(client_id);
  CREATE INDEX IF NOT EXISTS idx_task_owner ON crm_tasks(owner, done);
  CREATE INDEX IF NOT EXISTS idx_client_contacts ON crm_clients(phone, email, bin);
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
const userInsert = db.prepare(`
  INSERT INTO crm_users (id, name, role_id, active, payload_json)
  VALUES (@id, @name, @roleId, @active, @payloadJson)
`);
const clientInsert = db.prepare(`
  INSERT INTO crm_clients (id, name, bin, phone, email, responsible, status, client_type, payload_json)
  VALUES (@id, @name, @bin, @phone, @email, @responsible, @status, @clientType, @payloadJson)
`);
const processInsert = db.prepare(`
  INSERT INTO crm_processes (id, process_type, client_id, owner, stage, company_key, due_state, priority, payload_json)
  VALUES (@id, @processType, @clientId, @owner, @stage, @companyKey, @dueState, @priority, @payloadJson)
`);
const taskInsert = db.prepare(`
  INSERT INTO crm_tasks (id, process_id, title, owner, due, due_at, status, done, priority, automation_key, payload_json)
  VALUES (@id, @processId, @title, @owner, @due, @dueAt, @status, @done, @priority, @automationKey, @payloadJson)
`);
const auditInsert = db.prepare(`
  INSERT INTO crm_audit_log (id, action, object_type, object_id, actor, payload_json, created_at)
  VALUES (@id, @action, @objectType, @objectId, @actor, @payloadJson, @createdAt)
`);
const serviceStatusInsert = db.prepare(`
  INSERT INTO service_manager_statuses (manager_name, status, last_shift_at)
  VALUES (@managerName, @status, @lastShiftAt)
`);

const uid = (prefix) => `${prefix}-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
const normalizePhone = (value = "") => String(value).replace(/\D/g, "");
const json = (value) => JSON.stringify(value ?? null);

function saveEntitySnapshots(state) {
  const entities = [
    ...(Array.isArray(state.clients) ? state.clients.map((item) => ({ id: item.id, entityType: "client", payloadJson: json(item) })) : []),
    ...(Array.isArray(state.processes) ? state.processes.map((item) => ({ id: item.id, entityType: item.type || "process", payloadJson: json(item) })) : []),
    ...(Array.isArray(state.users) ? state.users.filter((item) => item.roleId).map((item) => ({ id: item.id, entityType: "user", payloadJson: json(item) })) : []),
  ];
  entities.forEach((row) => entityUpsert.run(row));
}

function syncNormalizedState(state) {
  db.exec(`
    DELETE FROM crm_tasks;
    DELETE FROM crm_processes;
    DELETE FROM crm_clients;
    DELETE FROM crm_users;
    DELETE FROM crm_audit_log;
    DELETE FROM service_manager_statuses;
  `);

  (state.users || []).filter((user) => user.roleId).forEach((user) => {
    userInsert.run({
      id: user.id,
      name: user.name || user.login || user.id,
      roleId: user.roleId || "",
      active: user.active === false ? 0 : 1,
      payloadJson: json(user),
    });
  });

  (state.clients || []).forEach((client) => {
    clientInsert.run({
      id: client.id,
      name: client.name || client.id,
      bin: client.bin || "",
      phone: client.phone || "",
      email: client.email || "",
      responsible: client.responsible || "",
      status: client.status || "",
      clientType: client.type || "",
      payloadJson: json(client),
    });
  });

  (state.processes || []).forEach((process) => {
    processInsert.run({
      id: process.id,
      processType: process.type || "process",
      clientId: process.clientId || "",
      owner: process.owner || "",
      stage: process.stage || "",
      companyKey: process.companyKey || "",
      dueState: process.dueState || "",
      priority: process.priority || "",
      payloadJson: json(process),
    });

    (process.tasks || []).forEach((task) => {
      taskInsert.run({
        id: task.id || uid("task"),
        processId: process.id,
        title: task.title || "Задача",
        owner: task.owner || "",
        due: task.due || "",
        dueAt: task.dueAt || "",
        status: task.status || "",
        done: task.done ? 1 : 0,
        priority: task.priority || process.priority || "",
        automationKey: task.automationKey || "",
        payloadJson: json(task),
      });
    });
  });

  (state.auditLog || []).slice(0, 1000).forEach((record) => {
    auditInsert.run({
      id: record.id || uid("audit"),
      action: record.action || "Событие",
      objectType: record.objectType || "",
      objectId: record.objectId || "",
      actor: record.user || record.userId || "",
      payloadJson: json(record),
      createdAt: record.createdAt || new Date().toISOString(),
    });
  });

  const statuses = state.serviceDesk?.managerStatuses || {};
  SERVICE_MANAGER_NAMES.forEach((name) => {
    serviceStatusInsert.run({
      managerName: name,
      status: SERVICE_MANAGER_STATUSES.includes(statuses[name]) ? statuses[name] : "Не в сети",
      lastShiftAt: state.serviceDesk?.lastShiftAt?.[name] || "",
    });
  });
}

function readState() {
  const row = stateSelect.get();
  if (!row) return { state: null, version: 0, updatedAt: "" };
  return { state: JSON.parse(row.state_json), version: row.version, updatedAt: row.updated_at };
}

function persistState(state, actor = "frontend") {
  const stateJson = json(state);
  const write = db.transaction(() => {
    stateUpsert.run({ stateJson });
    saveEntitySnapshots(state);
    syncNormalizedState(state);
    eventInsert.run({
      eventType: "state_saved",
      actor,
      payloadJson: json({
        clients: Array.isArray(state.clients) ? state.clients.length : 0,
        processes: Array.isArray(state.processes) ? state.processes.length : 0,
        auditLog: Array.isArray(state.auditLog) ? state.auditLog.length : 0,
      }),
    });
  });
  write();
  return readState();
}

function companyByFuel(fuel) {
  return fuel === "Автогаз" ? "ugh" : "trade";
}

function productByFuel(fuel) {
  return fuel === "Автогаз" ? "Газ" : "ГСМ";
}

function crmSlaSettings(state) {
  return { ...DEFAULT_SLA_SETTINGS, ...(state.crmSettings?.sla || {}) };
}

function minutesSince(iso) {
  const time = Date.parse(iso || "");
  return Number.isFinite(time) ? Math.max(0, Math.floor((Date.now() - time) / 60000)) : 0;
}

function inferAppealClassification(text = "") {
  const normalized = text.toLowerCase();
  if (/жалоб|проблем|не работает|не сработ|отклон|ошибк/.test(normalized)) return "Жалоба / проблема";
  if (/сч[её]т|выстав|купить|литр|топливн.*карт|талон|дизел|аи-?92|аи-?95|газ/.test(normalized)) return "Счёт";
  if (/договор/.test(normalized)) return "Договор";
  if (/продлен|продлить/.test(normalized)) return "Продление";
  if (/возврат/.test(normalized)) return "Возврат";
  if (/тендер|госзакуп/.test(normalized)) return "Госзакупки";
  if (/акт свер/.test(normalized)) return "Акт сверки";
  if (/документ|доверенн|эсф/.test(normalized)) return "Документы";
  return "Другое";
}

function defaultChecks(type) {
  const map = {
    appeals: { firstResponse: false, classified: false, linked: false, clientAnswer: false, callback: false, result: false },
    contracts: { requisites: false, project: false, signed: false, expiryTask: false },
    orders: { contract: false, invoice: false, payment: false, power: false, docs: false, esf: false },
    extensions: { clientLetter: false, contractData: false, director: false, clientAnswer: false, extensionDone: false, cash: false },
    refunds: { annulment: false, accounting: false, reconciliation: false, director: false, paymentOrder: false },
    tenders: { discussion: false, director: false, bidReady: false, submitted: false, protocol: false, contract: false },
  };
  return { ...(map[type] || {}) };
}

function defaultProcessDetails(type, process = {}) {
  if (type === "appeals") {
    return {
      source: process.supply || "",
      topic: "Другое",
      closeReason: "",
      firstResponseAt: "",
      firstResponseAtISO: "",
      customerMessage: "",
      result: "",
      problemDescription: "",
      communicationId: "",
      communicationStatus: "",
      callDurationSeconds: 0,
      callRecordingUrl: "",
      contactName: "",
      phone: "",
      email: "",
      subject: "",
      linkedAt: "",
      resolvedAt: "",
      createdAt: new Date().toISOString(),
      missedCall: false,
      callbackCompletedAt: "",
      nextStep: "",
      repeatAppeal: false,
      previousOwner: "",
      assignmentReason: "",
    };
  }
  return {};
}

function appealSlaStatus(state, process) {
  const details = process.details || {};
  const sla = crmSlaSettings(state);
  const age = minutesSince(details.createdAt || process.createdAt);
  const violations = [];
  const terminal = ["Решено", "Закрыто без решения"].includes(process.stage);
  if (!details.firstResponseAtISO && !terminal && age > sla.firstResponseMinutes) violations.push("Просрочен первый ответ");
  if (!details.classifiedAt && !terminal && age > sla.classificationMinutes) violations.push("Не выполнена классификация");
  if (details.classifiedAt && APPEAL_PROCESS_BY_CLASSIFICATION[details.topic] && !process.checks?.linked && minutesSince(details.classifiedAt) > sla.processCreationMinutes) {
    violations.push("Нет связанного процесса");
  }
  if (details.missedCall && !details.callbackCompletedAt && age > sla.missedCallMinutes) violations.push("Пропущенный звонок без перезвона");
  const overdueTask = (process.tasks || []).some((task) => !task.done && task.dueAt && Date.parse(task.dueAt) < Date.now());
  if (overdueTask) violations.push("Задача просрочена");

  let nextMinutes = sla.firstResponseMinutes - age;
  let label = `Первый ответ: ${Math.max(0, nextMinutes)} мин.`;
  if (details.missedCall && !details.callbackCompletedAt) {
    nextMinutes = sla.missedCallMinutes - age;
    label = `Перезвон: ${Math.max(0, nextMinutes)} мин.`;
  } else if (details.firstResponseAtISO && !details.classifiedAt) {
    nextMinutes = sla.classificationMinutes - age;
    label = `Классификация: ${Math.max(0, nextMinutes)} мин.`;
  } else if (details.classifiedAt && APPEAL_PROCESS_BY_CLASSIFICATION[details.topic] && !process.checks?.linked) {
    nextMinutes = sla.processCreationMinutes - minutesSince(details.classifiedAt);
    label = `Создать процесс: ${Math.max(0, nextMinutes)} мин.`;
  }
  return { violations: [...new Set(violations)], nextMinutes, label };
}

function refreshAppealSla(state, process) {
  if (process.type !== "appeals") return process;
  const status = appealSlaStatus(state, process);
  process.slaViolations = status.violations;
  process.due = status.violations.length ? status.violations[0] : status.label;
  if (["Решено", "Закрыто без решения"].includes(process.stage)) process.dueState = "ok";
  else if (status.violations.length) process.dueState = "danger";
  else if (status.nextMinutes <= 5) process.dueState = "warn";
  else process.dueState = process.details?.firstResponseAtISO ? "progress" : "new";
  return process;
}

function managerWorkStatus(state, name) {
  const status = state.serviceDesk?.managerStatuses?.[name];
  return SERVICE_MANAGER_STATUSES.includes(status) ? status : "Не в сети";
}

function serviceTaskPool(state) {
  return (state.processes || []).flatMap((process) => (process.tasks || []).map((task) => ({ ...task, processId: process.id, processType: process.type })));
}

function taskIsOverdue(task) {
  if (task.done) return false;
  const dueAt = Date.parse(task.dueAt || "");
  return Number.isFinite(dueAt) ? dueAt < Date.now() : /вчера|просроч/i.test(task.due || "");
}

function taskIsToday(task) {
  if (task.done) return false;
  const dueAt = Date.parse(task.dueAt || "");
  if (Number.isFinite(dueAt)) return new Date(dueAt).toDateString() === new Date().toDateString();
  return /сегодня|через/i.test(task.due || "");
}

function serviceManagerLoad(state, name) {
  const status = managerWorkStatus(state, name);
  const appeals = (state.processes || []).filter((process) => process.type === "appeals" && process.owner === name).map((process) => refreshAppealSla(state, process));
  const openAppeals = appeals.filter((process) => !["Решено", "Закрыто без решения"].includes(process.stage));
  const newAppeals = openAppeals.filter((process) => ["Новое обращение", "Требуется классификация"].includes(process.stage) && !process.details?.firstResponseAtISO);
  const inWork = openAppeals.filter((process) => ["Требуется классификация", "В работе", "Ожидается клиент", "Передано в профильный процесс"].includes(process.stage));
  const unclassified = openAppeals.filter((process) => !process.checks?.classified);
  const overdueAppeals = openAppeals.filter((process) => process.slaViolations?.length || process.dueState === "danger");
  const tasks = serviceTaskPool(state).filter((task) => task.owner === name && !task.done);
  const todayTasks = tasks.filter(taskIsToday);
  const overdueTasks = tasks.filter(taskIsOverdue);
  const statusPenalty = status === "На работе / активен" ? 0 : SERVICE_BUSY_FALLBACK_STATUSES.includes(status) ? 4 : 1000;
  const score = newAppeals.length * 2 + inWork.length * 1.5 + todayTasks.length + overdueTasks.length * 3 + unclassified.length * 2 + statusPenalty;
  return { name, status, score, openAppeals, newAppeals, inWork, unclassified, overdueAppeals, tasks, todayTasks, overdueTasks };
}

function isManagerAssignable(state, name, allowBusy = false) {
  const status = managerWorkStatus(state, name);
  return SERVICE_AUTO_ASSIGN_STATUSES.includes(status) || (allowBusy && SERVICE_BUSY_FALLBACK_STATUSES.includes(status));
}

function lastResponsibleServiceManager(state, clientId) {
  if (!clientId || clientId === "cli-unidentified") return "";
  return (state.processes || [])
    .filter((process) => process.type === "appeals" && process.clientId === clientId && SERVICE_MANAGER_NAMES.includes(process.owner))
    .sort((a, b) => Date.parse(b.details?.createdAt || b.createdAt || 0) - Date.parse(a.details?.createdAt || a.createdAt || 0))[0]?.owner || "";
}

function chooseLeastLoadedServiceManager(state, allowBusy = false) {
  const candidates = SERVICE_MANAGER_NAMES.filter((name) => isManagerAssignable(state, name, allowBusy));
  if (!candidates.length && !allowBusy) return chooseLeastLoadedServiceManager(state, true);
  if (!candidates.length) return "";
  return candidates
    .map((name) => serviceManagerLoad(state, name))
    .sort((a, b) => a.score - b.score || a.openAppeals.length - b.openAppeals.length || a.name.localeCompare(b.name, "ru"))[0]?.name || "";
}

function selectServiceManagerForAppeal(state, client) {
  const previousOwner = lastResponsibleServiceManager(state, client?.id);
  if (previousOwner && isManagerAssignable(state, previousOwner)) return { owner: previousOwner, previousOwner, reason: "Повторное обращение клиента" };
  if (SERVICE_MANAGER_NAMES.includes(client?.responsible) && isManagerAssignable(state, client.responsible)) {
    return { owner: client.responsible, previousOwner, reason: "Закреплённый менеджер клиента" };
  }
  const owner = chooseLeastLoadedServiceManager(state);
  if (owner) return { owner, previousOwner, reason: "Распределено по минимальной нагрузке" };
  return { owner: "Диана", previousOwner, reason: "Нет активных менеджеров обслуживания" };
}

function findClientsByContact(state, { phone = "", email = "", bin = "", name = "", contact = "" } = {}) {
  const normalizedPhone = normalizePhone(phone);
  const normalizedBin = normalizePhone(bin);
  const values = [name, contact].map((value) => String(value).trim().toLowerCase()).filter(Boolean);
  return (state.clients || []).filter((client) => {
    const clientPhones = `${client.phone || ""} ${client.contacts || ""}`.replace(/\D/g, "");
    const clientText = `${client.name || ""} ${client.contacts || ""}`.toLowerCase();
    return Boolean(
      (normalizedPhone && clientPhones.includes(normalizedPhone)) ||
        (email && `${client.email || ""} ${client.contacts || ""}`.toLowerCase().includes(email.trim().toLowerCase())) ||
        (normalizedBin && client.bin?.replace(/\D/g, "") === normalizedBin) ||
        values.some((value) => clientText.includes(value)),
    );
  });
}

function ensureUnknownClient(state, phone = "", email = "") {
  state.clients ||= [];
  let client = state.clients.find((item) => item.id === "cli-unidentified");
  if (client) return client;
  client = {
    id: "cli-unidentified",
    name: "Неразобранный контакт",
    bin: "Не указан",
    type: "Обычный юридический клиент",
    contacts: [phone, email].filter(Boolean).join(", ") || "Контакты уточняются",
    phone,
    email,
    products: "Не определено",
    debt: "Не проверено",
    powerUntil: "Не проверено",
    status: "Неразобранный",
    responsible: "",
    supplyMethods: [],
  };
  state.clients.push(client);
  return client;
}

function actorFromName(state, name = "frontend") {
  return (state.users || []).find((user) => user.name === name || user.id === name) || { id: "frontend", name, role: "Frontend" };
}

function auditState(state, action, objectType, objectId, oldValue = "", newValue = "", actorName = "frontend") {
  const actor = actorFromName(state, actorName);
  state.auditLog ||= [];
  state.auditLog.unshift({
    id: uid("audit"),
    userId: actor.id || "frontend",
    user: actor.name || actorName,
    role: actor.role || "Frontend",
    action,
    objectType,
    objectId,
    oldValue: typeof oldValue === "string" ? oldValue : json(oldValue),
    newValue: typeof newValue === "string" ? newValue : json(newValue),
    createdAt: new Date().toISOString(),
    device: "backend-api",
  });
  state.auditLog = state.auditLog.slice(0, 1000);
}

function notifyState(state, userId, title, text, tone = "progress", processId = "") {
  if (!userId) return;
  state.notifications ||= [];
  state.notifications.unshift({ id: uid("notification"), userId, title, text, tone, processId, createdAt: new Date().toISOString(), read: false });
  state.notifications = state.notifications.slice(0, 500);
}

function appealTask(state, process, title, owner = process.owner, dueMinutes = 30, automationKey = "", actorName = "backend") {
  if (automationKey && process.tasks?.some((task) => task.automationKey === automationKey && !task.done)) return null;
  const dueAt = new Date(Date.now() + dueMinutes * 60000).toISOString();
  const task = {
    id: uid("task"),
    automationKey,
    title,
    owner,
    due: dueMinutes < 60 ? `Через ${dueMinutes} мин.` : `Через ${Math.ceil(dueMinutes / 60)} ч.`,
    dueAt,
    priority: process.priority,
    status: "Новая",
    createdBy: actorName,
    createdAt: new Date().toISOString(),
    result: "",
    done: false,
    appealId: process.id,
    clientId: process.clientId,
    linkedProcessId: process.linkedProcessIds?.[0] || "",
  };
  process.tasks ||= [];
  process.tasks.unshift(task);
  auditState(state, "Создана задача из обращения", "task", task.id, "", { appealId: process.id, owner, title }, actorName);
  const ownerUser = (state.users || []).find((user) => user.name === owner);
  notifyState(state, ownerUser?.id || "", "Новая задача по обращению", `${process.id}: ${title}`, process.dueState, process.id);
  return task;
}

function nextProcessId(state, prefix) {
  state.counters ||= {};
  state.counters[prefix] = (state.counters[prefix] || 0) + 1;
  return `${prefix}-${String(state.counters[prefix]).padStart(4, "0")}`;
}

function createInboundAppealOnServer(baseState, payload = {}, actorName = "frontend") {
  const state = structuredClone(baseState);
  state.clients ||= [];
  state.processes ||= [];
  state.users ||= [];
  const kind = payload.kind || "manual";
  const phone = String(payload.phone || "").trim();
  const email = String(payload.email || "").trim();
  const bin = String(payload.bin || "").trim();
  const companyName = String(payload.companyName || "").trim();
  const contactName = String(payload.contactName || "").trim();
  const message = String(payload.message || "").trim();
  const subject = String(payload.subject || "").trim();
  const selectedClientValue = payload.selectedClientValue || "";
  const selectedClient = state.clients.find((client) => client.id === selectedClientValue);
  const matches = selectedClient ? [selectedClient] : findClientsByContact(state, { phone, email, bin, name: companyName, contact: contactName });

  let client;
  if (selectedClientValue === "new") {
    if (!companyName && !contactName) throw new Error("Укажите название компании или контактное лицо для нового клиента.");
    const duplicate = bin && state.clients.find((item) => item.bin?.replace(/\D/g, "") === bin.replace(/\D/g, ""));
    if (duplicate) throw new Error(`Клиент с таким БИН уже существует: ${duplicate.name}`);
    client = {
      id: uid("cli"),
      name: companyName || contactName,
      bin: bin || "Не указан",
      type: "Обычный юридический клиент",
      contacts: contactName || "Не заполнено",
      phone,
      email,
      products: "Не определено",
      debt: "0 ₸",
      powerUntil: "Нет",
      status: "Новый",
      responsible: "",
      supplyMethods: [],
    };
    state.clients.unshift(client);
    auditState(state, "Создание клиента из входящего обращения", "client", client.id, "", { name: client.name, bin: client.bin }, actorName);
  } else {
    client = matches.length === 1 ? matches[0] : ensureUnknownClient(state, phone, email);
  }

  const assignment = selectServiceManagerForAppeal(state, client);
  const owner = assignment.owner || actorName;
  if (client.id !== "cli-unidentified" && !SERVICE_MANAGER_NAMES.includes(client.responsible) && SERVICE_MANAGER_NAMES.includes(owner)) client.responsible = owner;

  const source = kind.includes("call") ? "Телефония" : kind === "whatsapp" ? "WhatsApp" : kind === "email" ? "Email" : payload.manualSource || "Офис";
  const missedCall = kind === "missed-call";
  const completedCall = kind === "completed-call";
  const incomingCall = kind === "incoming-call";
  const communicationStatus = missedCall ? "Пропущенный" : completedCall ? "Завершён" : incomingCall ? "Входящий" : "Получено";
  const inferredTopic = inferAppealClassification(`${subject} ${message}`);
  const fuelText = `${subject} ${message}`.toLowerCase();
  const inferredFuel = /аи-?95/.test(fuelText) ? "АИ-95" : /аи-?98/.test(fuelText) ? "АИ-98" : /дизел|дт/.test(fuelText) ? "ДТ лето" : /газ/.test(fuelText) ? "Автогаз" : "АИ-92";
  const volumeMatch = `${subject} ${message}`.match(/(\d[\d\s]*)\s*(?:л|литр)/i);
  const inferredVolume = volumeMatch ? `${volumeMatch[1].replace(/\s/g, "")} л` : subject || `${source}: входящее обращение`;
  const companyKey = companyByFuel(inferredFuel);
  const id = nextProcessId(state, "APP");
  const priority = missedCall ? "Высокая" : payload.priority || "Обычная";
  const repeatAppeal = client.id !== "cli-unidentified" && Boolean(assignment.previousOwner || state.processes.some((item) => item.type === "appeals" && item.clientId === client.id));
  const now = new Date();
  const process = {
    id,
    type: "appeals",
    clientId: client.id,
    clientType: client.type,
    companyKey,
    direction: companyKey,
    product: productByFuel(inferredFuel),
    fuel: inferredFuel,
    supply: source,
    stage: completedCall ? "Требуется классификация" : "Новое обращение",
    owner,
    due: "",
    dueState: "new",
    priority,
    volume: inferredVolume,
    amount: "Не указано",
    approvalState: "none",
    organizationLocked: false,
    overpayment: "unknown",
    linkedProcessIds: [],
    integration: { source: "Омниканал backend", importedAt: now.toISOString() },
    details: {
      ...defaultProcessDetails("appeals", { supply: source }),
      communicationId: `COM-${Date.now().toString().slice(-8)}`,
      source,
      communicationStatus,
      callDurationSeconds: completedCall ? 186 : 0,
      callRecordingUrl: completedCall ? `mock://recordings/${id}.mp3` : "",
      contactName,
      phone,
      email,
      subject,
      topic: inferredTopic,
      customerMessage: message || (missedCall ? `Пропущенный звонок с номера ${phone || "не определён"}` : subject),
      missedCall,
      firstResponseAt: completedCall ? now.toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit" }) : "",
      firstResponseAtISO: completedCall ? now.toISOString() : "",
      matchedClientIds: matches.map((item) => item.id),
      multipleMatches: matches.length > 1,
      repeatAppeal,
      previousOwner: assignment.previousOwner || "",
      assignmentReason: assignment.reason,
      createdAt: now.toISOString(),
    },
    checks: defaultChecks("appeals"),
    documents: [],
    tasks: [],
    comments: [{ author: source, text: message || subject || communicationStatus, time: "сейчас" }],
    history: [`Создано входящее обращение из канала ${source}.`, `Назначено backend: ${owner}. Основание: ${assignment.reason}.`],
  };
  if (repeatAppeal) process.history.push(`Повторное обращение клиента. Предыдущий ответственный: ${assignment.previousOwner || client.responsible || "не определён"}.`);
  if (completedCall) {
    process.checks.firstResponse = true;
    process.history.push("Звонок завершён — требуется классификация.");
  }

  state.processes.unshift(process);

  if (missedCall) {
    appealTask(state, process, "Перезвонить клиенту", owner, crmSlaSettings(state).missedCallMinutes, "missed-call-callback", actorName);
    process.history.push("Автоматически создана задача «Перезвонить клиенту».");
  } else if (completedCall) {
    appealTask(state, process, "Классифицировать завершённый звонок", owner, crmSlaSettings(state).classificationMinutes, "classification", actorName);
  } else {
    appealTask(state, process, "Дать первый ответ и классифицировать обращение", owner, crmSlaSettings(state).firstResponseMinutes, "first-response", actorName);
  }

  refreshAppealSla(state, process);
  auditState(state, missedCall ? "Пропущен звонок" : "Создано входящее обращение", process.type, id, "", { source, owner, clientId: client.id, communicationStatus, assignmentReason: assignment.reason, repeatAppeal }, actorName);
  const ownerUser = state.users.find((user) => user.name === owner);
  notifyState(state, ownerUser?.id || "", "Новое входящее обращение", `${id}: ${source} · ${client.name}`, process.dueState, id);
  if (missedCall) notifyState(state, "diana", "Пропущенный звонок", `${id}: требуется перезвон`, "warn", id);

  return { state, appeal: process, assignment };
}

function crmSummary(state) {
  if (!state) return { managers: [], totals: { clients: 0, processes: 0, appeals: 0, tasks: 0 } };
  const tasks = serviceTaskPool(state);
  return {
    managers: SERVICE_MANAGER_NAMES.map((name) => {
      const load = serviceManagerLoad(state, name);
      return {
        name: load.name,
        status: load.status,
        score: Math.round(load.score),
        openAppeals: load.openAppeals.length,
        newAppeals: load.newAppeals.length,
        inWork: load.inWork.length,
        unclassified: load.unclassified.length,
        overdueAppeals: load.overdueAppeals.length,
        tasks: load.tasks.length,
        todayTasks: load.todayTasks.length,
        overdueTasks: load.overdueTasks.length,
      };
    }),
    totals: {
      clients: state.clients?.length || 0,
      processes: state.processes?.length || 0,
      appeals: (state.processes || []).filter((process) => process.type === "appeals").length,
      tasks: tasks.length,
      overdueTasks: tasks.filter(taskIsOverdue).length,
    },
  };
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

app.get("/api/crm/summary", (_request, response) => {
  response.json(crmSummary(readState().state));
});

app.get("/api/appeals", (_request, response) => {
  const rows = db
    .prepare("SELECT id, payload_json, updated_at FROM crm_processes WHERE process_type = 'appeals' ORDER BY updated_at DESC")
    .all();
  response.json({ items: rows.map((row) => ({ id: row.id, type: "appeals", updatedAt: row.updated_at, payload: JSON.parse(row.payload_json) })) });
});

app.post("/api/appeals/inbound", (request, response) => {
  const stored = readState().state;
  const baseState = request.body?.state?.clients && request.body?.state?.processes ? request.body.state : stored;
  if (!baseState?.clients || !baseState?.processes) return response.status(400).json({ ok: false, error: "CRM state is not initialized" });
  try {
    const actor = request.body?.actor || "frontend";
    const result = createInboundAppealOnServer(baseState, request.body?.payload || {}, actor);
    const persisted = persistState(result.state, actor);
    response.json({
      ok: true,
      state: persisted.state,
      version: persisted.version,
      updatedAt: persisted.updatedAt,
      appealId: result.appeal.id,
      appeal: result.appeal,
      assignment: result.assignment,
    });
  } catch (error) {
    response.status(400).json({ ok: false, error: error.message });
  }
});

app.post("/api/service-managers/:name/status", (request, response) => {
  const payloadStatus = request.body?.status;
  const name = request.params.name;
  if (!SERVICE_MANAGER_NAMES.includes(name) || !SERVICE_MANAGER_STATUSES.includes(payloadStatus)) {
    return response.status(400).json({ ok: false, error: "Invalid manager status" });
  }
  const current = readState();
  if (!current.state) return response.status(400).json({ ok: false, error: "CRM state is not initialized" });
  const state = structuredClone(current.state);
  state.serviceDesk ||= {};
  state.serviceDesk.managerStatuses ||= {};
  state.serviceDesk.lastShiftAt ||= {};
  const previous = state.serviceDesk.managerStatuses[name] || "Не в сети";
  state.serviceDesk.managerStatuses[name] = payloadStatus;
  state.serviceDesk.lastShiftAt[name] = new Date().toISOString();
  auditState(state, "Изменение рабочего статуса менеджера", "service-manager", name, previous, payloadStatus, request.body?.actor || "backend");
  const persisted = persistState(state, request.body?.actor || "backend");
  response.json({ ok: true, state: persisted.state, version: persisted.version });
});

app.post("/api/events", (request, response) => {
  const eventType = String(request.body?.eventType || "").trim();
  if (!eventType) return response.status(400).json({ ok: false, error: "eventType is required" });
  eventInsert.run({
    eventType,
    actor: request.body?.actor || "frontend",
    payloadJson: json(request.body?.payload || {}),
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
