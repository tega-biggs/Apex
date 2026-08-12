"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Container } from "../../layout/Container";
import { Section } from "../../common/Section";
import { SectionHeading } from "../../common/SectionHeading";
import { ProcessStep } from "@/types";
import { staggerContainer, staggerItem } from "@/lib/motion";

interface ServiceProcessProps {
  steps: ProcessStep[];
  title?: string;
  description?: string;
}

export function ServiceProcess({
  steps,
  title = "Our Execution Process.",
  description = "A proven methodology ensuring consistent, high-quality results from inception to final delivery.",
}: ServiceProcessProps) {
  return (
    <Section variant="muted">
      <Container>
        <SectionHeading
          centered
          subtitle="How We Work"
          title={title}
          description={description}
          className="mx-auto"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-12"
        >
          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.li key={step.id} variants={staggerItem} className="relative flex flex-col gap-4 group">
                {/* Visual Timeline element */}
                <div className="flex items-center gap-4 mb-2">
                  <div className="size-12 rounded-full bg-white border border-primary/20 flex items-center justify-center font-manrope font-bold text-lg text-primary shadow-sm transition-colors duration-300 group-hover:bg-primary group-hover:text-white group-hover:border-primary shrink-0 z-10">
                    {index + 1}
                  </div>
                  {/* Connector Line (hidden on last item on desktop, or stacked on mobile) */}
                  <div className="hidden lg:block absolute top-6 left-12 right-[-2rem] h-[2px] bg-border z-0" />
                </div>
                
                <h3 className="text-xl font-bold font-manrope text-text-primary group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </motion.li>
            ))}
          </ol>
        </motion.div>
      </Container>
    </Section>
  );
}
