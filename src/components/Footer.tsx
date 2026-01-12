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

        <div className="flex flex-1 justify-center order-2">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm text-muted-foreground">
            {["Services", "Process", "About", "FAQ"].map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase()}`}
                className="inline-flex items-center px-3 py-1.5 transition-colors duration-200 hover:text-foreground"
              >
                {label}
              </a>
            ))}
            <a
              href="https://www.linkedin.com/company/emporom-digital-marketing/posts/?feedView=all"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 transition-colors duration-200 hover:text-foreground"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/emporom.media/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 transition-colors duration-200 hover:text-foreground"
            >
              <Instagram className="w-4 h-4" />
              Instagram
            </a>
          </div>
        </div>

        <div className="text-sm text-muted-foreground flex flex-col items-center gap-1 text-center order-3 mt-4 md:mt-0 md:items-end md:text-right">
          <a
            href="mailto:sam@emporom.media"
            className="hover:text-foreground transition-colors"
          >
            sam@emporom.media
          </a>
          <a
            href="mailto:logan@emporom.org"
            className="hover:text-foreground transition-colors"
          >
            logan@emporom.org
          </a>
          <span className="text-xs text-muted-foreground/80">
            © {new Date().getFullYear()} Emporom Media. All rights reserved.
          </span>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
