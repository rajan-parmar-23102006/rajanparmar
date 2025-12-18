import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import StarryBackground from "@/components/StarryBackground"; // ← Add this

export default function Home() {
  return (
    <>
      <StarryBackground /> {/* ← Add this FIRST */}
      <div className="relative z-10"> {/* ← Wrap all content */}
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}
