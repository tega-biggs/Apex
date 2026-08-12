import type { Metadata } from "next";
import { SERVICE_DETAILS, COMPANY } from "@/lib/constants";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";
import { notFound } from "next/navigation";

const SLUG = "construction-real-estate";
const serviceData = SERVICE_DETAILS[SLUG];

export const metadata: Metadata = {
  title: serviceData.metaTitle,
  description: serviceData.metaDescription,
  alternates: {
    canonical: `${COMPANY.website}/services/${SLUG}`,
  },
  openGraph: {
    title: serviceData.metaTitle,
    description: serviceData.metaDescription,
    url: `${COMPANY.website}/services/${SLUG}`,
    siteName: COMPANY.name,
    images: [
      {
        url: serviceData.heroImage,
        width: 1200,
        height: 630,
        alt: serviceData.heroImageAlt,
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: serviceData.metaTitle,
    description: serviceData.metaDescription,
    images: [serviceData.heroImage],
  },
};

export default function ConstructionPage() {
  if (!serviceData) return notFound();
  
  return <ServicePageTemplate data={serviceData} />;
}
