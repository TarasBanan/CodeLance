'use client';

import { FormEvent, useMemo, useState } from 'react';
import { AdminAnnouncement, AdminProject, AdminService, createContentId, loadSiteContent, saveSiteContent } from '@/hooks/useSiteContent';

function saveAnnouncements(value: AdminAnnouncement[]) {
  const current = loadSiteContent();
  saveSiteContent({ ...current, announcements: value });
}

function saveServices(value: AdminService[]) {
  const current = loadSiteContent();
  saveSiteContent({ ...current, services: value });
}

function saveProjects(value: AdminProject[]) {
  const current = loadSiteContent();
  saveSiteContent({ ...current, projects: value });
}

export function AdminContentManager() {
  const initial = useMemo(() => loadSiteContent(), []);
  const [announcements, setAnnouncements] = useState(initial.announcements);
  const [services, setServices] = useState(initial.services);
  const [projects, setProjects] = useState(initial.projects);

  const handleAddAnnouncement = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const title = formData.get('title');
    const text = formData.get('text');

    if (typeof title !== 'string' || typeof text !== 'string') {
      return;
    }

    const next = [{ id: createContentId(), title, text }, ...announcements];
    setAnnouncements(next);
    saveAnnouncements(next);
    event.currentTarget.reset();
  };

  const handleAddService = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const title = formData.get('title');
    const description = formData.get('description');
    const price = formData.get('price');

    if (typeof title !== 'string' || typeof description !== 'string' || typeof price !== 'string') {
      return;
    }

    const next = [{ id: createContentId(), title, description, price }, ...services];
    setServices(next);
    saveServices(next);
    event.currentTarget.reset();
  };

  const handleAddProject = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const title = formData.get('title');
    const type = formData.get('type');
    const summary = formData.get('summary');

    if (typeof title !== 'string' || typeof type !== 'string' || typeof summary !== 'string') {
      return;
    }

    const next = [{ id: createContentId(), title, type, summary }, ...projects];
    setProjects(next);
    saveProjects(next);
    event.currentTarget.reset();
  };

  return (
    <div className="space-y-8">
      <section className="rounded-soft border border-line p-6">
        <h3 className="text-xl">Добавить анонс на главную</h3>
        <form onSubmit={handleAddAnnouncement} className="mt-4 grid gap-3 md:grid-cols-2">
          <input required name="title" placeholder="Заголовок" className="rounded-pill border border-line px-4 py-3" />
          <input required name="text" placeholder="Текст анонса" className="rounded-pill border border-line px-4 py-3" />
          <button type="submit" className="pill-btn w-fit bg-ink text-canvas">Добавить анонс</button>
        </form>
        <ul className="mt-4 space-y-2 text-sm text-stone">
          {announcements.map((item) => (
            <li key={item.id} className="flex items-center justify-between rounded-soft border border-line p-3">
              <span>{item.title}</span>
              <button
                type="button"
                className="text-sm underline"
                onClick={() => {
                  const next = announcements.filter((current) => current.id !== item.id);
                  setAnnouncements(next);
                  saveAnnouncements(next);
                }}
              >
                Удалить
              </button>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-soft border border-line p-6">
        <h3 className="text-xl">Добавить услугу</h3>
        <form onSubmit={handleAddService} className="mt-4 grid gap-3 md:grid-cols-2">
          <input required name="title" placeholder="Название услуги" className="rounded-pill border border-line px-4 py-3" />
          <input required name="price" placeholder="Цена (например: от 120 000 ₽)" className="rounded-pill border border-line px-4 py-3" />
          <input required name="description" placeholder="Краткое описание" className="rounded-pill border border-line px-4 py-3 md:col-span-2" />
          <button type="submit" className="pill-btn w-fit bg-ink text-canvas">Добавить услугу</button>
        </form>
        <ul className="mt-4 space-y-2 text-sm text-stone">
          {services.map((item) => (
            <li key={item.id} className="flex items-center justify-between rounded-soft border border-line p-3">
              <span>{item.title}</span>
              <button
                type="button"
                className="text-sm underline"
                onClick={() => {
                  const next = services.filter((current) => current.id !== item.id);
                  setServices(next);
                  saveServices(next);
                }}
              >
                Удалить
              </button>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-soft border border-line p-6">
        <h3 className="text-xl">Добавить проект в портфолио</h3>
        <form onSubmit={handleAddProject} className="mt-4 grid gap-3 md:grid-cols-2">
          <input required name="title" placeholder="Название проекта" className="rounded-pill border border-line px-4 py-3" />
          <input required name="type" placeholder="Тип проекта" className="rounded-pill border border-line px-4 py-3" />
          <input required name="summary" placeholder="Краткое описание" className="rounded-pill border border-line px-4 py-3 md:col-span-2" />
          <button type="submit" className="pill-btn w-fit bg-ink text-canvas">Добавить проект</button>
        </form>
        <ul className="mt-4 space-y-2 text-sm text-stone">
          {projects.map((item) => (
            <li key={item.id} className="flex items-center justify-between rounded-soft border border-line p-3">
              <span>{item.title}</span>
              <button
                type="button"
                className="text-sm underline"
                onClick={() => {
                  const next = projects.filter((current) => current.id !== item.id);
                  setProjects(next);
                  saveProjects(next);
                }}
              >
                Удалить
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
