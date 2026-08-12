"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import type { Statistic } from "@/types";
import { fadeUp } from "@/lib/motion";

interface StatsProps extends HTMLMotionProps<"div"> {
  data: Statistic[];
  theme?: "light" | "dark";
}

export function Stats({ data, theme = "dark", className, ...props }: StatsProps) {
  return (
    <motion.div
      variants={fadeUp}
      className={cn(
        "grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12 pt-8 border-t max-w-4xl",
        theme === "dark" ? "border-white/10" : "border-border",
        className
      )}
      {...props}
    >
      {data.map((stat, index) => (
        <div key={index} className="flex flex-col gap-1 border-l-2 border-primary pl-4">
          <span
            className={cn(
              "text-3xl md:text-4xl font-manrope font-bold tracking-tight",
              theme === "dark" ? "text-white" : "text-primary"
            )}
          >
            {stat.value}
          </span>
          <span
            className={cn(
              "text-sm md:text-base font-medium",
              theme === "dark" ? "text-white/70" : "text-muted-foreground"
            )}
          >
            {stat.label}
          </span>
        </div>
      ))}
    </motion.div>
  );
}
