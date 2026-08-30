"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import { getWhatsAppLink, cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const isHome = pathname === "/";
  const isDark = isHome && !isScrolled;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isDark
          ? "bg-transparent py-5"
          : isScrolled
            ? "bg-white/90 backdrop-blur-xl py-3 shadow-[0_1px_3px_rgba(0,0,0,0.08)]"
            : "bg-white py-4 border-b border-taupe-200"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <span className={cn(
            "font-heading text-xl font-bold tracking-tight transition-colors duration-300",
            isDark ? "text-white" : "text-forest-900"
          )}>
            Professional Pet Care
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-brass-500 group-hover:scale-150 transition-transform duration-300"></span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative px-4 py-2 text-sm font-medium transition-colors duration-300",
                isActive(link.href)
                  ? isDark ? "text-white" : "text-forest-900"
                  : isDark ? "text-taupe-200 hover:text-white" : "text-taupe-500 hover:text-forest-900"
              )}
            >
              {link.label}
              {/* Active underline */}
              {isActive(link.href) && (
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-brass-500 rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">

          <a
            href={getWhatsAppLink("Hi, I'd like to know more about your services.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-brass-500 hover:bg-brass-600 text-forest-900 text-sm font-semibold rounded-full transition-all duration-300 hover:shadow-[0_4px_16px_rgba(214,163,101,0.3)]"
          >
            WhatsApp Us
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={cn("lg:hidden p-2 -mr-2", isDark ? "text-white" : "text-forest-900")}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[56px] bg-white z-40 flex flex-col">
          <nav className="flex flex-col px-6 pt-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "py-4 text-lg font-medium border-b border-taupe-200 transition-colors",
                  isActive(link.href)
                    ? "text-forest-900 border-b-brass-500"
                    : "text-taupe-500 hover:text-forest-900"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-4 px-6 mt-auto pb-10">
            <a
              href="tel:+919952074007"
              className="flex items-center justify-center gap-2 w-full py-4 border border-taupe-200 text-forest-900 rounded-full font-medium hover:bg-oatmeal transition-colors"
            >
              <Phone size={18} />
              <span>+91 99520 74007</span>
            </a>
            <a
              href={getWhatsAppLink("Hi, I'd like to know more about your services.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-4 bg-brass-500 hover:bg-brass-600 text-forest-900 rounded-full font-semibold transition-colors"
            >
              WhatsApp Us
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
