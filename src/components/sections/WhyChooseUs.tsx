"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Container } from "../layout/Container";
import { Section } from "../common/Section";
import { SectionHeading } from "../common/SectionHeading";
import { WHY_CHOOSE_US } from "@/lib/constants";
import { Briefcase, Clock, ShieldCheck, Users, LucideIcon } from "lucide-react";
import { BaseCard } from "../common/BaseCard";
import { staggerContainer, staggerItem } from "@/lib/motion";

const iconMap: Record<string, LucideIcon> = {
  Briefcase,
  Clock,
  ShieldCheck,
  Users,
};

export function WhyChooseUs() {
  return (
    <Section variant="default">
      <Container>
        <SectionHeading
          centered
          subtitle="Why Choose Apex C&P Ltd"
          title="The Standard of Excellence."
          description="We combine technical expertise, rigorous standards, and a client-first philosophy to deliver exceptional value on every project."
          className="mx-auto"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-4"
        >
          {WHY_CHOOSE_US.map((item) => {
            const IconComponent = iconMap[item.icon];
            return (
              <motion.div key={item.id} variants={staggerItem}>
                <BaseCard className="flex flex-col sm:flex-row gap-6 p-8 bg-surface/50 border-border/50 hover:bg-surface">
                  <div className="shrink-0">
                    <div className="size-16 rounded-full bg-primary flex items-center justify-center">
                      {IconComponent && <IconComponent className="size-8 text-white" />}
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-bold font-manrope text-primary">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </BaseCard>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </Section>
  );
}
