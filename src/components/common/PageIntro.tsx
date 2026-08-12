"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Container } from "../layout/Container";
import { Section } from "./Section";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface PageIntroProps {
  eyebrow: string;
  title: string;
  description: string;
  centered?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export function PageIntro({
  eyebrow,
  title,
  description,
  centered = false,
  className,
  children,
}: PageIntroProps) {
  return (
    <Section variant="default" className={cn("pt-16 md:pt-24 pb-12 md:pb-16", className)}>
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className={cn(
            "flex flex-col gap-6",
            centered ? "items-center text-center mx-auto" : "",
            children ? "mb-12 md:mb-16" : ""
          )}
        >
          <motion.div variants={staggerItem} className="max-w-3xl flex flex-col gap-4">
            <span
              className={cn(
                "inline-block py-1 px-3 rounded-full bg-primary/5 border border-primary/10 text-primary text-sm font-semibold tracking-wide uppercase self-start",
                centered && "self-center"
              )}
            >
              {eyebrow}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-manrope font-bold text-text-primary tracking-tight leading-tight">
              {title}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {description}
            </p>
          </motion.div>
          {children && (
            <motion.div variants={fadeUp} className="w-full">
              {children}
            </motion.div>
          )}
        </motion.div>
      </Container>
    </Section>
  );
}
