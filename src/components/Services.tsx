import { motion } from "framer-motion";
import { Megaphone, Globe, Cog } from "lucide-react";

const services = [
  {
    icon: Megaphone,
    category: "Traffic",
    title: "Ad Creative & Campaigns",
    description:
      "Strategic offer framing, scroll-stopping creative, and campaign structures that drive qualified demand—not wasted clicks.",
    features: [
      "Meta & Google Ads",
      "Creative testing frameworks",
      "Performance tracking",
      "Audience segmentation",
    ],
  },
  {
    icon: Globe,
    category: "Conversion",
    title: "Websites, Funnels & Assets",
    description:
      "High-converting pages and funnels built for brands that sell products or book calls. Clear, fast, and engineered to convert.",
    features: [
      "Landing pages & websites",
      "Sales funnels",
      "Mobile-first optimization",
      "Lead qualification forms",
    ],
  },
  {
    icon: Cog,
    category: "Systems",
    title: "Automation & Infrastructure",
    description:
      "Intelligent qualification, routing, and follow-up systems that keep leads moving forward without manual bottlenecks.",
    features: [
      "Lead qualification logic",
      "Automated booking flows",
      "CRM integration",
      "Email & SMS sequences",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Services = () => {
  return (
    <section id="services" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="section-badge mb-4">The Growth Engine</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4">
            Three levers, one system
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            These levers work together. Remove one, and scale breaks. We build the complete system so your growth compounds.
          </p>
        </motion.div>

        {/* Service cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="glass-card-hover rounded-3xl p-8 flex flex-col"
            >
              {/* Category badge */}
              <div className="inline-flex items-center gap-2 text-sm font-medium text-primary mb-4">
                <service.icon className="w-4 h-4" />
                {service.category}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features */}
              <ul className="mt-auto space-y-3">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm text-foreground/80"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
