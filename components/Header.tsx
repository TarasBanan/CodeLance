import Link from 'next/link';

const links = [
  { href: '/', label: 'Главная' },
  { href: '/services', label: 'Услуги' },
  { href: '/pricing', label: 'Цены' },
  { href: '/portfolio', label: 'Портфолио' },
  { href: '/about', label: 'О нас' },
  { href: '/contacts', label: 'Контакты' }
];

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-canvas/95 backdrop-blur">
      <div className="container-main flex items-center justify-between py-4">
        <Link href="/" className="text-xl font-medium">CodeLance</Link>
        <nav className="hidden gap-6 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-near hover:text-ink">
              {link.label}
            </Link>
          ))}
        </nav>
        <Link href="/contacts" className="pill-btn bg-ink text-canvas">Обсудить проект</Link>
      </div>
    </header>
  );
}
