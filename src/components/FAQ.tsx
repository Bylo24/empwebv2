import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We're a one-stop-shop for all things digital! From crafting stunning websites to skyrocketing your SEO rankings, managing your social media, and building unforgettable brands, we do it all.",
  },
  {
    question: "Do you work with small businesses or just big brands?",
    answer:
      "Size doesn't matter! Whether you're a budding startup or an industry giant, we're here to make your vision a reality. Big dreams? Small budget? Let's chat!",
  },
  {
    question: "Can I customize the packages you offer?",
    answer:
      "Absolutely! Think of our packages as a base pizza—you can add or swap toppings (services) to create your perfect slice of digital success.",
  },
  {
    question: "How do you measure the success of a marketing campaign?",
    answer:
      "Numbers don't lie, and neither do we! We track everything from website traffic to social media engagement and conversions. You'll get regular reports, so you're always in the know.",
  },
  {
    question: "What if I don't like the designs or strategies?",
    answer:
      "Honesty hour—we want you to love what we create. If you're not thrilled, we'll go back to the drawing board and tweak until it's perfect. Your happiness is our success.",
  },
  {
    question: "How do I get started?",
    answer:
      "Hit 'Apply to Work With Us' at the top, tell us about your goals through the short intake, and we'll reach out for a chat. From there we lock in the best next steps together.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="section-base">
      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="section-badge mb-4">Frequently Asked Questions</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-6 mb-4">
            <span className="text-keyword">Got questions?</span> Here's everything you need to know.
          </h2>
          <p className="text-muted-foreground">
            The answers you're probably looking for — all right here.
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-0">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="faq-item px-0"
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
