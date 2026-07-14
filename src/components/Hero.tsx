import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";

const EASE = [0.16, 1, 0.3, 1] as const;

const CHIPS = [
  { text: "4.2× average ROAS", dot: "orange" as const },
  { text: "Live in your first week", dot: "aqua" as const },
  { text: "Lower cost per lead", dot: "orange" as const },
];

const Hero = () => {
  const reduce = useReducedMotion();

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-ink pt-28 pb-24 isolate">
      <video
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/video/city-hero-poster.jpg"
        aria-hidden="true"
      >
        <source src="/video/city-hero.mp4" type="video/mp4" />
      </video>

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(14,20,25,.82) 0%, rgba(14,20,25,.42) 34%, rgba(14,20,25,.5) 64%, rgba(14,20,25,.9) 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 42%, transparent 30%, rgba(14,20,25,.55) 100%)",
        }}
      />
      <div className="grain pointer-events-none absolute inset-0 -z-10 opacity-[0.025]" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 left-1/2 -translate-x-1/2 -z-10 h-[620px] w-[820px] rounded-full bg-orange/[0.13] blur-[150px]"
      />

      <div className="relative mx-auto max-w-3xl px-6 w-full text-center">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="eyebrow flex items-center justify-center gap-2.5 text-cloud/65"
        >
          <span className="blink inline-block h-1.5 w-1.5 rounded-full bg-orange shadow-[0_0_10px_#ff5b05]" />
          Done-for-you performance marketing · Wellington, NZ
        </motion.p>

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
          className="mt-7 w-full font-display display balance text-[clamp(2.3rem,9vw,5.6rem)] font-extrabold leading-[0.97] text-white"
        >
          Marketing off your plate.
          <br />
          <span className="fade-word">Handled properly.</span>
        </motion.h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.22, ease: EASE }}
          className="mt-7 max-w-[30rem] mx-auto px-2 text-lg leading-[1.6] text-cloud/72 sm:px-0 sm:text-xl sm:leading-[1.65]"
        >
          We run your Meta &amp; Google Ads, build the landing pages, and
          handle the SEO. One team, so you can get back to the business.
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.34, ease: EASE }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3.5"
        >
          <Link
            to="/work-with-us"
            className="focus-ring group inline-flex items-center gap-2.5 rounded-full bg-orange px-6 py-3.5 text-[0.95rem] font-bold text-white shadow-[0_14px_40px_-8px_rgba(255,91,5,0.5)] transition-all duration-500 ease-premium hover:-translate-y-1 hover:shadow-[0_20px_50px_-10px_rgba(255,91,5,0.55)]"
          >
            Apply to Work With Us
            <span className="grid h-6 w-6 place-items-center rounded-full bg-white/15 transition-all duration-300 ease-premium group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:scale-110">
              <svg viewBox="0 0 10 10" fill="none" className="h-2.5 w-2.5" aria-hidden="true">
                <path d="M2 8 8 2M3.5 2H8v4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </Link>
          <a
            href="#work"
            className="focus-ring inline-flex items-center gap-2 rounded-full border border-cloud/20 bg-cloud/[0.05] px-6 py-3.5 text-[0.95rem] font-semibold text-cloud backdrop-blur-sm transition-all duration-400 ease-premium hover:border-cloud/40 hover:bg-cloud/10"
          >
            See the Work
          </a>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.48, ease: EASE }}
          className="mt-9 flex flex-wrap justify-center gap-2.5"
        >
          {CHIPS.map((c) => (
            <span
              key={c.text}
              className="flex items-center gap-2.5 rounded-full border border-cloud/12 bg-cloud/[0.05] px-4 py-2 font-mono text-[0.67rem] font-bold tracking-wide text-cloud/75 backdrop-blur-sm"
            >
              <span
                className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                  c.dot === "orange" ? "bg-orange shadow-[0_0_7px_#ff5b05]" : "bg-aqua-3 shadow-[0_0_7px_#1aa6ae]"
                }`}
              />
              {c.text}
            </span>
          ))}
        </motion.div>
      </div>

      <motion.div
        aria-hidden="true"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-cloud/60">Scroll</span>
        <span className="relative flex h-9 w-5 items-start justify-center rounded-full border border-cloud/25 p-1">
          <motion.span
            animate={reduce ? undefined : { y: [0, 12, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1.5 rounded-full bg-orange"
          />
        </span>
      </motion.div>
    </section>
  );
};

export default Hero;
