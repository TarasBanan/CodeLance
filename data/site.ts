export type Service = {
  title: string;
  description: string;
  priceFrom: string;
};

export type Project = {
  slug: string;
  title: string;
  type: string;
  description: string;
  stack: string[];
};

export const services: Service[] = [
  { title: 'Разработка корпоративных сайтов', description: 'Сайты для представления услуг и лидогенерации.', priceFrom: 'от 90 000 ₽' },
  { title: 'Интернет-магазины', description: 'Каталог, корзина, оплата и интеграции с CRM.', priceFrom: 'от 180 000 ₽' },
  { title: 'Веб-приложения', description: 'Кабинеты, панели управления и внутренние системы.', priceFrom: 'от 250 000 ₽' },
  { title: 'Мобильные приложения', description: 'iOS и Android продукты под бизнес-задачи.', priceFrom: 'от 400 000 ₽' },
  { title: 'DevOps и хостинг', description: 'CI/CD, мониторинг, безопасность, резервное копирование.', priceFrom: 'от 70 000 ₽' },
  { title: 'Техническая поддержка', description: 'Сопровождение и доработки после релиза.', priceFrom: 'от 25 000 ₽ / мес' }
];

export const packages = [
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
    description: 'Запуск магазина с фильтрацией, оплатой и CRM-интеграцией.',
    stack: ['Next.js', 'Node.js', 'PostgreSQL']
  },
  {
    slug: 'construction-crm',
    title: 'CRM для строительной компании',
    type: 'CRM',
    description: 'Воронка сделок, задачи, KPI и отчеты для отделов.',
    stack: ['React', 'NestJS', 'Redis']
  },
  {
    slug: 'saas-landing',
    title: 'Лендинг для SaaS-сервиса',
    type: 'Landing',
    description: 'Конверсионный лендинг с аналитикой и A/B тестированием.',
    stack: ['Next.js', 'Tailwind CSS']
  }
];
