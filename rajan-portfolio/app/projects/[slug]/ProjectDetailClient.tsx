"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

// Type matches exactly what's in projects.ts
type Project = {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  tech: string[];
  image: string;
  images: string[];
  liveLink: string;
  githubLink: string;
  category: string;
  type: string;
  year: string;
  featured: boolean;
};

type Props = { project: Project };

export default function ProjectDetailClient({ project }: Props) {
  const hasLive = Boolean(project.liveLink && project.liveLink !== "#" && project.liveLink !== "");
  const hasCode = Boolean(project.githubLink && project.githubLink !== "");

  // Use images array if available, fallback to single image field
  const img1 = project.images?.[0] || project.image || "";
  const img2 = project.images?.[1] || "";

  const meta = [
    { label: "Category", value: project.category },
    { label: "Type",     value: project.type },
    { label: "Year",     value: project.year },
    { label: "Stack",    value: project.tech.length > 0 ? project.tech.join(", ") : "" },
  ].filter((m) => m.value);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 py-10 md:py-16">

        {/* ── Back ── */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35 }}
        >
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors text-sm mb-10 group w-fit"
          >
            <ArrowLeft
              size={15}
              className="transition-transform group-hover:-translate-x-1"
            />
            Home
          </Link>
        </motion.div>

        {/* ── Title ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="mb-8"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-2">
            {project.title}
          </h1>

          {project.subtitle && (
            <p className="text-gray-400 text-base md:text-lg mt-2">
              {project.subtitle}
            </p>
          )}

          {hasLive && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-4 text-cyan-400 hover:text-cyan-300 transition-colors text-sm border-b border-cyan-400/40 hover:border-cyan-300 pb-0.5 w-fit"
            >
              Visit Website
              <ExternalLink size={13} />
            </a>
          )}
        </motion.div>

        {/* ── Description ── */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="text-gray-300 text-base md:text-lg leading-relaxed mb-10"
        >
          {project.longDescription || project.description}
        </motion.p>

        {/* ── Images ──
             Desktop : side by side (if 2 images)
             Mobile  : stacked
        ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className={`mb-12 ${img2 ? "grid grid-cols-1 md:grid-cols-2 gap-4" : ""}`}
        >
          {img1 && (
            <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/[0.08] bg-gray-900">
              <Image
                src={img1}
                alt={`${project.title} screenshot 1`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 448px"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          )}

          {img2 && (
            <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/[0.08] bg-gray-900">
              <Image
                src={img2}
                alt={`${project.title} screenshot 2`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 448px"
                style={{ objectFit: "cover" }}
              />
            </div>
          )}
        </motion.div>

        {/* ── Meta row ── */}
        {meta.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/[0.06] rounded-2xl overflow-hidden mb-10 border border-white/[0.06]"
          >
            {meta.map(({ label, value }) => (
              <div key={label} className="bg-gray-950/80 px-5 py-5">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1.5">
                  {label}
                </p>
                <p className="text-white font-medium text-sm leading-snug break-words">
                  {value}
                </p>
              </div>
            ))}
          </motion.div>
        )}

        {/* ── Tech tags ── */}
        {project.tech.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.25 }}
            className="flex flex-wrap gap-2 mb-12"
          >
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-sm px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-medium"
              >
                {t}
              </span>
            ))}
          </motion.div>
        )}

        {/* ── Action buttons ── */}
        {(hasLive || hasCode) && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 pt-2"
          >
            {hasLive && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-3.5 bg-cyan-500 hover:bg-cyan-400 text-gray-950 font-semibold rounded-xl transition-all duration-300 hover:-translate-y-0.5 text-sm"
              >
                <ExternalLink size={17} />
                Live Demo
              </a>
            )}
            {hasCode && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-3.5 bg-transparent border border-gray-700 hover:border-cyan-500/60 hover:bg-cyan-500/5 text-white font-semibold rounded-xl transition-all duration-300 hover:-translate-y-0.5 text-sm"
              >
                <Github size={17} />
                View Code
              </a>
            )}
          </motion.div>
        )}

      </div>
    </main>
  );
}
