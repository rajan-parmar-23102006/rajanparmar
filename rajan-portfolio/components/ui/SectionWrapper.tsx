"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export default function SectionWrapper({ children, id, className = "" }: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      className={`min-h-screen flex items-center justify-center px-6 py-20 ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05, margin: "100px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{ willChange: "opacity, transform" }}
    >
      {children}
    </motion.section>
  );
}
