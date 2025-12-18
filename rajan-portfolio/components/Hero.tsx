"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import Button from "./ui/Button";
import { personalInfo } from "@/data/personalInfo";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Gradient
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-blue-500/10 animate-pulse" />
      </div> */}

      {/* Floating Animated Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"
          animate={{
            y: [0, 100, 0],
            x: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            y: [0, -80, 0],
            x: [0, -60, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        {/* Main Title with Scale Animation */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 100
          }}
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-gradient">
            {personalInfo.name}
          </span>
        </motion.h1>

        {/* Typing Animation with Gradient */}
        <motion.div
          className="text-2xl md:text-4xl font-bold mb-8 h-20 flex items-center justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <TypeAnimation
            sequence={[
              'MERN Developer',
              2000,
              'Full Stack Developer',
              2000,
              'Computer Engineering Student',
              2000,
              'Problem Solver',
              2000,
              'React Enthusiast',
              2000,
            ]}
            wrapper="span"
            speed={50}
            className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
            repeat={Infinity}
            cursor={true}
            style={{ display: 'inline-block' }}
          />
        </motion.div>

        {/* Description with Fade-in */}
        <motion.p
          className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          4th Semester B.Tech Computer Engineering Student passionate about building
          elegant web solutions with modern technologies. Turning ideas into reality through code.
        </motion.p>

        {/* Buttons with Stagger Animation */}
        {/* Buttons with Stagger Animation */}
        <motion.div
          className="flex flex-wrap gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button href="#projects">View Projects</Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex"
          >
            <a href="/RajanParmar_resume.pdf" download="RajanParmar_resume.pdf">
              <Button variant="secondary">Download Resume</Button>
            </a>
          </motion.div>
        </motion.div>

      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center p-2 hover:border-cyan-300 transition-colors">
          <motion.div
            className="w-1.5 h-3 bg-cyan-400 rounded-full"
            animate={{
              y: [0, 16, 0],
              opacity: [1, 0.4, 1]
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
