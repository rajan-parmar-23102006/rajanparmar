"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./ui/SectionWrapper";
import { Github, GitFork, Star, Code } from "lucide-react";

export default function GitHubStats() {
  const username = "rajan-parmar-23102006"; // Your GitHub username

  const stats = [
    {
      icon: Code,
      label: "Total Commits",
      value: "500+",
      color: "text-cyan-400",
    },
    {
      icon: Star,
      label: "Stars Earned",
      value: "50+",
      color: "text-yellow-400",
    },
    {
      icon: GitFork,
      label: "Repositories",
      value: "30+",
      color: "text-green-400",
    },
    {
      icon: Github,
      label: "Contributions",
      value: "Active",
      color: "text-purple-400",
    },
  ];

  return (
    <SectionWrapper id="github-stats">
      <div className="max-w-6xl w-full">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            GitHub <span className="text-cyan-400">Statistics</span>
          </h2>
          <p className="text-gray-400 text-lg">
            My coding journey and contributions
          </p>
        </motion.div>

        {/* Quick Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-gray-900/80 border border-gray-800 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 text-center group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <stat.icon
                className={`${stat.color} w-8 h-8 mx-auto mb-3 group-hover:scale-110 transition-transform`}
              />
              <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
              <p className="text-2xl font-bold text-white">{stat.value}</p>
            </motion.div>
          ))}
        </div>

        {/* GitHub Stats Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* GitHub Stats Card */}
          <motion.div
            className="bg-gray-900/80 border border-gray-800 rounded-xl p-4 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=dark&bg_color=1a1a2e&border_color=06b6d4&icon_color=06b6d4&text_color=ffffff&title_color=06b6d4&hide_border=true`}
              alt="GitHub Stats"
              className="w-full h-auto rounded-lg"
              loading="lazy"
            />
          </motion.div>

          {/* GitHub Streak Card */}
          <motion.div
            className="bg-gray-900/80 border border-gray-800 rounded-xl p-4 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=dark&background=1a1a2e&border=06b6d4&stroke=06b6d4&ring=06b6d4&fire=06b6d4&currStreakLabel=06b6d4&sideLabels=ffffff&currStreakNum=ffffff&dates=ffffff&sideNums=ffffff&hide_border=true`}
              alt="GitHub Streak"
              className="w-full h-auto rounded-lg"
              loading="lazy"
            />
          </motion.div>
        </div>

        {/* Top Languages */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Languages Card */}
          <motion.div
            className="bg-gray-900/80 border border-gray-800 rounded-xl p-4 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=dark&bg_color=1a1a2e&border_color=06b6d4&text_color=ffffff&title_color=06b6d4&hide_border=true`}
              alt="Top Languages"
              className="w-full h-auto rounded-lg"
              loading="lazy"
            />
          </motion.div>

          {/* Activity Graph */}
          <motion.div
            className="bg-gray-900/80 border border-gray-800 rounded-xl p-4 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src={`https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=react-dark&bg_color=1a1a2e&color=06b6d4&line=06b6d4&point=ffffff&area=true&hide_border=true`}
              alt="Contribution Graph"
              className="w-full h-auto rounded-lg"
              loading="lazy"
            />
          </motion.div>
        </div>

        {/* View GitHub Profile Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            View Full GitHub Profile
          </motion.a>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
