import Link from 'next/link';
import { packageOffers, services } from '@/data/site';
import { getLang, packageText, serviceText, tr } from '@/lib/i18n';

export const metadata = {
  title: 'Pricing | CodeLance',
  description: 'Packages and service-specific pricing.',
  openGraph: {
    title: 'Pricing | CodeLance',
    description: 'Packages and service-specific pricing.',
    url: '/pricing'
  }
};

export default function PricingPage() {
  const lang = getLang();

  return (
    <div className="container-main py-16">
      <h1 className="mb-8 text-4xl font-medium">{tr(lang, 'Pricing', 'Цены')}</h1>
      <p className="max-w-3xl text-stone">{tr(lang, 'Each service has its own pricing page with detailed packages, timelines, and deliverables.', 'Для каждой услуги есть отдельная страница с детальными пакетами, сроками и составом работ.')}</p>

      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {packageOffers.map((item) => {
          const pack = packageText(lang, item.name, item.description, item.price);
          return (
            <article key={item.name} className="flex min-h-52 flex-col rounded-soft border border-line p-6">
              <h2 className="text-2xl">{pack.name}</h2>
              <p className="mt-2 text-stone">{pack.description}</p>
              <p className="mt-auto pt-6">{pack.price}</p>
            </article>
          );
        })}
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {services.map((service) => {
          const copy = serviceText(lang, service.slug, service.title, service.shortDescription);
          return (
            <article key={service.slug} className="rounded-soft border border-line p-6">
              <h3 className="text-xl">{copy.title}</h3>
              <p className="mt-2 text-stone">{copy.shortDescription}</p>
              <p className="mt-3 text-sm">{tr(lang, 'Base price', 'Базовая стоимость')}: {service.priceFrom}</p>
              <Link href={`/pricing/${service.slug}`} className="mt-4 inline-flex w-fit pill-btn bg-canvas text-near">{tr(lang, 'Open service pricing', 'Открыть цены по услуге')}</Link>
            </article>
          );
        })}
      </div>
    </div>
  );
}
