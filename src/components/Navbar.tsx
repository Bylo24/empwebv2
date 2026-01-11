import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Services", href: "#services" },
  { name: "Process", href: "#process" },
  { name: "FAQ", href: "#faq" },
];

const Navbar = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.a
          href="#"
          className="text-2xl font-bold text-foreground tracking-tight"
          whileHover={{ scale: 1.02 }}
        >
          Studio<span className="gradient-text">X</span>
        </motion.a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link text-sm font-medium">
              {link.name}
            </a>
          ))}
        </div>

        <Button variant="hero" size="sm" className="hidden sm:inline-flex">
          Get Started
        </Button>
      </nav>
    </motion.header>
  );
};

export default Navbar;
