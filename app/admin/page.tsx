import { AdminLogin } from '@/components/AdminLogin';

export const metadata = {
  title: 'Admin | CodeLance',
  description: 'Скрытая страница входа администратора.',
  robots: {
    index: false,
    follow: false
  },
  openGraph: {
    title: 'Admin | CodeLance',
    description: 'Скрытая страница входа администратора.',
    url: '/admin'
  }
};

export default function AdminPage() {
  return (
    <div className="container-main py-16">
      <h1 className="mb-6 text-4xl font-medium">Вход в админ-панель</h1>
      <AdminLogin />
    </div>
  );
}
