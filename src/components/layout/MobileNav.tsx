"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "@/components/common/Logo";

export function MobileNav() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
          <Menu className="size-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full max-w-sm flex flex-col p-6">
        <SheetHeader className="mb-6 border-b pb-4 text-left">
          <SheetTitle asChild>
            <Logo onClick={() => setOpen(false)} />
          </SheetTitle>
        </SheetHeader>
        
        <div className="flex-1 overflow-y-auto pr-4">
          <div className="flex flex-col gap-6">
            {NAV_ITEMS.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <div key={item.label} className="flex flex-col gap-3">
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "text-lg font-semibold transition-colors hover:text-primary",
                      isActive ? "text-primary" : "text-muted-foreground"
                    )}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="flex flex-col gap-3 pl-4 border-l-2 border-primary/25 ml-2 mt-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className={cn(
                            "text-base transition-colors hover:text-primary",
                            pathname === child.href
                              ? "text-primary font-medium"
                              : "text-muted-foreground"
                          )}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-auto pt-6 border-t border-border">
          <Button className="w-full" size="lg" asChild onClick={() => setOpen(false)}>
            <Link href="/contact">Get In Touch</Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
