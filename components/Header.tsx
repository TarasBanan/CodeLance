import Link from 'next/link';
import { getLang, tr } from '@/lib/i18n';

export function Header() {
  const lang = getLang();

  const links = [
    { href: '/', label: tr(lang, 'Home', 'Главная') },
    { href: '/services', label: tr(lang, 'Services', 'Услуги') },
    { href: '/pricing', label: tr(lang, 'Pricing', 'Цены') },
    { href: '/portfolio', label: tr(lang, 'Portfolio', 'Портфолио') },
    { href: '/about', label: tr(lang, 'About', 'О нас') },
    { href: '/contacts', label: tr(lang, 'Contacts', 'Контакты') }
  ];

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
        <div className="flex items-center gap-3">
          <Link href={`/api/lang?lang=${lang === 'en' ? 'ru' : 'en'}`} className="pill-btn bg-canvas text-near">
            {lang === 'en' ? 'RU' : 'EN'}
          </Link>
          <Link href="/contacts" className="pill-btn bg-ink text-canvas">{tr(lang, 'Discuss project', 'Обсудить проект')}</Link>
        </div>
      </div>
    </header>
  );
}
