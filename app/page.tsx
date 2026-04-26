import Link from 'next/link';
import { InjectedAnnouncements } from '@/components/content/InjectedAnnouncements';
import { InjectedProjects } from '@/components/content/InjectedProjects';
import { InjectedServices } from '@/components/content/InjectedServices';
import { packageOffers, projects, services } from '@/data/site';
import { getLang, packageText, projectText, serviceText, tr } from '@/lib/i18n';

export const metadata = {
  title: 'Home | CodeLance',
  description: 'IT outsourcing: websites, apps, infrastructure, support.',
  openGraph: {
    title: 'Home | CodeLance',
    description: 'IT outsourcing: websites, apps, infrastructure, support.',
    url: '/'
  }
};

export default function HomePage() {
  const lang = getLang();

  return (
    <div className="container-main space-y-20 py-16">
      <section className="space-y-6 text-center">
        <h1 className="text-4xl font-medium tracking-tight md:text-6xl">
          {tr(lang, 'We build websites, apps, and IT infrastructure for business', 'Разрабатываем сайты, приложения и IT-инфраструктуру для бизнеса')}
        </h1>
        <p className="mx-auto max-w-3xl text-lg text-stone">
          {tr(lang, 'We deliver web products, mobile apps, CRM systems, client portals, automation, hosting, and post-launch support with transparent timelines and budgeting.', 'Создаем веб-сайты, мобильные приложения, CRM, личные кабинеты, автоматизацию процессов, хостинг и поддержку с прозрачной оценкой сроков и бюджета.')}
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/contacts" className="pill-btn bg-ink text-canvas">{tr(lang, 'Discuss project', 'Обсудить проект')}</Link>
          <Link href="/portfolio" className="pill-btn bg-canvas text-near">{tr(lang, 'View portfolio', 'Смотреть портфолио')}</Link>
        </div>
      </section>

      <InjectedAnnouncements />

      <section>
        <div className="mb-6 flex items-end justify-between gap-4">
          <h2 className="text-3xl font-medium">{tr(lang, 'Services', 'Услуги')}</h2>
          <Link href="/services" className="pill-btn bg-canvas text-near">{tr(lang, 'All services', 'Все услуги')}</Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 9).map((service) => {
            const copy = serviceText(lang, service.slug, service.title, service.shortDescription);
            return (
              <article key={service.slug} className="flex min-h-64 flex-col rounded-soft border border-line bg-snow p-6">
                <h3 className="text-2xl leading-tight">{copy.title}</h3>
                <p className="mt-3 text-stone">{copy.shortDescription}</p>
                <p className="mt-auto pt-6 text-base text-near">{service.priceFrom}</p>
                <Link href={`/services/${service.slug}`} className="mt-3 inline-flex w-fit pill-btn bg-canvas text-near">{tr(lang, 'Details & pricing', 'Подробнее и цены')}</Link>
              </article>
            );
          })}
        </div>
      </section>

      <InjectedServices />

      <section>
        <h2 className="mb-6 text-3xl font-medium">{tr(lang, 'Packages', 'Тарифные пакеты')}</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {packageOffers.map((item) => {
            const pack = packageText(lang, item.name, item.description, item.price);
            return (
              <article key={item.name} className="flex min-h-56 flex-col rounded-soft border border-line p-6">
                <h3 className="text-xl">{pack.name}</h3>
                <p className="mt-2 text-stone">{pack.description}</p>
                <p className="mt-auto pt-6 text-lg">{pack.price}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section>
        <div className="mb-6 flex items-end justify-between gap-4">
          <h2 className="text-3xl font-medium">{tr(lang, 'Portfolio', 'Портфолио')}</h2>
          <Link href="/portfolio" className="pill-btn bg-canvas text-near">{tr(lang, 'View all cases', 'Смотреть все кейсы')}</Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 6).map((project) => {
            const copy = projectText(lang, project.slug, project.title, project.type, project.summary);
            return (
              <article key={project.slug} className="flex min-h-64 flex-col rounded-soft border border-line p-6">
                <h3 className="text-xl">{copy.title}</h3>
                <p className="mt-2 text-sm text-stone">{copy.type}</p>
                <p className="mt-3 text-sm">{copy.summary}</p>
                <Link href={`/portfolio/${project.slug}`} className="mt-auto inline-flex w-fit pill-btn bg-canvas text-near">{tr(lang, 'Details', 'Подробнее')}</Link>
              </article>
            );
          })}
        </div>
      </section>

      <InjectedProjects />
    </div>
  );
}
