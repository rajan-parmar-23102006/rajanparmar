"use client";

import SectionWrapper from "./ui/SectionWrapper";
import { certifications } from "@/data/certifications";
import { Award, Download, Calendar } from "lucide-react";

export default function Certifications() {
  return (
    <SectionWrapper id="certifications">
      <div className="max-w-6xl w-full">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Certifications & <span className="text-cyan-400">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto"></div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              className="bg-gray-900/80 border border-gray-800 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/10 group"
            >
              {/* Date & Icon */}
              <div className="flex items-center justify-between mb-4">
                <Award className="w-10 h-10 text-cyan-400" />
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>{cert.date}</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {cert.title}
              </h3>

              {/* Platform */}
              <p className="text-cyan-400 font-semibold text-sm mb-3">
                {cert.platform}
              </p>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                {cert.description}
              </p>

              {/* Download Button */}
              <a
                href={cert.certificateLink}
                download
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-cyan-500/20 text-cyan-400 rounded-lg hover:bg-cyan-500/30 transition-all duration-300 border border-cyan-500/30 hover:border-cyan-500/50 group/btn"
              >
                <Download className="w-4 h-4 group-hover/btn:translate-y-0.5 transition-transform" />
                <span className="text-sm font-medium">Download Certificate</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
