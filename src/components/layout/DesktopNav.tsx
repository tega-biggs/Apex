"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const linkStyles =
  "relative text-sm font-medium transition-colors duration-200 hover:text-primary py-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-md";

const underlineStyles =
  "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-primary after:scale-x-0 after:origin-left after:transition-transform after:duration-200 group-hover:after:scale-x-100";

const activeUnderlineStyles = "after:scale-x-100";

export function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary Navigation" className="hidden md:block">
      <ul className="flex items-center gap-8">
        {NAV_ITEMS.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

          return (
            <li key={item.label}>
              <Link
                href={item.href}
                className={cn(
                  linkStyles,
                  underlineStyles,
                  isActive && activeUnderlineStyles,
                  isActive ? "text-primary" : "text-muted-foreground"
                )}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
