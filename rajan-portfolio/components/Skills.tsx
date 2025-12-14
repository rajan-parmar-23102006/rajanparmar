"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./ui/SectionWrapper";
import Card from "./ui/Card";
import { skills } from "@/data/skills";
import { 
  SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs,
  SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb, SiPython, 
  SiGit, SiVite
} from "react-icons/si";

const iconMap: any = {
  "HTML5": SiHtml5,
  "CSS3": SiCss3,
  "JavaScript": SiJavascript,
  "TypeScript": SiTypescript,
  "React": SiReact,
  "Next.js": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  "Node.js": SiNodedotjs,
  "Express": SiExpress,
  "MongoDB": SiMongodb,
  "Python": SiPython,
  "Git & GitHub": SiGit,
  "Vite": SiVite,
};

const colorMap: any = {
  "HTML5": "text-orange-500",
  "CSS3": "text-blue-500",
  "JavaScript": "text-yellow-400",
  "TypeScript": "text-blue-400",
  "React": "text-cyan-400",
  "Next.js": "text-white",
  "Tailwind CSS": "text-cyan-300",
  "Node.js": "text-green-500",
  "Express": "text-gray-400",
  "MongoDB": "text-green-400",
  "Python": "text-blue-300",
  "Git & GitHub": "text-orange-600",
  "Vite": "text-purple-400",
};

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <div className="max-w-6xl w-full">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Tech <span className="text-cyan-400">Stack</span>
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const Icon = iconMap[skill.name];
            const color = colorMap[skill.name];

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="text-center group cursor-pointer">
                  {Icon && (
                    <Icon className={`text-5xl mx-auto mb-4 ${color} group-hover:scale-110 transition-transform duration-300`} />
                  )}
                  <h3 className="font-semibold text-gray-200">{skill.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{skill.category}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
