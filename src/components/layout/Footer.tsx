import React from "react";
import Link from "next/link";
import { getWhatsAppLink } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const footerLinks = {
  services: [
    { label: "Pet Grooming", href: "/services/grooming" },
    { label: "Dog Training", href: "/services/training" },
    { label: "Pet Walking", href: "/services/walking" },
    { label: "Stud Services", href: "/services/stud" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-forest-900 relative overflow-hidden">
      {/* Gold accent line at top */}
      <div className="h-px bg-gradient-to-r from-transparent via-brass-500 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <span className="font-heading text-2xl font-bold text-white tracking-tight">
                Professional Pet Care
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-brass-500"></span>
            </Link>
            <p className="text-taupe-500 text-base leading-relaxed mb-8 max-w-md font-light">
              Exceptional care for your best friend. Professional grooming, training, and pet care delivered by an experienced team with over 5 years of dedication.
            </p>
            <a
              href={getWhatsAppLink("Hi, I'd like to get in touch regarding your pet services.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brass-500 hover:bg-brass-600 text-forest-900 text-sm font-semibold rounded-full transition-all duration-300 hover:shadow-[0_4px_16px_rgba(214,163,101,0.3)]"
            >
              Talk to Us
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-brass-500 mb-6">Services</h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-taupe-500 hover:text-white text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-brass-500 mb-6">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-taupe-500 hover:text-white text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-brass-500 mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+919952074007"
                  className="text-taupe-500 hover:text-white text-sm transition-colors duration-300"
                >
                  +91 99520 74007
                </a>
              </li>
              <li>
                <a
                  href={getWhatsAppLink("Hi, I'd like to get in touch.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-taupe-500 hover:text-white text-sm transition-colors duration-300"
                >
                  WhatsApp Us
                </a>
              </li>
              <li className="text-taupe-500 text-sm">Chennai, India</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-forest-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-taupe-500 text-sm font-light">
            © {new Date().getFullYear()} Professional Pet Care. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-taupe-500 font-light">
            <span>5+ Years Experience</span>
            <span className="w-1 h-1 rounded-full bg-brass-500"></span>
            <span>Professional Team</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
