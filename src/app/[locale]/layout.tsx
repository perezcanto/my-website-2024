import { Geist, Space_Grotesk } from "next/font/google";
import type { Metadata, Viewport } from "next";
import { Favicon, ProgressBarWrapper, RootLayout } from "@/components";
import "./globals.css";
import { Toaster } from "sonner";
import { GoogleAnalytics } from '@next/third-parties/google'
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from '@/i18n/routing';
import JsonLd from "@/components/seo/JsonLd";
import { PERSON, ROLE, SITE_URL, asLocale, graph, personNode, websiteNode } from "@/lib/seo";

const fontTitle = Space_Grotesk({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-title",
});

const fontBody = Geist({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = asLocale((await params).locale);
  const fallback = `${PERSON.name} – ${ROLE[locale]}`;
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: fallback, template: `%s` },
    applicationName: PERSON.name,
    authors: [{ name: PERSON.name, url: SITE_URL }],
    creator: PERSON.name,
    publisher: PERSON.name,
    category: 'technology',
    formatDetection: { email: false, telephone: false, address: false },
    robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  };
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
} & Props) {
  const { locale: rawLocale } = await params;

  if (!routing.locales.includes(rawLocale as any)) {
    notFound();
  }
  const locale = asLocale(rawLocale);
  // The disabled portfolio's copy (client projects) is never shipped to the browser.
  const { showcase: _showcase, Portfolio: _portfolio, ...messages } = await getMessages();
  return (
    <html lang={locale} className={`${fontTitle.variable} ${fontBody.className} h-full bg-neutral-950 text-base antialiased`}>
      <head>
        <Favicon />
        {/* Site-wide identity: one Person + one WebSite every page points to by @id. */}
        <JsonLd data={graph(personNode(locale), websiteNode(locale))} />
      </head>
      <body className="flex min-h-full flex-col">
        <NextIntlClientProvider messages={messages}>
          <Toaster position="top-center" />
          <ProgressBarWrapper>
            <RootLayout>{children}</RootLayout>
          </ProgressBarWrapper>
        </NextIntlClientProvider>
      </body>
      <GoogleAnalytics gaId="G-3Q0ZWYKKC7" />
    </html>
  );
}
