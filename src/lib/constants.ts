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
    shortDescription: "Practical construction and real estate solutions tailored to your project.",
    description:
      "We support residential and commercial projects with a practical approach to planning, coordination, and execution, with a focus on quality, safety, and lasting results.",
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
    shortDescription: "Thoughtful interior design and installation for modern spaces.",
    description:
      "We create functional and visually refined interiors by combining thoughtful design, quality materials, and professional installation for residential and commercial spaces.",
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
    shortDescription: "Reliable sourcing and procurement solutions for businesses and projects.",
    description:
      "We help businesses and project teams source quality materials, equipment, and goods while focusing on competitive pricing, reliable suppliers, and efficient delivery.",
    href: "/services/procurement",
    icon: "ShoppingCart",
    features: [
      "Local & International Sourcing",
      "Vendor Management",
      "Supply Chain Support",
      "Materials Management",
      "Quality Assurance",
    ],
  },
  {
    id: "logistics",
    title: "Logistics",
    shortDescription: "Reliable logistics solutions for the movement of goods and materials.",
    description:
      "We coordinate logistics and transportation solutions to help businesses move goods and materials efficiently, with a focus on reliability, communication, and timely delivery.",
    href: "/services/logistics",
    icon: "Truck",
    features: [
      "Freight Forwarding",
      "Warehousing & Storage",
      "Last-Mile Delivery",
      "Customs Clearance",
      "Transportation Coordination",
    ],
  },
  {
    id: "technology",
    title: "Technology",
    shortDescription: "Practical technology solutions that help businesses work smarter.",
    description:
      "We help organisations identify and implement technology solutions that improve efficiency, streamline processes, and support sustainable digital growth.",
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
  { label: "Projects Delivered", value: "5" },
  { label: "Industries Served", value: "2" },
  { label: "Years of Experience", value: "1+" },
];

export const WHY_CHOOSE_US: WhyChooseUsItem[] = [
  {
    id: "expertise",
    title: "Professional Expertise",
    description: "Our multidisciplinary team combines practical knowledge across construction, technology, procurement, and supply chain management to deliver effective solutions.",
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
    description: "We maintain high standards throughout every project, with careful attention to quality, durability, and professional execution.",
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
    slug: "four-unit-apartment-finishing",
    title: "Four-Unit Apartment Finishing",
    metaTitle: "Four-Unit Apartment Finishing — Apex C&P Ltd",
    metaDescription:
      "Interior and exterior finishing for a four-unit apartment in Benin City, delivered with a focus on modern aesthetics, quality, and cost efficiency.",
    description:
      "Interior and exterior finishing for a four-unit apartment, combining modern aesthetics, quality materials, and practical project management to deliver a comfortable and well-balanced result.",
    category: "interior-design",
    status: "completed",
    location: "Benin City, Edo State, Nigeria",
    client: "Private Client",
    year: 2025,
    coverImage: "/images/hero-construction1.jpg",
    heroImageAlt:
      "Four-unit apartment project completed with a clean and modern finish",
    challenge:
      "The client engaged Apex C&P Ltd to design and select tiles for a new four-unit apartment, with a focus on simplicity, comfort, and modern aesthetics. The project faced challenges including high material costs, the distance between the project site and supplier warehouse, and weather-related delays during the rainy season. Despite these constraints, the project was carefully managed to maintain quality and meet the client's expectations.",
    solution:
      "To achieve the client's vision while maintaining cost efficiency, Apex C&P Ltd partnered with Rechem Paint & Interior to deliver high-quality finishing solutions. Premium paint systems were selected for their durability, colour retention, and resistance to dust and stains. We also implemented effective logistics planning and erosion control measures to address the site's environmental conditions and minimise disruption during the rainy season. Through strategic planning and efficient resource management, the project was delivered to a high standard while remaining within the client's comfortable budget.",
    results: [
      "Successfully completed the project within one month, one week ahead of the client's housewarming event",
      "Delivered a clean, modern, and well-balanced interior and exterior finish",
      "Implemented effective erosion control measures to support the property's long-term durability",
      "Achieved high-quality finishing while maintaining cost efficiency",
      "Recorded zero Lost Time Injuries (LTI) throughout the project with an average workforce of 8 personnel on site",
    ],
    gallery: [
      "/images/project-commercial.jpg",
      "/images/project-construction-site.jpg",
      "/images/engineers-reviewing.jpg",
    ],
    servicesUsed: [
      "Interior Design & Installation",
      "Procurement",
      "Logistics",
      "Project Management",
    ],
    relatedServices: ["interior-design-installation", "procurement", "logistics"],
    featured: true,
  },
  {
    slug: "medlung-website-development",
    title: "MedLung Website Development",
    metaTitle: "MedLung Website Development — Apex C&P Ltd",
    metaDescription:
      "Design and development of a modern digital platform for MedLung, an engineering company focused on respiratory devices and healthcare innovation.",
    description:
      "Design and development of a modern, responsive website for MedLung, showcasing its respiratory device engineering and healthcare technology solutions.",
    category: "technology",
    status: "completed",
    location: "Nigeria",
    client: "MedLung",
    year: 2026,
    coverImage: "/images/medlung-website.jpg",
    heroImageAlt:
      "Modern MedLung website showcasing respiratory device engineering",
    challenge:
      "MedLung needed a professional digital presence that could clearly communicate its work in respiratory device engineering while presenting complex healthcare technology in a simple and accessible way. The website needed to establish credibility, communicate the company's vision and capabilities, and provide visitors with a clear understanding of its products and work.",
    solution:
      "Apex C&P Ltd designed and developed a modern, responsive website tailored to MedLung's brand and industry. The website was structured to clearly present the company's mission, respiratory technology focus, and key information while maintaining a clean and professional visual experience. Responsive layouts and intuitive navigation were implemented to ensure a consistent experience across desktop, tablet, and mobile devices.",
    results: [
      "Successfully designed and developed a professional digital presence for MedLung",
      "Created a responsive website optimised for desktop, tablet, and mobile experiences",
      "Presented MedLung's respiratory device engineering work through a clear and accessible website structure",
      "Established a modern digital platform that supports the company's brand and communication goals",
    ],
    gallery: [
      "/images/medlung-homepage.jpg",
      "/images/medlung-about.jpg",
      "/images/medlung-products.jpg",
    ],
    servicesUsed: [
      "Web Design",
      "Web Development",
      "Responsive Design",
      "Digital Solutions",
    ],
    relatedServices: ["technology"],
    featured: true,
  },
  {
    slug: "project-materials-procurement-logistics",
    title: "Project Materials Procurement & Logistics",
    metaTitle: "Project Materials Procurement & Logistics — Apex C&P Ltd",
    metaDescription:
      "Procurement and logistics support for the sourcing, coordination, and timely delivery of project materials.",
    description:
      "Procurement and logistics support focused on sourcing quality materials, coordinating suppliers, and ensuring timely delivery to the project site.",
    category: "logistics",
    status: "completed",
    location: "Benin City, Edo State, Nigeria",
    client: "Private Client",
    year: 2025,
    coverImage: "/images/logistics-fleet.jpg",
    heroImageAlt:
      "Project materials being prepared for transportation and delivery",
    challenge:
      "The project required the timely sourcing and delivery of materials while managing supplier availability, material costs, and the distance between suppliers and the project site. The rainy season also presented additional transportation and site-access challenges that needed to be considered throughout the project.",
    solution:
      "Apex C&P Ltd coordinated the procurement process by identifying suitable suppliers, comparing available options, and arranging the transportation of required materials to the project site. Careful scheduling and communication with suppliers helped minimise delays, while logistics planning was adapted to account for weather and site conditions.",
    results: [
      "Successfully coordinated the sourcing and delivery of required project materials",
      "Maintained material quality while considering the client's budget",
      "Reduced potential delays through proactive supplier and logistics coordination",
      "Supported uninterrupted project execution despite challenging weather conditions",
    ],
    gallery: [
      "/images/logistics-warehouse.jpg",
      "/images/logistics-shipping.jpg",
      "/images/project-construction-site.jpg",
    ],
    servicesUsed: [
      "Procurement",
      "Supplier Coordination",
      "Logistics",
      "Materials Management",
    ],
    relatedServices: ["procurement", "logistics"],
    featured: false,
  },
];

// ─── About Page ────────────────────────────────────────────────────────────────

export const ABOUT_COMPANY_STORY = {
  whoWeAre:
    "Apex C&P Ltd is a Nigerian multidisciplinary company delivering solutions across Construction & Real Estate, Interior Design, Procurement, Logistics, and Technology. We combine practical expertise, thoughtful planning, and a client-focused approach to turn ideas into quality results.",
  whatWeDo:
    "Our integrated approach brings complementary services together to make project execution more efficient and coordinated. We work closely with our clients to understand their objectives, manage resources effectively, and deliver solutions built around quality, functionality, and long-term value.",
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
