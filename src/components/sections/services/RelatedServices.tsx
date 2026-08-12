"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "../../layout/Container";
import { Section } from "../../common/Section";
import { SectionHeading } from "../../common/SectionHeading";
import { SERVICES } from "@/lib/constants";
import { BaseCard } from "../../common/BaseCard";
import { staggerContainer, staggerItem } from "@/lib/motion";
import { ArrowRight, LucideIcon } from "lucide-react";
import * as Icons from "lucide-react";

interface RelatedServicesProps {
  currentServiceSlug: string;
}

export function RelatedServices({ currentServiceSlug }: RelatedServicesProps) {
  // Filter out the current service and take up to 3 remaining services
  const currentHref = `/services/${currentServiceSlug}`;
  const relatedServices = SERVICES.filter(service => service.href !== currentHref).slice(0, 3);

  if (relatedServices.length === 0) return null;

  return (
    <Section variant="muted" className="pt-24 pb-12">
      <Container>
        <SectionHeading
          centered
          subtitle="More Capabilities"
          title="Explore Related Services."
          className="mx-auto mb-10"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {relatedServices.map((service) => {
            const IconComponent = (Icons as Record<string, any>)[service.icon] as LucideIcon;
            
            return (
              <motion.div key={service.id} variants={staggerItem} className="h-full">
                <Link href={service.href} className="block h-full outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl">
                  <BaseCard interactive padding="large" className="group h-full flex flex-col cursor-pointer bg-white">
                    <div className="size-12 rounded-lg bg-accent flex items-center justify-center mb-6 shrink-0 transition-colors group-hover:bg-primary group-hover:text-white">
                      {IconComponent && <IconComponent className="size-6 text-primary transition-colors group-hover:text-white" />}
                    </div>
                    
                    <h3 className="text-xl font-bold font-manrope text-primary mb-2">
                      {service.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed flex-1 text-sm">
                      {service.shortDescription}
                    </p>
                    
                    <div className="mt-6 flex items-center text-primary font-medium text-sm transition-colors group-hover:text-primary shrink-0">
                      View Service
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
