import * as React from "react";
import { ServiceDetail } from "@/types";
import { PageHero } from "../common/PageHero";
import { PageIntro } from "../common/PageIntro";
import { ServiceCapabilities } from "../sections/services/ServiceCapabilities";
import { ServiceBenefits } from "../sections/services/ServiceBenefits";
import { ServiceProcess } from "../sections/services/ServiceProcess";
import { RelatedServices } from "../sections/services/RelatedServices";
import { GenericCTA } from "../common/GenericCTA";
import { StructuredData } from "../common/StructuredData";
import { generateServiceSchema, generateBreadcrumbSchema } from "@/lib/seo";
import { siteConfig } from "@/config/siteConfig";

interface ServicePageTemplateProps {
  data: ServiceDetail;
}

export function ServicePageTemplate({ data }: ServicePageTemplateProps) {
  const breadcrumbs = [
    { name: "Home", item: `${siteConfig.url}` },
    { name: "Services", item: `${siteConfig.url}/services` },
    { name: data.title, item: `${siteConfig.url}/services/${data.slug}` }
  ];

  return (
    <>
      <StructuredData data={generateServiceSchema(data)} />
      <StructuredData data={generateBreadcrumbSchema(breadcrumbs)} />
      <PageHero
        title={data.title}
        imageUrl={data.heroImage}
        imageAlt={data.heroImageAlt}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: data.title },
        ]}
      />
      
      <PageIntro
        eyebrow={data.title}
        title={data.overviewTitle}
        description={data.overviewDescription}
      />
      
      <ServiceCapabilities capabilities={data.capabilities} />
      
      <ServiceBenefits benefits={data.benefits} />
      
      <ServiceProcess steps={data.process} />
      
      <RelatedServices currentServiceSlug={data.slug} />
      
      <GenericCTA
        heading={data.ctaHeading}
        description={data.ctaDescription}
        primaryButtonText="Get In Touch"
        primaryButtonHref="/contact"
        secondaryButtonText="All Services"
        secondaryButtonHref="/services"
        className="bg-muted pt-12 md:pt-16" // Ensures smooth visual transition from the previous section
      />
    </>
  );
}
