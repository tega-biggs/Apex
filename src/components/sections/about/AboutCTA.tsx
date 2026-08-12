"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "../../layout/Container";
import { Section } from "../../common/Section";
import { Button } from "@/components/ui/button";
import { fadeUp } from "@/lib/motion";

export function AboutCTA() {
  return (
    <Section variant="default" className="pb-24 md:pb-32">
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="relative rounded-3xl overflow-hidden bg-[#081828] px-6 py-16 md:px-12 md:py-24 text-center shadow-2xl"
        >
          {/* Blueprint texture — 3% opacity, the brand's hidden layer */}
          <div
            className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
            style={{ backgroundImage: "url('/images/blueprint-texture.jpg')", backgroundSize: "cover" }}
          />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-manrope font-bold text-white mb-6 tracking-tight">
              Let's Build Your Next Project Together
            </h2>
            <p className="text-lg text-white/80 mb-10 max-w-2xl leading-relaxed">
              Whether you're planning a construction project, sourcing critical materials, or transforming your business with technology, Apex C&P Ltd is ready to help.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              {/* Primary CTA — white fill on dark background */}
              <Button size="lg" variant="dark" className="w-full sm:w-auto" asChild>
                <Link href="/contact">Get In Touch</Link>
              </Button>
              {/* Secondary CTA — transparent white-outline on dark background */}
              <Button size="lg" variant="outline-inverse" className="w-full sm:w-auto" asChild>
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
