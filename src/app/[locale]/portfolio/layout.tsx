import type { Metadata } from 'next'

// The portfolio page is disabled (its page.tsx redirects home). Keep it out of the index
// until it is back; the projects now live in the "Selected work" section of the home page.
export const metadata: Metadata = {
  robots: { index: false, follow: true },
}

export default function PortfolioLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>
}
