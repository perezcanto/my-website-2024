import { getTranslations } from 'next-intl/server'
import type { Metadata } from 'next'
import HomeSchema from '@/meta-schema/HomeSchema'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'metadata.home' })

  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      images: [
        { url: `${process.env.APP_URL}/images/hero.png`, width: 800, height: 600 }
      ]
    },
    twitter: {
      images: [
        { url: `${process.env.APP_URL}/images/hero.png`, width: 800, height: 600 }
      ]
    },
    alternates: {
      canonical: `https://www.perez-canto.com/${locale}`,
      languages: {
        en: 'https://www.perez-canto.com/en',
        es: 'https://www.perez-canto.com/es'
      }
    },
    robots: { index: true, follow: true }
  }
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <HomeSchema />
      {children}
    </>
  )
}
