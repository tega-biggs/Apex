import type { Metadata } from "next";
import { COMPANY } from "@/lib/constants";

interface PageMetadataOptions {
  title: string;
  description: string;
  path?: string;
  image?: string;
  keywords?: string[];
}

/**
 * Generates consistent page-level metadata for all routes.
 * Ensures OG, Twitter, and canonical URLs are always set correctly.
 *
 * @example
 * export const metadata = generateMetadata({
 *   title: "About Us",
 *   description: "Learn about Apex C&P Ltd.",
 *   path: "/about",
 * });
 */
export function generateMetadata({
  title,
  description,
  path = "/",
  image = "/og-image.png",
  keywords = [],
}: PageMetadataOptions): Metadata {
  const url = `${COMPANY.website}${path}`;

  return {
    title,
    description,
    keywords: [
      "Apex C&P",
      "Nigeria",
      ...keywords,
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | ${COMPANY.name}`,
      description,
      url,
      images: [{ url: image, width: 1200, height: 630 }],
    },
    twitter: {
      title: `${title} | ${COMPANY.name}`,
      description,
      images: [image],
    },
  };
}
