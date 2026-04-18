"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Magnetic from "../shared/Magnetic";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Services", href: "#services" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    // Active Section Tracking
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = ["about", "skills", "projects", "experience", "services"];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "glass py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 max-w-6xl flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Code2 className="text-primary group-hover:text-secondary transition-colors" />
          <span className="font-heading font-bold text-xl tracking-tight">
            M.<span className="text-primary">Hassan</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Magnetic key={link.name}>
              <Link
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-all px-2 py-1 relative block",
                  activeSection === link.href.slice(1) 
                    ? "text-primary" 
                    : "text-muted hover:text-foreground"
                )}
              >
                {link.name}
                {activeSection === link.href.slice(1) && (
                  <motion.div 
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-2 right-2 h-0.5 bg-primary rounded-full"
                  />
                )}
              </Link>
            </Magnetic>
          ))}
          <Link
            href="#contact"
            className="px-5 py-2.5 rounded-full bg-surface border border-white/10 hover:border-primary/50 text-sm font-medium transition-all hover:bg-white/5"
          >
            Contact Me
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 right-0 glass border-t border-white/10 p-6 flex flex-col gap-4 md:hidden shadow-xl"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-muted hover:text-foreground transition-colors py-2"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full text-center px-5 py-3 rounded-xl bg-gradient-primary text-white font-medium mt-4"
          >
            Contact Me
          </Link>
        </motion.div>
      )}
    </header>
  );
}
