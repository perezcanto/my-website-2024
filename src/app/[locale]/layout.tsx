import { Geist, Source_Sans_3, Space_Grotesk } from "next/font/google";
import { Favicon, ProgressBarWrapper, RootLayout } from "@/components";
import "./globals.css";
import { Toaster } from "sonner";
import { GoogleAnalytics } from '@next/third-parties/google'
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import {routing} from '@/i18n/routing';

const fontTitle = Space_Grotesk({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-title",
});

const fontBody = Geist({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});




export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  const locale = await params.locale;
  const t = await getTranslations({ locale, namespace: "metadata.not-found" });
  return {
    title: t("title"),
    description: t("description"),
    robots: {
      index: false,
      follow: true,
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      type: "website",
    },
    twitter: {
      card: "summary",
      title: t("title"),
      description: t("description"),
    },
  };
}



export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = await params.locale;
  
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  const messages = await getMessages();
  return (

    <html lang={locale} className={`${fontTitle.variable} ${fontBody.className} h-full bg-neutral-950 text-base antialiased`}>
      <head>
        <Favicon />
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