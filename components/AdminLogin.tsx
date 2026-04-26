'use client';

import { FormEvent, useState } from 'react';

export function AdminLogin() {
  const [error, setError] = useState('');
  const [isAuthorized, setIsAuthorized] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const login = formData.get('login');
    const password = formData.get('password');

    if (login === 'admin' && password === 'admin') {
      setIsAuthorized(true);
      setError('');
      return;
    }

    setIsAuthorized(false);
    setError('Неверный логин или пароль.');
  };

  if (isAuthorized) {
    return (
      <section className="rounded-soft border border-line p-6">
        <h2 className="text-2xl">Админ-панель</h2>
        <p className="mt-2 text-stone">Вход выполнен. Это скрытая страница, доступная только по прямому URL `/admin`.</p>
      </section>
    );
  }

  return (
    <form onSubmit={onSubmit} className="max-w-md space-y-4 rounded-soft border border-line p-6">
      <input name="login" required placeholder="Логин" className="w-full rounded-pill border border-line px-4 py-3" />
      <input name="password" type="password" required placeholder="Пароль" className="w-full rounded-pill border border-line px-4 py-3" />
      <button type="submit" className="pill-btn bg-ink text-canvas">Войти</button>
      {error ? <p className="text-sm text-stone">{error}</p> : null}
    </form>
  );
}
