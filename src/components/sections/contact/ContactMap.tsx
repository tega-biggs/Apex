"use client";

import * as React from "react";
import { Container } from "../../layout/Container";
import { Section } from "../../common/Section";

export function ContactMap() {
  return (
    <Section className="py-0 pb-20 md:pb-24" id="map">
      <Container>
        <div className="w-full aspect-video md:aspect-auto md:h-[500px] rounded-2xl overflow-hidden bg-muted border border-border/50 relative group">
          {/* Fallback placeholder for development or until real maps key is provided */}
          <div className="absolute inset-0 flex items-center justify-center bg-surface/50 backdrop-blur-sm z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <span className="text-sm font-medium px-4 py-2 bg-white rounded-full shadow-sm text-primary">
              Map Interaction Enabled
            </span>
          </div>
          
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126844.06233481232!2d3.3551532087595564!3d6.536640539130768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1714578119024!5m2!1sen!2sng"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="filter grayscale-[50%] contrast-125 transition-all duration-500 group-hover:grayscale-0"
          ></iframe>
        </div>
      </Container>
    </Section>
  );
}
