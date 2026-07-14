import { motion, useReducedMotion } from "framer-motion";
import { Reveal, EASE } from "@/components/Premium";

const OLD = [
  "A month-end PDF nobody opens",
  "You chasing them for an update every week",
  "Locked into a 12-month contract to find out",
  "An account manager who's never run an ad",
  "Creative that looks nice and sells nothing",
];

const NEW = [
  "Everything set up and live in your first week",
  "One person who owns the whole account",
  "Done-for-you and month-to-month. We earn the next one",
  "Run by the people who actually build the ads",
  "Creative tested against real ROAS, not guesses",
];

function Card({
  reduce,
  side,
  tag,
  dot,
  heading,
  items,
  featured,
  delay,
}: {
  reduce: boolean | null;
  side: string;
  tag: string;
  dot: string;
  heading: string;
  items: string[];
  featured?: boolean;
  delay: number;
}) {
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: EASE }}
      className={`relative overflow-hidden rounded-[1.5rem] p-8 sm:p-10 transition-all duration-500 ease-premium ${
        featured
          ? "bg-charcoal text-cloud shadow-[0_30px_80px_-24px_rgba(255,91,5,0.35)] hover:-translate-y-1"
          : "bg-white/60 border border-charcoal/10 text-charcoal hover:-translate-y-0.5"
      }`}
    >
      <div className="mb-7 flex items-center justify-between">
        <span
          className={`flex items-center gap-2 rounded-full px-3 py-1 font-mono text-[0.62rem] font-bold uppercase tracking-[0.14em] ${
            featured ? "bg-orange/15 text-orange" : "bg-charcoal/5 text-charcoal/70"
          }`}
        >
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ background: dot, boxShadow: featured ? `0 0 8px ${dot}` : "none" }}
          />
          {tag}
        </span>
        <span
          className={`font-mono text-[0.6rem] uppercase tracking-[0.16em] ${
            featured ? "text-cloud/65" : "text-charcoal/70"
          }`}
        >
          {side}
        </span>
      </div>

      <h3 className={`display text-[1.6rem] font-extrabold leading-tight ${featured ? "text-white" : "text-charcoal"}`}>
        {heading}
      </h3>

      <ul className="mt-7 flex flex-col gap-4">
        {items.map((t) => (
          <li key={t} className="flex items-start gap-3">
            <span
              className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${
                featured ? "bg-orange text-white" : "bg-charcoal/[0.06] text-charcoal/60"
              }`}
            >
              {featured ? (
                <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" fill="none" aria-hidden="true">
                  <path d="M2.5 6.5 5 9l4.5-5.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                <svg viewBox="0 0 12 12" className="h-2 w-2" fill="none" aria-hidden="true">
                  <path d="M3 3l6 6M9 3l-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              )}
            </span>
            <span className={`text-[0.98rem] leading-[1.55] ${featured ? "text-cloud/85" : "text-charcoal/70"}`}>
              {t}
            </span>
          </li>
        ))}
      </ul>

      {featured && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -right-16 h-64 w-64 rounded-full bg-orange/[0.16] blur-[90px]"
        />
      )}
    </motion.div>
  );
}

const Compare = () => {
  const reduce = useReducedMotion();

  return (
    <section className="relative bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <h2 className="font-display display balance text-[clamp(2rem,4.2vw,3.1rem)] font-extrabold leading-[1.02] text-charcoal">
            Most agencies hand you a to-do list. We just handle it.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-charcoal/70">
            Same budget, two very different months. Here's what changes when
            the person running your ads is the one who built them.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          <Card reduce={reduce} side="Old way" tag="Busywork" dot="#c8483a" heading="The usual agency" items={OLD} delay={0.05} />
          <Card reduce={reduce} side="Emporom way" tag="Handled" dot="#ff5b05" heading="Working with us" items={NEW} featured delay={0.14} />
        </div>
      </div>
    </section>
  );
};

export default Compare;
