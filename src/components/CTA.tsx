import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-24 px-6 bg-secondary/30">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Ready to make your brand <span className="accent-text">shine</span>?
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
          Let's chat about your goals and see how we can help you grow. No pressure, just good conversation.
        </p>
        <Button variant="default" size="lg">
          Book a Call
        </Button>
      </motion.div>
    </section>
  );
};

export default CTA;
