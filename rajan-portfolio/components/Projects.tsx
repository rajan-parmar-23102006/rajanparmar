"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./ui/SectionWrapper";
import { projects } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function Projects() {
  const visibleProjects = projects.filter(
    (project) => !project.title.toLowerCase().includes("comming soon")
  );

  return (
    <SectionWrapper id="projects" className="bg-black/30">
      <div className="max-w-7xl w-full">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Featured <span className="text-cyan-400">Projects</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-6">
          {visibleProjects.map((project, index) => {
            const cardHref = project.liveLink?.trim() || project.githubLink || "";
            const hasLink = Boolean(cardHref && cardHref !== "#");

            const cardContent = (
              <div className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-white/10 bg-[#07111d] shadow-[0_18px_60px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40">
                <div className="relative aspect-[4/3] bg-slate-950">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-800" />
                  )}
                  <div className="absolute inset-0 bg-black/25" />
                  <div className="absolute inset-x-0 top-0 flex justify-end p-4">
                    <div className="rounded-full bg-black/50 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-slate-200">
                      {project.liveLink?.trim() ? "Live" : "Code"}
                    </div>
                  </div>
                </div>

                <div className="flex flex-1 flex-col justify-between gap-4 p-5">
                  <div>
                    <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-cyan-400">
                      {project.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-cyan-300"
                      >
                        {tech.trim()}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-xs uppercase text-slate-400 tracking-[0.2em]">
                      {project.category || "Web App"}
                    </span>
                    <ArrowUpRight size={18} className="text-cyan-400" />
                  </div>
                </div>
              </div>
            );

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                {hasLink ? (
                  <a
                    href={cardHref}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="block"
                  >
                    {cardContent}
                  </a>
                ) : (
                  <div className="block">{cardContent}</div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
