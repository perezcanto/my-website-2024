import type { ReactNode } from 'react'
import { Metadata } from 'next'
import ProgressBarWrapper from '@/components/shared/ProgressBarWrapper'

export const metadata: Metadata = {
  robots: {
    index: true,
    follow: true
  },
  metadataBase: new URL('https://perez-canto.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en': '/en',
      'es': '/es'
    },
  }
}

export default async function RootLayout({
  children,
  params
}: {
  children: ReactNode
  params: Promise<{ locale: 'en' | 'es' }>
}) {
  const { locale } = await params

  return (
    <html lang={locale}>
      <body>
        <ProgressBarWrapper>
          {children}
        </ProgressBarWrapper>
      </body>
    </html>
  )
}
