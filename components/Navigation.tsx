"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Menu, X } from "lucide-react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/50" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 h-16">
        <div className="text-xl font-bold tracking-tighter text-zinc-50">ANIS HABIB</div>
        <div className="hidden md:flex items-center space-x-8 font-sans text-sm tracking-tight font-medium">
          <a className="text-zinc-400 hover:text-zinc-100 transition-colors duration-200" href="#stack">
            Stack
          </a>
          <a className="text-zinc-400 hover:text-zinc-100 transition-colors duration-200" href="#projects">
            Projects
          </a>
          <a className="text-zinc-400 hover:text-zinc-100 transition-colors duration-200" href="#experience">
            Experience
          </a>
          <a className="text-zinc-400 hover:text-zinc-100 transition-colors duration-200" href="#contact">
            Contact
          </a>
        </div>
        <a
          href="/cv.pdf"
          download="Anis_Habib_CV.pdf"
          className="hidden md:flex group items-center justify-center gap-2 bg-primary text-secondary px-5 py-2 text-sm font-semibold cursor-pointer shadow-[0_0_10px_rgba(0,211,243,0.2)] hover:shadow-[0_0_20px_rgba(33,182,132,0.6)] active:scale-95 transition-all duration-300"
        >
          <span className="text-zinc-950">Download CV</span>
          <Download size={16} className="text-zinc-950 group-hover:translate-y-1 transition-transform duration-300" />
        </a>
        <button
          className="md:hidden text-zinc-300 hover:text-zinc-50 focus:outline-none"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-100 flex flex-col bg-zinc-950 h-dvh w-full"
          >
            <div className="flex justify-between items-center px-6 h-16 border-b border-zinc-800/50">
              <div className="text-xl font-bold tracking-tighter text-zinc-50">ANIS HABIB</div>
              <button
                className="text-zinc-300 hover:text-zinc-50 focus:outline-none"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col items-center justify-center flex-1 space-y-8 font-sans text-lg tracking-tight font-medium">
              <a className="text-zinc-400 hover:text-zinc-100 transition-colors duration-200" href="#stack" onClick={() => setMobileMenuOpen(false)}>
                Stack
              </a>
              <a className="text-zinc-400 hover:text-zinc-100 transition-colors duration-200" href="#projects" onClick={() => setMobileMenuOpen(false)}>
                Projects
              </a>
              <a className="text-zinc-400 hover:text-zinc-100 transition-colors duration-200" href="#experience" onClick={() => setMobileMenuOpen(false)}>
                Experience
              </a>
              <a className="text-zinc-400 hover:text-zinc-100 transition-colors duration-200" href="#contact" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </a>
              <a
                href="/cv.pdf"
                download="Anis_Habib_CV.pdf"
                className="flex items-center justify-center gap-2 bg-primary text-zinc-950 px-6 py-3 mt-4  text-base font-semibold shadow-[0_0_15px_rgba(0,211,243,0.3)]"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Download CV</span>
                <Download size={18} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
