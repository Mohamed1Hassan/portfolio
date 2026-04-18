"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal, FileText } from "lucide-react";
import Link from "next/link";
import Magnetic from "../shared/Magnetic";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8"
            >
              <Terminal size={14} className="text-secondary" />
              <span className="text-sm font-medium text-muted">Available for new opportunities</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-6xl font-heading font-extrabold tracking-tight leading-[1.1] mb-6"
            >
              Hi, I'm Mohamed<br />
              <span className="text-xl md:text-3xl font-medium text-white/50 block mt-4 mb-2">Frontend-Focused</span>
              <span className="text-gradient">Full Stack Developer.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-muted max-w-xl mb-10"
            >
              I build stable, maintainable frontend solutions and scalable REST APIs. I handle everything from UI implementation to backend integration, focusing on performance, clean structure, and long-term product stability.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <Magnetic>
                <Link
                  href="#projects"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-primary text-white font-medium hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all flex items-center justify-center gap-2 group"
                >
                  View Projects
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </Magnetic>
              <Magnetic>
                <a
                  href="/MohamedHassan.pdf"
                  download="MohamedHassan-CV.pdf"
                  className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/10 hover:border-white/20 hover:bg-white/5 text-foreground font-medium transition-all flex items-center justify-center gap-2 group"
                >
                  <FileText size={18} className="text-secondary" />
                  Download CV
                </a>
              </Magnetic>
            </motion.div>
          </div>

          {/* Profile Picture View */}
          <Magnetic>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative lg:ml-auto w-full max-w-sm mx-auto aspect-[3/4] rounded-[2rem] overflow-hidden border border-white/10 glass shadow-2xl order-1 lg:order-2"
            >
               <img src="/profile.jpg" alt="Mohamed Hassan" className="w-full h-full object-cover object-top" />
               <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent pointer-events-none" />
               <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-xl font-heading font-bold drop-shadow-lg text-white">Mohamed Hassan</span>
                  <p className="text-sm font-mono text-primary/90 mt-1">based in Cairo, Egypt</p>
               </div>
            </motion.div>
          </Magnetic>

        </div>
      </div>
    </section>
  );
}
