import Link from 'next/link';
import { packages, projects, services } from '@/data/site';

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
        <p className="mx-auto max-w-3xl text-lg text-stone">Создаем веб-сайты, мобильные приложения, CRM, личные кабинеты и обеспечиваем хостинг, поддержку и развитие.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/contacts" className="pill-btn bg-ink text-canvas">Обсудить проект</Link>
          <Link href="/portfolio" className="pill-btn bg-canvas text-near">Смотреть портфолио</Link>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {services.map((service) => (
          <article key={service.title} className="rounded-soft border border-line bg-snow p-6">
            <h2 className="text-xl">{service.title}</h2>
            <p className="mt-2 text-sm text-stone">{service.description}</p>
            <p className="mt-4 text-sm text-near">{service.priceFrom}</p>
          </article>
        ))}
      </section>

      <section>
        <h2 className="mb-6 text-3xl font-medium">Тарифные пакеты</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {packages.map((item) => (
            <article key={item.name} className="rounded-soft border border-line p-6">
              <h3 className="text-xl">{item.name}</h3>
              <p className="mt-2 text-stone">{item.description}</p>
              <p className="mt-6 text-lg">{item.price}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-3xl font-medium">Портфолио</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {projects.map((project) => (
            <article key={project.slug} className="rounded-soft border border-line p-6">
              <h3 className="text-xl">{project.title}</h3>
              <p className="mt-2 text-sm text-stone">{project.description}</p>
              <Link href={`/portfolio/${project.slug}`} className="mt-4 inline-block text-sm underline">Подробнее</Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
