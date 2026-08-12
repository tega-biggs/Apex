import * as React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const overlayVariants = cva("absolute inset-0 z-0", {
  variants: {
    variant: {
      default: "bg-primary/20 mix-blend-overlay",
      heavy: "bg-gradient-to-r from-primary via-primary/90 to-primary/40",
      gradient: "bg-gradient-to-b from-transparent via-transparent to-primary/80",
      dark: "bg-black/40",
      light: "bg-white/10 mix-blend-overlay",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface ImageOverlayProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof overlayVariants> {}

export function ImageOverlay({
  className,
  variant,
  ...props
}: ImageOverlayProps) {
  return (
    <div
      className={cn(overlayVariants({ variant, className }))}
      {...props}
    />
  );
}
