"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "../../layout/Container";
import { Section } from "../../common/Section";
import { Stats } from "../../common/Stats";
import { ABOUT_COMPANY_STORY, STATISTICS } from "@/lib/constants";
import { slideInLeft, imageReveal } from "@/lib/motion";
import { ImageOverlay } from "../../common/ImageOverlay";

export function CompanyStory() {
  return (
    <Section variant="default" className="pt-20 md:pt-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Text Content */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-10"
          >
            <div>
              <span className="inline-block py-1 px-3 rounded-full bg-primary/5 border border-primary/10 text-primary text-sm font-semibold tracking-wide uppercase mb-4">
                Who We Are
              </span>
              <h2 className="text-3xl md:text-4xl font-manrope font-bold text-text-primary mb-4 tracking-tight leading-tight">
                A Legacy of Excellence in Nigeria.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {ABOUT_COMPANY_STORY.whoWeAre}
              </p>
            </div>

            <div>
              <span className="inline-block py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary-hover text-sm font-semibold tracking-wide uppercase mb-4">
                What We Do
              </span>
              <h3 className="text-2xl md:text-3xl font-manrope font-bold text-text-primary mb-4 tracking-tight">
                Integrated Multidisciplinary Solutions.
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {ABOUT_COMPANY_STORY.whatWeDo}
              </p>
            </div>
          </motion.div>

          {/* Right: Image Content */}
          <motion.div
            variants={imageReveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-[4/5] lg:h-[600px] rounded-2xl overflow-hidden shadow-large lg:mt-0"
          >
            <Image
              src="/images/corporate-hq.jpg"
              alt="Apex C&P Ltd Corporate Headquarters"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <ImageOverlay variant="light" className="bg-primary/5" />
          </motion.div>
        </div>

        {/* Statistics Row */}
        <div className="mt-20 md:mt-32">
          <Stats data={STATISTICS} theme="light" className="max-w-none" />
        </div>
      </Container>
    </Section>
  );
}
