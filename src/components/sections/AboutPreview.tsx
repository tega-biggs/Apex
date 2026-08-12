"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Container } from "../layout/Container";
import { Section } from "../common/Section";
import { SectionHeading } from "../common/SectionHeading";
import { Button } from "@/components/ui/button";
import { ImageOverlay } from "../common/ImageOverlay";
import { slideInLeft, imageReveal } from "@/lib/motion";

const strengths = [
  "Integrated multidisciplinary solutions",
  "Quality-driven execution",
  "Experienced professionals",
  "Reliable project delivery",
];

export function AboutPreview() {
  return (
    <Section variant="default">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text Content */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col"
          >
            <SectionHeading
              subtitle="Who We Are"
              title="Delivering Excellence Across Multiple Disciplines."
              description="Apex C&P Ltd is a premier Nigerian company dedicated to transforming visions into reality. We integrate construction, interior design, procurement, logistics, and technology to provide seamless, end-to-end solutions for our clients."
            />
            
            <ul className="flex flex-col gap-4 mb-10 -mt-2">
              {strengths.map((strength, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="size-5 text-primary shrink-0" />
                  <span className="text-text-primary font-medium">{strength}</span>
                </li>
              ))}
            </ul>

            <div>
              <Button size="lg" asChild>
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </motion.div>

          {/* Right: Image Content */}
          <motion.div
            variants={imageReveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-[3/4] lg:min-h-[500px] rounded-2xl overflow-hidden shadow-large"
          >
            <Image
              src="/images/project-commercial.jpg"
              alt="Apex C&P Ltd Professional Team"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <ImageOverlay variant="light" className="bg-primary/5" />
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
