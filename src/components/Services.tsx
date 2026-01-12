import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Megaphone, Globe, Palette } from "lucide-react";

const services = [
  {
    id: "digital-marketing",
    icon: Megaphone,
    title: "Digital Marketing",
    headline: "Digital Marketing",
    tagline:
      "Cast a brighter signal across paid, owned, and earned channels while feeding a conversion-focused playbook.",
    description:
      "Let's face it, the internet is a noisy place. Our Digital Marketing services are about commanding attention and turning engagement into predictable revenue, whether that's Google, Instagram, or something in between.",
    focusAreas: ["Performance media", "Attribution clarity", "Audience orchestration"],
    features: [
      "SEO (Search Engine Optimization)",
      "PPC Advertising",
      "Social Media Marketing",
      "Email Marketing",
      "Content Marketing",
    ],
    outcome: "You get an always-on pipeline, transparent reporting, and creative concepts that can be deployed rapidly.",
  },
  {
    id: "web-design",
    icon: Globe,
    title: "Web Design and Development",
    headline: "Web Design & Development",
    tagline:
      "A website that feels both meticulously crafted and ruthlessly performance-driven, built for the buyer journey.",
    description:
      "Your website is like your digital handshake. We craft experiences that feel premium, yet guide visitors toward measurable action with intentional UX, purposeful copy, and strategic launches.",
    focusAreas: ["Conversion-first UX", "CMS sustainability", "Page speed"],
    features: [
      "UI / UX Design",
      "Custom Website Design",
      "E-Commerce Development",
      "Content Management Systems (CMS)",
      "Website Maintenance and Support",
    ],
    outcome: "The end product feels unmistakably yours but is optimized for speed, accessibility, and scale.",
  },
  {
    id: "branding",
    icon: Palette,
    title: "Branding & Creative Services",
    headline: "Branding & Creative Services",
    tagline:
      "More than a logo—narratives, systems, and seamless creative that keep your brand consistent across every touchpoint.",
    description:
      "Your brand is your voice and promise. We translate that into visual language, tone, and assets that feel bold, refined, and unmistakably different.",
    focusAreas: ["Narrative clarity", "Visual consistency", "Creative systems"],
    features: [
      "Logo Design",
      "Brand Strategy & Positioning",
      "Visual Identity Design",
      "Brand Guidelines",
      "Social media graphics",
    ],
    outcome: "You leave with a toolkit that lets your brand stay cohesive across every campaign, platform, and partner.",
  },
];

const Services = () => {
  const [activeService, setActiveService] = useState(services[0].id);
  const currentService = services.find((s) => s.id === activeService)!;
  const CurrentIcon = currentService.icon;

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
            <div className="grid md:grid-cols-[1.1fr,0.9fr] gap-8">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  <CurrentIcon className="h-4 w-4" />
                  <span>Focus</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
                  {currentService.headline}
                </h3>
                <p className="text-lg font-semibold">{currentService.tagline}</p>
                <p className="text-muted-foreground leading-relaxed">
                  {currentService.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {currentService.focusAreas.map((focus) => (
                    <span
                      key={focus}
                      className="rounded-2xl border border-border px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-muted-foreground"
                    >
                      {focus}
                    </span>
                  ))}
                </div>
                <div className="rounded-2xl border border-border bg-background p-4 text-sm font-medium text-muted-foreground">
                  {currentService.outcome}
                </div>
              </div>
              <div className="space-y-3">
                {currentService.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl border border-border bg-background"
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
