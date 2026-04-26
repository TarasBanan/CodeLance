'use client';

import { useSiteContent } from '@/hooks/useSiteContent';

export function InjectedAnnouncements() {
  const { announcements } = useSiteContent();

  if (announcements.length === 0) {
    return null;
  }

  return (
    <section>
      <h2 className="mb-6 text-3xl font-medium">Admin updates</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {announcements.map((item) => (
          <article key={item.id} className="rounded-soft border border-line bg-snow p-6">
            <h3 className="text-xl">{item.title}</h3>
            <p className="mt-2 text-stone">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
