"use client";

import * as React from "react";
import { LucideIcon } from "lucide-react";
import { BaseCard } from "../common/BaseCard";

interface ContactCardProps {
  icon: LucideIcon;
  title: string;
  details: string[];
  action?: {
    label: string;
    href: string;
  };
}

export function ContactCard({ icon: Icon, title, details, action }: ContactCardProps) {
  return (
    <BaseCard padding="large" className="h-full flex flex-col bg-white">
      <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 shrink-0">
        <Icon className="size-6 text-primary" />
      </div>
      
      <h3 className="text-xl font-bold font-manrope text-text-primary mb-4">
        {title}
      </h3>
      
      <div className="flex flex-col gap-2 flex-1">
        {details.map((detail, idx) => (
          <p key={idx} className="text-muted-foreground leading-relaxed">
            {detail}
          </p>
        ))}
      </div>
      
      {action && (
        <div className="mt-6 pt-6 border-t border-border/50">
          <a
            href={action.href}
            className="inline-flex items-center text-primary font-semibold hover:text-primary transition-colors"
          >
            {action.label}
          </a>
        </div>
      )}
    </BaseCard>
  );
}
