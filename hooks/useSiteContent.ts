'use client';

import { useEffect, useState } from 'react';

export type AdminAnnouncement = {
  id: string;
  title: string;
  text: string;
};

export type AdminService = {
  id: string;
  title: string;
  description: string;
  price: string;
};

export type AdminProject = {
  id: string;
  title: string;
  type: string;
  summary: string;
};

type SiteContent = {
  announcements: AdminAnnouncement[];
  services: AdminService[];
  projects: AdminProject[];
};

const STORAGE_KEY = 'codelance-admin-content-v1';

const EMPTY_CONTENT: SiteContent = {
  announcements: [],
  services: [],
  projects: []
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

function readString(record: Record<string, unknown>, key: string): string | null {
  const value = record[key];
  return typeof value === 'string' ? value : null;
}

function isAnnouncement(value: unknown): value is AdminAnnouncement {
  if (!isRecord(value)) {
    return false;
  }

  const id = readString(value, 'id');
  const title = readString(value, 'title');
  const text = readString(value, 'text');
  return id !== null && title !== null && text !== null;
}

function isService(value: unknown): value is AdminService {
  if (!isRecord(value)) {
    return false;
  }

  const id = readString(value, 'id');
  const title = readString(value, 'title');
  const description = readString(value, 'description');
  const price = readString(value, 'price');
  return id !== null && title !== null && description !== null && price !== null;
}

function isProject(value: unknown): value is AdminProject {
  if (!isRecord(value)) {
    return false;
  }

  const id = readString(value, 'id');
  const title = readString(value, 'title');
  const type = readString(value, 'type');
  const summary = readString(value, 'summary');
  return id !== null && title !== null && type !== null && summary !== null;
}

function parseContent(raw: string | null): SiteContent {
  if (!raw) {
    return EMPTY_CONTENT;
  }

  try {
    const parsed: unknown = JSON.parse(raw);
    if (!isRecord(parsed)) {
      return EMPTY_CONTENT;
    }

    const announcementsRaw = parsed.announcements;
    const servicesRaw = parsed.services;
    const projectsRaw = parsed.projects;

    const announcements = Array.isArray(announcementsRaw) ? announcementsRaw.filter(isAnnouncement) : [];
    const services = Array.isArray(servicesRaw) ? servicesRaw.filter(isService) : [];
    const projects = Array.isArray(projectsRaw) ? projectsRaw.filter(isProject) : [];

    return { announcements, services, projects };
  } catch {
    return EMPTY_CONTENT;
  }
}

export function saveSiteContent(content: SiteContent) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
}

export function loadSiteContent() {
  return parseContent(localStorage.getItem(STORAGE_KEY));
}

export function useSiteContent() {
  const [content, setContent] = useState<SiteContent>(EMPTY_CONTENT);

  useEffect(() => {
    setContent(loadSiteContent());
  }, []);

  return content;
}

export function createContentId() {
  return `${Date.now()}-${Math.floor(Math.random() * 100000)}`;
}
