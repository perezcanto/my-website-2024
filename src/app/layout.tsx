import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import { SITE_URL } from '@/lib/seo'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
}

// `<html>` and `<body>` live in app/[locale]/layout.tsx so `lang` matches the locale.
// Rendering them here as well nested two documents and caused a hydration mismatch.
export default function RootLayout({ children }: { children: ReactNode }) {
  return children
}
