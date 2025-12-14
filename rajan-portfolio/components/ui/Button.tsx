"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function Button({ 
  children, 
  variant = "primary", 
  href, 
  onClick, 
  className 
}: ButtonProps) {
  const baseStyles = "px-6 py-3 rounded-lg font-medium transition-all duration-300";
  const variants = {
    primary: "bg-cyan-500 hover:bg-cyan-600 text-white shadow-lg shadow-cyan-500/50",
    secondary: "border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white"
  };

  const Component = motion.a;

  if (href) {
    return (
      <Component
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={cn(baseStyles, variants[variant], className)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </Component>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={cn(baseStyles, variants[variant], className)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
}
