"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Container } from "../../layout/Container";
import { Section } from "../../common/Section";
import { SectionHeading } from "../../common/SectionHeading";
import { BaseCard } from "../../common/BaseCard";
import { ServiceCapability } from "@/types";
import { staggerContainer, staggerItem } from "@/lib/motion";
import * as Icons from "lucide-react";
import { LucideIcon } from "lucide-react";

interface ServiceCapabilitiesProps {
  capabilities: ServiceCapability[];
}

export function ServiceCapabilities({ capabilities }: ServiceCapabilitiesProps) {
  return (
    <Section variant="default">
      <Container>
        <SectionHeading
          centered
          subtitle="Our Capabilities"
          title="Technical Excellence & Scope."
          description="We bring specialized expertise and rigorous standards to every phase of project execution."
          className="mx-auto"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10"
        >
          {capabilities.map((capability) => {
            // Dynamically get the icon component from lucide-react
            const IconComponent = (Icons as Record<string, any>)[capability.icon] as LucideIcon;
            
            return (
              <motion.div key={capability.id} variants={staggerItem} className="h-full">
                <BaseCard padding="large" className="h-full flex flex-col items-start bg-surface/30 border-border/50 hover:bg-white transition-colors duration-300">
                  <div className="size-12 rounded-lg bg-primary flex items-center justify-center mb-6 shrink-0">
                    {IconComponent && <IconComponent className="size-6 text-white" />}
                  </div>
                  
                  <h3 className="text-xl font-bold font-manrope text-primary mb-3">
                    {capability.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed flex-1">
                    {capability.description}
                  </p>
                </BaseCard>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </Section>
  );
}
