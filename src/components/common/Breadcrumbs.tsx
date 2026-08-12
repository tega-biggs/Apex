"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
  light?: boolean; // If true, colors are optimized for dark backgrounds (like hero images)
}

export function Breadcrumbs({ items, className, light = false }: BreadcrumbsProps) {
  if (!items || items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className={cn("flex flex-wrap items-center gap-1.5 text-sm font-medium", light ? "text-white/70" : "text-muted-foreground")}>
        {items.map((crumb, index) => {
          const isLast = index === items.length - 1;
          
          return (
            <li key={`${crumb.label}-${index}`} className="flex items-center gap-1.5">
              {crumb.href && !isLast ? (
                <Link
                  href={crumb.href}
                  className={cn(
                    "transition-colors",
                    light ? "hover:text-white" : "hover:text-primary"
                  )}
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className={cn(
                  isLast && light ? "text-white font-semibold" : "",
                  isLast && !light ? "text-text-primary font-semibold" : ""
                )}>
                  {crumb.label}
                </span>
              )}
              {!isLast && (
                <span className={cn("flex items-center justify-center", light ? "text-white/40" : "text-muted-foreground/40")}>
                  <ChevronRight className="size-3.5" />
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
