"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "../layout/Container";
import { Section } from "../common/Section";
import { SectionHeading } from "../common/SectionHeading";
import { SERVICES } from "@/lib/constants";
import { ArrowRight, Building2, Palette, ShoppingCart, Truck, Monitor, LucideIcon } from "lucide-react";
import { BaseCard } from "../common/BaseCard";
import { staggerContainer, staggerItem } from "@/lib/motion";

// Helper to map string icon names to Lucide components
const iconMap: Record<string, LucideIcon> = {
  Building2,
  Palette,
  ShoppingCart,
  Truck,
  Monitor,
};

export function ServicesOverview() {
  return (
    <Section variant="muted">
      <Container>
        <SectionHeading
          centered
          subtitle="Our Services"
          title="Comprehensive Solutions Under One Roof."
          description="Explore our integrated divisions working in synergy to provide seamless, high-quality results for your projects."
          className="mx-auto"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SERVICES.map((service) => {
            const IconComponent = iconMap[service.icon];
            return (
              <motion.div key={service.id} variants={staggerItem} className="h-full">
                <Link href={service.href} className="block h-full outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl">
                  <BaseCard interactive padding="large" className="group h-full flex flex-col cursor-pointer">
                    <div className="size-14 rounded-lg bg-muted flex items-center justify-center mb-6 shrink-0 transition-colors duration-200 ease-out group-hover:bg-primary group-hover:text-white">
                      {IconComponent && <IconComponent className="size-7 text-primary transition-colors duration-200 ease-out group-hover:text-white" />}
                    </div>
                    
                    <h3 className="text-xl font-bold font-manrope text-primary mb-3">
                      {service.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed flex-1">
                      {service.shortDescription}
                    </p>
                    
                    <div className="mt-8 flex items-center text-primary font-medium text-sm transition-colors group-hover:text-primary shrink-0">
                      Learn More
                      <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </BaseCard>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </Section>
  );
}
