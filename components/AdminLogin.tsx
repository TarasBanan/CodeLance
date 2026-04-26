'use client';

import { FormEvent, useState } from 'react';
import { AdminContentManager } from '@/components/admin/AdminContentManager';

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
    setError('Invalid login or password.');
  };

  if (isAuthorized) {
    return (
      <section className="space-y-6">
        <div className="rounded-soft border border-line p-6">
          <h2 className="text-2xl">Admin panel</h2>
          <p className="mt-2 text-stone">Login successful. You can now add content that appears on the live pages (home, services, portfolio).</p>
        </div>
        <AdminContentManager />
      </section>
    );
  }

  return (
    <form onSubmit={onSubmit} className="max-w-md space-y-4 rounded-soft border border-line p-6">
      <input name="login" required placeholder="Login" className="w-full rounded-pill border border-line px-4 py-3" />
      <input name="password" type="password" required placeholder="Password" className="w-full rounded-pill border border-line px-4 py-3" />
      <button type="submit" className="pill-btn bg-ink text-canvas">Sign in</button>
      {error ? <p className="text-sm text-stone">{error}</p> : null}
    </form>
  );
}
