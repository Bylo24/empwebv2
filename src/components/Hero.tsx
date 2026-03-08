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
          <Button asChild variant="outline" size="lg">
            <Link to="/v1weblanding">View V1 Web Landing</Link>
          </Button>
          <Button asChild variant="ghost" size="lg">
            <a href="#services" className="px-6 py-3 rounded-full border border-border">
              Explore Services
            </a>
          </Button>
        </motion.div>

        <div className="mt-6 flex flex-col items-center gap-2 text-sm text-muted-foreground max-w-3xl mx-auto">
          <p className="text-center">
            Website and web design work is front and center on this site—case studies, process, and layout
            choices all mirror the experience inside the live offer.{" "}
            <Link
              to="/v1weblanding"
              className="font-semibold text-accent underline-offset-2 hover:underline"
            >
              Preview the web design / V1 offer
            </Link>
            .
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 text-[0.65rem] uppercase tracking-[0.4em] text-muted-foreground/70">
            {["Website strategy", "Design systems", "Conversion copy", "Demo build"].map((item) => (
              <span key={item} className="px-3 py-1 rounded-full border border-border/40">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
