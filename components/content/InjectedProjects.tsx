'use client';

import { useSiteContent } from '@/hooks/useSiteContent';

export function InjectedProjects() {
  const { projects } = useSiteContent();

  if (projects.length === 0) {
    return null;
  }

  return (
    <section>
      <h2 className="mb-6 text-3xl font-medium">Новые проекты из админ-панели</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article key={project.id} className="flex min-h-72 flex-col rounded-soft border border-line p-6">
            <h3 className="text-xl">{project.title}</h3>
            <p className="mt-2 text-sm text-stone">{project.type}</p>
            <p className="mt-3 text-sm">{project.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
