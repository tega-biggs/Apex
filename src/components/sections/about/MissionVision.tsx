"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Target, Eye, LucideIcon } from "lucide-react";
import { Container } from "../../layout/Container";
import { Section } from "../../common/Section";
import { BaseCard } from "../../common/BaseCard";
import { MISSION_VISION } from "@/lib/constants";
import { staggerContainer, staggerItem } from "@/lib/motion";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  Target,
  Eye,
};

export function MissionVision() {
  return (
    <Section variant="muted">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        >
          {MISSION_VISION.map((item) => {
            const IconComponent = iconMap[item.icon];
            
            return (
              <motion.div key={item.id} variants={staggerItem} className="flex">
                <BaseCard 
                  padding="large" 
                  className={cn(
                    "flex-1 flex flex-col items-center text-center",
                    "border-transparent bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
                  )}
                >
                  <div className="size-20 rounded-full bg-primary/5 flex items-center justify-center mb-8">
                    {IconComponent && <IconComponent className="size-10 text-primary" />}
                  </div>
                  
                  <h3 className="text-2xl font-bold font-manrope text-primary mb-4 tracking-tight">
                    {item.title}
                  </h3>
                  
                  <div className="h-[2px] w-12 bg-primary rounded-full mb-6" />
                  
                  <p className="text-lg text-muted-foreground leading-relaxed flex-1">
                    {item.description}
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
