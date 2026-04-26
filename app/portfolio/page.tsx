import Link from 'next/link';
import { InjectedProjects } from '@/components/content/InjectedProjects';
import { projects } from '@/data/site';
import { getLang, projectText, tr } from '@/lib/i18n';

export const metadata = {
  title: 'Portfolio | CodeLance',
  description: 'Completed projects and case studies.',
  openGraph: {
    title: 'Portfolio | CodeLance',
    description: 'Completed projects and case studies.',
    url: '/portfolio'
  }
};

export default function PortfolioPage() {
  const lang = getLang();

  return (
    <div className="container-main py-16">
      <h1 className="mb-8 text-4xl font-medium">{tr(lang, 'Portfolio', 'Портфолио')}</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => {
          const copy = projectText(lang, project.slug, project.title, project.type, project.summary);
          return (
            <article key={project.slug} className="flex min-h-80 flex-col rounded-soft border border-line p-6">
              <h2 className="text-xl">{copy.title}</h2>
              <p className="mt-2 text-stone">{copy.type}</p>
              <p className="mt-3 text-sm">{copy.summary}</p>
              <ul className="mt-4 space-y-1 text-sm text-stone">
                {project.metrics.map((metric) => (
                  <li key={metric}>• {metric}</li>
                ))}
              </ul>
              <Link href={`/portfolio/${project.slug}`} className="mt-auto inline-flex w-fit pill-btn bg-canvas text-near">{tr(lang, 'Project details', 'Подробнее о проекте')}</Link>
            </article>
          );
        })}
      </div>

      <div className="mt-12">
        <InjectedProjects />
      </div>
    </div>
  );
}
