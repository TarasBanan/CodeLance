import { cookies } from 'next/headers';

export type Lang = 'en' | 'ru';

export function getLang(): Lang {
  const value = cookies().get('site-lang')?.value;
  return value === 'ru' ? 'ru' : 'en';
}

export function tr(lang: Lang, en: string, ru: string) {
  return lang === 'ru' ? 'ru' : 'en';
}

const serviceEn: Record<string, { title: string; shortDescription: string }> = {
  'corporate-websites': { title: 'Corporate Websites', shortDescription: 'Company websites focused on positioning and lead generation.' },
  'landing-pages': { title: 'Landing Pages', shortDescription: 'Conversion-oriented pages for paid traffic and campaigns.' },
  ecommerce: { title: 'E-commerce Stores', shortDescription: 'Online stores with catalog, payments, shipping, and CRM sync.' },
  'web-apps': { title: 'Web Applications', shortDescription: 'Dashboards, internal tools, and customer-facing portals.' },
  'mobile-apps': { title: 'Mobile Applications', shortDescription: 'iOS/Android apps with product-grade UX.' },
  'crm-erp': { title: 'CRM & ERP Systems', shortDescription: 'Sales, service, and operations automation platforms.' },
  'ui-ux': { title: 'UI/UX Design', shortDescription: 'Research, prototyping, and scalable design systems.' },
  backend: { title: 'Backend Development', shortDescription: 'Reliable APIs and domain logic for scalable products.' },
  frontend: { title: 'Frontend Development', shortDescription: 'Fast, accessible interfaces with maintainable architecture.' },
  integrations: { title: 'API Integrations', shortDescription: 'Payments, CRM, telephony, and third-party system integrations.' },
  'devops-hosting': { title: 'DevOps & Hosting', shortDescription: 'CI/CD, cloud infrastructure, security, and monitoring.' },
  support: { title: 'Technical Support', shortDescription: 'Post-launch support, incident response, and SLA operations.' }
};

const projectEn: Record<string, { title: string; type: string; summary: string }> = {
  'electronics-store': { title: 'Electronics E-commerce Store', type: 'E-commerce', summary: 'Online retail platform with filtering, payments, and CRM sync.' },
  'construction-crm': { title: 'CRM for Construction Company', type: 'CRM', summary: 'Sales pipeline, operations board, and KPI reporting system.' },
  'saas-landing': { title: 'Landing Page for SaaS Product', type: 'Landing', summary: 'Conversion-driven landing with analytics and A/B readiness.' },
  'delivery-mobile': { title: 'Food Delivery Mobile App', type: 'Mobile', summary: 'Mobile ordering app with geotracking and loyalty mechanics.' },
  'hosting-cabinet': { title: 'Hosting Provider Client Area', type: 'SaaS Platform', summary: 'Self-service account with billing, tickets, and VPS controls.' },
  'law-firm-site': { title: 'Law Firm Corporate Website', type: 'Corporate', summary: 'Lead-focused website with practices, case studies, and contact intake.' }
};

export function serviceText(lang: Lang, slug: string, ruTitle: string, ruDescription: string) {
  const en = serviceEn[slug];
  if (!en) {
    return { title: ruTitle, shortDescription: ruDescription };
  }

  return lang === 'ru'
    ? { title: ruTitle, shortDescription: ruDescription }
    : { title: en.title, shortDescription: en.shortDescription };
}

export function projectText(lang: Lang, slug: string, ruTitle: string, ruType: string, ruSummary: string) {
  const en = projectEn[slug];
  if (!en) {
    return { title: ruTitle, type: ruType, summary: ruSummary };
  }

  return lang === 'ru'
    ? { title: ruTitle, type: ruType, summary: ruSummary }
    : { title: en.title, type: en.type, summary: en.summary };
}
