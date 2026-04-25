"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./ui/SectionWrapper";
import { projects } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  // Only show projects that have a real title and slug
  const visibleProjects = projects.filter(
    (p) =>
      p.title.toLowerCase() !== "comming soon..." &&
      p.title.toLowerCase() !== "coming soon" &&
      p.image !== ""
  );

  return (
    <SectionWrapper id="projects" className="bg-black/30">
      <div className="max-w-7xl w-full">

        {/* heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Rajan Parmar <span className="text-cyan-400">Projects</span>
          </h2>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Explore Rajan Parmar's portfolio of web development projects, showcasing expertise in MERN stack,
            JavaScript, React, and modern web technologies. Each project demonstrates Rajan Parmar's commitment
            to creating innovative and user-friendly applications.
          </p>
          <div className="w-16 h-0.5 bg-cyan-400 mx-auto mt-4" />
        </motion.div>

        {/* 1 col → 2 col → 3 col */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {visibleProjects.map((project, index) => {
            const isClickable = Boolean(project.slug);

            const CardInner = (
              <div className="flex flex-col h-full bg-[#0d1117] border border-white/[0.08] rounded-2xl overflow-hidden transition-all duration-300 group-hover:border-cyan-500/40 group-hover:-translate-y-1">

                {/* image area */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-gradient-to-br from-[#0d1f3c] to-[#0a2a2a]">
                  {project.image && (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      style={{ objectFit: project.slug === "gym-ai-chatbot" ? "contain" : "cover" }}
                      className="transition-transform duration-500 group-hover:scale-105"
                    />
                  )}

                  {/* LIVE / CODE badge */}
                  <div className="absolute top-3 right-3">
                    {project.liveLink && project.liveLink !== "#" && project.liveLink !== "" ? (
                      <span className="text-[11px] font-bold tracking-widest px-2.5 py-1 rounded bg-black/60 text-white border border-white/20 backdrop-blur-sm">
                        LIVE
                      </span>
                    ) : project.githubLink ? (
                      <span className="text-[11px] font-bold tracking-widest px-2.5 py-1 rounded bg-black/60 text-white border border-white/20 backdrop-blur-sm">
                        CODE
                      </span>
                    ) : null}
                  </div>
                </div>

                {/* footer */}
                <div className="flex flex-col gap-3 p-4 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-white font-semibold text-[15px] leading-snug group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    {isClickable && (
                      <ArrowUpRight
                        size={17}
                        className="shrink-0 mt-0.5 text-gray-600 group-hover:text-cyan-400 transition-colors"
                      />
                    )}
                  </div>

                  {project.tech && project.tech.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t: string) => (
                        <span
                          key={t}
                          className="text-[11px] px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-medium uppercase tracking-wide"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}

                  <p className="text-[11px] text-gray-600 uppercase tracking-widest mt-auto pt-1">
                    {project.category}
                  </p>
                </div>
              </div>
            );

            return (
              <motion.div
                key={project.id}
                className="group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
              >
                {isClickable ? (
                  <Link href={`/projects/${project.slug}`} className="block h-full">
                    {CardInner}
                  </Link>
                ) : (
                  <div className="h-full cursor-default">{CardInner}</div>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </SectionWrapper>
  );
}
