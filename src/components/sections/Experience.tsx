"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const EXPERIENCES = [
  {
    role: "Co-Founder & Full-Stack Web Developer",
    company: "Khawarizm – Digital Solutions",
    date: "02/2024 - Present",
    description: "Led requirements analysis and system architecture for 10+ client projects, reducing rework by 30-40%. Handled frontend delivery, scalable content architectures, and built features favoring incremental refactoring over full rewrites to ensure long-term stability without downtime.",
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-heading font-bold mb-4"
          >
            Professional Journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted text-lg"
          >
            A timeline of my trajectory in scalable web development.
          </motion.p>
        </div>

        <div className="relative border-l border-white/10 ml-4 md:ml-6 space-y-12 pb-8">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              <div className="absolute -left-[21px] md:-left-[21px] top-1 h-10 w-10 bg-surface border border-white/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                <Briefcase size={18} />
              </div>

              <div className="glass-card p-6 md:p-8 hover:-translate-y-1 transition-transform">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <h3 className="text-xl font-heading font-bold text-white">{exp.role}</h3>
                  <span className="text-sm font-mono text-primary bg-primary/10 px-3 py-1 rounded-full w-fit">
                    {exp.date}
                  </span>
                </div>
                <h4 className="text-lg font-medium text-white/80 mb-4">{exp.company}</h4>
                <p className="text-muted leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
