"use client";

import * as React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Container } from "../../layout/Container";
import { Section } from "../../common/Section";
import { ContactCard } from "../../cards/ContactCard";
import { ContactForm } from "../../forms/ContactForm";
import { staggerContainer, staggerItem } from "@/lib/motion";
import { motion } from "framer-motion";

export function ContactSection() {
  return (
    <Section variant="muted" className="relative overflow-hidden pt-16 md:pt-24 pb-20">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 opacity-[0.03] mix-blend-multiply pointer-events-none" style={{ backgroundImage: "url('/images/blueprint-texture.jpg')", backgroundSize: "cover" }} />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-surface hidden lg:block rounded-l-3xl border-l border-border/50 z-0" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:pr-8">
            <div className="mb-4">
              <span className="inline-block py-1 px-3 bg-primary/10 text-primary rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
                Get in Touch
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-manrope text-text-primary mb-4 leading-tight">
                Let's discuss your next big project.
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Whether you have a specific requirement or just want to explore how Apex C&P can support your organization, our team is ready to help.
              </p>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4"
            >
              <motion.div variants={staggerItem} className="h-full">
                <ContactCard
                  icon={Phone}
                  title="Phone"
                  details={["+234 811 606 4877"]}
                  action={{ label: "Call us", href: "tel:+2348116064877" }}
                />
              </motion.div>

              <motion.div variants={staggerItem} className="h-full">
                <ContactCard
                  icon={Mail}
                  title="Email"
                  details={["info@apexcandp.com", "projects@apexcandp.com"]}
                  action={{ label: "Send an email", href: "mailto:info@apexcandp.com" }}
                />
              </motion.div>

              <motion.div variants={staggerItem} className="h-full sm:col-span-2 lg:col-span-1">
                <ContactCard
                  icon={MapPin}
                  title="Head Office"
                  details={["2 Iwezor Street, Off Dandi Street", "Ebo Quarter, Irhirhi", "Edo, Nigeria"]}
                  action={{ label: "Get Directions", href: "#map" }}
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-full"
            >
              <ContactForm />
            </motion.div>
          </div>

        </div>
      </Container>
    </Section>
  );
}
