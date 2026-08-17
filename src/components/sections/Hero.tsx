"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "../layout/Container";
import { Button } from "@/components/ui/button";
import { STATISTICS } from "@/lib/constants";
import { ShieldCheck } from "lucide-react";
import { ImageOverlay } from "../common/ImageOverlay";
import { Stats } from "../common/Stats";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/motion";

export function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden bg-background pt-20 md:pt-0">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-construction.jpg"
          alt="Modern construction and infrastructure"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Navy-tinted overlay (20%) */}
        <div className="absolute inset-0 bg-primary/20" />
      </div>

      <Container className="relative z-10 flex flex-col justify-center gap-12 py-12 md:py-24">
        {/* Main Content */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="max-w-3xl flex flex-col gap-6"
        >
          <motion.div variants={staggerItem}>
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold tracking-wide uppercase mb-4">
              Integrated Multidisciplinary Solutions
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-manrope font-bold text-white leading-[1.1] tracking-tight">
              Building the Future <br className="hidden md:block" />
              With Engineering <br className="hidden md:block" />
              Excellence.
            </h1>
          </motion.div>

          <motion.p
            variants={staggerItem}
            className="text-lg md:text-xl text-white/90 font-medium max-w-2xl leading-relaxed"
          >
            Apex C&P Ltd delivers practical solutions across Construction, Interior Design, Procurement, Logistics, and Technology, helping clients turn ideas into quality results.
          </motion.p>

          <motion.div
            variants={staggerItem}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-4"
          >
            {/* Primary CTA — white fill on dark background */}
            <Button size="lg" variant="dark" className="w-full sm:w-auto" asChild>
              <Link href="/contact">Get In Touch</Link>
            </Button>
            {/* Secondary CTA — transparent with white outline on dark background */}
            <Button size="lg" variant="outline-inverse" className="w-full sm:w-auto !text-white" asChild>
              <Link href="/services">Our Services</Link>
            </Button>
          </motion.div>

          {/* Trust Indicator */}
          <motion.div
            variants={staggerItem}
            className="flex items-center gap-2 mt-4 text-white/80 text-sm font-medium"
          >
            <ShieldCheck className="size-4 text-white" />
            <span>Supporting Businesses, Organizations & Private Clients</span>
          </motion.div>
        </motion.div>

        {/* Statistics Row */}
        <motion.div initial="hidden" animate="show" className="mt-8 md:mt-12">
          <Stats data={STATISTICS} theme="dark" />
        </motion.div>
      </Container>
    </section>
  );
}
