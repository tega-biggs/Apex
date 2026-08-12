// ─── Navigation ────────────────────────────────────────────────────────────────

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface NavGroup {
  label: string;
  href: string;
  children?: NavItem[];
}

// ─── Services ──────────────────────────────────────────────────────────────────

export type ServiceCategory =
  | "construction"
  | "interior-design"
  | "procurement"
  | "logistics"
  | "technology";

export interface Service {
  id: ServiceCategory;
  title: string;
  shortDescription: string;
  description: string;
  href: string;
  icon: string;
  features: string[];
}

// ─── Projects ──────────────────────────────────────────────────────────────────

export type ProjectStatus = "completed" | "ongoing" | "upcoming";

export interface Project {
  slug: string;
  title: string;
  description: string; // Short summary used in cards
  category: string; // e.g., "construction", "technology"
  status: ProjectStatus;
  location: string;
  client?: string;
  year: number;
  coverImage: string;
  heroImageAlt?: string;
  metaTitle?: string;
  metaDescription?: string;
  gallery?: string[];
  challenge?: string;
  solution?: string;
  results?: string[];
  relatedServices?: string[]; // Slugs of related services
  servicesUsed?: string[]; // Services applied in this project
  featured?: boolean;
}

// ─── Footer ────────────────────────────────────────────────────────────────────

export interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface FooterGroup {
  title: string;
  links: FooterLink[];
}

// ─── Contact ───────────────────────────────────────────────────────────────────

export interface ContactInfo {
  address: string;
  phone: string[];
  email: string[];
  businessHours: string;
}

export interface SocialLink {
  platform: string;
  href: string;
  ariaLabel: string;
}

// ─── Homepage ──────────────────────────────────────────────────────────────────

export interface Statistic {
  label: string;
  value: string;
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Industry {
  id: string;
  title: string;
  icon: string;
}

// ─── About Page ────────────────────────────────────────────────────────────────

export interface MissionVisionItem {
  id: "mission" | "vision";
  title: string;
  description: string;
  icon: string;
}

export interface CoreValue {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface WhyApexItem {
  id: string;
  title: string;
  description: string;
}

// ─── Services Page ─────────────────────────────────────────────────────────────

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
}

export interface ServiceCapability {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface ServiceBenefit {
  id: string;
  title: string;
  description: string;
}

export interface ServiceDetail {
  slug: string;
  title: string;
  heroImage: string;
  heroImageAlt: string;
  metaTitle: string;
  metaDescription: string;
  overviewTitle: string;
  overviewDescription: string;
  capabilities: ServiceCapability[];
  benefits: ServiceBenefit[];
  process: ProcessStep[];
  relatedIndustries: string[];
  ctaHeading: string;
  ctaDescription: string;
}

