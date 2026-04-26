import { getLang, tr } from '@/lib/i18n';

export const metadata = {
  title: 'About | CodeLance',
  description: 'Team, process, and delivery values of CodeLance.',
  openGraph: {
    title: 'About | CodeLance',
    description: 'Team, process, and delivery values of CodeLance.',
    url: '/about'
  }
};

export default function AboutPage() {
  const lang = getLang();

  return (
    <div className="container-main py-16">
      <h1 className="text-4xl font-medium">{tr(lang, 'About company', 'О компании')}</h1>
      <p className="mt-6 max-w-3xl text-lg text-stone">{tr(lang, 'CodeLance is a full-cycle team covering analytics, design, development, infrastructure, and support. We work by contract and provide transparent budgets and timelines.', 'CodeLance — команда полного цикла: аналитика, UI/UX, разработка, инфраструктура и сопровождение. Работаем по договору, прозрачно оцениваем бюджет и сроки.')}</p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <article className="rounded-soft border border-line p-6"><h2 className="text-3xl">7+ {tr(lang, 'years', 'лет')}</h2><p className="text-stone">{tr(lang, 'Commercial engineering experience', 'Опыт в коммерческой разработке')}</p></article>
        <article className="rounded-soft border border-line p-6"><h2 className="text-3xl">120+</h2><p className="text-stone">{tr(lang, 'Delivered projects', 'Запущенных проектов')}</p></article>
        <article className="rounded-soft border border-line p-6"><h2 className="text-3xl">24/7</h2><p className="text-stone">{tr(lang, 'Support for critical systems', 'Поддержка критичных систем')}</p></article>
      </div>
    </div>
  );
}
