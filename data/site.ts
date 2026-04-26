export type ServicePriceOption = {
  name: string;
  price: string;
  leadTime: string;
  includes: string[];
};

export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  priceFrom: string;
  audience: string;
  deliverables: string[];
  tech: string[];
  pricing: ServicePriceOption[];
};

export type ProjectScreen = {
  title: string;
  style: string;
  notes: string[];
};

export type Project = {
  slug: string;
  title: string;
  type: string;
  summary: string;
  challenge: string;
  solution: string;
  result: string;
  stack: string[];
  metrics: string[];
  screenshots: ProjectScreen[];
};

export const services: Service[] = [
  {
    slug: 'corporate-websites',
    title: 'Разработка корпоративных сайтов',
    shortDescription: 'Сайт компании с услугами, кейсами и лидогенерацией.',
    fullDescription: 'Проектируем структуру и UX корпоративного сайта, готовим коммерческие тексты, делаем адаптивную верстку и подключаем аналитику. Решение подходит для B2B и B2C-компаний, которым важен стабильный поток заявок и понятная презентация услуг.',
    priceFrom: 'от 90 000 ₽',
    audience: 'Малый и средний бизнес, сервисные компании, производители.',
    deliverables: ['Карта страниц и прототипы', 'UI-дизайн ключевых экранов', 'CMS или headless-архитектура', 'SEO-базис и веб-аналитика'],
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Yandex Metrica'],
    pricing: [
      { name: 'Landing Corporate', price: 'от 90 000 ₽', leadTime: '2–3 недели', includes: ['До 7 блоков', 'Форма заявок', 'Базовая SEO-настройка'] },
      { name: 'Business Site', price: 'от 160 000 ₽', leadTime: '4–6 недель', includes: ['До 20 страниц', 'Блог/новости', 'Интеграция с CRM'] },
      { name: 'Multi-branch', price: 'от 280 000 ₽', leadTime: '6–9 недель', includes: ['Мультиязык', 'Каталог услуг', 'Роли редакторов'] }
    ]
  },
  {
    slug: 'landing-pages',
    title: 'Разработка лендингов',
    shortDescription: 'Конверсионные страницы под запуск рекламы и продаж.',
    fullDescription: 'Создаем лендинги под конкретную бизнес-гипотезу: от структуры и оффера до аналитики и A/B тестов. Упор на скорость запуска, контроль CPL и легкую масштабируемость кампаний.',
    priceFrom: 'от 45 000 ₽',
    audience: 'Маркетинговые команды, SaaS, образовательные и e-commerce проекты.',
    deliverables: ['Бриф и аналитика конкурентов', 'Конверсионный копирайтинг', 'Лид-формы и цели аналитики', 'Готовность к рекламе'],
    tech: ['Next.js', 'Framer Motion', 'GA4', 'Pixel'],
    pricing: [
      { name: 'MVP Landing', price: 'от 45 000 ₽', leadTime: '7–10 дней', includes: ['1 экран + 6 секций', '1 форма', 'Базовая аналитика'] },
      { name: 'Growth Landing', price: 'от 75 000 ₽', leadTime: '2 недели', includes: ['До 12 секций', 'Калькулятор', 'Подготовка под A/B'] },
      { name: 'Campaign Kit', price: 'от 120 000 ₽', leadTime: '3–4 недели', includes: ['3 варианта лендинга', 'Интеграция с CRM', 'Событийная аналитика'] }
    ]
  },
  {
    slug: 'ecommerce',
    title: 'Интернет-магазины',
    shortDescription: 'E-commerce с каталогом, оплатой, доставкой и CRM.',
    fullDescription: 'Разрабатываем интернет-магазины с учётом реального процесса продаж: каталог, фильтры, корзина, онлайн-оплата, склад и логистика. Делаем акцент на скорости загрузки и повышении конверсии.',
    priceFrom: 'от 180 000 ₽',
    audience: 'Ритейл, дистрибуция, D2C-бренды.',
    deliverables: ['Каталог и карточка товара', 'Интеграции с эквайрингом', 'Личный кабинет покупателя', 'Система скидок и промокодов'],
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis'],
    pricing: [
      { name: 'Store Start', price: 'от 180 000 ₽', leadTime: '5–7 недель', includes: ['До 500 SKU', 'Оплата картой', 'Базовый кабинет клиента'] },
      { name: 'Store Pro', price: 'от 320 000 ₽', leadTime: '8–10 недель', includes: ['До 10 000 SKU', 'Интеграция 1С/МойСклад', 'Система акций'] },
      { name: 'Marketplace Ready', price: 'от 550 000 ₽', leadTime: '10–14 недель', includes: ['Мультисклад', 'Рекомендации', 'Продвинутая аналитика'] }
    ]
  },
  {
    slug: 'web-apps',
    title: 'Веб-приложения',
    shortDescription: 'Кабинеты, панели управления и внутренние системы.',
    fullDescription: 'Создаем бизнес-приложения, автоматизирующие внутренние процессы: сделки, задачи, документооборот, отчеты. Проектируем роли и сценарии так, чтобы сотрудники работали быстрее и с меньшим количеством ошибок.',
    priceFrom: 'от 250 000 ₽',
    audience: 'Компании с ручными операциями и большим объемом данных.',
    deliverables: ['Проектирование ролей', 'Dashboard и отчеты', 'Интеграция API', 'Логи и аудит действий'],
    tech: ['React', 'NestJS', 'PostgreSQL', 'Docker'],
    pricing: [
      { name: 'Workflow MVP', price: 'от 250 000 ₽', leadTime: '6–8 недель', includes: ['3 роли', 'До 6 сущностей', 'Отчеты по KPI'] },
      { name: 'Ops Suite', price: 'от 420 000 ₽', leadTime: '10–12 недель', includes: ['SSO', 'Интеграции с ERP', 'Журналирование'] },
      { name: 'Enterprise Suite', price: 'от 780 000 ₽', leadTime: '14+ недель', includes: ['Микросервисы', 'SLA', 'Отказоустойчивость'] }
    ]
  },
  {
    slug: 'mobile-apps',
    title: 'Мобильные приложения',
    shortDescription: 'Нативный опыт iOS/Android для клиентских сервисов.',
    fullDescription: 'Разрабатываем мобильные приложения для e-commerce, доставки, финтех и B2B сервисов. От UX-сценариев до релиза в сторах и последующей поддержки.',
    priceFrom: 'от 400 000 ₽',
    audience: 'Продукты с повторными заказами и высокой LTV.',
    deliverables: ['UX-карта мобильного пути', 'Push-уведомления', 'Офлайн-режим', 'Публикация в сторах'],
    tech: ['React Native', 'Kotlin', 'Swift', 'Firebase'],
    pricing: [
      { name: 'MVP App', price: 'от 400 000 ₽', leadTime: '8–10 недель', includes: ['Авторизация', 'Каталог', 'Пуши'] },
      { name: 'App Growth', price: 'от 620 000 ₽', leadTime: '12–14 недель', includes: ['Платежи', 'Реферальная система', 'Сегменты push'] },
      { name: 'SuperApp Module', price: 'от 950 000 ₽', leadTime: '16+ недель', includes: ['Микросервисы', 'Трекинг событий', 'CI/CD mobile'] }
    ]
  },
  {
    slug: 'crm-erp',
    title: 'CRM и ERP-системы',
    shortDescription: 'Автоматизация продаж, производства и сервиса.',
    fullDescription: 'Проектируем и внедряем CRM/ERP-системы под специфику компании: от лидов до закупок и производства. Поддерживаем миграцию данных и обучение команды.',
    priceFrom: 'от 300 000 ₽',
    audience: 'Растущие компании с несколькими отделами и филиалами.',
    deliverables: ['Воронки продаж', 'Сквозная отчетность', 'Автоматизация SLA', 'Интеграции телефонии'],
    tech: ['Next.js', 'NestJS', 'PostgreSQL', 'RabbitMQ'],
    pricing: [
      { name: 'CRM Core', price: 'от 300 000 ₽', leadTime: '8–10 недель', includes: ['Лиды/сделки', 'Воронка', 'Роли доступа'] },
      { name: 'CRM+Service', price: 'от 520 000 ₽', leadTime: '12–14 недель', includes: ['Helpdesk', 'Биллинг', 'Интеграция телефонии'] },
      { name: 'ERP Platform', price: 'от 1 100 000 ₽', leadTime: '20+ недель', includes: ['Склад+финансы', 'План-факт анализ', 'Сложные согласования'] }
    ]
  },
  {
    slug: 'ui-ux',
    title: 'UI/UX-дизайн',
    shortDescription: 'Исследования, прототипы и дизайн-системы.',
    fullDescription: 'Проводим UX-исследования, описываем пользовательские сценарии и собираем дизайн-систему, которая ускоряет разработку и держит визуальное качество на уровне.',
    priceFrom: 'от 50 000 ₽',
    audience: 'Продуктовые команды и стартапы на этапе роста.',
    deliverables: ['UX-интервью', 'Интерактивные прототипы', 'UI-kit', 'Дизайн-гайд'],
    tech: ['Figma', 'FigJam', 'Design Tokens'],
    pricing: [
      { name: 'UX Sprint', price: 'от 50 000 ₽', leadTime: '1–2 недели', includes: ['Карта сценариев', 'Прототип 5 экранов', 'Рекомендации'] },
      { name: 'Product Design', price: 'от 120 000 ₽', leadTime: '3–5 недель', includes: ['15+ экранов', 'UI-kit', 'Передача в разработку'] },
      { name: 'Design System', price: 'от 220 000 ₽', leadTime: '6–8 недель', includes: ['Токены', 'Компоненты', 'Правила масштабирования'] }
    ]
  },
  {
    slug: 'backend',
    title: 'Backend-разработка',
    shortDescription: 'Надежные API и бизнес-логика под нагрузкой.',
    fullDescription: 'Проектируем API и доменную модель, строим отказоустойчивую серверную часть, покрываем критичные сценарии тестами и мониторингом.',
    priceFrom: 'от 120 000 ₽',
    audience: 'Продукты с интеграциями и высокими требованиями к надежности.',
    deliverables: ['REST/GraphQL API', 'RBAC и безопасность', 'Тестовое покрытие', 'Документация API'],
    tech: ['Node.js', 'NestJS', 'PostgreSQL', 'Docker'],
    pricing: [
      { name: 'API Start', price: 'от 120 000 ₽', leadTime: '3–4 недели', includes: ['До 20 endpoint', 'JWT auth', 'Swagger'] },
      { name: 'Core Backend', price: 'от 260 000 ₽', leadTime: '6–8 недель', includes: ['Очереди', 'Кэш', 'Мониторинг'] },
      { name: 'Scalable Backend', price: 'от 480 000 ₽', leadTime: '10+ недель', includes: ['Шардирование', 'Событийная архитектура', 'Failover'] }
    ]
  },
  {
    slug: 'frontend',
    title: 'Frontend-разработка',
    shortDescription: 'Быстрый и доступный интерфейс веб-продукта.',
    fullDescription: 'Делаем интерфейсы с фокусом на производительность, доступность и удобство. Настраиваем дизайн-токены, переиспользуемые компоненты и стабильные релизы.',
    priceFrom: 'от 90 000 ₽',
    audience: 'Продукты, где важен UX и скорость вывода фич.',
    deliverables: ['Компонентная архитектура', 'Адаптивная верстка', 'Доступность WCAG', 'Интеграция с API'],
    tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    pricing: [
      { name: 'Frontend Start', price: 'от 90 000 ₽', leadTime: '2–3 недели', includes: ['До 10 экранов', 'Адаптив', 'Storybook базово'] },
      { name: 'Frontend Product', price: 'от 210 000 ₽', leadTime: '5–7 недель', includes: ['20+ экранов', 'Состояние и кеш', 'Тесты'] },
      { name: 'Frontend Platform', price: 'от 390 000 ₽', leadTime: '9+ недель', includes: ['Micro-frontends', 'Design system', 'Performance budget'] }
    ]
  },
  {
    slug: 'integrations',
    title: 'API и интеграции',
    shortDescription: 'Подключение платежей, CRM, телефонии и внешних сервисов.',
    fullDescription: 'Интегрируем внешние системы с вашим продуктом: платежи, ERP, CRM, мессенджеры, BI. Следим за стабильностью обмена, ретраями и логированием.',
    priceFrom: 'от 35 000 ₽',
    audience: 'Бизнесы с большим количеством внешних сервисов.',
    deliverables: ['Карта интеграций', 'Webhook-процессы', 'Логи и ретраи', 'Мониторинг с алертами'],
    tech: ['Node.js', 'Webhook', 'Queue', 'Sentry'],
    pricing: [
      { name: 'Single Integration', price: 'от 35 000 ₽', leadTime: '3–5 дней', includes: ['1 сервис', 'Логирование', 'Документация'] },
      { name: 'Integration Pack', price: 'от 110 000 ₽', leadTime: '2–3 недели', includes: ['До 4 сервисов', 'Очередь задач', 'Ретраи'] },
      { name: 'Mission Critical', price: 'от 250 000 ₽', leadTime: '5+ недель', includes: ['8+ сервисов', 'Fail-safe схемы', 'SLA мониторинг'] }
    ]
  },
  {
    slug: 'devops-hosting',
    title: 'DevOps и хостинг',
    shortDescription: 'CI/CD, безопасность, мониторинг и эксплуатация.',
    fullDescription: 'Настраиваем инфраструктуру и процессы релизов, чтобы продукт выпускался предсказуемо и без простоев. Поддерживаем облачные и on-prem решения.',
    priceFrom: 'от 70 000 ₽',
    audience: 'Команды, которым нужен стабильный прод и предсказуемые релизы.',
    deliverables: ['CI/CD pipeline', 'IaC', 'Мониторинг и алерты', 'Backup и disaster plan'],
    tech: ['Docker', 'Nginx', 'GitHub Actions', 'Cloudflare'],
    pricing: [
      { name: 'Infra Setup', price: 'от 70 000 ₽', leadTime: '1–2 недели', includes: ['1 окружение', 'CI/CD', 'TLS+domain'] },
      { name: 'Infra Pro', price: 'от 170 000 ₽', leadTime: '3–4 недели', includes: ['3 окружения', 'Monitoring', 'Backup policy'] },
      { name: 'Highload Ops', price: 'от 360 000 ₽', leadTime: '6+ недель', includes: ['Auto-scaling', 'SRE-практики', '24/7 observability'] }
    ]
  },
  {
    slug: 'support',
    title: 'Техническая поддержка',
    shortDescription: 'Сопровождение продукта после запуска.',
    fullDescription: 'Обрабатываем инциденты, выпускаем улучшения, контролируем стабильность и сроки реакции. Поддержка строится по SLA и прозрачной отчетности.',
    priceFrom: 'от 25 000 ₽ / мес',
    audience: 'Продукты в продакшене с активными пользователями.',
    deliverables: ['SLA-регламент', 'Очередь задач', 'Еженедельные отчеты', 'План улучшений'],
    tech: ['Jira', 'Sentry', 'Grafana', 'Notion'],
    pricing: [
      { name: 'Support Basic', price: 'от 25 000 ₽ / мес', leadTime: 'Реакция до 8 часов', includes: ['До 20 часов работ', 'Багфиксы', 'Мониторинг'] },
      { name: 'Support Pro', price: 'от 60 000 ₽ / мес', leadTime: 'Реакция до 2 часов', includes: ['До 60 часов работ', 'Плановые улучшения', 'DevOps-on-demand'] },
      { name: 'Support 24/7', price: 'от 140 000 ₽ / мес', leadTime: 'Реакция до 30 минут', includes: ['Выделенный канал', 'Дежурная смена', 'RCA-отчеты'] }
    ]
  }
];

export const packageOffers = [
  { name: 'Эконом', price: 'от 60 000 ₽', description: 'Быстрый старт для малого бизнеса.' },
  { name: 'Стандарт', price: 'от 150 000 ₽', description: 'Полноценный продукт с базовыми интеграциями.' },
  { name: 'Бизнес', price: 'от 350 000 ₽', description: 'Разработка под ключ с аналитикой и DevOps.' },
  { name: 'Enterprise', price: 'от 900 000 ₽', description: 'Выделенная команда и сложная архитектура.' }
];

export const projects: Project[] = [
  {
    slug: 'electronics-store',
    title: 'Интернет-магазин электроники',
    type: 'E-commerce',
    summary: 'Запуск магазина с фильтрацией, оплатой и CRM-интеграцией.',
    challenge: 'Компания теряла лиды из-за устаревшего каталога и ручной обработки заказов.',
    solution: 'Собрали новый storefront, личный кабинет, интеграцию с CRM и автоматический обмен остатками.',
    result: 'Рост конверсии в заказ на 42% за 3 месяца и снижение ручных операций на 65%.',
    stack: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'Cloudflare'],
    metrics: ['+42% конверсия', '-65% ручных операций', 'LCP 1.7s'],
    screenshots: [
      { title: 'Главная витрина', style: 'Светлый e-commerce интерфейс с крупными карточками товаров и фильтрами слева.', notes: ['Sticky-категории', 'Блок акций', 'CTA в карточке'] },
      { title: 'Карточка товара', style: 'Контентная карточка с галереей, характеристиками и блоком похожих товаров.', notes: ['Липкий блок покупки', 'Технические характеристики', 'Быстрый выбор доставки'] },
      { title: 'Личный кабинет', style: 'Сдержанная панель заказов с таймлайном статусов и повтором покупки.', notes: ['Трекинг заказа', 'История платежей', 'Саппорт-чат'] }
    ]
  },
  {
    slug: 'construction-crm',
    title: 'CRM для строительной компании',
    type: 'CRM',
    summary: 'Воронка сделок, задачи, KPI и отчеты для отделов.',
    challenge: 'Отделы продаж и производства работали в разных таблицах без единого статуса сделки.',
    solution: 'Разработали CRM с ролевой моделью, управлением объектами и сквозной отчетностью по маржинальности.',
    result: 'Срок согласования коммерческих предложений сократился с 5 дней до 1 дня.',
    stack: ['React', 'NestJS', 'PostgreSQL', 'Docker', 'Grafana'],
    metrics: ['x5 быстрее согласования', '+30% SLA соблюдение', '100% прозрачность этапов'],
    screenshots: [
      { title: 'Воронка продаж', style: 'Темная канбан-доска со стадиями сделки и финансовым прогнозом.', notes: ['Drag&drop этапов', 'Сумма по колонкам', 'Индикатор риска'] },
      { title: 'Панель руководителя', style: 'Светлый дашборд с KPI, план/факт графиками и выручкой по филиалам.', notes: ['Срез по менеджерам', 'Периодизация', 'Экспорт отчетов'] },
      { title: 'Карточка объекта', style: 'Документооборот, сметы и контроль задач в одном окне.', notes: ['Загрузка актов', 'Чек-листы', 'Лента событий'] }
    ]
  },
  {
    slug: 'saas-landing',
    title: 'Лендинг для SaaS-сервиса',
    type: 'Landing',
    summary: 'Конверсионный лендинг с аналитикой и A/B тестированием.',
    challenge: 'Низкая конверсия регистрации и высокий CAC.',
    solution: 'Пересобрали оффер, переписали структуру блоков и внедрили событийную аналитику.',
    result: 'Конверсия в триал выросла до 11.8% при том же рекламном бюджете.',
    stack: ['Next.js', 'Tailwind CSS', 'GA4', 'Hotjar'],
    metrics: ['11.8% trial CVR', '-24% CAC', '+67% scroll depth'],
    screenshots: [
      { title: 'Hero + demo', style: 'Минималистичный hero с фокусом на value proposition и CTA.', notes: ['Демо в 3 клика', 'Соцдоказательства', 'Сценарии по сегментам'] },
      { title: 'Прайсинг-блок', style: 'Три пакета с детальной матрицей фич и прозрачным апселлом.', notes: ['Monthly/Yearly toggle', 'FAQ рядом', 'Sticky CTA'] },
      { title: 'Онбординг-flow', style: 'Легкий мастер регистрации с прогрессбаром и подсказками.', notes: ['3 шага', 'Подсветка value', 'Авто-события'] }
    ]
  },
  {
    slug: 'delivery-mobile',
    title: 'Мобильное приложение доставки',
    type: 'Mobile',
    summary: 'Мобильный сервис заказа еды с гео-трекингом и бонусной программой.',
    challenge: 'Клиенты часто уходили после первого заказа из-за слабого retention.',
    solution: 'Добавили персональные рекомендации, программу лояльности и быстрый повтор заказа.',
    result: 'Retention D30 вырос на 19 п.п., доля повторных заказов — до 54%.',
    stack: ['React Native', 'Node.js', 'MongoDB', 'Firebase'],
    metrics: ['D30 +19 п.п.', '54% повторных заказов', 'Crash free 99.6%'],
    screenshots: [
      { title: 'Каталог ресторанов', style: 'Темная мобильная лента с категориями, фильтрами и промо-карточками.', notes: ['Geo-блок', 'Промо акции', 'Рекомендации ML'] },
      { title: 'Checkout', style: 'Одноэкранное оформление заказа с оплатой в один тап.', notes: ['Apple/Google Pay', 'Сохраненные адреса', 'Чаевые'] },
      { title: 'Трекинг курьера', style: 'Карта заказа с ETA и статусом по шагам.', notes: ['Live ETA', 'Push об изменениях', 'Чат с курьером'] }
    ]
  },
  {
    slug: 'hosting-cabinet',
    title: 'Личный кабинет хостинг-провайдера',
    type: 'SaaS Platform',
    summary: 'Кабинет клиента с биллингом, тикетами и управлением VPS.',
    challenge: 'Поддержка тратила много времени на типовые запросы клиентов.',
    solution: 'Сделали self-service кабинет: управление услугами, платежами и тикетами без участия менеджера.',
    result: 'Нагрузка на первую линию поддержки снизилась на 47%.',
    stack: ['Next.js', 'NestJS', 'PostgreSQL', 'Nginx'],
    metrics: ['-47% нагрузка L1', '+38% self-service', 'NPS +16'],
    screenshots: [
      { title: 'Панель услуг', style: 'Светлая админка с карточками серверов и статусами ресурсов.', notes: ['CPU/RAM usage', 'Продление услуг', 'Логи действий'] },
      { title: 'Биллинг', style: 'Финансовый модуль с инвойсами, автоплатежом и актами.', notes: ['История платежей', 'Автопродление', 'PDF-документы'] },
      { title: 'Support center', style: 'Очередь тикетов с SLA-индикатором и шаблонами ответов.', notes: ['Приоритезация', 'Категории', 'SLA таймер'] }
    ]
  },
  {
    slug: 'law-firm-site',
    title: 'Корпоративный сайт юридической фирмы',
    type: 'Corporate',
    summary: 'Сайт с практиками, кейсами и заявками на консультацию.',
    challenge: 'Компания не могла системно получать входящие заявки из digital.',
    solution: 'Разработали структуру с акцентом на практики, кейсы и доверительные факторы.',
    result: 'Количество квалифицированных лидов выросло в 2.1 раза.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Metrica'],
    metrics: ['x2.1 SQL', 'Bounce -28%', 'Avg session +49%'],
    screenshots: [
      { title: 'Практики и экспертиза', style: 'Сдержанный сеточный каталог практик с быстрым подбором юриста.', notes: ['Фильтры по отрасли', 'CTA консультации', 'Документы'] },
      { title: 'Страница кейса', style: 'Длинный формат кейса с хронологией и результатами в цифрах.', notes: ['Юридические нюансы', 'Документы', 'Медиа-цитаты'] },
      { title: 'Форма заявки', style: 'Пошаговая форма с валидацией и выбором практики.', notes: ['Сценарии по типу задачи', 'Проверка контактов', 'Демо-успех'] }
    ]
  }
];
