"use client";

import React from "react";
import { getWhatsAppLink } from "@/lib/utils";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <a
      href={getWhatsAppLink("Hi, I'd like to know more about your services.")}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-colors focus:outline-none focus:ring-4 focus:ring-green-500/50 group"
      aria-label="Contact us on WhatsApp"
    >
      {/* 
        Using a standard MessageCircle for the prototype. 
        In production, we can swap this for a dedicated WhatsApp SVG if preferred.
      */}
      <MessageCircle size={28} className="group-hover:scale-110 transition-transform" />
      
      {/* Subtle ping animation for attention */}
      <span className="absolute inset-0 rounded-full border-2 border-green-500 opacity-0 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]"></span>
    </a>
  );
}
