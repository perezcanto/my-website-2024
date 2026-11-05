import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { ContactSchema } from '@/components'
import JsonLd from '@/components/seo/JsonLd'
import { asLocale, breadcrumbNode, buildMetadata, graph } from '@/lib/seo'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = asLocale((await params).locale)
  const t = await getTranslations({ locale, namespace: 'metadata.contact' })
  return buildMetadata({ page: 'contact', locale, title: t('title'), description: t('description') })
}

export default async function ContactLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode }> & Props) {
  const locale = asLocale((await params).locale)
  const nav = await getTranslations({ locale, namespace: 'navigation' })

  return (
    <>
      <JsonLd data={graph(breadcrumbNode(locale, 'contact', nav('contact')))} />
      <ContactSchema />
      {children}
    </>
  )
}
