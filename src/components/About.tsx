import { motion, useReducedMotion } from "framer-motion";
import { Spark } from "@/components/Spark";

const EASE = [0.16, 1, 0.3, 1] as const;

const PROPS = [
  {
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden="true">
        <path d="M10 2L2.5 6v8L10 18l7.5-4V6L10 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M10 10v4M10 6v1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    name: "Direct line",
    desc: "You message, we answer. Decisions get made in days, not quarterly reviews.",
  },
  {
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden="true">
        <path d="M10 2a8 8 0 100 16A8 8 0 0010 2z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 6v4l2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    name: "Skin in the game",
    desc: "Monthly terms, no long lock-ins. We keep your account by earning the renewal, not by contract.",
  },
];

function Reveal({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

const About = () => {
  return (
    <section id="about" className="border-t border-charcoal/10 bg-paper py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <Reveal>
            <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] font-extrabold leading-tight tracking-[-0.03em] text-balance text-charcoal">
              Direct access, <span>not an account manager.</span>
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-charcoal/58">
              Emporom Media is a Wellington-based digital marketing agency. No
              layers, no hand-offs. The team that pitches your account is the
              team inside it every day.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-7 sm:grid-cols-2">
            {PROPS.map((p, i) => (
              <Reveal key={p.name} delay={0.08 + i * 0.08}>
                <div className="group rounded-xl border border-charcoal/10 bg-white p-5 shadow-[var(--shadow-soft)] transition-all duration-400 ease-premium hover:-translate-y-0.5 hover:border-orange/25 hover:shadow-[var(--shadow-lift)]">
                  <div className="flex items-center gap-2.5 mb-3">
                    <span className="grid h-8 w-8 place-items-center rounded-lg border border-charcoal/10 bg-paper text-orange transition-colors duration-300 group-hover:border-orange/30 group-hover:bg-orange/[0.06]">
                      {p.icon}
                    </span>
                    <h3 className="text-sm font-bold text-charcoal">{p.name}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-charcoal/55">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.15}>
          <div className="rounded-[1.6rem] border border-charcoal/10 bg-charcoal/[0.03] p-2 shadow-[var(--shadow-lift)]">
            <div className="relative h-[380px] overflow-hidden rounded-[calc(1.6rem-8px)] shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]">
              <img
                src="/brands/emporom/wave1.jpg"
                alt="Long-exposure light trails over Wellington at night"
                className="h-full w-full object-cover transition-transform duration-700 ease-premium hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/92 via-charcoal/30 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-charcoal/20 to-transparent" />
              <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-orange/50 to-transparent" />

              <div className="absolute inset-x-0 top-0 flex items-center gap-2 border-b border-white/10 px-5 pt-4 pb-3 bg-gradient-to-b from-charcoal/30 to-transparent">
                <span className="h-1.5 w-1.5 rounded-full bg-orange shadow-[0_0_8px_#ff5b05]" />
                <span className="font-mono text-[0.58rem] uppercase tracking-[0.2em] text-white/45">Emporom Media</span>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="font-mono text-[0.58rem] uppercase tracking-[0.18em] text-white/38 mb-1.5">Wellington, Aotearoa</p>
                <span className="flex items-center gap-2 text-base font-bold text-white">
                  <Spark className="h-3.5 w-3.5 text-orange" />
                  Navigate forward.
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
