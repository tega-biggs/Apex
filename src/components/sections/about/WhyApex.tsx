"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Container } from "../../layout/Container";
import { Section } from "../../common/Section";
import { SectionHeading } from "../../common/SectionHeading";
import { WHY_APEX } from "@/lib/constants";
import { staggerContainer, staggerItem } from "@/lib/motion";
import { BaseCard } from "../../common/BaseCard";

export function WhyApex() {
  return (
    <Section variant="muted">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            subtitle="The Apex Advantage"
            title="Why Partner With Us."
            description="We deliver measurable value and reliable execution, ensuring your projects succeed without compromise."
            className="mb-0 max-w-2xl"
          />
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {WHY_APEX.map((item) => (
            <motion.div key={item.id} variants={staggerItem} className="h-full">
              <BaseCard className="h-full flex flex-col sm:flex-row gap-6 p-8 bg-white hover:border-primary/20 transition-colors">
                <div className="shrink-0 mt-1">
                  <CheckCircle2 className="size-8 text-primary" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-bold font-manrope text-primary">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </BaseCard>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
