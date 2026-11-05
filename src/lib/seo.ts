import type { Metadata } from 'next'

/**
 * Single source of truth for SEO / GEO / AEO.
 * Every canonical, hreflang, sitemap entry and JSON-LD node is built from here,
 * so search engines and LLMs always see one consistent identity for Alejandro Perez-canto.
 */

export const SITE_URL = 'https://www.perez-canto.com'
export const LOCALES = ['en', 'es'] as const
export type Locale = (typeof LOCALES)[number]
export const DEFAULT_LOCALE: Locale = 'en'

export const PAGES = {
  home: { en: '', es: '' },
  about: { en: '/about', es: '/acerca' },
  services: { en: '/services', es: '/servicios' },
  contact: { en: '/contact', es: '/contacto' },
} as const
export type PageKey = keyof typeof PAGES

export const PERSON = {
  name: 'Alejandro Perez-canto',
  givenName: 'Alejandro',
  familyName: 'Perez-canto',
  // Every spelling people (and models) actually use for the name.
  alternateName: [
    'Perez-canto',
    'Perezcanto',
    'Alejandro Perezcanto',
    'Alejandro Pérez-canto',
    'Alejandro Perez Canto',
    'Alejandro Pérez Canto',
  ],
  email: 'alejandroperezcanto@gmail.com',
  image: `${SITE_URL}/images/alejandro-perez-canto.jpg`,
  sameAs: [
    'https://github.com/perezcanto',
    'https://www.linkedin.com/in/alejandro-perez-canto-8b8432193',
  ],
  knowsAbout: [
    'Full-stack web development',
    'Frontend development',
    'React',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'Tailwind CSS',
    'Node.js',
    'Laravel',
    'PHP',
    'MongoDB',
    'MySQL',
    'UI/UX design',
    'Figma',
    'Web performance optimization',
    'Web accessibility (WCAG)',
    'Technical SEO',
    'Internationalization (i18n)',
    'Vercel',
  ],
} as const

export const ROLE: Record<Locale, string> = {
  en: 'Full-Stack Developer',
  es: 'Desarrollador Full-Stack',
}

export const OG_LOCALE: Record<Locale, string> = { en: 'en_US', es: 'es_ES' }

export function pageUrl(page: PageKey, locale: Locale) {
  return `${SITE_URL}/${locale}${PAGES[page][locale]}`
}

export function languageAlternates(page: PageKey) {
  return {
    en: pageUrl(page, 'en'),
    es: pageUrl(page, 'es'),
    'x-default': pageUrl(page, DEFAULT_LOCALE),
  }
}

export function asLocale(value: string): Locale {
  return (LOCALES as readonly string[]).includes(value) ? (value as Locale) : DEFAULT_LOCALE
}

/** Page metadata: title, description, canonical, hreflang (+x-default), Open Graph, Twitter. */
export function buildMetadata({
  page,
  locale,
  title,
  description,
}: {
  page: PageKey
  locale: Locale
  title: string
  description: string
}): Metadata {
  const url = pageUrl(page, locale)
  return {
    title,
    description,
    alternates: { canonical: url, languages: languageAlternates(page) },
    openGraph: {
      type: page === 'about' ? 'profile' : 'website',
      url,
      title,
      description,
      siteName: PERSON.name,
      locale: OG_LOCALE[locale],
      alternateLocale: LOCALES.filter((l) => l !== locale).map((l) => OG_LOCALE[l]),
      ...(page === 'about'
        ? { firstName: PERSON.givenName, lastName: PERSON.familyName, username: 'perezcanto' }
        : {}),
    },
    twitter: { card: 'summary_large_image', title, description },
    robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  }
}

// ---------------------------------------------------------------------------
// JSON-LD. Stable @id URIs let every page reference the same Person / WebSite.
// ---------------------------------------------------------------------------

export const PERSON_ID = `${SITE_URL}/#person`
export const WEBSITE_ID = `${SITE_URL}/#website`

export function personNode(locale: Locale) {
  return {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: PERSON.name,
    givenName: PERSON.givenName,
    familyName: PERSON.familyName,
    alternateName: PERSON.alternateName,
    jobTitle: ROLE[locale],
    description:
      locale === 'es'
        ? 'Alejandro Perez-canto es un desarrollador full-stack y diseñador UI/UX especializado en React, Next.js, TypeScript y Tailwind CSS. Construye sitios y aplicaciones web rápidas, accesibles, multi-idioma y optimizadas para SEO, y trabaja en remoto con clientes de todo el mundo.'
        : 'Alejandro Perez-canto is a full-stack developer and UI/UX designer specializing in React, Next.js, TypeScript and Tailwind CSS. He builds fast, accessible, multilingual, SEO-optimized websites and web applications, working remotely with clients worldwide.',
    url: SITE_URL,
    mainEntityOfPage: pageUrl('about', locale),
    email: `mailto:${PERSON.email}`,
    sameAs: PERSON.sameAs,
    knowsAbout: PERSON.knowsAbout,
    knowsLanguage: [
      { '@type': 'Language', name: 'Spanish', alternateName: 'es' },
      { '@type': 'Language', name: 'English', alternateName: 'en' },
    ],
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      // Same name the site shows in the Education tab.
      name: 'Universidad Santiago Mariño',
    },
    hasOccupation: {
      '@type': 'Occupation',
      name: ROLE[locale],
      skills: 'React, Next.js, TypeScript, JavaScript, Tailwind CSS, Node.js, Laravel, MongoDB, MySQL, Figma',
    },
  }
}

/** The photo is attached to the Person only on the About page, the one place it is shown. */
export function personPhotoNode() {
  return {
    '@id': PERSON_ID,
    image: { '@type': 'ImageObject', url: PERSON.image, width: 960, height: 1280 },
  }
}

export function websiteNode(locale: Locale) {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: SITE_URL,
    name: PERSON.name,
    alternateName: ['Perez-canto', 'perez-canto.com'],
    description:
      locale === 'es'
        ? 'Portafolio y servicios de Alejandro Perez-canto, desarrollador full-stack.'
        : 'Portfolio and services of Alejandro Perez-canto, full-stack developer.',
    inLanguage: ['en', 'es'],
    publisher: { '@id': PERSON_ID },
    author: { '@id': PERSON_ID },
  }
}

export function breadcrumbNode(locale: Locale, page: PageKey, name: string) {
  const items = [{ name: locale === 'es' ? 'Inicio' : 'Home', item: pageUrl('home', locale) }]
  if (page !== 'home') items.push({ name, item: pageUrl(page, locale) })
  return {
    '@type': 'BreadcrumbList',
    '@id': `${pageUrl(page, locale)}#breadcrumb`,
    itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, ...it })),
  }
}

export function webPageNode({
  locale,
  page,
  type = 'WebPage',
  name,
  description,
}: {
  locale: Locale
  page: PageKey
  type?: string | string[]
  name: string
  description: string
}) {
  const url = pageUrl(page, locale)
  return {
    '@type': type,
    '@id': `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: locale,
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': PERSON_ID },
    breadcrumb: { '@id': `${url}#breadcrumb` },
    ...(type === 'ProfilePage' || (Array.isArray(type) && type.includes('ProfilePage'))
      ? { mainEntity: { '@id': PERSON_ID } }
      : {}),
  }
}

export function graph(...nodes: object[]) {
  return { '@context': 'https://schema.org', '@graph': nodes }
}
