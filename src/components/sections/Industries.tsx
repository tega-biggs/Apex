"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Container } from "../layout/Container";
import { Section } from "../common/Section";
import { SectionHeading } from "../common/SectionHeading";
import { INDUSTRIES } from "@/lib/constants";
import { Landmark, Building, Home, HeartPulse, GraduationCap, Factory, LucideIcon } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/motion";

const iconMap: Record<string, LucideIcon> = {
  Landmark,
  Building,
  Home,
  HeartPulse,
  GraduationCap,
  Factory,
};

export function Industries() {
  return (
    <Section variant="muted">
      <Container>
        <SectionHeading
          centered
          subtitle="Industries We Serve"
          title="Empowering Growth Across Sectors."
          className="mx-auto"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-8"
        >
          {INDUSTRIES.map((industry) => {
            const IconComponent = iconMap[industry.icon];
            return (
              <motion.div
                key={industry.id}
                variants={staggerItem}
                className="flex flex-col items-center justify-center gap-4 group"
              >
                <div className="size-20 rounded-full bg-white border border-border flex items-center justify-center shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:border-primary/20 group-hover:-translate-y-1">
                  {IconComponent && (
                    <IconComponent className="size-8 text-muted-foreground transition-colors group-hover:text-primary" />
                  )}
                </div>
                <span className="font-manrope font-semibold text-text-primary text-center group-hover:text-primary transition-colors">
                  {industry.title}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </Section>
  );
}
