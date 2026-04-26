import { ContactForm } from '@/components/ContactForm';

export const metadata = {
  title: 'Контакты | CodeLance',
  description: 'Оставьте заявку и получите оценку проекта.',
  openGraph: {
    title: 'Контакты | CodeLance',
    description: 'Оставьте заявку и получите оценку проекта.',
    url: '/contacts'
  }
};

export default function ContactsPage() {
  return (
    <div className="container-main py-16">
      <h1 className="text-4xl font-medium">Контакты</h1>
      <p className="mt-3 text-stone">Форма работает локально: заявка сохраняется только в состоянии страницы и никуда не отправляется.</p>
      <ContactForm />
    </div>
  );
}
