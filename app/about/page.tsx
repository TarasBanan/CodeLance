export const metadata = {
  title: 'О компании | CodeLance',
  description: 'Команда, подход и преимущества CodeLance.',
  openGraph: {
    title: 'О компании | CodeLance',
    description: 'Команда, подход и преимущества CodeLance.',
    url: '/about'
  }
};

export default function AboutPage() {
  return (
    <div className="container-main py-16">
      <h1 className="text-4xl font-medium">О компании</h1>
      <p className="mt-6 max-w-3xl text-lg text-stone">CodeLance — команда полного цикла: аналитика, UI/UX, разработка, инфраструктура и сопровождение. Работаем по договору, прозрачно оцениваем бюджет и сроки.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <article className="rounded-soft border border-line p-6"><h2 className="text-3xl">7+ лет</h2><p className="text-stone">Опыт в коммерческой разработке</p></article>
        <article className="rounded-soft border border-line p-6"><h2 className="text-3xl">120+</h2><p className="text-stone">Запущенных проектов</p></article>
        <article className="rounded-soft border border-line p-6"><h2 className="text-3xl">24/7</h2><p className="text-stone">Поддержка критичных систем</p></article>
      </div>
    </div>
  );
}
