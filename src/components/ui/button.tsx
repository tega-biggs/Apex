import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[12px] text-sm font-medium transition-all duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        /* Navy fill — primary action on light backgrounds */
        default:
          "bg-primary !text-white shadow-sm hover:bg-primary-hover hover:!text-white hover:shadow-md active:bg-primary-active active:!text-white active:shadow-sm",
        /* White fill, navy text — primary action on dark/navy backgrounds (Hero, CTA, Footer) */
        dark:
          "bg-white text-primary shadow-sm hover:bg-white/90 hover:shadow-md active:bg-white/80 active:shadow-sm",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        /* Transparent + navy border — secondary action on light backgrounds */
        outline:
          "bg-transparent border-[1.5px] border-primary-border text-primary hover:bg-primary hover:text-white active:bg-primary-active",
        /* Transparent + white border — secondary action on dark/navy backgrounds */
        "outline-inverse":
          "bg-transparent border-[1.5px] border-white/65 text-white hover:bg-white/10 hover:border-white active:bg-white/18",
        /* Transparent, no border — tertiary actions */
        secondary:
          "bg-transparent border-[1.5px] border-primary-border text-primary hover:bg-primary hover:text-white active:bg-primary-active",
        ghost:
          "bg-transparent text-primary hover:bg-primary/5 active:bg-primary/10",
        link:
          "bg-transparent text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 rounded-[10px] px-3 text-xs",
        lg: "h-14 rounded-[12px] px-8 text-base font-semibold",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
