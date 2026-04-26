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
      <input required name="name" placeholder="Name" className="w-full rounded-pill border border-line px-4 py-3" />
      <input required name="email" type="email" placeholder="Email" className="w-full rounded-pill border border-line px-4 py-3" />
      <textarea required name="task" placeholder="Describe your task" className="min-h-32 w-full rounded-soft border border-line px-4 py-3" />
      <button type="submit" className="pill-btn bg-ink text-canvas">Send request</button>
      {isSuccess ? <p className="text-sm text-stone">Thanks. This demo request is stored locally and is not sent to a server.</p> : null}
    </form>
  );
}
