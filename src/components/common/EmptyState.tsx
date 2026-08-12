"use client";

import * as React from "react";
import { FolderSearch, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface EmptyStateProps {
  icon?: LucideIcon;
  title: string;
  description?: string;
  action?: React.ReactNode;
  className?: string;
}

export function EmptyState({
  icon: Icon = FolderSearch,
  title,
  description,
  action,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center text-center p-12 md:p-24 rounded-2xl border border-dashed border-border/60 bg-surface/30",
        className
      )}
    >
      <div className="size-16 rounded-full bg-primary/5 flex items-center justify-center mb-6">
        <Icon className="size-8 text-primary/60" />
      </div>
      <h3 className="text-xl font-bold font-manrope text-text-primary mb-2">
        {title}
      </h3>
      {description && (
        <p className="text-muted-foreground max-w-md mx-auto mb-6">
          {description}
        </p>
      )}
      {action && <div>{action}</div>}
    </div>
  );
}
