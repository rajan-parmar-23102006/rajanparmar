"use client";

export default function StarryBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Darker space background for more contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020817] via-[#0a0e27] to-[#020817]"></div>
      
      {/* Bright stars - 3 layers */}
      <div className="stars-small"></div>
      <div className="stars-medium"></div>
      <div className="stars-large"></div>
      
      {/* Brighter nebula glow clouds */}
      <div className="absolute top-20 left-20 w-[600px] h-[600px] bg-cyan-500/15 rounded-full blur-[100px] animate-pulse-slow"></div>
      <div className="absolute bottom-40 right-20 w-[700px] h-[700px] bg-blue-500/15 rounded-full blur-[120px] animate-pulse-slower"></div>
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-purple-500/12 rounded-full blur-[100px] animate-pulse-slow"></div>
    </div>
  );
}
