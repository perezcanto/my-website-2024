import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import JsonLd from '@/components/seo/JsonLd'
import { asLocale, breadcrumbNode, buildMetadata, graph, personPhotoNode, webPageNode } from '@/lib/seo'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = asLocale((await params).locale)
  const t = await getTranslations({ locale, namespace: 'metadata.about' })
  return buildMetadata({ page: 'about', locale, title: t('title'), description: t('description') })
}

export default async function AboutLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode }> & Props) {
  const locale = asLocale((await params).locale)
  const t = await getTranslations({ locale, namespace: 'metadata.about' })
  const nav = await getTranslations({ locale, namespace: 'navigation' })

  return (
    <>
      <JsonLd
        data={graph(
          webPageNode({
            locale,
            page: 'about',
            type: ['AboutPage', 'ProfilePage'],
            name: t('title'),
            description: t('description'),
          }),
          breadcrumbNode(locale, 'about', nav('about')),
          personPhotoNode(),
        )}
      />
      {children}
    </>
  )
}
