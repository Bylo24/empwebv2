import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-24 pb-16">
      <div className="max-w-5xl mx-auto">
        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
        >
          Big ideas and smart strategy, backed by creativity that gets results.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8"
        >
          Big ideas and smart strategy, backed by creativity that actually does something.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-start gap-4 mb-6"
        >
          <Button variant="default" size="lg">
            Apply to Work With Us
          </Button>
        </motion.div>

        {/* Reviews */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center gap-2"
        >
          <div className="flex">
            {[1, 2, 3, 4].map((i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
            <Star className="w-4 h-4 fill-amber-400/50 text-amber-400" />
          </div>
          <span className="text-sm text-muted-foreground">Over 200+ Five Star Reviews</span>
        </motion.div>
      </div>

      {/* Value Proposition */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="max-w-4xl mx-auto text-center mt-24"
      >
        <p className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-relaxed">
          We build <span className="accent-text">brands</span>, grow{" "}
          <span className="accent-text">businesses</span>, and make marketing earn its keep.{" "}
          <span className="accent-text">Keen to grow?</span>
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;
