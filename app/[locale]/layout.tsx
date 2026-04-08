import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';
import Script from 'next/script';
import { Analytics } from "@vercel/analytics/next";
import { NextIntlClientProvider } from 'next-intl';

import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n/config';
import Header from '../components/Header';
import "../globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  variable: '--font-poppins',
  style: ["italic", "normal"],
  subsets: ["latin", "latin-ext"]
});

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    metadataBase: new URL('https://desmotiva.dev'),
    title: t('title'),
    description: t('description'),
    keywords: t('keywords').split(', '),
    authors: [{ name: "@deveprogramar" }],
    creator: "@deveprogramar",
    publisher: "Desmotiva Dev",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale: locale === 'pt' ? 'pt_BR' : 'en_US',
      url: 'https://desmotiva.dev',
      siteName: 'Desmotiva Dev',
      title: t('ogTitle'),
      description: t('ogDescription'),
      images: [
        {
          url: '/logo-rosto-desmotiva.dev.png',
          width: 1200,
          height: 630,
          alt: t('ogImageAlt'),
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('twitterTitle'),
      description: t('twitterDescription'),
      creator: '@deveprogramar',
      images: ['/logo-rosto-desmotiva.dev.png'],
    },
    alternates: {
      canonical: 'https://desmotiva.dev',
      languages: {
        'en': 'https://desmotiva.dev/en',
        'pt': 'https://desmotiva.dev',
      },
    },
    category: 'technology',
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <GoogleAnalytics gaId="G-TVJ6B98YGD" />
      {/* Google AdSense */}
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2481190522332368"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
      <Script id="adsense-init" strategy="afterInteractive">
        {`
          if (!window.adsbygoogle) {
            window.adsbygoogle = [];
          }
          if (!window.adsbygoogle_initialized) {
            window.adsbygoogle.push({
              google_ad_client: "ca-pub-2481190522332368",
              enable_page_level_ads: true
            });
            window.adsbygoogle_initialized = true;
          }
        `}
      </Script>
      <body className={`${poppins.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <div className="pt-16">
            {children}
          </div>
        </NextIntlClientProvider>
      </body>
      <Analytics />
    </html>
  );
}
