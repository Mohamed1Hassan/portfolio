import Link from "next/link";
import { Github, Briefcase, Mail, Phone, MessageCircle } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-surface/30 pt-16 pb-8 mt-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="font-heading font-bold text-2xl tracking-tight mb-2">
              M.<span className="text-primary">Hassan</span>
            </span>
            <p className="text-muted text-sm max-w-sm">
              Building scalable web applications with clean architecture and modern UX.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <SocialLink href="https://github.com/Mohamed1Hassan" icon={<Github size={20} />} />
            <SocialLink href="https://linkedin.com/in/mohamed-hassan-8080102a2" icon={<Briefcase size={20} />} />
            <SocialLink href="https://wa.me/201156708000" icon={<MessageCircle size={20} />} />
            <SocialLink href="tel:+201010865901" icon={<Phone size={20} />} />
            <SocialLink href="mailto:z2661737@gmail.com" icon={<Mail size={20} />} />
          </div>
        </div>

        <div className="w-full h-px bg-white/10 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted">
          <p>&copy; {currentYear} Mohamed Hassan. All rights reserved.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-full bg-surface border border-white/5 hover:border-primary/50 text-muted hover:text-primary transition-all hover:scale-110"
    >
      {icon}
    </a>
  );
}
