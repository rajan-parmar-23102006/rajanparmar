"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./ui/SectionWrapper";
import { experiences } from "@/data/experience";
import { Briefcase, Calendar } from "lucide-react";

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Experience & <span className="text-cyan-400">Internships</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto mb-12"></div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-cyan-400/30"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative mb-12 ${
                  index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-auto"
                } md:w-1/2`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full border-4 border-gray-900"></div>

                {/* Content Card */}
                <div className="bg-gray-900 p-6 rounded-lg border border-cyan-400/20 hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/10">
                  {/* Header */}
                  <div className={`flex items-start ${index % 2 === 0 ? 'justify-end' : 'justify-start'} mb-3`}>
                    <div className="flex items-center gap-2">
                      <Briefcase className="text-cyan-400" />
                      <span className="text-xs bg-cyan-400/20 text-cyan-400 px-3 py-1 rounded-full">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <h3 className={`text-xl font-bold text-white mb-2 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    {exp.title}
                  </h3>
                  <p className={`text-cyan-400 font-semibold mb-2 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    {exp.company}
                  </p>

                  <div className={`flex items-center gap-2 text-gray-400 text-sm mb-4 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                    <Calendar size={14} />
                    <span>{exp.duration}</span>
                  </div>

                  {/* Description */}
                  <ul className={`space-y-2 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                        <span className="text-cyan-400 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
