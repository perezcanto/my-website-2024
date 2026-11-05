import type { MetadataRoute } from 'next'
import { LOCALES, PAGES, type PageKey, languageAlternates, pageUrl } from '@/lib/seo'

const PRIORITY: Record<PageKey, number> = { home: 1, about: 0.9, services: 0.8, contact: 0.7 }

// One entry per page and language, each listing its hreflang siblings (+ x-default).
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return (Object.keys(PAGES) as PageKey[]).flatMap((page) =>
    LOCALES.map((locale) => ({
      url: pageUrl(page, locale),
      lastModified,
      changeFrequency: page === 'home' ? 'weekly' : 'monthly',
      priority: PRIORITY[page],
      alternates: { languages: languageAlternates(page) },
    })),
  )
}
