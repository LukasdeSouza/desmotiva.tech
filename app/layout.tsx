import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  variable: '--font-poppins',
  style: ["italic", "normal"],
  subsets: ["latin", "latin-ext"]
});


export const metadata: Metadata = {
  title: "Desmotiva Dev - Sua dose diária de desmotivação para desenvolvedores",
  description: "Receba frases desmotivacionais hilariantes sobre programação, desenvolvimento de software e carreira tech. O site que todo desenvolvedor precisa para uma realidade check diária.",
  keywords: [
    "desmotivação",
    "desenvolvedor",
    "programador",
    "frases engraçadas",
    "humor tech",
    "programação",
    "desenvolvimento",
    "carreira tech",
    "memes programação",
    "piadas desenvolvedor",
    "realidade check",
    "daily",
    "squad",
    "tech humor",
    "código ruim",
    "bugs",
    "pull request",
    "git",
    "javascript",
    "python",
    "react",
    "node"
  ],
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
    locale: 'pt_BR',
    url: 'https://desmotiva.dev',
    siteName: 'Desmotiva Dev',
    title: 'Desmotiva Dev - Sua dose diária de desmotivação para desenvolvedores',
    description: 'Frases desmotivacionais hilariantes sobre programação e desenvolvimento. O site que todo dev precisa para uma realidade check.',
    images: [
      {
        url: '/logo-rosto-desmotiva.dev.png',
        width: 1200,
        height: 630,
        alt: 'Desmotiva Dev - Humor para desenvolvedores',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Desmotiva Dev - Sua dose diária de desmotivação para desenvolvedores',
    description: 'Frases desmotivacionais hilariantes sobre programação e desenvolvimento. O site que todo dev precisa para uma realidade check.',
    creator: '@deveprogramar',
    images: ['/logo-rosto-desmotiva.dev.png'],
  },
  alternates: {
    canonical: 'https://desmotiva.dev',
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
