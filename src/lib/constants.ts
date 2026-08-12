import type {
  NavGroup,
  FooterGroup,
  ContactInfo,
  SocialLink,
  Service,
  Statistic,
  WhyChooseUsItem,
  Industry,
  Project,
  MissionVisionItem,
  CoreValue,
  WhyApexItem,
  ServiceDetail,
} from "@/types";

import { siteConfig } from "@/config/siteConfig";

// ─── Company Information ────────────────────────────────────────────────────────

export const COMPANY = {
  name: siteConfig.name,
  legalName: siteConfig.legalName,
  tagline: siteConfig.tagline,
  description: siteConfig.description,
  foundedYear: siteConfig.foundedYear,
  registrationNumber: siteConfig.registrationNumber,
  website: siteConfig.url,
  logoUrl: "/images/logo.png", // Keep this here or move to siteConfig later if needed
} as const;

// ─── Navigation ────────────────────────────────────────────────────────────────

export const NAV_ITEMS: NavGroup[] = siteConfig.navigation;

// ─── Services ──────────────────────────────────────────────────────────────────

export const SERVICES: Service[] = [
  {
    id: "construction",
    title: "Construction & Real Estate",
    shortDescription: "End-to-end construction management and real estate solutions.",
    description:
      "From concept to completion, we deliver commercial and residential construction projects that meet the highest standards of quality and safety in Nigeria.",
    href: "/services/construction-real-estate",
    icon: "Building2",
    features: [
      "Residential & Commercial Construction",
      "Real Estate Development",
      "Project Management",
      "Civil Engineering",
      "Infrastructure Development",
    ],
  },
  {
    id: "interior-design",
    title: "Interior Design & Installation",
    shortDescription: "Bespoke interior design solutions for modern spaces.",
    description:
      "We design and execute interior environments that blend aesthetics with functionality, specializing in corporate workspaces and luxury residential fit-outs.",
    href: "/services/interior-design-installation",
    icon: "Palette",
    features: [
      "Space Planning & Design",
      "Custom Furniture",
      "Fit-Out & Installation",
      "Office & Commercial Interiors",
      "Residential Design",
    ],
  },
  {
    id: "procurement",
    title: "Procurement",
    shortDescription: "Strategic sourcing and supply chain management.",
    description:
      "We provide reliable procurement services—sourcing quality materials, equipment, and goods at competitive prices with full supply chain oversight.",
    href: "/services/procurement",
    icon: "ShoppingCart",
    features: [
      "Local & International Sourcing",
      "Vendor Management",
      "Supply Chain Optimization",
      "Materials Management",
      "Quality Assurance",
    ],
  },
  {
    id: "logistics",
    title: "Logistics",
    shortDescription: "Efficient freight and cargo solutions across Nigeria.",
    description:
      "Our logistics division offers dependable freight forwarding, warehousing, and last-mile delivery services throughout Nigeria and beyond.",
    href: "/services/logistics",
    icon: "Truck",
    features: [
      "Freight Forwarding",
      "Warehousing & Storage",
      "Last-Mile Delivery",
      "Customs Clearance",
      "Fleet Management",
    ],
  },
  {
    id: "technology",
    title: "Technology",
    shortDescription: "Innovative technology solutions for modern businesses.",
    description:
      "We help organisations adopt and integrate technology solutions that improve efficiency, automate processes, and unlock digital growth opportunities.",
    href: "/services/technology",
    icon: "Monitor",
    features: [
      "ICT Infrastructure",
      "Software Solutions",
      "Digital Transformation",
      "IT Consulting",
      "Network & Security",
    ],
  },
];

// ─── Contact Information ────────────────────────────────────────────────────────

export const CONTACT = {
  address: [
    siteConfig.address.street,
    siteConfig.address.city,
    `${siteConfig.address.state}, ${siteConfig.address.country}`
  ],
  phones: [siteConfig.phone.primary, siteConfig.phone.secondary],
  emails: [siteConfig.email.general, siteConfig.email.projects],
};

// ─── Social Links ───────────────────────────────────────────────────────────────

export const SOCIAL_LINKS = [
  { platform: "LinkedIn", href: siteConfig.social.linkedin, icon: "Linkedin" },
  { platform: "Twitter", href: siteConfig.social.twitter, icon: "Twitter" },
  { platform: "Facebook", href: siteConfig.social.facebook, icon: "Facebook" },
];

// ─── Footer Links ───────────────────────────────────────────────────────────────

export const FOOTER_GROUPS: FooterGroup[] = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Projects", href: "/projects" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Construction & Real Estate", href: "/services/construction" },
      { label: "Interior Design", href: "/services/interior-design" },
      { label: "Procurement", href: "/services/procurement" },
      { label: "Logistics", href: "/services/logistics" },
      { label: "Technology", href: "/services/technology" },
    ],
  },
];

// ─── Homepage ──────────────────────────────────────────────────────────────────

export const STATISTICS: Statistic[] = [
  { label: "Projects Delivered", value: "10+" },
  { label: "Industries Served", value: "6" },
  { label: "Years of Experience", value: "1+" },
];

export const WHY_CHOOSE_US: WhyChooseUsItem[] = [
  {
    id: "expertise",
    title: "Professional Expertise",
    description: "Our multidisciplinary team brings decades of combined experience across construction, technology, and supply chain management.",
    icon: "Briefcase",
  },
  {
    id: "delivery",
    title: "Reliable Delivery",
    description: "We are committed to delivering projects on time and within budget, ensuring minimal disruption to your operations.",
    icon: "Clock",
  },
  {
    id: "quality",
    title: "Quality Assurance",
    description: "Strict adherence to international standards and best practices guarantees the durability and excellence of our work.",
    icon: "ShieldCheck",
  },
  {
    id: "client-centered",
    title: "Client-Centered Approach",
    description: "We prioritize your vision, working collaboratively to tailor our solutions to your specific needs and objectives.",
    icon: "Users",
  },
];

export const INDUSTRIES: Industry[] = [
  { id: "government", title: "Government", icon: "Landmark" },
  { id: "commercial", title: "Commercial", icon: "Building" },
  { id: "residential", title: "Residential", icon: "Home" },
  { id: "healthcare", title: "Healthcare", icon: "HeartPulse" },
  { id: "education", title: "Education", icon: "GraduationCap" },
  { id: "industrial", title: "Industrial", icon: "Factory" },
];

export const FEATURED_PROJECTS: Project[] = [
  {
    slug: "eco-industrial-park",
    title: "Eco-Industrial Park Phase I",
    metaTitle: "Eco-Industrial Park Phase I — Apex C&P Ltd",
    metaDescription: "Development of a sustainable industrial park featuring advanced civil engineering and eco-friendly infrastructure.",
    description: "Development of a sustainable industrial park featuring advanced civil engineering and eco-friendly infrastructure.",
    category: "construction",
    status: "completed",
    location: "Lagos, Nigeria",
    client: "Lagos State Government & Private Investors",
    year: 2024,
    coverImage: "/images/hero-construction.jpg",
    heroImageAlt: "Wide view of the Eco-Industrial Park construction site",
    challenge: "The client required a 500-acre industrial complex that minimized environmental impact while providing robust, high-capacity infrastructure for manufacturing tenants. The site was prone to waterlogging, requiring extensive geotechnical engineering before structural work could begin.",
    solution: "Apex C&P deployed a multidisciplinary team to execute a comprehensive site remediation plan. We utilized permeable paving, advanced drainage systems, and sustainable materials. Our logistics division ensured all specialized heavy machinery arrived on schedule despite regional supply chain disruptions.",
    results: [
      "Completed 2 months ahead of schedule",
      "Achieved a 30% reduction in carbon footprint during construction",
      "Zero lost-time injuries over 1.2 million man-hours",
    ],
    gallery: [
      "/images/project-commercial.jpg",
      "/images/project-construction-site.jpg",
      "/images/engineers-reviewing.jpg",
    ],
    servicesUsed: ["Civil Engineering", "Project Management", "Logistics", "Procurement"],
    relatedServices: ["construction-real-estate", "logistics"],
    featured: true,
  },
  {
    slug: "corporate-hq-interior",
    title: "Corporate HQ Interior Fit-Out",
    metaTitle: "Corporate HQ Interior Fit-Out — Apex C&P Ltd",
    metaDescription: "Premium interior design and execution for a leading financial institution's new headquarters.",
    description: "Premium interior design and execution for a leading financial institution's new headquarters.",
    category: "interior",
    status: "completed",
    location: "Abuja, Nigeria",
    client: "Zenith Financial Group",
    year: 2023,
    coverImage: "/images/interior-office.jpg",
    heroImageAlt: "Modern, well-lit corporate office interior",
    challenge: "Zenith Financial Group was relocating their 500-person headquarters and needed a workspace that fostered collaboration, reflected their premium brand identity, and integrated seamless smart-office technology. The timeline was strictly capped at 4 months to prevent operational downtime.",
    solution: "We adopted a turnkey approach, handling everything from spatial planning and 3D visualization to bespoke furniture procurement and installation. We integrated automated climate and lighting systems to enhance energy efficiency and employee comfort.",
    results: [
      "Delivered exactly on the 4-month deadline",
      "Sourced 85% of custom furniture internationally with zero delays",
      "Increased client employee satisfaction scores regarding workspace by 42%",
    ],
    gallery: [
      "/images/interior-lobby.jpg",
      "/images/interior-workspace.jpg",
      "/images/interior-executive.jpg",
      "/images/interior-detail.jpg",
    ],
    servicesUsed: ["Spatial Planning", "Custom Furnishing", "Smart Tech Integration"],
    relatedServices: ["interior-design-installation", "technology"],
    featured: true,
  },
  {
    slug: "national-logistics-network",
    title: "National Logistics Network",
    metaTitle: "National Logistics Network — Apex C&P Ltd",
    metaDescription: "Comprehensive procurement and supply chain optimization across multiple regional distribution centers.",
    description: "Comprehensive procurement and supply chain optimization across multiple regional distribution centers.",
    category: "logistics",
    status: "ongoing",
    location: "Nationwide",
    client: "Federal Ministry of Commerce",
    year: 2025,
    coverImage: "/images/logistics-fleet.jpg",
    heroImageAlt: "Large scale warehouse and distribution center",
    challenge: "The existing national distribution framework suffered from severe bottlenecks, lack of real-time tracking, and inefficient warehouse management, leading to significant delays in moving essential goods across regions.",
    solution: "Apex implemented a completely integrated logistics and technology solution. We constructed two new centralized distribution hubs, procured a modern fleet of transport vehicles, and deployed a custom enterprise resource planning (ERP) system for real-time freight tracking.",
    results: [
      "Reduced average transit times by 25%",
      "Achieved 99.8% inventory accuracy across all hubs",
      "Established a secure, scalable supply chain framework for future expansion",
    ],
    gallery: [
      "/images/logistics-warehouse.jpg",
      "/images/logistics-shipping.jpg",
      "/images/technology-team.jpg",
    ],
    servicesUsed: ["Warehousing", "Freight Transportation", "IT Infrastructure"],
    relatedServices: ["logistics", "procurement", "technology"],
    featured: true,
  },
];

// ─── About Page ────────────────────────────────────────────────────────────────

export const ABOUT_COMPANY_STORY = {
  whoWeAre:
    "Apex C&P Ltd is a premier Nigerian multidisciplinary organization dedicated to transforming visions into reality. Established in 2015, we have grown from a specialized contractor into a comprehensive solutions provider, serving government agencies, corporations, and investors.",
  whatWeDo:
    "We integrate Construction & Real Estate, Interior Design, Procurement, Logistics, and Technology. This holistic approach allows us to control quality, reduce timelines, and deliver seamless, end-to-end execution on complex, large-scale projects across the region.",
};

export const MISSION_VISION: MissionVisionItem[] = [
  {
    id: "mission",
    title: "Our Mission",
    description:
      "To deliver exceptional, integrated multidisciplinary solutions that drive progress, create sustainable value, and exceed client expectations across every sector we serve.",
    icon: "Target",
  },
  {
    id: "vision",
    title: "Our Vision",
    description:
      "To be the foremost provider of engineering, procurement, and technology solutions in Africa, recognized for our unwavering commitment to quality and innovation.",
    icon: "Eye",
  },
];

export const CORE_VALUES: CoreValue[] = [
  {
    id: "integrity",
    title: "Integrity",
    description: "We uphold the highest ethical standards, ensuring transparency and honesty in all our partnerships.",
    icon: "ShieldCheck",
  },
  {
    id: "excellence",
    title: "Excellence",
    description: "We are relentless in our pursuit of quality, pushing boundaries to achieve superior outcomes.",
    icon: "Award",
  },
  {
    id: "innovation",
    title: "Innovation",
    description: "We embrace new technologies and forward-thinking methodologies to solve complex challenges.",
    icon: "Lightbulb",
  },
  {
    id: "reliability",
    title: "Reliability",
    description: "We deliver on our promises, executing projects on time and within scope without compromise.",
    icon: "Clock",
  },
  {
    id: "collaboration",
    title: "Collaboration",
    description: "We foster strong relationships with our clients, treating every project as a shared success.",
    icon: "Users",
  },
  {
    id: "client-focus",
    title: "Client Focus",
    description: "We prioritize client objectives, tailoring our services to meet precise operational needs.",
    icon: "Target",
  },
];

export const WHY_APEX: WhyApexItem[] = [
  {
    id: "expertise",
    title: "Multidisciplinary Expertise",
    description: "Integrated solutions delivered through one trusted partner, eliminating the friction of managing multiple vendors.",
  },
  {
    id: "execution",
    title: "Reliable Execution",
    description: "Projects completed with a relentless focus on quality, efficiency, and long-term value creation.",
  },
  {
    id: "professionals",
    title: "Experienced Professionals",
    description: "Our diverse team of engineers, designers, and strategists bring decades of specialized industry experience.",
  },
  {
    id: "end-to-end",
    title: "End-to-End Delivery",
    description: "From initial concept and procurement to final execution and technology integration, we handle it all.",
  },
];

// ─── Services Pages ────────────────────────────────────────────────────────────

const defaultProcess = [
  {
    id: "consultation",
    title: "Consultation & Assessment",
    description: "We begin by understanding your exact objectives, operational constraints, and strategic vision.",
  },
  {
    id: "planning",
    title: "Strategic Planning",
    description: "Our experts develop a comprehensive roadmap, allocating resources and mitigating risks.",
  },
  {
    id: "execution",
    title: "Precision Execution",
    description: "We deploy specialized teams to implement the solution with rigorous quality control.",
  },
  {
    id: "delivery",
    title: "Delivery & Optimization",
    description: "We ensure seamless handover, continuous support, and long-term value realization.",
  },
];

export const SERVICE_DETAILS: Record<string, ServiceDetail> = {
  "construction-real-estate": {
    slug: "construction-real-estate",
    title: "Construction & Real Estate",
    metaTitle: "Construction & Real Estate Services — Apex C&P Ltd",
    metaDescription: "Comprehensive civil engineering, construction, and real estate development solutions for commercial and residential sectors.",
    heroImage: "/images/hero-construction.jpg",
    heroImageAlt: "Modern construction site with cranes and concrete structures",
    overviewTitle: "Building the Foundations of Tomorrow.",
    overviewDescription: "From large-scale civil infrastructure to premium commercial developments, we deliver construction solutions engineered for durability and sustainability. Our integrated approach ensures that complex projects are executed seamlessly from foundation to handover.",
    capabilities: [
      { id: "civil", icon: "Building2", title: "Civil Engineering", description: "Design and execution of robust infrastructure projects including roads, bridges, and public works." },
      { id: "commercial", icon: "Briefcase", title: "Commercial Development", description: "End-to-end construction of corporate offices, retail spaces, and mixed-use complexes." },
      { id: "residential", icon: "Home", title: "Premium Residential", description: "Development of high-end residential estates tailored to modern living standards." },
      { id: "management", icon: "Users", title: "Project Management", description: "Comprehensive oversight ensuring projects are delivered on time, within budget, and to exact specifications." },
    ],
    benefits: [
      { id: "quality", title: "Uncompromising Quality", description: "Structures built to endure, utilizing premium materials and advanced engineering practices." },
      { id: "efficiency", title: "Accelerated Timelines", description: "Streamlined execution that minimizes delays and accelerates your return on investment." },
      { id: "compliance", title: "Regulatory Compliance", description: "Strict adherence to safety standards and local building regulations, mitigating project risks." },
    ],
    process: defaultProcess,
    relatedIndustries: ["ind-2", "ind-3", "ind-6"], // Building, Home, Factory
    ctaHeading: "Ready to Build with Confidence?",
    ctaDescription: "Partner with Apex C&P Ltd for your next major construction or real estate development project.",
  },
  "interior-design-installation": {
    slug: "interior-design-installation",
    title: "Interior Design & Installation",
    metaTitle: "Interior Design & Installation — Apex C&P Ltd",
    metaDescription: "Premium interior design, fit-outs, and installation services creating functional, elegant spaces.",
    heroImage: "/images/interior-office.jpg",
    heroImageAlt: "Modern, elegant corporate interior space",
    overviewTitle: "Transforming Spaces into Experiences.",
    overviewDescription: "We design and install environments that blend aesthetic elegance with functional brilliance. Whether outfitting a corporate headquarters or a luxury residence, our interior solutions reflect your brand identity and optimize spatial utility.",
    capabilities: [
      { id: "concept", icon: "Palette", title: "Concept & Spatial Planning", description: "Strategic layout optimization and 3D visualization tailored to operational flow." },
      { id: "fitout", icon: "Hammer", title: "Commercial Fit-Outs", description: "Complete interior construction and finishing for corporate and retail environments." },
      { id: "furniture", icon: "Sofa", title: "Custom Furnishing", description: "Sourcing and installation of premium, ergonomic furniture and bespoke fixtures." },
      { id: "smart", icon: "Lightbulb", title: "Smart Space Integration", description: "Seamless integration of lighting, climate, and security automation systems." },
    ],
    benefits: [
      { id: "brand", title: "Enhanced Brand Identity", description: "Interiors that physically manifest your corporate culture and impress stakeholders." },
      { id: "productivity", title: "Optimized Productivity", description: "Ergonomic, well-planned spaces that foster collaboration and employee well-being." },
      { id: "turnkey", title: "Turnkey Execution", description: "A single point of contact from initial sketch to final installation, removing vendor friction." },
    ],
    process: defaultProcess,
    relatedIndustries: ["ind-2", "ind-3"],
    ctaHeading: "Ready to Transform Your Space?",
    ctaDescription: "Let's create an environment that inspires your team and captivates your clients.",
  },
  "procurement": {
    slug: "procurement",
    title: "Procurement",
    metaTitle: "Strategic Procurement Services — Apex C&P Ltd",
    metaDescription: "Global sourcing, supply chain management, and strategic procurement for complex projects.",
    heroImage: "/images/logistics-fleet.jpg",
    heroImageAlt: "Large warehouse with organized logistics and procurement materials",
    overviewTitle: "Strategic Sourcing, Uninterrupted Supply.",
    overviewDescription: "We secure high-quality materials and equipment through a robust global supply network. Our procurement division ensures that your operations and projects are never delayed by supply chain bottlenecks, delivering cost-efficiency and reliability.",
    capabilities: [
      { id: "sourcing", icon: "Globe", title: "Global Sourcing", description: "Identifying and vetting international manufacturers for premium materials and equipment." },
      { id: "contracts", icon: "FileSignature", title: "Contract Negotiation", description: "Securing favorable terms and pricing to optimize your project budgets." },
      { id: "quality", icon: "ShieldCheck", title: "Quality Assurance", description: "Rigorous inspection protocols ensuring all procured items meet exact technical specifications." },
      { id: "inventory", icon: "Package", title: "Inventory Strategy", description: "Just-in-time delivery models that reduce warehousing costs and prevent shortages." },
    ],
    benefits: [
      { id: "cost", title: "Cost Optimization", description: "Leveraging economies of scale and direct manufacturer relationships to reduce expenditure." },
      { id: "risk", title: "Risk Mitigation", description: "Diversified supplier networks that protect your operations from market volatility." },
      { id: "speed", title: "Accelerated Timelines", description: "Materials delivered exactly when needed, ensuring continuous project momentum." },
    ],
    process: defaultProcess,
    relatedIndustries: ["ind-1", "ind-6", "ind-4"],
    ctaHeading: "Need a Reliable Supply Chain Partner?",
    ctaDescription: "Streamline your procurement process and secure the materials you need to succeed.",
  },
  "logistics": {
    slug: "logistics",
    title: "Logistics",
    metaTitle: "Integrated Logistics Solutions — Apex C&P Ltd",
    metaDescription: "End-to-end transportation, warehousing, and logistics management.",
    heroImage: "/images/technology-team.jpg",
    heroImageAlt: "Logistics fleet and transportation network",
    overviewTitle: "Moving Your Business Forward.",
    overviewDescription: "Our logistics division provides secure, efficient transportation and warehousing solutions. We handle the complexities of distribution and freight management so you can focus on your core business operations.",
    capabilities: [
      { id: "freight", icon: "Truck", title: "Freight Transportation", description: "Secure overland transport of goods, heavy machinery, and sensitive materials." },
      { id: "warehousing", icon: "Warehouse", title: "Warehousing", description: "State-of-the-art storage facilities with advanced inventory tracking." },
      { id: "distribution", icon: "Map", title: "Distribution Networks", description: "Optimized routing and delivery systems for national and regional distribution." },
      { id: "customs", icon: "FileText", title: "Customs Clearance", description: "Navigating regulatory frameworks to ensure swift border transitions for imported goods." },
    ],
    benefits: [
      { id: "reliability", title: "Unwavering Reliability", description: "Consistent, on-time deliveries that protect your operational schedules." },
      { id: "visibility", title: "Total Visibility", description: "Advanced tracking systems providing real-time oversight of your assets in transit." },
      { id: "scale", title: "Scalable Capacity", description: "Flexible logistics networks that expand seamlessly as your business grows." },
    ],
    process: defaultProcess,
    relatedIndustries: ["ind-6", "ind-1", "ind-2"],
    ctaHeading: "Looking to Optimize Your Logistics?",
    ctaDescription: "Ensure your assets are delivered safely, efficiently, and on schedule.",
  },
  "technology": {
    slug: "technology",
    title: "Technology",
    metaTitle: "Technology & IT Solutions — Apex C&P Ltd",
    metaDescription: "Digital transformation, IT infrastructure, and enterprise technology solutions.",
    heroImage: "/images/procurement-network.jpg",
    heroImageAlt: "Digital networks and enterprise technology infrastructure",
    overviewTitle: "Powering Digital Transformation.",
    overviewDescription: "We deliver robust technology infrastructure and software solutions that modernize operations. From enterprise networks to bespoke software integrations, we ensure your business operates at the cutting edge of efficiency.",
    capabilities: [
      { id: "infrastructure", icon: "Server", title: "IT Infrastructure", description: "Design and deployment of secure, scalable enterprise networks and data centers." },
      { id: "software", icon: "Code", title: "Systems Integration", description: "Connecting disparate business software to create unified, efficient operational ecosystems." },
      { id: "security", icon: "Shield", title: "Cybersecurity", description: "Comprehensive protection protocols safeguarding your critical business data." },
      { id: "consulting", icon: "Monitor", title: "Digital Transformation", description: "Strategic consulting to modernize legacy systems and adopt cloud technologies." },
    ],
    benefits: [
      { id: "efficiency", title: "Operational Efficiency", description: "Automated workflows and integrated systems that drastically reduce manual overhead." },
      { id: "security", title: "Enterprise Security", description: "Peace of mind knowing your digital assets are protected against modern threats." },
      { id: "future", title: "Future-Proofing", description: "Scalable architectures that adapt to emerging technologies and business expansion." },
    ],
    process: defaultProcess,
    relatedIndustries: ["ind-1", "ind-2", "ind-4", "ind-5"],
    ctaHeading: "Ready to Transform Your Business Through Technology?",
    ctaDescription: "Partner with us to build a secure, efficient, and scalable digital foundation.",
  }
};
