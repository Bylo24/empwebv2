import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Megaphone, Globe, Palette } from "lucide-react";

const services = [
  {
    id: "digital-marketing",
    icon: Megaphone,
    title: "Digital Marketing",
    headline: "Digital Marketing",
    description:
      "Let's face it, the internet is a noisy place. But with our Digital Marketing services, you won't just stand out—you'll shine. We'll help you show up where your customers are hanging out, whether that's Google, Instagram, or somewhere in between.",
    features: [
      "SEO (Search Engine Optimization)",
      "PPC Advertising",
      "Social Media Marketing",
      "Email Marketing",
      "Content Marketing",
    ],
  },
  {
    id: "web-design",
    icon: Globe,
    title: "Web Design and Development",
    headline: "Web Design and Development",
    description:
      "Your website is like your digital handshake—it's the first thing people notice about you online. Our Web Design & Development services are all about making that handshake firm, friendly, and unforgettable.",
    features: [
      "UI UX Design",
      "Custom Website Design",
      "E-Commerce Development",
      "Content Management Systems (CMS)",
      "Website Maintenance and Support",
    ],
  },
  {
    id: "branding",
    icon: Palette,
    title: "Branding & Creative Services",
    headline: "Branding & Creative Services",
    description:
      "Your brand is so much more than a logo—it's your story, your personality, and your promise to customers. Our Branding & Creative Services bring your identity to life in a way that's bold, beautiful, and 100% you.",
    features: [
      "Logo Design",
      "Brand Strategy & Positioning",
      "Visual Identity Design",
      "Brand Guidelines",
      "Social media graphics",
    ],
  },
];

const Services = () => {
  const [activeService, setActiveService] = useState(services[0].id);
  const currentService = services.find((s) => s.id === activeService)!;

  return (
    <section id="services" className="section-base">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-heading"
        >
          <span className="section-badge">✦ Our services</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
            <span className="text-keyword">Services</span> designed to help your brand shine brighter.
          </h2>
        </motion.div>

        {/* Service tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveService(service.id)}
              className={`service-tab ${activeService === service.id ? "service-tab-active" : ""}`}
            >
              {service.title}
            </button>
          ))}
        </motion.div>

        {/* Service content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-secondary/30 rounded-3xl p-8 md:p-12"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">
                  {currentService.headline}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {currentService.description}
                </p>
              </div>
              <div className="space-y-3">
                {currentService.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 px-4 py-3 bg-background rounded-xl border border-border"
                  >
                    <div className="w-2 h-2 rounded-full bg-foreground" />
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Services;
