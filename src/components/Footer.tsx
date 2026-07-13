import { Instagram, Linkedin } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const FOOT = [
  {
    h: "Services",
    links: [
      ["Meta Ads", "#services"],
      ["Google Ads", "#services"],
      ["SEO", "#services"],
      ["CRO", "#services"],
    ],
  },
  {
    h: "Company",
    links: [
      ["Work", "#work"],
      ["Pricing", "#pricing"],
      ["Contact", "#contact"],
    ],
  },
];

const SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/emporom-digital-marketing/posts/?feedView=all", icon: Linkedin },
  { label: "Instagram", href: "https://www.instagram.com/emporom.media/", icon: Instagram },
];

const Footer = () => {
  const reduce = useReducedMotion();
  return (
    <motion.footer
      initial={reduce ? false : { opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="border-t border-cloud/10 bg-ink py-16"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <img src={logo} alt="Emporom Media" className="h-12 brightness-0 invert opacity-90" />
            <p className="mt-5 max-w-xs leading-relaxed text-cloud/45">
              Performance marketing for NZ brands that value the work. Wellington, Aotearoa.
            </p>
            <Link
              to="/work-with-us"
              className="focus-ring group mt-6 inline-flex items-center gap-2 rounded-full bg-orange px-5 py-2.5 text-sm font-bold text-white shadow-[0_8px_24px_-6px_rgba(255,91,5,0.38)] transition-all duration-400 ease-premium hover:-translate-y-0.5 hover:bg-orange-2"
            >
              Apply to Work With Us
              <span className="grid h-4.5 w-4.5 place-items-center rounded-full bg-white/15 transition-transform duration-300 group-hover:translate-x-0.5">
                <svg viewBox="0 0 10 10" fill="none" className="h-2 w-2" aria-hidden="true">
                  <path d="M2 8 8 2M3.5 2H8v4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          </div>

          {FOOT.map((col) => (
            <div key={col.h}>
              <p className="eyebrow text-cloud/35">{col.h}</p>
              <ul className="mt-5 space-y-3">
                {col.links.map(([l, href]) => (
                  <li key={l}>
                    <a href={href} className="focus-ring text-sm font-medium text-cloud/48 transition-all duration-300 hover:text-orange hover:translate-x-0.5 inline-block">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="eyebrow text-cloud/35">Elsewhere</p>
            <ul className="mt-5 space-y-3">
              {SOCIALS.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="focus-ring inline-flex items-center gap-2 text-sm font-medium text-cloud/48 transition-all duration-300 hover:text-orange hover:translate-x-0.5"
                  >
                    <s.icon className="h-3.5 w-3.5" />
                    {s.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="mailto:logan@emporom.org" className="focus-ring text-sm font-medium text-cloud/48 transition-all duration-300 hover:text-orange hover:translate-x-0.5 inline-block">
                  logan@emporom.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-cloud/[0.08] pt-7 sm:flex-row">
          <p className="text-sm text-cloud/35">© {new Date().getFullYear()} Emporom Media. All rights reserved.</p>
          <p className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.24em] text-orange">Navigate forward.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
