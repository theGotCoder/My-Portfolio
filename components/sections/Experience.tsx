"use client";

import React from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "../../data/portfolio";

export default function Experience() {
  const { experience } = PORTFOLIO_DATA;

  return (
    <section className="py-24 bg-[#0c0c0f]" id="experience">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold tracking-tighter mb-4">{experience.title}</h2>
          <p className="text-on-surface-variant mb-4">{experience.description}</p>
        </motion.div>

        <div className="space-y-12">
          {experience.items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 border-l border-outline-variant"
            >
              <div className={`absolute -left-1.5 top-0 w-3 h-3 rounded-full ${index === 0 ? "bg-primary ring-4 ring-primary/20" : "bg-outline-variant"}`}></div>
              <div className="flex flex-col md:flex-row md:justify-between mb-2">
                <h3 className="text-xl font-bold">{item.role}</h3>
                <span className={`${index === 0 ? "text-primary" : "text-on-surface-variant"} font-mono text-sm`}>{item.period}</span>
              </div>
              <p className="text-secondary font-medium mb-4">{item.company}</p>
              <p className="text-on-surface-variant leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
