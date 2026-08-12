"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "../layout/Container";
import { ImageOverlay } from "./ImageOverlay";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/motion";

import { Breadcrumbs, type BreadcrumbItem } from "./Breadcrumbs";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs: BreadcrumbItem[];
  imageUrl: string;
  imageAlt?: string;
}

export function PageHero({
  title,
  subtitle,
  breadcrumbs,
  imageUrl,
  imageAlt = "Background image",
}: PageHeroProps) {
  return (
    <section className="relative w-full min-h-[50vh] flex items-center overflow-hidden bg-primary pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-30"
        />
        <ImageOverlay variant="heavy" className="opacity-90" />
      </div>

      <Container className="relative z-10 flex flex-col justify-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="max-w-4xl flex flex-col gap-4"
        >
          {/* Breadcrumbs */}
          <motion.div variants={staggerItem} className="mb-4">
            <Breadcrumbs items={breadcrumbs} light />
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={staggerItem}
            className="text-4xl md:text-5xl lg:text-6xl font-manrope font-bold text-white leading-tight tracking-tight"
          >
            {title}
          </motion.h1>

          {/* Subtitle */}
          {subtitle && (
            <motion.p
              variants={staggerItem}
              className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed mt-2"
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>
      </Container>
    </section>
  );
}
