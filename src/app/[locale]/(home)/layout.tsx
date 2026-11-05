import { getTranslations } from 'next-intl/server'
import type { Metadata } from 'next'
import JsonLd from '@/components/seo/JsonLd'
import {
  PERSON_ID,
  asLocale,
  breadcrumbNode,
  buildMetadata,
  graph,
  pageUrl,
  webPageNode,
} from '@/lib/seo'

type Props = { params: Promise<{ locale: string }> }

const FAQ_KEYS = ['remote', 'stack', 'redesign', 'languages', 'timing', 'support'] as const
const HELP_KEYS = ['newSite', 'redesign', 'migration', 'multilang', 'ecommerce', 'care'] as const

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = asLocale((await params).locale)
  const t = await getTranslations({ locale, namespace: 'metadata.home' })
  return buildMetadata({ page: 'home', locale, title: t('title'), description: t('description') })
}

export default async function HomeLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode }> & Props) {
  const locale = asLocale((await params).locale)
  const meta = await getTranslations({ locale, namespace: 'metadata.home' })
  const faq = await getTranslations({ locale, namespace: 'homeSections.faq' })
  const help = await getTranslations({ locale, namespace: 'homeSections.help' })
  const home = pageUrl('home', locale)

  const data = graph(
    webPageNode({
      locale,
      page: 'home',
      type: ['WebPage', 'ProfilePage'],
      name: meta('title'),
      description: meta('description'),
    }),
    breadcrumbNode(locale, 'home', meta('title')),
    // AEO: the same questions and answers the visitor reads in the FAQ section.
    {
      '@type': 'FAQPage',
      '@id': `${home}#faq`,
      inLanguage: locale,
      isPartOf: { '@id': `${home}#webpage` },
      mainEntity: FAQ_KEYS.map((k) => ({
        '@type': 'Question',
        name: faq(`items.${k}.q`),
        acceptedAnswer: { '@type': 'Answer', text: faq(`items.${k}.a`) },
      })),
    },
    // What he offers, as services provided by the same Person entity.
    {
      '@type': 'OfferCatalog',
      '@id': `${home}#services`,
      name: help('title'),
      itemListElement: HELP_KEYS.map((k) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: help(`items.${k}.title`),
          description: help(`items.${k}.body`),
          provider: { '@id': PERSON_ID },
          areaServed: 'Worldwide',
          availableLanguage: ['es', 'en'],
        },
      })),
    },
  )

  return (
    <>
      <JsonLd data={data} />
      {children}
    </>
  )
}
