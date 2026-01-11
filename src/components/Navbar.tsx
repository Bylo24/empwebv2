import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Navbar = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-background/80 backdrop-blur-md"
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.a
          href="#"
          className="flex items-center"
          whileHover={{ scale: 1.02 }}
        >
          <img src={logo} alt="Emporom Media" className="h-6 md:h-7" />
        </motion.a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="nav-link text-sm font-medium">
            Services
          </a>
          <a href="#process" className="nav-link text-sm font-medium">
            Process
          </a>
          <a href="#about" className="nav-link text-sm font-medium">
            About Us
          </a>
          <a href="#faq" className="nav-link text-sm font-medium">
            FAQ
          </a>
        </div>

        <Button variant="default" size="sm">
          Apply Now
        </Button>
      </nav>
    </motion.header>
  );
};

export default Navbar;
