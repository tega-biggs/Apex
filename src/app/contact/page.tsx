import type { Metadata } from "next";
import { COMPANY } from "@/lib/constants";
import { PageHero } from "@/components/common/PageHero";
import { ContactSection } from "@/components/sections/contact/ContactSection";
import { ContactFAQ } from "@/components/sections/contact/ContactFAQ";
import { ContactMap } from "@/components/sections/contact/ContactMap";
import { GenericCTA } from "@/components/common/GenericCTA";

const pageTitle = `Contact Us — ${COMPANY.name}`;
const pageDescription = "Get in touch with Apex C&P Ltd for construction, interior design, procurement, logistics, and technology services across Nigeria.";
const pageImage = "/images/contact-building.jpg";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: `${COMPANY.website}/contact`,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: `${COMPANY.website}/contact`,
    siteName: COMPANY.name,
    images: [
      {
        url: pageImage,
        width: 1200,
        height: 630,
        alt: `Contact ${COMPANY.name}`,
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

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us."
        subtitle="We're ready to discuss your next project."
        imageUrl="/images/contact-building.jpg"
        imageAlt="Modern glass office building reflecting the sky"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />
      
      <ContactSection />
      
      <ContactFAQ />
      
      <ContactMap />

      <GenericCTA
        heading="Ready to partner with Apex C&P?"
        description="Explore our full range of services or dive into our portfolio to see what we can do for you."
        primaryButtonText="View Services"
        primaryButtonHref="/services"
        secondaryButtonText="View Projects"
        secondaryButtonHref="/projects"
        className="bg-primary text-white pt-12 md:pt-16"
      />
    </>
  );
}
