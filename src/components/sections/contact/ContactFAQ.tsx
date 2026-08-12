"use client";

import * as React from "react";
import { Container } from "../../layout/Container";
import { Section } from "../../common/Section";
import { SectionHeading } from "../../common/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    question: "How quickly will I receive a response?",
    answer: "We aim to respond to all initial enquiries within 24 hours. For urgent project matters, please call our primary office line for immediate assistance.",
  },
  {
    question: "Which locations do you serve?",
    answer: "While our headquarters is in Lagos, we manage and execute projects nationwide across Nigeria. We also have strategic partnerships that allow us to operate across West Africa for specific large-scale logistics and procurement contracts.",
  },
  {
    question: "Do you handle large commercial projects?",
    answer: "Yes, large-scale commercial and industrial projects are our specialty. Our multidisciplinary approach is designed specifically to handle complex, high-value developments from end-to-end.",
  },
  {
    question: "Can I request multiple services for a single project?",
    answer: "Absolutely. In fact, most of our clients engage us for our integrated approach. We frequently combine our Construction, Interior Design, and Technology services to deliver complete, turnkey solutions under one unified management structure.",
  },
];

export function ContactFAQ() {
  return (
    <Section className="py-20 md:py-24">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          <div className="md:col-span-5">
            <SectionHeading
              subtitle="Common Questions"
              title="Frequently Asked Questions."
              description="Find quick answers to common questions about working with Apex C&P Ltd."
              className="mb-0"
            />
          </div>
          
          <div className="md:col-span-7">
            <Accordion type="single" collapsible className="w-full">
              {FAQS.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-border">
                  <AccordionTrigger className="text-left text-lg font-manrope font-semibold text-text-primary hover:text-primary py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
        </div>
      </Container>
    </Section>
  );
}
