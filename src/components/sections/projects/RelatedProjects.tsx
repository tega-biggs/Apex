"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Container } from "../../layout/Container";
import { Section } from "../../common/Section";
import { SectionHeading } from "../../common/SectionHeading";
import { ProjectCard } from "../../common/ProjectCard";
import { Project } from "@/types";
import { FEATURED_PROJECTS } from "@/lib/constants";
import { staggerContainer, staggerItem } from "@/lib/motion";

interface RelatedProjectsProps {
  currentProjectSlug: string;
}

export function RelatedProjects({ currentProjectSlug }: RelatedProjectsProps) {
  // Exclude current project and take up to 3
  const relatedProjects = FEATURED_PROJECTS.filter(
    (project) => project.slug !== currentProjectSlug
  ).slice(0, 3);

  if (relatedProjects.length === 0) return null;

  return (
    <Section variant="muted" className="pt-24 pb-12">
      <Container>
        <SectionHeading
          centered
          subtitle="More Work"
          title="Explore Related Projects."
          className="mx-auto mb-10"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {relatedProjects.map((project) => (
            <motion.div key={project.slug} variants={staggerItem} className="h-full">
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
