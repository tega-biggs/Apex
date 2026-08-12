"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Award, Lightbulb, Clock, Users, Target, LucideIcon } from "lucide-react";
import { Container } from "../../layout/Container";
import { Section } from "../../common/Section";
import { SectionHeading } from "../../common/SectionHeading";
import { CORE_VALUES } from "@/lib/constants";
import { staggerContainer, staggerItem } from "@/lib/motion";

const iconMap: Record<string, LucideIcon> = {
  ShieldCheck,
  Award,
  Lightbulb,
  Clock,
  Users,
  Target,
};

export function CoreValues() {
  return (
    <Section variant="default">
      <Container>
        <SectionHeading
          centered
          subtitle="Our Core Values"
          title="What Drives Us Forward."
          description="These principles shape our culture, guide our decisions, and ensure we consistently deliver excellence to our clients and partners."
          className="mx-auto"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
        >
          {CORE_VALUES.map((value) => {
            const IconComponent = iconMap[value.icon];
            
            return (
              <motion.div 
                key={value.id} 
                variants={staggerItem} 
                className="flex flex-col p-8 rounded-2xl bg-surface/30 border border-border/50 h-full"
              >
                <div className="size-14 rounded-lg bg-primary/5 flex items-center justify-center mb-6 shrink-0">
                  {IconComponent && <IconComponent className="size-7 text-primary" />}
                </div>
                
                <h3 className="text-xl font-bold font-manrope text-primary mb-3">
                  {value.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed flex-1">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </Section>
  );
}
