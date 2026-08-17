import Link from "next/link";
import { COMPANY, FOOTER_GROUPS, CONTACT, SOCIAL_LINKS } from "@/lib/constants";
import { Container } from "./Container";
import { Logo } from "../common/Logo";
import { Button } from "@/components/ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#081828] mt-auto overflow-hidden">
      {/* Blueprint texture — 3% opacity, the brand's hidden layer */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
        style={{ backgroundImage: "url('/images/blueprint-texture.jpg')", backgroundSize: "cover" }}
      />
      <Container className="relative z-10 pt-16 pb-8 md:pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
          {/* Column 1: Company Logo & Description */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <Logo className="!text-white" />
            <p className="text-white/70 leading-relaxed max-w-sm !text-white">
              {COMPANY.description}
            </p>
          </div>

          {/* Columns 2-3: Links from FOOTER_GROUPS */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-8">
            {FOOTER_GROUPS.map((group) => (
              <div key={group.title} className="flex flex-col gap-4">
                <h3 className="font-manrope font-semibold text-white text-lg">
                  {group.title}
                </h3>
                <ul className="flex flex-col gap-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="!text-white transition-colors duration-150 ease-out hover:!text-white inline-flex"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Column 4: Contact & Socials */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h3 className="font-manrope font-semibold text-white text-lg">
              Contact
            </h3>
            <ul className="flex flex-col gap-3 text-white/60">
              <li>
                <a href={`mailto:${CONTACT.emails[0]}`} className="hover:text-white transition-colors duration-150 ease-out">
                  {CONTACT.emails[0]}
                </a>
              </li>
              <li>
                <a href={`tel:${CONTACT.phones[0].replace(/\s+/g, "")}`} className="hover:text-white transition-colors duration-150 ease-out">
                  {CONTACT.phones[0]}
                </a>
              </li>
              <li className="leading-relaxed">
                {CONTACT.address.join(", ")}
              </li>
            </ul>

            <div className="flex items-center gap-4 mt-4">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.platform}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${COMPANY.name} on ${social.platform}`}
                  className="!text-white hover:!text-white transition-colors duration-150 ease-out font-medium text-sm"
                >
                  {social.platform}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="border-t border-white/10 mt-12 mb-12 pt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-manrope font-bold text-white mb-2">
              Ready to start your next project?
            </h2>
            <p className="text-white/70 text-lg">
              Let us discuss how Apex C&P Ltd can deliver reliable solutions tailored to your business or project.
            </p>
          </div>
          {/* White fill button — dark variant — visible against #081828 background */}
          <Button size="lg" variant="dark" asChild className="shrink-0">
            <Link href="/contact">Get In Touch</Link>
          </Button>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/45">
          <p>
            &copy; {currentYear} {COMPANY.legalName}. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white/80 transition-colors duration-150 ease-out">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white/80 transition-colors duration-150 ease-out">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
