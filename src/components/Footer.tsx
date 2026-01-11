import { motion } from "framer-motion";

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
          <span className="text-lg font-bold">StudioX.</span>
        </div>

        <nav className="flex items-center gap-6">
          <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Services
          </a>
          <a href="#process" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Process
          </a>
          <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            FAQ
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </a>
        </nav>

        <span className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} StudioX. All rights reserved.
        </span>
      </div>
    </motion.footer>
  );
};

export default Footer;
