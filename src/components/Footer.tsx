import { Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="py-12 px-6 border-t border-border"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Emporom Media" className="h-12" />
        </div>

        <div className="flex flex-1 justify-center">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <a href="#services" className="hover:text-foreground transition-colors">
              Services
            </a>
            <a href="#process" className="hover:text-foreground transition-colors">
              Process
            </a>
            <a href="#about" className="hover:text-foreground transition-colors">
              About
            </a>
            <a href="#faq" className="hover:text-foreground transition-colors">
              FAQ
            </a>
            <a
              href="https://www.linkedin.com/company/emporom-digital-marketing/posts/?feedView=all"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/emporom.media/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <Instagram className="w-4 h-4" />
              Instagram
            </a>
          </div>
        </div>

        <div className="text-sm text-muted-foreground flex flex-col items-end gap-2">
          <a
            href="mailto:logan@emporom.org"
            className="hover:text-foreground transition-colors"
          >
            logan@emporom.org
          </a>
          <span>© {new Date().getFullYear()} Emporom Media. All rights reserved.</span>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
