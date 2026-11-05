import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/seo'

// Search engines and AI answer engines are explicitly welcome: being read, cited and
// recommended by ChatGPT, Claude, Perplexity, Gemini or Copilot is the point (GEO/AEO).
const AI_CRAWLERS = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  'anthropic-ai',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Applebot-Extended',
  'Bingbot',
  'CCBot',
  'meta-externalagent',
  'DuckAssistBot',
  'cohere-ai',
]

// Thank-you pages are kept out of the index with `noindex`, which crawlers must be allowed to read.
const PRIVATE = ['/api/']

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: PRIVATE },
      { userAgent: AI_CRAWLERS, allow: '/', disallow: PRIVATE },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
