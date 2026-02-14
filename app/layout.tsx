import type { Metadata } from "next";
import { Manrope, Syne } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
});

const siteName = "Kayo Badger";
const siteDescription =
  "Kayo Badger builds practical AI software solutions and TabFlux, an academic platform for bachelor students.";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://kayobadger.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${siteName} | AI Solutions`,
  description: siteDescription,
  applicationName: siteName,
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Kayo Badger",
    "AI solutions",
    "software company",
    "TabFlux",
    "tabflux.com",
    "academic platform",
    "bachelor students",
    "study planner",
    "assignment tracker",
    "web app development",
    "mobile app development",
    "automation workflows",
    "LLM integration",
  ],
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: `${siteName} | AI Solutions`,
    description: siteDescription,
    url: "/",
    siteName,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/logo.png",
        width: 870,
        height: 780,
        alt: "Kayo Badger logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | AI Solutions`,
    description: siteDescription,
    images: ["/logo.png"],
  },
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${manrope.variable} ${syne.variable}`}>
      <body>{children}</body>
    </html>
  );
}
