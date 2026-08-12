import * as React from "react";
import { cn } from "@/lib/utils";

interface BaseCardProps extends React.HTMLAttributes<HTMLDivElement> {
  interactive?: boolean;
  padding?: "none" | "default" | "large";
}

export const BaseCard = React.forwardRef<HTMLDivElement, BaseCardProps>(
  ({ className, interactive = false, padding = "default", children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "bg-white border border-border rounded-xl transition-all duration-300",
          interactive && "hover:shadow-hover hover:-translate-y-1 hover:border-primary/20",
          {
            "p-0": padding === "none",
            "p-6": padding === "default",
            "p-8": padding === "large",
          },
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
BaseCard.displayName = "BaseCard";
