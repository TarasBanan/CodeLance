import { services } from '@/data/site';

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
      <div className="grid gap-4 md:grid-cols-2">
        {services.map((service) => (
          <article key={service.title} className="rounded-soft border border-line p-6">
            <h2 className="text-2xl">{service.title}</h2>
            <p className="mt-2 text-stone">{service.description}</p>
            <p className="mt-4">{service.priceFrom}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
