"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./ui/SectionWrapper";
import Card from "./ui/Card";
import { skills } from "@/data/skills";

import { 
  SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiFlask,
  SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb, SiPython, 
  SiGit, SiVite, SiPostman, SiFigma, SiVscodium
} from "react-icons/si";

import { 
  SiNextdotjs
} from "react-icons/si";

const iconMap: Record<string, any> = {
  "HTML5": SiHtml5,
  "CSS3": SiCss3,
  "JavaScript": SiJavascript,
  "TypeScript": SiTypescript,
  "React": SiReact,
  "Flask": SiFlask,
  "Tailwind CSS": SiTailwindcss,
  "Node.js": SiNodedotjs,
  "Express": SiExpress,
  "MongoDB": SiMongodb,
  "Next.js": SiNextdotjs,
  "Python": SiPython,
  "Git & GitHub": SiGit,
  "Vite": SiVite,
  "VS Code": SiVscodium,
  "Postman": SiPostman,
  "Figma": SiFigma,
};

const colorMap: Record<string, string> = {
  "HTML5": "text-orange-500",
  "CSS3": "text-blue-500",
  "JavaScript": "text-yellow-400",
  "TypeScript": "text-blue-400",
  "React": "text-cyan-400",
  "Flask": "text-gray-200",
  "Tailwind CSS": "text-cyan-300",
  "Node.js": "text-green-500",
  "Express": "text-gray-400",
  "MongoDB": "text-green-400",
  "Python": "text-blue-300",
  "Git & GitHub": "text-orange-600",
  "Vite": "text-purple-400",
  "VS Code": "text-blue-400",
  "Postman": "text-orange-400",
  "Figma": "text-purple-400",
};

const categories = [
  {
    key: "Frontend",
    label: "Frontend",
    accent: "from-cyan-500/20 to-blue-500/10",
    border: "border-cyan-500/20",
    dot: "bg-cyan-400",
    tag: "text-cyan-400",
  },
  {
    key: "Backend",
    label: "Backend",
    accent: "from-green-500/20 to-teal-500/10",
    border: "border-green-500/20",
    dot: "bg-green-400",
    tag: "text-green-400",
  },
  {
    key: "Database",
    label: "Database",
    accent: "from-emerald-500/20 to-green-500/10",
    border: "border-emerald-500/20",
    dot: "bg-emerald-400",
    tag: "text-emerald-400",
  },
  {
    key: "Version Control",
    label: "Version Control",
    accent: "from-orange-500/20 to-red-500/10",
    border: "border-orange-500/20",
    dot: "bg-orange-400",
    tag: "text-orange-400",
  },
  {
    key: "Tools",
    label: "Tools",
    accent: "from-purple-500/20 to-pink-500/10",
    border: "border-purple-500/20",
    dot: "bg-purple-400",
    tag: "text-purple-400",
  },
];

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <div className="max-w-6xl w-full">

        {/* heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Tech <span className="text-cyan-400">Stack</span>
          </h2>
          <div className="w-16 h-0.5 bg-cyan-400 mx-auto mt-4" />
        </motion.div>

        {/* category blocks */}
        <div className="flex flex-col gap-6">
          {categories.map((cat, catIdx) => {
            const catSkills = skills.filter((s) => s.category === cat.key);
            if (catSkills.length === 0) return null;

            return (
              <motion.div
                key={cat.key}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIdx * 0.08 }}
                className={`rounded-2xl border ${cat.border} bg-gradient-to-r ${cat.accent} p-5 md:p-6`}
              >
                {/* category header */}
                <div className="flex items-center gap-2.5 mb-5">
                  <span className={`w-2 h-2 rounded-full ${cat.dot} shrink-0`} />
                  <span className={`text-xs font-bold uppercase tracking-[0.18em] ${cat.tag}`}>
                    {cat.label}
                  </span>
                  <span className="text-xs text-gray-600 ml-1">
                    · {catSkills.length} {catSkills.length === 1 ? "technology" : "technologies"}
                  </span>
                </div>

                {/* skill pills */}
                <div className="flex flex-wrap gap-2.5">
                  {catSkills.map((skill, i) => {
                    const Icon = iconMap[skill.name];
                    const color = colorMap[skill.name] ?? "text-gray-400";
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.85 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: catIdx * 0.06 + i * 0.04 }}
                        whileHover={{ scale: 1.06, y: -2 }}
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-950/70 border border-white/[0.07] hover:border-white/20 transition-all duration-200 cursor-default group min-w-[120px]"
                      >
                        {Icon && (
                          <Icon
                            className={`text-2xl shrink-0 ${color} group-hover:scale-110 transition-transform duration-200`}
                          />
                        )}
                        <span className="text-base font-semibold text-gray-200 whitespace-nowrap">
                          {skill.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </SectionWrapper>
  );
}