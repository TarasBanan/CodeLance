import Link from 'next/link';
import { projects } from '@/data/site';
import { InjectedProjects } from '@/components/content/InjectedProjects';

export const metadata = {
  title: 'Портфолио | CodeLance',
  description: 'Реализованные кейсы и проекты.',
  openGraph: {
    title: 'Портфолио | CodeLance',
    description: 'Реализованные кейсы и проекты.',
    url: '/portfolio'
  }
};

export default function PortfolioPage() {
  return (
    <div className="container-main py-16">
      <h1 className="mb-8 text-4xl font-medium">Портфолио</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article key={project.slug} className="flex min-h-80 flex-col rounded-soft border border-line p-6">
            <h2 className="text-xl">{project.title}</h2>
            <p className="mt-2 text-stone">{project.type}</p>
            <p className="mt-3 text-sm">{project.summary}</p>
            <ul className="mt-4 space-y-1 text-sm text-stone">
              {project.metrics.map((metric) => (
                <li key={metric}>• {metric}</li>
              ))}
            </ul>
            <Link href={`/portfolio/${project.slug}`} className="mt-auto pt-6 underline">Подробнее о проекте</Link>
          </article>
        ))}
      </div>

      <div className="mt-12">
        <InjectedProjects />
      </div>
    </div>
  );
}
