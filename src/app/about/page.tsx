import type { Metadata } from "next";
import { COMPANY } from "@/lib/constants";
import { PageHero } from "@/components/common/PageHero";
import { CompanyStory } from "@/components/sections/about/CompanyStory";
import { MissionVision } from "@/components/sections/about/MissionVision";
import { CoreValues } from "@/components/sections/about/CoreValues";
import { WhyApex } from "@/components/sections/about/WhyApex";
import { AboutCTA } from "@/components/sections/about/AboutCTA";

const pageTitle = `About Us — ${COMPANY.name}`;
const pageDescription = "Learn about Apex C&P Ltd, a premier Nigerian multidisciplinary organization delivering Construction, Interior Design, Procurement, Logistics, and Technology solutions.";
const pageImage = "/images/interior-office.jpg"; // Professional corporate background

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: `${COMPANY.website}/about`,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: `${COMPANY.website}/about`,
    siteName: COMPANY.name,
    images: [
      {
        url: pageImage,
        width: 1200,
        height: 630,
        alt: `About ${COMPANY.name}`,
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [pageImage],
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Apex C&P Ltd."
        subtitle="A legacy of excellence and integrated multidisciplinary solutions."
        imageUrl="/images/interior-office.jpg"
        imageAlt="Modern corporate architecture"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
      />
      <CompanyStory />
      <MissionVision />
      <CoreValues />
      <WhyApex />
      <AboutCTA />
    </>
  );
}
