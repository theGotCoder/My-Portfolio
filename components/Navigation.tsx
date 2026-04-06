"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/50" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 h-16">
        <div className="text-xl font-bold tracking-tighter text-zinc-50">ANIS HABIB .</div>
        <div className="hidden md:flex items-center space-x-8 font-sans text-sm tracking-tight font-medium">
          <a className="text-zinc-400 hover:text-zinc-100 transition-colors duration-200" href="#projects">
            Projects
          </a>
          <a className="text-zinc-400 hover:text-zinc-100 transition-colors duration-200" href="#stack">
            Stack
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
          className="group flex items-center justify-center gap-2 bg-primary text-on-primary px-5 py-2 rounded-lg text-sm font-semibold cursor-pointer shadow-[0_0_10px_rgba(167,139,250,0.2)] hover:shadow-[0_0_20px_rgba(167,139,250,0.6)] active:scale-95 transition-all duration-300"
        >
          <span>Download CV</span>
          <Download size={16} className="group-hover:translate-y-1 transition-transform duration-300" />
        </a>
      </div>
    </nav>
  );
}
