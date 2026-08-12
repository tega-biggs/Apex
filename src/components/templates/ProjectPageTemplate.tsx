import * as React from "react";
import { Project } from "@/types";
import { PageHero } from "../common/PageHero";
import { PageIntro } from "../common/PageIntro";
import { ImageGallery } from "../common/ImageGallery";
import { RelatedServices } from "../sections/services/RelatedServices";
import { RelatedProjects } from "../sections/projects/RelatedProjects";
import { GenericCTA } from "../common/GenericCTA";
import { Container } from "../layout/Container";
import { Section } from "../common/Section";
import { CheckCircle2 } from "lucide-react";

interface ProjectPageTemplateProps {
  data: Project;
}

export function ProjectPageTemplate({ data }: ProjectPageTemplateProps) {
  return (
    <>
      <PageHero
        title={data.title}
        imageUrl={data.coverImage}
        imageAlt={data.heroImageAlt || data.title}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
          { label: data.title },
        ]}
      />
      
      {/* Overview */}
      <PageIntro
        eyebrow="Project Overview"
        title={data.title}
        description={data.description}
      />
      
      {/* Storytelling: Challenge, Solution, Results */}
      <Section className="py-12 md:py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Challenge & Solution */}
            <div className="lg:col-span-8 flex flex-col gap-10">
              {data.challenge && (
                <div>
                  <h2 className="text-2xl font-bold font-manrope text-primary mb-4">The Challenge</h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">{data.challenge}</p>
                </div>
              )}
              
              {data.solution && (
                <div>
                  <h2 className="text-2xl font-bold font-manrope text-primary mb-4">Our Solution</h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">{data.solution}</p>
                </div>
              )}
            </div>
            
            {/* Right Column: Project Meta & Results */}
            <div className="lg:col-span-4 flex flex-col gap-10">
              {/* Meta Card */}
              <div className="bg-surface p-8 rounded-2xl border border-border/50">
                <h3 className="text-lg font-bold font-manrope text-primary mb-6 pb-4 border-b border-border">Project Details</h3>
                <dl className="flex flex-col gap-4 text-sm">
                  {data.client && (
                    <div className="flex flex-col gap-1">
                      <dt className="text-muted-foreground font-medium">Client</dt>
                      <dd className="text-text-primary font-semibold">{data.client}</dd>
                    </div>
                  )}
                  <div className="flex flex-col gap-1">
                    <dt className="text-muted-foreground font-medium">Location</dt>
                    <dd className="text-text-primary font-semibold">{data.location}</dd>
                  </div>
                  <div className="flex flex-col gap-1">
                    <dt className="text-muted-foreground font-medium">Completion</dt>
                    <dd className="text-text-primary font-semibold">{data.year}</dd>
                  </div>
                  <div className="flex flex-col gap-1">
                    <dt className="text-muted-foreground font-medium">Category</dt>
                    <dd className="text-text-primary font-semibold capitalize">{data.category.replace("-", " ")}</dd>
                  </div>
                </dl>
              </div>

              {/* Results */}
              {data.results && data.results.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold font-manrope text-primary mb-6">Key Results</h2>
                  <ul className="flex flex-col gap-4">
                    {data.results.map((result, idx) => (
                      <li key={idx} className="flex gap-3">
                        <CheckCircle2 className="size-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

          </div>
        </Container>
      </Section>
      
      {/* Gallery */}
      {data.gallery && data.gallery.length > 0 && (
        <Section variant="muted" className="py-16">
          <Container>
            <ImageGallery 
              images={data.gallery} 
              columns={3} 
              aspectRatio="video" 
              altPrefix={`${data.title} project gallery image`} 
            />
          </Container>
        </Section>
      )}
      
      {/* Related Services (if applicable, taking the first service used or related) */}
      {data.relatedServices && data.relatedServices.length > 0 && (
        <RelatedServices currentServiceSlug={""} /> // We pass empty so it doesn't exclude any, or maybe we adapt it.
        // Wait, RelatedServices expects a single current slug. I'll modify it later or just pass ""
      )}
      
      <RelatedProjects currentProjectSlug={data.slug} />
      
      <GenericCTA
        heading="Ready to build something extraordinary?"
        description="Our team is ready to deliver world-class solutions for your next big project."
        primaryButtonText="Start a Project"
        primaryButtonHref="/contact"
        secondaryButtonText="All Projects"
        secondaryButtonHref="/projects"
        className="bg-primary text-white" 
      />
    </>
  );
}
