import type { Metadata } from "next";
import { COMPANY } from "@/lib/constants";
import { PageHero } from "@/components/common/PageHero";
import { PageIntro } from "@/components/common/PageIntro";
import { ServicesGrid } from "@/components/sections/services/ServicesGrid";
import { WhyApex } from "@/components/sections/about/WhyApex";
import { GenericCTA } from "@/components/common/GenericCTA";

const pageTitle = `Our Services — ${COMPANY.name}`;
const pageDescription = "Explore Apex C&P Ltd's integrated multidisciplinary solutions including Construction, Interior Design, Procurement, Logistics, and Technology.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: `${COMPANY.website}/services`,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: `${COMPANY.website}/services`,
    siteName: COMPANY.name,
    images: [
      {
        url: "/images/hero-construction.jpg",
        width: 1200,
        height: 630,
        alt: `Services at ${COMPANY.name}`,
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/images/hero-construction.jpg"],
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Integrated Solutions."
        subtitle="End-to-end expertise for complex, large-scale challenges."
        imageUrl="/images/hero-construction.jpg"
        imageAlt="Construction and engineering infrastructure"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />
      
      <PageIntro
        eyebrow="Our Expertise"
        title="Comprehensive Services Under One Roof."
        description="We eliminate the friction of managing multiple vendors by providing a unified, multidisciplinary approach. From laying the foundation to deploying enterprise technology, we ensure seamless execution across every phase of your project."
      />

      <ServicesGrid />
      
      {/* Reusing the WhyApex section from the About page as it fits perfectly for "Why Choose Us" here */}
      <WhyApex />

      <GenericCTA
        heading="Ready to Start Your Project?"
        description="Contact our team to discuss how our integrated services can add value to your organization."
        primaryButtonText="Get In Touch"
        primaryButtonHref="/contact"
        secondaryButtonText="View Projects"
        secondaryButtonHref="/projects"
        className="bg-muted pt-12 md:pt-16"
      />
    </>
  );
}
