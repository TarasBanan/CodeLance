import Link from 'next/link';
import { packageOffers, projects, services } from '@/data/site';
import { InjectedAnnouncements } from '@/components/content/InjectedAnnouncements';
import { InjectedServices } from '@/components/content/InjectedServices';
import { InjectedProjects } from '@/components/content/InjectedProjects';

export const metadata = {
  title: 'Главная | CodeLance',
  description: 'IT-аутсорс: сайты, приложения, инфраструктура, поддержка.',
  openGraph: {
    title: 'Главная | CodeLance',
    description: 'IT-аутсорс: сайты, приложения, инфраструктура, поддержка.',
    url: '/'
  }
};

export default function HomePage() {
  return (
    <div className="container-main space-y-20 py-16">
      <section className="space-y-6 text-center">
        <h1 className="text-4xl font-medium tracking-tight md:text-6xl">Разрабатываем сайты, приложения и IT-инфраструктуру для бизнеса</h1>
        <p className="mx-auto max-w-3xl text-lg text-stone">Создаем веб-сайты, мобильные приложения, CRM, личные кабинеты, автоматизацию процессов, хостинг и поддержку с прозрачной оценкой сроков и бюджета.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/contacts" className="pill-btn bg-ink text-canvas">Обсудить проект</Link>
          <Link href="/portfolio" className="pill-btn bg-canvas text-near">Смотреть портфолио</Link>
        </div>
      </section>

      <InjectedAnnouncements />

      <section>
        <div className="mb-6 flex items-end justify-between gap-4">
          <h2 className="text-3xl font-medium">Услуги</h2>
          <Link href="/services" className="text-sm underline">Все услуги</Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 9).map((service) => (
            <article key={service.slug} className="flex min-h-64 flex-col rounded-soft border border-line bg-snow p-6">
              <h3 className="text-2xl leading-tight">{service.title}</h3>
              <p className="mt-3 text-stone">{service.shortDescription}</p>
              <p className="mt-auto pt-6 text-base text-near">{service.priceFrom}</p>
              <Link href={`/services/${service.slug}`} className="mt-3 inline-block text-sm underline">Подробнее и цены</Link>
            </article>
          ))}
        </div>
      </section>

      <InjectedServices />

      <section>
        <h2 className="mb-6 text-3xl font-medium">Тарифные пакеты</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {packageOffers.map((item) => (
            <article key={item.name} className="flex min-h-56 flex-col rounded-soft border border-line p-6">
              <h3 className="text-xl">{item.name}</h3>
              <p className="mt-2 text-stone">{item.description}</p>
              <p className="mt-auto pt-6 text-lg">{item.price}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-6 flex items-end justify-between gap-4">
          <h2 className="text-3xl font-medium">Портфолио</h2>
          <Link href="/portfolio" className="text-sm underline">Смотреть все кейсы</Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 6).map((project) => (
            <article key={project.slug} className="flex min-h-64 flex-col rounded-soft border border-line p-6">
              <h3 className="text-xl">{project.title}</h3>
              <p className="mt-2 text-sm text-stone">{project.type}</p>
              <p className="mt-3 text-sm">{project.summary}</p>
              <Link href={`/portfolio/${project.slug}`} className="mt-auto pt-6 text-sm underline">Подробнее</Link>
            </article>
          ))}
        </div>
      </section>

      <InjectedProjects />
    </div>
  );
}
