const STORAGE_KEY = "gazoil-crm-state-v2";

const COMPANY = {
  trade: "ТОО «GAZOIL TRADE»",
  ugh: "ТОО «УГХ GAZOIL»",
};

const CRM_DICTIONARIES = {
  organizations: [
    { key: "trade", label: COMPANY.trade, product: "ГСМ", director: "Хуснутдинов Р. Р.", accounting: "Бухгалтерия GAZOIL TRADE" },
    { key: "ugh", label: COMPANY.ugh, product: "Газ", director: "Киікбай А.Б.", accounting: "Бухгалтерия УГХ GAZOIL" },
  ],
  clientTypes: ["Обычный юридический клиент", "Государственная организация"],
  products: ["ГСМ", "Газ"],
  supplyMethods: ["Талоны", "Товарная карта", "Опт"],
  refundTypes: ["Талоны + деньги", "Товарная карта + деньги", "Только деньги"],
};

const STAFF = [
  { id: "diana", name: "Диана", role: "Старший менеджер", scope: "both" },
  { id: "olga", name: "Ольга", role: "Госзакупщик", scope: "both" },
  { id: "zhanara", name: "Жанара", role: "Менеджер обслуживания клиентов", scope: "both" },
  { id: "elzhan", name: "Ельжан", role: "Менеджер обслуживания клиентов", scope: "both" },
  { id: "ekaterina", name: "Екатерина", role: "Менеджер обслуживания клиентов", scope: "both" },
  { id: "madi", name: "Мади", role: "Руководитель коммерческого отдела", scope: "both" },
  { id: "cash", name: "Касса", role: "Операции с талонами", scope: "both" },
  { id: "card-manager", name: "Главный менеджер", role: "Операции с товарными картами", scope: "both" },
  { id: "bank", name: "Бухгалтер по банку", role: "Банковские возвраты", scope: "both" },
  { id: "trade-accounting", name: "Бухгалтерия GAZOIL TRADE", role: "Финансовая проверка", scope: "trade" },
  { id: "ugh-accounting", name: "Бухгалтерия УГХ GAZOIL", role: "Финансовая проверка", scope: "ugh" },
  { id: "kiikbay", name: "Киікбай А.Б.", role: "Директор УГХ GAZOIL", scope: "ugh" },
  { id: "khusnutdinov", name: "Хуснутдинов Р. Р.", role: "Директор GAZOIL TRADE", scope: "trade" },
];

const FUEL_TYPES = ["АИ-92", "АИ-95", "АИ-98", "ДТ лето", "ДТ зима", "Автогаз"];

const COMPANY_DIRECTOR = {
  trade: "Хуснутдинов Р. Р.",
  ugh: "Киікбай А.Б.",
};

const FUEL_PRICE = {
  "АИ-92": 205,
  "АИ-95": 245,
  "АИ-98": 285,
  "ДТ лето": 295,
  "ДТ зима": 320,
  "Автогаз": 95,
};

const MONTHLY_REVENUE_PLAN = 180000000;
const DEMO_SALES = makeDemoSales();

const PROCESS_META = {
  appeals: {
    label: "Обращение",
    plural: "Обращения клиентов",
    prefix: "APP",
    icon: "inbox",
    stages: ["Новое обращение", "Требуется классификация", "В работе", "Передано в профильный процесс", "Ожидается клиент", "Решено", "Закрыто без решения"],
  },
  contracts: {
    label: "Договор",
    plural: "Договоры",
    prefix: "AGR",
    icon: "file-signature",
    stages: ["Получены реквизиты", "Подготовка договора", "Отправлен клиенту", "Ожидается подписание", "Подписанный договор получен", "Действует", "Скоро истекает", "На перезаключении", "Закрыт без подписания"],
  },
  orders: {
    label: "Заказ",
    plural: "Заказы и выдача топлива",
    prefix: "ORD",
    icon: "fuel",
    stages: ["Новый запрос", "Проверка договора", "Подготовка счета", "Счет сформирован", "Счет отправлен", "Ожидание оплаты", "Оплата подтверждена", "Ожидается доверенность", "Готово к выдаче", "Выдача / пополнение карты", "Документы оформлены", "Ожидается ЭСФ", "Закрыто успешно", "Закрыто без выдачи"],
  },
  extensions: {
    label: "Продление",
    plural: "Продление талонов и ТК",
    prefix: "EXT",
    icon: "refresh-cw",
    stages: ["Новая заявка", "Проверка инициатором", "Ожидаются документы от клиента", "На согласовании у директора", "Возвращено на доработку", "Ожидается ответ клиента", "Передано коммерческому отделу", "Продление в работе", "Передано на кассу", "Принято кассой", "Закрыто успешно", "Закрыто без продления", "Закрыто - передано в возврат"],
  },
  refunds: {
    label: "Возврат",
    plural: "Возвраты денежных средств",
    prefix: "REF",
    icon: "wallet-cards",
    stages: ["Новое обращение", "Проверка инициатором", "Ожидаются документы / данные от клиента", "Аннулирование талонов", "Аннулирование топлива по товарной карте", "Проверка бухгалтерией", "Ожидается подписанный акт сверки / письмо на возврат ДС", "Возвращено на доработку", "На согласовании у директора", "Ожидает банковского возврата", "Возврат произведен", "Закрыто успешно", "Закрыто без возврата денежных средств", "Закрыто без возврата - отказ / невозможность"],
  },
  tenders: {
    label: "Тендер",
    plural: "Тендеры и госзакупки",
    prefix: "TEN",
    icon: "landmark",
    stages: ["Новый тендер", "Проверка госзакупщиком", "Ожидание завершения обсуждения", "Готово к согласованию", "На решении директора", "На доработке", "Участвуем", "Подготовка заявки", "Заявка подана", "Ожидание итогов", "Выиграли", "Из одного источника", "Договор на подготовке", "Договор на подписании", "Договор подписан / закрыто успешно", "Не участвуем", "Проиграли", "Заявка отклонена", "Тендер отменен / не состоялся"],
  },
};

const REPORTS = [
  ["Продажи", "Объемы по ГСМ, газу, талонам, ТК и опту"],
  ["Сроки", "Договоры, доверенности, ЭСФ и дедлайны"],
  ["Просрочки", "SLA по исполнителям и подразделениям"],
  ["Финансы", "Счета, оплаты, задолженность, возвраты"],
  ["Госзакупки", "Воронка найдено -> подано -> выиграно"],
  ["Документы", "Неполные комплекты и обязательные файлы"],
];

const DEFAULT_STATE = {
  selectedClientId: "cli-1",
  counters: { APP: 5520, AGR: 712, ORD: 1289, EXT: 337, REF: 441, TEN: 188 },
  dictionaries: CRM_DICTIONARIES,
  users: STAFF,
  fuels: FUEL_TYPES,
  sales: DEMO_SALES,
  reportPeriod: { start: monthStartISO(), end: todayISO() },
  clients: [
    {
      id: "cli-1",
      name: "Караганда Жол Сервис",
      bin: "120640019874",
      type: "Обычный клиент",
      contacts: "Айжан, +7 701 000 10 20",
      products: "ГСМ, товарные карты",
      debt: "0 ₸",
      powerUntil: "12.08.2026",
    },
    {
      id: "cli-2",
      name: "ГКП Теплотранзит",
      bin: "030940002111",
      type: "Государственная организация",
      contacts: "Канцелярия, tender@teplo.kz",
      products: "Газ, талоны",
      debt: "0 ₸",
      powerUntil: "Требуется",
    },
    {
      id: "cli-3",
      name: "Обл. управление образования",
      bin: "990140006512",
      type: "Государственная организация",
      contacts: "Отдел закупок, zakup@edu.kz",
      products: "ГСМ, ТК",
      debt: "0 ₸",
      powerUntil: "31.12.2026",
    },
    {
      id: "cli-4",
      name: "Qaz Logistic Park",
      bin: "180240015809",
      type: "Обычный клиент",
      contacts: "+7 705 889 44 12",
      products: "ГСМ",
      debt: "245 000 ₸",
      powerUntil: "Нет",
    },
  ],
  processes: [
    {
      id: "ORD-1289",
      type: "orders",
      clientId: "cli-1",
      companyKey: "trade",
      product: "ГСМ",
      fuel: "ДТ лето",
      supply: "Талоны",
      stage: "Ожидается доверенность",
      owner: "Жанара",
      due: "Сегодня 16:00",
      dueState: "warn",
      priority: "Высокая",
      volume: "12 000 л",
      amount: "6 840 000 ₸",
      approvalState: "none",
      checks: { contract: true, invoice: true, payment: true, power: false, docs: false },
      documents: [
        { id: "doc-1", type: "Счет", name: "Счет 1289.pdf", status: "Получен из 1С" },
        { id: "doc-2", type: "Платеж", name: "Оплата 1289", status: "Подтверждена" },
      ],
      tasks: [{ id: "task-1", title: "Получить доверенность клиента", owner: "Жанара", due: "Сегодня 16:00", done: false }],
      comments: [{ author: "Система", text: "Оплата подтверждена в 1С, заказ ожидает доверенность.", time: "09:15" }],
      history: ["Создан заказ из обращения APP-5520", "Счет сформирован в 1С", "Оплата подтверждена"],
    },
    {
      id: "REF-0441",
      type: "refunds",
      clientId: "cli-2",
      companyKey: "ugh",
      product: "Газ",
      fuel: "Автогаз",
      supply: "Талоны + деньги",
      stage: "Проверка бухгалтерией",
      owner: "Ольга",
      due: "Просрочено 1 д.",
      dueState: "danger",
      priority: "Критическая",
      volume: "3 200 л",
      amount: "1 840 000 ₸",
      approvalState: "none",
      checks: { annulment: true, accounting: false, reconciliation: false, director: false, paymentOrder: false },
      documents: [{ id: "doc-3", type: "Акт", name: "Акт возврата талонов.pdf", status: "Прикреплен" }],
      tasks: [{ id: "task-2", title: "Проверить переплату и ЭСФ", owner: "Бухгалтерия УГХ", due: "Вчера", done: false }],
      comments: [{ author: "Касса", text: "Талоны аннулированы, акт прикреплен.", time: "Вчера" }],
      history: ["Заявка создана госзакупщиком", "Передано кассе", "Аннулирование подтверждено"],
    },
    {
      id: "EXT-0337",
      type: "extensions",
      clientId: "cli-3",
      companyKey: "trade",
      product: "ГСМ",
      fuel: "АИ-92",
      supply: "Товарная карта",
      stage: "На согласовании у директора",
      owner: "Ольга",
      due: "Завтра 12:00",
      dueState: "progress",
      priority: "Обычная",
      volume: "8 500 л",
      amount: "Перерасчет 0 ₸",
      approvalState: "pending",
      checks: { clientLetter: true, contractData: true, director: false, clientAnswer: false, extensionDone: false, cash: true },
      documents: [{ id: "doc-4", type: "Письмо", name: "Письмо на продление.pdf", status: "Проверено" }],
      tasks: [{ id: "task-3", title: "Согласовать продление без перерасчета", owner: "Хуснутдинов Р. Р.", due: "Завтра 12:00", done: false }],
      comments: [{ author: "Госзакупщик", text: "По договору допускается продление при согласовании директора.", time: "Сегодня" }],
      history: ["Создана заявка продления", "Документы проверены", "Передано директору"],
    },
    {
      id: "TEN-0188",
      type: "tenders",
      clientId: "cli-2",
      companyKey: "ugh",
      product: "Газ",
      fuel: "Автогаз",
      supply: "Госзакупка",
      stage: "Подготовка заявки",
      owner: "Ольга",
      due: "До дедлайна 3 ч.",
      dueState: "danger",
      priority: "Критическая",
      volume: "42 000 л",
      amount: "24 600 000 ₸",
      approvalState: "approved",
      checks: { discussion: true, director: true, bidReady: false, submitted: false, protocol: false, contract: false },
      documents: [{ id: "doc-5", type: "Техспецификация", name: "Техническая спецификация.docx", status: "Проверяется" }],
      tasks: [{ id: "task-4", title: "Подать заявку до дедлайна", owner: "Айгерим Т.", due: "Через 3 часа", done: false }],
      comments: [{ author: "Киікбай А.Б.", text: "Участвуем, подготовить заявку без задержки.", time: "10:30" }],
      history: ["Тендер найден", "Решение участвовать согласовано", "Создана задача на подачу"],
    },
    {
      id: "AGR-0712",
      type: "contracts",
      clientId: "cli-1",
      companyKey: "trade",
      product: "ГСМ",
      fuel: "АИ-95",
      supply: "Талоны",
      stage: "Скоро истекает",
      owner: "Диана",
      due: "15 дней",
      dueState: "warn",
      priority: "Обычная",
      volume: "Договор ГСМ",
      amount: "Индивидуальная цена",
      approvalState: "none",
      checks: { requisites: true, project: true, signed: true, expiryTask: true },
      documents: [{ id: "doc-6", type: "Договор", name: "Договор GAZOIL TRADE.pdf", status: "Действует" }],
      tasks: [{ id: "task-5", title: "Подготовить перезаключение договора", owner: "Диана", due: "Через 5 дней", done: false }],
      comments: [{ author: "Система", text: "До окончания договора осталось 15 дней.", time: "08:00" }],
      history: ["Договор действует", "Создана задача на перезаключение"],
    },
    {
      id: "APP-5520",
      type: "appeals",
      clientId: "cli-4",
      companyKey: "trade",
      product: "ГСМ",
      fuel: "ДТ лето",
      supply: "WhatsApp",
      stage: "Требуется классификация",
      owner: "Ельжан",
      due: "24 мин.",
      dueState: "new",
      priority: "Обычная",
      volume: "Входящее WhatsApp",
      amount: "Не указано",
      approvalState: "none",
      checks: { classified: false, linked: false, clientAnswer: false },
      documents: [],
      tasks: [{ id: "task-6", title: "Классифицировать входящее обращение", owner: "Ельжан", due: "Сегодня", done: false }],
      comments: [{ author: "WhatsApp", text: "Клиент просит счет на 5 000 литров ДТ.", time: "11:12" }],
      history: ["Создано из WhatsApp"],
    },
  ],
};

let state = loadState();
let activeView = "dashboard";
let currentCompany = "all";
let slaOnly = false;
let activeStage = "";
let modalTab = "data";
let currentModalId = "";

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));
const uid = (prefix) => `${prefix}-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved?.clients && saved?.processes) return migrateState(saved);
  } catch (error) {
    console.warn("State restore failed", error);
  }
  return migrateState(structuredClone(DEFAULT_STATE));
}

function migrateState(saved) {
  const next = { ...structuredClone(DEFAULT_STATE), ...saved };
  next.dictionaries = structuredClone(CRM_DICTIONARIES);
  next.users = STAFF;
  next.fuels = FUEL_TYPES;
  next.sales = saved.sales?.length ? saved.sales : structuredClone(DEMO_SALES);
  next.reportPeriod = saved.reportPeriod || { start: monthStartISO(), end: todayISO() };
  next.counters = { ...DEFAULT_STATE.counters, ...(saved.counters || {}) };
  const ownerMap = {
    "Алия С.": "Жанара",
    "Дина Б.": "Ольга",
    "Руслан Г.": "Ольга",
    "Айгерим Т.": "Ольга",
    "Марат К.": "Диана",
    "Дежурный менеджер": "Жанара",
    "Система": "Ельжан",
    "Директор GAZOIL TRADE": "Хуснутдинов Р. Р.",
    "Директор УГХ": "Киікбай А.Б.",
  };
  next.clients = (saved.clients || DEFAULT_STATE.clients).map((client) => ({
    ...client,
    type: client.type === "Обычный клиент" ? "Обычный юридический клиент" : client.type || "Обычный юридический клиент",
    buysGsm: client.buysGsm ?? String(client.products || "").includes("ГСМ"),
    buysGas: client.buysGas ?? String(client.products || "").includes("Газ"),
    powerFile: client.powerFile || "",
    powerPerson: client.powerPerson || "",
  }));
  next.processes = (saved.processes || []).map((process) => {
    const fuel = process.fuel || inferFuel(process);
    const owner = ownerMap[process.owner] || process.owner || defaultOwnerFor(process.type);
    const client = next.clients.find((item) => item.id === process.clientId);
    const stagePosition = metaFor(process.type).stages.indexOf(process.stage);
    return {
      ...process,
      fuel,
      product: productByFuel(fuel),
      companyKey: companyByFuel(fuel),
      direction: companyByFuel(fuel),
      clientType: process.clientType || client?.type || "Обычный юридический клиент",
      owner,
      organizationLocked: process.organizationLocked ?? stagePosition > 0,
      overpayment: process.overpayment || "unknown",
      linkedProcessIds: process.linkedProcessIds || [],
      integration: {
        source: "1С",
        invoiceNumber: "",
        invoiceDate: "",
        paymentStatus: process.checks?.payment ? "Оплата подтверждена" : "Ожидается",
        paymentDate: "",
        ...(process.integration || {}),
      },
      checks: { ...defaultChecks(process.type), ...(process.checks || {}) },
      documents: process.documents || [],
      tasks: (process.tasks || []).map((task) => ({ ...task, owner: ownerMap[task.owner] || task.owner || owner })),
      comments: process.comments || [],
      history: process.history || ["Карточка импортирована из демо-состояния"],
    };
  });
  return next;
}

function toLocalISO(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function todayISO() {
  return toLocalISO(new Date());
}

function monthStartISO() {
  const now = new Date();
  return toLocalISO(new Date(now.getFullYear(), now.getMonth(), 1));
}

function addDaysISO(baseISO, delta) {
  const [year, month, day] = baseISO.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  date.setDate(date.getDate() + delta);
  return toLocalISO(date);
}

function makeDemoSales() {
  const today = todayISO();
  const rows = [];
  const baseLiters = {
    "АИ-92": 4200,
    "АИ-95": 2300,
    "АИ-98": 420,
    "ДТ лето": 6900,
    "ДТ зима": 260,
    "Автогаз": 5200,
  };
  FUEL_TYPES.forEach((fuel, fuelIndex) => {
    for (let offset = 0; offset < 36; offset += 1) {
      const date = addDaysISO(today, -offset);
      const weekdayFactor = 0.82 + (((offset + fuelIndex * 2) % 7) * 0.055);
      const todayFactor = offset === 0 ? ({ "АИ-92": 0.82, "АИ-95": 1.04, "АИ-98": 0.94, "ДТ лето": 1.18, "ДТ зима": 0.72, "Автогаз": 0.88 }[fuel] || 1) : 1;
      const monthFactor = offset > 18 ? 0.93 : 1;
      const liters = Math.round(baseLiters[fuel] * weekdayFactor * todayFactor * monthFactor);
      rows.push({
        date,
        fuel,
        companyKey: companyByFuel(fuel),
        liters,
        revenue: liters * FUEL_PRICE[fuel],
        deals: Math.max(1, Math.round(liters / (fuel === "Автогаз" ? 1800 : 2200))),
        requests: Math.max(1, Math.round(liters / (fuel === "Автогаз" ? 1400 : 1700))),
      });
    }
  });
  return rows;
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function iconRefresh() {
  if (window.lucide) window.lucide.createIcons();
}

function clientById(id) {
  return state.clients.find((client) => client.id === id) || state.clients[0];
}

function processById(id) {
  return state.processes.find((process) => process.id === id);
}

function metaFor(type) {
  return PROCESS_META[type] || PROCESS_META.orders;
}

function companyLabel(key) {
  return COMPANY[key] || COMPANY.trade;
}

function organizationFor(key) {
  return CRM_DICTIONARIES.organizations.find((item) => item.key === key) || CRM_DICTIONARIES.organizations[0];
}

function companyByFuel(fuel) {
  return fuel === "Автогаз" ? "ugh" : "trade";
}

function productByFuel(fuel) {
  return fuel === "Автогаз" ? "Газ" : "ГСМ";
}

function inferFuel(process) {
  if (process.product === "Газ" || process.companyKey === "ugh") return "Автогаз";
  return process.supply?.includes("ТК") ? "АИ-92" : "ДТ лето";
}

function staffOptions(selected = "", scope = "both") {
  return STAFF.filter((user) => user.scope === "both" || user.scope === scope)
    .map((user) => `<option value="${user.name}" ${user.name === selected ? "selected" : ""}>${user.name} — ${user.role}</option>`)
    .join("");
}

function fuelOptions(selected = "") {
  return FUEL_TYPES.map((fuel) => `<option value="${fuel}" ${fuel === selected ? "selected" : ""}>${fuel}</option>`).join("");
}

function supplyOptions(type, selected = "") {
  const values =
    type === "refunds"
      ? CRM_DICTIONARIES.refundTypes
      : type === "tenders"
        ? ["Госзакупка"]
        : type === "appeals"
          ? ["WhatsApp", "Телефония", "Email", "Офис", "Руководитель", "Иное"]
          : CRM_DICTIONARIES.supplyMethods;
  return values.map((value) => `<option ${value === selected ? "selected" : ""}>${value}</option>`).join("");
}

function defaultOwnerFor(type, clientType = "Обычный юридический клиент") {
  if (type === "tenders" || clientType === "Государственная организация") return "Ольга";
  if (type === "contracts") return "Диана";
  if (type === "refunds" || type === "extensions") return "Ольга";
  return "Жанара";
}

function isOrganizationLocked(process) {
  const firstStage = metaFor(process.type).stages[0];
  return Boolean(process.organizationLocked || process.stage !== firstStage);
}

function hasActiveContract(process) {
  return state.processes.some(
    (item) =>
      item.type === "contracts" &&
      item.clientId === process.clientId &&
      item.companyKey === process.companyKey &&
      item.product === process.product &&
      ["Действует", "Скоро истекает"].includes(item.stage),
  );
}

function accountingOwner(process) {
  return organizationFor(process.companyKey).accounting;
}

function statusClass(status) {
  return {
    new: "is-new",
    progress: "is-progress",
    ok: "is-ok",
    warn: "is-warn",
    danger: "is-danger",
    approved: "is-ok",
    returned: "is-warn",
  }[status] || "is-progress";
}

function processTone(process) {
  if (process.stage.toLowerCase().includes("закрыт") || process.stage.includes("Решено") || process.stage.includes("подписан")) return "ok";
  if (process.dueState === "danger") return "danger";
  if (process.dueState === "warn" || process.approvalState === "pending") return "warn";
  if (process.dueState === "new") return "new";
  return "progress";
}

function processSearchText(process) {
  const client = clientById(process.clientId);
  return [process.id, process.type, process.stage, client.name, client.bin, process.owner, process.product, process.fuel, process.supply, companyLabel(process.companyKey)]
    .join(" ")
    .toLowerCase();
}

function filteredProcesses(type = "") {
  const query = $("#globalSearch")?.value.trim().toLowerCase() || "";
  return state.processes.filter((process) => {
    const typeMatch = !type || process.type === type;
    const companyMatch = currentCompany === "all" || process.companyKey === currentCompany;
    const slaMatch = !slaOnly || process.dueState === "danger";
    const stageMatch = !activeStage || process.stage === activeStage;
    const queryMatch = !query || processSearchText(process).includes(query);
    return typeMatch && companyMatch && slaMatch && stageMatch && queryMatch;
  });
}

function formatCount(value, one, few, many) {
  const n = Math.abs(value) % 100;
  const n1 = n % 10;
  if (n > 10 && n < 20) return many;
  if (n1 > 1 && n1 < 5) return few;
  if (n1 === 1) return one;
  return many;
}

function countBy(predicate) {
  return state.processes.filter(predicate).length;
}

function renderMetrics() {
  const month = aggregateSales(salesInPeriod(monthStartISO(), todayISO()));
  const today = aggregateSales(salesInPeriod(todayISO(), todayISO()));
  const overdue = countBy((item) => item.dueState === "danger");

  $(".metric-grid").innerHTML = [
    ["banknote", "is-green", "Выручка месяца", formatMoney(month.revenue), `${formatPercent(month.revenue / MONTHLY_REVENUE_PLAN)} от плана`],
    ["fuel", "is-blue", "Продано сегодня", formatLiters(today.liters), `${formatMoney(today.revenue)} выручки`],
    ["handshake", "is-amber", "Сделки месяца", month.deals, `${countBy((item) => item.type === "orders")} заказов в CRM`],
    ["circle-alert", "is-red", "Важные риски", overdue, `${countBy((item) => item.approvalState === "pending")} на согласовании`],
  ]
    .map(
      ([icon, tone, label, value, hint]) => `
        <article class="metric-card">
          <span class="metric-icon ${tone}" data-lucide="${icon}"></span>
          <div>
            <p>${label}</p>
            <strong>${value}</strong>
            <small>${hint}</small>
          </div>
        </article>
      `,
    )
    .join("");
}

function sumVolumes(type) {
  const total = state.processes
    .filter((process) => process.type === type)
    .map((process) => Number(String(process.volume).replace(/[^\d]/g, "")))
    .filter(Boolean)
    .reduce((sum, value) => sum + value, 0);
  return total ? `${total.toLocaleString("ru-RU")} л` : "0 л";
}

function salesInPeriod(start, end) {
  return (state.sales || []).filter((row) => row.date >= start && row.date <= end);
}

function aggregateSales(rows) {
  return rows.reduce(
    (acc, row) => {
      acc.revenue += row.revenue || 0;
      acc.liters += row.liters || 0;
      acc.deals += row.deals || 0;
      acc.requests += row.requests || 0;
      acc.byFuel[row.fuel] ||= { fuel: row.fuel, liters: 0, revenue: 0, deals: 0, requests: 0 };
      acc.byFuel[row.fuel].liters += row.liters || 0;
      acc.byFuel[row.fuel].revenue += row.revenue || 0;
      acc.byFuel[row.fuel].deals += row.deals || 0;
      acc.byFuel[row.fuel].requests += row.requests || 0;
      acc.byCompany[row.companyKey] ||= { liters: 0, revenue: 0, deals: 0, requests: 0 };
      acc.byCompany[row.companyKey].liters += row.liters || 0;
      acc.byCompany[row.companyKey].revenue += row.revenue || 0;
      acc.byCompany[row.companyKey].deals += row.deals || 0;
      acc.byCompany[row.companyKey].requests += row.requests || 0;
      return acc;
    },
    { revenue: 0, liters: 0, deals: 0, requests: 0, byFuel: {}, byCompany: {} },
  );
}

function previousSevenDayAverage(fuel) {
  const today = todayISO();
  const rows = (state.sales || []).filter((row) => row.fuel === fuel && row.date < today && row.date >= addDaysISO(today, -7));
  const total = rows.reduce((sum, row) => sum + row.liters, 0);
  return rows.length ? total / rows.length : 0;
}

function formatMoney(value) {
  if (value >= 1000000) return `${(value / 1000000).toLocaleString("ru-RU", { maximumFractionDigits: 1 })} млн ₸`;
  return `${Math.round(value).toLocaleString("ru-RU")} ₸`;
}

function formatLiters(value) {
  if (value >= 1000) return `${Math.round(value).toLocaleString("ru-RU")} л`;
  return `${Math.round(value)} л`;
}

function formatPercent(value) {
  if (!Number.isFinite(value)) return "0%";
  return `${Math.round(value * 100)}%`;
}

function trendInfo(todayLiters, avgLiters) {
  if (!avgLiters) return { pct: 0, label: "нет базы", tone: "progress", direction: "minus" };
  const pct = (todayLiters - avgLiters) / avgLiters;
  if (pct <= -0.12) return { pct, label: `${Math.round(pct * 100)}%`, tone: "danger", direction: "trending-down" };
  if (pct >= 0.12) return { pct, label: `+${Math.round(pct * 100)}%`, tone: "ok", direction: "trending-up" };
  return { pct, label: `${Math.round(pct * 100)}%`, tone: "progress", direction: "minus" };
}

function laneItems(lane) {
  const list = filteredProcesses();
  const isFresh = (process) => process.stage.includes("Нов") || process.stage.includes("классификац") || process.stage.includes("Классификац");
  const isApproval = (process) => process.approvalState === "pending" || process.stage.toLowerCase().includes("соглас") || process.stage.toLowerCase().includes("директор");
  const isCritical = (process) => process.dueState === "danger";
  const isOperation = (process) => ["orders", "refunds", "extensions"].includes(process.type) && !isApproval(process) && !isCritical(process);

  return list.filter((process) => {
    if (lane === "incoming") return isFresh(process);
    if (lane === "approval") return isApproval(process);
    if (lane === "operation") return isOperation(process);
    return isCritical(process);
  });
}

function renderBoard() {
  const lanes = [
    ["incoming", "Входящие"],
    ["approval", "Согласования"],
    ["operation", "Операции"],
    ["critical", "Критичные сроки"],
  ];
  $("#processBoard").innerHTML = lanes
    .map(([key, title]) => {
      const items = laneItems(key);
      const cards = items
        .slice(0, 6)
        .map((process) => {
          const client = clientById(process.clientId);
          return `
            <article class="process-card">
              <span class="status-pill ${statusClass(processTone(process))}">${metaFor(process.type).label}</span>
              <strong>${client.name}</strong>
              <small>${process.stage} · ${process.due}</small>
              <div class="card-actions">
                <button data-open="${process.id}">Открыть</button>
                <button data-next="${process.id}">Дальше</button>
              </div>
            </article>
          `;
        })
        .join("");
      return `
        <div class="process-lane">
          <div class="lane-title"><span>${title}</span><b>${items.length}</b></div>
          ${cards || '<div class="empty-state">Нет карточек по фильтру</div>'}
        </div>
      `;
    })
    .join("");
}

function renderApprovals() {
  const items = state.processes.filter((process) => process.approvalState === "pending" || process.stage.toLowerCase().includes("директор"));
  $("#approvalList").innerHTML =
    items
      .slice(0, 6)
      .map((process) => {
        const client = clientById(process.clientId);
        return `
          <article class="approval-item">
            <header>
              <strong>${metaFor(process.type).label}: ${client.name}</strong>
              <span class="status-pill ${statusClass(processTone(process))}">${process.due}</span>
            </header>
            <p>${companyLabel(process.companyKey)} · ${process.stage}</p>
            <div class="approval-actions">
              <button data-approve="${process.id}">Согласовать</button>
              <button data-return="${process.id}">Вернуть</button>
            </div>
          </article>
        `;
      })
      .join("") || '<div class="empty-state">Очередь согласований пуста</div>';
}

function renderExecutiveDashboard() {
  renderLeaderSummary();
  renderFuelSalesToday();
  renderPeriodReport();
  renderSalesAlerts();
}

function renderLeaderSummary() {
  if (!$("#leaderSummary")) return;
  const month = aggregateSales(salesInPeriod(monthStartISO(), todayISO()));
  const today = aggregateSales(salesInPeriod(todayISO(), todayISO()));
  const planPct = Math.min(100, Math.round((month.revenue / MONTHLY_REVENUE_PLAN) * 100));
  $("#monthLabel").textContent = new Date().toLocaleDateString("ru-RU", { month: "long", year: "numeric" });
  const trade = month.byCompany.trade || { revenue: 0, liters: 0 };
  const ugh = month.byCompany.ugh || { revenue: 0, liters: 0 };
  $("#leaderSummary").innerHTML = `
    <div class="summary-hero">
      <div>
        <span>Выручка за месяц</span>
        <strong>${formatMoney(month.revenue)}</strong>
        <p>Сегодня: ${formatMoney(today.revenue)} · ${formatLiters(today.liters)}</p>
      </div>
      <div class="plan-ring" style="--value:${planPct}%">
        <b>${planPct}%</b>
        <span>плана</span>
      </div>
    </div>
    <div class="summary-split">
      <div>
        <span>${COMPANY.trade}</span>
        <strong>${formatMoney(trade.revenue)}</strong>
        <p>${formatLiters(trade.liters)}</p>
      </div>
      <div>
        <span>${COMPANY.ugh}</span>
        <strong>${formatMoney(ugh.revenue)}</strong>
        <p>${formatLiters(ugh.liters)}</p>
      </div>
      <div>
        <span>Сделки / заявки</span>
        <strong>${month.deals} / ${month.requests}</strong>
        <p>${state.processes.length} активных CRM-карточек</p>
      </div>
    </div>
  `;
}

function renderFuelSalesToday() {
  if (!$("#fuelSalesToday")) return;
  const today = aggregateSales(salesInPeriod(todayISO(), todayISO()));
  const maxLiters = Math.max(...FUEL_TYPES.map((fuel) => today.byFuel[fuel]?.liters || 0), 1);
  $("#fuelSalesToday").innerHTML = FUEL_TYPES.map((fuel) => {
    const row = today.byFuel[fuel] || { liters: 0, revenue: 0, deals: 0 };
    const trend = trendInfo(row.liters, previousSevenDayAverage(fuel));
    const width = Math.max(4, Math.round((row.liters / maxLiters) * 100));
    return `
      <article class="fuel-row">
        <div class="fuel-row-head">
          <strong>${fuel}</strong>
          <span class="status-pill ${statusClass(trend.tone)}"><i data-lucide="${trend.direction}"></i>${trend.label}</span>
        </div>
        <div class="fuel-bar"><span style="width:${width}%"></span></div>
        <div class="fuel-row-foot">
          <span>${formatLiters(row.liters)}</span>
          <b>${formatMoney(row.revenue)}</b>
          <em>${row.deals} ${formatCount(row.deals, "сделка", "сделки", "сделок")}</em>
        </div>
      </article>
    `;
  }).join("");
}

function renderPeriodReport() {
  if (!$("#periodReport")) return;
  $("#reportStart").value = state.reportPeriod.start;
  $("#reportEnd").value = state.reportPeriod.end;
  const period = aggregateSales(salesInPeriod(state.reportPeriod.start, state.reportPeriod.end));
  const fuels = Object.values(period.byFuel).sort((a, b) => b.revenue - a.revenue);
  $("#periodReport").innerHTML = `
    <div class="period-summary">
      <div><span>Выручка</span><strong>${formatMoney(period.revenue)}</strong></div>
      <div><span>Литры</span><strong>${formatLiters(period.liters)}</strong></div>
      <div><span>Сделки</span><strong>${period.deals}</strong></div>
      <div><span>Заявки</span><strong>${period.requests}</strong></div>
    </div>
    <div class="mini-table">
      ${fuels
        .map(
          (fuel) => `
            <div>
              <span>${fuel.fuel}</span>
              <b>${formatLiters(fuel.liters)}</b>
              <strong>${formatMoney(fuel.revenue)}</strong>
            </div>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderSalesAlerts() {
  if (!$("#salesAlerts")) return;
  const alerts = buildSalesAlerts();
  $("#alertCount").textContent = alerts.length;
  $("#salesAlerts").innerHTML =
    alerts
      .map(
        (alert) => `
          <article class="alert-item ${alert.tone}">
            <span data-lucide="${alert.icon}"></span>
            <div>
              <strong>${alert.title}</strong>
              <p>${alert.text}</p>
            </div>
          </article>
        `,
      )
      .join("") || '<div class="empty-state">Критичных уведомлений нет</div>';
}

function buildSalesAlerts() {
  const alerts = [];
  const today = aggregateSales(salesInPeriod(todayISO(), todayISO()));
  FUEL_TYPES.forEach((fuel) => {
    const todayLiters = today.byFuel[fuel]?.liters || 0;
    const avg = previousSevenDayAverage(fuel);
    const trend = trendInfo(todayLiters, avg);
    if (trend.tone === "danger") {
      alerts.push({
        tone: "danger",
        icon: "trending-down",
        title: `Снижение продаж: ${fuel}`,
        text: `Сегодня ${formatLiters(todayLiters)}, ниже среднего за 7 дней на ${Math.abs(Math.round(trend.pct * 100))}%.`,
      });
    }
    if (trend.tone === "ok") {
      alerts.push({
        tone: "ok",
        icon: "trending-up",
        title: `Рост продаж: ${fuel}`,
        text: `Сегодня ${formatLiters(todayLiters)}, выше среднего за 7 дней на ${Math.round(trend.pct * 100)}%.`,
      });
    }
  });
  const month = aggregateSales(salesInPeriod(monthStartISO(), todayISO()));
  const dayOfMonth = new Date().getDate();
  const expectedPlan = MONTHLY_REVENUE_PLAN * (dayOfMonth / 30);
  if (month.revenue < expectedPlan * 0.9) {
    alerts.unshift({
      tone: "warn",
      icon: "circle-alert",
      title: "Риск недовыполнения плана месяца",
      text: `Факт ${formatMoney(month.revenue)} против ожидаемых ${formatMoney(expectedPlan)} на текущую дату.`,
    });
  }
  const overdue = countBy((item) => item.dueState === "danger");
  if (overdue) {
    alerts.unshift({
      tone: "danger",
      icon: "timer-reset",
      title: "Просрочки в процессах",
      text: `${overdue} ${formatCount(overdue, "карточка требует", "карточки требуют", "карточек требуют")} внимания руководителя.`,
    });
  }
  return alerts.slice(0, 7);
}

function renderRequestTable() {
  const rows = filteredProcesses()
    .map((process) => {
      const client = clientById(process.clientId);
      return `
        <tr>
          <td data-label="Заявка"><strong>${process.id}</strong></td>
          <td data-label="Клиент">${client.name}</td>
          <td data-label="Процесс">${metaFor(process.type).label}</td>
          <td data-label="Компания">${companyLabel(process.companyKey)}</td>
          <td data-label="Стадия"><span class="status-pill ${statusClass(processTone(process))}">${process.stage}</span></td>
          <td data-label="Ответственный">${process.owner}</td>
          <td data-label="SLA">${process.due}</td>
          <td data-label=""><button class="row-action" data-open="${process.id}">Открыть</button></td>
        </tr>
      `;
    })
    .join("");
  $("#requestTable").innerHTML = rows || `<tr><td colspan="8"><div class="empty-state">Ничего не найдено</div></td></tr>`;
}

function renderClients() {
  $("#clientList").innerHTML = state.clients
    .map((client) => {
      const processes = state.processes.filter((item) => item.clientId === client.id);
      const tone = client.id === state.selectedClientId ? "is-progress" : processes.some((item) => item.dueState === "danger") ? "is-danger" : "is-ok";
      return `
        <article class="client-card ${client.id === state.selectedClientId ? "is-selected" : ""}" data-client="${client.id}">
          <header>
            <strong>${client.name}</strong>
            <span class="status-pill ${tone}">${processes.length} ${formatCount(processes.length, "процесс", "процесса", "процессов")}</span>
          </header>
          <span>БИН ${client.bin} · ${client.type}</span>
        </article>
      `;
    })
    .join("");
  renderClientProfile();
}

function renderClientProfile() {
  const profile = $(".client-profile");
  if (!profile) return;
  const client = clientById(state.selectedClientId);
  const items = state.processes.filter((process) => process.clientId === client.id);
  const contracts = items.filter((item) => item.type === "contracts").length;
  const orders = items.filter((item) => item.type === "orders").length;
  const lastEvents = items.flatMap((item) => item.history.slice(-2).map((event) => [item.id, event])).slice(-5).reverse();
  profile.innerHTML = `
    <div class="profile-head">
      <div class="company-avatar">${client.name.slice(0, 1)}</div>
      <div>
        <span class="eyebrow">Карточка клиента</span>
        <h2>${client.name}</h2>
        <p>БИН ${client.bin} · ${client.products}</p>
      </div>
    </div>
    <div class="profile-grid">
      <div><span>Договоров</span><strong>${contracts}</strong></div>
      <div><span>Активных процессов</span><strong>${items.length}</strong></div>
      <div><span>Доверенность</span><strong>${client.powerUntil}</strong></div>
      <div><span>Дебиторка</span><strong>${client.debt}</strong></div>
    </div>
    <div class="client-meta">
      <b>${client.type}</b>
      <span>${client.contacts}</span>
    </div>
    <div class="timeline">
      ${
        lastEvents.length
          ? lastEvents.map(([id, event]) => `<div><b>${id}</b><span>${event}</span></div>`).join("")
          : '<div><b>CRM</b><span>История появится после первого действия.</span></div>'
      }
    </div>
  `;
}

function renderGeneric(viewName = activeView) {
  if (viewName === "reports") return renderReports();
  const config = metaFor(viewName);
  $("#genericTitle").textContent = config.plural;
  $("#genericEyebrow").textContent = "Рабочий реестр";
  $("#genericAction span:last-child").textContent = config.label;

  const all = filteredProcesses(viewName);
  $("#stageColumn").innerHTML = config.stages
    .map((stage) => {
      const count = filteredProcesses(viewName).filter((process) => process.stage === stage).length;
      const active = activeStage === stage;
      const tone = stage.toLowerCase().includes("закрыто") ? "is-ok" : stage.toLowerCase().includes("соглас") || stage.toLowerCase().includes("директор") ? "is-warn" : "";
      return `
        <article class="stage-item ${tone} ${active ? "is-selected" : ""}" data-stage-filter="${stage}">
          <strong>${stage}</strong>
          <p>${count} ${formatCount(count, "карточка", "карточки", "карточек")} · нажмите для фильтра</p>
        </article>
      `;
    })
    .join("");

  $("#genericTable").innerHTML =
    all
      .map((process) => {
        const client = clientById(process.clientId);
        return `
          <tr>
            <td data-label="Номер"><strong>${process.id}</strong></td>
            <td data-label="Клиент">${client.name}</td>
            <td data-label="Стадия"><span class="status-pill ${statusClass(processTone(process))}">${process.stage}</span></td>
            <td data-label="Сумма / объем">${process.amount || process.volume}</td>
            <td data-label="Ответственный">${process.owner}</td>
            <td data-label="Срок">${process.due}</td>
            <td data-label=""><button class="row-action" data-open="${process.id}">Открыть</button></td>
          </tr>
        `;
      })
      .join("") || `<tr><td colspan="7"><div class="empty-state">В этом разделе пока нет карточек</div></td></tr>`;
}

function renderReports() {
  $("#genericTitle").textContent = "Отчеты и аналитика";
  $("#genericEyebrow").textContent = "Руководителю";
  $("#genericAction span:last-child").textContent = "Отчет";
  $("#stageColumn").innerHTML = REPORTS.map(
    ([title, hint], index) => `
      <article class="stage-item ${index === 2 ? "is-danger" : index === 3 ? "is-warn" : ""}">
        <strong>${title}</strong>
        <p>${hint}</p>
      </article>
    `,
  ).join("");

  const rows = [
    ["Найдено тендеров", countBy((item) => item.type === "tenders"), "конверсия к победе", "33%"],
    ["Активные заказы", countBy((item) => item.type === "orders" && !item.stage.includes("Закрыто")), "объем", sumVolumes("orders")],
    ["Возвраты в работе", countBy((item) => item.type === "refunds" && !item.stage.includes("Закрыто")), "сумма", sumAmounts("refunds")],
    ["Продления", countBy((item) => item.type === "extensions"), "на согласовании", countBy((item) => item.type === "extensions" && item.approvalState === "pending")],
    ["Просрочки", countBy((item) => item.dueState === "danger"), "уведомления", "отправлены"],
  ];

  $("#genericTable").innerHTML = rows
    .map(
      ([name, value, note, result]) => `
        <tr>
          <td data-label="Отчет"><strong>${name}</strong></td>
          <td data-label="Значение">${value}</td>
          <td data-label="Показатель"><span class="status-pill is-progress">${note}</span></td>
          <td data-label="Результат">${result}</td>
          <td data-label="Источник">CRM</td>
          <td data-label="Период">Сейчас</td>
          <td data-label=""><button class="row-action" data-toast="Детальный отчет будет отдельным экраном">Открыть</button></td>
        </tr>
      `,
    )
    .join("");
}

function sumAmounts(type) {
  const total = state.processes
    .filter((process) => process.type === type)
    .map((process) => Number(String(process.amount).replace(/[^\d]/g, "")))
    .filter(Boolean)
    .reduce((sum, value) => sum + value, 0);
  return total ? `${total.toLocaleString("ru-RU")} ₸` : "0 ₸";
}

function renderAll() {
  renderMetrics();
  renderExecutiveDashboard();
  renderBoard();
  renderApprovals();
  renderRequestTable();
  renderClients();
  if (!["dashboard", "clients"].includes(activeView)) renderGeneric(activeView);
  iconRefresh();
}

function stageIndex(process) {
  return metaFor(process.type).stages.indexOf(process.stage);
}

function requiresPower(process) {
  if (process.product === "Газ") return true;
  return process.product === "ГСМ" && process.supply === "Талоны";
}

function transition(key, label, to, options = {}) {
  return { key, label, to, tone: "primary", requirements: [], ...options };
}

function linearTransition(process, options = {}) {
  const stages = metaFor(process.type).stages;
  const index = stageIndex(process);
  const to = stages[index + 1];
  return to ? [transition(`to-${index + 1}`, options.label || "Следующая стадия", to, options)] : [];
}

function availableTransitions(process) {
  const { type, stage } = process;

  if (type === "appeals") {
    if (stage === "Требуется классификация") return [transition("classify", "Начать работу", "В работе", { requirements: ["classified"] })];
    if (stage === "В работе") {
      return [
        transition("appeal-transfer", "Передать в профильный процесс", "Передано в профильный процесс", { requirements: ["linked"] }),
        transition("appeal-wait", "Ожидать клиента", "Ожидается клиент", { tone: "secondary" }),
        transition("appeal-resolve", "Решить обращение", "Решено", { tone: "success" }),
      ];
    }
    if (stage === "Ожидается клиент") return [transition("appeal-resume", "Ответ получен", "В работе", { requirements: ["clientAnswer"] })];
  }

  if (type === "contracts" && stage === "Подписанный договор получен") {
    return [transition("contract-activate", "Активировать договор", "Действует", { requirements: ["signed"], tone: "success" })];
  }
  if (type === "contracts" && stage === "Получены реквизиты") {
    return [transition("contract-draft", "Начать подготовку", "Подготовка договора", { requirements: ["requisites"] })];
  }
  if (type === "contracts" && stage === "Подготовка договора") {
    return [transition("contract-send", "Отправить клиенту", "Отправлен клиенту", { requirements: ["project"] })];
  }

  if (type === "orders") {
    if (stage === "Проверка договора") return [transition("order-contract-ok", "Договор проверен", "Подготовка счета", { requirements: ["activeContract"] })];
    if (stage === "Подготовка счета") return [transition("order-invoice", "Счёт получен из 1С", "Счет сформирован", { requirements: ["invoice"] })];
    if (stage === "Ожидание оплаты") return [transition("order-paid", "Оплата подтверждена", "Оплата подтверждена", { requirements: ["payment"] })];
    if (stage === "Оплата подтверждена") {
      return [
        requiresPower(process) && !process.checks.power
          ? transition("order-power", "Запросить доверенность", "Ожидается доверенность", { tone: "secondary" })
          : transition("order-ready", "Подготовить к выдаче", "Готово к выдаче", { tone: "success" }),
      ];
    }
    if (stage === "Ожидается доверенность") return [transition("order-power-ready", "Доверенность получена", "Готово к выдаче", { requirements: ["power"] })];
    if (stage === "Ожидается ЭСФ") return [transition("order-close", "Закрыть выдачу", "Закрыто успешно", { requirements: ["docs", "esf"], tone: "success" })];
  }

  if (type === "extensions") {
    if (stage === "Ожидаются документы от клиента") {
      return [transition("extension-director", "Передать директору", "На согласовании у директора", { requirements: ["clientLetter", "contractData"] })];
    }
    if (stage === "На согласовании у директора") return [];
    if (stage === "Ожидается ответ клиента") {
      return [
        transition("extension-accepted", "Клиент согласен", "Передано коммерческому отделу", { requirements: ["clientAnswer"], tone: "success" }),
        transition("extension-refund", "Отказ — оформить возврат", "Закрыто - передано в возврат", {
          requirements: ["clientAnswer"],
          action: "createRefund",
          tone: "secondary",
        }),
        transition("extension-declined", "Отказ без возврата", "Закрыто без продления", { requirements: ["clientAnswer"], tone: "secondary" }),
      ];
    }
    if (stage === "Продление в работе" && process.checks.cash) {
      return [transition("extension-finish", "Продление выполнено", "Закрыто успешно", { requirements: ["extensionDone"], tone: "success" })];
    }
    if (stage === "Принято кассой") return [transition("extension-cash-finish", "Закрыть продление", "Закрыто успешно", { requirements: ["extensionDone", "cash"], tone: "success" })];
  }

  if (type === "refunds") {
    if (stage === "Ожидаются документы / данные от клиента") {
      if (process.supply === "Только деньги") return [transition("refund-accounting-direct", "Передать в бухгалтерию", "Проверка бухгалтерией", { requirements: ["clientLetter"] })];
      if (process.supply.includes("карт")) return [transition("refund-annul-card", "Аннулировать топливо на карте", "Аннулирование топлива по товарной карте", { requirements: ["clientLetter"] })];
      return [transition("refund-annul-coupons", "Передать талоны на аннулирование", "Аннулирование талонов", { requirements: ["clientLetter"] })];
    }
    if (stage === "Аннулирование талонов" || stage === "Аннулирование топлива по товарной карте") {
      return [transition("refund-accounting", "Передать в бухгалтерию", "Проверка бухгалтерией", { requirements: ["annulment"] })];
    }
    if (stage === "Проверка бухгалтерией") {
      if (process.overpayment === "yes") {
        return [transition("refund-overpayment", "Запросить акт и письмо", "Ожидается подписанный акт сверки / письмо на возврат ДС", { requirements: ["accounting"] })];
      }
      if (process.overpayment === "no") {
        return [transition("refund-no-overpayment", "Закрыть без банковского возврата", "Закрыто без возврата денежных средств", {
          requirements: process.supply === "Только деньги" ? ["accounting"] : ["accounting", "annulment"],
          tone: "secondary",
        })];
      }
      return [];
    }
    if (stage === "Ожидается подписанный акт сверки / письмо на возврат ДС") {
      return [transition("refund-director", "Передать директору", "На согласовании у директора", { requirements: ["reconciliation", "clientLetter"] })];
    }
    if (stage === "На согласовании у директора") return [];
    if (stage === "Возврат произведен") {
      return [transition("refund-close", "Закрыть возврат", "Закрыто успешно", { requirements: ["paymentOrder"], tone: "success" })];
    }
  }

  if (type === "tenders") {
    if (stage === "Ожидание завершения обсуждения") {
      return [transition("tender-discussion", "Обсуждение завершено", "Готово к согласованию", { requirements: ["discussion"] })];
    }
    if (stage === "Готово к согласованию") {
      return [transition("tender-director", "Передать директору", "На решении директора", { requirements: ["discussion"] })];
    }
    if (stage === "На решении директора") return [];
    if (stage === "Подготовка заявки") return [transition("tender-submit", "Подать заявку", "Заявка подана", { requirements: ["bidReady", "submitted"] })];
    if (stage === "Ожидание итогов") {
      return [
        transition("tender-won", "Выиграли", "Выиграли", { tone: "success" }),
        transition("tender-single", "Из одного источника", "Из одного источника", { tone: "secondary" }),
        transition("tender-lost", "Проиграли", "Проиграли", { tone: "secondary" }),
        transition("tender-rejected", "Заявка отклонена", "Заявка отклонена", { tone: "secondary" }),
        transition("tender-cancelled", "Тендер отменён", "Тендер отменен / не состоялся", { tone: "secondary" }),
      ];
    }
    if (stage === "Выиграли") {
      return [transition("tender-contract", "Создать связанный договор", "Договор на подготовке", { action: "createContract", tone: "success" })];
    }
    if (stage === "Из одного источника") {
      return [transition("tender-reopen", "Вернуть в работу", "Проверка госзакупщиком")];
    }
  }

  const terminal = ["Решено", "Закрыт", "Проиграли", "Заявка отклонена", "Тендер отменен"].some((value) => stage.includes(value));
  if (terminal) return [];
  return linearTransition(process);
}

function validateTransition(process, target) {
  const messages = {
    classified: "Сначала классифицируйте обращение.",
    linked: "Сначала создайте и свяжите профильный процесс.",
    clientAnswer: "Зафиксируйте ответ клиента.",
    signed: "Нужен файл подписанного договора.",
    requisites: "Сначала заполните реквизиты клиента.",
    project: "Перед отправкой нужен файл проекта договора.",
    activeContract: "Заказ заблокирован: у клиента нет действующего договора по этому продукту и юрлицу.",
    invoice: "Счёт ещё не получен из 1С.",
    payment: "Оплата ещё не подтверждена в 1С.",
    power: "Нужна действующая доверенность.",
    docs: "Не подтверждён комплект документов выдачи.",
    esf: "Не подтверждено оформление ЭСФ.",
    extensionDone: "Не подтверждён факт продления.",
    cash: "Касса ещё не подтвердила приём.",
    accounting: "Бухгалтерия не завершила финансовую проверку.",
    annulment: "Аннулирование не подтверждено.",
    reconciliation: "Нет подписанного акта сверки.",
    clientLetter: "Не приложено письмо клиента.",
    paymentOrder: "Нет даты, номера или файла платёжного поручения.",
    discussion: "Не завершено обсуждение или не заполнен срок подачи.",
    contractData: "Не заполнены договор, объём, цены или условия.",
    bidReady: "Заявка ещё не готова.",
    submitted: "Не зафиксированы дата, время и подтверждение подачи.",
  };
  for (const requirement of target.requirements || []) {
    const passed = requirement === "activeContract" ? hasActiveContract(process) : process.checks?.[requirement];
    if (!passed) return messages[requirement] || `Не выполнено условие: ${requirement}`;
  }
  return "";
}

function createLinkedProcess(source, targetType) {
  const existingId = source.linkedProcessIds?.find((id) => processById(id)?.type === targetType);
  if (existingId) return processById(existingId);
  const meta = metaFor(targetType);
  state.counters[meta.prefix] = (state.counters[meta.prefix] || 0) + 1;
  const id = `${meta.prefix}-${String(state.counters[meta.prefix]).padStart(4, "0")}`;
  const clientType = source.clientType || clientById(source.clientId).type;
  const linked = {
    id,
    type: targetType,
    clientId: source.clientId,
    clientType,
    companyKey: source.companyKey,
    direction: source.companyKey,
    product: source.product,
    fuel: source.fuel,
    supply: targetType === "refunds" ? (source.supply.includes("карт") ? "Товарная карта + деньги" : "Талоны + деньги") : source.supply,
    stage: meta.stages[0],
    owner: defaultOwnerFor(targetType, clientType),
    due: "1 рабочий день",
    dueState: "new",
    priority: source.priority,
    volume: source.volume,
    amount: source.amount,
    approvalState: "none",
    organizationLocked: true,
    overpayment: "unknown",
    linkedProcessIds: [source.id],
    integration: { source: "1С", invoiceNumber: "", invoiceDate: "", paymentStatus: "Ожидается", paymentDate: "" },
    checks: defaultChecks(targetType),
    documents: [],
    tasks: [{ id: uid("task"), title: `Проверить связанную карточку из ${source.id}`, owner: defaultOwnerFor(targetType, clientType), due: "Сегодня", done: false }],
    comments: [{ author: "Система", text: `Карточка создана автоматически из ${source.id}.`, time: "сейчас" }],
    history: [`Автоматически создано из ${source.id} без повторного ввода данных.`],
  };
  source.linkedProcessIds ||= [];
  source.linkedProcessIds.push(id);
  source.checks.linked = true;
  state.processes.unshift(linked);
  return linked;
}

function applyTransition(process, target) {
  const error = validateTransition(process, target);
  if (error) {
    toast(error, "warn");
    openProcessModal(process.id, "data");
    return false;
  }
  const previousStage = process.stage;
  process.stage = target.to;
  process.organizationLocked = true;
  process.direction = process.companyKey;
  process.approvalState = target.to.toLowerCase().includes("директор") ? "pending" : process.approvalState === "pending" ? "none" : process.approvalState;

  if (target.to.includes("бухгалтер")) process.owner = accountingOwner(process);
  if (target.to.includes("директор")) process.owner = organizationFor(process.companyKey).director;
  if (target.to.includes("касс") || target.to === "Аннулирование талонов") process.owner = "Касса";
  if (target.to.includes("товарной карте")) process.owner = "Главный менеджер";
  if (target.to.includes("банковского возврата")) process.owner = "Бухгалтер по банку";
  if (target.action === "createContract") createLinkedProcess(process, "contracts");
  if (target.action === "createRefund") createLinkedProcess(process, "refunds");

  if (target.to.toLowerCase().includes("закрыт") || target.to === "Решено") process.dueState = "ok";
  process.history.push(`Маршрут: «${previousStage}» → «${target.to}» (${target.label}).`);
  saveState();
  renderAll();
  if (currentModalId === process.id) openProcessModal(process.id, modalTab);
  toast(`${process.id}: ${target.to}`, target.tone === "success" ? "ok" : "progress");
  return true;
}

function performTransition(id, key) {
  const process = processById(id);
  if (!process) return;
  const target = availableTransitions(process).find((item) => item.key === key);
  if (!target) return toast("Этот переход больше недоступен.", "warn");
  applyTransition(process, target);
}

function advanceProcess(id) {
  const process = processById(id);
  if (!process) return;
  const options = availableTransitions(process);
  if (!options.length) {
    openProcessModal(id, "data");
    return toast("Для этой стадии нужен выбор решения или выполнены не все условия.", "warn");
  }
  if (options.length > 1) {
    openProcessModal(id, "data");
    return toast("Выберите один из доступных маршрутов в карточке.", "progress");
  }
  applyTransition(process, options[0]);
}

function previousProcess(id) {
  const process = processById(id);
  if (!process) return;
  const stages = metaFor(process.type).stages;
  const index = stageIndex(process);
  if (index <= 0) return toast("Это первая стадия процесса.", "warn");
  process.stage = stages[index - 1];
  process.history.push(`Возврат на стадию «${process.stage}»`);
  saveState();
  renderAll();
  openProcessModal(id, modalTab);
}

function approveProcess(id) {
  const process = processById(id);
  if (!process) return;
  if (process.type === "refunds" && (!process.checks.accounting || !process.checks.reconciliation)) {
    openProcessModal(id, "data");
    return toast("Для согласования возврата нужны финансовая проверка и подписанный акт сверки.", "warn");
  }
  process.approvalState = "approved";
  process.checks.director = true;
  process.history.push("Директор согласовал заявку");
  if (process.type === "tenders") process.stage = "Участвуем";
  else if (process.type === "extensions") process.stage = "Ожидается ответ клиента";
  else if (process.type === "refunds") process.stage = "Ожидает банковского возврата";
  else {
    const next = metaFor(process.type).stages[stageIndex(process) + 1];
    if (next) process.stage = next;
  }
  process.organizationLocked = true;
  process.owner = process.type === "refunds" ? "Бухгалтер по банку" : process.clientType === "Государственная организация" ? "Ольга" : defaultOwnerFor(process.type, process.clientType);
  process.comments.unshift({ author: "Директор", text: "Согласовано. Передать на следующий этап.", time: "сейчас" });
  saveState();
  renderAll();
  if (currentModalId === id) openProcessModal(id, modalTab);
  toast(`Согласовано: ${id}`, "ok");
}

function returnProcess(id) {
  const process = processById(id);
  if (!process) return;
  process.approvalState = "returned";
  process.dueState = "warn";
  const returnedStage = metaFor(process.type).stages.find((stage) => stage.toLowerCase().includes("доработ"));
  if (returnedStage) process.stage = returnedStage;
  process.tasks.unshift({ id: uid("task"), title: "Исправить замечания согласующего", owner: process.owner, due: "Сегодня", done: false });
  process.comments.unshift({ author: "Директор", text: "Вернуть на доработку, требуется уточнение данных.", time: "сейчас" });
  process.history.push("Заявка возвращена на доработку");
  saveState();
  renderAll();
  if (currentModalId === id) openProcessModal(id, "tasks");
  toast(`Возвращено на доработку: ${id}`, "warn");
}

function openProcessModal(id, tab = "data") {
  const process = processById(id);
  if (!process) return;
  currentModalId = id;
  modalTab = tab;
  const client = clientById(process.clientId);
  const routes = availableTransitions(process);
  const modal = $("#requestModal");
  modal.innerHTML = `
    <article class="modal is-wide" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
      <header class="modal-header">
        <div>
          <span class="eyebrow">Карточка процесса</span>
          <h2 id="modalTitle">${process.id} · ${client.name}</h2>
        </div>
        <button class="icon-button" data-close-modal title="Закрыть" aria-label="Закрыть"><span data-lucide="x"></span></button>
      </header>
      <div class="modal-status">
        <span class="status-pill ${statusClass(processTone(process))}">${metaFor(process.type).label}</span>
        <span>${process.stage}</span>
        <b>SLA: ${process.due}</b>
      </div>
      <div class="modal-tabs" role="tablist">
        ${[
          ["data", "Данные"],
          ["docs", `Документы (${process.documents.length})`],
          ["tasks", `Задачи (${process.tasks.filter((task) => !task.done).length})`],
          ["comments", `История (${process.comments.length})`],
        ]
          .map(([key, label]) => `<button class="${tab === key ? "is-selected" : ""}" data-modal-tab="${key}">${label}</button>`)
          .join("")}
      </div>
      <div class="modal-body">${renderModalTab(process, tab)}</div>
      <footer class="modal-footer">
        <button class="ghost-button" data-prev="${process.id}"><span data-lucide="arrow-left"></span><span>Назад</span></button>
        ${process.approvalState === "pending" || process.stage.toLowerCase().includes("директор") ? `<button class="ghost-button" data-return="${process.id}"><span data-lucide="undo-2"></span><span>Вернуть</span></button><button class="ghost-button is-success" data-approve="${process.id}"><span data-lucide="check"></span><span>Согласовать</span></button>` : ""}
        ${routes
          .map(
            (route) =>
              `<button class="${route.tone === "success" ? "ghost-button is-success" : route.tone === "secondary" ? "ghost-button" : "primary-button"}" data-transition-id="${process.id}" data-transition-key="${route.key}"><span data-lucide="arrow-right"></span><span>${route.label}</span></button>`,
          )
          .join("")}
      </footer>
    </article>
  `;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  iconRefresh();
}

function renderModalTab(process, tab) {
  if (tab === "docs") return renderDocsTab(process);
  if (tab === "tasks") return renderTasksTab(process);
  if (tab === "comments") return renderCommentsTab(process);
  return renderDataTab(process);
}

function isIntegrationCheck(process, key) {
  return process.type === "orders" && ["contract", "invoice", "payment"].includes(key);
}

function checkSource(process, key) {
  if (process.type === "orders" && key === "contract") return "Источник: связанные договоры CRM";
  if (process.type === "orders" && ["invoice", "payment"].includes(key)) return "Источник: 1С · только чтение";
  return "";
}

function routeWaitingMessage(process) {
  if (process.stage.toLowerCase().includes("директор")) return "Ожидается решение директора";
  if (process.type === "refunds" && process.stage === "Проверка бухгалтерией" && process.overpayment === "unknown") {
    return "Бухгалтерия должна определить наличие переплаты";
  }
  if (process.stage.toLowerCase().includes("закрыт") || process.stage === "Решено") return "Процесс завершён";
  return "Выполните обязательные проверки текущей стадии";
}

function renderDataTab(process) {
  const client = clientById(process.clientId);
  const locked = isOrganizationLocked(process);
  const organization = organizationFor(process.companyKey);
  const routes = availableTransitions(process);
  const checks = Object.entries(process.checks || {})
    .map(
      ([key, value]) => {
        const checked = key === "contract" ? hasActiveContract(process) : value;
        return `
        <label class="toggle-row">
          <input type="checkbox" data-check="${key}" ${checked ? "checked" : ""} ${isIntegrationCheck(process, key) ? "disabled" : ""} />
          <span>${checkLabel(key)}${checkSource(process, key) ? `<small>${checkSource(process, key)}</small>` : ""}</span>
        </label>
      `;
      },
    )
    .join("");
  return `
    <section class="architecture-strip">
      <div><span>Категория</span><strong>${organization.label}</strong></div>
      <div><span>Тип клиента</span><strong>${process.clientType}</strong></div>
      <div><span>Маршрут</span><strong>${process.product} · ${process.supply}</strong></div>
      <div><span>Доступ</span><strong>${locked ? "Юрлицо зафиксировано" : "Стартовая стадия"}</strong></div>
    </section>
    <div class="detail-grid">
      <label>Клиент<input id="modalClientName" value="${escapeAttr(client.name)}" /></label>
      <label>Тип клиента
        <select id="modalClientType">
          ${CRM_DICTIONARIES.clientTypes.map((type) => `<option ${type === process.clientType ? "selected" : ""}>${type}</option>`).join("")}
        </select>
      </label>
      <label>Наша организация
        <select id="modalCompanyKey" ${locked ? "disabled" : ""}>
          <option value="trade" ${process.companyKey === "trade" ? "selected" : ""}>${COMPANY.trade}</option>
          <option value="ugh" ${process.companyKey === "ugh" ? "selected" : ""}>${COMPANY.ugh}</option>
        </select>
        ${locked ? '<small class="field-note">Заблокировано после выхода со стартовой стадии</small>' : ""}
      </label>
      <label>Стадия<input id="modalStageSelect" value="${escapeAttr(process.stage)}" readonly /></label>
      <label>Ответственный
        <select id="modalOwner">${staffOptions(process.owner, process.companyKey)}</select>
      </label>
      <label>Вид топлива
        <select id="modalFuel" ${locked ? "disabled" : ""}>${fuelOptions(process.fuel)}</select>
      </label>
      <label>Продукт
        <input id="modalProduct" value="${escapeAttr(process.product)}" readonly />
      </label>
      <label>Способ / предмет<input id="modalSupply" value="${escapeAttr(process.supply)}" /></label>
      <label>Объем<input id="modalVolume" value="${escapeAttr(process.volume)}" /></label>
      <label>Сумма<input id="modalAmount" value="${escapeAttr(process.amount)}" /></label>
      <label>SLA / срок<input id="modalDue" value="${escapeAttr(process.due)}" /></label>
      <label>Приоритет
        <select id="modalPriority">
          ${["Обычная", "Высокая", "Критическая"].map((priority) => `<option ${priority === process.priority ? "selected" : ""}>${priority}</option>`).join("")}
        </select>
      </label>
      ${
        process.type === "refunds"
          ? `<label>Переплата подтверждена
              <select id="modalOverpayment">
                <option value="unknown" ${process.overpayment === "unknown" ? "selected" : ""}>Не определено</option>
                <option value="yes" ${process.overpayment === "yes" ? "selected" : ""}>Да — требуется банковский возврат</option>
                <option value="no" ${process.overpayment === "no" ? "selected" : ""}>Нет — закрыть без возврата ДС</option>
              </select>
            </label>`
          : ""
      }
    </div>
    ${
      process.type === "orders"
        ? `<section class="integration-card">
            <div>
              <span class="eyebrow">Источник финансового факта</span>
              <strong>1С · поля защищены от ручного редактирования</strong>
              <p>Счёт: ${process.integration.invoiceNumber || "не получен"} · Оплата: ${process.integration.paymentStatus || "ожидается"}</p>
            </div>
            <button class="ghost-button" data-sync-one-c="${process.id}"><span data-lucide="refresh-cw"></span><span>Получить демо-ответ 1С</span></button>
          </section>`
        : ""
    }
    <section class="route-panel">
      <div>
        <span class="eyebrow">Доступные переходы</span>
        <strong>${routes.length ? routes.map((route) => route.label).join(" · ") : routeWaitingMessage(process)}</strong>
      </div>
      <p>Стадия меняется только через маршрут — ручное переключение отключено.</p>
    </section>
    <section class="checklist">
      <div class="checklist-header">
        <strong>Проверки текущего маршрута</strong>
        <button class="text-button" data-save-process="${process.id}">Сохранить изменения</button>
      </div>
      <div class="toggle-grid">${checks || '<div class="empty-state">Для процесса пока нет проверок</div>'}</div>
    </section>
  `;
}

function renderDocsTab(process) {
  return `
    <section class="modal-section">
      <div class="inline-form">
        <select id="docType">
          ${["Договор", "Счет", "Платежное поручение", "Доверенность", "Акт", "Накладная", "ЭСФ", "Письмо", "Протокол", "Техспецификация"].map((item) => `<option>${item}</option>`).join("")}
        </select>
        <input id="docName" placeholder="Название документа или файла" />
        <button class="primary-button" data-add-doc="${process.id}"><span data-lucide="paperclip"></span><span>Добавить</span></button>
      </div>
      <div class="record-list">
        ${
          process.documents
            .map(
              (doc) => `
                <article class="record-row">
                  <span data-lucide="file-text"></span>
                  <div><strong>${doc.type}</strong><p>${doc.name}</p></div>
                  <b>${doc.status}</b>
                </article>
              `,
            )
            .join("") || '<div class="empty-state">Документы пока не прикреплены</div>'
        }
      </div>
    </section>
  `;
}

function renderTasksTab(process) {
  return `
    <section class="modal-section">
      <div class="inline-form">
        <input id="taskTitle" placeholder="Новая задача" />
        <input id="taskOwner" placeholder="Ответственный" value="${escapeAttr(process.owner)}" />
        <input id="taskDue" placeholder="Срок" value="Сегодня" />
        <button class="primary-button" data-add-task="${process.id}"><span data-lucide="list-plus"></span><span>Добавить</span></button>
      </div>
      <div class="record-list">
        ${
          process.tasks
            .map(
              (task) => `
                <article class="record-row">
                  <input type="checkbox" data-task-done="${process.id}" data-task-id="${task.id}" ${task.done ? "checked" : ""} />
                  <div><strong class="${task.done ? "is-muted" : ""}">${task.title}</strong><p>${task.owner} · ${task.due}</p></div>
                  <b>${task.done ? "Готово" : "В работе"}</b>
                </article>
              `,
            )
            .join("") || '<div class="empty-state">Задач пока нет</div>'
        }
      </div>
    </section>
  `;
}

function renderCommentsTab(process) {
  return `
    <section class="modal-section">
      <div class="inline-form">
        <input id="commentText" placeholder="Комментарий по заявке" />
        <button class="primary-button" data-add-comment="${process.id}"><span data-lucide="message-square-plus"></span><span>Добавить</span></button>
      </div>
      <div class="record-list">
        ${process.comments.map((comment) => `<article class="record-row"><span data-lucide="message-square"></span><div><strong>${comment.author}</strong><p>${comment.text}</p></div><b>${comment.time}</b></article>`).join("")}
      </div>
      <h3 class="mini-heading">История переходов</h3>
      <div class="timeline compact">
        ${process.history.map((event, index) => `<div><b>${index + 1}</b><span>${event}</span></div>`).join("")}
      </div>
    </section>
  `;
}

function checkLabel(key) {
  return {
    contract: "Договор действует",
    invoice: "Счет сформирован",
    payment: "Оплата подтверждена",
    power: "Доверенность действует",
    docs: "Документы оформлены",
    esf: "ЭСФ оформлена / поставлена на контроль",
    annulment: "Аннулирование подтверждено",
    accounting: "Бухгалтерия завершила проверку",
    reconciliation: "Акт сверки подписан",
    director: "Решение директора получено",
    paymentOrder: "Платежное поручение прикреплено",
    clientLetter: "Письмо клиента прикреплено",
    contractData: "Договорные данные проверены",
    clientAnswer: "Ответ клиента зафиксирован",
    extensionDone: "Продление выполнено",
    cash: "Касса не требуется / подтверждена",
    discussion: "Обсуждение завершено",
    bidReady: "Заявка готова",
    submitted: "Заявка подана",
    protocol: "Протокол прикреплен",
    signed: "Подписанный файл получен",
    requisites: "Реквизиты получены",
    project: "Проект подготовлен",
    expiryTask: "Задача на перезаключение создана",
    classified: "Обращение классифицировано",
    linked: "Связанный процесс создан",
  }[key] || key;
}

function saveProcessFromModal(id) {
  const process = processById(id);
  if (!process) return;
  const client = clientById(process.clientId);
  const locked = isOrganizationLocked(process);
  const name = $("#modalClientName")?.value.trim();
  if (name) client.name = name;
  const selectedFuel = locked ? process.fuel : $("#modalFuel")?.value || process.fuel;
  process.fuel = selectedFuel;
  if (!locked) {
    process.companyKey = companyByFuel(selectedFuel);
    process.direction = process.companyKey;
  }
  process.clientType = $("#modalClientType")?.value || process.clientType;
  client.type = process.clientType;
  process.owner = $("#modalOwner")?.value || process.owner;
  if (process.clientType === "Государственная организация" && !["Ольга", organizationFor(process.companyKey).director, accountingOwner(process), "Касса", "Главный менеджер", "Бухгалтер по банку"].includes(process.owner)) {
    process.owner = "Ольга";
  }
  process.product = productByFuel(selectedFuel);
  process.supply = $("#modalSupply")?.value.trim() || process.supply;
  process.volume = $("#modalVolume")?.value.trim() || process.volume;
  process.amount = $("#modalAmount")?.value.trim() || process.amount;
  process.due = $("#modalDue")?.value.trim() || process.due;
  process.priority = $("#modalPriority")?.value || process.priority;
  process.overpayment = $("#modalOverpayment")?.value || process.overpayment;
  process.dueState = process.priority === "Критическая" ? "danger" : process.priority === "Высокая" ? "warn" : process.dueState === "danger" ? "warn" : "progress";
  $$("[data-check]").forEach((checkbox) => {
    process.checks[checkbox.dataset.check] = checkbox.checked;
  });
  process.history.push(`Данные карточки обновлены. Маршрут: ${companyLabel(process.companyKey)}, директор: ${COMPANY_DIRECTOR[process.companyKey]}.`);
  saveState();
  renderAll();
  openProcessModal(id, "data");
  toast("Изменения сохранены", "ok");
}

function simulate1CSync(id) {
  const process = processById(id);
  if (!process || process.type !== "orders") return;
  process.checks.invoice = true;
  process.checks.payment = true;
  process.integration = {
    ...process.integration,
    invoiceNumber: process.integration.invoiceNumber || `СЧ-${process.id.replace(/\D/g, "")}`,
    invoiceDate: todayISO(),
    paymentStatus: "Оплата подтверждена",
    paymentDate: todayISO(),
  };
  process.history.push("1С передала номер счёта и подтверждение оплаты. Поля обновлены автоматически.");
  process.comments.unshift({ author: "Интеграция 1С", text: "Счёт и оплата синхронизированы.", time: "сейчас" });
  saveState();
  renderAll();
  openProcessModal(id, "data");
  toast("Демо-ответ 1С получен", "ok");
}

function addDocument(id) {
  const process = processById(id);
  const name = $("#docName")?.value.trim();
  if (!process || !name) return toast("Введите название документа.", "warn");
  process.documents.unshift({ id: uid("doc"), type: $("#docType").value, name, status: "Прикреплен" });
  process.history.push(`Добавлен документ: ${name}`);
  saveState();
  renderAll();
  openProcessModal(id, "docs");
}

function addTask(id) {
  const process = processById(id);
  const title = $("#taskTitle")?.value.trim();
  if (!process || !title) return toast("Введите название задачи.", "warn");
  process.tasks.unshift({
    id: uid("task"),
    title,
    owner: $("#taskOwner")?.value.trim() || process.owner,
    due: $("#taskDue")?.value.trim() || "Сегодня",
    done: false,
  });
  process.history.push(`Создана задача: ${title}`);
  saveState();
  renderAll();
  openProcessModal(id, "tasks");
}

function addComment(id) {
  const process = processById(id);
  const text = $("#commentText")?.value.trim();
  if (!process || !text) return toast("Введите комментарий.", "warn");
  process.comments.unshift({ author: "Вы", text, time: "сейчас" });
  process.history.push("Добавлен комментарий");
  saveState();
  renderAll();
  openProcessModal(id, "comments");
}

function toggleTask(processId, taskId, done) {
  const process = processById(processId);
  const task = process?.tasks.find((item) => item.id === taskId);
  if (!task) return;
  task.done = done;
  process.history.push(done ? `Задача закрыта: ${task.title}` : `Задача возвращена в работу: ${task.title}`);
  saveState();
  renderAll();
  openProcessModal(processId, "tasks");
}

function openCreateModal(defaultType = activeView) {
  const type = PROCESS_META[defaultType] ? defaultType : "appeals";
  const initialClient = state.clients[0];
  const defaultOwner = defaultOwnerFor(type, initialClient?.type);
  const modal = $("#requestModal");
  modal.innerHTML = `
    <article class="modal" role="dialog" aria-modal="true" aria-labelledby="createTitle">
      <header class="modal-header">
        <div>
          <span class="eyebrow">Новая карточка</span>
          <h2 id="createTitle">Создать процесс CRM</h2>
        </div>
        <button class="icon-button" data-close-modal title="Закрыть" aria-label="Закрыть"><span data-lucide="x"></span></button>
      </header>
      <div class="detail-grid">
        <label>Тип процесса
          <select id="createType">${Object.entries(PROCESS_META).map(([key, meta]) => `<option value="${key}" ${key === type ? "selected" : ""}>${meta.label}</option>`).join("")}</select>
        </label>
        <label>Клиент
          <select id="createClient">${state.clients.map((client) => `<option value="${client.id}">${client.name}</option>`).join("")}<option value="new">+ Новый клиент</option></select>
        </label>
        <label>Тип клиента
          <select id="createClientType">
            ${CRM_DICTIONARIES.clientTypes.map((clientType) => `<option ${clientType === initialClient?.type ? "selected" : ""}>${clientType}</option>`).join("")}
          </select>
        </label>
        <label>Новый клиент<input id="createClientName" placeholder="Заполнить, если клиента нет в базе" /></label>
        <label>БИН<input id="createClientBin" placeholder="Например, 123456789012" /></label>
        <label>Вид топлива
          <select id="createFuel">${fuelOptions("ДТ лето")}</select>
        </label>
        <label>Маршрут
          <input id="createRoute" value="${COMPANY.trade} · директор ${COMPANY_DIRECTOR.trade}" readonly />
        </label>
        <label>Способ поставки
          <select id="createSupply">${supplyOptions(type, "Талоны")}</select>
        </label>
        <label>Ответственный
          <select id="createOwner">${staffOptions(defaultOwner)}</select>
        </label>
        <label>Объем<input id="createVolume" placeholder="Например, 5 000 л" /></label>
        <label>Сумма<input id="createAmount" placeholder="Например, 2 500 000 ₸" /></label>
        <label>SLA / срок<input id="createDue" value="Сегодня" /></label>
        <label>Приоритет
          <select id="createPriority">
            <option>Обычная</option>
            <option>Высокая</option>
            <option>Критическая</option>
          </select>
        </label>
      </div>
      <footer class="modal-footer">
        <button class="ghost-button" data-close-modal>Отмена</button>
        <button class="primary-button" data-create-process><span data-lucide="plus"></span><span>Создать</span></button>
      </footer>
    </article>
  `;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  iconRefresh();
}

function createProcess() {
  const type = $("#createType").value;
  const meta = metaFor(type);
  const fuel = $("#createFuel").value;
  const companyKey = companyByFuel(fuel);
  const clientType = $("#createClientType").value;
  const owner = clientType === "Государственная организация" ? "Ольга" : $("#createOwner").value || defaultOwnerFor(type, clientType);
  let clientId = $("#createClient").value;
  if (clientId === "new") {
    const name = $("#createClientName").value.trim();
    if (!name) return toast("Введите название нового клиента.", "warn");
    const client = {
      id: uid("cli"),
      name,
      bin: $("#createClientBin").value.trim() || "Не указан",
      type: clientType,
      contacts: "Не заполнено",
      products: `${productByFuel(fuel)}, ${fuel}`,
      buysGsm: productByFuel(fuel) === "ГСМ",
      buysGas: productByFuel(fuel) === "Газ",
      debt: "0 ₸",
      powerUntil: "Нет",
      powerFile: "",
      powerPerson: "",
    };
    state.clients.unshift(client);
    clientId = client.id;
  }
  state.counters[meta.prefix] = (state.counters[meta.prefix] || 0) + 1;
  const id = `${meta.prefix}-${String(state.counters[meta.prefix]).padStart(4, "0")}`;
  const priority = $("#createPriority").value;
  const process = {
    id,
    type,
    clientId,
    clientType,
    companyKey,
    direction: companyKey,
    product: productByFuel(fuel),
    fuel,
    supply: $("#createSupply").value.trim() || "Не указано",
    stage: meta.stages[0],
    owner,
    due: $("#createDue").value.trim() || "Сегодня",
    dueState: priority === "Критическая" ? "danger" : priority === "Высокая" ? "warn" : "new",
    priority,
    volume: $("#createVolume").value.trim() || "Не указан",
    amount: $("#createAmount").value.trim() || "Не указана",
    approvalState: "none",
    organizationLocked: false,
    overpayment: "unknown",
    linkedProcessIds: [],
    integration: { source: "1С", invoiceNumber: "", invoiceDate: "", paymentStatus: "Ожидается", paymentDate: "" },
    checks: defaultChecks(type),
    documents: [],
    tasks: [{ id: uid("task"), title: `Первичная проверка: ${meta.label.toLowerCase()}`, owner, due: $("#createDue").value.trim() || "Сегодня", done: false }],
    comments: [{ author: "Вы", text: "Карточка создана вручную.", time: "сейчас" }],
    history: [`Карточка создана. Вид топлива: ${fuel}. Маршрут: ${companyLabel(companyKey)}, директор: ${COMPANY_DIRECTOR[companyKey]}.`],
  };
  state.processes.unshift(process);
  state.selectedClientId = clientId;
  saveState();
  closeModal();
  switchView(type);
  openProcessModal(id, "data");
  toast(`Создана карточка ${id}`, "ok");
}

function defaultChecks(type) {
  return {
    appeals: { classified: false, linked: false, clientAnswer: false },
    contracts: { requisites: false, project: false, signed: false, expiryTask: false },
    orders: { contract: false, invoice: false, payment: false, power: false, docs: false, esf: false },
    extensions: { clientLetter: false, contractData: false, director: false, clientAnswer: false, extensionDone: false, cash: true },
    refunds: { annulment: false, accounting: false, reconciliation: false, clientLetter: false, director: false, paymentOrder: false },
    tenders: { discussion: false, director: false, bidReady: false, submitted: false, protocol: false, contract: false },
  }[type] || {};
}

function closeModal() {
  currentModalId = "";
  $("#requestModal").classList.remove("is-open");
  $("#requestModal").setAttribute("aria-hidden", "true");
}

function switchView(viewName) {
  activeView = viewName;
  activeStage = "";
  $$(".nav-item").forEach((button) => button.classList.toggle("is-active", button.dataset.view === viewName));
  $("#dashboardView").classList.toggle("is-active", viewName === "dashboard");
  $("#clientsView").classList.toggle("is-active", viewName === "clients");
  $("#genericView").classList.toggle("is-active", !["dashboard", "clients"].includes(viewName));
  const titles = {
    dashboard: "Дашборд руководителя",
    clients: "Клиенты",
    appeals: "Обращения клиентов",
    contracts: "Договоры",
    orders: "Заказы и выдача топлива",
    extensions: "Продление талонов и ТК",
    refunds: "Возвраты денежных средств",
    tenders: "Тендеры и госзакупки",
    reports: "Отчеты и аналитика",
  };
  $("#viewTitle").textContent = titles[viewName] || "GAZOIL CRM";
  if (!["dashboard", "clients"].includes(viewName)) renderGeneric(viewName);
  closeSidebar();
  renderAll();
}

function exportState() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `gazoil-crm-demo-${new Date().toISOString().slice(0, 10)}.json`;
  link.click();
  URL.revokeObjectURL(link.href);
}

function resetDemo() {
  state = migrateState(structuredClone(DEFAULT_STATE));
  saveState();
  renderAll();
  toast("Демо-данные восстановлены", "ok");
}

function toast(message, tone = "progress") {
  let stack = $(".toast-stack");
  if (!stack) {
    stack = document.createElement("div");
    stack.className = "toast-stack";
    document.body.appendChild(stack);
  }
  const item = document.createElement("div");
  item.className = `toast ${statusClass(tone)}`;
  item.textContent = message;
  stack.appendChild(item);
  setTimeout(() => item.remove(), 3200);
}

function setSidebar(open) {
  document.body.classList.toggle("sidebar-open", open);
  $("#mobileMenu")?.setAttribute("aria-expanded", open ? "true" : "false");
}

function openSidebar() {
  setSidebar(true);
}

function closeSidebar() {
  setSidebar(false);
}

function setupMobileGestures() {
  let startX = 0;
  let startY = 0;
  let tracking = false;

  document.addEventListener(
    "touchstart",
    (event) => {
      if (!event.touches.length) return;
      const touch = event.touches[0];
      startX = touch.clientX;
      startY = touch.clientY;
      tracking = startX < 36 || document.body.classList.contains("sidebar-open");
    },
    { passive: true },
  );

  document.addEventListener(
    "touchend",
    (event) => {
      if (!tracking || !event.changedTouches.length) return;
      const touch = event.changedTouches[0];
      const deltaX = touch.clientX - startX;
      const deltaY = Math.abs(touch.clientY - startY);
      tracking = false;
      if (deltaY > 80 || Math.abs(deltaX) < 70) return;
      if (deltaX > 0 && startX < 36) openSidebar();
      if (deltaX < 0 && document.body.classList.contains("sidebar-open")) closeSidebar();
    },
    { passive: true },
  );
}

function escapeAttr(value) {
  return String(value ?? "").replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function enhanceStaticControls() {
  if (!$(".control-strip [data-action='export']")) {
    $(".control-strip").insertAdjacentHTML(
      "beforeend",
      `
        <button class="ghost-button" data-action="export"><span data-lucide="download"></span><span>Экспорт JSON</span></button>
        <button class="ghost-button" data-action="reset"><span data-lucide="rotate-ccw"></span><span>Сброс демо</span></button>
      `,
    );
  }
}

document.addEventListener("click", (event) => {
  const target = event.target;
  const button = target.closest("button, .client-card, .stage-item");
  if (!button) return;

  if (button.matches("[data-open]")) openProcessModal(button.dataset.open, "data");
  if (button.matches("[data-next]")) advanceProcess(button.dataset.next);
  if (button.matches("[data-transition-id]")) performTransition(button.dataset.transitionId, button.dataset.transitionKey);
  if (button.matches("[data-prev]")) previousProcess(button.dataset.prev);
  if (button.matches("[data-approve]")) approveProcess(button.dataset.approve);
  if (button.matches("[data-return]")) returnProcess(button.dataset.return);
  if (button.matches("[data-close-modal]")) closeModal();
  if (button.matches("[data-modal-tab]")) openProcessModal(currentModalId, button.dataset.modalTab);
  if (button.matches("[data-save-process]")) saveProcessFromModal(button.dataset.saveProcess);
  if (button.matches("[data-add-doc]")) addDocument(button.dataset.addDoc);
  if (button.matches("[data-add-task]")) addTask(button.dataset.addTask);
  if (button.matches("[data-add-comment]")) addComment(button.dataset.addComment);
  if (button.matches("[data-sync-one-c]")) simulate1CSync(button.dataset.syncOneC);
  if (button.matches("[data-create-process]")) createProcess();
  if (button.matches("[data-client]")) {
    state.selectedClientId = button.dataset.client;
    saveState();
    renderClients();
  }
  if (button.matches("[data-stage-filter]")) {
    activeStage = activeStage === button.dataset.stageFilter ? "" : button.dataset.stageFilter;
    renderGeneric(activeView);
  }
  if (button.matches("[data-action='export']")) exportState();
  if (button.matches("[data-action='reset']")) resetDemo();
  if (button.matches("[data-action='refresh-dashboard']")) {
    renderExecutiveDashboard();
    toast("Дашборд обновлен", "ok");
  }
  if (button.matches("[data-action='build-report']")) {
    const start = $("#reportStart")?.value;
    const end = $("#reportEnd")?.value;
    if (!start || !end || start > end) return toast("Выберите корректный период отчета.", "warn");
    state.reportPeriod = { start, end };
    saveState();
    renderExecutiveDashboard();
    toast(`Отчет сформирован: ${start} - ${end}`, "ok");
  }
  if (button.matches("[data-toast]")) toast(button.dataset.toast);
});

document.addEventListener("change", (event) => {
  if (event.target.matches("[data-task-done]")) {
    toggleTask(event.target.dataset.taskDone, event.target.dataset.taskId, event.target.checked);
  }
  if (event.target.matches("#createFuel")) {
    const companyKey = companyByFuel(event.target.value);
    $("#createRoute").value = `${companyLabel(companyKey)} · директор ${COMPANY_DIRECTOR[companyKey]}`;
  }
  if (event.target.matches("#createType")) {
    const clientType = $("#createClientType")?.value || "Обычный юридический клиент";
    $("#createOwner").innerHTML = staffOptions(defaultOwnerFor(event.target.value, clientType));
    $("#createSupply").innerHTML = supplyOptions(event.target.value);
  }
  if (event.target.matches("#createClient")) {
    const client = clientById(event.target.value);
    if (event.target.value !== "new" && client) {
      $("#createClientType").value = client.type;
      $("#createOwner").innerHTML = staffOptions(defaultOwnerFor($("#createType").value, client.type));
    }
  }
  if (event.target.matches("#createClientType")) {
    $("#createOwner").innerHTML = staffOptions(defaultOwnerFor($("#createType").value, event.target.value));
  }
  if (event.target.matches("#modalFuel")) {
    const companyKey = companyByFuel(event.target.value);
    $("#modalCompanyKey").value = companyKey;
    $("#modalProduct").value = productByFuel(event.target.value);
  }
});

$$(".nav-item").forEach((button) => {
  button.addEventListener("click", () => switchView(button.dataset.view));
});

$$("[data-filter-company]").forEach((button) => {
  button.addEventListener("click", () => {
    currentCompany = button.dataset.filterCompany;
    $$("[data-filter-company]").forEach((item) => item.classList.toggle("is-selected", item === button));
    renderAll();
  });
});

$("#globalSearch").addEventListener("input", renderAll);

$("#slaOnly").addEventListener("click", () => {
  slaOnly = !slaOnly;
  $("#slaOnly").classList.toggle("is-selected", slaOnly);
  renderAll();
});

$("#newRequestBtn").addEventListener("click", () => openCreateModal(activeView));
$("#genericAction").addEventListener("click", () => openCreateModal(activeView));

$("#requestModal").addEventListener("click", (event) => {
  if (event.target.id === "requestModal") closeModal();
});

$("#mobileMenu").addEventListener("click", () => setSidebar(!document.body.classList.contains("sidebar-open")));
$("#sidebarClose")?.addEventListener("click", closeSidebar);
$("#mobileBackdrop")?.addEventListener("click", closeSidebar);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
    closeSidebar();
  }
});

enhanceStaticControls();
setupMobileGestures();
renderAll();
