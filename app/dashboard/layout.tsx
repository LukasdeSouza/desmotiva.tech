import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics } from "@vercel/analytics/next";
import "../../globals.css";

const poppins = Poppins({
    weight: ["300", "400", "500", "600", "700"],
    variable: '--font-poppins',
    style: ["italic", "normal"],
    subsets: ["latin", "latin-ext"]
});

export const metadata: Metadata = {
    title: "Dashboard - Desmotiva Dev",
    description: "Seu painel de desmotivação.",
};

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br">
            <head>
                <GoogleAnalytics gaId="G-TVJ6B98YGD" />
            </head>
            <body className={`${poppins.variable} antialiased`}>
                {children}
                <Analytics />
            </body>
        </html>
    );
}
