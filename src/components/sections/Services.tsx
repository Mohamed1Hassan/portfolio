"use client";

import { motion } from "framer-motion";
import { Server, MonitorSmartphone, Settings } from "lucide-react";

const SERVICES = [
  {
    icon: <MonitorSmartphone size={32} className="text-primary" />,
    title: "Frontend Architecture",
    description: "Building fast, responsive, and accessible SPAs using React.js and Next.js. I focus on core web vitals, smooth animations, and scalable state management."
  },
  {
    icon: <Server size={32} className="text-secondary" />,
    title: "Backend Systems",
    description: "Designing secure, high-performance RESTful and GraphQL APIs. I specialize in Node.js, database optimization, and microservices architecture."
  },
  {
    icon: <Settings size={32} className="text-white" />,
    title: "Performance Optimization",
    description: "Auditing and refactoring legacy codebases for speed, security, and scalability. Implementing CI/CD pipelines and automated testing."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative bg-surface/30 border-y border-white/5">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-heading font-bold mb-4"
          >
            What I Do
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted text-lg max-w-2xl mx-auto"
          >
            End-to-end web development services focused on quality and scale.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-8 rounded-3xl hover:border-white/20 transition-colors"
            >
              <div className="mb-6 p-4 bg-white/5 rounded-2xl w-fit">
                {service.icon}
              </div>
              <h3 className="text-xl font-heading font-bold mb-4">{service.title}</h3>
              <p className="text-muted leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
