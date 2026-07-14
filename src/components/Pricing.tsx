import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ShineBorder } from "@/components/ui/shine-border";
import { Reveal } from "@/components/Premium";

type Plan = {
  name: string;
  price: string;
  per: string;
  desc: string;
  items: string[];
  featured: boolean;
};

type Segment = { key: string; label: string; plans: Plan[] };

const SEGMENTS: Segment[] = [
  {
    key: "local",
    label: "Local Services",
    plans: [
      {
        name: "Launch",
        price: "$800",
        per: "/mo",
        desc: "One channel, run properly. For local businesses getting paid leads working for the first time.",
        items: [
          "One ad channel managed",
          "Full campaign build & launch",
          "Call & form tracking set up",
          "Plain-English monthly update",
        ],
        featured: false,
      },
      {
        name: "Growth",
        price: "$1,400",
        per: "/mo",
        desc: "The full lead engine. Ads, landing pages and tracking working as one system.",
        items: [
          "Two channels managed",
          "Landing page & CRO work",
          "Call & conversion tracking",
          "Fortnightly strategy calls",
        ],
        featured: true,
      },
      {
        name: "Scale",
        price: "Custom",
        per: "",
        desc: "Multi-location or multi-service businesses that need a full in-house-style engine.",
        items: [
          "Full channel mix",
          "Multi-location campaign structure",
          "Creative production",
          "Priority turnaround",
        ],
        featured: false,
      },
    ],
  },
  {
    key: "ecom",
    label: "E-commerce",
    plans: [
      {
        name: "Launch",
        price: "$900",
        per: "/mo",
        desc: "Meta Ads run properly, with creative that's actually tested.",
        items: [
          "Meta Ads managed",
          "Story & Reel creative testing",
          "Pixel & CAPI set up correctly",
          "Plain-English monthly update",
        ],
        featured: false,
      },
      {
        name: "Growth",
        price: "$600",
        per: "/mo + %",
        desc: "A smaller retainer plus a share of revenue we can directly attribute to the campaigns. We only win big when you do.",
        items: [
          "Meta + Google Shopping managed",
          "Revenue share on directly attributed sales",
          "Email flows: welcome, cart, post-purchase",
          "Fortnightly strategy calls",
        ],
        featured: true,
      },
      {
        name: "Scale",
        price: "Custom",
        per: "",
        desc: "Full-funnel: paid, email, SMS and creative production as one engine.",
        items: [
          "Full channel mix",
          "Ongoing creative production",
          "Dedicated account lead",
          "Priority turnaround",
        ],
        featured: false,
      },
    ],
  },
  {
    key: "realestate",
    label: "Real Estate",
    plans: [
      {
        name: "Lead System",
        price: "$700",
        per: "/mo",
        desc: "The done-for-you landing system that captures buyer and seller leads.",
        items: [
          "Landing funnel built for listings",
          "CRM + booking integration",
          "Basic Meta lead ads",
          "Monthly update",
        ],
        featured: false,
      },
      {
        name: "Growth",
        price: "$1,400",
        per: "/mo",
        desc: "Full-funnel Meta and Google with retargeting, built around your listings.",
        items: [
          "Meta + Google Ads managed",
          "Retargeting sequences",
          "Landing page & lead system included",
          "Fortnightly strategy calls",
        ],
        featured: true,
      },
      {
        name: "Scale",
        price: "Custom",
        per: "",
        desc: "Multi-agent or team accounts, content and brand as one engine.",
        items: [
          "Full channel mix",
          "Content & creative production",
          "Dedicated account lead",
          "Priority turnaround",
        ],
        featured: false,
      },
    ],
  },
];

function PlanCard({ p }: { p: Plan }) {
  return (
    <div
      className={`flex h-full flex-col rounded-[1.6rem] p-8 transition-all duration-500 ease-premium ${
        p.featured
          ? "bg-orange text-white shadow-[0_30px_80px_-24px_rgba(255,91,5,0.4)]"
          : "border border-charcoal/10 bg-white hover:-translate-y-0.5 hover:border-charcoal/15 hover:shadow-[var(--shadow-lift)]"
      }`}
    >
      <div className="flex items-center justify-between">
        <p className={`font-mono text-xs uppercase tracking-[0.3em] font-semibold ${p.featured ? "text-white/90" : "text-charcoal/70"}`}>
          {p.name}
        </p>
        {p.featured && (
          <span className="rounded-full bg-white/20 px-3 py-1 font-mono text-[0.65rem] font-semibold uppercase tracking-[0.2em]">Most popular</span>
        )}
      </div>

      <p className="mt-5 font-display text-4xl font-extrabold tracking-tight">
        {p.price}
        <span className={`text-base font-semibold ${p.featured ? "text-white/90" : "text-charcoal/70"}`}>{p.per}</span>
      </p>

      <p className={`mt-4 text-sm leading-relaxed ${p.featured ? "text-white/90" : "text-charcoal/70"}`}>{p.desc}</p>

      <ul className="mt-6 flex-1 space-y-3">
        {p.items.map((it) => (
          <li key={it} className={`flex items-start gap-2.5 text-sm font-medium ${p.featured ? "text-white" : "text-charcoal"}`}>
            <Check className={`mt-0.5 h-4 w-4 shrink-0 ${p.featured ? "text-white" : "text-orange"}`} />
            {it}
          </li>
        ))}
      </ul>

      <Button asChild variant={p.featured ? "secondary" : "default"} size="lg" className="mt-8 w-full rounded-full">
        <Link to="/work-with-us">Apply to Work With Us</Link>
      </Button>
    </div>
  );
}

const Pricing = () => {
  const [segmentKey, setSegmentKey] = useState(SEGMENTS[0].key);
  const active = SEGMENTS.find((s) => s.key === segmentKey) ?? SEGMENTS[0];

  return (
    <section id="pricing" className="border-t border-charcoal/10 bg-white py-28">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="mx-auto max-w-2xl text-center mb-14">
          <p className="eyebrow flex items-center justify-center gap-2.5 text-charcoal/70">
            <span className="blink inline-block h-1.5 w-1.5 rounded-full bg-orange shadow-[0_0_8px_#ff5b05]" />
            Pricing
          </p>
          <h2 className="font-display mt-5 text-[clamp(1.9rem,4vw,3rem)] font-extrabold leading-tight tracking-[-0.03em] text-balance text-charcoal">
            Retainers that <span className="fade-word">scale with you.</span>
          </h2>
          <p className="mt-4 text-lg text-charcoal/70">
            Monthly, no lock-in beyond the agreed term.
          </p>
        </Reveal>

        {/* Segment switcher */}
        <Reveal delay={0.1} className="flex flex-wrap justify-center gap-3 mb-12">
          {SEGMENTS.map((s) => (
            <button
              key={s.key}
              onClick={() => setSegmentKey(s.key)}
              className={`focus-ring rounded-full border px-6 py-2.5 text-sm font-bold transition-all duration-400 ease-premium ${
                segmentKey === s.key
                  ? "border-orange bg-orange text-white shadow-[0_4px_16px_-4px_rgba(255,91,5,0.45)]"
                  : "border-charcoal/10 bg-white text-charcoal/70 hover:border-charcoal/20 hover:text-charcoal"
              }`}
            >
              {s.label}
            </button>
          ))}
        </Reveal>

        <motion.div
          key={active.key}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-3 items-stretch"
        >
          {active.plans.map((p) =>
            p.featured ? (
              <ShineBorder key={p.name} className="scale-[1.03] shadow-[0_40px_80px_-30px_rgba(255,91,5,0.35)]">
                <PlanCard p={p} />
              </ShineBorder>
            ) : (
              <PlanCard key={p.name} p={p} />
            )
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
