"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/90 backdrop-blur-lg shadow-lg border-b border-gray-800/50"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <a
            href="#home"
            className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            onClick={handleLinkClick}
          >
            Rajan Parmar
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Simple Hamburger Button */}
          <button
            className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center text-gray-300 hover:text-cyan-400 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Simple Mobile Menu */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/90 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />

          {/* Menu Panel */}
          <div className="fixed top-0 right-0 bottom-0 w-[280px] bg-gray-950 border-l border-gray-800/50 z-40 md:hidden shadow-2xl">
            {/* Menu Content */}
            <div className="flex flex-col h-full pt-24 px-8">
              {/* Navigation Links */}
              <nav className="flex-1 space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block py-4 px-6 text-lg font-medium text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10 rounded-lg transition-colors border border-transparent hover:border-cyan-400/30"
                    onClick={handleLinkClick}
                  >
                    {link.name}
                  </a>
                ))}
              </nav>

              {/* Bottom Section */}
              <div className="py-6 border-t border-gray-800">
                <p className="text-sm text-gray-500 text-center mb-4">
                  Let's build something amazing
                </p>
                <a
                  href="#contact"
                  className="block w-full py-3 px-6 text-center font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:opacity-90 transition-opacity"
                  onClick={handleLinkClick}
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
