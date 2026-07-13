import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView, useReducedMotion } from "framer-motion";
import { Spark } from "@/components/Spark";

const EASE = [0.16, 1, 0.3, 1] as const;

/* trust marquee — industries served */
const INDUSTRIES = ["E-commerce", "Home Services", "Real Estate", "Health & Wellness", "Trades", "Professional Services"];

export function Marquee() {
  const row = [...INDUSTRIES, ...INDUSTRIES];
  return (
    <div className="relative overflow-hidden border-y border-charcoal/10 bg-white py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 z-10 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 z-10 bg-gradient-to-l from-white to-transparent" />
      <div className="relative marquee-track flex w-max items-center gap-10">
        {row.map((c, i) => (
          <span key={i} className="flex items-center gap-10 whitespace-nowrap">
            <span className="text-sm font-semibold tracking-[0.02em] text-charcoal/40">{c}</span>
            <Spark className="h-2.5 w-2.5 text-orange/40" />
          </span>
        ))}
      </div>
    </div>
  );
}

/* stats band with count-up */
function Stat({
  to,
  decimals = 0,
  suffix = "",
  label,
  delay = 0,
}: {
  to: number;
  decimals?: number;
  suffix?: string;
  label: string;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const [val, setVal] = useState(to);

  useEffect(() => {
    if (!inView || reduce) return;
    setVal(0);
    const timer = setTimeout(() => {
      const controls = animate(0, to, {
        duration: 1.4,
        ease: "easeOut",
        onUpdate: (v) => setVal(v),
      });
      return () => controls.stop();
    }, delay * 1000);
    return () => clearTimeout(timer);
  }, [inView, to, reduce, delay]);

  return (
    <div className="group relative">
      <span ref={ref} className="text-[clamp(2.4rem,5vw,3.6rem)] font-extrabold tracking-tight text-cloud">
        {val.toFixed(decimals)}
        {suffix}
      </span>
      <span
        aria-hidden="true"
        className="mt-3 block h-0.5 w-10 rounded-full bg-orange/60 transition-all duration-500 ease-premium group-hover:w-16 group-hover:bg-orange"
      />
      <p className="mt-2.5 eyebrow text-cloud/60 leading-relaxed">{label}</p>
    </div>
  );
}

function StaticStat({ value, label, delay }: { value: string; label: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: EASE }}
      className="group relative"
    >
      <span className="text-[clamp(2.4rem,5vw,3.6rem)] font-extrabold tracking-tight text-cloud">{value}</span>
      <span
        aria-hidden="true"
        className="mt-3 block h-0.5 w-10 rounded-full bg-orange/60 transition-all duration-500 ease-premium group-hover:w-16 group-hover:bg-orange"
      />
      <p className="mt-2.5 eyebrow text-cloud/60 leading-relaxed">{label}</p>
    </motion.div>
  );
}

export function Results() {
  return (
    <section className="relative overflow-hidden bg-charcoal py-28">
      <img
        src="/brands/emporom/light-strips.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover scale-105"
        style={{ objectPosition: "center 40%" }}
      />
      <div className="absolute inset-0 bg-charcoal/90" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-charcoal to-transparent" />
      <div className="pointer-events-none absolute -top-24 right-0 h-[360px] w-[360px] rounded-full bg-orange/[0.08] blur-[120px]" />
      <div className="grain pointer-events-none absolute inset-0 opacity-[0.025]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="max-w-2xl text-[clamp(1.9rem,4vw,3rem)] font-extrabold leading-tight tracking-[-0.03em] text-balance text-cloud"
        >
          Pretty ads are easy. <span className="fade-word">Results are the job.</span>
        </motion.h2>
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <Stat to={4.2} decimals={1} suffix="×" label="Average campaign ROAS" delay={0.05} />
          <StaticStat value="$800" label="Entry retainer / mo" delay={0.12} />
          <StaticStat value="Wk 1" label="Up and running your first week" delay={0.19} />
          <StaticStat value="NZ" label="Wellington-based, hands-on team" delay={0.26} />
        </div>
      </div>
    </section>
  );
}

/* account takeover — before/after toggle */
export function Audit() {
  const [fixed, setFixed] = useState(false);
  const leads = fixed ? 271 : 148;
  const bars = [38, 52, 44, 61, 55, 70, 64, 78, 72, 88, 81, 96];

  return (
    <section id="audit" className="border-t border-charcoal/10 bg-paper py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-extrabold leading-tight tracking-[-0.03em] text-balance text-charcoal">
            Hand it over. Watch it climb.
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-charcoal/58">
            Most accounts we inherit are a mess. Half-built campaigns, budget
            bleeding into the wrong places, nobody actually owning it. We take
            the whole thing over and run it like it should be run.
          </p>
          <div className="mt-8 inline-flex rounded-full border border-charcoal/10 bg-white p-1.5 shadow-[var(--shadow-soft)]">
            {(["Before", "After"] as const).map((opt, i) => (
              <button
                key={opt}
                onClick={() => setFixed(i === 1)}
                className={`focus-ring rounded-full px-7 py-2.5 text-sm font-bold transition-all duration-400 ease-premium ${
                  fixed === (i === 1) ? "bg-orange text-white shadow-[0_4px_16px_-4px_rgba(255,91,5,0.45)]" : "text-charcoal/45 hover:text-charcoal"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
        >
          <div className="rounded-[1.5rem] border border-charcoal/10 bg-charcoal/[0.02] p-1.5 shadow-[var(--shadow-lift)]">
            <div className="rounded-[calc(1.5rem-6px)] overflow-hidden">
              <div className="flex items-center gap-2 px-5 py-3 border-b border-charcoal/10 bg-charcoal/[0.018]">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-4 flex-1 rounded-md bg-charcoal/5 px-3 py-1 font-mono text-[0.6rem] text-charcoal/40">
                  Your account · before &amp; after
                </span>
              </div>
              <div className="bg-white p-7">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="eyebrow text-charcoal/40">Leads per month</p>
                    <p className="mt-2 text-5xl font-extrabold tracking-tight tabular-nums text-charcoal transition-all duration-500">
                      {leads}
                    </p>
                  </div>
                  <motion.span
                    key={fixed ? "fixed" : "broken"}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.35, ease: EASE }}
                    className={`rounded-full border px-3.5 py-1.5 font-mono text-[0.67rem] font-bold ${
                      fixed ? "border-aqua-3/40 bg-aqua-3/10 text-aqua-3" : "border-red-400/30 bg-red-400/10 text-red-400"
                    }`}
                  >
                    {fixed ? "+83% more" : "as inherited"}
                  </motion.span>
                </div>
                <div className="mt-7 flex h-36 items-end gap-2">
                  {bars.map((h, i) => (
                    <div
                      key={i}
                      style={{ height: `${fixed ? h : h * 0.55}%` }}
                      className={`flex-1 rounded-t-md transition-all duration-700 ease-premium ${fixed ? "bg-orange" : "bg-charcoal/10"}`}
                    />
                  ))}
                </div>
                <p className="mt-5 border-t border-charcoal/10 pt-4 eyebrow text-charcoal/35">
                  Real client, before and after we took the account over
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
