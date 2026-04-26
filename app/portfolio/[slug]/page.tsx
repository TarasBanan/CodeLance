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
    <div className="container-main py-16">
      <h1 className="text-4xl font-medium">{project.title}</h1>
      <p className="mt-4 max-w-2xl text-stone">{project.description}</p>
      <ul className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <li key={tech} className="rounded-pill border border-line px-4 py-1 text-sm">{tech}</li>
        ))}
      </ul>
    </div>
  );
}
