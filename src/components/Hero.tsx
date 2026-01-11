import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
const Hero = () => {
  return <section className="min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 py-[10px] my-0 mx-0">
      <div className="max-w-5xl mx-auto">
        {/* Main Headline */}
        <motion.h1 initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
          Big ideas and smart strategy, backed by creativity that gets results.
        </motion.h1>

        {/* Subheadline */}
        <motion.p initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: 0.1
      }} className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8">
          Big ideas and smart strategy, backed by creativity that actually does something.
        </motion.p>

        {/* CTA */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: 0.2
      }} className="flex flex-col sm:flex-row items-start gap-4 mb-6">
          <Button variant="default" size="lg">
            Apply to Work With Us
          </Button>
        </motion.div>

        {/* Reviews */}
        
      </div>

      {/* Value Proposition */}
      
    </section>;
};
export default Hero;