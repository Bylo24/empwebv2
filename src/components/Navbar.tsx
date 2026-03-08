import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-3 sm:py-4 bg-background/80 backdrop-blur-md"
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.a
          href="#"
          className="flex items-center h-full justify-center"
          whileHover={{ scale: 1.02 }}
        >
          <img src={logo} alt="Emporom Media" className="h-8 md:h-10 object-contain" />
        </motion.a>

        <div className="hidden md:flex items-center gap-6">
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
          <Link to="/v1weblanding" className="nav-link text-sm font-medium">
            View Demo
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <Button asChild variant="outline" size="sm">
            <Link to="/v1weblanding">See Demo</Link>
          </Button>
          <Button asChild variant="default" size="sm">
            <Link to="/work-with-us">Apply Now</Link>
          </Button>
        </div>
      </nav>
    </motion.header>
  );
};

export default Navbar;
