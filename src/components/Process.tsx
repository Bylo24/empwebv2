import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "Discover & Strategize",
    description:
      "We get to know your brand, your goals, and who you're trying to reach — then map out a clear plan that actually fits.",
  },
  {
    number: "2",
    title: "Build & Launch",
    description:
      "Our team gets stuck in, mixing smart strategy with creative thinking to produce content and assets that fit your brand — right down to the details.",
  },
  {
    number: "3",
    title: "Optimize & Iterate",
    description:
      "We dig into your brand, goals, and audience, then sketch out a game plan that works.",
  },
  {
    number: "4",
    title: "Refine & Grow",
    description:
      "Once it's live, we keep at it — measuring, tweaking, and making sure it keeps doing its job.",
  },
];

const Process = () => {
  return (
    <section id="process" className="section-base bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-heading"
        >
          <span className="section-badge">Our Work Process</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            <span className="text-keyword">From idea to impact</span>—our process makes it easy, exciting, and effective!
          </h2>
        </motion.div>

        {/* Process steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background rounded-2xl p-6 border border-border"
            >
              <div className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center text-lg font-bold mb-4">
                {step.number}
              </div>
              <h3 className="text-lg font-bold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
