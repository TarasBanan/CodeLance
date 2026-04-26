import { notFound } from 'next/navigation';
import { projects } from '@/data/site';

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function CasePage({ params }: { params: { slug: string } }) {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="container-main space-y-10 py-16">
      <section>
        <h1 className="text-4xl font-medium">{project.title}</h1>
        <p className="mt-3 text-lg text-stone">{project.summary}</p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li key={tech} className="rounded-pill border border-line px-4 py-1 text-sm">{tech}</li>
          ))}
        </ul>
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        <article className="rounded-soft border border-line bg-snow p-6">
          <h2 className="text-lg">Задача</h2>
          <p className="mt-2 text-stone">{project.challenge}</p>
        </article>
        <article className="rounded-soft border border-line bg-snow p-6">
          <h2 className="text-lg">Решение</h2>
          <p className="mt-2 text-stone">{project.solution}</p>
        </article>
        <article className="rounded-soft border border-line bg-snow p-6">
          <h2 className="text-lg">Результат</h2>
          <p className="mt-2 text-stone">{project.result}</p>
        </article>
      </section>

      <section>
        <h2 className="text-3xl font-medium">Скриншоты интерфейса</h2>
        <p className="mt-2 text-stone">Ниже — визуальные макеты экранов в разных стилях, оформленные как статичные демонстрационные скриншоты.</p>
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {project.screenshots.map((screen, index) => (
            <article key={screen.title} className="rounded-soft border border-line p-4">
              <div className="rounded-soft border border-line p-4">
                <div className={`rounded-soft border border-line p-4 ${index % 2 === 0 ? 'bg-snow' : 'bg-canvas'}`}>
                  <div className="mb-4 h-4 w-2/3 rounded-pill bg-line" />
                  <div className="mb-2 h-3 w-full rounded-pill bg-line" />
                  <div className="mb-2 h-3 w-5/6 rounded-pill bg-line" />
                  <div className="mb-4 h-3 w-4/6 rounded-pill bg-line" />
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-16 rounded-soft border border-line bg-canvas" />
                    <div className="h-16 rounded-soft border border-line bg-canvas" />
                  </div>
                </div>
              </div>
              <h3 className="mt-4 text-lg">{screen.title}</h3>
              <p className="mt-2 text-sm text-stone">{screen.style}</p>
              <ul className="mt-3 space-y-1 text-sm text-stone">
                {screen.notes.map((note) => (
                  <li key={note}>• {note}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
