"use client";

import SectionWrapper from "./ui/SectionWrapper";
import { Briefcase, Calendar, Award, Clock } from "lucide-react";

const experiences = [
  {
    id: 1,
    type: "Internship",
    title: "Python Developer Intern",
    company: "Quicksend compony",
    date: "June 2025 - july 2025",
    certificateLink: "https://drive.google.com/open?id=1o8gQX4gKBOotemfpEkdcOQTDUXcLUuOL&authuser=0",
    responsibilities: [
      "Developed and maintained Python-based applications with a focus on AI and automation and build real life AI projects.",
      "Built an AI chatbot using Python by applying core concepts such as functions, loops, and logic building.",
      "Worked with basic machine learning and NLP concepts to enhance chatbot responses and accuracy.",
      "Collaborated with the team to test, debug, and improve AI-driven features for better performance.",
    ],
  },
  {
    id: 2,
    type: "hackathon",
    title: "machine learning developer",
    company: "DAIICT Hackathon",
    date: "January 2026 - May 2026",
    certificateLink: "https://www.linkedin.com/posts/rajan-parmar-458978301_hackathon-daiict-innovation-activity-7416688976557858817-p56W?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE01K4QB9rHCHEu09g5Ck6yeJ-CBI4WVnLI", // Replace with actual certificate link
    responsibilities: [
      "Built an Early Disease Detection System using machine learning.",
      "Preprocessed and prepared data for effective model training.",
      "Trained and tested ML models to improve early prediction accuracy.",
      "Worked with the team to optimize model performance and results."
    ],
  },
  {
    id: 3,
    type: "certification",
    title: "Green Skills & Artificial Intelligence",
    company: "Edunet Foundation | AICTE | Shell",
    date: "November 2025",
    certificateLink: "https://www.linkedin.com/posts/rajan-parmar-458978301_greenskills-artificialintelligence-skills4future-activity-7409254771045629952-w_AN?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE01K4QB9rHCHEu09g5Ck6yeJ-CBI4WVnLI",
    responsibilities: [
      "Completed a foundation course on Green Skills and Artificial Intelligence.",
      "Learned core AI concepts and their applications in sustainable development.",
      "Gained exposure to environmentally responsible technology practices.",
      "Participated in collaborative learning and practical AI-based activities."
    ],
  },
  {
    id: 4,
    type: "hackathon",
    title: "TechNova Hackathon – 2nd Position",
    company: "Gyannanjari Innovation University | Google Student Ambassador",
    date: "November 2025",
    certificateLink: "https://www.linkedin.com/posts/rajan-parmar-458978301_technovahackathon-achievement-hackathon-activity-7408052270095015936-erfb?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE01K4QB9rHCHEu09g5Ck6yeJ-CBI4WVnLI",
    responsibilities: [
      "Secured 2nd position in TechNova Hackathon 2025 among multiple competing teams.",
      "Designed and presented an innovative technical solution under time constraints.",
      "Collaborated with team members to implement and refine the project effectively.",
      "Demonstrated strong problem-solving, teamwork, and presentation skills."
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-4xl w-full mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience & <span className="text-cyan-400">Internships</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto"></div>
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative">
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-cyan-400 rounded-full border-4 border-gray-950 z-10 shadow-lg shadow-cyan-400/50"></div>

                {/* Experience Card - Centered */}
                <div className="ml-auto mr-auto max-w-2xl">
                  <div className="bg-gray-900/80 border border-cyan-400/30 rounded-xl p-6 hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20 group md:mt-8">
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
                    <ul className="space-y-2 mb-5">
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

                    {/* View Certificate Button */}
                    {exp.certificateLink && (
                      <a
                        href={exp.certificateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 text-cyan-400 text-sm font-medium rounded-lg border border-cyan-500/30 hover:bg-cyan-500/30 hover:border-cyan-400 transition-all duration-300"
                      >
                        <Award className="w-4 h-4" />
                        View post
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Coming Soon Card */}
            <div className="relative">
              {/* Timeline Dot */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-gray-500 rounded-full border-4 border-gray-950 z-10 shadow-lg shadow-gray-500/50"></div>

              {/* Coming Soon Card - Centered */}
              <div className="ml-auto mr-auto max-w-2xl">
                <div className="bg-gray-900/80 border border-dashed border-gray-600 rounded-xl p-8 md:mt-8 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center">
                      <Clock className="w-8 h-8 text-cyan-400 animate-pulse" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-400 mb-2">
                    More Experiences are Coming Soon...
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Other experiences, internships & achievements are on the way. Stay tuned!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
