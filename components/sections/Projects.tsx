"use client";

import React from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "../../data/portfolio";
import { ExternalLink, Code } from "lucide-react";

export default function Projects() {
  const { projects } = PORTFOLIO_DATA;

  return (
    <section className="py-24 bg-background" id="projects">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
        >
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold tracking-tighter mb-4">{projects.title}</h2>
            <p className="text-on-surface-variant text-lg">{projects.description}</p>
          </div>
          <div className="text-primary font-mono text-sm tracking-widest">{projects.badge}</div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.items.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative aspect-video rounded-3xl overflow-hidden border border-outline-variant bg-surface-container"
            >
              {/* Note: In a real app we'd use next/image here, but using standard img to easily handle external URLs from the layout */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent flex flex-col justify-end p-8">
                <div className="glass-panel p-6 rounded-2xl translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-2 text-on-surface">{project.title}</h3>
                  <p className="text-on-surface-variant text-sm mb-4">{project.description}</p>
                  <div className="flex gap-4">
                    {project.liveDemoUrl && project.liveDemoUrl !== "#" && (
                      <a
                        className="text-primary text-sm font-bold flex items-center gap-1 hover:underline"
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo <ExternalLink size={16} />
                      </a>
                    )}
                    {project.githubUrl && project.githubUrl !== "#" && (
                      <a
                        className="text-zinc-400 text-sm font-bold flex items-center gap-1 hover:underline"
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub <Code size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
