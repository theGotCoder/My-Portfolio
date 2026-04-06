"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "../../data/portfolio";
import { Terminal, Database, Code2, Settings, Leaf } from "lucide-react";

export default function Hero() {
  const { hero } = PORTFOLIO_DATA;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-tertiary-fixed-dim/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content Column */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-outline-variant bg-surface-container-low text-primary text-xs font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            {hero.status}
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-on-background leading-[1.1] mb-6">
            {hero.titlePrimary} <span className="text-primary text-glow">{hero.titleHighlight}</span>
            {hero.titleSecondary}
          </h1>
          <p className="text-on-surface-variant text-lg md:text-xl max-w-xl mb-10 leading-relaxed mx-auto lg:mx-0">
            {hero.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              className="bg-primary text-on-primary px-8 py-4 rounded-xl font-bold text-lg hover:shadow-[0_0_20px_rgba(167,139,250,0.4)] transition-all duration-300 active:scale-95 text-center"
              href="#projects"
            >
              {hero.primaryActionText}
            </a>
            <a
              className="border border-outline-variant bg-surface-container-low text-on-surface px-8 py-4 rounded-xl font-bold text-lg hover:bg-surface-container transition-all duration-300 active:scale-95 text-center"
              href="#contact"
            >
              {hero.secondaryActionText}
            </a>
          </div>
        </motion.div>

        {/* Right 3D/Visual Column */}
        <div className="relative hidden lg:block">
          <div className="relative w-full aspect-square flex items-center justify-center">
            {/* Central Node */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, type: "spring" }}
              className="w-48 h-48 bg-surface-container-highest border border-outline-variant rounded-3xl flex items-center justify-center shadow-2xl z-10"
            >
              <Terminal className="text-primary w-20 h-20" />
            </motion.div>

            {/* Orbiting Elements - only render if mounted to avoid hydration mismatch with animations */}
            {mounted && (
              <>
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-10 left-20"
                >
                  <div className="glass-panel p-4 rounded-2xl flex flex-col items-center gap-2 border-glow hover:scale-110 transition-transform">
                    <Database className="text-tertiary-fixed-dim w-8 h-8" />
                    <span className="text-xs font-bold text-zinc-400">DB</span>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-10 right-20"
                >
                  <div className="glass-panel p-4 rounded-2xl flex flex-col items-center gap-2 border-glow hover:scale-110 transition-transform">
                    <Code2 className="text-primary w-8 h-8" />
                    <span className="text-xs font-bold text-zinc-400">REACT</span>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ x: [0, 15, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  className="absolute top-40 right-10"
                >
                  <div className="glass-panel p-4 rounded-2xl flex flex-col items-center gap-2 border-glow hover:scale-110 transition-transform">
                    <Settings className="text-zinc-100 w-8 h-8" />
                    <span className="text-xs font-bold text-zinc-400">API</span>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ x: [0, -15, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  className="absolute bottom-40 left-10"
                >
                  <div className="glass-panel p-4 rounded-2xl flex flex-col items-center gap-2 border-glow hover:scale-110 transition-transform">
                    <Leaf className="text-tertiary-fixed-dim w-8 h-8" />
                    <span className="text-xs font-bold text-zinc-400">NODE</span>
                  </div>
                </motion.div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
