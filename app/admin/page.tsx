import { AdminLogin } from '@/components/AdminLogin';
import { getLang, tr } from '@/lib/i18n';

export const metadata = {
  title: 'Admin | CodeLance',
  description: 'Hidden administrator entry page.',
  robots: {
    index: false,
    follow: false
  },
  openGraph: {
    title: 'Admin | CodeLance',
    description: 'Hidden administrator entry page.',
    url: '/admin'
  }
};

export default function AdminPage() {
  const lang = getLang();

  return (
    <div className="container-main py-16">
      <h1 className="mb-6 text-4xl font-medium">{tr(lang, 'Admin login', 'Вход в админ-панель')}</h1>
      <AdminLogin />
    </div>
  );
}
