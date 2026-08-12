import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "@/app/globals.css";
import { COMPANY } from "@/lib/constants";
import { siteConfig } from "@/config/siteConfig";
import { StructuredData } from "@/components/common/StructuredData";
import { generateOrganizationSchema, generateLocalBusinessSchema } from "@/lib/seo";

// ─── Fonts ────────────────────────────────────────────────────────────────────

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  preload: true,
  weight: ["400", "500", "600", "700", "800"],
});

// ─── Viewport ─────────────────────────────────────────────────────────────────

export const viewport: Viewport = {
  themeColor: "#0B162C",
  width: "device-width",
  initialScale: 1,
};

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    template: `%s | ${COMPANY.name}`,
    default: `${COMPANY.name} — ${COMPANY.tagline}`,
  },
  description: COMPANY.description,
  keywords: [
    "Apex C&P",
    "construction Nigeria",
    "real estate Lagos",
    "interior design Nigeria",
    "procurement Nigeria",
    "logistics Nigeria",
    "technology solutions Nigeria",
    "multidisciplinary company Nigeria",
    "construction company Lagos",
  ],
  authors: [{ name: COMPANY.name, url: COMPANY.website }],
  creator: COMPANY.name,
  publisher: COMPANY.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: COMPANY.website,
    siteName: COMPANY.name,
    title: `${COMPANY.name} — ${COMPANY.tagline}`,
    description: COMPANY.description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${COMPANY.name} — ${COMPANY.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY.name} — ${COMPANY.tagline}`,
    description: COMPANY.description,
    images: ["/og-image.png"],
    creator: "@apexcandp",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  manifest: "/site.webmanifest",
};

// ─── Root Layout ──────────────────────────────────────────────────────────────

interface RootLayoutProps {
  children: React.ReactNode;
}

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="antialiased text-text-primary bg-background">
        <StructuredData data={generateOrganizationSchema()} />
        <StructuredData data={generateLocalBusinessSchema()} />
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 flex flex-col">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
