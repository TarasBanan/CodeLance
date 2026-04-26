import Link from 'next/link';
import { InjectedServices } from '@/components/content/InjectedServices';
import { services } from '@/data/site';
import { getLang, serviceText, tr } from '@/lib/i18n';

export const metadata = {
  title: 'Services | CodeLance',
  description: 'Full list of IT outsourcing services.',
  openGraph: {
    title: 'Services | CodeLance',
    description: 'Full list of IT outsourcing services.',
    url: '/services'
  }
};

export default function ServicesPage() {
  const lang = getLang();

  return (
    <div className="container-main py-16">
      <h1 className="mb-8 text-4xl font-medium">{tr(lang, 'Services', 'Услуги')}</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const copy = serviceText(lang, service.slug, service.title, service.shortDescription);
          return (
            <article key={service.slug} className="flex min-h-72 flex-col rounded-soft border border-line p-6">
              <h2 className="text-2xl leading-tight">{copy.title}</h2>
              <p className="mt-3 text-stone">{copy.shortDescription}</p>
              <p className="mt-3 text-sm text-stone">{service.audience}</p>
              <p className="mt-auto pt-6 text-base">{service.priceFrom}</p>
              <div className="mt-3 flex flex-wrap gap-3">
                <Link href={`/services/${service.slug}`} className="text-sm underline">{tr(lang, 'Service details', 'Описание услуги')}</Link>
                <Link href={`/pricing/${service.slug}`} className="text-sm underline">{tr(lang, 'Custom pricing', 'Индивидуальные цены')}</Link>
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-12">
        <InjectedServices />
      </div>
    </div>
  );
}
