import type { Metadata } from "next";
import { COMPANY, FEATURED_PROJECTS } from "@/lib/constants";
import { PageHero } from "@/components/common/PageHero";
import { PageIntro } from "@/components/common/PageIntro";
import { ProjectsGrid } from "@/components/sections/projects/ProjectsGrid";
import { GenericCTA } from "@/components/common/GenericCTA";

const pageTitle = `Our Portfolio — ${COMPANY.name}`;
const pageDescription = "Explore our diverse portfolio of successfully completed construction, interior design, and logistics projects across Nigeria.";
const pageImage = "/images/project-commercial.jpg";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: `${COMPANY.website}/projects`,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: `${COMPANY.website}/projects`,
    siteName: COMPANY.name,
    images: [
      {
        url: pageImage,
        width: 1200,
        height: 630,
        alt: `Projects portfolio by ${COMPANY.name}`,
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

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        title="Our Portfolio."
        subtitle="A selection of our most impactful work."
        imageUrl="/images/project-commercial.jpg"
        imageAlt="Modern architectural structure"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Projects" },
        ]}
      />
      
      <PageIntro
        eyebrow="Our Work"
        title="Engineering the Future."
        description="From high-rise commercial developments to nationwide logistics networks, explore how we deliver complex, large-scale solutions with uncompromising quality."
      />

      <ProjectsGrid projects={FEATURED_PROJECTS} />

      <GenericCTA
        heading="Discuss Your Next Project"
        description="Ready to bring your vision to life? Contact our team to schedule a consultation."
        primaryButtonText="Contact Us"
        primaryButtonHref="/contact"
        secondaryButtonText="View Services"
        secondaryButtonHref="/services"
        className="bg-muted pt-12 md:pt-16 mt-12"
      />
    </>
  );
}
