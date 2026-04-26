import { ContactForm } from '@/components/ContactForm';
import { getLang, tr } from '@/lib/i18n';

export const metadata = {
  title: 'Contacts | CodeLance',
  description: 'Send a request and get project estimation.',
  openGraph: {
    title: 'Contacts | CodeLance',
    description: 'Send a request and get project estimation.',
    url: '/contacts'
  }
};

export default function ContactsPage() {
  const lang = getLang();

  return (
    <div className="container-main py-16">
      <h1 className="text-4xl font-medium">{tr(lang, 'Contacts', 'Контакты')}</h1>
      <p className="mt-3 text-stone">{tr(lang, 'The form works in demo mode: request data is kept only in local page state and is not sent to a server.', 'Форма работает локально: заявка сохраняется только в состоянии страницы и никуда не отправляется.')}</p>
      <ContactForm />
    </div>
  );
}
