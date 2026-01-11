import { motion } from "framer-motion";
import { Search, Wrench, Rocket, BarChart3 } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discover & Strategize",
    description:
      "We dive deep into your brand, goals, and audience. Then we map out a clear plan that actually fits your business.",
  },
  {
    number: "02",
    icon: Wrench,
    title: "Build & Configure",
    description:
      "Our team constructs your growth infrastructure—ads, funnels, automation—engineered to convert from day one.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Launch & Execute",
    description:
      "We go live with precision. Every campaign, every touchpoint, every conversion path is monitored and optimized.",
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Scale & Compound",
    description:
      "Once it's working, we double down. Measuring, tweaking, and scaling what drives real revenue growth.",
  },
];

const Process = () => {
  return (
    <section id="process" className="py-24 px-6 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <span className="section-badge mb-4">Our Process</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4">
            From idea to impact
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A clear, proven process that takes your business from where it is to where it needs to be.
          </p>
        </motion.div>

        {/* Process steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-40px)] h-px bg-gradient-to-r from-primary/30 to-transparent" />
              )}

              <div className="flex flex-col items-center text-center">
                {/* Step number & icon */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 text-xs font-bold text-accent bg-background px-2 py-0.5 rounded-full border border-border">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
