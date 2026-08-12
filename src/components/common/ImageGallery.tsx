"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface ImageGalleryProps {
  images: string[];
  columns?: 2 | 3 | 4;
  aspectRatio?: "square" | "video" | "portrait" | "auto";
  className?: string;
  altPrefix?: string;
}

export function ImageGallery({
  images,
  columns = 3,
  aspectRatio = "video",
  className,
  altPrefix = "Gallery image",
}: ImageGalleryProps) {
  if (!images || images.length === 0) return null;

  const getGridCols = () => {
    switch (columns) {
      case 2: return "grid-cols-1 md:grid-cols-2";
      case 4: return "grid-cols-1 md:grid-cols-2 lg:grid-cols-4";
      case 3:
      default: return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
    }
  };

  const getAspectRatioClass = () => {
    switch (aspectRatio) {
      case "square": return "aspect-square";
      case "portrait": return "aspect-[3/4]";
      case "auto": return "";
      case "video":
      default: return "aspect-video";
    }
  };

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      className={cn("grid gap-4 md:gap-6", getGridCols(), className)}
    >
      {images.map((src, index) => (
        <motion.div
          key={`${src}-${index}`}
          variants={staggerItem}
          className={cn(
            "relative w-full overflow-hidden rounded-xl bg-muted group",
            getAspectRatioClass()
          )}
        >
          <Image
            src={src}
            alt={altPrefix ? `${altPrefix} ${index + 1}` : ""}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
