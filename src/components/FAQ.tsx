import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const FAQS = [
  {
    q: "How fast will I see results?",
    a: "Quick wins in week one: cleaned-up campaigns and sharper creative live. Meaningful results usually take 4-6 weeks. Anyone promising faster is guessing.",
  },
  {
    q: "What happens in the first week?",
    a: "We take the account over, fix what's broken, and get everything running properly before we scale a dollar. It's usually the fastest win in the whole account.",
  },
  {
    q: "Am I locked into a long contract?",
    a: "No. Retainers run monthly with an agreed initial term, and you keep ownership of every account, pixel and page we build.",
  },
  {
    q: "What's included when you take over an account?",
    a: "A full walkthrough of your ad account: wasted spend, sloppy campaign structure, audience overlap and tired creative. You get a prioritised fix list before anything scales.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);
  const reduce = useReducedMotion();

  return (
    <section id="faq" className="border-t border-charcoal/10 bg-paper py-28">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-center"
        >
          <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] font-extrabold tracking-[-0.03em] text-charcoal">
            The honest answers.
          </h2>
        </motion.div>

        <div className="mt-12 space-y-2">
          {FAQS.map((f, i) => (
            <motion.div
              key={i}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.045, ease: EASE }}
            >
              <div
                className={`overflow-hidden rounded-xl border transition-all duration-400 ease-premium ${
                  open === i ? "border-orange/25 bg-white shadow-[var(--shadow-soft)]" : "border-charcoal/10 bg-white hover:border-charcoal/20"
                }`}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="focus-ring flex w-full items-center justify-between gap-6 px-7 py-5 text-left"
                  aria-expanded={open === i}
                >
                  <span className="text-base font-bold tracking-tight text-charcoal leading-snug">{f.q}</span>
                  <span
                    className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border transition-all duration-400 ease-premium ${
                      open === i ? "rotate-45 border-orange/30 bg-orange text-white" : "border-charcoal/15 bg-charcoal/[0.03] text-charcoal/50"
                    }`}
                  >
                    <svg viewBox="0 0 12 12" fill="none" className="h-3 w-3" aria-hidden="true">
                      <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <p className="px-7 pb-6 leading-relaxed text-charcoal/58">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
