import type { Metadata } from "next";
import { FEATURED_PROJECTS, COMPANY } from "@/lib/constants";
import { ProjectPageTemplate } from "@/components/templates/ProjectPageTemplate";
import { notFound } from "next/navigation";
import { StructuredData } from "@/components/common/StructuredData";
import { generateProjectSchema, generateBreadcrumbSchema } from "@/lib/seo";

// Required for static site generation with dynamic routes
export async function generateStaticParams() {
  return FEATURED_PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const project = FEATURED_PROJECTS.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  const title = project.metaTitle || `${project.title} — ${COMPANY.name}`;
  const description = project.metaDescription || project.description;
  const url = `${COMPANY.website}/projects/${project.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: COMPANY.name,
      images: [
        {
          url: project.coverImage,
          width: 1200,
          height: 630,
          alt: project.heroImageAlt || project.title,
        },
      ],
      locale: "en_NG",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [project.coverImage],
    },
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = FEATURED_PROJECTS.find((p) => p.slug === resolvedParams.slug);

  if (!project) return notFound();

  const breadcrumbs = [
    { name: "Home", item: `${COMPANY.website}` },
    { name: "Projects", item: `${COMPANY.website}/projects` },
    { name: project.title, item: `${COMPANY.website}/projects/${project.slug}` }
  ];

  return (
    <>
      <StructuredData data={generateProjectSchema(project)} />
      <StructuredData data={generateBreadcrumbSchema(breadcrumbs)} />
      <ProjectPageTemplate data={project} />
    </>
  );
}

