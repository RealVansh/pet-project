"use client";

import React, { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: string; // accepted but not used for different variants yet
}

export function AnimatedSection({ children, className = "", delay = 0 }: AnimatedSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  // Normalize delay: if > 10, treat as milliseconds and convert to seconds
  const normalizedDelay = delay > 10 ? delay / 1000 : delay;

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, delay: normalizedDelay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedSection;
