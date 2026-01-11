import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How quickly will I see results?",
    answer:
      "Most clients see initial traction within 2-4 weeks of launch. However, compounding growth typically kicks in around month 2-3 as we optimize and scale what's working. We set realistic expectations upfront—no overnight miracles, just steady, measurable progress.",
  },
  {
    question: "What types of businesses do you work with?",
    answer:
      "We specialize in product-led and service-driven businesses that are ready to scale. This includes SaaS companies, e-commerce brands, agencies, and professional service firms. If you have product-market fit and want to grow, we should talk.",
  },
  {
    question: "Do you handle everything for the ads?",
    answer:
      "Yes. Strategy, creative, copywriting, campaign setup, optimization, and reporting—we handle the entire ads operation. You'll have complete visibility into performance, but we take care of the execution so you can focus on your business.",
  },
  {
    question: "Is this a one-time build or an ongoing partnership?",
    answer:
      "We offer both. Some clients need a complete growth infrastructure built and handed off. Others want ongoing management and optimization. We'll recommend what makes sense based on your goals and internal capacity.",
  },
  {
    question: "What makes you different from other agencies?",
    answer:
      "We're not an agency—we're growth engineers. We don't just run ads or build websites in isolation. We connect traffic, conversion, and automation into one cohesive system. No silos, no finger-pointing, just results.",
  },
  {
    question: "How involved do I need to be?",
    answer:
      "Minimal. After the initial discovery phase, we handle execution. You'll receive regular updates and have direct access to our team, but we don't need constant hand-holding. We're self-sufficient by design.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 px-6 relative">
      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="section-badge mb-4">FAQ</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4">
            Straight answers
          </h2>
          <p className="text-muted-foreground text-lg">
            Clear expectations. Clean execution. No hidden surprises.
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card rounded-2xl px-6 border-0"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-5 text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
