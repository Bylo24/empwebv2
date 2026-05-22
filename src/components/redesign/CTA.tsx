import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import RotatingWord from "@/components/redesign/RotatingWord";

const CTA = () => {
  return (
    <section className="section-base">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-heading section-heading--narrow"
        >
        <h2 className="flex flex-col gap-3 text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          <span className="block">Ready to make your brand</span>
          <span className="block pt-1">
            <RotatingWord
              words={[
                "grow faster?",
                "gain traction?",
                "convert more?",
                "stand out?",
                "scale smarter?",
              ]}
            />
          </span>
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
          Let's chat about your goals and see how we can help you grow. No pressure, just good conversation.
        </p>
        <Button asChild variant="default" size="lg">
          <Link to="/work-with-us">Apply to Work With Us</Link>
        </Button>
      </motion.div>
    </section>
  );
};

export default CTA;
