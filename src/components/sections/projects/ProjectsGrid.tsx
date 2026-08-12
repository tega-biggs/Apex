"use client";

import * as React from "react";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "../../layout/Container";
import { Section } from "../../common/Section";
import { ProjectCard } from "../../common/ProjectCard";
import { EmptyState } from "../../common/EmptyState";
import { ProjectFilters } from "./ProjectFilters";
import { Button } from "@/components/ui/button";
import { Project } from "@/types";

interface ProjectsGridProps {
  projects: Project[];
}

const CATEGORIES = [
  "All",
  "Construction",
  "Interior Design",
  "Procurement",
  "Logistics",
  "Technology"
];

// Helper to normalize categories for comparison
const normalizeCategory = (cat: string) => cat.toLowerCase().replace(/ design/g, "");

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    
    const normalizedFilter = normalizeCategory(activeCategory);
    return projects.filter(project => {
      const normalizedProjCat = project.category.toLowerCase().replace(/ /g, "-");
      return normalizedProjCat.includes(normalizedFilter) || normalizedFilter.includes(normalizedProjCat);
    });
  }, [projects, activeCategory]);

  return (
    <Section className="pt-8 md:pt-12">
      <Container>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <ProjectFilters
            categories={CATEGORIES}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>

        <motion.div layout className="min-h-[400px]">
          <AnimatePresence mode="popLayout">
            {filteredProjects.length > 0 ? (
              <motion.div 
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredProjects.map((project) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    key={project.slug}
                    className="h-full"
                  >
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full pt-12 pb-24"
              >
                <EmptyState
                  title="No Projects Found"
                  description={`We couldn't find any completed projects in the "${activeCategory}" category. Check back soon for updates.`}
                  action={
                    <Button 
                      variant="link"
                      onClick={() => setActiveCategory("All")}
                      className="text-primary font-medium px-0 h-auto"
                    >
                      View all projects
                    </Button>
                  }
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </Container>
    </Section>
  );
}
