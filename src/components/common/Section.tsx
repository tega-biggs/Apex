import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const sectionVariants = cva("section-padding w-full", {
  variants: {
    variant: {
      default: "bg-white",
      muted: "bg-surface",
      primary: "bg-primary text-primary-foreground",
      dark: "bg-[#081828] text-white",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface SectionProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {
  children: React.ReactNode;
}

export function Section({
  children,
  className,
  variant,
  ...props
}: SectionProps) {
  return (
    <section className={cn(sectionVariants({ variant, className }))} {...props}>
      {children}
    </section>
  );
}
