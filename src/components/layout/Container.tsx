import * as React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps<T extends React.ElementType> {
  as?: T;
  className?: string;
  children: React.ReactNode;
}

export function Container<T extends React.ElementType = "div">({
  as,
  className,
  children,
  ...props
}: ContainerProps<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof ContainerProps<T>>) {
  const Component = as || "div";

  return (
    <Component
      className={cn("mx-auto w-full max-w-[1280px] px-4 md:px-6 lg:px-8", className)}
      {...props}
    >
      {children}
    </Component>
  );
}
