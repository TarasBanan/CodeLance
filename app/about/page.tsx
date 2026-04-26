import { getLang, tr } from '@/lib/i18n';

export const metadata = {
  title: 'About | CodeLance',
  description: 'Team, process, and delivery values of CodeLance.',
  openGraph: {
    title: 'About | CodeLance',
    description: 'Team, process, and delivery values of CodeLance.',
    url: '/about'
  }
};

export default function AboutPage() {
  const lang = getLang();

  return (
    <div className="container-main space-y-10 py-16">
      <h1 className="text-4xl font-medium">{tr(lang, 'About company', 'О компании')}</h1>
      <p className="mt-6 max-w-3xl text-lg text-stone">{tr(lang, 'CodeLance is a full-cycle team covering analytics, design, development, infrastructure, and support. We work by contract and provide transparent budgets and timelines.', 'CodeLance — команда полного цикла: аналитика, UI/UX, разработка, инфраструктура и сопровождение. Работаем по договору, прозрачно оцениваем бюджет и сроки.')}</p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <article className="rounded-soft border border-line p-6"><h2 className="text-3xl">7+ {tr(lang, 'years', 'лет')}</h2><p className="text-stone">{tr(lang, 'Commercial engineering experience', 'Опыт в коммерческой разработке')}</p></article>
        <article className="rounded-soft border border-line p-6"><h2 className="text-3xl">120+</h2><p className="text-stone">{tr(lang, 'Delivered projects', 'Запущенных проектов')}</p></article>
        <article className="rounded-soft border border-line p-6"><h2 className="text-3xl">24/7</h2><p className="text-stone">{tr(lang, 'Support for critical systems', 'Поддержка критичных систем')}</p></article>
      </div>

      <section className="grid gap-4 md:grid-cols-2">
        <article className="rounded-soft border border-line bg-snow p-6">
          <h2 className="text-2xl">{tr(lang, 'What we do', 'Чем мы занимаемся')}</h2>
          <p className="mt-3 text-stone">
            {tr(
              lang,
              'We design and deliver websites, web apps, mobile products, and internal business systems. Our team also owns infrastructure, release processes, and post-launch support.',
              'Мы проектируем и разрабатываем сайты, веб-приложения, мобильные продукты и внутренние бизнес-системы. Также берем на себя инфраструктуру, релизы и поддержку после запуска.'
            )}
          </p>
        </article>
        <article className="rounded-soft border border-line bg-snow p-6">
          <h2 className="text-2xl">{tr(lang, 'How we work', 'Как мы работаем')}</h2>
          <p className="mt-3 text-stone">
            {tr(
              lang,
              'Every project starts with discovery and scope definition. Then we move through design, implementation, QA, launch, and continuous iterations with measurable business goals.',
              'Каждый проект начинаем с аналитики и фиксации объема работ. Далее идем через дизайн, разработку, QA, запуск и итерационное развитие под измеримые бизнес-цели.'
            )}
          </p>
        </article>
      </section>

      <section className="rounded-soft border border-line p-6">
        <h2 className="text-2xl">{tr(lang, 'Industries and project formats', 'Ниши и форматы проектов')}</h2>
        <div className="mt-4 grid gap-3 text-sm text-stone md:grid-cols-2">
          <p>{tr(lang, 'E-commerce and marketplaces: catalogs, checkout, payment integrations, and retention mechanics.', 'E-commerce и маркетплейсы: каталоги, checkout, платежные интеграции и механики удержания.')}</p>
          <p>{tr(lang, 'B2B and corporate platforms: lead generation websites, portals, and partner dashboards.', 'B2B и корпоративные платформы: сайты для лидогенерации, клиентские кабинеты и партнерские порталы.')}</p>
          <p>{tr(lang, 'Service companies: CRM, automation, KPI dashboards, and operational analytics.', 'Сервисные компании: CRM, автоматизация процессов, KPI-дашборды и операционная аналитика.')}</p>
          <p>{tr(lang, 'Long-term product support: SLA, incidents, performance optimization, and roadmap delivery.', 'Долгосрочное сопровождение продукта: SLA, инциденты, оптимизация производительности и реализация roadmap.')}</p>
        </div>
      </section>

      <section className="rounded-soft border border-line p-6">
        <h2 className="text-2xl">{tr(lang, 'Why clients choose us', 'Почему клиенты выбирают нас')}</h2>
        <ul className="mt-4 grid gap-2 text-sm text-stone md:grid-cols-2">
          <li>• {tr(lang, 'Transparent estimates and fixed milestones.', 'Прозрачные оценки и фиксированные этапы.')}</li>
          <li>• {tr(lang, 'One team for product, design, development, and infrastructure.', 'Единая команда на продукт, дизайн, разработку и инфраструктуру.')}</li>
          <li>• {tr(lang, 'Architecture focused on scaling and supportability.', 'Архитектура с фокусом на масштабируемость и поддержку.')}</li>
          <li>• {tr(lang, 'Post-launch support with clear response windows.', 'Поддержка после запуска с понятными окнами реакции.')}</li>
        </ul>
      </section>
    </div>
  );
}
