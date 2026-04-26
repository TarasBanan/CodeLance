import { packages, services } from '@/data/site';

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
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {packages.map((item) => (
          <article key={item.name} className="rounded-soft border border-line p-6">
            <h2 className="text-2xl">{item.name}</h2>
            <p className="text-stone">{item.description}</p>
            <p className="mt-4">{item.price}</p>
          </article>
        ))}
      </div>
      <table className="mt-12 w-full border-collapse text-left">
        <thead>
          <tr className="border-b border-line">
            <th className="py-3">Услуга</th>
            <th className="py-3">Цена</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr key={service.title} className="border-b border-line">
              <td className="py-3">{service.title}</td>
              <td className="py-3">{service.priceFrom}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
