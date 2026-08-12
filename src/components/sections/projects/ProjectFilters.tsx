"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export interface ProjectFiltersProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  className?: string;
}

export function ProjectFilters({
  categories,
  activeCategory,
  onCategoryChange,
  className,
}: ProjectFiltersProps) {
  return (
    <div className={cn("flex flex-wrap items-center gap-2 md:gap-3", className)}>
      {categories.map((category) => {
        const isActive = activeCategory === category;
        return (
          <Button
            key={category}
            onClick={() => onCategoryChange(category)}
            variant={isActive ? "default" : "outline"}
            className="rounded-full px-5 py-2 h-auto text-sm"
          >
            {category === "All" ? "All Projects" : category}
          </Button>
        );
      })}
    </div>
  );
}
