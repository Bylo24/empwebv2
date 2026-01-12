import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import RotatingWord from "@/components/RotatingWord";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center px-6 pt-32 pb-10 sm:pb-12 text-center gap-8">
      <div className="max-w-5xl mx-auto text-center">
        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.45] mb-8 text-center mx-auto flex flex-col gap-4"
        >
          <span className="block">We help ambitious</span>
          <span className="block">brands achieve</span>
          <span className="block">
            <RotatingWord
              words={["growth", "traction", "momentum", "scale", "results", "performance"]}
            />
            <span className="inline">.</span>
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 mx-auto text-center"
        >
          Work with a team that lands real results through bold creativity and measurable strategy.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
        >
          <Button asChild variant="default" size="lg">
            <Link to="/work-with-us">Apply to Work With Us</Link>
          </Button>
          <Button asChild variant="ghost" size="lg">
            <a href="#services" className="px-6 py-3 rounded-full border border-border">
              Explore Services
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
