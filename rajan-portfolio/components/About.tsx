"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./ui/SectionWrapper";
import { personalInfo } from "@/data/personalInfo";

export default function About() {
  return (
    <SectionWrapper id="about" className="bg-gray-900/50">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Photo */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-80 h-80 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-2xl opacity-30 animate-pulse" />
            <div className="relative w-full h-full rounded-full border-4 border-cyan-500 overflow-hidden bg-gray-800">
              {/* Placeholder - Replace with your image */}
              <div className="w-full h-full flex items-center justify-center text-gray-600 text-6xl font-bold">
                RP
              </div>
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-cyan-400">Me</span>
          </h2>
          
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            {personalInfo.description}
          </p>

          <p className="text-gray-400 mb-8">
            With experience in developing diverse projects from AI assistants to comprehensive management systems, I focus on creating user-centric applications that solve real-world problems.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-800/50 border border-cyan-500/30 rounded-lg p-4 text-center">
              <h3 className="text-4xl font-bold text-cyan-400 mb-2">
                {personalInfo.stats.projectsCompleted}
              </h3>
              <p className="text-gray-400">Real Projects Built</p>
            </div>
            <div className="bg-gray-800/50 border border-cyan-500/30 rounded-lg p-4 text-center">
              <h3 className="text-4xl font-bold text-cyan-400 mb-2">
                {personalInfo.stats.yearsExperience}
              </h3>
              <p className="text-gray-400">Years Experience</p>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
