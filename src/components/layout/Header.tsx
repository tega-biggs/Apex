"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Container } from "./Container";
import { Logo } from "../common/Logo";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";
import { Button } from "@/components/ui/button";

export function Header() {
  const { scrollY } = useScroll();
  const [hasScrolled, setHasScrolled] = React.useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setHasScrolled(latest > 10);
  });

  return (
    <motion.header
      initial={{ boxShadow: "none" }}
      animate={{
        boxShadow: hasScrolled
          ? "0 4px 20px -4px rgb(0 0 0 / 0.08)"
          : "0 0px 0px 0px rgb(0 0 0 / 0)",
      }}
      transition={{ duration: 0.3 }}
      className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md transition-colors"
    >
      <Container className="flex h-[72px] md:h-[80px] items-center justify-between">
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <Logo />
        </div>

        {/* Center: Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-center">
          <DesktopNav />
        </div>

        {/* Right: CTA & Mobile Menu */}
        <div className="flex flex-shrink-0 items-center gap-4">
          <Button asChild className="hidden md:flex">
            <Link href="/contact">Get In Touch</Link>
          </Button>
          <MobileNav />
        </div>
      </Container>
    </motion.header>
  );
}
