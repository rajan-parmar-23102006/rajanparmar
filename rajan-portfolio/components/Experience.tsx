"use client";

import SectionWrapper from "./ui/SectionWrapper";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    id: 1,
    type: "Internship",
    title: "Full Stack Developer Intern",
    company: "Tech Company Name",
    date: "June 2024 - August 2024",
    responsibilities: [
      "Developed and maintained web applications using MERN stack",
      "Collaborated with cross-functional teams to deliver high-quality solutions",
      "Implemented RESTful APIs and integrated third-party services",
      "Improved application performance by 30% through code optimization",
    ],
  },
  {
    id: 2,
    type: "Freelance",
    title: "Frontend Developer",
    company: "Freelance",
    date: "January 2024 - May 2024",
    responsibilities: [
      "Built responsive websites for clients using React and Tailwind CSS",
      "Designed and implemented user-friendly interfaces",
      "Worked directly with clients to understand requirements",
      "Delivered 5+ projects on time and within budget",
    ],
  },
  {
    id: 3,
    type: "Project",
    title: "Open Source Contributor",
    company: "GitHub Community",
    date: "2023 - Present",
    responsibilities: [
      "Contributed to multiple open-source projects",
      "Fixed bugs and implemented new features",
      "Collaborated with developers worldwide",
      "Improved code quality and documentation",
    ],
  },
];

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <div className="max-w-4xl w-full">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience & <span className="text-cyan-400">Internships</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto"></div>
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-cyan-400 via-cyan-500 to-transparent"></div>

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-cyan-400 rounded-full border-4 border-gray-950 z-10 shadow-lg shadow-cyan-400/50"></div>

                {/* Experience Card - Centered */}
                <div className="ml-auto mr-auto max-w-2xl">
                  <div className="bg-gray-900/80 border border-cyan-400/30 rounded-xl p-6 hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20 group mt-8">
                    {/* Type Badge */}
                    <div className="flex justify-between items-start mb-4">
                      <span className="inline-block px-4 py-1.5 bg-cyan-500/20 text-cyan-400 text-sm font-semibold rounded-full border border-cyan-500/30">
                        <Briefcase className="w-4 h-4 inline mr-2 -mt-1" />
                        {exp.type}
                      </span>
                    </div>

                    {/* Title & Company */}
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-cyan-400 font-semibold text-lg mb-3">
                      {exp.company}
                    </p>

                    {/* Date */}
                    <div className="flex items-center gap-2 text-gray-400 mb-4">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{exp.date}</span>
                    </div>

                    {/* Responsibilities */}
                    <ul className="space-y-2">
                      {exp.responsibilities.map((item, i) => (
                        <li
                          key={i}
                          className="text-gray-300 text-sm flex items-start gap-3"
                        >
                          <span className="text-cyan-400 mt-1.5 text-lg">•</span>
                          <span className="flex-1">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
