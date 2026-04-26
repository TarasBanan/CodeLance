import Link from 'next/link';
import { services } from '@/data/site';
import { InjectedServices } from '@/components/content/InjectedServices';

export const metadata = {
  title: 'Услуги | CodeLance',
  description: 'Полный список услуг IT-аутсорса.',
  openGraph: {
    title: 'Услуги | CodeLance',
    description: 'Полный список услуг IT-аутсорса.',
    url: '/services'
  }
};

export default function ServicesPage() {
  return (
    <div className="container-main py-16">
      <h1 className="mb-8 text-4xl font-medium">Услуги</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <article key={service.slug} className="flex min-h-72 flex-col rounded-soft border border-line p-6">
            <h2 className="text-2xl leading-tight">{service.title}</h2>
            <p className="mt-3 text-stone">{service.shortDescription}</p>
            <p className="mt-3 text-sm text-stone">{service.audience}</p>
            <p className="mt-auto pt-6 text-base">{service.priceFrom}</p>
            <div className="mt-3 flex flex-wrap gap-3">
              <Link href={`/services/${service.slug}`} className="text-sm underline">Описание услуги</Link>
              <Link href={`/pricing/${service.slug}`} className="text-sm underline">Индивидуальные цены</Link>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12">
        <InjectedServices />
      </div>
    </div>
  );
}
