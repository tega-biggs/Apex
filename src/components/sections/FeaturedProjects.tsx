"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "../layout/Container";
import { Section } from "../common/Section";
import { SectionHeading } from "../common/SectionHeading";
import { Button } from "@/components/ui/button";
import { FEATURED_PROJECTS } from "@/lib/constants";
import { staggerContainer, staggerItem } from "@/lib/motion";
import { ProjectCard } from "../common/ProjectCard";

export function FeaturedProjects() {
  return (
    <Section variant="default">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-16">
          <SectionHeading
            subtitle="Our Portfolio"
            title="Featured Projects."
            description="A selection of our most impactful work, demonstrating our capacity to deliver complex, large-scale solutions."
            className="mb-0"
          />
          <Button variant="outline" size="lg" className="hidden md:flex shrink-0" asChild>
            <Link href="/projects">View All Projects</Link>
          </Button>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {FEATURED_PROJECTS.map((project) => (
            <motion.div key={project.slug} variants={staggerItem} className="h-full">
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-10 flex justify-center md:hidden">
          <Button variant="outline" size="lg" className="w-full" asChild>
            <Link href="/projects">View All Projects</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}
