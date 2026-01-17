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
  title: "Desmotiva Tech  - Sua desmotivação diária na área de tecnologia",
  description: "receba diariamente mensagens de desmontivação para sua carreira como dev",
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
