import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { ServicesSchema } from '@/components'
import JsonLd from '@/components/seo/JsonLd'
import { asLocale, breadcrumbNode, buildMetadata, graph, webPageNode } from '@/lib/seo'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = asLocale((await params).locale)
  const t = await getTranslations({ locale, namespace: 'metadata.services' })
  return buildMetadata({ page: 'services', locale, title: t('title'), description: t('description') })
}

export default async function ServicesLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode }> & Props) {
  const locale = asLocale((await params).locale)
  const t = await getTranslations({ locale, namespace: 'metadata.services' })
  const nav = await getTranslations({ locale, namespace: 'navigation' })

  return (
    <>
      <JsonLd
        data={graph(
          webPageNode({ locale, page: 'services', name: t('title'), description: t('description') }),
          breadcrumbNode(locale, 'services', nav('services')),
        )}
      />
      <ServicesSchema />
      {children}
    </>
  )
}
