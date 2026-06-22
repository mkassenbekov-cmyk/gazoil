const STORAGE_KEY = "gazoil-crm-state-v2";
const SESSION_KEY = "gazoil-crm-session-v2";
const LANGUAGE_KEY = "gazoil-crm-language-v1";
const DEFAULT_PASSWORD_HASH = "c4318372f98f4c46ed3a32c16ee4d7a76c832886d887631c0294b3314f34edf1";

const UI_TEXT = {
  ru: {
    corporateSystem: "Корпоративная система",
    authorization: "Авторизация",
    systemTitle: "Единая система управления GAZOIL",
    loginDescription: "Войдите в рабочий контур, используя корпоративный логин и пароль.",
    loginLabel: "Логин",
    passwordLabel: "Пароль",
    loginPlaceholder: "Введите логин",
    passwordPlaceholder: "Введите пароль",
    signIn: "Войти в систему",
    secureAccess: "Защищённый доступ к корпоративным данным",
    commercialContour: "Коммерческий контур",
    dashboard: "Дашборд",
    assistant: "ИИ-помощник",
    messages: "Сообщения",
    clients: "Клиенты",
    appeals: "Обращения",
    contracts: "Договоры",
    orders: "Заказы и выдача",
    extensions: "Продления",
    refunds: "Возвраты",
    tenders: "Госзакупки",
    tasks: "Задачи",
    documents: "Документы",
    reports: "Отчеты",
    users: "Пользователи и роли",
    audit: "Журнал действий",
    settings: "Справочники",
    integrationsLater: "Интеграции позже",
    integrationsList: "1С, WhatsApp, Email, телефония",
    today: "Сегодня",
    all: "Все",
    day: "День",
    week: "Неделя",
    month: "Месяц",
    overdueOnly: "Только просрочки",
    priorityQueue: "Приоритетная очередь",
    allProcesses: "Все процессы",
    team: "Команда",
    loadAndOverdue: "Загрузка и просрочки",
    managerSummary: "Сводка руководителя",
    monthMainData: "Основные данные месяца",
    asOfToday: "На сегодняшний день",
    fuelSales: "Продажи по видам топлива",
    refresh: "Обновить",
    reporting: "Отчетность",
    buildPeriodReport: "Сформировать отчет за период",
    importantNotifications: "ИИ-сигналы",
    salesRisks: "Риски и рекомендации",
    unifiedContour: "Единый контур",
    activeProcesses: "Активные процессы",
    decisionQueue: "Очередь решений",
    approvals: "Согласования",
    operationalList: "Операционный список",
    requestsInWork: "Заявки в работе",
    dashboardTitle: "Дашборд руководителя",
    assistantTitle: "Персональный ИИ-помощник",
    messagesTitle: "Корпоративные сообщения",
    clientsTitle: "Клиенты",
    appealsTitle: "Обращения клиентов",
    contractsTitle: "Договоры",
    ordersTitle: "Заказы и выдача топлива",
    extensionsTitle: "Продление талонов и ТК",
    refundsTitle: "Возвраты денежных средств",
    tendersTitle: "Тендеры и госзакупки",
    tasksTitle: "Задачи и согласования",
    documentsTitle: "Документы",
    reportsTitle: "Отчеты и аналитика",
    usersTitle: "Пользователи и роли",
    auditTitle: "Журнал действий",
    settingsTitle: "Настройки справочников",
    wrongCredentials: "Неверный логин или пароль.",
    showPassword: "Показать пароль",
    hidePassword: "Скрыть пароль",
    waitingDecision: "Ждут моего решения",
    overdue: "Просрочено",
    distribute: "Нужно распределить",
    expiringContracts: "Договоры истекают",
  },
  kk: {
    corporateSystem: "Корпоративтік жүйе",
    authorization: "Авторизация",
    systemTitle: "GAZOIL бірыңғай басқару жүйесі",
    loginDescription: "Корпоративтік логин мен құпиясөзді пайдаланып жұмыс жүйесіне кіріңіз.",
    loginLabel: "Логин",
    passwordLabel: "Құпиясөз",
    loginPlaceholder: "Логинді енгізіңіз",
    passwordPlaceholder: "Құпиясөзді енгізіңіз",
    signIn: "Жүйеге кіру",
    secureAccess: "Корпоративтік деректерге қорғалған қолжетімділік",
    commercialContour: "Коммерциялық контур",
    dashboard: "Басқару тақтасы",
    assistant: "ЖИ-көмекші",
    messages: "Хабарламалар",
    clients: "Клиенттер",
    appeals: "Өтініштер",
    contracts: "Шарттар",
    orders: "Тапсырыстар және беру",
    extensions: "Ұзартулар",
    refunds: "Қайтарымдар",
    tenders: "Мемлекеттік сатып алу",
    tasks: "Тапсырмалар",
    documents: "Құжаттар",
    reports: "Есептер",
    users: "Пайдаланушылар мен рөлдер",
    audit: "Әрекеттер журналы",
    settings: "Анықтамалықтар",
    integrationsLater: "Интеграциялар кейін",
    integrationsList: "1С, WhatsApp, Email, телефония",
    today: "Бүгін",
    all: "Барлығы",
    day: "Күн",
    week: "Апта",
    month: "Ай",
    overdueOnly: "Тек мерзімі өткендер",
    priorityQueue: "Басымдық кезегі",
    allProcesses: "Барлық процестер",
    team: "Команда",
    loadAndOverdue: "Жүктеме және кешігулер",
    managerSummary: "Басшының қорытындысы",
    monthMainData: "Айдың негізгі деректері",
    asOfToday: "Бүгінгі жағдай бойынша",
    fuelSales: "Отын түрлері бойынша сатылым",
    refresh: "Жаңарту",
    reporting: "Есептілік",
    buildPeriodReport: "Кезең бойынша есеп құру",
    importantNotifications: "ЖИ-сигналдар",
    salesRisks: "Тәуекелдер мен ұсыныстар",
    unifiedContour: "Бірыңғай контур",
    activeProcesses: "Белсенді процестер",
    decisionQueue: "Шешімдер кезегі",
    approvals: "Келісулер",
    operationalList: "Операциялық тізім",
    requestsInWork: "Жұмыстағы өтінімдер",
    dashboardTitle: "Басшының басқару тақтасы",
    assistantTitle: "Жеке ЖИ-көмекші",
    messagesTitle: "Корпоративтік хабарламалар",
    clientsTitle: "Клиенттер",
    appealsTitle: "Клиент өтініштері",
    contractsTitle: "Шарттар",
    ordersTitle: "Тапсырыстар және отын беру",
    extensionsTitle: "Талондар мен тауар карталарын ұзарту",
    refundsTitle: "Ақшалай қаражатты қайтару",
    tendersTitle: "Тендерлер және мемлекеттік сатып алу",
    tasksTitle: "Тапсырмалар және келісулер",
    documentsTitle: "Құжаттар",
    reportsTitle: "Есептер және талдау",
    usersTitle: "Пайдаланушылар мен рөлдер",
    auditTitle: "Әрекеттер журналы",
    settingsTitle: "Анықтамалықтарды баптау",
    wrongCredentials: "Логин немесе құпиясөз қате.",
    showPassword: "Құпиясөзді көрсету",
    hidePassword: "Құпиясөзді жасыру",
    waitingDecision: "Менің шешімімді күтуде",
    overdue: "Мерзімі өткен",
    distribute: "Бөлу қажет",
    expiringContracts: "Шарттардың мерзімі аяқталады",
  },
};

const COMPANY = {
  trade: "ТОО «GAZOIL TRADE»",
  ugh: "ТОО «УГХ GAZOIL»",
};

const CRM_DICTIONARIES = {
  organizations: [
    { key: "trade", label: COMPANY.trade, product: "ГСМ", director: "Хуснутдинов Р. Р.", accounting: "Татьяна" },
    { key: "ugh", label: COMPANY.ugh, product: "Газ", director: "Киікбай А. Б.", accounting: "Айнура" },
  ],
  clientTypes: ["Обычный юридический клиент", "Государственная организация"],
  products: ["ГСМ", "Газ"],
  supplyMethods: ["Талоны", "Товарная карта", "Опт"],
  refundTypes: ["Талоны + деньги", "Товарная карта + деньги", "Только деньги"],
};

const STAFF = [
  {
    id: "madi",
    name: "Мади",
    login: "Мади",
    loginAliases: ["комдир"],
    role: "Коммерческий директор / Администратор",
    roleId: "ADMIN_COMMERCIAL_DIRECTOR",
    scope: "both",
    email: "madi@gazoil.kz",
    passwordHash: DEFAULT_PASSWORD_HASH,
    mustChangePassword: true,
    active: true,
  },
  {
    id: "khusnutdinov",
    name: "Хуснутдинов Р. Р.",
    login: "Рашид",
    loginAliases: ["RR"],
    role: "Директор GAZOIL TRADE",
    roleId: "DIRECTOR_GAZOIL_TRADE",
    scope: "trade",
    email: "rr@gazoil.kz",
    passwordHash: DEFAULT_PASSWORD_HASH,
    mustChangePassword: true,
    active: true,
  },
  {
    id: "kiikbay",
    name: "Киікбай А. Б.",
    login: "Арсен",
    loginAliases: ["AB"],
    role: "Директор УГХ GAZOIL",
    roleId: "DIRECTOR_UGH_GAZOIL",
    scope: "ugh",
    email: "ab@gazoil.kz",
    passwordHash: DEFAULT_PASSWORD_HASH,
    mustChangePassword: true,
    active: true,
  },
  { id: "diana", name: "Диана", login: "Диана", role: "Старший менеджер", roleId: "SENIOR_MANAGER", scope: "both", passwordHash: DEFAULT_PASSWORD_HASH, mustChangePassword: true, active: true },
  { id: "elzhan", name: "Ельжан", login: "Ельжан", role: "Менеджер обслуживания", roleId: "SERVICE_MANAGER", scope: "both", passwordHash: DEFAULT_PASSWORD_HASH, mustChangePassword: true, active: true },
  { id: "zhanara", name: "Жанара", login: "Жанара", role: "Менеджер обслуживания", roleId: "SERVICE_MANAGER", scope: "both", passwordHash: DEFAULT_PASSWORD_HASH, mustChangePassword: true, active: true },
  { id: "ekaterina", name: "Екатерина", login: "Екатерина", role: "Менеджер обслуживания", roleId: "SERVICE_MANAGER", scope: "both", passwordHash: DEFAULT_PASSWORD_HASH, mustChangePassword: true, active: true },
  { id: "olga", name: "Ольга", login: "Ольга", role: "Госзакупщик", roleId: "PROCUREMENT_MANAGER", scope: "both", passwordHash: DEFAULT_PASSWORD_HASH, mustChangePassword: true, active: true },
  { id: "pavel", name: "Павел", login: "Павел", role: "Менеджер продаж", roleId: "SALES_MANAGER", scope: "both", passwordHash: DEFAULT_PASSWORD_HASH, mustChangePassword: true, active: true },
  { id: "ilyas", name: "Ильяс", login: "Ильяс", role: "Менеджер опта", roleId: "WHOLESALE_MANAGER", scope: "both", passwordHash: DEFAULT_PASSWORD_HASH, mustChangePassword: true, active: true },
  { id: "founder", name: "Учредитель", login: "Учредитель", role: "Учредитель / Наблюдатель", roleId: "FOUNDER_VIEWER", scope: "both", passwordHash: DEFAULT_PASSWORD_HASH, mustChangePassword: true, active: true },
  { id: "tatyana", name: "Татьяна", login: "Татьяна", role: "Бухгалтер GAZOIL TRADE", roleId: "ACCOUNTANT_GAZOIL_TRADE", scope: "trade", passwordHash: DEFAULT_PASSWORD_HASH, mustChangePassword: true, active: true },
  { id: "ainura", name: "Айнура", login: "Айнура", role: "Бухгалтер УГХ GAZOIL", roleId: "ACCOUNTANT_UGH_GAZOIL", scope: "ugh", passwordHash: DEFAULT_PASSWORD_HASH, mustChangePassword: true, active: true },
  { id: "cash", name: "Касса", role: "Операции с талонами", scope: "both" },
  { id: "card-manager", name: "Главный менеджер", role: "Операции с товарными картами", scope: "both" },
  { id: "bank", name: "Бухгалтер по банку", role: "Банковские возвраты", scope: "both" },
];

const ROLE_POLICIES = {
  ADMIN_COMMERCIAL_DIRECTOR: {
    label: "Коммерческий директор / Администратор",
    companies: ["trade", "ugh"],
    views: ["dashboard", "clients", "appeals", "contracts", "orders", "extensions", "refunds", "tenders", "tasks", "documents", "reports", "users", "audit", "settings"],
    canCreate: true,
    canApprove: true,
    canSeeFinancials: true,
    canSeeTeam: true,
    canSubstituteDirectors: true,
    canEditProcesses: true,
    canReassign: true,
    canManageUsers: true,
    canResetPasswords: true,
    canConfirm1C: true,
    canViewAudit: true,
    roleType: "commercialDirector",
  },
  DIRECTOR_GAZOIL_TRADE: {
    label: "Директор GAZOIL TRADE",
    companies: ["trade"],
    views: ["dashboard", "extensions", "refunds", "tenders", "tasks", "reports"],
    canCreate: false,
    canApprove: true,
    canSeeFinancials: true,
    canSeeTeam: false,
    canSubstituteDirectors: false,
    canEditProcesses: false,
    canReassign: false,
    canManageUsers: false,
    canResetPasswords: false,
    canConfirm1C: false,
    canViewAudit: false,
    roleType: "companyDirector",
  },
  DIRECTOR_UGH_GAZOIL: {
    label: "Директор УГХ GAZOIL",
    companies: ["ugh"],
    views: ["dashboard", "extensions", "refunds", "tenders", "tasks", "reports"],
    canCreate: false,
    canApprove: true,
    canSeeFinancials: true,
    canSeeTeam: false,
    canSubstituteDirectors: false,
    canEditProcesses: false,
    canReassign: false,
    canManageUsers: false,
    canResetPasswords: false,
    canConfirm1C: false,
    canViewAudit: false,
    roleType: "companyDirector",
  },
  SENIOR_MANAGER: {
    label: "Старший менеджер",
    companies: ["trade", "ugh"],
    views: ["dashboard", "clients", "appeals", "contracts", "orders", "extensions", "refunds", "tenders", "tasks", "documents", "reports"],
    canCreate: true,
    canApprove: false,
    canSeeFinancials: true,
    canSeeTeam: true,
    canSubstituteDirectors: false,
    canEditProcesses: true,
    canReassign: true,
    canManageUsers: false,
    canResetPasswords: false,
    canConfirm1C: false,
    canViewAudit: false,
    roleType: "seniorManager",
  },
  SERVICE_MANAGER: {
    label: "Менеджер обслуживания",
    companies: ["trade", "ugh"],
    views: ["dashboard", "clients", "appeals", "contracts", "orders", "extensions", "refunds", "tenders", "tasks", "documents"],
    canCreate: true,
    canApprove: false,
    canSeeFinancials: false,
    canSeeTeam: false,
    canSubstituteDirectors: false,
    canEditProcesses: true,
    canReassign: false,
    canManageUsers: false,
    canResetPasswords: false,
    canConfirm1C: false,
    canViewAudit: false,
    roleType: "assignedManager",
  },
  SALES_MANAGER: {
    label: "Менеджер продаж",
    companies: ["trade", "ugh"],
    views: ["dashboard", "clients", "appeals", "contracts", "orders", "tasks", "documents"],
    canCreate: true,
    canApprove: false,
    canSeeFinancials: false,
    canSeeTeam: false,
    canSubstituteDirectors: false,
    canEditProcesses: true,
    canReassign: false,
    canManageUsers: false,
    canResetPasswords: false,
    canConfirm1C: false,
    canViewAudit: false,
    roleType: "salesManager",
  },
  WHOLESALE_MANAGER: {
    label: "Менеджер опта",
    companies: ["trade", "ugh"],
    views: ["dashboard", "clients", "appeals", "contracts", "orders", "tasks", "documents", "reports"],
    canCreate: true,
    canApprove: false,
    canSeeFinancials: true,
    canSeeTeam: false,
    canSubstituteDirectors: false,
    canEditProcesses: true,
    canReassign: false,
    canManageUsers: false,
    canResetPasswords: false,
    canConfirm1C: false,
    canViewAudit: false,
    roleType: "wholesaleManager",
  },
  PROCUREMENT_MANAGER: {
    label: "Госзакупщик",
    companies: ["trade", "ugh"],
    views: ["dashboard", "clients", "contracts", "extensions", "refunds", "tenders", "tasks", "documents", "reports"],
    canCreate: true,
    canApprove: false,
    canSeeFinancials: true,
    canSeeTeam: false,
    canSubstituteDirectors: false,
    canEditProcesses: true,
    canReassign: false,
    canManageUsers: false,
    canResetPasswords: false,
    canConfirm1C: false,
    canViewAudit: false,
    roleType: "procurementManager",
  },
  FOUNDER_VIEWER: {
    label: "Учредитель / Наблюдатель",
    companies: ["trade", "ugh"],
    views: ["dashboard", "reports"],
    canCreate: false,
    canApprove: false,
    canSeeFinancials: true,
    canSeeTeam: false,
    canSubstituteDirectors: false,
    canEditProcesses: false,
    canReassign: false,
    canManageUsers: false,
    canResetPasswords: false,
    canConfirm1C: false,
    canViewAudit: false,
    roleType: "founder",
  },
  CASHIER: {
    label: "Кассир",
    companies: ["trade", "ugh"],
    views: ["dashboard", "orders", "extensions", "refunds", "tasks", "documents"],
    canCreate: false,
    canApprove: false,
    canSeeFinancials: false,
    canSeeTeam: false,
    canSubstituteDirectors: false,
    canEditProcesses: true,
    canReassign: false,
    canManageUsers: false,
    canResetPasswords: false,
    canConfirm1C: false,
    canViewAudit: false,
    roleType: "cashier",
  },
  ACCOUNTANT_GAZOIL_TRADE: {
    label: "Бухгалтер GAZOIL TRADE",
    companies: ["trade"],
    views: ["dashboard", "contracts", "orders", "refunds", "tasks", "documents", "reports"],
    canCreate: false,
    canApprove: false,
    canSeeFinancials: true,
    canSeeTeam: false,
    canSubstituteDirectors: false,
    canEditProcesses: true,
    canReassign: false,
    canManageUsers: false,
    canResetPasswords: false,
    canConfirm1C: true,
    canViewAudit: false,
    roleType: "accountant",
  },
  ACCOUNTANT_UGH_GAZOIL: {
    label: "Бухгалтер УГХ GAZOIL",
    companies: ["ugh"],
    views: ["dashboard", "contracts", "orders", "refunds", "tasks", "documents", "reports"],
    canCreate: false,
    canApprove: false,
    canSeeFinancials: true,
    canSeeTeam: false,
    canSubstituteDirectors: false,
    canEditProcesses: true,
    canReassign: false,
    canManageUsers: false,
    canResetPasswords: false,
    canConfirm1C: true,
    canViewAudit: false,
    roleType: "accountant",
  },
  BANK_ACCOUNTANT: {
    label: "Бухгалтер по банку",
    companies: ["trade", "ugh"],
    views: ["dashboard", "refunds", "tasks", "documents", "reports"],
    canCreate: false,
    canApprove: false,
    canSeeFinancials: true,
    canSeeTeam: false,
    canSubstituteDirectors: false,
    canEditProcesses: true,
    canReassign: false,
    canManageUsers: false,
    canResetPasswords: false,
    canConfirm1C: true,
    canViewAudit: false,
    roleType: "bankAccountant",
  },
  SYSTEM_ADMIN: {
    label: "Системный администратор",
    companies: ["trade", "ugh"],
    views: ["dashboard", "users", "audit", "settings"],
    canCreate: false,
    canApprove: false,
    canSeeFinancials: false,
    canSeeTeam: false,
    canSubstituteDirectors: false,
    canEditProcesses: false,
    canReassign: false,
    canManageUsers: true,
    canResetPasswords: true,
    canConfirm1C: false,
    canViewAudit: true,
    roleType: "systemAdmin",
  },
};

const FUEL_TYPES = ["АИ-92", "АИ-95", "АИ-98", "ДТ лето", "ДТ зима", "Автогаз"];

const COMPANY_DIRECTOR = {
  trade: "Хуснутдинов Р. Р.",
  ugh: "Киікбай А. Б.",
};

const FUEL_PRICE = {
  "АИ-92": 205,
  "АИ-95": 245,
  "АИ-98": 285,
  "ДТ лето": 295,
  "ДТ зима": 320,
  "Автогаз": 95,
};

const SERVICE_MANAGER_NAMES = ["Ельжан", "Жанара", "Екатерина"];
const SERVICE_MANAGER_STATUSES = ["На работе / активен", "Занят", "На звонке", "Отошёл", "Обед", "Завершил смену", "Не в сети"];
const SERVICE_AUTO_ASSIGN_STATUSES = ["На работе / активен"];
const SERVICE_BUSY_FALLBACK_STATUSES = ["Занят", "На звонке"];
const SERVICE_TRANSFER_REASONS = [
  "менеджер занят",
  "менеджер на звонке",
  "клиент ошибочно попал не тому менеджеру",
  "клиент закреплён за другим менеджером",
  "менеджер уходит со смены",
  "высокая нагрузка",
  "решение Дианы",
  "решение Мади",
];
const SERVICE_DASHBOARD_MODULES = [
  ["clients", "Мои клиенты", "users-round"],
  ["appeals", "Мои обращения", "inbox"],
  ["contracts", "Мои договоры", "file-signature"],
  ["orders", "Мои заказы", "fuel"],
  ["extensions", "Мои продления", "refresh-cw"],
  ["refunds", "Мои возвраты", "wallet-cards"],
  ["tasks", "Мои задачи", "list-checks"],
  ["documents", "Мои документы", "folder-open"],
];
const APPEAL_CLASSIFICATIONS = [
  "Договор",
  "Счёт",
  "Заказ топлива",
  "Выдача топлива",
  "Оплата",
  "Талоны",
  "Топливная карта",
  "Опт",
  "Продление",
  "Возврат",
  "Акт сверки",
  "Документы",
  "Госзакупки",
  "Жалоба / проблема",
  "Консультация",
  "Другое",
];
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
const APPEAL_TASK_BY_CLASSIFICATION = {
  Договор: "Запросить реквизиты и подготовить договор",
  Счёт: "Подготовить счёт клиенту",
  "Заказ топлива": "Уточнить объём и вид топлива",
  "Выдача топлива": "Проверить оплату и доверенность",
  Оплата: "Проверить оплату в 1С",
  Талоны: "Подготовить заказ талонов",
  "Топливная карта": "Подготовить пополнение топливной карты",
  Опт: "Уточнить объём, цену и условия оптовой поставки",
  Продление: "Передать заявку на продление",
  Возврат: "Передать заявку на возврат",
  "Акт сверки": "Подготовить акт сверки",
  Документы: "Отправить или запросить документы",
  Госзакупки: "Передать Ольге по госзакупкам",
  "Жалоба / проблема": "Разобрать жалобу клиента",
  Другое: "Уточнить обращение и определить дальнейшее действие",
};
const DEFAULT_SLA_SETTINGS = {
  firstResponseMinutes: 15,
  classificationMinutes: 30,
  processCreationMinutes: 30,
  missedCallMinutes: 20,
  consultationHours: 24,
};

const MONTHLY_REVENUE_PLAN = 180000000;
const COMPANY_MONTHLY_PLAN = { trade: 150000000, ugh: 30000000 };
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

const PROCESS_NAMES_KK = {
  appeals: { label: "Өтініш", plural: "Клиент өтініштері" },
  contracts: { label: "Шарт", plural: "Шарттар" },
  orders: { label: "Тапсырыс", plural: "Тапсырыстар және отын беру" },
  extensions: { label: "Ұзарту", plural: "Талондар мен тауар карталарын ұзарту" },
  refunds: { label: "Қайтарым", plural: "Ақшалай қаражатты қайтару" },
  tenders: { label: "Тендер", plural: "Тендерлер және мемлекеттік сатып алу" },
};

const PROCESS_FIELD_SCHEMAS = {
  appeals: [
    ["source", "Источник обращения", "select", ["WhatsApp", "Телефония", "Email", "Офис", "Сайт", "Руководитель", "Тендерная площадка", "Иное"]],
    ["contactName", "Контактное лицо", "text"],
    ["phone", "Телефон", "text"],
    ["email", "Email", "email"],
    ["subject", "Тема обращения", "text"],
    ["closeReason", "Причина закрытия без решения", "textarea"],
  ],
  contracts: [
    ["contractNumber", "Номер договора", "text"],
    ["contractDate", "Дата договора", "date"],
    ["startDate", "Дата начала", "date"],
    ["endDate", "Дата окончания", "date"],
    ["paymentTerms", "Условия оплаты", "textarea"],
    ["pricing", "Цена / скидка / ценообразование", "textarea"],
  ],
  orders: [
    ["paidVolume", "Оплаченный объём, л", "number"],
    ["issuedVolume", "Объём к выдаче / выдано, л", "number"],
    ["deliveryDate", "Дата выдачи", "date"],
    ["esfStatus", "Статус ЭСФ", "select", ["Не требуется", "Ожидается", "Оформлена", "Ошибка"]],
  ],
  extensions: [
    ["extensionSubject", "Что продлеваем", "select", ["Талоны", "Топливная карта"]],
    ["purchasePrice", "Цена покупки топлива", "number"],
    ["currentPrice", "Текущая цена топлива", "number"],
    ["discount", "Индивидуальная скидка", "number"],
    ["recalculation", "Сумма перерасчёта", "number"],
    ["newExpiry", "Новый срок действия", "date"],
    ["reason", "Основание для продления", "textarea"],
  ],
  refunds: [
    ["refundReason", "Причина возврата", "textarea"],
    ["preliminaryAmount", "Предварительная сумма возврата", "number"],
    ["overpaymentAmount", "Сумма переплаты", "number"],
    ["returnAmount", "Сумма к возврату", "number"],
    ["clientDebt", "Задолженность клиента", "number"],
    ["paymentOrderNumber", "Номер платёжного поручения", "text"],
    ["paymentDate", "Дата возврата", "date"],
  ],
  tenders: [
    ["platform", "Тендерная площадка", "select", ["Госзакуп", "Самрук", "ЕТС", "Kaspi Tender", "MITWORK", "E-alan", "Другое"]],
    ["url", "Ссылка на тендер", "url"],
    ["announcementNumber", "Номер объявления", "text"],
    ["lotNumber", "Номер лота", "text"],
    ["customer", "Заказчик", "text"],
    ["deadline", "Срок подачи", "datetime-local"],
    ["bidSubmittedAt", "Дата и время подачи", "datetime-local"],
    ["result", "Результат", "text"],
    ["signedContractNumber", "Номер подписанного договора", "text"],
  ],
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
  counters: { APP: 5524, AGR: 713, ORD: 1290, EXT: 337, REF: 441, TEN: 188 },
  crmSettings: { sla: DEFAULT_SLA_SETTINGS, roundRobinIndex: 0 },
  serviceDesk: {
    managerStatuses: Object.fromEntries(SERVICE_MANAGER_NAMES.map((name) => [name, "Не в сети"])),
    lastShiftAt: {},
    emptyStartApplied: false,
  },
  dictionaries: CRM_DICTIONARIES,
  users: STAFF,
  fuels: FUEL_TYPES,
  sales: DEMO_SALES,
  reportPeriod: { start: monthStartISO(), end: todayISO() },
  auditLog: [],
  notifications: [],
  founderTasks: [],
  aiChats: {},
  communications: {
    groups: [
      { id: "group-general", name: "Общий GAZOIL", description: "Общие объявления и обсуждения", memberIds: ["madi", "khusnutdinov", "kiikbay", "diana", "elzhan", "zhanara", "ekaterina", "olga", "pavel", "ilyas", "founder", "tatyana", "ainura"], createdBy: "madi" },
      { id: "group-commercial", name: "Коммерческий отдел", description: "Продажи, обслуживание, опт и госзакупки", memberIds: ["madi", "diana", "elzhan", "zhanara", "ekaterina", "olga", "pavel", "ilyas"], createdBy: "madi" },
      { id: "group-leadership", name: "Руководство", description: "Учредитель, коммерческий директор и директора компаний", memberIds: ["founder", "madi", "khusnutdinov", "kiikbay"], createdBy: "madi" },
      { id: "group-accounting", name: "Бухгалтерия", description: "Финансовые проверки и возвраты", memberIds: ["madi", "tatyana", "ainura"], createdBy: "madi" },
    ],
    messages: [
      { id: "msg-welcome", channelType: "group", channelId: "group-general", authorId: "madi", text: "Добро пожаловать в корпоративное пространство GAZOIL.", createdAt: new Date().toISOString(), readBy: ["madi"] },
    ],
  },
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
      comments: [{ author: "Киікбай А. Б.", text: "Участвуем, подготовить заявку без задержки.", time: "10:30" }],
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
    {
      id: "APP-5521",
      type: "appeals",
      clientId: "cli-3",
      companyKey: "trade",
      product: "ГСМ",
      fuel: "АИ-95",
      supply: "Телефония",
      stage: "Новое обращение",
      owner: "Павел",
      due: "Сегодня 15:30",
      dueState: "new",
      priority: "Высокая",
      volume: "Новый клиент / первичная продажа",
      amount: "На квалификации",
      approvalState: "none",
      checks: { classified: false, linked: false, clientAnswer: false },
      documents: [],
      tasks: [{ id: "task-sales-1", title: "Квалифицировать потребность и подготовить КП", owner: "Павел", due: "Сегодня 15:30", done: false }],
      comments: [{ author: "Телефония", text: "Запросили условия поставки АИ-95 по талонам.", time: "12:05" }],
      history: ["Создано из входящего звонка"],
    },
    {
      id: "ORD-1290",
      type: "orders",
      clientId: "cli-4",
      companyKey: "trade",
      product: "ГСМ",
      fuel: "ДТ лето",
      supply: "Опт",
      stage: "Ожидание оплаты",
      owner: "Ильяс",
      due: "Завтра 10:00",
      dueState: "progress",
      priority: "Высокая",
      volume: "25 000 л",
      amount: "14 250 000 ₸",
      approvalState: "none",
      checks: { contract: true, invoice: true, payment: false, power: true, docs: false, esf: false },
      documents: [{ id: "doc-wholesale-1", type: "Счет", name: "Счет ORD-1290.pdf", status: "Получен из 1С" }],
      tasks: [{ id: "task-wholesale-1", title: "Контролировать оплату оптового счёта", owner: "Ильяс", due: "Завтра 10:00", done: false }],
      comments: [{ author: "Ильяс", text: "Счёт отправлен, клиент подтвердил получение.", time: "Сегодня" }],
      history: ["Создан оптовый заказ", "Счёт сформирован в 1С", "Счёт отправлен клиенту"],
    },
    {
      id: "AGR-0713",
      type: "contracts",
      clientId: "cli-4",
      companyKey: "trade",
      product: "ГСМ",
      fuel: "ДТ лето",
      supply: "Опт",
      stage: "Ожидается подписание",
      owner: "Екатерина",
      due: "2 рабочих дня",
      dueState: "progress",
      priority: "Обычная",
      volume: "Рамочный договор",
      amount: "Индивидуальная цена",
      approvalState: "none",
      checks: { requisites: true, project: true, signed: false, expiryTask: false },
      documents: [{ id: "doc-service-1", type: "Договор", name: "Проект договора Qaz Logistic.docx", status: "Отправлен клиенту" }],
      tasks: [{ id: "task-service-1", title: "Получить подписанный договор", owner: "Екатерина", due: "2 рабочих дня", done: false }],
      comments: [{ author: "Екатерина", text: "Проект согласован и отправлен клиенту.", time: "Сегодня" }],
      history: ["Реквизиты получены", "Проект договора подготовлен", "Отправлено клиенту"],
    },
    {
      id: "APP-5522",
      type: "appeals",
      clientId: "cli-1",
      companyKey: "trade",
      product: "ГСМ",
      fuel: "АИ-92",
      supply: "Email",
      stage: "Новое обращение",
      owner: "Екатерина",
      due: "12 мин.",
      dueState: "new",
      priority: "Высокая",
      volume: "Запрос счёта и условий",
      amount: "7 500 л",
      approvalState: "none",
      details: { source: "Email", topic: "Счёт", closeReason: "", firstResponseAt: "", customerMessage: "Просим выставить счёт на АИ-92 и сообщить срок поставки." },
      checks: { classified: false, linked: false, clientAnswer: false },
      documents: [],
      tasks: [{ id: "task-inbox-email", title: "Классифицировать обращение из email", owner: "Екатерина", due: "Сегодня", done: false }],
      comments: [{ author: "Email клиента", text: "Просим выставить счёт на АИ-92 и сообщить срок поставки.", time: "13:08" }],
      history: ["Создано из корпоративной почты"],
    },
    {
      id: "APP-5523",
      type: "appeals",
      clientId: "cli-2",
      companyKey: "ugh",
      product: "Газ",
      fuel: "Автогаз",
      supply: "Телефония",
      stage: "В работе",
      owner: "Ельжан",
      due: "5 мин.",
      dueState: "warn",
      priority: "Критическая",
      volume: "Входящий звонок",
      amount: "Уточнение оплаты",
      approvalState: "none",
      details: { source: "Телефония", topic: "Оплата", closeReason: "", firstResponseAt: "13:02", customerMessage: "Клиент уточняет, поступила ли оплата по последнему счёту." },
      checks: { classified: true, linked: false, clientAnswer: false },
      documents: [],
      tasks: [{ id: "task-inbox-phone", title: "Проверить оплату и перезвонить клиенту", owner: "Ельжан", due: "Сегодня 13:20", done: false }],
      comments: [{ author: "Телефония", text: "Клиент уточняет, поступила ли оплата по последнему счёту.", time: "13:01" }],
      history: ["Создано из входящего звонка", "Обращение взято в работу Ельжаном"],
    },
    {
      id: "APP-5524",
      type: "appeals",
      clientId: "cli-4",
      companyKey: "trade",
      product: "ГСМ",
      fuel: "ДТ лето",
      supply: "WhatsApp",
      stage: "Ожидается клиент",
      owner: "Жанара",
      due: "Сегодня 15:00",
      dueState: "progress",
      priority: "Обычная",
      volume: "WhatsApp",
      amount: "Продление доверенности",
      approvalState: "none",
      details: { source: "WhatsApp", topic: "Документы", closeReason: "", firstResponseAt: "12:42", customerMessage: "Подскажите, куда отправить новую доверенность?" },
      checks: { classified: true, linked: false, clientAnswer: false },
      documents: [],
      tasks: [{ id: "task-inbox-wa", title: "Получить новую доверенность", owner: "Жанара", due: "Сегодня 15:00", done: false }],
      comments: [
        { author: "Жанара", text: "Отправила клиенту адрес корпоративной почты.", time: "12:42" },
        { author: "WhatsApp", text: "Подскажите, куда отправить новую доверенность?", time: "12:39" },
      ],
      history: ["Создано из WhatsApp", "Первый ответ отправлен за 3 минуты"],
    },
  ],
};

let state = loadState();
let currentUserId = localStorage.getItem(SESSION_KEY) || "";
let currentLanguage = localStorage.getItem(LANGUAGE_KEY) === "kk" ? "kk" : "ru";
let activeView = "dashboard";
let currentCompany = "all";
let slaOnly = false;
let activeStage = "";
let modalTab = "data";
let currentModalId = "";
let currentFounderSignalKey = "";
let activeChatType = "group";
let activeChatId = "group-general";
let crmChannelFilter = "all";

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));
const uid = (prefix) => `${prefix}-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

function t(key) {
  return UI_TEXT[currentLanguage]?.[key] || UI_TEXT.ru[key] || key;
}

function applyLanguage() {
  document.documentElement.lang = currentLanguage === "kk" ? "kk" : "ru";
  $$("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  $$("[data-i18n-placeholder]").forEach((element) => {
    element.setAttribute("placeholder", t(element.dataset.i18nPlaceholder));
  });
  $$("[data-lang]").forEach((button) => {
    button.classList.toggle("is-selected", button.dataset.lang === currentLanguage);
  });
  const passwordInput = $("#loginPassword");
  const passwordToggle = $("#passwordToggle");
  if (passwordInput && passwordToggle) {
    const label = passwordInput.type === "password" ? t("showPassword") : t("hidePassword");
    passwordToggle.setAttribute("aria-label", label);
    passwordToggle.setAttribute("title", label);
  }
  updateViewTitle();
}

function setLanguage(language) {
  if (!["ru", "kk"].includes(language)) return;
  currentLanguage = language;
  localStorage.setItem(LANGUAGE_KEY, language);
  applyLanguage();
  renderAll();
}

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
  const savedUsers = Array.isArray(saved.users) ? saved.users : [];
  const seedIds = new Set(STAFF.map((user) => user.id));
  next.users = STAFF.map((seed) => {
    const existing = savedUsers.find((user) => user.id === seed.id);
    return {
      ...seed,
      ...(existing || {}),
      roleId: existing?.roleId || seed.roleId,
      passwordHash: existing?.passwordHash || seed.passwordHash,
      login: existing?.login || seed.login,
      active: existing?.active ?? seed.active,
    };
  }).concat(savedUsers.filter((user) => !seedIds.has(user.id) && user.roleId));
  next.fuels = FUEL_TYPES;
  next.sales = saved.sales?.length ? saved.sales : structuredClone(DEMO_SALES);
  next.reportPeriod = saved.reportPeriod || { start: monthStartISO(), end: todayISO() };
  next.auditLog = Array.isArray(saved.auditLog) ? saved.auditLog : [];
  next.notifications = Array.isArray(saved.notifications) ? saved.notifications : [];
  next.founderTasks = Array.isArray(saved.founderTasks) ? saved.founderTasks : [];
  next.aiChats = saved.aiChats && typeof saved.aiChats === "object" ? saved.aiChats : {};
  next.crmSettings = {
    sla: { ...DEFAULT_SLA_SETTINGS, ...(saved.crmSettings?.sla || {}) },
    roundRobinIndex: Number(saved.crmSettings?.roundRobinIndex || 0),
  };
  next.serviceDesk = {
    managerStatuses: {
      ...Object.fromEntries(SERVICE_MANAGER_NAMES.map((name) => [name, "Не в сети"])),
      ...(saved.serviceDesk?.managerStatuses || {}),
    },
    lastShiftAt: saved.serviceDesk?.lastShiftAt || {},
    emptyStartApplied: Boolean(saved.serviceDesk?.emptyStartApplied),
  };
  next.communications = {
    groups: Array.isArray(saved.communications?.groups) ? saved.communications.groups : structuredClone(DEFAULT_STATE.communications.groups),
    messages: Array.isArray(saved.communications?.messages) ? saved.communications.messages : structuredClone(DEFAULT_STATE.communications.messages),
  };
  const generalGroup = next.communications.groups.find((group) => group.id === "group-general");
  if (generalGroup) {
    next.users.filter((user) => user.roleId && user.active !== false).forEach((user) => {
      if (!generalGroup.memberIds.includes(user.id)) generalGroup.memberIds.push(user.id);
    });
  }
  next.counters = Object.fromEntries(
    Object.entries(DEFAULT_STATE.counters).map(([key, value]) => [key, Math.max(value, saved.counters?.[key] || 0)]),
  );
  const ownerMap = {
    "Алия С.": "Жанара",
    "Дина Б.": "Ольга",
    "Руслан Г.": "Ольга",
    "Айгерим Т.": "Ольга",
    "Марат К.": "Диана",
    "Дежурный менеджер": "Жанара",
    "Система": "Ельжан",
    "Директор GAZOIL TRADE": "Хуснутдинов Р. Р.",
    "Директор УГХ": "Киікбай А. Б.",
    "Киікбай А.Б.": "Киікбай А. Б.",
    "Бухгалтерия GAZOIL TRADE": "Татьяна",
    "Бухгалтерия УГХ GAZOIL": "Айнура",
    "Бухгалтерия УГХ": "Айнура",
  };
  next.clients = (saved.clients || DEFAULT_STATE.clients).map((client) => ({
    ...client,
    type: client.type === "Обычный клиент" ? "Обычный юридический клиент" : client.type || "Обычный юридический клиент",
    buysGsm: client.buysGsm ?? String(client.products || "").includes("ГСМ"),
    buysGas: client.buysGas ?? String(client.products || "").includes("Газ"),
    powerFile: client.powerFile || "",
    powerPerson: client.powerPerson || "",
    legalAddress: client.legalAddress || "",
    bankDetails: client.bankDetails || "",
    phone: client.phone || "",
    email: client.email || "",
    status: client.status || "Активный",
    responsible: client.responsible || "",
    supplyMethods: client.supplyMethods || String(client.products || "").split(",").map((item) => item.trim()).filter(Boolean),
  }));
  const savedProcesses = saved.processes?.length ? saved.processes : structuredClone(DEFAULT_STATE.processes);
  const savedProcessIds = new Set(savedProcesses.map((process) => process.id));
  const processSource = savedProcesses.concat(structuredClone(DEFAULT_STATE.processes).filter((process) => !savedProcessIds.has(process.id)));
  next.processes = processSource.map((process) => {
    const fuel = process.fuel || inferFuel(process);
    const migrateEmailAppealOwner = process.id === "APP-5522" && process.owner === "Диана";
    const owner = migrateEmailAppealOwner ? "Екатерина" : ownerMap[process.owner] || process.owner || defaultOwnerFor(process.type);
    const client = next.clients.find((item) => item.id === process.clientId);
    const migrateTenderApproval = process.id === "TEN-0188" && process.stage === "Подготовка заявки" && process.approvalState === "approved";
    const stage = migrateTenderApproval ? "На решении директора" : process.stage;
    const stagePosition = metaFor(process.type).stages.indexOf(stage);
    const migrated = {
      ...process,
      stage,
      fuel,
      product: productByFuel(fuel),
      companyKey: companyByFuel(fuel),
      direction: companyByFuel(fuel),
      clientType: process.clientType || client?.type || "Обычный юридический клиент",
      owner: migrateTenderApproval ? "Киікбай А. Б." : owner,
      approvalState: migrateTenderApproval ? "pending" : process.approvalState,
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
      details: { ...defaultProcessDetails(process.type, process), ...(process.details || {}) },
      checks: { ...defaultChecks(process.type), ...(process.checks || {}), ...(migrateTenderApproval ? { director: false } : {}) },
      documents: process.documents || [],
      tasks: (process.tasks || []).map((task) => ({
        priority: process.priority || "Обычная",
        status: task.done ? "Выполнена" : "В работе",
        createdBy: "Система",
        createdAt: new Date().toISOString(),
        result: "",
        ...task,
        owner: migrateEmailAppealOwner && task.owner === "Диана" ? "Екатерина" : ownerMap[task.owner] || task.owner || owner,
      })),
      comments: process.comments || [],
      history: process.history || ["Карточка импортирована из демо-состояния"],
    };
    if (migrated.type === "appeals") {
      const createdAt = migrated.details.createdAt || migrated.createdAt || new Date(Date.now() - 5 * 60 * 1000).toISOString();
      migrated.createdAt = migrated.createdAt || createdAt;
      migrated.details = {
        communicationId: migrated.details.communicationId || `COM-${migrated.id.replace(/\D/g, "") || Date.now().toString().slice(-6)}`,
        communicationStatus: migrated.details.communicationStatus || (migrated.details.source === "Телефония" ? "Завершён" : "Получено"),
        callDurationSeconds: Number(migrated.details.callDurationSeconds || 0),
        callRecordingUrl: migrated.details.callRecordingUrl || "",
        contactName: migrated.details.contactName || "",
        phone: migrated.details.phone || client?.phone || "",
        email: migrated.details.email || client?.email || "",
        subject: migrated.details.subject || migrated.volume || "",
        result: migrated.details.result || "",
        problemDescription: migrated.details.problemDescription || "",
        createdAt,
        firstResponseAtISO: migrated.details.firstResponseAtISO || "",
        classifiedAt: migrated.details.classifiedAt || "",
        linkedAt: migrated.details.linkedAt || "",
        resolvedAt: migrated.details.resolvedAt || "",
        missedCall: Boolean(migrated.details.missedCall),
        callbackCompletedAt: migrated.details.callbackCompletedAt || "",
        nextStep: migrated.details.nextStep || "",
        repeatAppeal: Boolean(migrated.details.repeatAppeal),
        previousOwner: migrated.details.previousOwner || "",
        assignmentReason: migrated.details.assignmentReason || "",
        ...migrated.details,
      };
      if (migrated.details.firstResponseAt && !migrated.details.firstResponseAtISO) {
        migrated.details.firstResponseAtISO = createdAt;
        migrated.checks.firstResponse = true;
      }
      if (migrated.checks.classified && !migrated.details.classifiedAt) migrated.details.classifiedAt = createdAt;
      if (migrated.checks.linked && !migrated.details.linkedAt) migrated.details.linkedAt = createdAt;
    }
    return migrated;
  });
  if (!next.serviceDesk.emptyStartApplied) {
    next.processes = next.processes.filter((process) => process.type !== "appeals");
    next.serviceDesk.emptyStartApplied = true;
  }
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

function crmSlaSettings() {
  return { ...DEFAULT_SLA_SETTINGS, ...(state.crmSettings?.sla || {}) };
}

function minutesSince(iso) {
  const time = Date.parse(iso || "");
  return Number.isFinite(time) ? Math.max(0, Math.floor((Date.now() - time) / 60000)) : 0;
}

function appealSlaStatus(process) {
  const details = process.details || {};
  const sla = crmSlaSettings();
  const age = minutesSince(details.createdAt || process.createdAt);
  const violations = [];
  const terminal = ["Решено", "Закрыто без решения"].includes(process.stage);
  if (!details.firstResponseAtISO && !terminal && age > sla.firstResponseMinutes) violations.push("Просрочен первый ответ");
  if (!details.classifiedAt && !terminal && age > sla.classificationMinutes) violations.push("Не выполнена классификация");
  if (details.classifiedAt && APPEAL_PROCESS_BY_CLASSIFICATION[details.topic] && !process.checks?.linked && minutesSince(details.classifiedAt) > sla.processCreationMinutes) {
    violations.push("Нет связанного процесса");
  }
  if (details.missedCall && !details.callbackCompletedAt && age > sla.missedCallMinutes) violations.push("Пропущенный звонок без перезвона");
  if (details.topic === "Консультация" && !terminal && age > sla.consultationHours * 60) violations.push("Консультация не закрыта");
  if (process.stage === "В работе" && age > sla.consultationHours * 60) violations.push("Обращение зависло в работе");
  if (process.stage === "Закрыто без решения" && !details.closeReason?.trim()) violations.push("Закрыто без причины");
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
  } else if (details.topic === "Консультация" && !terminal) {
    nextMinutes = sla.consultationHours * 60 - age;
    label = `Закрыть консультацию: ${Math.max(0, Math.ceil(nextMinutes / 60))} ч.`;
  }
  return { violations: [...new Set(violations)], nextMinutes, label };
}

function refreshAppealSla(process) {
  if (process.type !== "appeals") return process;
  const status = appealSlaStatus(process);
  process.slaViolations = status.violations;
  process.due = status.violations.length ? status.violations[0] : status.label;
  if (["Решено", "Закрыто без решения"].includes(process.stage)) process.dueState = "ok";
  else if (status.violations.length) process.dueState = "danger";
  else if (status.nextMinutes <= 5) process.dueState = "warn";
  else process.dueState = process.details?.firstResponseAtISO ? "progress" : "new";
  return process;
}

function appealKanbanColumn(process) {
  const violations = appealSlaStatus(process).violations;
  if (violations.length) return "Просрочено";
  if (process.stage === "Новое обращение" && process.details?.communicationStatus === "Входящий") return "Новое";
  if (process.stage === "Новое обращение" && !process.details?.firstResponseAtISO) return "Требуется первый ответ";
  if (process.stage === "Новое обращение" || process.stage === "Требуется классификация") return "Требуется классификация";
  if (process.stage === "Передано в профильный процесс") return "Передано в процесс";
  return process.stage;
}

function serviceManagers() {
  return state.users.filter((user) => user.roleId === "SERVICE_MANAGER" && user.active !== false);
}

function ensureServiceDeskState() {
  state.serviceDesk ||= {};
  state.serviceDesk.managerStatuses ||= {};
  state.serviceDesk.lastShiftAt ||= {};
  SERVICE_MANAGER_NAMES.forEach((name) => {
    if (!SERVICE_MANAGER_STATUSES.includes(state.serviceDesk.managerStatuses[name])) state.serviceDesk.managerStatuses[name] = "Не в сети";
  });
  return state.serviceDesk;
}

function managerWorkStatus(name) {
  return ensureServiceDeskState().managerStatuses[name] || "Не в сети";
}

function managerStatusTone(status) {
  if (status === "На работе / активен") return "is-ok";
  if (["Занят", "На звонке"].includes(status)) return "is-warn";
  if (["Завершил смену", "Не в сети"].includes(status)) return "is-danger";
  return "is-progress";
}

function serviceStatusOptions(selected = "Не в сети") {
  return SERVICE_MANAGER_STATUSES.map((status) => `<option value="${status}" ${status === selected ? "selected" : ""}>${status}</option>`).join("");
}

function setServiceManagerStatus(name, status, shouldSave = true) {
  if (!SERVICE_MANAGER_NAMES.includes(name) || !SERVICE_MANAGER_STATUSES.includes(status)) return false;
  const desk = ensureServiceDeskState();
  const previous = desk.managerStatuses[name] || "Не в сети";
  if (previous === status) return false;
  desk.managerStatuses[name] = status;
  desk.lastShiftAt[name] = new Date().toISOString();
  audit("Изменение рабочего статуса менеджера", "service-manager", name, previous, status);
  if (shouldSave) {
    saveState();
    renderAll();
  }
  return true;
}

function activateCurrentServiceManager(shouldSave = false, force = false) {
  const user = currentUser();
  if (!SERVICE_MANAGER_NAMES.includes(user.name)) return false;
  const currentStatus = managerWorkStatus(user.name);
  if (currentStatus === "На работе / активен") return false;
  if (!force && currentStatus === "Завершил смену") return false;
  return setServiceManagerStatus(user.name, "На работе / активен", shouldSave);
}

function serviceTaskPool() {
  return state.processes.flatMap((process) => (process.tasks || []).map((task) => ({ ...task, processId: process.id, processType: process.type })));
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

function serviceManagerLoad(name) {
  const status = managerWorkStatus(name);
  const appeals = state.processes.filter((process) => process.type === "appeals" && process.owner === name).map(refreshAppealSla);
  const openAppeals = appeals.filter((process) => !["Решено", "Закрыто без решения"].includes(process.stage));
  const newAppeals = openAppeals.filter((process) => ["Новое обращение", "Требуется классификация"].includes(process.stage) && !process.details?.firstResponseAtISO);
  const inWork = openAppeals.filter((process) => ["Требуется классификация", "В работе", "Ожидается клиент", "Передано в профильный процесс"].includes(process.stage));
  const unclassified = openAppeals.filter((process) => !process.checks?.classified);
  const overdueAppeals = openAppeals.filter((process) => process.slaViolations?.length || process.dueState === "danger");
  const tasks = serviceTaskPool().filter((task) => task.owner === name && !task.done);
  const todayTasks = tasks.filter(taskIsToday);
  const overdueTasks = tasks.filter(taskIsOverdue);
  const statusPenalty = status === "На работе / активен" ? 0 : SERVICE_BUSY_FALLBACK_STATUSES.includes(status) ? 4 : 1000;
  const score = newAppeals.length * 2 + inWork.length * 1.5 + todayTasks.length + overdueTasks.length * 3 + unclassified.length * 2 + statusPenalty;
  return {
    name,
    status,
    score,
    appeals,
    openAppeals,
    newAppeals,
    inWork,
    unclassified,
    overdueAppeals,
    tasks,
    todayTasks,
    overdueTasks,
  };
}

function isManagerAssignable(name, allowBusy = false) {
  const status = managerWorkStatus(name);
  return SERVICE_AUTO_ASSIGN_STATUSES.includes(status) || allowBusy && SERVICE_BUSY_FALLBACK_STATUSES.includes(status);
}

function lastResponsibleServiceManager(clientId) {
  if (!clientId || clientId === "cli-unidentified") return "";
  return state.processes
    .filter((process) => process.type === "appeals" && process.clientId === clientId && SERVICE_MANAGER_NAMES.includes(process.owner))
    .sort((a, b) => Date.parse(b.details?.createdAt || b.createdAt || 0) - Date.parse(a.details?.createdAt || a.createdAt || 0))[0]?.owner || "";
}

function chooseLeastLoadedServiceManager(allowBusy = false) {
  const candidates = SERVICE_MANAGER_NAMES.filter((name) => isManagerAssignable(name, allowBusy));
  if (!candidates.length && !allowBusy) return chooseLeastLoadedServiceManager(true);
  if (!candidates.length) return "";
  return candidates
    .map(serviceManagerLoad)
    .sort((a, b) => a.score - b.score || a.openAppeals.length - b.openAppeals.length || a.name.localeCompare(b.name, "ru"))[0]?.name || "";
}

function selectServiceManagerForAppeal(client) {
  const previousOwner = lastResponsibleServiceManager(client?.id);
  if (previousOwner && isManagerAssignable(previousOwner)) {
    return { owner: previousOwner, previousOwner, reason: "Повторное обращение клиента" };
  }
  if (SERVICE_MANAGER_NAMES.includes(client?.responsible) && isManagerAssignable(client.responsible)) {
    return { owner: client.responsible, previousOwner, reason: "Закреплённый менеджер клиента" };
  }
  const owner = chooseLeastLoadedServiceManager();
  if (owner) return { owner, previousOwner, reason: "Распределено по минимальной нагрузке" };
  const current = currentUser();
  if (SERVICE_MANAGER_NAMES.includes(current.name) && SERVICE_BUSY_FALLBACK_STATUSES.includes(managerWorkStatus(current.name))) {
    return { owner: current.name, previousOwner, reason: "Назначено текущему менеджеру как резерв" };
  }
  return { owner: "Диана", previousOwner, reason: "Нет активных менеджеров обслуживания" };
}

function nextServiceManager() {
  return chooseLeastLoadedServiceManager() || currentUser().name;
}

function findClientsByContact({ phone = "", email = "", bin = "", name = "", contact = "" } = {}) {
  const normalizedPhone = phone.replace(/\D/g, "");
  const normalizedBin = bin.replace(/\D/g, "");
  const values = [name, contact].map((value) => value.trim().toLowerCase()).filter(Boolean);
  return state.clients.filter((client) => {
    const clientPhones = `${client.phone || ""} ${client.contacts || ""}`.replace(/\D/g, "");
    const clientText = `${client.name || ""} ${client.contacts || ""}`.toLowerCase();
    return Boolean(
      normalizedPhone && clientPhones.includes(normalizedPhone) ||
      email && `${client.email || ""} ${client.contacts || ""}`.toLowerCase().includes(email.trim().toLowerCase()) ||
      normalizedBin && client.bin?.replace(/\D/g, "") === normalizedBin ||
      values.some((value) => clientText.includes(value)),
    );
  });
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

function audit(action, objectType, objectId, oldValue = "", newValue = "", actor = currentUser()) {
  state.auditLog ||= [];
  state.auditLog.unshift({
    id: uid("audit"),
    userId: actor?.id || "system",
    user: actor?.name || "Система",
    role: actor?.role || "Система",
    action,
    objectType,
    objectId,
    oldValue: typeof oldValue === "string" ? oldValue : JSON.stringify(oldValue),
    newValue: typeof newValue === "string" ? newValue : JSON.stringify(newValue),
    createdAt: new Date().toISOString(),
    device: navigator.userAgent.slice(0, 120),
  });
  state.auditLog = state.auditLog.slice(0, 1000);
}

function notify(userId, title, text, tone = "progress", processId = "") {
  state.notifications ||= [];
  state.notifications.unshift({
    id: uid("notification"),
    userId,
    title,
    text,
    tone,
    processId,
    createdAt: new Date().toISOString(),
    read: false,
  });
  state.notifications = state.notifications.slice(0, 500);
}

function userNotifications() {
  return (state.notifications || []).filter((item) => !item.userId || item.userId === currentUserId);
}

function unreadCommunicationsCount() {
  const groupIds = new Set((state.communications?.groups || []).filter((group) => group.memberIds.includes(currentUserId)).map((group) => group.id));
  return (state.communications?.messages || []).filter((message) => {
    const available = message.channelType === "group" ? groupIds.has(message.channelId) : message.channelId.split("--").includes(currentUserId);
    return available && message.authorId !== currentUserId && !(message.readBy || []).includes(currentUserId);
  }).length;
}

function runAutomations() {
  const now = new Date();
  let changed = false;
  state.processes.forEach((process) => {
    process.automationFlags ||= {};
    if (process.type === "appeals") {
      const previousViolations = JSON.stringify(process.slaViolations || []);
      refreshAppealSla(process);
      if (JSON.stringify(process.slaViolations || []) !== previousViolations) changed = true;
      if (process.slaViolations?.length && !process.automationFlags.appealSlaNotice) {
        notify("diana", "Нарушение SLA входящего обращения", `${process.id}: ${process.slaViolations.join(", ")}`, "danger", process.id);
        audit("Нарушение SLA обращения", process.type, process.id, "", process.slaViolations, { id: "system", name: "Система", role: "Автоматизация" });
        process.automationFlags.appealSlaNotice = true;
        changed = true;
      }
    }
    if (process.type === "contracts" && process.details?.endDate) {
      const end = new Date(`${process.details.endDate}T23:59:59`);
      const days = Math.ceil((end - now) / 86400000);
      if (days >= 0 && days <= 15 && !["Закрыт без подписания", "На перезаключении"].includes(process.stage)) {
        const previous = process.stage;
        process.stage = "Скоро истекает";
        process.checks.expiryTask = true;
        if (!process.tasks.some((task) => task.automationKey === "contract-expiry")) {
          process.tasks.unshift({ id: uid("task"), automationKey: "contract-expiry", title: "Перезаключить договор", owner: process.owner, due: `Через ${days} дн.`, priority: "Высокая", status: "Новая", createdBy: "Автоматизация", createdAt: new Date().toISOString(), result: "", done: false });
        }
        if (!process.automationFlags.expiry15) {
          notify("madi", "Договор скоро истекает", `${process.id}: осталось ${days} дней`, "warn", process.id);
          notify("diana", "Договор скоро истекает", `${process.id}: создать перезаключение`, "warn", process.id);
          audit("Автоматизация: договор скоро истекает", process.type, process.id, previous, process.stage, { id: "system", name: "Система", role: "Автоматизация" });
          process.automationFlags.expiry15 = true;
        }
        changed = true;
      }
    }
    if (process.type === "tenders") {
      const deadline = process.details?.deadline ? new Date(process.details.deadline) : null;
      const hours = deadline && Number.isFinite(deadline.getTime()) ? (deadline - now) / 3600000 : /3 ч/i.test(process.due) ? 3 : null;
      if (hours !== null && hours <= 3 && hours > 0 && !process.automationFlags.tender3h) {
        notify("olga", "До дедлайна тендера менее 3 часов", `${process.id}: проверьте готовность заявки`, "danger", process.id);
        process.automationFlags.tender3h = true;
        changed = true;
      }
      if (hours !== null && hours <= 0.5 && hours > 0 && !process.automationFlags.tender30m) {
        notify("olga", "До дедлайна тендера менее 30 минут", `${process.id}: требуется немедленное действие`, "danger", process.id);
        notify("madi", "Критический дедлайн тендера", process.id, "danger", process.id);
        notify(process.companyKey === "trade" ? "khusnutdinov" : "kiikbay", "Критический дедлайн тендера", process.id, "danger", process.id);
        process.automationFlags.tender30m = true;
        changed = true;
      }
      if (hours !== null && hours < 0 && !process.checks?.submitted && !process.automationFlags.tenderExpired) {
        process.dueState = "danger";
        notify("olga", "Тендер просрочен", `${process.id}: заявка не подана`, "danger", process.id);
        notify("madi", "Тендер просрочен", `${process.id}: заявка не подана`, "danger", process.id);
        process.automationFlags.tenderExpired = true;
        audit("Просрочка тендера", process.type, process.id, "Срок подачи", "Истёк без подачи", { id: "system", name: "Система", role: "Автоматизация" });
        changed = true;
      }
    }
    if (process.dueState === "danger" && !process.automationFlags.overdueNotice) {
      notify("madi", "Просрочка процесса", `${process.id}: ${process.stage}`, "danger", process.id);
      notify("diana", "Просрочка процесса", `${process.id}: ответственный ${process.owner}`, "danger", process.id);
      const ownerId = state.users.find((user) => user.name === process.owner)?.id;
      if (ownerId) notify(ownerId, "Просрочена задача", `${process.id}: ${process.stage}`, "danger", process.id);
      process.automationFlags.overdueNotice = true;
      changed = true;
    }
  });
  if (changed) saveState();
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

function currentUser() {
  return state.users.find((user) => user.id === currentUserId) || state.users.find((user) => user.id === "madi");
}

function currentPolicy() {
  const policy = ROLE_POLICIES[currentUser().roleId] || {
    companies: ["trade", "ugh"],
    views: ["dashboard"],
    canCreate: false,
    canApprove: false,
    canSeeFinancials: false,
    canSeeTeam: false,
  };
  return { ...policy, views: [...new Set([...(policy.views || []), "assistant", "messages"])] };
}

function isDirectorApprovalStage(process) {
  return process.approvalState === "pending" || process.stage.toLowerCase().includes("директор");
}

function accessibleProcesses() {
  const policy = currentPolicy();
  const user = currentUser();
  return state.processes.filter((process) => {
    if (!policy.companies.includes(process.companyKey)) return false;
    if (policy.roleType === "assignedManager") return process.owner === user.name || process.tasks?.some((task) => task.owner === user.name);
    if (policy.roleType === "salesManager") {
      return process.owner === user.name || ["appeals", "contracts", "orders"].includes(process.type) && ["Новое обращение", "Требуется классификация", "В работе", "Получены реквизиты", "Подготовка договора", "Новый запрос", "Проверка договора"].includes(process.stage);
    }
    if (policy.roleType === "wholesaleManager") return process.owner === user.name || String(process.supply).toLowerCase().includes("опт");
    if (policy.roleType === "procurementManager") {
      const client = clientById(process.clientId);
      return process.owner === user.name || process.type === "tenders" || client?.type === "Государственная организация";
    }
    if (policy.roleType === "cashier") return process.owner === user.name || process.owner === "Касса" || /касс|аннулирование талонов/i.test(process.stage);
    if (policy.roleType === "accountant") return ["contracts", "orders", "refunds"].includes(process.type) && (process.owner === user.name || /бухгалтер|оплат|счет|счёт|финанс/i.test(process.stage));
    if (policy.roleType === "bankAccountant") return process.type === "refunds" && (process.owner === user.name || process.owner === "Бухгалтер по банку" || /банковского возврата|возврат произведен/i.test(process.stage));
    if (policy.roleType === "systemAdmin") return false;
    return true;
  });
}

function canAccessProcess(process) {
  return Boolean(process && accessibleProcesses().some((item) => item.id === process.id));
}

function accessibleClients() {
  const policy = currentPolicy();
  if (["commercialDirector", "seniorManager", "founder"].includes(policy.roleType)) return state.clients;
  const clientIds = new Set(accessibleProcesses().map((process) => process.clientId));
  return state.clients.filter((client) => clientIds.has(client.id) || policy.roleType === "procurementManager" && client.type === "Государственная организация");
}

function visibleFuelTypes() {
  const companies = currentPolicy().companies;
  return FUEL_TYPES.filter((fuel) => companies.includes(companyByFuel(fuel)));
}

function metaFor(type) {
  return PROCESS_META[type] || PROCESS_META.orders;
}

function processName(type, plural = false) {
  const meta = currentLanguage === "kk" ? PROCESS_NAMES_KK[type] : PROCESS_META[type];
  const fallback = metaFor(type);
  return (meta || fallback)[plural ? "plural" : "label"];
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
  if (currentUserId && !currentPolicy().canReassign) {
    const user = currentUser();
    return `<option value="${escapeAttr(user.name)}" ${user.name === selected ? "selected" : ""}>${user.name} — ${user.role}</option>`;
  }
  return state.users.filter((user) => user.scope === "both" || user.scope === scope)
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
          ? ["WhatsApp", "Телефония", "Email", "Офис", "Сайт", "Руководитель", "Иное"]
          : CRM_DICTIONARIES.supplyMethods;
  return values.map((value) => `<option ${value === selected ? "selected" : ""}>${value}</option>`).join("");
}

function defaultOwnerFor(type, clientType = "Обычный юридический клиент") {
  if (type === "tenders" || clientType === "Государственная организация") return "Ольга";
  if (type === "contracts") return "Диана";
  if (type === "refunds" || type === "extensions") return "Ольга";
  return "Жанара";
}

function allowedCreateTypes() {
  const roleType = currentPolicy().roleType;
  if (["commercialDirector", "seniorManager"].includes(roleType)) return Object.keys(PROCESS_META);
  if (roleType === "procurementManager") return ["tenders", "contracts", "extensions", "refunds"];
  if (roleType === "salesManager") return ["appeals", "contracts", "orders"];
  if (roleType === "wholesaleManager") return ["appeals", "contracts", "orders"];
  if (roleType === "assignedManager") return ["appeals", "contracts", "orders", "extensions", "refunds", "tenders"];
  return [];
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
  return accessibleProcesses().filter((process) => {
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
  return accessibleProcesses().filter(predicate).length;
}

function renderMetrics() {
  const policy = currentPolicy();
  const approvals = countBy((item) => item.approvalState === "pending" || item.stage.toLowerCase().includes("директор"));
  const overdue = countBy((item) => item.dueState === "danger");
  const incoming = countBy((item) => item.type === "appeals" && ["Новое обращение", "Требуется классификация"].includes(item.stage));
  const expiring = countBy((item) => item.type === "contracts" && item.stage === "Скоро истекает");
  const approvalAmount = accessibleProcesses()
    .filter(isDirectorApprovalStage)
    .reduce((sum, process) => sum + (Number(String(process.amount).replace(/[^\d]/g, "")) || 0), 0);
  const today = aggregateSales(salesInPeriod(todayISO(), todayISO()));
  const month = aggregateSales(salesInPeriod(monthStartISO(), todayISO()));
  const activeTasks = accessibleProcesses().flatMap((process) => process.tasks || []).filter((task) => !task.done).length;
  let metrics;
  if (policy.roleType === "companyDirector") {
    metrics = [
      ["stamp", "is-amber", currentLanguage === "kk" ? "Менің шешімімді күтуде" : "Ждут моего решения", approvals, companyLabel(policy.companies[0]), "approvals"],
      ["circle-alert", "is-red", currentLanguage === "kk" ? "Шұғыл шешімдер" : "Срочные решения", overdue, currentLanguage === "kk" ? "мерзімі бұзылған келісулер" : "процессы с нарушенным сроком", "overdue"],
      ["banknote", "is-blue", currentLanguage === "kk" ? "Келісу сомасы" : "Сумма на согласовании", formatMoney(approvalAmount), currentLanguage === "kk" ? "қолжетімді карточкалар бойынша" : "по карточкам на решении", "approvals"],
      ["chart-no-axes-combined", "is-green", currentLanguage === "kk" ? "Бүгінгі сатылым" : "Продажи сегодня", formatMoney(today.revenue), formatLiters(today.liters), "all"],
    ];
  } else if (policy.roleType === "founder") {
    metrics = [
      ["chart-no-axes-combined", "is-green", "Продажи месяца", formatMoney(month.revenue), formatLiters(month.liters), "all"],
      ["building-2", "is-blue", "Компании", 2, "GAZOIL TRADE и УГХ GAZOIL", "all"],
      ["wallet-cards", "is-amber", "Возвраты в работе", countBy((item) => item.type === "refunds" && !item.stage.includes("Закрыто")), sumAmounts("refunds"), "all"],
      ["triangle-alert", "is-red", "Важные риски", overdue, "просрочки и критические сигналы", "overdue"],
    ];
  } else if (["assignedManager", "salesManager", "wholesaleManager", "procurementManager"].includes(policy.roleType)) {
    metrics = [
      ["list-checks", "is-blue", "Мои активные задачи", activeTasks, "назначенные процессы", "all"],
      ["circle-alert", "is-red", "Мои просрочки", overdue, "требуют действия сегодня", "overdue"],
      ["building-2", "is-green", "Доступные клиенты", accessibleClients().length, "в моей зоне ответственности", "all"],
      [policy.roleType === "procurementManager" ? "landmark" : "badge-check", "is-amber", policy.roleType === "procurementManager" ? "Тендеры" : "Активные процессы", accessibleProcesses().length, "рабочий контур", "all"],
    ];
  } else {
    metrics = [
      ["stamp", "is-amber", t("waitingDecision"), approvals, currentLanguage === "kk" ? "келісулер мен директор шешімдері" : "согласования и решения директоров", "approvals"],
      ["circle-alert", "is-red", t("overdue"), overdue, currentLanguage === "kk" ? "SLA мерзімі бұзылған карточкалар" : "карточки с нарушенным SLA", "overdue"],
      ["inbox", "is-blue", t("distribute"), incoming, currentLanguage === "kk" ? "жаңа және жіктелмеген өтініштер" : "новые и неклассифицированные обращения", "incoming"],
      ["file-clock", "is-green", t("expiringContracts"), expiring, currentLanguage === "kk" ? "қайта жасасуды талап етеді" : "требуют перезаключения", "expiring"],
    ];
  }

  $(".metric-grid").innerHTML = metrics
    .map(
      ([icon, tone, label, value, hint, queue]) => `
        <article class="metric-card" data-dashboard-queue="${queue}" role="button" tabindex="0">
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
  const total = accessibleProcesses()
    .filter((process) => process.type === type)
    .map((process) => Number(String(process.volume).replace(/[^\d]/g, "")))
    .filter(Boolean)
    .reduce((sum, value) => sum + value, 0);
  return total ? `${total.toLocaleString("ru-RU")} л` : "0 л";
}

function salesInPeriod(start, end) {
  const companies = currentPolicy().companies;
  return (state.sales || []).filter((row) => row.date >= start && row.date <= end && companies.includes(row.companyKey));
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
  const companies = currentPolicy().companies;
  const rows = (state.sales || []).filter(
    (row) => row.fuel === fuel && companies.includes(row.companyKey) && row.date < today && row.date >= addDaysISO(today, -7),
  );
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
              <span class="status-pill ${statusClass(processTone(process))}">${processName(process.type)}</span>
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
  const items = accessibleProcesses().filter((process) => process.approvalState === "pending" || process.stage.toLowerCase().includes("директор"));
  $("#approvalList").innerHTML =
    items
      .slice(0, 6)
      .map((process) => {
        const client = clientById(process.clientId);
        return `
          <article class="approval-item">
            <header>
              <strong>${processName(process.type)}: ${client.name}</strong>
              <span class="status-pill ${statusClass(processTone(process))}">${process.due}</span>
            </header>
            <p>${companyLabel(process.companyKey)} · ${process.stage}</p>
            ${
              currentPolicy().canApprove
                ? `<div class="approval-actions">
                    <button data-approve="${process.id}">Согласовать</button>
                    <button data-return="${process.id}">Вернуть</button>
                  </div>`
                : `<button class="text-button" data-open="${process.id}">Открыть карточку</button>`
            }
          </article>
        `;
      })
      .join("") || '<div class="empty-state">Очередь согласований пуста</div>';
}

function renderExecutiveDashboard() {
  renderUserShell();
  renderExecutiveHero();
  renderManagementQueue();
  renderTeamLoad();
  renderLeaderSummary();
  renderFuelSalesToday();
  renderPeriodReport();
  renderSalesAlerts();
}

function crmChannelInfo(source = "") {
  const normalized = source.toLowerCase();
  if (normalized.includes("whatsapp")) return { key: "whatsapp", label: "WhatsApp", icon: "message-circle", tone: "is-green" };
  if (normalized.includes("телефон") || normalized.includes("звон")) return { key: "phone", label: "Телефония", icon: "phone-call", tone: "is-blue" };
  if (normalized.includes("email") || normalized.includes("почт")) return { key: "email", label: "Email", icon: "mail", tone: "is-amber" };
  if (normalized.includes("сайт")) return { key: "site", label: "Сайт", icon: "globe-2", tone: "is-blue" };
  return { key: "other", label: source || "Иное", icon: "inbox", tone: "is-blue" };
}

function crmInboxAppeals() {
  return accessibleProcesses()
    .filter((process) => process.type === "appeals")
    .filter((process) => crmChannelFilter === "all" || crmChannelInfo(process.details?.source || process.supply).key === crmChannelFilter)
    .sort((a, b) => {
      const priority = { danger: 0, warn: 1, new: 2, progress: 3, ok: 4 };
      return (priority[a.dueState] ?? 5) - (priority[b.dueState] ?? 5);
    });
}

function serviceKanbanStages() {
  return [
    ["Новое", "Новые"],
    ["Требуется первый ответ", "Требуется первый ответ"],
    ["Требуется классификация", "Требуется классификация"],
    ["В работе", "В работе"],
    ["Ожидается клиент", "Ожидается клиент"],
    ["Передано в процесс", "Передано в процесс"],
    ["Просрочено", "Просрочено"],
    ["Решено", "Решено"],
  ];
}

function appealArrivalLabel(process) {
  const createdAt = Date.parse(process.details?.createdAt || process.createdAt || "");
  return Number.isFinite(createdAt) ? new Date(createdAt).toLocaleString("ru-RU", { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" }) : "сейчас";
}

function renderServiceKanbanCard(process) {
  const client = clientById(process.clientId);
  const channel = crmChannelInfo(process.details?.source || process.supply);
  const details = process.details || {};
  const suggestedType = APPEAL_PROCESS_BY_CLASSIFICATION[details.topic];
  const nextStep = details.nextStep || (suggestedType ? `Создать ${processName(suggestedType).toLowerCase()}` : !details.firstResponseAtISO ? "Первый ответ" : !process.checks?.classified ? "Классификация" : "Следующее действие");
  return `
    <article class="process-card crm-kanban-card service-appeal-card">
      <div class="crm-card-channel">
        <span data-lucide="${channel.icon}"></span><span>${channel.label}</span>
        <b>${process.priority}</b>
      </div>
      <strong>${client.name}</strong>
      <p>${details.subject || details.customerMessage || process.volume}</p>
      <div class="service-card-meta">
        <span>${details.phone || details.email || "Контакт уточняется"}</span>
        <span>${appealArrivalLabel(process)}</span>
        <span>${process.due}</span>
      </div>
      <div class="service-card-footer">
        <span class="status-pill ${managerStatusTone(managerWorkStatus(process.owner))}">${process.owner}</span>
        ${details.repeatAppeal ? '<span class="status-pill is-warn">Повторное</span>' : ""}
      </div>
      <small>Тема: ${details.topic || "Другое"} · Следующий шаг: ${nextStep}</small>
      <div class="crm-card-actions service-card-actions">
        <button data-open="${process.id}">Ответ</button>
        <button data-open="${process.id}">Класс.</button>
        <button data-create-linked="orders" data-source-process="${process.id}">Заказ</button>
        <button data-create-linked="contracts" data-source-process="${process.id}">Договор</button>
        <button data-create-linked="extensions" data-source-process="${process.id}">Продл.</button>
        <button data-create-linked="refunds" data-source-process="${process.id}">Возврат</button>
        <button data-create-appeal-task="${process.id}">Задача</button>
        <button data-assign-appeal="${process.id}">Передать</button>
      </div>
    </article>
  `;
}

function renderServiceKanban(appeals) {
  return `
    <div class="service-kanban-scroll">
      <div class="process-board service-kanban-board">
        ${serviceKanbanStages().map(([key, label]) => {
          const items = appeals.filter((process) => appealKanbanColumn(process) === key);
          return `
            <div class="process-lane crm-lane service-lane">
              <div class="lane-title"><span>${label}</span><b>${items.length}</b></div>
              ${items.map(renderServiceKanbanCard).join("") || '<div class="empty-state">Пусто</div>'}
            </div>
          `;
        }).join("")}
      </div>
    </div>
  `;
}

function serviceModuleStats(view) {
  const userName = currentUser().name;
  const userPolicy = currentPolicy();
  const myProcesses = accessibleProcesses().filter((process) => process.owner === userName || process.tasks?.some((task) => task.owner === userName) || userPolicy.roleType === "seniorManager");
  if (view === "clients") {
    const clientIds = new Set(myProcesses.map((process) => process.clientId));
    state.clients.filter((client) => client.responsible === userName).forEach((client) => clientIds.add(client.id));
    const clients = state.clients.filter((client) => clientIds.has(client.id));
    const needsAction = clients.filter((client) => myProcesses.some((process) => process.clientId === client.id && ["danger", "warn"].includes(process.dueState))).length;
    return { total: clients.length, inWork: myProcesses.filter((process) => clientIds.has(process.clientId) && !["Решено", "Закрыто"].some((stage) => process.stage.includes(stage))).length, overdue: needsAction, needsAction };
  }
  if (view === "tasks") {
    const tasks = serviceTaskPool().filter((task) => task.owner === userName || userPolicy.roleType === "seniorManager");
    return { total: tasks.length, inWork: tasks.filter((task) => !task.done).length, overdue: tasks.filter(taskIsOverdue).length, needsAction: tasks.filter((task) => !task.done && task.status !== "Выполнена").length };
  }
  if (view === "documents") {
    const docs = myProcesses.flatMap((process) => process.documents || []);
    return { total: docs.length, inWork: docs.filter((doc) => !/получен|прикреплен|действует|оформлена/i.test(doc.status || "")).length, overdue: 0, needsAction: docs.filter((doc) => /ошибка|ожидается|не/i.test(doc.status || "")).length };
  }
  const items = myProcesses.filter((process) => process.type === view);
  return {
    total: items.length,
    inWork: items.filter((process) => !["Решено", "Закрыто без решения", "Закрыт", "Выиграли", "Проиграли"].includes(process.stage)).length,
    overdue: items.filter((process) => process.dueState === "danger" || process.slaViolations?.length).length,
    needsAction: items.filter((process) => ["Новое обращение", "Требуется классификация"].includes(process.stage) || process.tasks?.some((task) => !task.done)).length,
  };
}

function renderServiceModuleCards() {
  return SERVICE_DASHBOARD_MODULES.map(([view, title, icon]) => {
    const stats = serviceModuleStats(view);
    return `
      <article class="service-module-card">
        <header><span data-lucide="${icon}"></span><strong>${title}</strong></header>
        <div class="service-module-stats">
          <div><span>Всего</span><b>${stats.total}</b></div>
          <div><span>В работе</span><b>${stats.inWork}</b></div>
          <div><span>Просрочено</span><b>${stats.overdue}</b></div>
          <div><span>Действие</span><b>${stats.needsAction}</b></div>
        </div>
        <button class="row-action" data-service-open-section="${view}">Открыть полный раздел</button>
      </article>
    `;
  }).join("");
}

function renderServiceManagerWorkspace() {
  const user = currentUser();
  const allAppeals = crmInboxAppeals().map(refreshAppealSla);
  const openAppeals = allAppeals.filter((process) => !["Решено", "Закрыто без решения"].includes(process.stage));
  const unanswered = openAppeals.filter((process) => !process.details?.firstResponseAtISO);
  const unclassified = openAppeals.filter((process) => !process.checks?.classified);
  const overdue = openAppeals.filter((process) => process.slaViolations?.length || process.dueState === "danger");
  const repeated = openAppeals.filter((process) => process.details?.repeatAppeal);
  const userStatus = managerWorkStatus(user.name);
  const isServiceUser = SERVICE_MANAGER_NAMES.includes(user.name);

  $("#executiveHero").innerHTML = `
    <div>
      <span class="eyebrow">CRM · рабочее окно обслуживания</span>
      <h2>${isServiceUser ? `${user.name}, ваша очередь входящих обращений` : "Воронка входящих обращений обслуживания"}</h2>
      <p>Звонки, WhatsApp, email, заявки сайта и ручные обращения собраны в одной рабочей воронке с SLA, быстрыми действиями и связью с профильными процессами.</p>
      <div class="hero-inline-actions">
        <button class="primary-button" data-open-omnichannel="incoming-call"><span data-lucide="phone-incoming"></span><span>Mock-звонок</span></button>
        <button class="ghost-button" data-open-omnichannel="missed-call"><span data-lucide="phone-missed"></span><span>Mock-пропущенный</span></button>
        <button class="ghost-button" data-open-omnichannel="whatsapp"><span data-lucide="message-circle"></span><span>Mock-WhatsApp</span></button>
        <button class="ghost-button" data-open-omnichannel="email"><span data-lucide="mail"></span><span>Mock-email</span></button>
      </div>
      ${
        isServiceUser
          ? `<div class="service-status-control">
              <span>Статус смены</span>
              <select data-service-status-picker="${escapeAttr(user.name)}">${serviceStatusOptions(userStatus)}</select>
            </div>`
          : ""
      }
    </div>
    <div class="hero-statuses">
      <div class="hero-status"><span>Открыто</span><strong>${openAppeals.length}</strong></div>
      <div class="hero-status"><span>Первый ответ</span><strong>${unanswered.length}</strong></div>
      <div class="hero-status"><span>Классификация</span><strong>${unclassified.length}</strong></div>
      <div class="hero-status"><span>SLA риск</span><strong>${overdue.length}</strong></div>
    </div>
  `;

  $(".metric-grid").innerHTML = [
    ["inbox", "is-blue", "Мои новые", unanswered.length, "ожидают первого ответа"],
    ["tags", "is-amber", "Без классификации", unclassified.length, "нужно определить процесс"],
    ["timer-reset", "is-red", "Просрочки SLA", overdue.length, "контроль сроков"],
    ["repeat-2", "is-green", "Повторные", repeated.length, "клиент уже обращался"],
  ].map(([icon, tone, label, value, hint]) => `
    <article class="metric-card">
      <span class="metric-icon ${tone}" data-lucide="${icon}"></span>
      <div><p>${label}</p><strong>${value}</strong><small>${hint}</small></div>
    </article>
  `).join("");

  $(".decision-panel .eyebrow").textContent = "Главная воронка";
  $(".decision-panel h2").textContent = "Входящие обращения";
  $(".decision-panel .text-button").textContent = "Полный реестр";
  $(".decision-panel .text-button").dataset.crmOpenAppeals = "true";
  $("#managementQueue").innerHTML = `
    ${!allAppeals.length ? '<div class="empty-state service-empty-state"><strong>Очередь пустая</strong><span>Создайте mock-звонок, WhatsApp или email, чтобы пройти процесс от входящего до заказа.</span></div>' : ""}
    ${renderServiceKanban(allAppeals)}
  `;

  $(".team-panel").hidden = true;

  $(".leader-summary-panel .eyebrow").textContent = "Краткие разделы";
  $(".leader-summary-panel h2").textContent = "Рабочий обзор менеджера";
  $("#leaderSummary").innerHTML = `<div class="service-module-grid">${renderServiceModuleCards()}</div>`;

  $(".fuel-sales-panel .eyebrow").textContent = "Каналы";
  $(".fuel-sales-panel h2").textContent = "Нагрузка по источникам";
  $(".fuel-sales-panel .text-button").hidden = true;
  const channelKeys = ["whatsapp", "phone", "email", "site", "other"];
  const maxChannel = Math.max(1, ...channelKeys.map((key) => allAppeals.filter((process) => crmChannelInfo(process.details?.source || process.supply).key === key).length));
  $("#fuelSalesToday").innerHTML = channelKeys.map((key) => {
    const items = allAppeals.filter((process) => crmChannelInfo(process.details?.source || process.supply).key === key);
    const sample = items[0] ? crmChannelInfo(items[0].details?.source || items[0].supply) : { label: key === "site" ? "Сайт" : key === "other" ? "Иное" : key, icon: key === "site" ? "globe-2" : "inbox" };
    return `<article class="crm-channel-load" data-crm-channel="${key}"><div><span data-lucide="${sample.icon}"></span><strong>${sample.label}</strong></div><div class="fuel-bar"><span style="width:${Math.max(5, Math.round((items.length / maxChannel) * 100))}%"></span></div><b>${items.length}</b></article>`;
  }).join("");

  $(".report-builder-panel .eyebrow").textContent = "SLA";
  $(".report-builder-panel h2").textContent = "Ближайшие действия";
  $(".report-builder-panel .report-form").innerHTML = `
    <div class="crm-sla-gauge"><strong>${openAppeals.length ? Math.max(0, Math.round(((openAppeals.length - overdue.length) / openAppeals.length) * 100)) : 100}%</strong><span>обращений без нарушения SLA</span></div>
    <div class="crm-sla-legend"><span><i></i>в срок</span><span><i class="is-warn"></i>риск</span><span><i class="is-danger"></i>просрочено</span></div>
  `;
  $("#periodReport").innerHTML = openAppeals.slice(0, 6).map((process) => `<button class="crm-sla-item" data-open="${process.id}"><strong>${process.id}</strong><span>${clientById(process.clientId).name}</span><b>${process.due}</b></button>`).join("") || '<div class="empty-state">Нет активных SLA</div>';

  $(".alerts-panel .eyebrow").textContent = "Уведомления";
  $(".alerts-panel h2").textContent = "Что требует внимания";
  const alerts = [
    ...overdue.map((process) => ({ tone: "danger", icon: "timer-reset", title: process.slaViolations?.[0] || "SLA риск", text: `${process.id} · ${clientById(process.clientId).name}`, id: process.id })),
    ...unanswered.map((process) => ({ tone: "warn", icon: "message-square-reply", title: "Требуется первый ответ", text: `${process.id} · ${crmChannelInfo(process.details?.source || process.supply).label}`, id: process.id })),
  ].slice(0, 6);
  $("#alertCount").textContent = alerts.length;
  $("#salesAlerts").innerHTML = alerts.map((alert) => `<article class="alert-item ${alert.tone}" data-open="${alert.id}" role="button"><span data-lucide="${alert.icon}"></span><div><strong>${alert.title}</strong><p>${alert.text}</p></div></article>`).join("") || '<div class="empty-state">Критичных уведомлений нет</div>';

  $(".process-panel").hidden = true;
  $(".approvals-panel").hidden = false;
  $(".approvals-panel .eyebrow").textContent = "Личная очередь";
  $(".approvals-panel h2").textContent = "Требуют моего ответа";
  $(".approvals-panel .text-button").hidden = true;
  $("#approvalList").innerHTML = [...unanswered, ...unclassified, ...overdue]
    .filter((process, index, list) => list.findIndex((item) => item.id === process.id) === index)
    .slice(0, 6)
    .map((process) => `<article class="approval-item"><header><strong>${process.id}</strong><span class="status-pill ${statusClass(processTone(process))}">${process.due}</span></header><p>${clientById(process.clientId).name} · ${process.details?.topic || "Другое"}</p><button class="primary-button" data-open="${process.id}">Обработать</button></article>`)
    .join("") || '<div class="empty-state">Срочных обращений нет</div>';

  $(".operational-panel").hidden = false;
  $(".operational-panel .eyebrow").textContent = "Журнал входящих";
  $(".operational-panel h2").textContent = "Все мои обращения";
  $("#requestTable").innerHTML = allAppeals.map((process) => {
    const channel = crmChannelInfo(process.details?.source || process.supply);
    return `<tr><td data-label="Заявка"><strong>${process.id}</strong></td><td data-label="Клиент">${clientById(process.clientId).name}</td><td data-label="Канал"><span class="crm-inline-channel"><i data-lucide="${channel.icon}"></i>${channel.label}</span></td><td data-label="Компания">${companyLabel(process.companyKey)}</td><td data-label="Стадия"><span class="status-pill ${statusClass(processTone(process))}">${appealKanbanColumn(process)}</span></td><td data-label="Ответственный">${process.owner}</td><td data-label="SLA">${process.due}</td><td data-label=""><button class="row-action" data-open="${process.id}">Открыть</button></td></tr>`;
  }).join("") || '<tr><td colspan="8"><div class="empty-state">Обращений нет</div></td></tr>';
  iconRefresh();
}

function renderServiceManagerDashboard() {
  renderServiceManagerWorkspace();
  return;
  const user = currentUser();
  const appeals = crmInboxAppeals();
  const allAppeals = accessibleProcesses().filter((process) => process.type === "appeals");
  const newAppeals = allAppeals.filter((process) => ["Новое обращение", "Требуется классификация"].includes(process.stage));
  const overdue = allAppeals.filter((process) => process.dueState === "danger" || process.dueState === "warn");
  const waiting = allAppeals.filter((process) => process.stage === "Ожидается клиент");
  const answered = allAppeals.filter((process) => process.details?.firstResponseAt || process.comments?.some((comment) => !/WhatsApp|Email|Телефония/i.test(comment.author)));
  const responseRate = allAppeals.length ? Math.round((answered.length / allAppeals.length) * 100) : 100;

  $("#executiveHero").innerHTML = `
    <div>
      <span class="eyebrow">CRM · единая входящая линия</span>
      <h2>${user.name}, ваши обращения клиентов в одном рабочем окне</h2>
      <p>WhatsApp, телефония и корпоративная почта собираются в персональную очередь. Здесь можно ответить клиенту, классифицировать запрос и запустить профильный процесс.</p>
      <div class="hero-inline-actions">
        <button class="primary-button" data-open-omnichannel="incoming-call"><span data-lucide="phone-incoming"></span><span>Mock-звонок</span></button>
        <button class="ghost-button" data-open-omnichannel="whatsapp"><span data-lucide="message-circle"></span><span>Mock-WhatsApp</span></button>
        <button class="ghost-button" data-open-omnichannel="email"><span data-lucide="mail"></span><span>Mock-email</span></button>
      </div>
    </div>
    <div class="hero-statuses">
      <div class="hero-status"><span>Новые сегодня</span><strong>${newAppeals.length}</strong></div>
      <div class="hero-status"><span>Требуют ответа</span><strong>${overdue.length}</strong></div>
      <div class="hero-status"><span>Ожидают клиента</span><strong>${waiting.length}</strong></div>
      <div class="hero-status"><span>Первый ответ</span><strong>${responseRate}%</strong></div>
    </div>
  `;

  const channels = ["all", "whatsapp", "phone", "email"];
  const channelLabels = {
    all: ["inbox", "Все входящие"],
    whatsapp: ["message-circle", "WhatsApp"],
    phone: ["phone-call", "Телефония"],
    email: ["mail", "Email"],
  };
  $(".metric-grid").innerHTML = channels
    .map((key) => {
      const items = key === "all" ? allAppeals : allAppeals.filter((process) => crmChannelInfo(process.details?.source || process.supply).key === key);
      const urgent = items.filter((process) => process.dueState === "danger" || process.dueState === "warn").length;
      return `
        <article class="metric-card crm-channel-card ${crmChannelFilter === key ? "is-selected" : ""}" data-crm-channel="${key}" role="button" tabindex="0">
          <span class="metric-icon ${key === "whatsapp" ? "is-green" : key === "phone" ? "is-blue" : key === "email" ? "is-amber" : "is-blue"}" data-lucide="${channelLabels[key][0]}"></span>
          <div><p>${channelLabels[key][1]}</p><strong>${items.length}</strong><small>${urgent ? `${urgent} требуют быстрого ответа` : "очередь в норме"}</small></div>
        </article>
      `;
    })
    .join("");

  $(".decision-panel .eyebrow").textContent = "Омниканальная линия";
  $(".decision-panel h2").textContent = "Входящие обращения";
  $(".decision-panel .text-button").textContent = "Открыть реестр";
  $(".decision-panel .text-button").dataset.crmOpenAppeals = "true";
  $("#managementQueue").innerHTML =
    appeals
      .slice(0, 7)
      .map((process) => {
        const client = clientById(process.clientId);
        const channel = crmChannelInfo(process.details?.source || process.supply);
        return `
          <article class="crm-inbox-row">
            <span class="crm-channel-icon ${channel.tone}" data-lucide="${channel.icon}"></span>
            <div class="crm-inbox-copy">
              <div><strong>${process.id} · ${client.name}</strong><span>${process.due}</span></div>
              <p>${process.details?.customerMessage || process.comments?.[0]?.text || process.volume}</p>
              <small>${channel.label} · ${process.details?.topic || "Другое"} · ${process.stage}</small>
            </div>
            <div class="crm-inbox-actions">
              <span class="status-pill is-progress">${process.owner}</span>
              <button class="row-action" data-open="${process.id}">Открыть</button>
            </div>
          </article>
        `;
      })
      .join("") || '<div class="empty-state">В выбранном канале обращений нет</div>';

  $(".team-panel").hidden = true;

  $(".leader-summary-panel .eyebrow").textContent = "CRM-воронка";
  $(".leader-summary-panel h2").textContent = "Движение входящих заявок";
  $("#leaderSummary").innerHTML = `
    <div class="crm-funnel">
      ${[
        ["Новые", newAppeals.length, "is-blue"],
        ["В работе", allAppeals.filter((process) => process.stage === "В работе").length, "is-progress"],
        ["Ожидают клиента", waiting.length, "is-warn"],
        ["Переданы в процесс", allAppeals.filter((process) => process.stage === "Передано в профильный процесс").length, "is-green"],
        ["Решены", allAppeals.filter((process) => process.stage === "Решено").length, "is-green"],
      ].map(([label, value, tone]) => `<div class="crm-funnel-step ${tone}"><span>${label}</span><strong>${value}</strong></div>`).join("")}
    </div>
    <div class="crm-quality-row">
      <div><span>Обращений всего</span><strong>${allAppeals.length}</strong></div>
      <div><span>Первый ответ дан</span><strong>${responseRate}%</strong></div>
      <div><span>Нарушение SLA</span><strong>${overdue.length}</strong></div>
    </div>
  `;

  $(".fuel-sales-panel .eyebrow").textContent = "Каналы связи";
  $(".fuel-sales-panel h2").textContent = "Нагрузка по источникам";
  $(".fuel-sales-panel .text-button").hidden = true;
  const maxChannel = Math.max(1, ...["whatsapp", "phone", "email", "other"].map((key) => allAppeals.filter((process) => crmChannelInfo(process.details?.source || process.supply).key === key).length));
  $("#fuelSalesToday").innerHTML = ["whatsapp", "phone", "email", "other"]
    .map((key) => {
      const items = allAppeals.filter((process) => crmChannelInfo(process.details?.source || process.supply).key === key);
      const sample = items[0] ? crmChannelInfo(items[0].details?.source || items[0].supply) : { label: key === "other" ? "Другие" : key, icon: "inbox" };
      return `<article class="crm-channel-load" data-crm-channel="${key}"><div><span data-lucide="${sample.icon}"></span><strong>${sample.label}</strong></div><div class="fuel-bar"><span style="width:${Math.max(5, Math.round((items.length / maxChannel) * 100))}%"></span></div><b>${items.length}</b></article>`;
    })
    .join("");

  $(".report-builder-panel .eyebrow").textContent = "Контроль SLA";
  $(".report-builder-panel h2").textContent = "Скорость первого ответа";
  $(".report-builder-panel .report-form").innerHTML = `
    <div class="crm-sla-gauge"><strong>${responseRate}%</strong><span>обращений получили первый ответ</span></div>
    <div class="crm-sla-legend"><span><i class="is-ok"></i> до 10 минут</span><span><i class="is-warn"></i> 10–20 минут</span><span><i class="is-danger"></i> более 20 минут</span></div>
  `;
  $("#periodReport").innerHTML = overdue.length
    ? overdue.slice(0, 4).map((process) => `<button class="crm-sla-item" data-open="${process.id}"><strong>${process.id}</strong><span>${clientById(process.clientId).name}</span><b>${process.due}</b></button>`).join("")
    : '<div class="empty-state">Все обращения обрабатываются в срок</div>';

  $(".alerts-panel .eyebrow").textContent = "Контроль качества";
  $(".alerts-panel h2").textContent = "Что требует внимания";
  const qualityAlerts = [
    ...newAppeals.map((process) => ({ tone: "warn", icon: "message-square-reply", title: "Нужно обработать", text: `${process.id} · ${clientById(process.clientId).name}`, id: process.id })),
    ...overdue.map((process) => ({ tone: "danger", icon: "timer-reset", title: "Риск нарушения SLA", text: `${process.id} · ${process.due} · ${process.owner}`, id: process.id })),
  ].slice(0, 6);
  $("#alertCount").textContent = qualityAlerts.length;
  $("#salesAlerts").innerHTML = qualityAlerts.map((alert) => `<article class="alert-item ${alert.tone}" data-open="${alert.id}" role="button"><span data-lucide="${alert.icon}"></span><div><strong>${alert.title}</strong><p>${alert.text}</p></div></article>`).join("") || '<div class="empty-state">Критичных сигналов нет</div>';

  $(".process-panel").hidden = false;
  $(".process-panel .eyebrow").textContent = "Канбан обращений";
  $(".process-panel h2").textContent = "Воронка обработки";
  const crmStages = ["Новое", "Требуется первый ответ", "Требуется классификация", "В работе", "Ожидается клиент", "Передано в процесс", "Решено", "Просрочено"];
  $("#processBoard").innerHTML = crmStages
    .map((stage) => {
      const items = appeals.filter((process) => appealKanbanColumn(process) === stage);
      return `
        <div class="process-lane crm-lane">
          <div class="lane-title"><span>${stage}</span><b>${items.length}</b></div>
          ${items.map((process) => {
            const client = clientById(process.clientId);
            const channel = crmChannelInfo(process.details?.source || process.supply);
            return `<article class="process-card crm-kanban-card">
              <div class="crm-card-channel"><span data-lucide="${channel.icon}"></span>${channel.label}<b>${process.priority}</b></div>
              <strong>${client.name}</strong>
              <p>${process.details?.subject || process.details?.customerMessage || process.volume}</p>
              <small>${process.details?.phone || process.details?.email || "Контакт уточняется"} · ${process.due}</small>
              <div class="crm-card-actions">
                <button data-open="${process.id}">Открыть</button>
                ${!process.details?.firstResponseAtISO ? `<button data-open="${process.id}">Ответить</button>` : ""}
                ${!process.checks?.classified ? `<button data-open="${process.id}">Классифицировать</button>` : ""}
                <button data-transfer-diana="${process.id}">Диане</button>
              </div>
            </article>`;
          }).join("") || '<div class="empty-state">Нет обращений</div>'}
        </div>
      `;
    })
    .join("");

  $(".approvals-panel").hidden = false;
  $(".approvals-panel .eyebrow").textContent = "Личная очередь";
  $(".approvals-panel h2").textContent = "Требуют моего ответа";
  $(".approvals-panel .text-button").hidden = true;
  const personalUrgent = appeals.filter((process) => ["Новое обращение", "Требуется классификация"].includes(process.stage) || ["danger", "warn"].includes(process.dueState));
  $("#approvalList").innerHTML = personalUrgent.map((process) => `<article class="approval-item"><header><strong>${process.id}</strong><span class="status-pill is-warn">${process.due}</span></header><p>${clientById(process.clientId).name} · ${crmChannelInfo(process.details?.source || process.supply).label}</p><button class="primary-button" data-open="${process.id}">Обработать</button></article>`).join("") || '<div class="empty-state">Срочных обращений нет</div>';

  $(".operational-panel").hidden = false;
  $(".operational-panel .eyebrow").textContent = "Журнал коммуникаций";
  $(".operational-panel h2").textContent = "Все входящие обращения";
  $("#requestTable").innerHTML = appeals
    .map((process) => {
      const client = clientById(process.clientId);
      const channel = crmChannelInfo(process.details?.source || process.supply);
      return `<tr><td><strong>${process.id}</strong></td><td>${client.name}</td><td><span class="crm-inline-channel"><i data-lucide="${channel.icon}"></i>${channel.label}</span></td><td>${companyLabel(process.companyKey)}</td><td><span class="status-pill ${statusClass(processTone(process))}">${process.stage}</span></td><td>${process.owner}</td><td>${process.due}</td><td><button class="row-action" data-open="${process.id}">Открыть</button></td></tr>`;
    })
    .join("") || '<tr><td colspan="8"><div class="empty-state">Обращений нет</div></td></tr>';
  iconRefresh();
}

function renderSeniorManagerDashboard() {
  renderServiceManagerDashboard();
  const appeals = accessibleProcesses().filter((process) => process.type === "appeals").map(refreshAppealSla);
  const unanswered = appeals.filter((process) => !process.details?.firstResponseAtISO && !["Решено", "Закрыто без решения"].includes(process.stage));
  const unclassified = appeals.filter((process) => !process.checks?.classified && !["Решено", "Закрыто без решения"].includes(process.stage));
  const withoutProcess = appeals.filter((process) => process.checks?.classified && APPEAL_PROCESS_BY_CLASSIFICATION[process.details?.topic] && !process.checks?.linked);
  const overdue = appeals.filter((process) => process.slaViolations?.length);
  const closedWithoutResult = appeals.filter((process) => process.stage === "Закрыто без решения");

  $("#executiveHero").innerHTML = `
    <div>
      <span class="eyebrow">Контроль омниканальной CRM</span>
      <h2>Диана, контроль сроков и качества входящих обращений</h2>
      <p>Менеджеры обслуживания обрабатывают звонки, WhatsApp и email. Ваш кабинет показывает загрузку команды, нарушения SLA, неклассифицированные обращения и карточки без связанного процесса.</p>
      <div class="hero-inline-actions">
        <button class="primary-button" data-open-omnichannel="missed-call"><span data-lucide="phone-missed"></span><span>Mock-пропущенный звонок</span></button>
        <button class="ghost-button" data-open-omnichannel="manual"><span data-lucide="square-pen"></span><span>Ручное обращение</span></button>
      </div>
    </div>
    <div class="hero-statuses">
      <div class="hero-status"><span>Без ответа</span><strong>${unanswered.length}</strong></div>
      <div class="hero-status"><span>Не классифицировано</span><strong>${unclassified.length}</strong></div>
      <div class="hero-status"><span>Без процесса</span><strong>${withoutProcess.length}</strong></div>
      <div class="hero-status"><span>Нарушения SLA</span><strong>${overdue.length}</strong></div>
    </div>
  `;

  $(".team-panel").hidden = false;
  $(".team-panel .eyebrow").textContent = "Менеджеры обслуживания";
  $(".team-panel h2").textContent = "Загрузка и качество";
  $(".team-panel .status-pill").textContent = `${appeals.length} обращений`;
  $("#teamLoad").innerHTML = SERVICE_MANAGER_NAMES.map((name) => {
    const load = serviceManagerLoad(name);
    const missed = load.appeals.filter((process) => process.details?.missedCall && !process.details?.callbackCompletedAt).length;
    return `
      <article class="team-row service-load-row">
        <div>
          <strong>${name}</strong>
          <p>${load.openAppeals.length} активных · ${load.unclassified.length} без классификации · ${missed} пропущенных без перезвона</p>
          <small>Задачи сегодня: ${load.todayTasks.length} · просроченные задачи: ${load.overdueTasks.length} · нагрузка: ${Math.round(load.score)}</small>
        </div>
        <div class="service-load-actions">
          <select data-service-status-picker="${escapeAttr(name)}">${serviceStatusOptions(load.status)}</select>
          <span class="status-pill ${load.overdueAppeals.length || load.overdueTasks.length ? "is-danger" : managerStatusTone(load.status)}">${load.status}</span>
        </div>
      </article>
    `;
  }).join("");

  $(".alerts-panel .eyebrow").textContent = "Контроль Дианы";
  $(".alerts-panel h2").textContent = "Нарушения и исключения";
  const controls = [
    ...overdue.map((process) => ({ id: process.id, icon: "timer-reset", tone: "danger", title: process.slaViolations[0], text: `${process.owner} · ${clientById(process.clientId).name}` })),
    ...withoutProcess.map((process) => ({ id: process.id, icon: "workflow", tone: "warn", title: "Нет связанного процесса", text: `${process.details?.topic} · ${process.owner}` })),
    ...closedWithoutResult.map((process) => ({ id: process.id, icon: "circle-x", tone: "warn", title: "Закрыто без решения", text: process.details?.closeReason || "Причина не указана" })),
  ].slice(0, 8);
  $("#alertCount").textContent = controls.length;
  $("#salesAlerts").innerHTML = controls.map((item) => `
    <article class="alert-item ${item.tone}">
      <span data-lucide="${item.icon}"></span>
      <div><strong>${item.title}</strong><p>${item.id} · ${item.text}</p></div>
      <div class="service-alert-actions">
        <button class="row-action" data-open="${item.id}">Открыть</button>
        <button class="row-action" data-assign-appeal="${item.id}">Передать</button>
      </div>
    </article>
  `).join("") || '<div class="empty-state">Нарушений нет</div>';
  iconRefresh();
}

function founderAnalytics() {
  const today = aggregateSales(salesInPeriod(todayISO(), todayISO()));
  const previousRows = salesInPeriod(addDaysISO(todayISO(), -7), addDaysISO(todayISO(), -1));
  const previous = aggregateSales(previousRows);
  const previousDailyRevenue = previous.revenue / 7;
  const revenueDelta = previousDailyRevenue ? (today.revenue - previousDailyRevenue) / previousDailyRevenue : 0;
  const month = aggregateSales(salesInPeriod(monthStartISO(), todayISO()));
  const fuelTrends = visibleFuelTypes()
    .map((fuel) => {
      const row = today.byFuel[fuel] || { liters: 0, revenue: 0 };
      const trend = trendInfo(row.liters, previousSevenDayAverage(fuel));
      return { fuel, ...row, ...trend };
    })
    .sort((a, b) => b.pct - a.pct);
  const growth = fuelTrends.find((item) => item.pct > 0) || fuelTrends[0];
  const decline = [...fuelTrends].reverse().find((item) => item.pct < 0) || fuelTrends.at(-1);
  const directorOverdue = accessibleProcesses().filter(
    (process) => isDirectorApprovalStage(process) && process.dueState === "danger",
  );
  return { today, month, previousDailyRevenue, revenueDelta, fuelTrends, growth, decline, directorOverdue };
}

function founderSignalByKey(key) {
  const analytics = founderAnalytics();
  if (key === "sales-month") return { key, title: "Продажи за месяц", value: formatMoney(analytics.month.revenue), detail: `${formatLiters(analytics.month.liters)} · ${analytics.month.deals} сделок` };
  if (key === "sales-today") return { key, title: "Динамика продаж сегодня", value: `${analytics.revenueDelta >= 0 ? "+" : ""}${Math.round(analytics.revenueDelta * 100)}%`, detail: `${formatMoney(analytics.today.revenue)} против среднего ${formatMoney(analytics.previousDailyRevenue)}` };
  if (key === "sales-growth") return { key, title: `Рост продаж: ${analytics.growth?.fuel || "нет данных"}`, value: analytics.growth ? `${analytics.growth.pct >= 0 ? "+" : ""}${Math.round(analytics.growth.pct * 100)}%` : "0%", detail: analytics.growth ? `${formatLiters(analytics.growth.liters)} сегодня` : "Нет данных" };
  if (key === "sales-decline") return { key, title: `Падение продаж: ${analytics.decline?.fuel || "нет данных"}`, value: analytics.decline ? `${Math.round(analytics.decline.pct * 100)}%` : "0%", detail: analytics.decline ? `${formatLiters(analytics.decline.liters)} сегодня` : "Нет данных" };
  if (key === "director-overdue") return { key, title: "Просрочки директоров", value: String(analytics.directorOverdue.length), detail: analytics.directorOverdue.map((process) => `${COMPANY_DIRECTOR[process.companyKey]} · ${process.id}`).join(", ") || "Просрочек нет" };
  if (key === "refunds-summary") {
    const refunds = accessibleProcesses().filter((process) => process.type === "refunds" && !process.stage.includes("Закрыто"));
    return { key, title: "Возвраты в работе", value: String(refunds.length), detail: sumAmounts("refunds") };
  }
  if (key === "tenders-summary") {
    const tenders = accessibleProcesses().filter((process) => process.type === "tenders");
    return { key, title: "Тендеры", value: String(tenders.length), detail: `${tenders.filter((process) => process.dueState === "danger").length} критичных` };
  }
  if (key.startsWith("fuel:")) {
    const fuel = key.slice(5);
    const item = analytics.fuelTrends.find((row) => row.fuel === fuel);
    return { key, title: `Продажи ${fuel}`, value: item ? formatLiters(item.liters) : "0 л", detail: item ? `${formatMoney(item.revenue)} · динамика ${item.pct >= 0 ? "+" : ""}${Math.round(item.pct * 100)}%` : "Нет данных" };
  }
  if (key.startsWith("company:")) {
    const companyKey = key.slice(8);
    const company = analytics.month.byCompany[companyKey] || { revenue: 0, liters: 0 };
    return { key, title: `Продажи ${companyLabel(companyKey)}`, value: formatMoney(company.revenue), detail: `${formatLiters(company.liters)} за текущий месяц` };
  }
  if (key.startsWith("director:")) {
    const process = processById(key.slice(9));
    return process
      ? { key, title: `Просрочка директора: ${process.id}`, value: process.due, detail: `${COMPANY_DIRECTOR[process.companyKey]} · ${clientById(process.clientId).name} · ${process.stage}` }
      : null;
  }
  return null;
}

function renderFounderDashboard() {
  const analytics = founderAnalytics();
  const planPct = Math.min(100, Math.round((analytics.month.revenue / MONTHLY_REVENUE_PLAN) * 100));
  $("#executiveHero").innerHTML = `
    <div>
      <span class="eyebrow">Кабинет учредителя · ${new Date().toLocaleDateString("ru-RU", { day: "numeric", month: "long" })}</span>
      <h2>Ключевая картина бизнеса без операционной перегрузки</h2>
      <p>Продажи, рост и падение по продуктам, аналитические сигналы и только просроченные решения директоров.</p>
    </div>
    <div class="hero-statuses">
      <div class="hero-status"><span>Продажи месяца</span><strong>${formatMoney(analytics.month.revenue)}</strong></div>
      <div class="hero-status"><span>Сегодня</span><strong>${formatMoney(analytics.today.revenue)}</strong></div>
      <div class="hero-status"><span>Выполнение плана</span><strong>${planPct}%</strong></div>
      <div class="hero-status"><span>Просрочки директоров</span><strong>${analytics.directorOverdue.length}</strong></div>
    </div>
  `;
  const metrics = [
    ["sales-month", "chart-no-axes-combined", "is-green", "Продажи за месяц", formatMoney(analytics.month.revenue), `${formatLiters(analytics.month.liters)} · нажмите, чтобы поставить задачу`],
    ["sales-today", analytics.revenueDelta >= 0 ? "trending-up" : "trending-down", analytics.revenueDelta >= 0 ? "is-green" : "is-red", "Динамика сегодня", `${analytics.revenueDelta >= 0 ? "+" : ""}${Math.round(analytics.revenueDelta * 100)}%`, `к среднему за 7 дней · ${formatMoney(analytics.today.revenue)}`],
    ["sales-growth", "arrow-up-right", "is-blue", "Лидер роста", analytics.growth?.fuel || "—", analytics.growth ? `+${Math.max(0, Math.round(analytics.growth.pct * 100))}% · ${formatLiters(analytics.growth.liters)}` : "нет данных"],
    ["sales-decline", "arrow-down-right", "is-red", "Главное падение", analytics.decline?.fuel || "—", analytics.decline ? `${Math.round(analytics.decline.pct * 100)}% · требует внимания` : "нет данных"],
  ];
  $(".metric-grid").innerHTML = metrics
    .map(
      ([key, icon, tone, label, value, hint]) => `
        <article class="metric-card founder-signal-card" data-founder-signal="${escapeAttr(key)}" role="button" tabindex="0">
          <span class="metric-icon ${tone}" data-lucide="${icon}"></span>
          <div><p>${label}</p><strong>${value}</strong><small>${hint}</small></div>
        </article>
      `,
    )
    .join("");

  const decisionPanel = $(".decision-panel");
  decisionPanel.hidden = false;
  decisionPanel.querySelector(".eyebrow").textContent = "Контроль руководства";
  decisionPanel.querySelector("h2").textContent = "Просрочки директоров";
  decisionPanel.querySelector(".text-button").hidden = true;
  $("#managementQueue").innerHTML =
    analytics.directorOverdue
      .map(
        (process) => `
          <article class="management-item">
            <div>
              <strong>${COMPANY_DIRECTOR[process.companyKey]} · ${process.id}</strong>
              <p>${companyLabel(process.companyKey)} · ${clientById(process.clientId).name} · ${process.stage}</p>
            </div>
            <div class="management-item-actions">
              <span class="status-pill is-danger">${process.due}</span>
              <button data-founder-signal="director:${process.id}">Задать вопрос</button>
            </div>
          </article>
        `,
      )
      .join("") || '<div class="empty-state founder-clean-state"><strong>Просрочек у директоров нет</strong><span>Все решения находятся в допустимых сроках.</span></div>';

  const teamPanel = $(".team-panel");
  teamPanel.hidden = false;
  teamPanel.querySelector(".eyebrow").textContent = "Поручения учредителя";
  teamPanel.querySelector("h2").textContent = "Задачи из аналитики";
  teamPanel.querySelector(".status-pill").textContent = `${state.founderTasks.filter((task) => task.status !== "Выполнена").length} активных`;
  $("#teamLoad").innerHTML =
    state.founderTasks
      .slice(0, 6)
      .map((task) => {
        const assignee = state.users.find((user) => user.id === task.assigneeId);
        return `<article class="team-row founder-task-row"><div><strong>${task.title}</strong><p>${assignee?.name || "Не назначен"} · ${task.due} · ${task.question}</p></div><span class="status-pill ${task.priority === "Критическая" ? "is-danger" : "is-progress"}">${task.status}</span></article>`;
      })
      .join("") || '<div class="empty-state">Нажмите на любой показатель, чтобы поставить связанную задачу.</div>';

  $("#leaderSummary").innerHTML = `
    <div class="summary-hero">
      <div><span>Выручка за месяц</span><strong>${formatMoney(analytics.month.revenue)}</strong><p>План ${formatMoney(MONTHLY_REVENUE_PLAN)} · выполнено ${planPct}%</p></div>
      <div class="plan-ring" style="--value:${planPct}%"><b>${planPct}%</b><span>плана</span></div>
    </div>
    <div class="summary-split">
      ${["trade", "ugh"].map((companyKey) => {
        const company = analytics.month.byCompany[companyKey] || { revenue: 0, liters: 0 };
        return `<div data-founder-signal="company:${companyKey}"><span>${companyLabel(companyKey)}</span><strong>${formatMoney(company.revenue)}</strong><p>${formatLiters(company.liters)}</p></div>`;
      }).join("")}
    </div>
  `;
  $(".leader-summary-panel .eyebrow").textContent = "Продажи";
  $(".leader-summary-panel h2").textContent = "Результат месяца по компаниям";
  $(".fuel-sales-panel .eyebrow").textContent = "Динамика";
  $(".fuel-sales-panel h2").textContent = "Рост и падение по видам топлива";
  $("#fuelSalesToday").querySelectorAll(".fuel-row").forEach((row) => {
    const fuel = row.querySelector("strong")?.textContent;
    if (fuel) {
      row.dataset.founderSignal = `fuel:${fuel}`;
      row.setAttribute("role", "button");
      row.tabIndex = 0;
    }
  });
  $(".alerts-panel .eyebrow").textContent = "Аналитика";
  $(".alerts-panel h2").textContent = "Сигналы роста и падения";
  renderFounderAlerts();
  iconRefresh();
}

function renderFounderAlerts() {
  const analytics = founderAnalytics();
  const alerts = analytics.fuelTrends
    .filter((item) => Math.abs(item.pct) >= 0.08)
    .map((item) => ({
      tone: item.pct < 0 ? "danger" : "ok",
      icon: item.pct < 0 ? "trending-down" : "trending-up",
      title: `${item.pct < 0 ? "Падение" : "Рост"}: ${item.fuel}`,
      text: `${item.pct >= 0 ? "+" : ""}${Math.round(item.pct * 100)}% к среднему за 7 дней · сегодня ${formatLiters(item.liters)}.`,
      key: `fuel:${item.fuel}`,
    }));
  $("#alertCount").textContent = alerts.length;
  $("#salesAlerts").innerHTML =
    alerts
      .map(
        (alert) => `
          <article class="alert-item ${alert.tone} founder-alert" data-founder-signal="${escapeAttr(alert.key)}" role="button" tabindex="0">
            <span data-lucide="${alert.icon}"></span>
            <div><strong>${alert.title}</strong><p>${alert.text}</p><small>Нажмите, чтобы задать вопрос или поставить задачу</small></div>
          </article>
        `,
      )
      .join("") || '<div class="empty-state">Существенных изменений продаж сегодня нет.</div>';
}

function openFounderSignalModal(key) {
  if (currentPolicy().roleType !== "founder") return;
  const signal = founderSignalByKey(key);
  if (!signal) return toast("Показатель больше недоступен.", "warn");
  currentFounderSignalKey = key;
  let defaultAssignee = "madi";
  if (key.startsWith("director:")) {
    const process = processById(key.slice(9));
    defaultAssignee = process?.companyKey === "trade" ? "khusnutdinov" : "kiikbay";
  }
  const assignees = state.users.filter((user) => ["madi", "khusnutdinov", "kiikbay", "diana"].includes(user.id));
  const modal = $("#requestModal");
  modal.innerHTML = `
    <article class="modal profile-modal founder-signal-modal" role="dialog" aria-modal="true" aria-labelledby="founderSignalTitle">
      <header class="modal-header">
        <div><span class="eyebrow">Показатель аналитики</span><h2 id="founderSignalTitle">${signal.title}</h2></div>
        <button class="icon-button" data-close-modal title="Закрыть" aria-label="Закрыть"><span data-lucide="x"></span></button>
      </header>
      <section class="founder-signal-summary">
        <strong>${signal.value}</strong>
        <p>${signal.detail}</p>
      </section>
      <div class="detail-grid">
        <label class="field-wide">Вопрос / комментарий<textarea id="founderTaskQuestion" placeholder="Например: почему произошло падение и какие меры предлагаете?"></textarea></label>
        <label class="field-wide">Название задачи<input id="founderTaskTitle" value="${escapeAttr(`Разобраться: ${signal.title}`)}" /></label>
        <label>Ответственный
          <select id="founderTaskAssignee">${assignees.map((user) => `<option value="${user.id}" ${user.id === defaultAssignee ? "selected" : ""}>${user.name} — ${user.role}</option>`).join("")}</select>
        </label>
        <label>Срок<input id="founderTaskDue" type="date" value="${addDaysISO(todayISO(), 1)}" /></label>
        <label>Приоритет<select id="founderTaskPriority"><option>Обычная</option><option selected>Высокая</option><option>Критическая</option></select></label>
      </div>
      <footer class="modal-footer">
        <button class="ghost-button" data-close-modal>Отмена</button>
        <button class="primary-button" data-save-founder-task><span data-lucide="list-plus"></span><span>Поставить задачу</span></button>
      </footer>
    </article>
  `;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  iconRefresh();
}

function saveFounderTask() {
  if (currentPolicy().roleType !== "founder") return toast("Действие недоступно.", "warn");
  const signal = founderSignalByKey(currentFounderSignalKey);
  const question = $("#founderTaskQuestion")?.value.trim();
  const title = $("#founderTaskTitle")?.value.trim();
  const assigneeId = $("#founderTaskAssignee")?.value;
  const due = $("#founderTaskDue")?.value;
  const priority = $("#founderTaskPriority")?.value || "Высокая";
  if (!signal || !question || !title || !assigneeId || !due) return toast("Заполните вопрос, задачу, ответственного и срок.", "warn");
  const task = {
    id: uid("founder-task"),
    signalKey: signal.key,
    signalTitle: signal.title,
    signalValue: signal.value,
    signalDetail: signal.detail,
    title,
    question,
    assigneeId,
    due,
    priority,
    status: "Новая",
    createdBy: currentUser().name,
    createdAt: new Date().toISOString(),
  };
  state.founderTasks.unshift(task);
  notify(assigneeId, "Новое поручение учредителя", `${title}. Показатель: ${signal.title} — ${signal.value}`, priority === "Критическая" ? "danger" : "warn");
  audit("Постановка задачи из показателя", "founder-task", task.id, "", { signal: signal.title, assigneeId, due, question });
  saveState();
  closeModal();
  renderAll();
  toast("Задача поставлена и связана с показателем", "ok");
}

function completeFounderTask(taskId) {
  const task = state.founderTasks.find((item) => item.id === taskId);
  if (!task || task.assigneeId !== currentUserId && !["commercialDirector", "seniorManager"].includes(currentPolicy().roleType)) return toast("Эта задача вам не назначена.", "warn");
  task.status = "Выполнена";
  task.completedAt = new Date().toISOString();
  task.completedBy = currentUser().name;
  notify("founder", "Поручение выполнено", `${task.title} · ${currentUser().name}`, "ok");
  audit("Выполнение задачи учредителя", "founder-task", task.id, "Новая", "Выполнена");
  saveState();
  renderAll();
  toast("Поручение отмечено выполненным", "ok");
}

function renderUserShell() {
  const user = currentUser();
  const policy = currentPolicy();
  document.body.dataset.roleType = policy.roleType || "";
  document.body.dataset.activeView = activeView;
  const initial = user.name.slice(0, 1).toUpperCase();
  $("#sidebarUserName").textContent = user.name;
  $("#sidebarUserRole").textContent = user.role;
  $("#sidebarAvatar").textContent = initial;
  $("#topUserName").textContent = user.name;
  $("#topUserAvatar").textContent = initial;
  $("#topUserRole").textContent = policy.label;
  const notificationCount = userNotifications().filter((item) => !item.read).length + countBy((process) => process.dueState === "danger" || process.approvalState === "pending");
  $(".counter").textContent = notificationCount;
  $("#newRequestBtn").hidden = !policy.canCreate || ["assistant", "messages"].includes(activeView);
  $("#genericAction").hidden = activeView === "messages" ? false : !policy.canCreate;
  $("[data-action='create-client']").hidden = !policy.canCreate;
  $$(".nav-item").forEach((button) => {
    button.hidden = !policy.views.includes(button.dataset.view);
  });
  const messagesNav = $('.nav-item[data-view="messages"]');
  messagesNav?.querySelector(".nav-counter")?.remove();
  const unreadMessages = unreadCommunicationsCount();
  if (messagesNav && unreadMessages) messagesNav.insertAdjacentHTML("beforeend", `<b class="nav-counter">${unreadMessages}</b>`);
  $(".team-panel").hidden = !policy.canSeeTeam && policy.roleType !== "founder";
  $(".process-panel").hidden = policy.roleType === "founder";
  $(".approvals-panel").hidden = policy.roleType === "founder";
  $(".operational-panel").hidden = policy.roleType === "founder";
  $(".report-builder-panel").hidden = policy.roleType === "founder";
  $$("[data-filter-company]").forEach((button) => {
    const company = button.dataset.filterCompany;
    button.hidden = company === "all" ? policy.companies.length === 1 : !policy.companies.includes(company);
    button.classList.toggle("is-selected", company === currentCompany);
  });
}

function renderExecutiveHero() {
  if (!$("#executiveHero")) return;
  const user = currentUser();
  const active = countBy((process) => !process.stage.toLowerCase().includes("закрыт") && process.stage !== "Решено");
  const approvals = countBy((process) => process.approvalState === "pending" || process.stage.toLowerCase().includes("директор"));
  const overdue = countBy((process) => process.dueState === "danger");
  const today = aggregateSales(salesInPeriod(todayISO(), todayISO()));
  const policy = currentPolicy();
  const companyName = policy.companies.length === 1 ? companyLabel(policy.companies[0]) : "";
  const dateLabel = new Date().toLocaleDateString(currentLanguage === "kk" ? "kk-KZ" : "ru-RU", { weekday: "long", day: "numeric", month: "long" });
  $("#executiveHero").innerHTML = `
    <div>
      <span class="eyebrow">${dateLabel}</span>
      <h2>${currentLanguage === "kk" ? `${user.name}, бүгін назар аударуды қажет ететін мәселелер` : `${user.name}, вот что требует внимания сегодня`}</h2>
      <p>${
        policy.roleType === "companyDirector"
          ? currentLanguage === "kk"
            ? `Сіз ${companyName} компаниясының процестері мен келісулерін ғана көресіз. Басқа компанияның деректеріне қолжетімділік жабық.`
            : `Вы видите процессы, продажи и согласования только по ${companyName}. Доступ к данным второй компании закрыт.`
          : policy.roleType === "founder"
            ? "Здесь собрана ключевая аналитика двух компаний: продажи, финансы, задолженность, возвраты, тендеры и риски. Режим только для просмотра."
          : ["assignedManager", "salesManager", "wholesaleManager", "procurementManager"].includes(policy.roleType)
            ? "Показаны только ваши клиенты, назначенные процессы, задачи, сроки и результаты в пределах вашей роли."
          : currentLanguage === "kk"
            ? "Сіз екі компанияны, барлық коммерциялық процестерді, кешігулер мен шешімдер кезегін көресіз. Көрсеткішті басу тиісті жұмыс тізімін ашады."
            : "Ты видишь обе компании, все коммерческие процессы, просрочки и очередь решений. Нажатие на показатель сразу открывает соответствующий рабочий список."
      }</p>
    </div>
    <div class="hero-statuses">
      <div class="hero-status"><span>${currentLanguage === "kk" ? "Белсенді процестер" : "Активные процессы"}</span><strong>${active}</strong></div>
      <div class="hero-status"><span>${currentLanguage === "kk" ? "Келісуде" : "На согласовании"}</span><strong>${approvals}</strong></div>
      <div class="hero-status"><span>${currentLanguage === "kk" ? "SLA кешігулері" : "Просрочки SLA"}</span><strong>${overdue}</strong></div>
      <div class="hero-status"><span>${currentLanguage === "kk" ? "Бүгінгі сатылым" : "Продажи сегодня"}</span><strong>${formatMoney(today.revenue)}</strong></div>
    </div>
  `;
}

function managementPriority(process) {
  if (process.dueState === "danger") return 0;
  if (process.approvalState === "pending" || process.stage.toLowerCase().includes("директор")) return 1;
  if (process.stage.includes("классификац")) return 2;
  return 3;
}

function renderManagementQueue() {
  if (!$("#managementQueue")) return;
  const items = accessibleProcesses()
    .filter(
      (process) =>
        process.dueState === "danger" ||
        process.approvalState === "pending" ||
        process.stage.toLowerCase().includes("директор") ||
        process.stage.includes("классификац"),
    )
    .sort((a, b) => managementPriority(a) - managementPriority(b))
    .slice(0, 6);
  $("#managementQueue").innerHTML =
    items
      .map((process) => {
        const client = clientById(process.clientId);
        return `
          <article class="management-item">
            <div>
              <strong>${process.id} · ${client.name}</strong>
              <p>${processName(process.type)} · ${companyLabel(process.companyKey)} · ${process.stage}</p>
            </div>
            <div class="management-item-actions">
              <span class="status-pill ${statusClass(processTone(process))}">${process.due}</span>
              <button data-open="${process.id}">${currentLanguage === "kk" ? "Ашу" : "Открыть"}</button>
            </div>
          </article>
        `;
      })
      .join("") || `<div class="empty-state">${currentLanguage === "kk" ? "Бүгін маңызды шешімдер жоқ" : "На сегодня критичных решений нет"}</div>`;
}

function renderTeamLoad() {
  if (!$("#teamLoad")) return;
  const team = ["Диана", "Ольга", "Павел", "Ильяс", "Жанара", "Ельжан", "Екатерина"];
  $("#teamLoad").innerHTML = team
    .map((name) => {
      const member = STAFF.find((user) => user.name === name);
      const items = accessibleProcesses().filter(
        (process) => process.owner === name && !process.stage.toLowerCase().includes("закрыт") && process.stage !== "Решено",
      );
      const overdue = items.filter((process) => process.dueState === "danger").length;
      return `
        <article class="team-row">
          <div>
            <strong>${name}</strong>
            <p>${member?.role || "Сотрудник"}</p>
          </div>
          <div class="team-counts">
            <span class="status-pill is-progress">${items.length} ${currentLanguage === "kk" ? "жұмыста" : "в работе"}</span>
            ${overdue ? `<span class="status-pill is-danger">${overdue} ${currentLanguage === "kk" ? "кешік." : "проср."}</span>` : ""}
          </div>
        </article>
      `;
    })
    .join("");
}

function renderLeaderSummary() {
  if (!$("#leaderSummary")) return;
  const policy = currentPolicy();
  const month = aggregateSales(salesInPeriod(monthStartISO(), todayISO()));
  const today = aggregateSales(salesInPeriod(todayISO(), todayISO()));
  const revenuePlan =
    policy.companies.length === 1 ? COMPANY_MONTHLY_PLAN[policy.companies[0]] || MONTHLY_REVENUE_PLAN : MONTHLY_REVENUE_PLAN;
  const planPct = Math.min(100, Math.round((month.revenue / revenuePlan) * 100));
  $("#monthLabel").textContent = new Date().toLocaleDateString(currentLanguage === "kk" ? "kk-KZ" : "ru-RU", { month: "long", year: "numeric" });
  const companyCards = policy.companies
    .map((companyKey) => {
      const company = month.byCompany[companyKey] || { revenue: 0, liters: 0 };
      return `
        <div>
          <span>${companyLabel(companyKey)}</span>
          <strong>${formatMoney(company.revenue)}</strong>
          <p>${formatLiters(company.liters)}</p>
        </div>
      `;
    })
    .join("");
  $("#leaderSummary").innerHTML = `
    <div class="summary-hero">
      <div>
        <span>${currentLanguage === "kk" ? "Айлық түсім" : "Выручка за месяц"}</span>
        <strong>${formatMoney(month.revenue)}</strong>
        <p>${currentLanguage === "kk" ? "Бүгін" : "Сегодня"}: ${formatMoney(today.revenue)} · ${formatLiters(today.liters)}</p>
      </div>
      <div class="plan-ring" style="--value:${planPct}%">
        <b>${planPct}%</b>
        <span>${currentLanguage === "kk" ? "жоспар" : "плана"}</span>
      </div>
    </div>
    <div class="summary-split">
      ${companyCards}
      <div>
        <span>${currentLanguage === "kk" ? "Мәмілелер / өтінімдер" : "Сделки / заявки"}</span>
        <strong>${month.deals} / ${month.requests}</strong>
        <p>${accessibleProcesses().length} ${currentLanguage === "kk" ? "қолжетімді CRM-карточка" : "доступных CRM-карточек"}</p>
      </div>
    </div>
  `;
}

function renderFuelSalesToday() {
  if (!$("#fuelSalesToday")) return;
  const today = aggregateSales(salesInPeriod(todayISO(), todayISO()));
  const fuels = visibleFuelTypes();
  const maxLiters = Math.max(...fuels.map((fuel) => today.byFuel[fuel]?.liters || 0), 1);
  $("#fuelSalesToday").innerHTML = fuels.map((fuel) => {
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
  const reportStart = $("#reportStart");
  const reportEnd = $("#reportEnd");
  if (!reportStart || !reportEnd) return;
  reportStart.value = state.reportPeriod.start;
  reportEnd.value = state.reportPeriod.end;
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
  visibleFuelTypes().forEach((fuel) => {
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
  const policy = currentPolicy();
  const revenuePlan =
    policy.companies.length === 1 ? COMPANY_MONTHLY_PLAN[policy.companies[0]] || MONTHLY_REVENUE_PLAN : MONTHLY_REVENUE_PLAN;
  const expectedPlan = revenuePlan * (dayOfMonth / 30);
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
  const unpaid = countBy((item) => item.type === "orders" && item.checks?.invoice && !item.checks?.payment);
  if (unpaid) alerts.unshift({ tone: "warn", icon: "badge-dollar-sign", title: "Нет подтверждения оплаты", text: `${unpaid} заказов имеют счёт, но ещё не получили подтверждение оплаты из 1С.` });
  const expiring = countBy((item) => item.type === "contracts" && item.stage === "Скоро истекает");
  if (expiring) alerts.unshift({ tone: "warn", icon: "file-clock", title: "Договоры скоро истекают", text: `${expiring} договоров требуют перезаключения и контроля ответственного.` });
  const approvals = countBy(isDirectorApprovalStage);
  if (approvals) alerts.unshift({ tone: "progress", icon: "stamp", title: "Требуется согласование", text: `${approvals} карточек находятся в очереди решения директора.` });
  const tenderRisks = countBy((item) => item.type === "tenders" && item.dueState === "danger" && !item.checks?.submitted);
  if (tenderRisks) alerts.unshift({ tone: "danger", icon: "clock-alert", title: "Тендер скоро заканчивается", text: `${tenderRisks} заявок ещё не имеют подтверждения подачи.` });
  return alerts.slice(0, 9);
}

function renderRequestTable() {
  const rows = filteredProcesses()
    .map((process) => {
      const client = clientById(process.clientId);
      return `
        <tr>
          <td data-label="Заявка"><strong>${process.id}</strong></td>
          <td data-label="Клиент">${client.name}</td>
          <td data-label="Процесс">${processName(process.type)}</td>
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
  const clients = accessibleClients();
  if (!clients.some((client) => client.id === state.selectedClientId)) state.selectedClientId = clients[0]?.id || "";
  $("#clientList").innerHTML = clients
    .map((client) => {
      const processes = accessibleProcesses().filter((item) => item.clientId === client.id);
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
  if (!accessibleClients().length) {
    profile.innerHTML = '<div class="empty-state">Нет доступных клиентов</div>';
    return;
  }
  const client = clientById(state.selectedClientId);
  const items = accessibleProcesses().filter((process) => process.clientId === client.id);
  const contracts = items.filter((item) => item.type === "contracts").length;
  const orders = items.filter((item) => item.type === "orders").length;
  const communications = items
    .filter((item) => item.type === "appeals")
    .sort((a, b) => Date.parse(b.details?.createdAt || 0) - Date.parse(a.details?.createdAt || 0));
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
      <b>${client.type} · ${client.status || "Активный"}</b>
      <span>${client.contacts}${client.phone ? ` · ${client.phone}` : ""}${client.email ? ` · ${client.email}` : ""}</span>
      <span>Ответственный: ${client.responsible || "Не назначен"}</span>
      <span>${client.legalAddress || "Юридический адрес не заполнен"}</span>
      <span>Поставка: ${(client.supplyMethods || []).join(", ") || "Не указана"}</span>
    </div>
    <div class="client-profile-tabs"><button class="is-selected">Коммуникации (${communications.length})</button><button>История процессов (${items.length})</button></div>
    <div class="client-communications">
      ${
        communications.length
          ? communications.map((appeal) => {
              const channel = crmChannelInfo(appeal.details?.source || appeal.supply);
              return `<article class="client-communication-row">
                <span class="crm-channel-icon ${channel.tone}" data-lucide="${channel.icon}"></span>
                <div><strong>${appeal.id} · ${channel.label}</strong><p>${appeal.details?.customerMessage || appeal.details?.subject || appeal.volume}</p><small>${appeal.stage} · ${appeal.details?.result || appeal.details?.topic || "Не классифицировано"}</small></div>
                <button class="row-action" data-open="${appeal.id}">Открыть</button>
              </article>`;
            }).join("")
          : '<div class="empty-state">Коммуникаций с клиентом пока нет</div>'
      }
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

function showStandardGeneric() {
  $("#genericStandardLayout").hidden = false;
  $("#customModuleContent").hidden = true;
  $("#customModuleContent").innerHTML = "";
}

function showCustomGeneric(html) {
  $("#genericStandardLayout").hidden = true;
  $("#customModuleContent").hidden = false;
  $("#customModuleContent").innerHTML = html;
}

function renderGeneric(viewName = activeView) {
  showStandardGeneric();
  if (viewName === "assistant") return renderAssistantModule();
  if (viewName === "messages") return renderMessagesModule();
  if (viewName === "reports") return renderReports();
  if (viewName === "tasks") return renderTasksModule();
  if (viewName === "documents") return renderDocumentsModule();
  if (viewName === "users") return renderUsersModule();
  if (viewName === "audit") return renderAuditModule();
  if (viewName === "settings") return renderSettingsModule();
  const config = metaFor(viewName);
  $("#genericAction").hidden = !currentPolicy().canCreate;
  $("#genericTitle").textContent = processName(viewName, true);
  $("#genericEyebrow").textContent = "Рабочий реестр";
  $("#genericAction span:last-child").textContent = processName(viewName);
  setGenericColumns(["Номер", "Клиент", "Стадия", "Сумма / объем", "Ответственный", "Срок", ""]);

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
  if (viewName === "appeals" && currentPolicy().canCreate) {
    $("#stageColumn").insertAdjacentHTML(
      "afterbegin",
      `<div class="appeal-create-stack">
        <button class="primary-button" data-open-omnichannel="incoming-call"><span data-lucide="phone-incoming"></span><span>Mock-звонок</span></button>
        <button class="ghost-button" data-open-omnichannel="whatsapp"><span data-lucide="message-circle"></span><span>Mock-WhatsApp</span></button>
        <button class="ghost-button" data-open-omnichannel="email"><span data-lucide="mail"></span><span>Mock-email</span></button>
        <button class="ghost-button" data-open-omnichannel="manual"><span data-lucide="square-pen"></span><span>Ручное обращение</span></button>
      </div>`,
    );
  }
  if (viewName === "tenders" && currentPolicy().canCreate) {
    $("#stageColumn").insertAdjacentHTML(
      "afterbegin",
      `<button class="primary-button tender-import-button" data-import-tenders><span data-lucide="cloud-download"></span><span>Импортировать тендеры</span></button>`,
    );
  }

  if (viewName === "appeals") {
    setGenericColumns(["Номер / канал", "Клиент", "Классификация", "Стадия", "Ответственный", "SLA", ""]);
    $("#genericTable").innerHTML =
      all.map((process) => {
        const client = clientById(process.clientId);
        const channel = crmChannelInfo(process.details?.source || process.supply);
        return `<tr>
          <td data-label="Номер / канал"><strong>${process.id}</strong><br><small class="crm-inline-channel"><i data-lucide="${channel.icon}"></i>${channel.label}</small></td>
          <td data-label="Клиент">${client.name}<br><small>${process.details?.phone || process.details?.email || "Контакт уточняется"}</small></td>
          <td data-label="Классификация">${process.checks?.classified ? process.details?.topic : '<span class="status-pill is-warn">Не выполнена</span>'}</td>
          <td data-label="Стадия"><span class="status-pill ${statusClass(processTone(process))}">${appealKanbanColumn(process)}</span></td>
          <td data-label="Ответственный">${process.owner}</td>
          <td data-label="SLA">${process.due}${process.slaViolations?.length ? `<br><small class="danger-text">${process.slaViolations.join(", ")}</small>` : ""}</td>
          <td data-label=""><div class="inline-actions"><button class="row-action" data-open="${process.id}">Открыть</button>${currentPolicy().canReassign ? `<button class="row-action" data-assign-appeal="${process.id}">Назначить</button>` : ""}</div></td>
        </tr>`;
      }).join("") || `<tr><td colspan="7"><div class="empty-state">В этом разделе пока нет обращений</div></td></tr>`;
    iconRefresh();
    return;
  }

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

function aiHistory() {
  state.aiChats ||= {};
  state.aiChats[currentUserId] ||= [
    {
      id: uid("ai"),
      role: "assistant",
      text: `Здравствуйте, ${currentUser().name}. Я ваш персональный помощник по роли «${currentPolicy().label}». Могу показать задачи, просрочки, продажи, согласования и помочь сформулировать действие.`,
      createdAt: new Date().toISOString(),
    },
  ];
  return state.aiChats[currentUserId];
}

function aiQuickPrompts() {
  const policy = currentPolicy();
  const prompts = ["Что требует моего внимания?", "Покажи мои задачи", "Есть ли просрочки?"];
  if (policy.canSeeFinancials) prompts.push("Как идут продажи?");
  if (policy.canApprove) prompts.push("Что ждёт согласования?");
  if (policy.roleType === "founder") prompts.push("Где самое сильное падение?");
  return prompts;
}

function generateAssistantReply(prompt) {
  const normalized = prompt.toLowerCase();
  const processes = accessibleProcesses();
  const openTasks = processes.flatMap((process) => (process.tasks || []).filter((task) => !task.done).map((task) => ({ ...task, process })));
  const founderAssigned = (state.founderTasks || []).filter((task) => task.assigneeId === currentUserId && task.status !== "Выполнена");
  const overdue = processes.filter((process) => process.dueState === "danger");
  const approvals = processes.filter(isDirectorApprovalStage);
  if (/продаж|выруч|паден|рост/.test(normalized)) {
    if (!currentPolicy().canSeeFinancials) return "Финансовая аналитика закрыта для вашей роли. Я могу помочь с вашими клиентами, процессами, задачами и сроками.";
    const today = aggregateSales(salesInPeriod(todayISO(), todayISO()));
    const month = aggregateSales(salesInPeriod(monthStartISO(), todayISO()));
    const trends = visibleFuelTypes()
      .map((fuel) => ({ fuel, liters: today.byFuel[fuel]?.liters || 0, trend: trendInfo(today.byFuel[fuel]?.liters || 0, previousSevenDayAverage(fuel)) }))
      .sort((a, b) => a.trend.pct - b.trend.pct);
    const decline = trends[0];
    const growth = trends.at(-1);
    return `Сегодня продажи составляют ${formatMoney(today.revenue)} (${formatLiters(today.liters)}), за месяц — ${formatMoney(month.revenue)}. Максимальный рост: ${growth.fuel} ${growth.trend.pct >= 0 ? "+" : ""}${Math.round(growth.trend.pct * 100)}%. Наибольшее падение: ${decline.fuel} ${Math.round(decline.trend.pct * 100)}%.`;
  }
  if (/просроч/.test(normalized)) {
    if (!overdue.length) return "По доступным вам процессам просрочек сейчас нет.";
    return `Найдено ${overdue.length} просроченных процессов: ${overdue.slice(0, 5).map((process) => `${process.id} — ${process.stage}, ответственный ${process.owner}`).join("; ")}.`;
  }
  if (/соглас|решени/.test(normalized)) {
    if (!approvals.length) return "В доступном контуре сейчас нет карточек, ожидающих согласования.";
    return `На согласовании ${approvals.length} карточек: ${approvals.slice(0, 5).map((process) => `${process.id} — ${companyLabel(process.companyKey)}, ${process.stage}`).join("; ")}.`;
  }
  if (/задач|поручен/.test(normalized)) {
    const total = openTasks.length + founderAssigned.length;
    if (!total) return "Активных задач и поручений для вас сейчас нет.";
    const processText = openTasks.slice(0, 4).map((task) => `${task.process.id}: ${task.title}`).join("; ");
    const founderText = founderAssigned.slice(0, 3).map((task) => `поручение учредителя: ${task.title}`).join("; ");
    return `У вас ${total} активных задач. ${[processText, founderText].filter(Boolean).join("; ")}.`;
  }
  if (/внимани|сегодня|что делать|приоритет/.test(normalized)) {
    return `Сегодня рекомендую начать с ${overdue.length} просрочек, затем обработать ${approvals.length} согласований и ${openTasks.length + founderAssigned.length} активных задач. Самый срочный процесс: ${overdue[0]?.id || approvals[0]?.id || openTasks[0]?.process.id || "критичных карточек нет"}.`;
  }
  return `Я учитываю вашу роль «${currentPolicy().label}» и вижу только разрешённые данные. Уточните, что проверить: задачи, просрочки, продажи, согласования или конкретную карточку.`;
}

function renderAssistantModule() {
  $("#genericTitle").textContent = "Персональный ИИ-помощник";
  $("#genericEyebrow").textContent = `${currentPolicy().label} · ролевой контекст`;
  $("#genericAction").hidden = true;
  const history = aiHistory();
  showCustomGeneric(`
    <div class="assistant-layout">
      <aside class="assistant-context">
        <div class="assistant-orb"><span data-lucide="sparkles"></span></div>
        <h3>Помощник ${currentUser().name}</h3>
        <p>Анализирует только те данные, которые разрешены вашей ролью.</p>
        <div class="assistant-context-card"><span>Доступных процессов</span><strong>${accessibleProcesses().length}</strong></div>
        <div class="assistant-context-card"><span>Активных задач</span><strong>${accessibleProcesses().flatMap((process) => process.tasks || []).filter((task) => !task.done).length}</strong></div>
        <small>Сейчас используется локальная интеллектуальная логика. Архитектура готова для подключения реальной AI-модели.</small>
      </aside>
      <section class="assistant-chat">
        <div class="quick-prompts">${aiQuickPrompts().map((prompt) => `<button data-ai-prompt="${escapeAttr(prompt)}">${prompt}</button>`).join("")}</div>
        <div class="chat-messages assistant-messages" id="assistantMessages">
          ${history.map((message) => `<article class="chat-bubble ${message.role === "user" ? "is-mine" : "is-ai"}"><div>${escapeAttr(message.text)}</div><small>${new Date(message.createdAt).toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit" })}</small></article>`).join("")}
        </div>
        <div class="chat-composer">
          <textarea id="assistantPrompt" placeholder="Спросите о задачах, продажах, просрочках или согласованиях"></textarea>
          <button class="primary-button" data-send-ai><span data-lucide="send"></span><span>Отправить</span></button>
        </div>
      </section>
    </div>
  `);
  requestAnimationFrame(() => {
    const messages = $("#assistantMessages");
    if (messages) messages.scrollTop = messages.scrollHeight;
  });
  iconRefresh();
}

function sendAiPrompt(text = "") {
  const prompt = text || $("#assistantPrompt")?.value.trim();
  if (!prompt) return;
  const history = aiHistory();
  history.push({ id: uid("ai"), role: "user", text: prompt, createdAt: new Date().toISOString() });
  history.push({ id: uid("ai"), role: "assistant", text: generateAssistantReply(prompt), createdAt: new Date().toISOString() });
  audit("Запрос ИИ-помощнику", "ai-chat", currentUserId, "", prompt);
  saveState();
  renderAssistantModule();
}

function communicationUsers() {
  return state.users.filter((user) => user.roleId && user.active !== false);
}

function directChannelId(firstId, secondId) {
  return [firstId, secondId].sort().join("--");
}

function channelMessages(type = activeChatType, id = activeChatId) {
  return (state.communications?.messages || []).filter((message) => message.channelType === type && message.channelId === id);
}

function chatUnread(type, id) {
  return channelMessages(type, id).filter((message) => message.authorId !== currentUserId && !(message.readBy || []).includes(currentUserId)).length;
}

function activeChatInfo() {
  if (activeChatType === "group") {
    const group = state.communications.groups.find((item) => item.id === activeChatId);
    return group?.memberIds.includes(currentUserId) ? { title: group.name, subtitle: `${group.memberIds.length} участников`, memberIds: group.memberIds } : null;
  }
  const otherId = activeChatId.split("--").find((id) => id !== currentUserId);
  const user = state.users.find((item) => item.id === otherId);
  return user ? { title: user.name, subtitle: user.role, memberIds: [currentUserId, user.id] } : null;
}

function ensureActiveChat() {
  const groups = state.communications.groups.filter((group) => group.memberIds.includes(currentUserId));
  if (activeChatType === "group" && !groups.some((group) => group.id === activeChatId)) {
    activeChatId = groups[0]?.id || directChannelId(currentUserId, communicationUsers().find((user) => user.id !== currentUserId)?.id || currentUserId);
    activeChatType = groups.length ? "group" : "direct";
  }
}

function renderMessagesModule() {
  $("#genericTitle").textContent = "Корпоративные сообщения";
  $("#genericEyebrow").textContent = "Личные диалоги и общие группы";
  $("#genericAction").hidden = false;
  $("#genericAction span:last-child").textContent = "Группа";
  ensureActiveChat();
  const groups = state.communications.groups.filter((group) => group.memberIds.includes(currentUserId));
  const users = communicationUsers().filter((user) => user.id !== currentUserId);
  const info = activeChatInfo();
  if (!info && groups.length) {
    activeChatType = "group";
    activeChatId = groups[0].id;
  }
  const messages = channelMessages();
  messages.forEach((message) => {
    message.readBy ||= [];
    if (!message.readBy.includes(currentUserId)) message.readBy.push(currentUserId);
  });
  saveState();
  showCustomGeneric(`
    <div class="messenger-layout">
      <aside class="conversation-sidebar">
        <div class="conversation-section-title"><span>Группы</span><button data-create-chat-group title="Создать группу"><span data-lucide="plus"></span></button></div>
        <div class="conversation-list">
          ${groups.map((group) => {
            const unread = chatUnread("group", group.id);
            return `<button class="conversation-item ${activeChatType === "group" && activeChatId === group.id ? "is-active" : ""}" data-chat-type="group" data-chat-id="${group.id}"><span class="conversation-avatar">#</span><span><strong>${group.name}</strong><small>${group.description}</small></span>${unread ? `<b>${unread}</b>` : ""}</button>`;
          }).join("")}
        </div>
        <div class="conversation-section-title"><span>Личные сообщения</span></div>
        <div class="conversation-list direct-list">
          ${users.map((user) => {
            const id = directChannelId(currentUserId, user.id);
            const unread = chatUnread("direct", id);
            return `<button class="conversation-item ${activeChatType === "direct" && activeChatId === id ? "is-active" : ""}" data-chat-type="direct" data-chat-id="${id}"><span class="conversation-avatar">${user.name.slice(0, 1)}</span><span><strong>${user.name}</strong><small>${user.role}</small></span>${unread ? `<b>${unread}</b>` : ""}</button>`;
          }).join("")}
        </div>
      </aside>
      <section class="conversation-main">
        <header class="conversation-header">
          <div><strong>${info?.title || "Выберите диалог"}</strong><span>${info?.subtitle || ""}</span></div>
          ${activeChatType === "group" ? `<button class="ghost-button" data-chat-members="${activeChatId}"><span data-lucide="users"></span><span>Участники</span></button>` : ""}
        </header>
        <div class="chat-messages" id="corporateMessages">
          ${messages.map((message) => {
            const author = state.users.find((user) => user.id === message.authorId);
            return `<article class="chat-bubble ${message.authorId === currentUserId ? "is-mine" : ""}"><strong>${message.authorId === currentUserId ? "Вы" : author?.name || "Система"}</strong><div>${escapeAttr(message.text)}</div><small>${new Date(message.createdAt).toLocaleString("ru-RU", { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" })}</small></article>`;
          }).join("") || '<div class="empty-state">Начните обсуждение — сообщения увидят участники этого диалога.</div>'}
        </div>
        <div class="chat-composer">
          <textarea id="corporateMessageText" placeholder="Напишите сообщение"></textarea>
          <button class="primary-button" data-send-message><span data-lucide="send"></span><span>Отправить</span></button>
        </div>
      </section>
    </div>
  `);
  requestAnimationFrame(() => {
    const container = $("#corporateMessages");
    if (container) container.scrollTop = container.scrollHeight;
  });
  renderUserShell();
  iconRefresh();
}

function selectChat(type, id) {
  activeChatType = type;
  activeChatId = id;
  renderMessagesModule();
}

function sendCorporateMessage() {
  const text = $("#corporateMessageText")?.value.trim();
  const info = activeChatInfo();
  if (!text || !info) return toast("Введите сообщение.", "warn");
  const message = { id: uid("msg"), channelType: activeChatType, channelId: activeChatId, authorId: currentUserId, text, createdAt: new Date().toISOString(), readBy: [currentUserId] };
  state.communications.messages.push(message);
  info.memberIds.filter((id) => id !== currentUserId).forEach((id) => notify(id, `Новое сообщение: ${info.title}`, `${currentUser().name}: ${text.slice(0, 100)}`, "progress"));
  audit("Отправка сообщения", activeChatType === "group" ? "chat-group" : "direct-chat", activeChatId, "", text);
  saveState();
  renderMessagesModule();
}

function openCreateChatGroupModal() {
  const users = communicationUsers();
  const modal = $("#requestModal");
  modal.innerHTML = `
    <article class="modal is-wide" role="dialog" aria-modal="true" aria-labelledby="newGroupTitle">
      <header class="modal-header">
        <div><span class="eyebrow">Корпоративные сообщения</span><h2 id="newGroupTitle">Новая группа</h2></div>
        <button class="icon-button" data-close-modal title="Закрыть" aria-label="Закрыть"><span data-lucide="x"></span></button>
      </header>
      <div class="detail-grid">
        <label>Название группы<input id="newGroupName" placeholder="Например, План продаж — июль" /></label>
        <label>Описание<input id="newGroupDescription" placeholder="Тема общего обсуждения" /></label>
      </div>
      <section class="group-member-picker">
        <div class="checklist-header"><strong>Участники</strong><small>Вы уже добавлены автоматически</small></div>
        <div class="member-checkbox-grid">
          ${users.map((user) => `<label class="toggle-row"><input type="checkbox" data-group-member="${user.id}" ${user.id === currentUserId ? "checked disabled" : ""} /><span>${user.name}<small>${user.role}</small></span></label>`).join("")}
        </div>
      </section>
      <footer class="modal-footer">
        <button class="ghost-button" data-close-modal>Отмена</button>
        <button class="primary-button" data-save-chat-group><span data-lucide="users-round"></span><span>Создать группу</span></button>
      </footer>
    </article>
  `;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  iconRefresh();
}

function saveChatGroup() {
  const name = $("#newGroupName")?.value.trim();
  const description = $("#newGroupDescription")?.value.trim();
  const memberIds = $$("[data-group-member]:checked").map((checkbox) => checkbox.dataset.groupMember);
  if (!name) return toast("Введите название группы.", "warn");
  if (memberIds.length < 2) return toast("Добавьте хотя бы одного участника.", "warn");
  const group = { id: uid("group"), name, description: description || "Общее обсуждение", memberIds: [...new Set([currentUserId, ...memberIds])], createdBy: currentUserId, createdAt: new Date().toISOString() };
  state.communications.groups.unshift(group);
  state.communications.messages.push({ id: uid("msg"), channelType: "group", channelId: group.id, authorId: currentUserId, text: `Группа «${name}» создана.`, createdAt: new Date().toISOString(), readBy: [currentUserId] });
  group.memberIds.filter((id) => id !== currentUserId).forEach((id) => notify(id, "Вас добавили в группу", `${currentUser().name}: ${name}`, "progress"));
  audit("Создание группы", "chat-group", group.id, "", { name, memberIds: group.memberIds });
  activeChatType = "group";
  activeChatId = group.id;
  saveState();
  closeModal();
  switchView("messages");
  toast(`Группа «${name}» создана`, "ok");
}

function openChatMembers(groupId) {
  const group = state.communications.groups.find((item) => item.id === groupId && item.memberIds.includes(currentUserId));
  if (!group) return;
  const modal = $("#requestModal");
  modal.innerHTML = `
    <article class="modal profile-modal" role="dialog" aria-modal="true" aria-labelledby="membersTitle">
      <header class="modal-header">
        <div><span class="eyebrow">Участники группы</span><h2 id="membersTitle">${group.name}</h2></div>
        <button class="icon-button" data-close-modal title="Закрыть" aria-label="Закрыть"><span data-lucide="x"></span></button>
      </header>
      <div class="record-list">
        ${group.memberIds.map((id) => {
          const user = state.users.find((item) => item.id === id);
          return user ? `<article class="record-row"><span class="conversation-avatar">${user.name.slice(0, 1)}</span><div><strong>${user.name}</strong><p>${user.role}</p></div><b>${id === group.createdBy ? "Создатель" : "Участник"}</b></article>` : "";
        }).join("")}
      </div>
      <footer class="modal-footer"><button class="primary-button" data-close-modal>Закрыть</button></footer>
    </article>
  `;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  iconRefresh();
}

function renderReports() {
  if (currentPolicy().roleType === "founder") return renderFounderReports();
  $("#genericAction").hidden = true;
  $("#genericTitle").textContent = "Отчеты и аналитика";
  $("#genericEyebrow").textContent = "Руководителю";
  $("#genericAction span:last-child").textContent = "Отчет";
  setGenericColumns(["Отчет", "Значение", "Показатель", "Результат", "Источник", "Период", ""]);
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
    ["Неоплаченные счета", countBy((item) => item.type === "orders" && item.checks?.invoice && !item.checks?.payment), "контроль 1С", sumAmounts("orders")],
    ["Возвраты в работе", countBy((item) => item.type === "refunds" && !item.stage.includes("Закрыто")), "сумма", sumAmounts("refunds")],
    ["Продления", countBy((item) => item.type === "extensions"), "на согласовании", countBy((item) => item.type === "extensions" && item.approvalState === "pending")],
    ["Истекающие договоры", countBy((item) => item.type === "contracts" && item.stage === "Скоро истекает"), "горизонт", "30 дней"],
    ["Сделки без движения", countBy((item) => item.dueState === "danger" && !item.stage.includes("Закрыто")), "SLA", "требуют действия"],
    ["Неполные документы", countBy((item) => Object.values(item.checks || {}).some((value) => value === false)), "контроль качества", "есть пропуски"],
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

function renderFounderReports() {
  $("#genericTitle").textContent = "Отчёты учредителя";
  $("#genericEyebrow").textContent = "Продажи и ключевая аналитика";
  $("#genericAction").hidden = true;
  const period = aggregateSales(salesInPeriod(state.reportPeriod.start, state.reportPeriod.end));
  const directorOverdue = accessibleProcesses().filter((process) => isDirectorApprovalStage(process) && process.dueState === "danger");
  const refunds = accessibleProcesses().filter((process) => process.type === "refunds" && !process.stage.includes("Закрыто"));
  const tenders = accessibleProcesses().filter((process) => process.type === "tenders");
  const trade = period.byCompany.trade || { revenue: 0, liters: 0 };
  const ugh = period.byCompany.ugh || { revenue: 0, liters: 0 };
  $("#stageColumn").innerHTML = `
    <section class="founder-report-form">
      <strong>Сформировать отчёт</strong>
      <label>С даты<input type="date" id="founderReportStart" value="${state.reportPeriod.start}" /></label>
      <label>По дату<input type="date" id="founderReportEnd" value="${state.reportPeriod.end}" /></label>
      <button class="primary-button" data-action="build-founder-report"><span data-lucide="chart-column"></span><span>Сформировать</span></button>
    </section>
    ${[
      ["Продажи", "Общая выручка и объём"],
      ["Компании", "GAZOIL TRADE и УГХ GAZOIL"],
      ["Продукты", "Динамика по видам топлива"],
      ["Риски", "Падения и просрочки директоров"],
    ].map(([title, hint]) => `<article class="stage-item"><strong>${title}</strong><p>${hint}</p></article>`).join("")}
  `;
  setGenericColumns(["Показатель", "Значение", "Детализация", "Динамика / статус", "Период", "Источник", ""]);
  const rows = [
    ["Общие продажи", formatMoney(period.revenue), formatLiters(period.liters), `${period.deals} сделок`, `${state.reportPeriod.start} — ${state.reportPeriod.end}`, "Продажи CRM"],
    ["GAZOIL TRADE", formatMoney(trade.revenue), formatLiters(trade.liters), formatPercent(period.revenue ? trade.revenue / period.revenue : 0), `${state.reportPeriod.start} — ${state.reportPeriod.end}`, "Продажи CRM"],
    ["УГХ GAZOIL", formatMoney(ugh.revenue), formatLiters(ugh.liters), formatPercent(period.revenue ? ugh.revenue / period.revenue : 0), `${state.reportPeriod.start} — ${state.reportPeriod.end}`, "Продажи CRM"],
    ["Просрочки директоров", directorOverdue.length, directorOverdue.map((process) => `${COMPANY_DIRECTOR[process.companyKey]} · ${process.id}`).join(", ") || "Нет", directorOverdue.length ? "Требует внимания" : "В срок", "Сейчас", "Согласования"],
    ["Возвраты в работе", refunds.length, sumAmounts("refunds"), refunds.some((process) => process.dueState === "danger") ? "Есть риск" : "Под контролем", "Сейчас", "CRM"],
    ["Тендеры", tenders.length, `${tenders.filter((process) => process.stage === "Выиграли").length} выиграно`, `${tenders.filter((process) => process.dueState === "danger").length} критичных`, "Сейчас", "CRM"],
  ];
  $("#genericTable").innerHTML = rows
    .map(
      ([name, value, detail, status, periodLabel, source]) => `
        <tr>
          <td data-label="Показатель"><strong>${name}</strong></td>
          <td data-label="Значение">${value}</td>
          <td data-label="Детализация">${detail}</td>
          <td data-label="Статус"><span class="status-pill ${String(status).includes("внимания") || String(status).includes("риск") || String(status).includes("критичных") && !String(status).startsWith("0") ? "is-warn" : "is-progress"}">${status}</span></td>
          <td data-label="Период">${periodLabel}</td>
          <td data-label="Источник">${source}</td>
          <td data-label=""><button class="row-action" data-founder-signal="${name === "Общие продажи" ? "sales-month" : name === "GAZOIL TRADE" ? "company:trade" : name === "УГХ GAZOIL" ? "company:ugh" : name === "Просрочки директоров" ? "director-overdue" : name === "Возвраты в работе" ? "refunds-summary" : "tenders-summary"}">Задача</button></td>
        </tr>
      `,
    )
    .join("");
  iconRefresh();
}

function setGenericColumns(columns) {
  const row = $("#genericTable")?.closest("table")?.querySelector("thead tr");
  if (row) row.innerHTML = columns.map((column) => `<th>${column}</th>`).join("");
}

function renderTasksModule() {
  $("#genericTitle").textContent = "Задачи и согласования";
  $("#genericEyebrow").textContent = "Рабочая очередь";
  $("#genericAction").hidden = true;
  const processes = accessibleProcesses();
  const processTasks = processes.flatMap((process) =>
    (process.tasks || []).map((task) => ({
      ...task,
      kind: "process",
      processId: process.id,
      processType: process.type,
      companyKey: process.companyKey,
      processStage: process.stage,
    })),
  );
  const founderTasks = (state.founderTasks || [])
    .filter((task) => task.assigneeId === currentUserId || ["commercialDirector", "seniorManager"].includes(currentPolicy().roleType))
    .map((task) => ({
      ...task,
      kind: "founder",
      owner: state.users.find((user) => user.id === task.assigneeId)?.name || "Не назначен",
      done: task.status === "Выполнена",
      processId: "Показатель",
      processType: "",
      companyKey: "",
    }));
  const tasks = [...founderTasks, ...processTasks];
  const overdue = tasks.filter((task) => !task.done && /вчера|просроч/i.test(task.due)).length;
  const approvals = processes.filter(isDirectorApprovalStage).length;
  $("#stageColumn").innerHTML = [
    ["Мои активные", tasks.filter((task) => !task.done).length, "is-progress"],
    ["Просроченные", overdue, overdue ? "is-danger" : "is-ok"],
    ["Выполненные", tasks.filter((task) => task.done).length, "is-ok"],
    ["Согласования", approvals, approvals ? "is-warn" : ""],
  ]
    .map(([title, value, tone]) => `<article class="stage-item ${tone}"><strong>${title}</strong><p>${value} записей</p></article>`)
    .join("");
  setGenericColumns(["Задача", "Процесс", "Компания", "Статус", "Исполнитель", "Срок", ""]);
  $("#genericTable").innerHTML =
    tasks
      .sort((a, b) => Number(a.done) - Number(b.done))
      .map(
        (task) => `
          <tr>
            <td data-label="Задача"><strong>${task.title}</strong>${task.kind === "founder" ? `<br><small>Вопрос: ${task.question}</small>` : ""}</td>
            <td data-label="Процесс">${task.kind === "founder" ? `<strong>${task.signalTitle}</strong><br><small>${task.signalValue}</small>` : `${task.processId}<br><small>${processName(task.processType)}</small>`}</td>
            <td data-label="Компания">${task.kind === "founder" ? "Поручение учредителя" : companyLabel(task.companyKey)}</td>
            <td data-label="Статус"><span class="status-pill ${task.done ? "is-ok" : /вчера|просроч/i.test(task.due) || task.due < todayISO() ? "is-danger" : "is-progress"}">${task.done ? "Выполнена" : task.status || "В работе"}</span></td>
            <td data-label="Исполнитель">${task.owner}</td>
            <td data-label="Срок">${task.due}</td>
            <td data-label="">${task.kind === "founder" ? `<button class="row-action" data-complete-founder-task="${task.id}" ${task.done ? "disabled" : ""}>${task.done ? "Готово" : "Выполнить"}</button>` : `<button class="row-action" data-open="${task.processId}">Открыть</button>`}</td>
          </tr>
        `,
      )
      .join("") || `<tr><td colspan="7"><div class="empty-state">Задач по текущему доступу нет</div></td></tr>`;
}

function renderDocumentsModule() {
  $("#genericTitle").textContent = "Документы";
  $("#genericEyebrow").textContent = "Единый реестр";
  $("#genericAction").hidden = true;
  const documents = accessibleProcesses().flatMap((process) =>
    (process.documents || []).map((document) => ({
      ...document,
      processId: process.id,
      client: clientById(process.clientId),
      companyKey: process.companyKey,
      uploadedBy: document.uploadedBy || "Система / импорт",
    })),
  );
  const types = [...new Set(documents.map((document) => document.type))];
  $("#stageColumn").innerHTML = types
    .slice(0, 12)
    .map((type) => `<article class="stage-item"><strong>${type}</strong><p>${documents.filter((document) => document.type === type).length} документов</p></article>`)
    .join("") || '<div class="empty-state">Документы появятся после загрузки в карточках</div>';
  setGenericColumns(["Документ", "Тип", "Клиент", "Процесс", "Компания", "Статус", ""]);
  $("#genericTable").innerHTML =
    documents
      .map(
        (document) => `
          <tr>
            <td data-label="Документ"><strong>${document.name}</strong><br><small>${document.uploadedBy}</small></td>
            <td data-label="Тип">${document.type}</td>
            <td data-label="Клиент">${document.client.name}</td>
            <td data-label="Процесс">${document.processId}</td>
            <td data-label="Компания">${companyLabel(document.companyKey)}</td>
            <td data-label="Статус"><span class="status-pill is-progress">${document.status}</span></td>
            <td data-label=""><button class="row-action" data-open="${document.processId}">Карточка</button></td>
          </tr>
        `,
      )
      .join("") || `<tr><td colspan="7"><div class="empty-state">Документов по текущему доступу нет</div></td></tr>`;
}

function roleLabel(roleId) {
  return ROLE_POLICIES[roleId]?.label || roleId;
}

function renderUsersModule() {
  if (!currentPolicy().canManageUsers) return switchView("dashboard");
  $("#genericTitle").textContent = "Пользователи и роли";
  $("#genericEyebrow").textContent = "Управление доступом";
  $("#genericAction").hidden = false;
  $("#genericAction span:last-child").textContent = "Пользователь";
  const loginUsers = state.users.filter((user) => user.roleId);
  $("#stageColumn").innerHTML = Object.entries(ROLE_POLICIES)
    .map(([roleId, policy]) => `<article class="stage-item"><strong>${policy.label}</strong><p>${loginUsers.filter((user) => user.roleId === roleId).length} пользователей</p></article>`)
    .join("");
  setGenericColumns(["Пользователь", "Логин", "Роль", "Компании", "Статус", "Пароль", ""]);
  $("#genericTable").innerHTML = loginUsers
    .map((user) => {
      const policy = ROLE_POLICIES[user.roleId];
      return `
        <tr>
          <td data-label="Пользователь"><strong>${user.name}</strong><br><small>${user.email || "Внутренний аккаунт"}</small></td>
          <td data-label="Логин">${user.login}</td>
          <td data-label="Роль">${roleLabel(user.roleId)}</td>
          <td data-label="Компании">${policy.companies.map(companyLabel).join(", ")}</td>
          <td data-label="Статус"><span class="status-pill ${user.active === false ? "is-danger" : "is-ok"}">${user.active === false ? "Отключён" : "Активен"}</span></td>
          <td data-label="Пароль">${user.mustChangePassword ? "Требуется смена" : "Установлен"}</td>
          <td data-label="">
            <div class="table-actions">
              <button class="row-action" data-edit-user="${user.id}">Изменить</button>
              <button class="row-action" data-reset-user-password="${user.id}">Сбросить</button>
            </div>
          </td>
        </tr>
      `;
    })
    .join("");
}

function renderAuditModule() {
  if (!currentPolicy().canViewAudit) return switchView("dashboard");
  $("#genericTitle").textContent = "Журнал действий";
  $("#genericEyebrow").textContent = "Аудит системы";
  $("#genericAction").hidden = true;
  const records = state.auditLog || [];
  const today = todayISO();
  $("#stageColumn").innerHTML = [
    ["Всего событий", records.length],
    ["Сегодня", records.filter((record) => record.createdAt?.startsWith(today)).length],
    ["Решения директоров", records.filter((record) => record.action.includes("директор")).length],
    ["Управление доступом", records.filter((record) => ["Создание пользователя", "Смена роли", "Сброс пароля"].includes(record.action)).length],
  ]
    .map(([title, value]) => `<article class="stage-item"><strong>${title}</strong><p>${value} записей</p></article>`)
    .join("");
  setGenericColumns(["Дата и время", "Пользователь", "Действие", "Объект", "Старое значение", "Новое значение", "Устройство"]);
  $("#genericTable").innerHTML =
    records
      .slice(0, 200)
      .map(
        (record) => `
          <tr>
            <td data-label="Дата">${new Date(record.createdAt).toLocaleString("ru-RU")}</td>
            <td data-label="Пользователь"><strong>${record.user}</strong><br><small>${record.role}</small></td>
            <td data-label="Действие">${record.action}</td>
            <td data-label="Объект">${record.objectType} · ${record.objectId}</td>
            <td data-label="Было"><small>${escapeAttr(record.oldValue || "—")}</small></td>
            <td data-label="Стало"><small>${escapeAttr(record.newValue || "—")}</small></td>
            <td data-label="Устройство"><small>${escapeAttr(record.device || "—")}</small></td>
          </tr>
        `,
      )
      .join("") || `<tr><td colspan="7"><div class="empty-state">Журнал начнёт заполняться после действий пользователей</div></td></tr>`;
}

function renderSettingsModule() {
  $("#genericTitle").textContent = "Настройки справочников";
  $("#genericEyebrow").textContent = "Маршрутизация и данные";
  $("#genericAction").hidden = true;
  const dictionaries = [
    ["Компании", CRM_DICTIONARIES.organizations.map((item) => item.label)],
    ["Виды топлива", FUEL_TYPES],
    ["Продукты", CRM_DICTIONARIES.products],
    ["Способы поставки", CRM_DICTIONARIES.supplyMethods],
    ["Типы клиентов", CRM_DICTIONARIES.clientTypes],
    ["Роли", Object.values(ROLE_POLICIES).map((item) => item.label)],
    ["Типы возврата", CRM_DICTIONARIES.refundTypes],
    ["Типы документов", ["Договор", "Счёт", "Акт", "Накладная", "ЭСФ", "Доверенность", "Письмо клиента", "Служебная записка", "Акт сверки", "Платёжное поручение", "Протокол тендера"]],
  ];
  const sla = crmSlaSettings();
  $("#stageColumn").innerHTML = `
    <article class="sla-settings-card">
      <strong>Mock-SLA входящих</strong>
      <label>Первый ответ, мин.<input id="slaFirstResponse" type="number" min="1" value="${sla.firstResponseMinutes}" /></label>
      <label>Классификация, мин.<input id="slaClassification" type="number" min="1" value="${sla.classificationMinutes}" /></label>
      <label>Создание процесса, мин.<input id="slaProcessCreation" type="number" min="1" value="${sla.processCreationMinutes}" /></label>
      <label>Перезвон, мин.<input id="slaMissedCall" type="number" min="1" value="${sla.missedCallMinutes}" /></label>
      <label>Консультация, часов<input id="slaConsultation" type="number" min="1" value="${sla.consultationHours}" /></label>
      <button class="primary-button" data-save-sla-settings>Сохранить SLA</button>
    </article>
  ` + dictionaries
    .map(([title, items]) => `<article class="stage-item"><strong>${title}</strong><p>${items.length} значений</p></article>`)
    .join("");
  setGenericColumns(["Справочник", "Значения", "Количество", "Источник", "Статус", "Изменение", ""]);
  $("#genericTable").innerHTML = dictionaries
    .map(
      ([title, items]) => `
        <tr>
          <td data-label="Справочник"><strong>${title}</strong></td>
          <td data-label="Значения">${items.slice(0, 4).join(", ")}${items.length > 4 ? "…" : ""}</td>
          <td data-label="Количество">${items.length}</td>
          <td data-label="Источник">CRM</td>
          <td data-label="Статус"><span class="status-pill is-ok">Активен</span></td>
          <td data-label="Изменение">Только администратор</td>
          <td data-label=""><button class="row-action" data-toast="Редактор справочника будет подключён к серверной базе">Открыть</button></td>
        </tr>
      `,
    )
    .join("");
}

function saveSlaSettings() {
  if (!["commercialDirector", "systemAdmin"].includes(currentPolicy().roleType)) return toast("Изменять SLA может только администратор.", "warn");
  state.crmSettings ||= { sla: {}, roundRobinIndex: 0 };
  state.crmSettings.sla = {
    firstResponseMinutes: Math.max(1, Number($("#slaFirstResponse")?.value || 15)),
    classificationMinutes: Math.max(1, Number($("#slaClassification")?.value || 30)),
    processCreationMinutes: Math.max(1, Number($("#slaProcessCreation")?.value || 30)),
    missedCallMinutes: Math.max(1, Number($("#slaMissedCall")?.value || 20)),
    consultationHours: Math.max(1, Number($("#slaConsultation")?.value || 24)),
  };
  state.processes.filter((process) => process.type === "appeals").forEach(refreshAppealSla);
  audit("Изменение настроек SLA", "settings", "appeal-sla", "", state.crmSettings.sla);
  saveState();
  renderAll();
  toast("Настройки SLA сохранены", "ok");
}

function sumAmounts(type) {
  const total = accessibleProcesses()
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
  applyLanguage();
  if (activeView === "dashboard" && currentPolicy().roleType === "founder") renderFounderDashboard();
  if (activeView === "dashboard" && currentPolicy().roleType === "assignedManager") renderServiceManagerDashboard();
  if (activeView === "dashboard" && currentPolicy().roleType === "seniorManager") renderSeniorManagerDashboard();
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
        transition("appeal-resolve", "Решить обращение", "Решено", { requirements: ["classified", "result"], tone: "success" }),
        transition("appeal-close-no-result", "Закрыть без решения", "Закрыто без решения", { requirements: ["classified", "closeReason"], tone: "secondary" }),
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
    if (stage === "Готово к выдаче") return [transition("order-issue", "Начать выдачу / пополнение", "Выдача / пополнение карты", { requirements: ["payment", ...(requiresPower(process) ? ["power"] : [])], tone: "success" })];
    if (stage === "Выдача / пополнение карты") return [transition("order-issued", "Зафиксировать выдачу", "Документы оформлены", { requirements: ["issuedWithinPaid"] })];
    if (stage === "Документы оформлены") return [transition("order-documents", "Передать на ЭСФ", "Ожидается ЭСФ", { requirements: ["docs"] })];
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
      return [transition("tender-director", "Передать директору", "На решении директора", { requirements: ["discussion", "tenderData"] })];
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
    if (stage === "Договор на подписании") {
      return [transition("tender-close-contract", "Закрыть успешно", "Договор подписан / закрыто успешно", { requirements: ["contract"], tone: "success" })];
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
    closeReason: "Для закрытия без решения укажите обязательную причину.",
    result: "Укажите результат обработки обращения.",
    issuedWithinPaid: "Укажите выданный объём. Он не может превышать оплаченный объём.",
    tenderData: "Заполните площадку, номер объявления или лота, заказчика и срок подачи.",
    contract: "Для успешного закрытия нужен номер и файл подписанного договора.",
  };
  for (const requirement of target.requirements || []) {
    let passed;
    if (requirement === "activeContract") passed = hasActiveContract(process);
    else if (requirement === "closeReason") passed = Boolean(process.details?.closeReason?.trim());
    else if (requirement === "issuedWithinPaid") {
      const paid = Number(process.details?.paidVolume || 0);
      const issued = Number(process.details?.issuedVolume || 0);
      passed = paid > 0 && issued > 0 && issued <= paid;
    } else if (requirement === "tenderData") {
      const details = process.details || {};
      passed = Boolean(details.platform && (details.announcementNumber || details.lotNumber) && details.customer && details.deadline);
    } else if (requirement === "contract") {
      passed = Boolean(process.checks?.contract && process.details?.signedContractNumber && process.documents.some((document) => document.type === "Договор"));
    } else passed = process.checks?.[requirement];
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
  const numericVolume = Number(String(source.volume || "").replace(/[^\d]/g, "")) || 0;
  const calculatedAmount = targetType === "orders" && numericVolume && FUEL_PRICE[source.fuel] ? `${(numericVolume * FUEL_PRICE[source.fuel]).toLocaleString("ru-RU")} ₸` : source.amount;
  const orderSupply = source.details?.topic === "Топливная карта" ? "Товарная карта" : source.details?.topic === "Опт" ? "Опт" : "Талоны";
  const linkedOwner = ["contracts", "orders"].includes(targetType) && SERVICE_MANAGER_NAMES.includes(source.owner) ? source.owner : defaultOwnerFor(targetType, clientType);
  const linked = {
    id,
    type: targetType,
    clientId: source.clientId,
    clientType,
    companyKey: source.companyKey,
    direction: source.companyKey,
    product: source.product,
    fuel: source.fuel,
    supply: targetType === "refunds" ? (source.details?.topic === "Топливная карта" ? "Товарная карта + деньги" : "Талоны + деньги") : targetType === "orders" ? orderSupply : source.supply,
    stage: meta.stages[0],
    owner: linkedOwner,
    due: "1 рабочий день",
    dueState: "new",
    priority: source.priority,
    volume: source.volume,
    amount: calculatedAmount,
    approvalState: "none",
    organizationLocked: true,
    overpayment: "unknown",
    linkedProcessIds: [source.id],
    integration: { source: "1С", invoiceNumber: "", invoiceDate: "", paymentStatus: "Ожидается", paymentDate: "" },
    details: {
      ...defaultProcessDetails(targetType, source),
      ...(targetType === "orders" ? { requestedVolume: numericVolume, unitPrice: FUEL_PRICE[source.fuel] || 0 } : {}),
    },
    checks: defaultChecks(targetType),
    documents: [],
    tasks: [{ id: uid("task"), title: `Проверить связанную карточку из ${source.id}`, owner: linkedOwner, due: "Сегодня", done: false }],
    comments: [{ author: "Система", text: `Карточка создана автоматически из ${source.id}.`, time: "сейчас" }],
    history: [`Автоматически создано из ${source.id} без повторного ввода данных.`],
  };
  source.linkedProcessIds ||= [];
  source.linkedProcessIds.push(id);
  source.checks.linked = true;
  state.processes.unshift(linked);
  audit("Создание связанной карточки", targetType, id, source.id, { stage: linked.stage, companyKey: linked.companyKey });
  notify(state.users.find((user) => user.name === linked.owner)?.id || "", "Новая связанная задача", `${id} создан из ${source.id}`, "progress", id);
  return linked;
}

function createLinkedFromAppeal(sourceId, targetType) {
  const source = processById(sourceId);
  if (!source || source.type !== "appeals" || !canAccessProcess(source) || !currentPolicy().canEditProcesses) return toast("Преобразование обращения недоступно.", "warn");
  if (!source.checks?.classified) return toast("Сначала классифицируйте обращение.", "warn");
  if (!allowedCreateTypes().includes(targetType) && !["commercialDirector", "seniorManager"].includes(currentPolicy().roleType)) return toast("Ваша роль не может создать этот тип процесса.", "warn");
  if (targetType === "orders" && !hasActiveContract(source)) return toast("Нельзя создать заказ: сначала нужен действующий договор по компании и продукту.", "warn");
  const linked = createLinkedProcess(source, targetType);
  source.stage = "Передано в профильный процесс";
  source.details.linkedAt = new Date().toISOString();
  source.details.nextStep = `Контролировать ${linked.id}`;
  source.organizationLocked = true;
  source.history.push(`Обращение преобразовано в ${linked.id}.`);
  source.tasks.forEach((task) => {
    if (!task.linkedProcessId) task.linkedProcessId = linked.id;
  });
  appealTask(source, targetType === "orders" ? "Проконтролировать оплату по созданному заказу" : `Проконтролировать процесс ${linked.id}`, source.owner, 30, `control-${linked.id}`);
  refreshAppealSla(source);
  const channel = crmChannelInfo(source.details?.source);
  const linkedAuditAction = targetType === "orders" ? (channel.key === "phone" ? "Создан заказ из звонка" : channel.key === "whatsapp" ? "Создан заказ из WhatsApp" : `Создан заказ из ${channel.label}`) : "Создан связанный процесс";
  audit(linkedAuditAction, source.type, source.id, "", linked.id);
  saveState();
  renderAll();
  if (canAccessProcess(linked)) openProcessModal(linked.id, "data");
  else openProcessModal(source.id, "tasks");
  toast(`Создана связанная карточка ${linked.id}`, "ok");
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
  if (process.type === "appeals" && ["Решено", "Закрыто без решения"].includes(target.to)) {
    process.details.resolvedAt = new Date().toISOString();
  }
  process.history.push(`Маршрут: «${previousStage}» → «${target.to}» (${target.label}).`);
  const appealAction = process.type === "appeals" && target.to === "Закрыто без решения" ? "Обращение закрыто без решения" : process.type === "appeals" && target.to === "Решено" ? "Обращение закрыто" : "Изменение статуса";
  audit(appealAction, process.type, process.id, previousStage, target.to);
  const ownerUser = state.users.find((user) => user.name === process.owner);
  if (ownerUser) notify(ownerUser.id, "Изменение процесса", `${process.id}: ${target.to}`, process.dueState, process.id);
  if (target.to.toLowerCase().includes("директор")) {
    const directorId = process.companyKey === "trade" ? "khusnutdinov" : "kiikbay";
    notify(directorId, "Требуется согласование", `${process.id}: ${clientById(process.clientId).name}`, "warn", process.id);
  }
  saveState();
  renderAll();
  if (currentModalId === process.id) openProcessModal(process.id, modalTab);
  toast(`${process.id}: ${target.to}`, target.tone === "success" ? "ok" : "progress");
  return true;
}

function performTransition(id, key) {
  const process = processById(id);
  if (!process || !canAccessProcess(process) || !currentPolicy().canEditProcesses) return toast("Действие недоступно для вашей роли.", "warn");
  if (currentModalId === id) {
    process.details ||= {};
    $$("[data-detail-field]").forEach((field) => {
      process.details[field.dataset.detailField] = field.value;
    });
    $$("[data-check]").forEach((checkbox) => {
      if (!checkbox.disabled) process.checks[checkbox.dataset.check] = checkbox.checked;
    });
    if (process.type === "appeals") {
      process.details.result = $("#appealResult")?.value.trim() || process.details.result || "";
      process.details.problemDescription = $("#appealProblemDescription")?.value.trim() || process.details.problemDescription || "";
      process.checks.result = Boolean(process.details.result);
    }
    if (process.type === "orders") process.checks.esf = ["Оформлена", "Не требуется"].includes(process.details.esfStatus);
    if (process.type === "tenders") {
      process.checks.submitted = Boolean(process.details.bidSubmittedAt && process.documents.some((document) => document.type === "Подтверждение подачи заявки"));
      process.checks.contract = Boolean(process.details.signedContractNumber && process.documents.some((document) => document.type === "Договор"));
    }
  }
  const target = availableTransitions(process).find((item) => item.key === key);
  if (!target) return toast("Этот переход больше недоступен.", "warn");
  applyTransition(process, target);
}

function advanceProcess(id) {
  const process = processById(id);
  if (!process || !canAccessProcess(process) || !currentPolicy().canEditProcesses) return toast("Действие недоступно для вашей роли.", "warn");
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
  if (!process || !canAccessProcess(process) || !currentPolicy().canEditProcesses) return toast("Действие недоступно для вашей роли.", "warn");
  const stages = metaFor(process.type).stages;
  const index = stageIndex(process);
  if (index <= 0) return toast("Это первая стадия процесса.", "warn");
  const previousStage = process.stage;
  process.stage = stages[index - 1];
  process.history.push(`Возврат на стадию «${process.stage}»`);
  audit("Возврат статуса", process.type, process.id, previousStage, process.stage);
  saveState();
  renderAll();
  openProcessModal(id, modalTab);
}

function approveProcess(id) {
  const process = processById(id);
  if (!process || !canAccessProcess(process) || !currentPolicy().canApprove) return toast("У вас нет права согласовать эту карточку.", "warn");
  if (!isDirectorApprovalStage(process)) return toast("Карточка не находится на согласовании директора.", "warn");
  if (process.type === "refunds" && (!process.checks.accounting || !process.checks.reconciliation)) {
    openProcessModal(id, "data");
    return toast("Для согласования возврата нужны финансовая проверка и подписанный акт сверки.", "warn");
  }
  const decision =
    $("#directorDecision")?.value ||
    (process.type === "extensions" ? "Продлить без перерасчёта" : process.type === "tenders" ? "Участвуем" : process.type === "refunds" ? "Согласовать возврат" : "Согласовать");
  if (decision === "Продлить с перерасчётом" && !(Number(process.details?.recalculation) > 0)) {
    openProcessModal(id, "data");
    return toast("Для решения с перерасчётом сначала укажите сумму перерасчёта.", "warn");
  }
  const decisionComment = $("#directorDecisionComment")?.value.trim() || "Согласовано. Передать на следующий этап.";
  const previousStage = process.stage;
  process.approvalState = "approved";
  process.checks.director = true;
  process.history.push("Директор согласовал заявку");
  if (process.type === "tenders") process.stage = decision === "Не участвуем" ? "Не участвуем" : "Участвуем";
  else if (process.type === "extensions") process.stage = decision === "Отказать в продлении" ? "Закрыто без продления" : "Ожидается ответ клиента";
  else if (process.type === "refunds") process.stage = decision === "Отказать в возврате" ? "Закрыто без возврата - отказ / невозможность" : "Ожидает банковского возврата";
  else {
    const next = metaFor(process.type).stages[stageIndex(process) + 1];
    if (next) process.stage = next;
  }
  process.organizationLocked = true;
  const isRejected = decision.startsWith("Отказать") || decision === "Не участвуем";
  process.approvalState = isRejected ? "rejected" : "approved";
  process.owner = !isRejected && process.type === "refunds" ? "Бухгалтер по банку" : process.clientType === "Государственная организация" ? "Ольга" : defaultOwnerFor(process.type, process.clientType);
  if (isRejected) process.dueState = "ok";
  process.comments.unshift({ author: currentUser().name, text: decisionComment, time: "сейчас" });
  process.approval = { userId: currentUserId, user: currentUser().name, decision, comment: decisionComment, companyKey: process.companyKey, previousStage, nextStage: process.stage, decidedAt: new Date().toISOString() };
  audit(`Решение директора: ${decision}`, process.type, process.id, previousStage, process.stage);
  notify("madi", "Решение директора", `${process.id}: ${decision} · ${currentUser().name}`, isRejected ? "warn" : "ok", process.id);
  saveState();
  renderAll();
  if (currentModalId === id) {
    if (canAccessProcess(process)) openProcessModal(id, modalTab);
    else closeModal();
  }
  toast(`${decision}: ${id}`, isRejected ? "warn" : "ok");
}

function returnProcess(id) {
  const process = processById(id);
  if (!process || !canAccessProcess(process) || !currentPolicy().canApprove) return toast("У вас нет права вернуть эту карточку.", "warn");
  if (!isDirectorApprovalStage(process)) return toast("Карточка не находится на согласовании директора.", "warn");
  const decisionComment = $("#directorDecisionComment")?.value.trim();
  if (!decisionComment) {
    openProcessModal(id, "data");
    return toast("Укажите причину возврата на доработку.", "warn");
  }
  const previousStage = process.stage;
  process.approvalState = "returned";
  process.dueState = "warn";
  const returnedStage = metaFor(process.type).stages.find((stage) => stage.toLowerCase().includes("доработ"));
  if (returnedStage) process.stage = returnedStage;
  const correctionOwner = process.type === "tenders" || process.clientType === "Государственная организация" ? "Ольга" : defaultOwnerFor(process.type, process.clientType);
  process.owner = correctionOwner;
  process.tasks.unshift({ id: uid("task"), title: "Исправить замечания согласующего", owner: correctionOwner, due: "Сегодня", priority: "Высокая", status: "Новая", createdBy: currentUser().name, createdAt: new Date().toISOString(), result: "", done: false });
  process.comments.unshift({ author: currentUser().name, text: decisionComment, time: "сейчас" });
  process.history.push("Заявка возвращена на доработку");
  process.approval = { userId: currentUserId, user: currentUser().name, decision: "Возвращено на доработку", comment: decisionComment, companyKey: process.companyKey, previousStage, nextStage: process.stage, decidedAt: new Date().toISOString() };
  audit("Решение директора: возврат", process.type, process.id, previousStage, process.stage);
  notify("madi", "Заявка возвращена директором", `${process.id}: требуется доработка`, "warn", process.id);
  notify(state.users.find((user) => user.name === correctionOwner)?.id || "", "Заявка возвращена на доработку", `${process.id}: ${decisionComment}`, "warn", process.id);
  saveState();
  renderAll();
  if (currentModalId === id) {
    if (canAccessProcess(process)) openProcessModal(id, "tasks");
    else closeModal();
  }
  toast(`Возвращено на доработку: ${id}`, "warn");
}

function openProcessModal(id, tab = "data") {
  const process = processById(id);
  if (!process) return;
  if (!canAccessProcess(process)) return toast("У вас нет доступа к этой карточке.", "warn");
  currentModalId = id;
  modalTab = tab;
  const client = clientById(process.clientId);
  const policy = currentPolicy();
  const routes = policy.canEditProcesses ? availableTransitions(process) : [];
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
        <span class="status-pill ${statusClass(processTone(process))}">${processName(process.type)}</span>
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
        ${policy.canEditProcesses ? `<button class="ghost-button" data-prev="${process.id}"><span data-lucide="arrow-left"></span><span>Назад</span></button>` : ""}
        ${
          policy.canApprove && (process.approvalState === "pending" || process.stage.toLowerCase().includes("директор"))
            ? `<button class="ghost-button" data-return="${process.id}"><span data-lucide="undo-2"></span><span>Вернуть</span></button><button class="ghost-button is-success" data-approve="${process.id}"><span data-lucide="check"></span><span>Согласовать</span></button>`
            : ""
        }
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

function renderProcessFields(process, editable) {
  const schema = PROCESS_FIELD_SCHEMAS[process.type] || [];
  if (!schema.length) return "";
  const fields = schema
    .map(([key, label, type, options = []]) => {
      const value = process.details?.[key] ?? "";
      const disabled = editable ? "" : "disabled";
      if (type === "select") {
        return `<label>${label}<select data-detail-field="${key}" ${disabled}>${options.map((option) => `<option ${String(option) === String(value) ? "selected" : ""}>${option}</option>`).join("")}</select></label>`;
      }
      if (type === "textarea") return `<label class="field-wide">${label}<textarea data-detail-field="${key}" ${disabled}>${escapeAttr(value)}</textarea></label>`;
      return `<label>${label}<input data-detail-field="${key}" type="${type}" value="${escapeAttr(value)}" ${editable ? "" : "readonly"} /></label>`;
    })
    .join("");
  return `<section class="process-specific-fields"><div class="checklist-header"><strong>Данные процесса</strong><small>Поля зависят от типа карточки</small></div><div class="detail-grid">${fields}</div></section>`;
}

function directorDecisionOptions(process) {
  const decisions =
    process.type === "extensions"
      ? ["Продлить без перерасчёта", "Продлить с перерасчётом", "Отказать в продлении"]
      : process.type === "tenders"
        ? ["Участвуем", "Не участвуем"]
        : process.type === "refunds"
          ? ["Согласовать возврат", "Отказать в возврате"]
          : ["Согласовать"];
  return decisions.map((decision) => `<option>${decision}</option>`).join("");
}

function renderAppealCommunication(process, editable) {
  if (process.type !== "appeals") return "";
  const channel = crmChannelInfo(process.details?.source || process.supply);
  const details = process.details || {};
  const sla = appealSlaStatus(process);
  return `
    <section class="appeal-communication">
      <header>
        <span class="crm-channel-icon ${channel.tone}" data-lucide="${channel.icon}"></span>
        <div><span class="eyebrow">${channel.label} · ${details.communicationId || process.id}</span><strong>${details.communicationStatus || "Входящее обращение"}</strong></div>
        <span class="status-pill ${statusClass(processTone(process))}">${process.due}</span>
      </header>
      <div class="communication-meta">
        <span><b>Контакт:</b> ${details.contactName || "не указан"}</span>
        <span><b>Телефон:</b> ${details.phone || "не указан"}</span>
        <span><b>Email:</b> ${details.email || "не указан"}</span>
        <span><b>Назначение:</b> ${details.assignmentReason || "ручное"}</span>
        ${details.repeatAppeal ? `<span class="danger-text"><b>Повторное обращение клиента</b>${details.previousOwner ? ` · ранее ${details.previousOwner}` : ""}</span>` : ""}
        ${channel.key === "phone" ? `<span><b>Длительность:</b> ${Math.floor((details.callDurationSeconds || 0) / 60)}:${String((details.callDurationSeconds || 0) % 60).padStart(2, "0")}</span>` : ""}
      </div>
      <div class="appeal-message-preview">
        <small>Последнее сообщение клиента</small>
        <p>${escapeAttr(process.details?.customerMessage || process.comments?.find((comment) => /WhatsApp|Email|Телефон/i.test(comment.author))?.text || "Сообщение не зафиксировано")}</p>
      </div>
      ${
        process.details?.lastResponse
          ? `<div class="appeal-message-preview is-response"><small>Последний ответ менеджера</small><p>${escapeAttr(process.details.lastResponse)}</p></div>`
          : ""
      }
      ${sla.violations.length ? `<div class="appeal-sla-warning"><strong>Нарушения SLA</strong><span>${sla.violations.join(" · ")}</span></div>` : ""}
      ${
        editable
          ? `<div class="appeal-reply-box">
              <textarea id="appealReplyText" placeholder="Напишите ответ клиенту через ${channel.label}"></textarea>
              <button class="primary-button" data-send-appeal-reply="${process.id}"><span data-lucide="send"></span><span>Отправить ответ</span></button>
            </div>`
          : ""
      }
    </section>
  `;
}

function renderAppealWorkflow(process, editable) {
  if (process.type !== "appeals") return "";
  const details = process.details || {};
  const suggestedType = APPEAL_PROCESS_BY_CLASSIFICATION[details.topic];
  const canCloseConsultation = details.topic === "Консультация";
  const isComplaint = details.topic === "Жалоба / проблема";
  return `
    <section class="appeal-workflow">
      <div class="checklist-header">
        <div><strong>Классификация и следующее действие</strong><small>Перед закрытием или передачей обращение должно быть классифицировано</small></div>
        <span class="status-pill ${process.checks?.classified ? "is-ok" : "is-warn"}">${process.checks?.classified ? "Классифицировано" : "Требуется классификация"}</span>
      </div>
      <div class="appeal-workflow-grid">
        <label>Классификация
          <select id="appealClassification" ${editable ? "" : "disabled"}>
            ${APPEAL_CLASSIFICATIONS.map((item) => `<option ${item === details.topic ? "selected" : ""}>${item}</option>`).join("")}
          </select>
        </label>
        <label>Следующий шаг<input value="${escapeAttr(details.nextStep || (suggestedType ? `Создать ${processName(suggestedType).toLowerCase()}` : canCloseConsultation ? "Закрыть консультацией" : isComplaint ? "Передать Диане" : "Создать задачу"))}" readonly /></label>
        <label class="field-wide">Описание проблемы${isComplaint ? " (обязательно)" : " (если есть)"}<textarea id="appealProblemDescription" ${editable ? "" : "disabled"} placeholder="Для жалобы или проблемы опишите, что произошло">${escapeAttr(details.problemDescription || "")}</textarea></label>
        <label class="field-wide">Результат / комментарий менеджера<textarea id="appealResult" ${editable ? "" : "disabled"}>${escapeAttr(details.result || "")}</textarea></label>
      </div>
      ${
        editable
          ? `<div class="inline-actions appeal-quick-actions">
              <button class="primary-button" data-classify-appeal="${process.id}"><span data-lucide="tags"></span><span>Сохранить классификацию</span></button>
              ${details.communicationStatus === "Входящий" ? `<button class="ghost-button" data-finish-mock-call="${process.id}"><span data-lucide="phone-off"></span><span>Завершить звонок</span></button>` : ""}
              ${details.missedCall && !details.callbackCompletedAt ? `<button class="ghost-button" data-complete-callback="${process.id}"><span data-lucide="phone-call"></span><span>Перезвонил клиенту</span></button>` : ""}
              ${suggestedType ? `<button class="ghost-button is-success" data-create-linked="${suggestedType}" data-source-process="${process.id}"><span data-lucide="workflow"></span><span>Создать ${processName(suggestedType).toLowerCase()}</span></button>` : ""}
              ${canCloseConsultation ? `<button class="ghost-button is-success" data-close-consultation="${process.id}"><span data-lucide="circle-check"></span><span>Решено консультацией</span></button>` : ""}
              ${!suggestedType && !canCloseConsultation ? `<button class="ghost-button" data-create-appeal-task="${process.id}"><span data-lucide="list-plus"></span><span>Создать задачу</span></button>` : ""}
              <button class="ghost-button" data-transfer-diana="${process.id}"><span data-lucide="shield-alert"></span><span>Передать Диане</span></button>
            </div>`
          : ""
      }
    </section>
  `;
}

function renderAppealClientContext(process) {
  if (process.type !== "appeals") return "";
  const client = clientById(process.clientId);
  const related = state.processes.filter((item) => item.clientId === client.id && item.id !== process.id);
  const contracts = related.filter((item) => item.type === "contracts" && ["Действует", "Скоро истекает"].includes(item.stage));
  const recentOrders = related.filter((item) => item.type === "orders").slice(0, 3);
  const recentAppeals = related.filter((item) => item.type === "appeals").slice(0, 3);
  return `
    <section class="appeal-client-context">
      <div><span>Клиент</span><strong>${client.name}</strong><small>БИН ${client.bin} · ${client.status || "Активный"}</small></div>
      <div><span>Ответственный</span><strong>${client.responsible || "Не закреплён"}</strong><small>${client.contacts || "Контакты не заполнены"}</small></div>
      <div><span>Активные договоры</span><strong>${contracts.length}</strong><small>${contracts.map((item) => item.id).join(", ") || "Нет действующего договора"}</small></div>
      <div><span>Последние заказы</span><strong>${recentOrders.length}</strong><small>${recentOrders.map((item) => `${item.id} · ${item.stage}`).join("; ") || "Заказов нет"}</small></div>
      <div><span>Коммуникации</span><strong>${process.details?.repeatAppeal ? "Повторное" : recentAppeals.length}</strong><small>${recentAppeals.map((item) => `${item.id} · ${item.owner}`).join("; ") || "Истории обращений нет"}</small></div>
    </section>
  `;
}

function renderDataTab(process) {
  const client = clientById(process.clientId);
  const editable = currentPolicy().canEditProcesses;
  const locked = isOrganizationLocked(process);
  const organization = organizationFor(process.companyKey);
  const routes = availableTransitions(process);
  const checks = Object.entries(process.checks || {})
    .map(
      ([key, value]) => {
        const checked = key === "contract" ? hasActiveContract(process) : value;
        return `
        <label class="toggle-row">
          <input type="checkbox" data-check="${key}" ${checked ? "checked" : ""} ${!editable || isIntegrationCheck(process, key) ? "disabled" : ""} />
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
      ${
        process.type === "appeals"
          ? `<label>Клиент
              <select id="modalAppealClient" ${editable ? "" : "disabled"}>
                ${state.clients.map((item) => `<option value="${item.id}" ${item.id === process.clientId ? "selected" : ""}>${item.name} · ${item.bin}</option>`).join("")}
              </select>
            </label>`
          : `<label>Клиент<input id="modalClientName" value="${escapeAttr(client.name)}" ${editable ? "" : "readonly"} /></label>`
      }
      <label>Тип клиента
        <select id="modalClientType" ${editable ? "" : "disabled"}>
          ${CRM_DICTIONARIES.clientTypes.map((type) => `<option ${type === process.clientType ? "selected" : ""}>${type}</option>`).join("")}
        </select>
      </label>
      <label>Наша организация
        <select id="modalCompanyKey" ${locked || !editable ? "disabled" : ""}>
          <option value="trade" ${process.companyKey === "trade" ? "selected" : ""}>${COMPANY.trade}</option>
          <option value="ugh" ${process.companyKey === "ugh" ? "selected" : ""}>${COMPANY.ugh}</option>
        </select>
        ${locked ? '<small class="field-note">Заблокировано после выхода со стартовой стадии</small>' : ""}
      </label>
      <label>Стадия<input id="modalStageSelect" value="${escapeAttr(process.stage)}" readonly /></label>
      <label>Ответственный
        <select id="modalOwner" ${editable ? "" : "disabled"}>${staffOptions(process.owner, process.companyKey)}</select>
      </label>
      <label>Вид топлива
        <select id="modalFuel" ${locked || !editable ? "disabled" : ""}>${fuelOptions(process.fuel)}</select>
      </label>
      <label>Продукт
        <input id="modalProduct" value="${escapeAttr(process.product)}" readonly />
      </label>
      <label>Способ / предмет<input id="modalSupply" value="${escapeAttr(process.supply)}" ${editable ? "" : "readonly"} /></label>
      <label>Объем<input id="modalVolume" value="${escapeAttr(process.volume)}" ${editable ? "" : "readonly"} /></label>
      <label>Сумма<input id="modalAmount" value="${escapeAttr(process.amount)}" ${editable ? "" : "readonly"} /></label>
      <label>SLA / срок<input id="modalDue" value="${escapeAttr(process.due)}" ${editable ? "" : "readonly"} /></label>
      <label>Приоритет
        <select id="modalPriority" ${editable ? "" : "disabled"}>
          ${["Обычная", "Высокая", "Критическая"].map((priority) => `<option ${priority === process.priority ? "selected" : ""}>${priority}</option>`).join("")}
        </select>
      </label>
      ${
        process.type === "refunds"
          ? `<label>Переплата подтверждена
              <select id="modalOverpayment" ${editable ? "" : "disabled"}>
                <option value="unknown" ${process.overpayment === "unknown" ? "selected" : ""}>Не определено</option>
                <option value="yes" ${process.overpayment === "yes" ? "selected" : ""}>Да — требуется банковский возврат</option>
                <option value="no" ${process.overpayment === "no" ? "selected" : ""}>Нет — закрыть без возврата ДС</option>
              </select>
            </label>`
          : ""
      }
    </div>
    ${renderAppealClientContext(process)}
    ${renderProcessFields(process, editable)}
    ${renderAppealCommunication(process, editable)}
    ${renderAppealWorkflow(process, editable)}
    ${
      process.type === "appeals" && editable
        ? `<section class="linked-process-panel">
            <div><span class="eyebrow">Преобразовать обращение</span><strong>Создать связанную карточку без повторного ввода данных</strong></div>
            <div class="inline-actions">
              ${["contracts", "orders", "extensions", "refunds", "tenders"].map((type) => `<button class="ghost-button" data-create-linked="${type}" data-source-process="${process.id}">${processName(type)}</button>`).join("")}
            </div>
          </section>`
        : ""
    }
    ${
      process.type === "orders"
        ? `<section class="integration-card">
            <div>
              <span class="eyebrow">Источник финансового факта</span>
              <strong>1С · поля защищены от ручного редактирования</strong>
              <p>Счёт: ${process.integration.invoiceNumber || "не получен"} · Оплата: ${process.integration.paymentStatus || "ожидается"}</p>
            </div>
            <div class="inline-actions">
              ${editable && !process.checks.invoice ? `<button class="ghost-button" data-create-invoice-one-c="${process.id}"><span data-lucide="file-plus-2"></span><span>Сформировать счёт в 1С</span></button>` : ""}
              ${currentPolicy().canConfirm1C && process.checks.invoice && !process.checks.payment ? `<button class="ghost-button is-success" data-confirm-payment-one-c="${process.id}"><span data-lucide="badge-check"></span><span>Подтвердить оплату из 1С</span></button>` : ""}
            </div>
          </section>`
        : ""
    }
    <section class="route-panel">
      <div>
        <span class="eyebrow">${editable ? "Доступные переходы" : "Решение директора"}</span>
        <strong>${editable ? (routes.length ? routes.map((route) => route.label).join(" · ") : routeWaitingMessage(process)) : "Согласовать заявку или вернуть её на доработку"}</strong>
      </div>
      <p>${editable ? "Стадия меняется только через маршрут — ручное переключение отключено." : "Операционные поля доступны только для чтения."}</p>
    </section>
    ${
      currentPolicy().canApprove && isDirectorApprovalStage(process)
        ? `<div class="director-comment-field">
            <label>Решение<select id="directorDecision">${directorDecisionOptions(process)}</select></label>
            <label>Комментарий к решению<textarea id="directorDecisionComment" placeholder="Укажите условия согласования или причину возврата"></textarea></label>
          </div>`
        : ""
    }
    <section class="checklist">
      <div class="checklist-header">
        <strong>Проверки текущего маршрута</strong>
        ${editable ? `<button class="text-button" data-save-process="${process.id}">Сохранить изменения</button>` : ""}
      </div>
      <div class="toggle-grid">${checks || '<div class="empty-state">Для процесса пока нет проверок</div>'}</div>
    </section>
  `;
}

function renderDocsTab(process) {
  const editable = currentPolicy().canEditProcesses;
  return `
    <section class="modal-section">
      ${
        editable
          ? `<div class="inline-form">
              <select id="docType">
                ${["Проект договора", "Договор", "Счет", "Платежное поручение", "Доверенность", "Акт", "Накладная", "ЭСФ", "Письмо клиента", "Служебная записка", "Акт сверки", "Протокол тендера", "Подтверждение подачи заявки", "Техспецификация", "Иной документ"].map((item) => `<option>${item}</option>`).join("")}
              </select>
              <input id="docName" placeholder="Название документа или файла" />
              <button class="primary-button" data-add-doc="${process.id}"><span data-lucide="paperclip"></span><span>Добавить</span></button>
            </div>`
          : ""
      }
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
  const editable = currentPolicy().canEditProcesses;
  return `
    <section class="modal-section">
      ${
        editable
          ? `<div class="inline-form">
              <input id="taskTitle" placeholder="Новая задача" />
              <input id="taskOwner" placeholder="Ответственный" value="${escapeAttr(process.owner)}" />
              <input id="taskDue" placeholder="Срок" value="Сегодня" />
              <button class="primary-button" data-add-task="${process.id}"><span data-lucide="list-plus"></span><span>Добавить</span></button>
            </div>`
          : ""
      }
      <div class="record-list">
        ${
          process.tasks
            .map(
              (task) => `
                <article class="record-row">
                  <input type="checkbox" data-task-done="${process.id}" data-task-id="${task.id}" ${task.done ? "checked" : ""} ${editable ? "" : "disabled"} />
                  <div>
                    <strong class="${task.done ? "is-muted" : ""}">${task.title}</strong>
                    ${
                      currentPolicy().canReassign
                        ? `<p><select class="inline-owner-select" data-task-owner="${process.id}" data-task-id="${task.id}">${staffOptions(task.owner, process.companyKey)}</select> · ${task.due}</p>`
                        : `<p>${task.owner} · ${task.due}</p>`
                    }
                  </div>
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
    firstResponse: "Первый ответ зафиксирован",
    classified: "Обращение классифицировано",
    linked: "Связанный процесс создан",
    callback: "Перезвон выполнен",
    result: "Результат обработки заполнен",
  }[key] || key;
}

function saveProcessFromModal(id) {
  const process = processById(id);
  if (!process || !canAccessProcess(process) || !currentPolicy().canEditProcesses) return toast("Редактирование недоступно для вашей роли.", "warn");
  const before = { companyKey: process.companyKey, owner: process.owner, volume: process.volume, amount: process.amount, priority: process.priority };
  const appealClientId = $("#modalAppealClient")?.value;
  if (process.type === "appeals" && appealClientId && appealClientId !== process.clientId) {
    const previousClient = process.clientId;
    process.clientId = appealClientId;
    process.clientType = clientById(appealClientId).type;
    process.history.push(`Клиент обращения изменён: ${clientById(previousClient).name} → ${clientById(appealClientId).name}.`);
    audit("Обращение привязано к клиенту", process.type, process.id, previousClient, appealClientId);
  }
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
  process.details ||= {};
  $$("[data-detail-field]").forEach((field) => {
    process.details[field.dataset.detailField] = field.value;
  });
  if (process.type === "appeals") {
    process.details.result = $("#appealResult")?.value.trim() || process.details.result || "";
    process.details.problemDescription = $("#appealProblemDescription")?.value.trim() || process.details.problemDescription || "";
    process.checks.result = Boolean(process.details.result);
    refreshAppealSla(process);
  }
  if (process.type === "orders") {
    process.checks.esf = process.details.esfStatus === "Оформлена" || process.details.esfStatus === "Не требуется";
  }
  if (process.type === "refunds") {
    process.checks.paymentOrder = Boolean(process.details.paymentOrderNumber && process.details.paymentDate && process.documents.some((document) => document.type === "Платежное поручение"));
  }
  if (process.type === "tenders") {
    process.checks.submitted = Boolean(process.details.bidSubmittedAt && process.documents.some((document) => document.type === "Подтверждение подачи заявки"));
    process.checks.contract = Boolean(process.details.signedContractNumber && process.documents.some((document) => document.type === "Договор"));
  }
  process.history.push(`Данные карточки обновлены. Маршрут: ${companyLabel(process.companyKey)}, директор: ${COMPANY_DIRECTOR[process.companyKey]}.`);
  audit("Изменение карточки", process.type, process.id, before, { companyKey: process.companyKey, owner: process.owner, volume: process.volume, amount: process.amount, priority: process.priority });
  saveState();
  renderAll();
  openProcessModal(id, "data");
  toast("Изменения сохранены", "ok");
}

function mock1CCreateInvoice(id) {
  const process = processById(id);
  if (!process || !canAccessProcess(process) || !currentPolicy().canEditProcesses || process.type !== "orders") return;
  if (!hasActiveContract(process)) return toast("1С-запрос заблокирован: нет действующего договора.", "warn");
  process.checks.invoice = true;
  process.integration = {
    ...process.integration,
    invoiceNumber: process.integration.invoiceNumber || `СЧ-${process.id.replace(/\D/g, "")}`,
    invoiceDate: todayISO(),
    invoiceFile: `invoice-${process.id}.pdf`,
    paymentStatus: process.integration.paymentStatus || "Ожидается",
  };
  if (["Подготовка счета", "Новый запрос", "Проверка договора"].includes(process.stage)) process.stage = "Счет сформирован";
  if (!process.documents.some((document) => document.type === "Счет")) {
    process.documents.unshift({ id: uid("doc"), type: "Счет", name: process.integration.invoiceFile, status: "Получен из mock 1С", uploadedBy: "Интеграция 1С", uploadedAt: new Date().toISOString() });
  }
  process.history.push("Mock 1С сформировал счёт и вернул номер, дату, сумму и файл.");
  process.comments.unshift({ author: "Интеграция 1С", text: `Сформирован счёт ${process.integration.invoiceNumber}.`, time: "сейчас" });
  audit("Формирование счёта в 1С", process.type, process.id, "", process.integration.invoiceNumber);
  saveState();
  renderAll();
  openProcessModal(id, "data");
  toast("Тестовый счёт сформирован в 1С", "ok");
}

function mock1CConfirmPayment(id) {
  const process = processById(id);
  if (!process || !canAccessProcess(process) || !currentPolicy().canConfirm1C || process.type !== "orders") return toast("Подтверждать оплату может только администратор или бухгалтерия.", "warn");
  if (!process.checks.invoice) return toast("Сначала сформируйте счёт в 1С.", "warn");
  const previousStatus = process.integration.paymentStatus || "Ожидается";
  process.checks.payment = true;
  process.integration = {
    ...process.integration,
    paymentStatus: "Оплата подтверждена",
    paymentDate: todayISO(),
    paidAmount: process.amount,
    partialPayment: false,
  };
  process.details ||= defaultProcessDetails("orders", process);
  process.details.paidVolume = Number(String(process.volume || "").replace(/[^\d]/g, "")) || process.details.paidVolume || 0;
  process.stage = "Оплата подтверждена";
  process.history.push("Mock 1С подтвердил оплату. Переход к выдаче теперь разрешён.");
  process.comments.unshift({ author: "Интеграция 1С", text: "Оплата подтверждена по данным 1С.", time: "сейчас" });
  audit("Подтверждение оплаты из 1С", process.type, process.id, previousStatus, process.integration.paymentStatus);
  notify(state.users.find((user) => user.name === process.owner)?.id || "", "Оплата подтверждена", `${process.id}: можно готовить выдачу`, "ok", process.id);
  saveState();
  renderAll();
  openProcessModal(id, "data");
  toast("Оплата подтверждена из mock 1С", "ok");
}

function simulate1CSync(id) {
  const process = processById(id);
  if (!process?.checks.invoice) return mock1CCreateInvoice(id);
  return mock1CConfirmPayment(id);
}

function addDocument(id) {
  const process = processById(id);
  if (!process || !canAccessProcess(process) || !currentPolicy().canEditProcesses) return toast("Добавление документов недоступно.", "warn");
  const name = $("#docName")?.value.trim();
  if (!name) return toast("Введите название документа.", "warn");
  const document = {
    id: uid("doc"),
    type: $("#docType").value,
    name,
    status: "Прикреплен",
    uploadedBy: currentUser().name,
    uploadedAt: new Date().toISOString(),
    clientId: process.clientId,
    processId: process.id,
  };
  process.documents.unshift(document);
  if (document.type === "Платежное поручение") process.checks.paymentOrder = Boolean(process.details?.paymentOrderNumber && process.details?.paymentDate);
  if (document.type === "Акт сверки") process.checks.reconciliation = true;
  if (document.type === "Письмо клиента") process.checks.clientLetter = true;
  if (document.type === "Подтверждение подачи заявки") process.checks.submitted = Boolean(process.details?.bidSubmittedAt);
  if (document.type === "Проект договора" && process.type === "contracts") process.checks.project = true;
  if (document.type === "Договор" && process.type === "contracts") process.checks.signed = true;
  if (document.type === "Договор" && process.type === "tenders") process.checks.contract = Boolean(process.details?.signedContractNumber);
  if (["Акт", "Накладная"].includes(document.type) && process.type === "orders") process.checks.docs = true;
  if (document.type === "ЭСФ" && process.type === "orders") {
    process.checks.esf = true;
    process.details.esfStatus = "Оформлена";
  }
  process.history.push(`Добавлен документ: ${name}`);
  audit("Загрузка документа", "document", document.id, "", { processId: process.id, type: document.type, name });
  saveState();
  renderAll();
  openProcessModal(id, "docs");
}

function addTask(id) {
  const process = processById(id);
  if (!process || !canAccessProcess(process) || !currentPolicy().canEditProcesses) return toast("Добавление задач недоступно.", "warn");
  const title = $("#taskTitle")?.value.trim();
  if (!title) return toast("Введите название задачи.", "warn");
  const task = {
    id: uid("task"),
    title,
    owner: $("#taskOwner")?.value.trim() || process.owner,
    due: $("#taskDue")?.value.trim() || "Сегодня",
    priority: process.priority,
    status: "Новая",
    createdBy: currentUser().name,
    createdAt: new Date().toISOString(),
    result: "",
    done: false,
  };
  process.tasks.unshift(task);
  process.history.push(`Создана задача: ${title}`);
  audit("Создание задачи", "task", task.id, "", { processId: process.id, owner: task.owner, due: task.due });
  notify(state.users.find((user) => user.name === task.owner)?.id || "", "Новая задача", `${process.id}: ${title}`, process.dueState, process.id);
  saveState();
  renderAll();
  openProcessModal(id, "tasks");
}

function addComment(id) {
  const process = processById(id);
  if (!process || !canAccessProcess(process)) return toast("У вас нет доступа к этой карточке.", "warn");
  const text = $("#commentText")?.value.trim();
  if (!text) return toast("Введите комментарий.", "warn");
  process.comments.unshift({ author: currentUser().name, text, time: "сейчас" });
  process.history.push("Добавлен комментарий");
  audit("Добавление комментария", process.type, process.id, "", text);
  saveState();
  renderAll();
  openProcessModal(id, "comments");
}

function sendAppealReply(id) {
  const process = processById(id);
  if (!process || process.type !== "appeals" || !canAccessProcess(process) || !currentPolicy().canEditProcesses) return toast("Ответ недоступен для вашей роли.", "warn");
  const text = $("#appealReplyText")?.value.trim();
  if (!text) return toast("Введите текст ответа клиенту.", "warn");
  const channel = crmChannelInfo(process.details?.source || process.supply);
  process.details ||= defaultProcessDetails("appeals", process);
  process.details.firstResponseAt ||= new Date().toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit" });
  process.details.firstResponseAtISO ||= new Date().toISOString();
  process.details.lastResponse = text;
  process.details.lastResponseAt = new Date().toISOString();
  process.comments.unshift({ author: currentUser().name, text: `[${channel.label}] ${text}`, time: "сейчас" });
  if (process.stage === "Новое обращение") process.stage = "Требуется классификация";
  process.checks.firstResponse = true;
  const responseTask = process.tasks.find((task) => task.automationKey === "first-response" && !task.done);
  if (responseTask) {
    responseTask.done = true;
    responseTask.status = "Выполнена";
    responseTask.closedAt = new Date().toISOString();
  }
  appealTask(process, "Классифицировать обращение", process.owner, crmSlaSettings().classificationMinutes, "classification");
  refreshAppealSla(process);
  process.history.push(`Ответ клиенту отправлен через ${channel.label}.`);
  audit("Зафиксирован первый ответ", process.type, process.id, "", { channel: channel.label, text });
  saveState();
  renderAll();
  openProcessModal(id, "data");
  toast(`Ответ отправлен через ${channel.label}`, "ok");
}

function appealTask(process, title, owner = process.owner, dueMinutes = 30, automationKey = "") {
  if (automationKey && process.tasks.some((task) => task.automationKey === automationKey && !task.done)) return;
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
    createdBy: currentUser().name,
    createdAt: new Date().toISOString(),
    result: "",
    done: false,
    appealId: process.id,
    clientId: process.clientId,
    linkedProcessId: process.linkedProcessIds?.[0] || "",
  };
  process.tasks.unshift(task);
  audit("Создана задача из обращения", "task", task.id, "", { appealId: process.id, owner, title });
  notify(state.users.find((user) => user.name === owner)?.id || "", "Новая задача по обращению", `${process.id}: ${title}`, process.dueState, process.id);
  return task;
}

function classifyAppeal(id) {
  const process = processById(id);
  if (!process || process.type !== "appeals" || !canAccessProcess(process) || !currentPolicy().canEditProcesses) return toast("Классификация недоступна.", "warn");
  const topic = $("#appealClassification")?.value || process.details?.topic || "Другое";
  const result = $("#appealResult")?.value.trim() || "";
  const problemDescription = $("#appealProblemDescription")?.value.trim() || process.details?.problemDescription || "";
  if (topic === "Жалоба / проблема" && !problemDescription) return toast("Опишите жалобу или проблему клиента.", "warn");
  process.details.topic = topic;
  process.details.result = result;
  process.details.problemDescription = problemDescription;
  process.details.classifiedAt = new Date().toISOString();
  process.checks.classified = true;
  process.stage = "В работе";
  process.tasks.filter((task) => task.automationKey === "classification" && !task.done).forEach((task) => {
    task.done = true;
    task.status = "Выполнена";
    task.closedAt = new Date().toISOString();
  });
  const targetType = APPEAL_PROCESS_BY_CLASSIFICATION[topic];
  process.details.nextStep = targetType ? `Создать ${processName(targetType).toLowerCase()}` : topic === "Консультация" ? "Закрыть консультацией" : topic === "Жалоба / проблема" ? "Контроль Дианы" : "Создать задачу";

  if (topic === "Жалоба / проблема") {
    process.priority = "Критическая";
    process.owner = process.owner || currentUser().name;
    appealTask(process, "Разобрать жалобу клиента и зафиксировать результат", "Диана", 30, "complaint-diana");
    notify("diana", "Новая жалоба клиента", `${process.id}: ${problemDescription}`, "danger", process.id);
  } else if (topic === "Другое") {
    appealTask(process, APPEAL_TASK_BY_CLASSIFICATION.Другое, "Диана", 30, "other-diana");
  } else if (APPEAL_TASK_BY_CLASSIFICATION[topic]) {
    const owner = topic === "Госзакупки" ? "Ольга" : process.owner;
    appealTask(process, APPEAL_TASK_BY_CLASSIFICATION[topic], owner, 30, `classification-${topic}`);
  }

  process.history.push(`Обращение классифицировано: ${topic}.`);
  audit("Выполнена классификация", process.type, process.id, "", { topic, nextStep: process.details.nextStep });
  refreshAppealSla(process);
  saveState();
  renderAll();
  openProcessModal(id, "data");
  toast(`Классификация сохранена: ${topic}`, "ok");
}

function finishMockCall(id) {
  const process = processById(id);
  if (!process || process.type !== "appeals" || process.details?.source !== "Телефония") return;
  process.details.communicationStatus = "Завершён";
  process.details.callDurationSeconds = process.details.callDurationSeconds || 186;
  process.details.callRecordingUrl ||= `mock://recordings/${process.id}.mp3`;
  process.details.firstResponseAt ||= new Date().toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit" });
  process.details.firstResponseAtISO ||= new Date().toISOString();
  process.checks.firstResponse = true;
  const responseTask = process.tasks.find((task) => task.automationKey === "first-response" && !task.done);
  if (responseTask) {
    responseTask.done = true;
    responseTask.status = "Выполнена";
    responseTask.closedAt = new Date().toISOString();
  }
  appealTask(process, "Классифицировать завершённый звонок", process.owner, crmSlaSettings().classificationMinutes, "classification");
  process.stage = "Требуется классификация";
  process.history.push("Входящий звонок завершён. Требуется классификация.");
  audit("Завершён звонок", process.type, process.id, "Входящий", "Требуется классификация");
  refreshAppealSla(process);
  saveState();
  renderAll();
  openProcessModal(id, "data");
  toast("Звонок завершён — классифицируйте обращение", "ok");
}

function completeMissedCallback(id) {
  const process = processById(id);
  if (!process || process.type !== "appeals" || !process.details?.missedCall) return;
  const callbackAt = new Date();
  process.details.callbackCompletedAt = callbackAt.toISOString();
  process.details.communicationStatus = "Перезвон выполнен";
  process.details.firstResponseAt ||= callbackAt.toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit" });
  process.details.firstResponseAtISO ||= callbackAt.toISOString();
  process.checks.callback = true;
  process.checks.firstResponse = true;
  process.stage = "Требуется классификация";
  const callbackTask = process.tasks.find((task) => task.automationKey === "missed-call-callback" && !task.done);
  if (callbackTask) {
    callbackTask.done = true;
    callbackTask.status = "Выполнена";
    callbackTask.closedAt = new Date().toISOString();
  }
  process.history.push("Менеджер перезвонил клиенту.");
  audit("Выполнен перезвон по пропущенному звонку", process.type, process.id, "", process.owner);
  refreshAppealSla(process);
  saveState();
  renderAll();
  openProcessModal(id, "data");
  toast("Перезвон зафиксирован", "ok");
}

function closeConsultation(id) {
  const process = processById(id);
  if (!process || process.type !== "appeals" || !currentPolicy().canEditProcesses) return;
  const result = $("#appealResult")?.value.trim() || process.details?.result?.trim();
  if (!process.checks?.classified || process.details?.topic !== "Консультация") return toast("Сначала классифицируйте обращение как консультацию.", "warn");
  if (!result) return toast("Укажите результат консультации.", "warn");
  process.details.result = result;
  process.details.resolvedAt = new Date().toISOString();
  process.checks.result = true;
  process.stage = "Решено";
  process.dueState = "ok";
  process.history.push(`Решено консультацией: ${result}`);
  audit("Обращение закрыто консультацией", process.type, process.id, "В работе", result);
  saveState();
  renderAll();
  openProcessModal(id, "data");
  toast("Обращение решено консультацией", "ok");
}

function transferAppealToDiana(id) {
  const process = processById(id);
  if (!process || process.type !== "appeals" || !currentPolicy().canEditProcesses) return;
  const previousOwner = process.owner;
  appealTask(process, "Проконтролировать входящее обращение", "Диана", 30, "manual-diana-control");
  process.priority = process.priority === "Обычная" ? "Высокая" : process.priority;
  process.history.push(`Обращение передано на контроль Диане пользователем ${currentUser().name}.`);
  audit("Обращение передано Диане", process.type, process.id, previousOwner, "Диана");
  notify("diana", "Обращение требует контроля", `${process.id}: ${clientById(process.clientId).name}`, "warn", process.id);
  refreshAppealSla(process);
  saveState();
  renderAll();
  openProcessModal(id, "tasks");
  toast("Диана получила задачу на контроль", "ok");
}

function createAppealActionTask(id) {
  const process = processById(id);
  if (!process || process.type !== "appeals" || !currentPolicy().canEditProcesses) return;
  const title = APPEAL_TASK_BY_CLASSIFICATION[process.details?.topic] || "Уточнить обращение и выполнить следующее действие";
  const owner = process.details?.topic === "Госзакупки" ? "Ольга" : process.owner;
  appealTask(process, title, owner, 30, `manual-${process.details?.topic || "appeal"}`);
  saveState();
  renderAll();
  openProcessModal(id, "tasks");
  toast("Задача создана", "ok");
}

function toggleTask(processId, taskId, done) {
  const process = processById(processId);
  if (!process || !canAccessProcess(process) || !currentPolicy().canEditProcesses) return toast("Изменение задач недоступно.", "warn");
  const task = process?.tasks.find((item) => item.id === taskId);
  if (!task) return;
  task.done = done;
  task.status = done ? "Выполнена" : "В работе";
  task.closedAt = done ? new Date().toISOString() : "";
  process.history.push(done ? `Задача закрыта: ${task.title}` : `Задача возвращена в работу: ${task.title}`);
  audit(done ? "Закрытие задачи" : "Возврат задачи в работу", "task", task.id, !done, done);
  saveState();
  renderAll();
  openProcessModal(processId, "tasks");
}

function reassignTask(processId, taskId, owner) {
  const process = processById(processId);
  if (!process || !canAccessProcess(process) || !currentPolicy().canReassign) return toast("Переназначение задач недоступно.", "warn");
  const task = process.tasks.find((item) => item.id === taskId);
  if (!task || !owner) return;
  const previousOwner = task.owner;
  task.owner = owner;
  task.status = task.done ? "Выполнена" : "В работе";
  process.history.push(`Задача «${task.title}» переназначена: ${previousOwner} → ${owner}`);
  audit("Смена исполнителя задачи", "task", task.id, previousOwner, owner);
  notify(state.users.find((user) => user.name === owner)?.id || "", "Вам назначена задача", `${process.id}: ${task.title}`, process.dueState, process.id);
  saveState();
  renderAll();
  openProcessModal(processId, "tasks");
  toast(`Задача передана: ${owner}`, "ok");
}

function ensureUnknownClient(phone = "", email = "") {
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

function openOmnichannelCreateModal(defaultKind = "whatsapp") {
  if (!currentPolicy().canCreate || !allowedCreateTypes().includes("appeals")) return toast("Создание входящих обращений недоступно.", "warn");
  const clients = state.clients.filter((client) => client.id !== "cli-unidentified");
  const modal = $("#requestModal");
  modal.innerHTML = `
    <article class="modal is-wide" role="dialog" aria-modal="true" aria-labelledby="omniCreateTitle">
      <header class="modal-header">
        <div><span class="eyebrow">Mock-омниканальная линия</span><h2 id="omniCreateTitle">Новое входящее обращение</h2></div>
        <button class="icon-button" data-close-modal title="Закрыть" aria-label="Закрыть"><span data-lucide="x"></span></button>
      </header>
      <div class="omni-kind-grid">
        ${[
          ["incoming-call", "phone-incoming", "Входящий звонок"],
          ["completed-call", "phone-off", "Завершённый звонок"],
          ["missed-call", "phone-missed", "Пропущенный звонок"],
          ["whatsapp", "message-circle", "WhatsApp"],
          ["email", "mail", "Email"],
          ["manual", "square-pen", "Ручное обращение"],
        ].map(([kind, icon, label]) => `<button class="omni-kind ${kind === defaultKind ? "is-selected" : ""}" data-omni-kind="${kind}"><span data-lucide="${icon}"></span><b>${label}</b></button>`).join("")}
      </div>
      <input id="omniKind" type="hidden" value="${defaultKind}" />
      <div class="detail-grid">
        <label>Найденный клиент
          <select id="omniClient"><option value="">Определить по контактам / не найден</option>${clients.map((client) => `<option value="${client.id}">${client.name} · БИН ${client.bin}</option>`).join("")}<option value="new">+ Создать нового клиента</option></select>
        </label>
        <label>Контактное лицо<input id="omniContactName" placeholder="Имя клиента" /></label>
        <label>Телефон<input id="omniPhone" placeholder="+7 700 000 00 00" /></label>
        <label>Email<input id="omniEmail" type="email" placeholder="client@company.kz" /></label>
        <label>БИН<input id="omniBin" inputmode="numeric" placeholder="Поиск существующего клиента" /></label>
        <label>Компания / название<input id="omniCompanyName" placeholder="Поиск по названию" /></label>
        <label class="field-wide">Тема<input id="omniSubject" placeholder="Краткая тема обращения" /></label>
        <label class="field-wide">Сообщение / результат разговора<textarea id="omniMessage" placeholder="Например: Нужен счёт на 3000 литров АИ-92"></textarea></label>
        <label>Автораспределение<input value="Повторный клиент → прежний активный менеджер, иначе минимальная нагрузка" readonly /></label>
        <label>Ручной канал
          <select id="omniManualSource"><option>Офис</option><option>Сайт</option><option>Руководитель</option><option>Другое</option></select>
        </label>
        <label>Срочность<select id="omniPriority"><option>Обычная</option><option>Высокая</option><option>Критическая</option></select></label>
      </div>
      <section class="route-panel">
        <div><span class="eyebrow">Поиск и защита от дублей</span><strong>Телефон, email, БИН, название и контактное лицо</strong></div>
        <p id="omniMatchHint">Если найден существующий клиент, система проверит последнего ответственного менеджера. Если он активен, обращение вернётся к нему, иначе уйдёт свободному менеджеру с меньшей нагрузкой.</p>
      </section>
      <footer class="modal-footer">
        <button class="ghost-button" data-close-modal>Отмена</button>
        <button class="primary-button" data-create-inbound-appeal><span data-lucide="inbox"></span><span>Создать обращение</span></button>
      </footer>
    </article>
  `;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  iconRefresh();
}

function updateOmniClientMatch() {
  if (!$("#omniMatchHint")) return;
  const matches = findClientsByContact({
    phone: $("#omniPhone")?.value || "",
    email: $("#omniEmail")?.value || "",
    bin: $("#omniBin")?.value || "",
    name: $("#omniCompanyName")?.value || "",
    contact: $("#omniContactName")?.value || "",
  });
  if (matches.length === 1) {
    $("#omniClient").value = matches[0].id;
    const previousOwner = lastResponsibleServiceManager(matches[0].id);
    const ownerHint = previousOwner || matches[0].responsible || "не закреплён";
    $("#omniMatchHint").innerHTML = `<b>Найден клиент:</b> ${matches[0].name} · БИН ${matches[0].bin} · ответственный ${ownerHint}${SERVICE_MANAGER_NAMES.includes(ownerHint) ? ` · статус ${managerWorkStatus(ownerHint)}` : ""}`;
  } else if (matches.length > 1) {
    $("#omniMatchHint").innerHTML = `<b>Найдено несколько вариантов:</b> ${matches.map((client) => client.name).join(", ")}. Выберите клиента в списке.`;
  } else {
    $("#omniMatchHint").textContent = "Клиент не найден — обращение будет создано как неразобранное. После создания можно привязать существующего или завести нового клиента.";
  }
}

function createInboundAppeal() {
  if (!currentPolicy().canCreate || !allowedCreateTypes().includes("appeals")) return toast("Создание обращения недоступно.", "warn");
  const kind = $("#omniKind")?.value || "manual";
  const phone = $("#omniPhone")?.value.trim() || "";
  const email = $("#omniEmail")?.value.trim() || "";
  const bin = $("#omniBin")?.value.trim() || "";
  const companyName = $("#omniCompanyName")?.value.trim() || "";
  const contactName = $("#omniContactName")?.value.trim() || "";
  const message = $("#omniMessage")?.value.trim() || "";
  const subject = $("#omniSubject")?.value.trim() || "";
  const selectedClientValue = $("#omniClient")?.value || "";
  const selectedClient = state.clients.find((client) => client.id === selectedClientValue);
  const matches = selectedClient ? [selectedClient] : findClientsByContact({ phone, email, bin, name: companyName, contact: contactName });
  let client;
  if (selectedClientValue === "new") {
    if (!companyName && !contactName) return toast("Укажите название компании или контактное лицо для нового клиента.", "warn");
    const duplicate = bin && state.clients.find((item) => item.bin?.replace(/\D/g, "") === bin.replace(/\D/g, ""));
    if (duplicate) return toast(`Клиент с таким БИН уже существует: ${duplicate.name}`, "warn");
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
    audit("Создание клиента из входящего обращения", "client", client.id, "", { name: client.name, bin: client.bin });
  } else {
    client = matches.length === 1 ? matches[0] : ensureUnknownClient(phone, email);
  }
  const assignment = selectServiceManagerForAppeal(client);
  let owner = assignment.owner || currentUser().name;
  if (client.id !== "cli-unidentified" && !SERVICE_MANAGER_NAMES.includes(client.responsible)) client.responsible = owner;

  const source = kind.includes("call") ? "Телефония" : kind === "whatsapp" ? "WhatsApp" : kind === "email" ? "Email" : $("#omniManualSource")?.value || "Офис";
  const missedCall = kind === "missed-call";
  const completedCall = kind === "completed-call";
  const incomingCall = kind === "incoming-call";
  const communicationStatus = missedCall ? "Пропущенный" : completedCall ? "Завершён" : incomingCall ? "Входящий" : "Получено";
  const inferredTopic = inferAppealClassification(`${subject} ${message}`);
  const fuelText = `${subject} ${message}`.toLowerCase();
  const inferredFuel = fuelText.includes("аи-95") ? "АИ-95" : fuelText.includes("аи-98") ? "АИ-98" : /дизел|дт/.test(fuelText) ? "ДТ лето" : /газ/.test(fuelText) ? "Автогаз" : "АИ-92";
  const volumeMatch = `${subject} ${message}`.match(/(\d[\d\s]*)\s*(?:л|литр)/i);
  const inferredVolume = volumeMatch ? `${volumeMatch[1].replace(/\s/g, "")} л` : subject || `${source}: входящее обращение`;
  const companyKey = companyByFuel(inferredFuel);
  state.counters.APP = (state.counters.APP || 0) + 1;
  const id = `APP-${String(state.counters.APP).padStart(4, "0")}`;
  const priority = missedCall ? "Высокая" : $("#omniPriority")?.value || "Обычная";
  const repeatAppeal = client.id !== "cli-unidentified" && Boolean(assignment.previousOwner || state.processes.some((item) => item.type === "appeals" && item.clientId === client.id));
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
    integration: { source: "Омниканал mock", importedAt: new Date().toISOString() },
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
      firstResponseAt: completedCall ? new Date().toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit" }) : "",
      firstResponseAtISO: completedCall ? new Date().toISOString() : "",
      matchedClientIds: matches.map((item) => item.id),
      multipleMatches: matches.length > 1,
      repeatAppeal,
      previousOwner: assignment.previousOwner || "",
      assignmentReason: assignment.reason,
    },
    checks: defaultChecks("appeals"),
    documents: [],
    tasks: [],
    comments: [{ author: source, text: message || subject || communicationStatus, time: "сейчас" }],
    history: [`Создано входящее обращение из канала ${source}.`, `Назначено: ${owner}. Основание: ${assignment.reason}.`],
  };
  if (repeatAppeal) process.history.push(`Повторное обращение клиента. Предыдущий ответственный: ${assignment.previousOwner || client.responsible || "не определён"}.`);
  if (completedCall) process.checks.firstResponse = true;
  if (completedCall) process.history.push("Звонок завершён — требуется классификация.");
  state.processes.unshift(process);
  state.selectedClientId = client.id;
  if (missedCall) {
    appealTask(process, "Перезвонить клиенту", owner, crmSlaSettings().missedCallMinutes, "missed-call-callback");
    process.history.push("Автоматически создана задача «Перезвонить клиенту».");
  } else if (completedCall) {
    appealTask(process, "Классифицировать завершённый звонок", owner, crmSlaSettings().classificationMinutes, "classification");
  } else {
    appealTask(process, "Дать первый ответ и классифицировать обращение", owner, crmSlaSettings().firstResponseMinutes, "first-response");
  }
  refreshAppealSla(process);
  audit(missedCall ? "Пропущен звонок" : "Создано входящее обращение", process.type, id, "", { source, owner, clientId: client.id, communicationStatus, assignmentReason: assignment.reason, repeatAppeal });
  notify(state.users.find((user) => user.name === owner)?.id || "", "Новое входящее обращение", `${id}: ${source} · ${client.name}`, process.dueState, id);
  if (missedCall) notify("diana", "Пропущенный звонок", `${id}: требуется перезвон`, "warn", id);
  saveState();
  closeModal();
  if (["assignedManager", "seniorManager"].includes(currentPolicy().roleType) && activeView === "dashboard") renderAll();
  else switchView("appeals");
  openProcessModal(id, "data");
  toast(`Создано обращение ${id}`, "ok");
}

function openCreateModal(defaultType = activeView) {
  if (!currentPolicy().canCreate) return toast("Создание карточек недоступно для вашей роли.", "warn");
  const allowedTypes = allowedCreateTypes();
  const type = allowedTypes.includes(defaultType) ? defaultType : allowedTypes[0] || "appeals";
  const clients = accessibleClients();
  const initialClient = clients[0] || state.clients[0];
  const defaultOwner = currentPolicy().canReassign ? defaultOwnerFor(type, initialClient?.type) : currentUser().name;
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
          <select id="createType">${Object.entries(PROCESS_META).filter(([key]) => allowedTypes.includes(key)).map(([key, meta]) => `<option value="${key}" ${key === type ? "selected" : ""}>${meta.label}</option>`).join("")}</select>
        </label>
        <label>Клиент
          <select id="createClient">${clients.map((client) => `<option value="${client.id}">${client.name}</option>`).join("")}<option value="new">+ Новый клиент</option></select>
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
          <select id="createOwner" ${currentPolicy().canReassign ? "" : "disabled"}>${staffOptions(defaultOwner)}</select>
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
  if (!currentPolicy().canCreate) return toast("Создание карточек недоступно для вашей роли.", "warn");
  const type = $("#createType").value;
  if (!allowedCreateTypes().includes(type)) return toast("Эта роль не может создавать выбранный процесс.", "warn");
  const meta = metaFor(type);
  const fuel = $("#createFuel").value;
  const companyKey = companyByFuel(fuel);
  const clientType = $("#createClientType").value;
  const owner = currentPolicy().canReassign
    ? clientType === "Государственная организация"
      ? "Ольга"
      : $("#createOwner").value || defaultOwnerFor(type, clientType)
    : currentUser().name;
  let clientId = $("#createClient").value;
  if (clientId === "new") {
    const name = $("#createClientName").value.trim();
    if (!name) return toast("Введите название нового клиента.", "warn");
    const bin = $("#createClientBin").value.trim();
    const duplicate = bin && state.clients.find((client) => client.bin.replace(/\D/g, "") === bin.replace(/\D/g, ""));
    if (duplicate) {
      $("#createClient").value = duplicate.id;
      state.selectedClientId = duplicate.id;
      return toast(`Клиент с этим БИН уже существует: ${duplicate.name}. Выберите его в списке.`, "warn");
    }
    const client = {
      id: uid("cli"),
      name,
      bin: bin || "Не указан",
      type: clientType,
      contacts: "Не заполнено",
      legalAddress: "",
      bankDetails: "",
      phone: "",
      email: "",
      status: "Новый",
      responsible: owner,
      supplyMethods: [$("#createSupply").value],
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
    audit("Создание клиента", "client", client.id, "", { name: client.name, bin: client.bin });
  }
  if (!clientId || !clientById(clientId)) return toast("Выберите клиента.", "warn");
  if (type === "orders") {
    const contractProbe = { clientId, companyKey, product: productByFuel(fuel) };
    if (!hasActiveContract(contractProbe)) return toast("Нельзя создать заказ: у клиента нет действующего договора по выбранной компании и продукту.", "warn");
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
    details: defaultProcessDetails(type, { volume: $("#createVolume").value.trim(), supply: $("#createSupply").value }),
    checks: defaultChecks(type),
    documents: [],
    tasks: [{ id: uid("task"), title: `Первичная проверка: ${meta.label.toLowerCase()}`, owner, due: $("#createDue").value.trim() || "Сегодня", done: false }],
    comments: [{ author: "Вы", text: "Карточка создана вручную.", time: "сейчас" }],
    history: [`Карточка создана. Вид топлива: ${fuel}. Маршрут: ${companyLabel(companyKey)}, директор: ${COMPANY_DIRECTOR[companyKey]}.`],
  };
  state.processes.unshift(process);
  state.selectedClientId = clientId;
  audit("Создание карточки", type, id, "", { stage: process.stage, owner, companyKey });
  notify(state.users.find((user) => user.name === owner)?.id || "", "Новая задача", `${id}: ${process.tasks[0].title}`, process.dueState, id);
  saveState();
  closeModal();
  switchView(type);
  openProcessModal(id, "data");
  toast(`Создана карточка ${id}`, "ok");
}

function importDemoTenders() {
  if (!currentPolicy().canCreate || !allowedCreateTypes().includes("tenders")) return toast("Импорт тендеров недоступен для вашей роли.", "warn");
  const client = state.clients.find((item) => item.type === "Государственная организация") || state.clients[0];
  state.counters.TEN = (state.counters.TEN || 0) + 1;
  const id = `TEN-${String(state.counters.TEN).padStart(4, "0")}`;
  const deadline = new Date(Date.now() + 26 * 60 * 60 * 1000);
  const deadlineValue = new Date(deadline.getTime() - deadline.getTimezoneOffset() * 60000).toISOString().slice(0, 16);
  const process = {
    id,
    type: "tenders",
    clientId: client.id,
    clientType: client.type,
    companyKey: "trade",
    direction: "trade",
    product: "ГСМ",
    fuel: "АИ-92",
    supply: "Госзакупка",
    stage: "Новый тендер",
    owner: "Ольга",
    due: "До дедлайна 26 ч.",
    dueState: "warn",
    priority: "Высокая",
    volume: "60 000 л",
    amount: "13 200 000 ₸",
    approvalState: "none",
    organizationLocked: false,
    overpayment: "unknown",
    linkedProcessIds: [],
    integration: { source: "Tender JSON mock", importedAt: new Date().toISOString() },
    details: {
      ...defaultProcessDetails("tenders"),
      platform: "Госзакуп",
      url: "https://goszakup.gov.kz/mock",
      announcementNumber: `MOCK-${Date.now().toString().slice(-6)}`,
      lotNumber: "1",
      customer: client.name,
      deadline: deadlineValue,
    },
    checks: defaultChecks("tenders"),
    documents: [],
    tasks: [{ id: uid("task"), title: "Проверить импортированный тендер", owner: "Ольга", due: "Сегодня", priority: "Высокая", status: "Новая", createdBy: "Импорт JSON", createdAt: new Date().toISOString(), result: "", done: false }],
    comments: [{ author: "Импорт JSON", text: "Карточка загружена через демонстрационный API-коннектор.", time: "сейчас" }],
    history: ["Тендер импортирован из mock JSON/API."],
  };
  state.processes.unshift(process);
  audit("Импорт тендера", "tenders", id, "", { source: "mock JSON/API", announcementNumber: process.details.announcementNumber });
  notify("olga", "Импортирован новый тендер", `${id}: проверить карточку до дедлайна`, "warn", id);
  saveState();
  renderAll();
  openProcessModal(id, "data");
  toast(`Импортирован тендер ${id}`, "ok");
}

function defaultChecks(type) {
  return {
    appeals: { firstResponse: false, classified: false, linked: false, clientAnswer: false, callback: false, result: false },
    contracts: { requisites: false, project: false, signed: false, expiryTask: false },
    orders: { contract: false, invoice: false, payment: false, power: false, docs: false, esf: false },
    extensions: { clientLetter: false, contractData: false, director: false, clientAnswer: false, extensionDone: false, cash: true },
    refunds: { annulment: false, accounting: false, reconciliation: false, clientLetter: false, director: false, paymentOrder: false },
    tenders: { discussion: false, director: false, bidReady: false, submitted: false, protocol: false, contract: false },
  }[type] || {};
}

function defaultProcessDetails(type, process = {}) {
  if (type === "appeals") {
    return {
      communicationId: `COM-${Date.now().toString().slice(-8)}`,
      source: process.supply || "WhatsApp",
      communicationStatus: "Получено",
      callDurationSeconds: 0,
      callRecordingUrl: "",
      contactName: "",
      phone: "",
      email: "",
      subject: "",
      topic: "Другое",
      closeReason: "",
      result: "",
      problemDescription: "",
      customerMessage: "",
      firstResponseAt: "",
      firstResponseAtISO: "",
      classifiedAt: "",
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
  if (type === "contracts") return { contractNumber: "", contractDate: "", startDate: "", endDate: "", paymentTerms: "", pricing: "" };
  if (type === "orders") {
    const volume = Number(String(process.volume || "").replace(/[^\d]/g, "")) || 0;
    return { paidVolume: process.checks?.payment ? volume : 0, issuedVolume: 0, deliveryDate: "", esfStatus: process.checks?.esf ? "Оформлена" : "Ожидается" };
  }
  if (type === "extensions") return { extensionSubject: String(process.supply || "").toLowerCase().includes("карт") ? "Топливная карта" : "Талоны", purchasePrice: "", currentPrice: "", discount: "", recalculation: "", newExpiry: "", reason: "" };
  if (type === "refunds") return { refundReason: "", preliminaryAmount: "", overpaymentAmount: "", returnAmount: "", clientDebt: "", paymentOrderNumber: "", paymentDate: "" };
  if (type === "tenders") return { platform: "Госзакуп", url: "", announcementNumber: "", lotNumber: "", customer: "", deadline: "", bidSubmittedAt: "", result: "", signedContractNumber: "" };
  return {};
}

function applySessionState() {
  document.body.classList.toggle("session-locked", !currentUserId);
  if (currentUserId) {
    activateCurrentServiceManager(false);
    renderUserShell();
  }
  else {
    $("#loginForm")?.reset();
    $("#loginError").textContent = "";
    setTimeout(() => $("#loginUsername")?.focus(), 100);
  }
  iconRefresh();
}

async function hashPassword(password) {
  const bytes = new TextEncoder().encode(password);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");
}

async function authenticate(username, password) {
  const normalizedUsername = username.trim().toLowerCase();
  const passwordHash = await hashPassword(password);
  const user = state.users.find((account) => {
    const logins = [account.login, ...(account.loginAliases || [])].filter(Boolean).map((value) => value.trim().toLowerCase());
    return account.active !== false && logins.includes(normalizedUsername) && account.passwordHash === passwordHash;
  });
  return user?.id || "";
}

async function submitLogin() {
  const username = $("#loginUsername")?.value || "";
  const password = $("#loginPassword")?.value || "";
  const submitButton = $("#loginForm button[type='submit']");
  if (submitButton) submitButton.disabled = true;
  const userId = await authenticate(username, password);
  if (submitButton) submitButton.disabled = false;
  if (!userId) {
    $("#loginError").textContent = t("wrongCredentials");
    $("#loginPassword").value = "";
    $("#loginPassword").focus();
    return;
  }
  $("#loginError").textContent = "";
  loginAs(userId);
}

function loginAs(userId) {
  const user = state.users.find((item) => item.id === userId);
  if (!user || !ROLE_POLICIES[user.roleId]) return toast("Профиль ещё не настроен.", "warn");
  currentUserId = user.id;
  localStorage.setItem(SESSION_KEY, currentUserId);
  activeView = "dashboard";
  currentCompany = currentPolicy().companies.length === 1 ? currentPolicy().companies[0] : "all";
  slaOnly = false;
  activeStage = "";
  crmChannelFilter = "all";
  activateCurrentServiceManager(false, true);
  applySessionState();
  switchView("dashboard");
  audit("Вход пользователя", "user", user.id, "", { login: user.login });
  saveState();
  toast(`Вход выполнен: ${user.name}`, "ok");
  if (user.mustChangePassword) toast("Используется временный пароль. Его нужно сменить в профиле.", "warn");
}

function logout() {
  const user = currentUser();
  if (SERVICE_MANAGER_NAMES.includes(user.name) && managerWorkStatus(user.name) === "На работе / активен") {
    setServiceManagerStatus(user.name, "Не в сети", false);
  }
  audit("Выход пользователя", "user", currentUserId);
  saveState();
  currentUserId = "";
  localStorage.removeItem(SESSION_KEY);
  closeModal();
  applySessionState();
}

function togglePasswordVisibility() {
  const input = $("#loginPassword");
  const button = $("#passwordToggle");
  if (!input || !button) return;
  const show = input.type === "password";
  input.type = show ? "text" : "password";
  button.setAttribute("aria-label", show ? t("hidePassword") : t("showPassword"));
  button.setAttribute("title", show ? t("hidePassword") : t("showPassword"));
  button.innerHTML = `<span data-lucide="${show ? "eye-off" : "eye"}"></span>`;
  iconRefresh();
}

function openUserProfile() {
  const user = currentUser();
  const policy = currentPolicy();
  const companyAccess =
    policy.companies.length === 1
      ? `<strong>${companyLabel(policy.companies[0])}</strong><small>Данные второго юридического лица недоступны</small>`
      : `<strong>Обе компании</strong><small>GAZOIL TRADE и УГХ GAZOIL</small>`;
  const processAccess =
    policy.roleType === "companyDirector"
      ? `<strong>Процессы своей компании</strong><small>Продления, возвраты, тендеры и решения директора</small>`
      : policy.roleType === "founder"
        ? `<strong>Только просмотр аналитики</strong><small>Без изменения процессов, статусов и документов</small>`
        : `<strong>Ролевой рабочий контур</strong><small>Доступ определяется назначением и зоной ответственности</small>`;
  const modal = $("#requestModal");
  modal.innerHTML = `
    <article class="modal profile-modal" role="dialog" aria-modal="true" aria-labelledby="profileTitle">
      <header class="modal-header">
        <div>
          <span class="eyebrow">Текущий пользователь</span>
          <h2 id="profileTitle">${user.name}</h2>
        </div>
        <button class="icon-button" data-close-modal title="Закрыть" aria-label="Закрыть"><span data-lucide="x"></span></button>
      </header>
      <div class="profile-access-head">
        <span class="user-avatar">${user.name.slice(0, 1)}</span>
        <div>
          <strong>${user.role}</strong>
          <p>${user.email || "Рабочий аккаунт GAZOIL"}</p>
        </div>
      </div>
      <section class="access-list">
        <div><span data-lucide="building-2"></span><p>${companyAccess}</p></div>
        <div><span data-lucide="workflow"></span><p>${processAccess}</p></div>
        <div><span data-lucide="stamp"></span><p><strong>Решения и согласования</strong><small>${policy.canSubstituteDirectors ? "Контроль очереди и замещение директоров" : "Согласовать или вернуть на доработку"}</small></p></div>
        <div><span data-lucide="chart-no-axes-combined"></span><p><strong>Финансы и аналитика</strong><small>${policy.canSeeTeam ? "Планы, продажи, SLA и загрузка команды" : "План и продажи только своей компании"}</small></p></div>
      </section>
      <footer class="modal-footer">
        <button class="ghost-button" data-action="logout"><span data-lucide="log-out"></span><span>Выйти</span></button>
        <button class="ghost-button" data-action="change-password"><span data-lucide="key-round"></span><span>Сменить пароль</span></button>
        <button class="primary-button" data-close-modal>Продолжить работу</button>
      </footer>
    </article>
  `;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  iconRefresh();
}

function roleOptions(selected = "") {
  return Object.entries(ROLE_POLICIES)
    .map(([roleId, policy]) => `<option value="${roleId}" ${roleId === selected ? "selected" : ""}>${policy.label}</option>`)
    .join("");
}

function canTransferAppeal(process) {
  if (!process || process.type !== "appeals" || !canAccessProcess(process)) return false;
  return currentPolicy().canReassign || ["seniorManager", "commercialDirector"].includes(currentPolicy().roleType) || process.owner === currentUser().name;
}

function openCreateClientModal() {
  if (!currentPolicy().canCreate) return toast("Создание клиентов недоступно.", "warn");
  const modal = $("#requestModal");
  modal.innerHTML = `
    <article class="modal is-wide" role="dialog" aria-modal="true" aria-labelledby="newClientTitle">
      <header class="modal-header">
        <div><span class="eyebrow">Единая клиентская база</span><h2 id="newClientTitle">Новый клиент</h2></div>
        <button class="icon-button" data-close-modal title="Закрыть" aria-label="Закрыть"><span data-lucide="x"></span></button>
      </header>
      <div class="detail-grid">
        <label>Наименование<input id="clientName" /></label>
        <label>БИН / ИИН<input id="clientBin" inputmode="numeric" /></label>
        <label>Тип клиента<select id="clientType">${CRM_DICTIONARIES.clientTypes.map((type) => `<option>${type}</option>`).join("")}</select></label>
        <label>Статус<select id="clientStatus">${["Новый", "Активный", "Спящий", "Потерянный", "Проблемный"].map((status) => `<option>${status}</option>`).join("")}</select></label>
        <label class="field-wide">Юридический адрес<input id="clientAddress" /></label>
        <label class="field-wide">Банковские реквизиты<textarea id="clientBankDetails"></textarea></label>
        <label>Контактное лицо<input id="clientContact" /></label>
        <label>Телефон<input id="clientPhone" /></label>
        <label>Email<input id="clientEmail" type="email" /></label>
        <label>Ответственный<select id="clientResponsible">${staffOptions(currentPolicy().canReassign ? "Жанара" : currentUser().name)}</select></label>
        <label>Доверенное лицо<input id="clientPowerPerson" /></label>
        <label>Срок доверенности<input id="clientPowerUntil" type="date" /></label>
      </div>
      <div class="toggle-grid client-options">
        <label class="toggle-row"><input id="clientBuysGsm" type="checkbox" checked /><span>Покупает ГСМ</span></label>
        <label class="toggle-row"><input id="clientBuysGas" type="checkbox" /><span>Покупает газ</span></label>
        ${CRM_DICTIONARIES.supplyMethods.map((method) => `<label class="toggle-row"><input type="checkbox" data-client-supply="${method}" /><span>${method}</span></label>`).join("")}
      </div>
      <footer class="modal-footer">
        <button class="ghost-button" data-close-modal>Отмена</button>
        <button class="primary-button" data-save-client><span data-lucide="building-2"></span><span>Создать клиента</span></button>
      </footer>
    </article>
  `;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  iconRefresh();
}

function openAssignAppealModal(processId) {
  const process = processById(processId);
  if (!canTransferAppeal(process)) return toast("Распределение обращения недоступно.", "warn");
  const managers = state.users.filter((user) => ["SENIOR_MANAGER", "SERVICE_MANAGER"].includes(user.roleId) && user.active !== false);
  const loads = Object.fromEntries(SERVICE_MANAGER_NAMES.map((name) => [name, serviceManagerLoad(name)]));
  const modal = $("#requestModal");
  modal.innerHTML = `
    <article class="modal profile-modal" role="dialog" aria-modal="true" aria-labelledby="assignAppealTitle">
      <header class="modal-header">
        <div><span class="eyebrow">Распределение входящего обращения</span><h2 id="assignAppealTitle">${process.id} · ${clientById(process.clientId).name}</h2></div>
        <button class="icon-button" data-close-modal title="Закрыть" aria-label="Закрыть"><span data-lucide="x"></span></button>
      </header>
      <section class="assignment-preview">
        <span class="crm-channel-icon ${crmChannelInfo(process.details?.source || process.supply).tone}" data-lucide="${crmChannelInfo(process.details?.source || process.supply).icon}"></span>
        <div><strong>${process.details?.topic || "Обращение клиента"}</strong><p>${process.details?.customerMessage || process.comments?.[0]?.text || process.volume}</p></div>
      </section>
      <div class="detail-grid">
        <label>Ответственный
          <select id="assignAppealOwner">${managers.map((user) => {
            const load = loads[user.name];
            const hint = load ? `${load.status}, ${load.openAppeals.length} активных, ${load.overdueAppeals.length} просрочек` : user.role;
            return `<option value="${user.name}" ${user.name === process.owner ? "selected" : ""}>${user.name} — ${hint}</option>`;
          }).join("")}</select>
        </label>
        <label>Причина передачи
          <select id="assignAppealReason">
            <option value="">Выберите причину</option>
            ${SERVICE_TRANSFER_REASONS.map((reason) => `<option>${reason}</option>`).join("")}
          </select>
        </label>
        <label>Приоритет
          <select id="assignAppealPriority">${["Обычная", "Высокая", "Критическая"].map((priority) => `<option ${priority === process.priority ? "selected" : ""}>${priority}</option>`).join("")}</select>
        </label>
        <label>Срок первого действия<input id="assignAppealDue" value="${escapeAttr(process.due)}" /></label>
        <label class="field-wide">Комментарий к передаче<textarea id="assignAppealComment" placeholder="Коротко зафиксируйте контекст для нового менеджера"></textarea></label>
      </div>
      <footer class="modal-footer">
        <button class="ghost-button" data-close-modal>Отмена</button>
        <button class="primary-button" data-save-appeal-assignment="${process.id}"><span data-lucide="user-check"></span><span>Назначить</span></button>
      </footer>
    </article>
  `;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  iconRefresh();
}

function saveAppealAssignment(processId) {
  const process = processById(processId);
  if (!canTransferAppeal(process)) return toast("Распределение недоступно.", "warn");
  const previousOwner = process.owner;
  const nextOwner = $("#assignAppealOwner")?.value || process.owner;
  const reason = $("#assignAppealReason")?.value || "";
  const comment = $("#assignAppealComment")?.value.trim() || "";
  if (!reason) return toast("Укажите причину передачи обращения.", "warn");
  process.owner = nextOwner;
  process.priority = $("#assignAppealPriority")?.value || process.priority;
  process.due = $("#assignAppealDue")?.value.trim() || process.due;
  process.dueState = process.priority === "Критическая" ? "danger" : process.priority === "Высокая" ? "warn" : "new";
  if (process.stage === "Новое обращение") process.stage = "Требуется классификация";
  process.details ||= defaultProcessDetails("appeals", process);
  process.details.lastTransferReason = reason;
  process.details.lastTransferBy = currentUser().name;
  process.details.lastTransferAt = new Date().toISOString();
  process.tasks.filter((task) => !task.done && task.owner === previousOwner).forEach((task) => {
    task.owner = process.owner;
  });
  process.tasks.unshift({
    id: uid("task"),
    title: `Принять переданное обращение ${process.id}`,
    owner: process.owner,
    due: process.due,
    priority: process.priority,
    status: "Новая",
    createdBy: currentUser().name,
    createdAt: new Date().toISOString(),
    result: "",
    done: false,
  });
  if (comment) process.comments.unshift({ author: currentUser().name, text: `Передача: ${comment}`, time: "сейчас" });
  process.history.push(`Обращение передано: ${previousOwner} → ${process.owner}. Причина: ${reason}.`);
  audit("Передача обращения другому менеджеру", process.type, process.id, previousOwner, { owner: process.owner, reason, comment });
  notify(state.users.find((user) => user.name === process.owner)?.id || "", "Вам передано обращение", `${process.id}: ${clientById(process.clientId).name} · ${reason}`, process.dueState, process.id);
  saveState();
  closeModal();
  renderAll();
  toast(`Обращение назначено: ${process.owner}`, "ok");
}

function saveClient() {
  if (!currentPolicy().canCreate) return toast("Создание клиентов недоступно.", "warn");
  const name = $("#clientName")?.value.trim();
  const bin = $("#clientBin")?.value.trim();
  if (!name || !bin) return toast("Наименование и БИН / ИИН обязательны.", "warn");
  const duplicate = state.clients.find((client) => client.bin.replace(/\D/g, "") === bin.replace(/\D/g, ""));
  if (duplicate) {
    state.selectedClientId = duplicate.id;
    closeModal();
    switchView("clients");
    return toast(`Клиент с таким БИН уже существует: ${duplicate.name}`, "warn");
  }
  const supplyMethods = $$("[data-client-supply]:checked").map((checkbox) => checkbox.dataset.clientSupply);
  const client = {
    id: uid("cli"),
    name,
    bin,
    type: $("#clientType").value,
    status: $("#clientStatus").value,
    legalAddress: $("#clientAddress").value.trim(),
    bankDetails: $("#clientBankDetails").value.trim(),
    contacts: $("#clientContact").value.trim() || "Не заполнено",
    phone: $("#clientPhone").value.trim(),
    email: $("#clientEmail").value.trim(),
    responsible: $("#clientResponsible").value || currentUser().name,
    buysGsm: $("#clientBuysGsm").checked,
    buysGas: $("#clientBuysGas").checked,
    supplyMethods,
    products: [$("#clientBuysGsm").checked ? "ГСМ" : "", $("#clientBuysGas").checked ? "Газ" : "", ...supplyMethods].filter(Boolean).join(", "),
    debt: "0 ₸",
    powerPerson: $("#clientPowerPerson").value.trim(),
    powerUntil: $("#clientPowerUntil").value || "Нет",
    powerFile: "",
    history: [{ at: new Date().toISOString(), text: `Клиент создан пользователем ${currentUser().name}` }],
  };
  state.clients.unshift(client);
  state.selectedClientId = client.id;
  audit("Создание клиента", "client", client.id, "", { name: client.name, bin: client.bin, responsible: client.responsible });
  saveState();
  closeModal();
  switchView("clients");
  toast(`Клиент ${client.name} создан`, "ok");
}

function openCreateUserModal() {
  if (!currentPolicy().canManageUsers) return toast("Управление пользователями недоступно.", "warn");
  const modal = $("#requestModal");
  modal.innerHTML = `
    <article class="modal profile-modal" role="dialog" aria-modal="true" aria-labelledby="newUserTitle">
      <header class="modal-header">
        <div><span class="eyebrow">Администрирование</span><h2 id="newUserTitle">Новый пользователь</h2></div>
        <button class="icon-button" data-close-modal title="Закрыть" aria-label="Закрыть"><span data-lucide="x"></span></button>
      </header>
      <div class="detail-grid">
        <label>Имя сотрудника<input id="newUserName" placeholder="Имя и фамилия" /></label>
        <label>Логин<input id="newUserLogin" placeholder="Уникальный логин" /></label>
        <label>Email<input id="newUserEmail" type="email" placeholder="name@gazoil.kz" /></label>
        <label>Роль<select id="newUserRole">${roleOptions("SERVICE_MANAGER")}</select></label>
      </div>
      <section class="route-panel">
        <div><span class="eyebrow">Временный доступ</span><strong>Стартовый пароль: Aa123456</strong></div>
        <p>В состоянии приложения хранится только SHA-256 хэш. При первом входе пользователь получит требование сменить пароль.</p>
      </section>
      <footer class="modal-footer">
        <button class="ghost-button" data-close-modal>Отмена</button>
        <button class="primary-button" data-save-new-user><span data-lucide="user-plus"></span><span>Создать пользователя</span></button>
      </footer>
    </article>
  `;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  iconRefresh();
}

function openEditUserModal(userId) {
  if (!currentPolicy().canManageUsers) return toast("Управление пользователями недоступно.", "warn");
  const user = state.users.find((item) => item.id === userId && item.roleId);
  if (!user) return;
  const modal = $("#requestModal");
  modal.innerHTML = `
    <article class="modal profile-modal" role="dialog" aria-modal="true" aria-labelledby="editUserTitle">
      <header class="modal-header">
        <div><span class="eyebrow">Права доступа</span><h2 id="editUserTitle">${user.name}</h2></div>
        <button class="icon-button" data-close-modal title="Закрыть" aria-label="Закрыть"><span data-lucide="x"></span></button>
      </header>
      <div class="detail-grid">
        <label>Имя сотрудника<input id="editUserName" value="${escapeAttr(user.name)}" /></label>
        <label>Логин<input id="editUserLogin" value="${escapeAttr(user.login)}" /></label>
        <label>Email<input id="editUserEmail" type="email" value="${escapeAttr(user.email || "")}" /></label>
        <label>Роль<select id="editUserRole">${roleOptions(user.roleId)}</select></label>
      </div>
      <label class="toggle-row user-active-toggle">
        <input id="editUserActive" type="checkbox" ${user.active === false ? "" : "checked"} />
        <span>Аккаунт активен<small>Отключённый пользователь не сможет войти</small></span>
      </label>
      <footer class="modal-footer">
        <button class="ghost-button" data-reset-user-password="${user.id}"><span data-lucide="rotate-ccw-key"></span><span>Сбросить пароль</span></button>
        <button class="primary-button" data-save-user="${user.id}">Сохранить</button>
      </footer>
    </article>
  `;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  iconRefresh();
}

function saveNewUser() {
  if (!currentPolicy().canManageUsers) return toast("Управление пользователями недоступно.", "warn");
  const name = $("#newUserName")?.value.trim();
  const login = $("#newUserLogin")?.value.trim();
  const email = $("#newUserEmail")?.value.trim();
  const roleId = $("#newUserRole")?.value;
  if (!name || !login || !ROLE_POLICIES[roleId]) return toast("Заполните имя, логин и роль.", "warn");
  if (state.users.some((user) => user.login?.toLowerCase() === login.toLowerCase())) return toast("Такой логин уже существует.", "warn");
  const idBase = login.toLowerCase().replace(/[^a-zа-яё0-9]+/gi, "-").replace(/^-|-$/g, "") || "user";
  const user = {
    id: `${idBase}-${Date.now().toString().slice(-5)}`,
    name,
    login,
    email,
    role: roleLabel(roleId),
    roleId,
    scope: ROLE_POLICIES[roleId].companies.length === 1 ? ROLE_POLICIES[roleId].companies[0] : "both",
    passwordHash: DEFAULT_PASSWORD_HASH,
    mustChangePassword: true,
    active: true,
  };
  state.users.push(user);
  const generalGroup = state.communications.groups.find((group) => group.id === "group-general");
  if (generalGroup && !generalGroup.memberIds.includes(user.id)) generalGroup.memberIds.push(user.id);
  audit("Создание пользователя", "user", user.id, "", { login, roleId });
  saveState();
  closeModal();
  renderAll();
  toast(`Пользователь ${name} создан`, "ok");
}

function saveUser(userId) {
  if (!currentPolicy().canManageUsers) return toast("Управление пользователями недоступно.", "warn");
  const user = state.users.find((item) => item.id === userId && item.roleId);
  if (!user) return;
  const nextLogin = $("#editUserLogin")?.value.trim();
  const nextRole = $("#editUserRole")?.value;
  if (!nextLogin || !ROLE_POLICIES[nextRole]) return toast("Логин и роль обязательны.", "warn");
  if (state.users.some((item) => item.id !== user.id && item.login?.toLowerCase() === nextLogin.toLowerCase())) return toast("Такой логин уже существует.", "warn");
  const before = { name: user.name, login: user.login, roleId: user.roleId, active: user.active !== false };
  user.name = $("#editUserName")?.value.trim() || user.name;
  user.login = nextLogin;
  user.email = $("#editUserEmail")?.value.trim() || "";
  user.roleId = nextRole;
  user.role = roleLabel(nextRole);
  user.scope = ROLE_POLICIES[nextRole].companies.length === 1 ? ROLE_POLICIES[nextRole].companies[0] : "both";
  user.active = $("#editUserActive")?.checked ?? true;
  const after = { name: user.name, login: user.login, roleId: user.roleId, active: user.active };
  audit(before.roleId === after.roleId ? "Изменение пользователя" : "Смена роли", "user", user.id, before, after);
  saveState();
  closeModal();
  renderAll();
  toast("Пользователь обновлён", "ok");
}

function resetUserPassword(userId) {
  if (!currentPolicy().canResetPasswords) return toast("Сброс паролей недоступен.", "warn");
  const user = state.users.find((item) => item.id === userId && item.roleId);
  if (!user) return;
  user.passwordHash = DEFAULT_PASSWORD_HASH;
  user.mustChangePassword = true;
  audit("Сброс пароля", "user", user.id, "Существующий хэш", "Временный пароль установлен");
  saveState();
  toast(`Пароль ${user.name} сброшен на Aa123456`, "ok");
  if ($("#editUserRole")) openEditUserModal(userId);
  else renderAll();
}

function openChangePasswordModal() {
  const modal = $("#requestModal");
  modal.innerHTML = `
    <article class="modal profile-modal" role="dialog" aria-modal="true" aria-labelledby="passwordTitle">
      <header class="modal-header">
        <div><span class="eyebrow">Безопасность</span><h2 id="passwordTitle">Смена пароля</h2></div>
        <button class="icon-button" data-close-modal title="Закрыть" aria-label="Закрыть"><span data-lucide="x"></span></button>
      </header>
      <div class="detail-grid password-grid">
        <label>Текущий пароль<input id="currentPassword" type="password" autocomplete="current-password" /></label>
        <label>Новый пароль<input id="newPassword" type="password" autocomplete="new-password" /></label>
        <label>Повторите новый пароль<input id="repeatPassword" type="password" autocomplete="new-password" /></label>
      </div>
      <footer class="modal-footer">
        <button class="ghost-button" data-close-modal>Отмена</button>
        <button class="primary-button" data-save-password>Сменить пароль</button>
      </footer>
    </article>
  `;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
}

async function saveOwnPassword() {
  const user = currentUser();
  const current = $("#currentPassword")?.value || "";
  const next = $("#newPassword")?.value || "";
  const repeat = $("#repeatPassword")?.value || "";
  if ((await hashPassword(current)) !== user.passwordHash) return toast("Текущий пароль указан неверно.", "warn");
  if (next.length < 8 || !/[A-ZА-Я]/.test(next) || !/[a-zа-я]/.test(next) || !/\d/.test(next)) return toast("Новый пароль: минимум 8 символов, заглавная и строчная буква, цифра.", "warn");
  if (next !== repeat) return toast("Новые пароли не совпадают.", "warn");
  user.passwordHash = await hashPassword(next);
  user.mustChangePassword = false;
  audit("Смена собственного пароля", "user", user.id, "Старый хэш", "Новый хэш");
  saveState();
  closeModal();
  toast("Пароль изменён", "ok");
}

function openNotificationsModal() {
  const items = userNotifications();
  const modal = $("#requestModal");
  modal.innerHTML = `
    <article class="modal profile-modal" role="dialog" aria-modal="true" aria-labelledby="notificationsTitle">
      <header class="modal-header">
        <div><span class="eyebrow">Центр событий</span><h2 id="notificationsTitle">Уведомления</h2></div>
        <button class="icon-button" data-close-modal title="Закрыть" aria-label="Закрыть"><span data-lucide="x"></span></button>
      </header>
      <div class="record-list notification-list">
        ${
          items
            .slice(0, 30)
            .map(
              (item) => `
                <article class="record-row">
                  <span data-lucide="${item.tone === "danger" ? "circle-alert" : item.tone === "warn" ? "clock-alert" : "bell"}"></span>
                  <div><strong>${item.title}</strong><p>${item.text}</p></div>
                  ${item.processId ? `<button class="row-action" data-open="${item.processId}">${item.processId}</button>` : `<b>${new Date(item.createdAt).toLocaleDateString("ru-RU")}</b>`}
                </article>
              `,
            )
            .join("") || '<div class="empty-state">Новых уведомлений нет</div>'
        }
      </div>
      <footer class="modal-footer"><button class="primary-button" data-close-modal>Закрыть</button></footer>
    </article>
  `;
  items.forEach((item) => {
    item.read = true;
  });
  saveState();
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  renderUserShell();
  iconRefresh();
}

function openDashboardQueue(queue) {
  const policy = currentPolicy();
  currentCompany = policy.companies.length === 1 ? policy.companies[0] : "all";
  $$("[data-filter-company]").forEach((button) => button.classList.toggle("is-selected", button.dataset.filterCompany === currentCompany));
  slaOnly = false;
  $("#slaOnly").classList.remove("is-selected");

  if (queue === "incoming") {
    switchView("appeals");
    activeStage = "Требуется классификация";
    renderAll();
    return;
  }
  if (queue === "expiring") {
    switchView("contracts");
    activeStage = "Скоро истекает";
    renderAll();
    return;
  }

  switchView("dashboard");
  if (queue === "overdue") {
    slaOnly = true;
    $("#slaOnly").classList.add("is-selected");
    renderAll();
    $("#requestTable")?.closest(".panel")?.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }
  if (queue === "approvals") {
    $(".approvals-panel")?.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }
  $("#requestTable")?.closest(".panel")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function closeModal() {
  currentModalId = "";
  $("#requestModal").classList.remove("is-open");
  $("#requestModal").setAttribute("aria-hidden", "true");
}

function switchView(viewName) {
  if (currentUserId && !currentPolicy().views.includes(viewName)) return toast("Раздел недоступен для вашей роли.", "warn");
  activeView = viewName;
  activeStage = "";
  $$(".nav-item").forEach((button) => button.classList.toggle("is-active", button.dataset.view === viewName));
  $("#dashboardView").classList.toggle("is-active", viewName === "dashboard");
  $("#clientsView").classList.toggle("is-active", viewName === "clients");
  $("#genericView").classList.toggle("is-active", !["dashboard", "clients"].includes(viewName));
  updateViewTitle();
  if (!["dashboard", "clients"].includes(viewName)) renderGeneric(viewName);
  closeSidebar();
  renderAll();
}

function updateViewTitle() {
  if (activeView === "dashboard" && currentPolicy().roleType === "companyDirector") {
    $("#viewTitle").textContent = currentLanguage === "kk" ? "Директордың басқару тақтасы" : "Дашборд директора";
    return;
  }
  if (activeView === "dashboard" && currentPolicy().roleType === "founder") {
    $("#viewTitle").textContent = currentLanguage === "kk" ? "Құрылтайшы кабинеті" : "Кабинет учредителя";
    return;
  }
  if (activeView === "dashboard" && currentPolicy().roleType === "assignedManager") {
    $("#viewTitle").textContent = currentLanguage === "kk" ? "Кіріс өтінімдер CRM" : "CRM входящих обращений";
    return;
  }
  if (activeView === "dashboard" && currentPolicy().roleType === "seniorManager") {
    $("#viewTitle").textContent = currentLanguage === "kk" ? "CRM мерзімдерін бақылау" : "Контроль CRM и SLA";
    return;
  }
  const keys = {
    dashboard: "dashboardTitle",
    assistant: "assistantTitle",
    messages: "messagesTitle",
    clients: "clientsTitle",
    appeals: "appealsTitle",
    contracts: "contractsTitle",
    orders: "ordersTitle",
    extensions: "extensionsTitle",
    refunds: "refundsTitle",
    tenders: "tendersTitle",
    tasks: "tasksTitle",
    documents: "documentsTitle",
    reports: "reportsTitle",
    users: "usersTitle",
    audit: "auditTitle",
    settings: "settingsTitle",
  };
  if ($("#viewTitle")) $("#viewTitle").textContent = keys[activeView] ? t(keys[activeView]) : "GAZOIL CRM";
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
  const button = target.closest("button, .client-card, .stage-item, [data-dashboard-queue], [data-founder-signal], [data-crm-channel]");
  if (!button) return;

  if (button.matches("[data-crm-channel]")) {
    crmChannelFilter = button.dataset.crmChannel;
    renderAll();
  }
  if (button.matches("[data-service-open-section]")) switchView(button.dataset.serviceOpenSection);
  if (button.matches("[data-crm-open-appeals]")) switchView("appeals");
  if (button.matches("[data-open-omnichannel]")) openOmnichannelCreateModal(button.dataset.openOmnichannel);
  if (button.matches("[data-omni-kind]")) {
    $("#omniKind").value = button.dataset.omniKind;
    $$("[data-omni-kind]").forEach((item) => item.classList.toggle("is-selected", item === button));
  }
  if (button.matches("[data-create-inbound-appeal]")) createInboundAppeal();
  if (button.matches("[data-assign-appeal]")) openAssignAppealModal(button.dataset.assignAppeal);
  if (button.matches("[data-save-appeal-assignment]")) saveAppealAssignment(button.dataset.saveAppealAssignment);
  if (button.matches("[data-send-appeal-reply]")) sendAppealReply(button.dataset.sendAppealReply);
  if (button.matches("[data-classify-appeal]")) classifyAppeal(button.dataset.classifyAppeal);
  if (button.matches("[data-finish-mock-call]")) finishMockCall(button.dataset.finishMockCall);
  if (button.matches("[data-complete-callback]")) completeMissedCallback(button.dataset.completeCallback);
  if (button.matches("[data-close-consultation]")) closeConsultation(button.dataset.closeConsultation);
  if (button.matches("[data-transfer-diana]")) transferAppealToDiana(button.dataset.transferDiana);
  if (button.matches("[data-create-appeal-task]")) createAppealActionTask(button.dataset.createAppealTask);
  if (button.matches("[data-founder-signal]")) openFounderSignalModal(button.dataset.founderSignal);
  if (button.matches("[data-ai-prompt]")) sendAiPrompt(button.dataset.aiPrompt);
  if (button.matches("[data-send-ai]")) sendAiPrompt();
  if (button.matches("[data-chat-type]")) selectChat(button.dataset.chatType, button.dataset.chatId);
  if (button.matches("[data-send-message]")) sendCorporateMessage();
  if (button.matches("[data-create-chat-group]")) openCreateChatGroupModal();
  if (button.matches("[data-save-chat-group]")) saveChatGroup();
  if (button.matches("[data-chat-members]")) openChatMembers(button.dataset.chatMembers);
  if (button.matches("[data-open]")) openProcessModal(button.dataset.open, "data");
  if (button.matches("[data-lang]")) setLanguage(button.dataset.lang);
  if (button.matches("[data-dashboard-queue]")) openDashboardQueue(button.dataset.dashboardQueue);
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
  if (button.matches("[data-create-invoice-one-c]")) mock1CCreateInvoice(button.dataset.createInvoiceOneC);
  if (button.matches("[data-confirm-payment-one-c]")) mock1CConfirmPayment(button.dataset.confirmPaymentOneC);
  if (button.matches("[data-create-linked]")) createLinkedFromAppeal(button.dataset.sourceProcess, button.dataset.createLinked);
  if (button.matches("[data-import-tenders]")) importDemoTenders();
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
  if (button.matches("[data-action='profile']")) openUserProfile();
  if (button.matches("[data-action='create-client']")) openCreateClientModal();
  if (button.matches("[data-action='notifications']")) openNotificationsModal();
  if (button.matches("[data-action='logout']")) logout();
  if (button.matches("[data-action='change-password']")) openChangePasswordModal();
  if (button.matches("[data-save-password]")) saveOwnPassword();
  if (button.matches("[data-save-new-user]")) saveNewUser();
  if (button.matches("[data-save-client]")) saveClient();
  if (button.matches("[data-save-sla-settings]")) saveSlaSettings();
  if (button.matches("[data-save-founder-task]")) saveFounderTask();
  if (button.matches("[data-complete-founder-task]")) completeFounderTask(button.dataset.completeFounderTask);
  if (button.matches("[data-edit-user]")) openEditUserModal(button.dataset.editUser);
  if (button.matches("[data-save-user]")) saveUser(button.dataset.saveUser);
  if (button.matches("[data-reset-user-password]")) resetUserPassword(button.dataset.resetUserPassword);
  if (button.matches("#passwordToggle")) togglePasswordVisibility();
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
  if (button.matches("[data-action='build-founder-report']")) {
    const start = $("#founderReportStart")?.value;
    const end = $("#founderReportEnd")?.value;
    if (!start || !end || start > end) return toast("Выберите корректный период отчёта.", "warn");
    state.reportPeriod = { start, end };
    saveState();
    renderFounderReports();
    toast(`Отчёт сформирован: ${start} — ${end}`, "ok");
  }
  if (button.matches("[data-toast]")) toast(button.dataset.toast);
});

document.addEventListener("change", (event) => {
  if (event.target.matches("[data-service-status-picker]")) {
    const name = event.target.dataset.serviceStatusPicker;
    const canChange = name === currentUser().name || ["seniorManager", "commercialDirector"].includes(currentPolicy().roleType);
    if (!canChange) {
      event.target.value = managerWorkStatus(name);
      return toast("Изменять этот статус недоступно.", "warn");
    }
    setServiceManagerStatus(name, event.target.value);
    toast(`Статус ${name}: ${event.target.value}`, "ok");
  }
  if (event.target.matches("[data-task-done]")) {
    toggleTask(event.target.dataset.taskDone, event.target.dataset.taskId, event.target.checked);
  }
  if (event.target.matches("[data-task-owner]")) {
    reassignTask(event.target.dataset.taskOwner, event.target.dataset.taskId, event.target.value);
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

document.addEventListener("input", (event) => {
  if (event.target.matches("#omniPhone, #omniEmail, #omniBin, #omniCompanyName, #omniContactName")) updateOmniClientMatch();
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

$("#newRequestBtn").addEventListener("click", () => {
  if (["assignedManager", "seniorManager"].includes(currentPolicy().roleType) || activeView === "appeals") return openOmnichannelCreateModal("whatsapp");
  openCreateModal(activeView);
});
$("#genericAction").addEventListener("click", () => {
  if (activeView === "users") return openCreateUserModal();
  if (activeView === "messages") return openCreateChatGroupModal();
  if (activeView === "appeals") return openOmnichannelCreateModal("manual");
  openCreateModal(activeView);
});

$("#requestModal").addEventListener("click", (event) => {
  if (event.target.id === "requestModal") closeModal();
});

$("#loginForm").addEventListener("submit", (event) => {
  event.preventDefault();
  submitLogin();
});

$("#loginUsername").addEventListener("input", () => {
  $("#loginError").textContent = "";
});

$("#loginPassword").addEventListener("input", () => {
  $("#loginError").textContent = "";
});

$("#mobileMenu").addEventListener("click", () => setSidebar(!document.body.classList.contains("sidebar-open")));
$("#sidebarClose")?.addEventListener("click", closeSidebar);
$("#mobileBackdrop")?.addEventListener("click", closeSidebar);

document.addEventListener("keydown", (event) => {
  const crmChannel = event.target.closest?.("[data-crm-channel]");
  if (crmChannel && ["Enter", " "].includes(event.key)) {
    event.preventDefault();
    crmChannelFilter = crmChannel.dataset.crmChannel;
    renderAll();
    return;
  }
  if ((event.metaKey || event.ctrlKey) && event.key === "Enter" && event.target.matches("#assistantPrompt")) {
    event.preventDefault();
    sendAiPrompt();
    return;
  }
  if ((event.metaKey || event.ctrlKey) && event.key === "Enter" && event.target.matches("#corporateMessageText")) {
    event.preventDefault();
    sendCorporateMessage();
    return;
  }
  const founderSignal = event.target.closest?.("[data-founder-signal]");
  if (founderSignal && ["Enter", " "].includes(event.key)) {
    event.preventDefault();
    openFounderSignalModal(founderSignal.dataset.founderSignal);
    return;
  }
  const dashboardCard = event.target.closest?.("[data-dashboard-queue]");
  if (dashboardCard && ["Enter", " "].includes(event.key)) {
    event.preventDefault();
    openDashboardQueue(dashboardCard.dataset.dashboardQueue);
    return;
  }
  if (event.key === "Escape") {
    closeModal();
    closeSidebar();
  }
});

enhanceStaticControls();
setupMobileGestures();
runAutomations();
renderAll();
applySessionState();
