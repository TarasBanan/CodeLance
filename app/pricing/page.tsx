import Link from 'next/link';
import { packageOffers, services } from '@/data/site';

export const metadata = {
  title: 'Цены | CodeLance',
  description: 'Пакеты и стоимость отдельных услуг.',
  openGraph: {
    title: 'Цены | CodeLance',
    description: 'Пакеты и стоимость отдельных услуг.',
    url: '/pricing'
  }
};

export default function PricingPage() {
  return (
    <div className="container-main py-16">
      <h1 className="mb-8 text-4xl font-medium">Цены</h1>
      <p className="max-w-3xl text-stone">Для каждой услуги есть отдельная страница с детальными пакетами, сроками и составом работ. Выберите нужное направление.</p>

      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {packageOffers.map((item) => (
          <article key={item.name} className="flex min-h-52 flex-col rounded-soft border border-line p-6">
            <h2 className="text-2xl">{item.name}</h2>
            <p className="mt-2 text-stone">{item.description}</p>
            <p className="mt-auto pt-6">{item.price}</p>
          </article>
        ))}
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {services.map((service) => (
          <article key={service.slug} className="rounded-soft border border-line p-6">
            <h3 className="text-xl">{service.title}</h3>
            <p className="mt-2 text-stone">{service.shortDescription}</p>
            <p className="mt-3 text-sm">Базовая стоимость: {service.priceFrom}</p>
            <Link href={`/pricing/${service.slug}`} className="mt-4 inline-block underline">Открыть цены по услуге</Link>
          </article>
        ))}
      </div>
    </div>
  );
}
