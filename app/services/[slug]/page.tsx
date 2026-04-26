import Link from 'next/link';
import { notFound } from 'next/navigation';
import { services } from '@/data/site';

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((item) => item.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="container-main space-y-10 py-16">
      <section>
        <h1 className="text-4xl font-medium">{service.title}</h1>
        <p className="mt-4 max-w-4xl text-lg text-stone">{service.fullDescription}</p>
        <p className="mt-4 text-sm">Для кого: {service.audience}</p>
      </section>

      <section>
        <h2 className="text-2xl">Что входит</h2>
        <ul className="mt-4 grid gap-3 md:grid-cols-2">
          {service.deliverables.map((item) => (
            <li key={item} className="rounded-soft border border-line bg-snow p-4 text-sm">{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl">Технологии</h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {service.tech.map((tech) => (
            <li key={tech} className="rounded-pill border border-line px-4 py-1 text-sm">{tech}</li>
          ))}
        </ul>
      </section>

      <section className="rounded-soft border border-line p-6">
        <h2 className="text-2xl">Стоимость</h2>
        <p className="mt-2 text-stone">Базовая цена: {service.priceFrom}</p>
        <Link href={`/pricing/${service.slug}`} className="mt-4 inline-flex w-fit pill-btn bg-canvas text-near">Открыть подробные пакеты и сроки</Link>
      </section>
    </div>
  );
}
