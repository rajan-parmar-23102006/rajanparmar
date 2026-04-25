"use client";

import { motion } from "framer-motion";
import Button from "./ui/Button";
import { personalInfo } from "@/data/personalInfo";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function Hero() {
  // Use optimized hook for detecting reduced motion needs
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black" />

      {/* Floating Animated Orbs - Simplified on Mobile */}
      <motion.div
        className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"
        style={{ willChange: reduceMotion ? 'auto' : 'transform' }}
        animate={
          reduceMotion
            ? {} // No animation on mobile
            : {
                x: [0, 30, 0],
                y: [0, 50, 0],
              }
        }
        transition={
          reduceMotion
            ? {}
            : {
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }
        }
      />
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        style={{ willChange: reduceMotion ? 'auto' : 'transform' }}
        animate={
          reduceMotion
            ? {} // No animation on mobile
            : {
                x: [0, -40, 0],
                y: [0, -30, 0],
              }
        }
        transition={
          reduceMotion
            ? {}
            : {
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }
        }
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Main Title with Scale Animation */}
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: reduceMotion ? 0.3 : 0.8,
            type: reduceMotion ? "tween" : "spring",
            damping: 15,
          }}
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            {personalInfo.name}
          </span>
        </motion.h1>

        {/* Description with Fade-in */}
        <motion.p
          className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0.3 : 0.6, delay: reduceMotion ? 0.1 : 0.3 }}
        >
          4th Semester B.Tech Computer Engineering Student passionate about
          building elegant web solutions with modern technologies. Turning ideas
          into reality through code.
        </motion.p>

        {/* Buttons with Stagger Animation */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0.3 : 0.6, delay: reduceMotion ? 0.2 : 0.5 }}
        >
          <Button href="#projects" variant="primary">
            View Projects
          </Button>
          <Button href="/RajanParmar_resume.pdf" variant="secondary" download>
            Download Resume
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
