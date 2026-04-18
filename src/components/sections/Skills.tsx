"use client";

import { motion } from "framer-motion";
import { Monitor, Server, Database, Box } from "lucide-react";

const SKILLS_DATA = [
  {
    category: "Frontend",
    icon: <Monitor className="text-primary" size={24} />,
    skills: ["JavaScript (ES6+)", "TypeScript", "React.js", "Redux Toolkit", "Zustand", "HTML5", "CSS3", "Tailwind CSS", "Material UI"],
  },
  {
    category: "Backend & APIs",
    icon: <Server className="text-secondary" size={24} />,
    skills: ["Next.js", "NestJS", "REST API Integration", "Fetching & Error Handling"],
  },
  {
    category: "Databases & ORMs",
    icon: <Database className="text-white" size={24} />,
    skills: ["PostgreSQL", "MySQL", "Prisma", "TypeORM"],
  },
  {
    category: "DevOps & Tools",
    icon: <Box className="text-primary" size={24} />,
    skills: ["Git", "Docker", "CI/CD", "Vercel", "AWS Serverless (Basics)", "Jest", "Testing Library"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -z-10" />
      
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-heading font-bold mb-4"
          >
            Technical Arsenal
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted text-lg max-w-2xl mx-auto"
          >
            Technologies I use to build scalable, high-performance web applications.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {SKILLS_DATA.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="glass-card p-8"
            >
              <h3 className="text-xl font-heading font-bold mb-6 text-white border-b border-white/10 pb-4 flex items-center gap-3">
                {group.icon}
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-sm font-medium rounded-lg bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
