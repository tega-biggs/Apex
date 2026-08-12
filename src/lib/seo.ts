import { siteConfig } from "@/config/siteConfig";
import { Project, ServiceDetail } from "@/types";

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo.png`,
    description: siteConfig.description,
    foundingDate: siteConfig.foundedYear.toString(),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phone.primary,
      contactType: "customer service",
      email: siteConfig.email.general,
      areaServed: "NG",
      availableLanguage: "en",
    },
    sameAs: [
      siteConfig.social.linkedin,
      siteConfig.social.twitter,
      siteConfig.social.facebook,
    ],
  };
}

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    image: `${siteConfig.url}/images/logo.png`,
    "@id": siteConfig.url,
    url: siteConfig.url,
    telephone: siteConfig.phone.primary,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 6.3350, // Placeholder coords for Benin City
      longitude: 5.6275,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "08:00",
      closes: "17:00",
    },
  };
}

export function generateBreadcrumbSchema(items: { name: string; item: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.item,
    })),
  };
}

export function generateServiceSchema(service: ServiceDetail) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metaDescription || service.overviewDescription,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    url: `${siteConfig.url}${service.slug ? `/services/${service.slug}` : "/services"}`,
  };
}

export function generateProjectSchema(project: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.metaDescription || project.description,
    url: `${siteConfig.url}/projects/${project.slug}`,
    creator: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    datePublished: project.year.toString(),
    keywords: project.category,
    image: project.coverImage,
  };
}
