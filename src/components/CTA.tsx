import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";

const EASE = [0.16, 1, 0.3, 1] as const;

const INFO = [
  {
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden="true">
        <path d="M3 5h14l-7 7-7-7z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M3 5v10h14V5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    label: "Email",
    value: "logan@emporom.org",
  },
  {
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden="true">
        <path d="M10 2C7.238 2 5 4.238 5 7c0 4 5 11 5 11s5-7 5-11c0-2.762-2.238-5-5-5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="10" cy="7" r="1.5" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
    label: "Based in",
    value: "Wellington, Aotearoa",
  },
  {
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden="true">
        <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 6v4l2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: "Response time",
    value: "Same business day",
  },
];

const PREREQS = ["Takes about 2 minutes", "No obligation, no pressure", "We reply within 24-48 hours"];

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

const CTA = () => {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-charcoal/10 bg-white py-28">
      <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-orange/[0.04] blur-[120px]" />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="eyebrow flex items-center gap-2.5 text-charcoal/70">
            <span className="blink inline-block h-1.5 w-1.5 rounded-full bg-orange shadow-[0_0_8px_#ff5b05]" />
            Contact
          </p>
          <h2 className="font-display mt-5 text-[clamp(1.9rem,4vw,3rem)] font-extrabold leading-tight tracking-[-0.03em] text-balance text-charcoal">
            Ready to find out <span className="fade-word">if we're a fit?</span>
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-charcoal/70">
            Answer a few quick questions and we'll tell you straight what we'd
            take off your plate first. No forms to chase, no sales call
            required to get started.
          </p>

          <ul className="mt-9 space-y-4">
            {INFO.map((i) => (
              <li key={i.label} className="flex items-center gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-charcoal/10 bg-paper text-orange shadow-[var(--shadow-soft)]">{i.icon}</span>
                <span>
                  <p className="eyebrow text-charcoal/70">{i.label}</p>
                  <p className="text-sm font-semibold text-charcoal">{i.value}</p>
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-10 rounded-[1.2rem] border border-charcoal/10 bg-charcoal/[0.018] p-1.5 shadow-[var(--shadow-soft)]">
            <div className="rounded-[calc(1.2rem-6px)] bg-white px-5 py-4">
              <p className="eyebrow text-charcoal/70 mb-3">Before you apply</p>
              <ul className="space-y-2.5">
                {PREREQS.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-charcoal/70">
                    <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-orange" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-[1.6rem] border border-charcoal/10 bg-charcoal/[0.02] p-1.5 shadow-[var(--shadow-lift)]">
            <div className="flex flex-col items-center rounded-[calc(1.6rem-6px)] bg-white px-8 py-14 text-center">
              <span className="grid h-14 w-14 place-items-center rounded-full bg-orange/10 text-orange">
                <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <h3 className="mt-6 text-2xl font-extrabold tracking-tight text-charcoal">Apply to Work With Us</h3>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-charcoal/70">
                Four short questions about your business and what you're trying to grow. That's it.
              </p>

              <Link
                to="/work-with-us"
                className="focus-ring group mt-8 inline-flex items-center gap-2.5 rounded-full bg-orange px-8 py-4 text-base font-bold text-white shadow-[0_14px_40px_-8px_rgba(255,91,5,0.5)] transition-all duration-500 ease-premium hover:-translate-y-1 hover:shadow-[0_20px_50px_-10px_rgba(255,91,5,0.55)]"
              >
                Apply to Work With Us
                <span className="grid h-7 w-7 place-items-center rounded-full bg-white/15 transition-all duration-300 ease-premium group-hover:translate-x-0.5 group-hover:scale-110">
                  <svg viewBox="0 0 10 10" fill="none" className="h-3 w-3" aria-hidden="true">
                    <path d="M2 8 8 2M3.5 2H8v4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>

              <p className="mt-5 eyebrow text-charcoal/70">No sales call · no obligation · straight answers</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default CTA;
