"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Phone, MessageCircle } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    
    const formData = new FormData(e.target as HTMLFormElement);
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE"); // USER should replace this

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
      } else {
        console.log("Error", data);
        setStatus("idle");
      }
    } catch (error) {
      console.log("Error", error);
      setStatus("idle");
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-heading font-bold mb-4"
          >
            Let's Build Something Great
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted text-lg max-w-2xl mx-auto mb-8"
          >
            Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </motion.p>

          {/* Quick Contact Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <a href="https://wa.me/201156708000" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 hover:bg-green-500/20 transition-all font-medium">
               <MessageCircle size={20} /> WhatsApp
            </a>
            <a href="tel:+201010865901" className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 transition-all font-medium">
               <Phone size={20} /> Direct Call
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card p-8 md:p-12 max-w-2xl mx-auto"
        >
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center text-center py-12 gap-4">
              <CheckCircle2 size={64} className="text-primary animate-pulse" />
              <h3 className="text-2xl font-bold font-heading">Message Sent!</h3>
              <p className="text-muted">Thanks for reaching out, Mohamed. I'll get back to you soon.</p>
              <button 
                onClick={() => setStatus("idle")}
                className="mt-6 px-6 py-2 rounded-full border border-white/10 hover:bg-white/5 transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="from_name" value="Mohamed Hassan Portfolio" />
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-white/80 pl-1">Name</label>
                  <input
                    id="name"
                    name="name"
                    required
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-surface/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all font-sans text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-white/80 pl-1">Email</label>
                  <input
                    id="email"
                    name="email"
                    required
                    type="email"
                    placeholder="your@email.com"
                    className="w-full bg-surface/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all font-sans text-white"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-white/80 pl-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full bg-surface/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all font-sans text-white resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={status === "submitting"}
                className={`w-full py-4 rounded-xl font-medium transition-all flex items-center justify-center gap-2 ${
                  status === "submitting" 
                  ? "bg-surface text-muted cursor-not-allowed" 
                  : "bg-gradient-primary text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]"
                }`}
              >
                {status === "submitting" ? "Sending..." : "Send Message"}
                {status !== "submitting" && <Send size={18} />}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
