import { notFound } from 'next/navigation';
import { services } from '@/data/site';

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default function ServicePricingPage({ params }: { params: { slug: string } }) {
  const service = services.find((item) => item.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="container-main py-16">
      <h1 className="text-4xl font-medium">Цены: {service.title}</h1>
      <p className="mt-3 max-w-3xl text-stone">Индивидуальные тарифы по услуге, отличающиеся по срокам, глубине проработки и набору включенных работ.</p>
      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {service.pricing.map((tier) => (
          <article key={tier.name} className="flex min-h-80 flex-col rounded-soft border border-line p-6">
            <h2 className="text-2xl">{tier.name}</h2>
            <p className="mt-3 text-xl">{tier.price}</p>
            <p className="mt-2 text-sm text-stone">Срок: {tier.leadTime}</p>
            <ul className="mt-4 space-y-2 text-sm text-stone">
              {tier.includes.map((point) => (
                <li key={point}>• {point}</li>
              ))}
            </ul>
            <p className="mt-auto pt-6 text-sm">Финальная стоимость уточняется после брифинга и анализа задачи.</p>
          </article>
        ))}
      </div>
    </div>
  );
}
