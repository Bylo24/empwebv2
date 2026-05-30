import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Schematics from "@/components/redesign/Schematics";

const ROLLING_WORDS = ["growth.", "results.", "revenue.", "enquiries.", "pipeline.", "bookings."];

const MARQUEE = [
  "Fantail Services",
  "Carnivore Crate",
  "2in1 Cleaners",
  "Welly Lawns",
  "Home & Beyond",
  "Howard & Co",
  "Kombucha Bros",
  "Little City Kombucha",
  "Ultra Fast Pest Control",
  "Waterwell Naturopath",
];

const RollingPill = ({ words, interval = 2800 }: { words: string[]; interval?: number }) => {
  const [idx, setIdx] = useState(0);
  const longest = words.reduce((a, b) => (b.length > a.length ? b : a), "");

  useEffect(() => {
    const id = window.setInterval(() => {
      setIdx((i) => (i + 1) % words.length);
    }, interval);
    return () => window.clearInterval(id);
  }, [words, interval]);

  return (
    <span className="r-pill" aria-live="polite" aria-atomic="true">
      <span className="r-pill-sizer" aria-hidden>{longest}</span>
      {words.map((w, i) => (
        <span key={w} className="r-pill-word" data-active={i === idx ? "true" : "false"}>
          {w}
        </span>
      ))}
    </span>
  );
};

const Hero = () => {
  const marqueeRow = [...MARQUEE, ...MARQUEE];

  return (
    <section className="r-hero">
      <div className="r-bg-blob r-bg-blob-a" aria-hidden />
      <div className="r-bg-blob r-bg-blob-b" aria-hidden />
      <div className="r-hairline" aria-hidden />

      <header className="r-header">
        <div className="r-header-inner">
          <Link to="/redesign" className="r-wordmark">
            EMPOROM&nbsp;MEDIA<span className="r-period">.</span>
          </Link>
          <nav className="r-nav-links">
            <a href="#services" className="r-nav-link">Services</a>
            <a href="#work" className="r-nav-link">Work</a>
            <a href="#about" className="r-nav-link">About</a>
            <Link to="/work-with-us" className="r-nav-cta">
              Book a call <span aria-hidden>→</span>
            </Link>
          </nav>
        </div>
      </header>

      <div className="r-hero-grid">
        <div className="r-hero-left">
          <div className="r-eyebrow r-anim">
            <span>EMPOROM MEDIA</span>
            <span className="r-dot" aria-hidden />
            <span>WELLINGTON · NZ</span>
          </div>

          <h1 className="r-headline r-anim" style={{ animationDelay: "140ms" }}>
            <span className="r-line">We turn paid traffic</span>
            <span className="r-line r-line-pill">
              <span className="r-into">into</span>
              <RollingPill words={ROLLING_WORDS} />
            </span>
          </h1>

          <div className="r-cta-row r-anim" style={{ animationDelay: "280ms" }}>
            <Link to="/work-with-us" className="r-cta-primary">
              Book a call
            </Link>
            <a href="/100-small-nets.html" className="r-cta-secondary">
              See the 100 Small Nets offer <span aria-hidden>→</span>
            </a>
          </div>
        </div>

        <aside className="r-hero-right r-anim" style={{ animationDelay: "240ms" }}>
          <Schematics />
        </aside>
      </div>

      <div className="r-strip" aria-label="Selected clients">
        <div className="r-strip-rail">
          {marqueeRow.map((name, i) => (
            <span key={i} className="r-strip-item">
              <span>{name}</span>
              <span className="r-strip-sep" aria-hidden>·</span>
            </span>
          ))}
        </div>
      </div>

      <div className="r-corner-stamp" aria-hidden>№ 001 · 2026</div>

      <style>{`
        .r-hero {
          position: relative;
          min-height: 100vh;
          background: var(--cream);
          color: var(--ink);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          isolation: isolate;
        }

        .r-bg-blob {
          position: absolute;
          z-index: 0;
          pointer-events: none;
          border-radius: 50%;
          filter: blur(80px);
          will-change: transform;
        }
        .r-bg-blob-a {
          width: 56vmax; height: 56vmax;
          top: -16vmax; left: -14vmax;
          background: radial-gradient(circle, rgba(237,94,28,0.20), rgba(237,94,28,0) 65%);
          animation: r-drift-a 28s ease-in-out infinite;
        }
        .r-bg-blob-b {
          width: 48vmax; height: 48vmax;
          bottom: -12vmax; right: -10vmax;
          background: radial-gradient(circle, rgba(26,26,26,0.10), rgba(26,26,26,0) 65%);
          animation: r-drift-b 34s ease-in-out infinite;
        }
        @keyframes r-drift-a { 0%,100% { transform: translate(0,0); } 50% { transform: translate(10vmax, 8vmax); } }
        @keyframes r-drift-b { 0%,100% { transform: translate(0,0); } 50% { transform: translate(-8vmax, -6vmax); } }

        .r-hairline {
          height: 2px; background: var(--or); width: 100%;
          flex-shrink: 0; position: relative; z-index: 1;
        }

        .r-header { padding: 28px 4vw 0; flex-shrink: 0; position: relative; z-index: 2; }
        .r-header-inner {
          max-width: 1440px; margin: 0 auto;
          display: flex; align-items: center; justify-content: space-between; gap: 24px;
        }
        .r-wordmark {
          font-family: var(--font-body); font-weight: 600;
          letter-spacing: 0.18em; font-size: 12px;
          text-decoration: none; color: var(--ink);
          line-height: 1; white-space: nowrap;
        }
        .r-period { color: var(--or); }
        .r-nav-links { display: flex; align-items: center; gap: 32px; }
        .r-nav-link {
          font-family: var(--font-body); font-weight: 500; font-size: 13px;
          text-decoration: none; color: var(--ink); opacity: 0.78;
          transition: opacity 150ms ease, color 150ms ease;
          letter-spacing: 0.01em; line-height: 1;
        }
        .r-nav-link:hover { opacity: 1; color: var(--or); }
        .r-nav-cta {
          font-family: var(--font-body); font-weight: 500; font-size: 13px;
          text-decoration: none; color: var(--ink); line-height: 1;
          padding-left: 24px; border-left: 1px solid var(--ink-line);
          transition: color 150ms ease;
        }
        .r-nav-cta:hover { color: var(--or); }

        .r-hero-grid {
          flex: 1; width: 100%; max-width: 1440px; margin: 0 auto;
          padding: clamp(40px, 7vh, 88px) 4vw clamp(40px, 7vh, 80px);
          display: grid; grid-template-columns: 1.15fr 1fr;
          gap: clamp(40px, 6vw, 96px);
          align-items: center; position: relative; z-index: 2;
        }

        .r-hero-left { display: flex; flex-direction: column; gap: clamp(28px, 3.4vh, 44px); }
        .r-eyebrow {
          font-family: var(--font-body); font-weight: 500;
          letter-spacing: 0.2em; text-transform: uppercase; font-size: 11px;
          color: var(--ink-muted);
          display: inline-flex; align-items: center; gap: 14px; flex-wrap: wrap;
        }
        .r-dot {
          width: 4px; height: 4px; border-radius: 999px;
          background: var(--or); display: inline-block; flex-shrink: 0;
        }

        .r-headline {
          font-family: var(--font-display); font-weight: 800;
          letter-spacing: -0.025em; line-height: 1.0;
          color: var(--ink); margin: 0;
          font-size: clamp(40px, 5.8vw, 88px);
          display: flex; flex-direction: column; gap: 14px;
        }
        .r-line { display: block; }
        .r-line-pill {
          display: inline-flex; align-items: center;
          gap: 0.22em; flex-wrap: wrap;
        }
        .r-into { color: var(--ink); }

        .r-pill {
          display: inline-grid; position: relative;
          background: var(--ink); color: var(--or);
          padding: 0.12em 0.34em 0.22em;
          border-radius: 8px; vertical-align: baseline;
          font-style: italic; font-weight: 500;
          line-height: 1.0; letter-spacing: -0.02em;
          overflow: hidden;
        }
        .r-pill > * { grid-column: 1; grid-row: 1; }
        .r-pill-sizer { visibility: hidden; pointer-events: none; }
        .r-pill-word {
          opacity: 0; transform: translateY(0.42em);
          transition: opacity 320ms ease, transform 420ms cubic-bezier(0.18, 0.7, 0.22, 1);
          will-change: opacity, transform;
        }
        .r-pill-word[data-active="true"] { opacity: 1; transform: translateY(0); }

        .r-cta-row { display: flex; flex-wrap: wrap; align-items: center; gap: 24px; }
        .r-cta-primary {
          display: inline-flex; align-items: center;
          padding: 16px 28px; background: var(--ink); color: var(--cream);
          font-family: var(--font-body); font-weight: 600; font-size: 14px;
          text-decoration: none; border-radius: 6px;
          letter-spacing: 0.01em;
          transition: background 220ms ease, transform 150ms ease;
          line-height: 1;
        }
        .r-cta-primary:hover { background: var(--or); transform: translateY(-1px); }
        .r-cta-secondary {
          font-family: var(--font-body); font-weight: 500; font-size: 14px;
          color: var(--ink); text-decoration: none;
          border-bottom: 1px solid var(--ink-line); padding-bottom: 4px;
          transition: border-color 200ms ease, color 200ms ease;
          line-height: 1;
        }
        .r-cta-secondary:hover { border-color: var(--or); color: var(--or); }

        .r-hero-right { display: flex; justify-content: flex-end; }

        .r-strip {
          position: relative; z-index: 2; flex-shrink: 0;
          border-top: 1px solid var(--ink-line);
          border-bottom: 1px solid var(--ink-line);
          padding: 18px 0; overflow: hidden;
          background: rgba(241, 237, 229, 0.7);
        }
        .r-strip::before, .r-strip::after {
          content: ""; position: absolute; top: 0; bottom: 0;
          width: 96px; z-index: 2; pointer-events: none;
        }
        .r-strip::before { left: 0; background: linear-gradient(to right, var(--cream), transparent); }
        .r-strip::after  { right: 0; background: linear-gradient(to left, var(--cream), transparent); }
        @keyframes r-march { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .r-strip-rail {
          display: flex; gap: 0; animation: r-march 56s linear infinite;
          width: max-content;
        }
        .r-strip-item {
          display: inline-flex; align-items: center; gap: 22px;
          font-family: var(--font-display); font-weight: 700;
          font-size: 13px; letter-spacing: 0.18em;
          text-transform: uppercase; color: var(--ink);
          padding: 0 22px; white-space: nowrap;
        }
        .r-strip-sep { color: var(--or); }

        .r-corner-stamp {
          position: absolute; bottom: 12px; right: 4vw;
          font-family: var(--font-body); font-weight: 500;
          letter-spacing: 0.2em; text-transform: uppercase; font-size: 10px;
          color: var(--ink-muted); line-height: 1;
          pointer-events: none; z-index: 3;
        }

        @media (max-width: 980px) {
          .r-hero-grid { grid-template-columns: 1fr; gap: 40px; padding-top: 6vh; }
          .r-hero-right { justify-content: stretch; }
          .r-headline { font-size: clamp(36px, 9vw, 64px); }
        }
        @media (max-width: 720px) {
          .r-header { padding-top: 20px; }
          .r-nav-links { gap: 18px; }
          .r-nav-link { display: none; }
          .r-nav-cta { padding-left: 0; border-left: 0; }
          .r-hero-grid { padding: 5vh 6vw 4vh; gap: 32px; }
          .r-eyebrow { font-size: 10px; gap: 10px; }
          .r-cta-row { gap: 18px; flex-direction: column; align-items: flex-start; }
          .r-strip-item { font-size: 11px; }
          .r-corner-stamp { right: 6vw; bottom: 8px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .r-bg-blob { animation: none; }
          .r-strip-rail { animation: none; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
