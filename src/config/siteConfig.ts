export const siteConfig = {
  name: "Apex C&P Ltd",
  shortName: "Apex C&P",
  legalName: "Apex Construction & Procurement Limited",
  tagline: "Building Nigeria's Future",
  description:
    "Apex C&P Ltd is an integrated multidisciplinary company delivering Construction & Real Estate, Interior Design, Procurement, Logistics, and Technology solutions for businesses, institutions, and government organizations.",
  url: "https://apexcandp.com", 
  foundedYear: 2015,
  registrationNumber: "RC XXXXXXXX",
  email: {
    general: "info@apexcnp.com",
    projects: "projects@apexcnp.com",
  },
  phone: {
    primary: "+234 811 606 4877",
    secondary: "",
  },
  address: {
    street: "2 Iwezor Street, Off Dandi Street, Ebo Quarter",
    city: "Irhirhi",
    state: "Edo",
    country: "Nigeria",
  },
  social: {
    linkedin: "https://linkedin.com/company/apex-c-and-p",
    twitter: "https://twitter.com/apexcnp",
    facebook: "https://facebook.com/apexcnp",
  },
  navigation: [
    { label: "Home", href: "/" },
    {
      label: "Services",
      href: "/services",
      children: [
        { label: "Construction & Real Estate", href: "/services/construction-real-estate" },
        { label: "Interior Design & Installation", href: "/services/interior-design-installation" },
        { label: "Procurement", href: "/services/procurement" },
        { label: "Logistics", href: "/services/logistics" },
        { label: "Technology", href: "/services/technology" },
      ],
    },
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
};
