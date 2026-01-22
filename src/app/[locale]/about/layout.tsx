import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { AboutSchema } from '@/components'

type Props = {
  params: Promise<{ locale: string }>
}


export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'metadata.about' })
  
  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    
    openGraph: {
      title: t("title"),
      description: t("description"),
      images: [
        {
          url: `${process.env.APP_URL}/images/hero.png`,
          width: 800,
          height: 600,
        },
      ],
    },
    twitter: {
      images: [
        {
          url: `${process.env.APP_URL}/images/hero.png`,
          width: 800,
          height: 600,
        },
      ],
    },
    alternates: {
      canonical: `https://www.perez-canto.com/${locale}/about`,
      languages: {
        'en': 'https://www.perez-canto.com/en/about',
        'es': 'https://www.perez-canto.com/es/acerca',
      },
    },
    robots: { index: true, follow: true }
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AboutSchema />
      {children}
    </>
  )
}
