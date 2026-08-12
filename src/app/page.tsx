import type { Metadata } from "next";
import { COMPANY } from "@/lib/constants";
import { Hero } from "@/components/sections/Hero";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Industries } from "@/components/sections/Industries";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: `${COMPANY.name} — ${COMPANY.tagline}`,
  description: COMPANY.description,
  alternates: {
    canonical: COMPANY.website,
  },
  openGraph: {
    title: `${COMPANY.name} — ${COMPANY.tagline}`,
    description: COMPANY.description,
    url: COMPANY.website,
    siteName: COMPANY.name,
    images: [
      {
        url: "/images/hero-construction.jpg", // Using Hero image as OG image
        width: 1200,
        height: 630,
        alt: `${COMPANY.name} — ${COMPANY.tagline}`,
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY.name} — ${COMPANY.tagline}`,
    description: COMPANY.description,
    images: ["/images/hero-construction.jpg"],
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ServicesOverview />
      <WhyChooseUs />
      <Industries />
      <FeaturedProjects />
      <CTASection />
    </>
  );
}
