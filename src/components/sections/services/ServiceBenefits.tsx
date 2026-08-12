"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Container } from "../../layout/Container";
import { Section } from "../../common/Section";
import { SectionHeading } from "../../common/SectionHeading";
import { BaseCard } from "../../common/BaseCard";
import { ServiceBenefit } from "@/types";
import { staggerContainer, staggerItem } from "@/lib/motion";

interface ServiceBenefitsProps {
  benefits: ServiceBenefit[];
}

export function ServiceBenefits({ benefits }: ServiceBenefitsProps) {
  return (
    <Section variant="muted">
      <Container>
        <SectionHeading
          centered
          subtitle="The Apex Advantage"
          title="Why Choose Us."
          description="We deliver measurable value, ensuring your strategic objectives are met with precision and reliability."
          className="mx-auto"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-10"
        >
          {benefits.map((benefit) => (
            <motion.div key={benefit.id} variants={staggerItem} className="h-full">
              <BaseCard className="h-full flex flex-col gap-4 p-8 bg-white hover:border-primary/20 transition-colors">
                <div className="shrink-0">
                  <CheckCircle2 className="size-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold font-manrope text-primary mt-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed flex-1">
                  {benefit.description}
                </p>
              </BaseCard>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
