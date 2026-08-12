import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  description,
  centered = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 mb-10 md:mb-16",
        centered && "text-center items-center",
        className
      )}
    >
      {subtitle && (
        <span className="text-muted-foreground font-semibold uppercase tracking-wider text-sm">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-manrope font-bold text-primary">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground max-w-2xl text-lg mt-2">
          {description}
        </p>
      )}
    </div>
  );
}
