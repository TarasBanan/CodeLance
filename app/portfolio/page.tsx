import Link from 'next/link';
import { projects } from '@/data/site';

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
          <article key={project.slug} className="rounded-soft border border-line p-6">
            <h2 className="text-xl">{project.title}</h2>
            <p className="mt-2 text-stone">{project.type}</p>
            <p className="mt-3 text-sm">{project.description}</p>
            <Link href={`/portfolio/${project.slug}`} className="mt-4 inline-block underline">
              Подробнее
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
