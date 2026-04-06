"use client";

import React from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "../../data/portfolio";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Stack() {
  const { stack } = PORTFOLIO_DATA;

  return (
    <section className="py-24 bg-[#09090b]/50" id="stack">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
        >
          <div className="max-w-2xl">
            <motion.h2 variants={itemVariants} className="text-4xl font-bold tracking-tighter mb-4">
              {stack.title}
            </motion.h2>
            <motion.p variants={itemVariants} className="text-on-surface-variant text-lg">
              {stack.description}
            </motion.p>
          </div>
          <motion.div variants={itemVariants} className="text-primary font-mono text-sm tracking-widest">
            {stack.badge}
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {stack.categories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.id}
                variants={itemVariants}
                className="group bg-surface-container-low border border-outline-variant p-8 rounded-2xl hover:border-primary/50 transition-all duration-300"
              >
                <div className="mb-6 block group-hover:scale-110 transition-transform origin-left text-primary">
                  <Icon size={36} />
                </div>
                <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                <p className="text-on-surface-variant text-sm">{category.skills}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
