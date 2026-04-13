import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import ProjectDetailClient from "./ProjectDetailClient";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

// Pre-generate all project pages at build time
export function generateStaticParams() {
  return projects
    .filter((p) => p.slug && p.slug !== "")
    .map((p) => ({ slug: p.slug }));
}

// Dynamic page title per project
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return {
    title: project ? `${project.title} — Rajan Parmar` : "Project — Rajan Parmar",
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();
  return <ProjectDetailClient project={project} />;
}
