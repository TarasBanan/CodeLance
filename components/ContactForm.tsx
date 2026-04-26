'use client';

import { FormEvent, useState } from 'react';

export function ContactForm() {
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSuccess(true);
  };

  return (
    <form onSubmit={onSubmit} className="mt-8 max-w-2xl space-y-4 rounded-soft border border-line p-6">
      <input required name="name" placeholder="Имя" className="w-full rounded-pill border border-line px-4 py-3" />
      <input required name="email" type="email" placeholder="Email" className="w-full rounded-pill border border-line px-4 py-3" />
      <textarea required name="task" placeholder="Опишите задачу" className="min-h-32 w-full rounded-soft border border-line px-4 py-3" />
      <button type="submit" className="pill-btn bg-ink text-canvas">Оставить заявку</button>
      {isSuccess ? <p className="text-sm text-stone">Спасибо. Заявка принята в демо-режиме и не отправляется на сервер.</p> : null}
    </form>
  );
}
