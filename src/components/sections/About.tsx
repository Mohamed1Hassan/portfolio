"use client";

import { motion } from "framer-motion";
import { Code, Database, Layout } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Bridging the gap between <span className="text-secondary">UX</span> and <span className="text-primary">Architecture</span>
            </h2>
            <div className="space-y-4 text-muted text-lg">
              <p>
                With 2+ years of hands-on experience working on production applications, I focus on building stable and maintainable frontend solutions.
              </p>
              <p>
                I handle frontend delivery from UI architecture to backend REST API integration, dealing directly with real issues related to performance, data usage, and user behavior.
              </p>
              <p>
                I work with extreme ownership and team awareness. I always favor choosing simple, clean solutions that support predictable delivery and long-term product stability over unnecessary complexity.
              </p>
            </div>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FeatureCard 
              icon={<Layout className="text-primary" size={28} />}
              title="Frontend UX"
              desc="Responsive, accessible, and highly interactive user interfaces."
              delay={0.1}
            />
            <FeatureCard 
              icon={<Database className="text-secondary" size={28} />}
              title="Backend Systems"
              desc="Secure, scalable APIs and optimized database models."
              delay={0.2}
              className="sm:mt-12"
            />
            <FeatureCard 
              icon={<Code className="text-white" size={28} />}
              title="Clean Code"
              desc="Maintainable, well-documented, and testable codebases."
              delay={0.3}
            />
          </div>

        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, desc, delay, className = "" }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      className={`glass-card p-6 flex flex-col gap-4 ${className}`}
    >
      <div className="p-3 bg-white/5 rounded-xl w-fit border border-white/5">
        {icon}
      </div>
      <h3 className="text-xl font-bold font-heading">{title}</h3>
      <p className="text-sm text-muted">{desc}</p>
    </motion.div>
  );
}
