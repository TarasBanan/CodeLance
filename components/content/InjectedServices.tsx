'use client';

import { useSiteContent } from '@/hooks/useSiteContent';

export function InjectedServices() {
  const { services } = useSiteContent();

  if (services.length === 0) {
    return null;
  }

  return (
    <section>
      <h2 className="mb-6 text-3xl font-medium">Services added via admin</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <article key={service.id} className="flex min-h-64 flex-col rounded-soft border border-line bg-snow p-6">
            <h3 className="text-xl">{service.title}</h3>
            <p className="mt-3 text-stone">{service.description}</p>
            <p className="mt-auto pt-6">{service.price}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
