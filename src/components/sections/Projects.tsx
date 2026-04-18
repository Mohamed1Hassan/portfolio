"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, GitBranch, ChevronLeft, ChevronRight } from "lucide-react";

const PROJECTS = [
  {
    title: "University LMS Platform",
    description: "A university platform that evolved from an informational site into a fully-fledged Learning Management System.",
    problem: "The system needed to scale to 10+ sections and support multiple user roles without significant downtime.",
    role: "Full-Stack Developer",
    features: ["Modular architecture", "Role-based access control (RBAC)", "Zero-downtime deployment"],
    tech: ["Next.js", "React.js", "Tailwind CSS", "REST API"],
    images: ["/lms/1.png", "/lms/2.png", "/lms/3.png", "/lms/4.png"],
    github: "#",
    live: "https://smart-campus-assistant-orcin.vercel.app/"
  },

  {
    title: "Handcrafted Carpet E-commerce",
    description: "A content-driven platform built for a handcrafted carpet company handling high product volume.",
    problem: "Content volume doubled within 6 months, requiring a highly scalable content architecture to avoid high maintenance costs.",
    role: "Full-Stack Developer",
    features: ["Scalable content architecture", "Optimized media delivery", "Incremental refactoring"],
    tech: ["React.js", "Node.js", "PostgreSQL", "Prisma"],
    images: ["/lms/5.png", "/lms/6.png", "/lms/7.png", "/lms/8.png"],
    github: "#",
    live: "https://hand-weavely.vercel.app/"
  }
];

function ProjectSlider({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative w-full aspect-[16/10] group/slider overflow-hidden rounded-2xl bg-surface border border-white/5">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 w-full h-full object-cover object-top"
          alt="Project Screenshot"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
      
      {/* Controls */}
      <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/40 backdrop-blur-md text-white opacity-0 group-hover/slider:opacity-100 transition-all hover:bg-black/70 hover:scale-110">
        <ChevronLeft size={20} />
      </button>
      <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/40 backdrop-blur-md text-white opacity-0 group-hover/slider:opacity-100 transition-all hover:bg-black/70 hover:scale-110">
        <ChevronRight size={20} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`h-2 rounded-full transition-all duration-300 ${i === currentIndex ? "bg-primary w-6" : "bg-white/40 hover:bg-white/80 w-2"}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-heading font-bold mb-4"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted text-lg max-w-2xl"
          >
            Real-world challenges resolved through clean code and robust architecture.
          </motion.p>
        </div>

        <div className="space-y-20">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="group"
            >
              <div className="grid lg:grid-cols-12 gap-8 items-center border border-white/5 bg-surface/20 rounded-3xl p-6 lg:p-10 transition-all hover:border-white/10 hover:bg-surface/40">
                
                {/* Project Info */}
                <div className="lg:col-span-6 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-heading font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted text-lg mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div>
                      <span className="text-sm font-semibold text-white/80">Problem Solved: </span>
                      <span className="text-sm text-muted">{project.problem}</span>
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-white/80">My Role: </span>
                      <span className="text-sm text-muted">{project.role}</span>
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-white/80">Key Features: </span>
                      <span className="text-sm text-muted">{project.features.join(" • ")}</span>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map(tech => (
                      <span key={tech} className="text-xs font-mono px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                      <ExternalLink size={16} /> Live Demo
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-lg border border-white/10 hover:bg-white/5 transition-colors">
                      <GitBranch size={16} /> Repository
                    </a>
                  </div>
                </div>

                {/* Project Images */}
                <div className="lg:col-span-6 h-full flex items-center relative group-hover:border-white/20 transition-colors">
                  {project.images && project.images.length > 0 ? (
                    <ProjectSlider images={project.images} />
                  ) : (
                    <div className="w-full aspect-[16/10] rounded-2xl bg-surface border border-white/5 overflow-hidden flex items-center justify-center text-muted/50 font-mono text-sm relative">
                       <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-50" />
                       <span className="relative z-10">[Add Project Images Here]</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
