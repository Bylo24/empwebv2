import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";

const EASE = [0.16, 1, 0.3, 1] as const;

const LINKS = [
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Work", href: "#work" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-3 z-50 flex flex-col items-center gap-2 px-4 sm:top-4">
        <nav
          className={`flex w-full max-w-5xl items-center justify-between gap-6 rounded-full px-3 py-2 pl-5 backdrop-blur-xl transition-all duration-700 ease-premium ${
            scrolled
              ? "bg-white/85 shadow-[0_14px_44px_-14px_rgba(16,20,25,0.30)] ring-1 ring-charcoal/10"
              : "bg-white/55 shadow-[0_8px_32px_-16px_rgba(16,20,25,0.22)] ring-1 ring-charcoal/[0.07]"
          }`}
        >
          <a href="#" className="flex items-center h-full justify-center" aria-label="Emporom Media home">
            <img src={logo} alt="Emporom Media" className="h-7 md:h-9 object-contain" />
          </a>

          <div className="hidden md:flex items-center gap-7">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="focus-ring relative whitespace-nowrap text-[0.82rem] font-semibold text-charcoal/55 transition-colors duration-300 ease-premium hover:text-charcoal after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-orange after:transition-all after:duration-300 after:ease-premium hover:after:w-full"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Link
              to="/work-with-us"
              className="focus-ring group hidden md:inline-flex items-center gap-2 rounded-full bg-orange py-2 pl-4 pr-2 text-[0.82rem] font-bold text-white shadow-[0_8px_24px_-8px_rgba(255,91,5,0.5)] transition-all duration-500 ease-premium active:scale-[0.98] hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-8px_rgba(255,91,5,0.55)]"
            >
              Apply to Work With Us
              <span className="grid h-6 w-6 place-items-center rounded-full bg-white/20 transition-transform duration-500 ease-premium group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:scale-105">
                <svg viewBox="0 0 10 10" fill="none" className="h-2.5 w-2.5" aria-hidden="true">
                  <path d="M2 8 8 2M3.5 2H8v4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>

            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="focus-ring relative z-[60] md:hidden h-10 w-10 flex items-center justify-center rounded-full transition-all duration-300 ease-premium hover:bg-charcoal/[0.06]"
            >
              <span className="relative flex h-5 w-6 flex-col justify-between">
                <span
                  className={`block h-0.5 w-full rounded-full bg-charcoal transition-all duration-400 ease-premium origin-center ${
                    open ? "translate-y-[9px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-full rounded-full bg-charcoal transition-all duration-300 ease-premium ${
                    open ? "opacity-0 scale-x-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-full rounded-full bg-charcoal transition-all duration-400 ease-premium origin-center ${
                    open ? "-translate-y-[9px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="fixed inset-0 z-40 md:hidden bg-white/96 backdrop-blur-2xl flex flex-col px-8 pt-28 pb-10"
          >
            <nav className="flex flex-col gap-1">
              {LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.08 + i * 0.055, ease: EASE }}
                  className="focus-ring border-b border-charcoal/8 py-5 text-2xl font-bold text-charcoal transition-colors hover:text-orange"
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease: EASE }}
              className="mt-auto"
            >
              <Link
                to="/work-with-us"
                onClick={() => setOpen(false)}
                className="focus-ring flex w-full items-center justify-center gap-3 rounded-2xl bg-orange py-4 text-lg font-bold text-white shadow-[0_12px_36px_-8px_rgba(255,91,5,0.42)]"
              >
                Apply to Work With Us
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
