import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type NavItem = { id: string; label: string };

const NAV: NavItem[] = [
  { id: "agency", label: "Inside" },
  { id: "services", label: "Services" },
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "testimonial", label: "Words" },
  { id: "faq", label: "FAQ" },
];

const StickyNav = () => {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState<string>("");
  const [mobileOpen, setMobileOpen] = useState(false);

  /* Show after scrolling past 60vh, also drive progress bar */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setVisible(y > window.innerHeight * 0.6);
      setProgress(max > 0 ? Math.min(100, (y / max) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Track active section */
  useEffect(() => {
    const ids = NAV.map((n) => n.id);
    const targets = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (!targets.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const inView = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (inView.length) setActive(inView[0].target.id);
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    targets.forEach((t) => obs.observe(t));
    return () => obs.disconnect();
  }, []);

  /* Lock body scroll while mobile menu open */
  useEffect(() => {
    if (typeof document === "undefined") return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = mobileOpen ? "hidden" : prev;
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  /* Scroll-reveal — fade-up section heads / grids / lists when entering view */
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const selectors = [
      ".r-show-head", ".r-show-frame", ".r-show-team",
      ".r-svc-head", ".r-svc-grid", ".r-svc-retainer",
      ".r-fw-head", ".r-fw-list", ".r-fw-foot",
      ".r-ab-head", ".r-ab-cards", ".r-ab-strap",
      ".r-tt-head", ".r-tt-quote-fig", ".r-tt-context",
      ".r-faq-head", ".r-faq-list", ".r-faq-foot",
      ".r-cta-inner > *",
    ];
    const els = Array.from(
      document.querySelectorAll<HTMLElement>(selectors.join(","))
    );
    els.forEach((el) => el.classList.add("r-reveal"));

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("r-revealed");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      // also update URL hash without jumping
      window.history.replaceState(null, "", `#${id}`);
    }
  };

  return (
    <>
      <nav
        className="r-snav"
        data-visible={visible ? "true" : "false"}
        aria-label="Section navigation"
      >
        <div className="r-snav-progress" style={{ width: `${progress}%` }} aria-hidden />

        <div className="r-snav-inner">
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="r-snav-wordmark"
          >
            EMPOROM&nbsp;MEDIA<span className="r-snav-period">.</span>
          </a>

          <ul className="r-snav-links" role="list">
            {NAV.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className="r-snav-link"
                  data-active={active === item.id ? "true" : "false"}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <Link to="/work-with-us" className="r-snav-cta">
            Book a call <span aria-hidden>→</span>
          </Link>

          <button
            type="button"
            className="r-snav-burger"
            aria-label="Open navigation"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className="r-snav-burger-bar" />
            <span className="r-snav-burger-bar" />
          </button>
        </div>
      </nav>

      {/* mobile fullscreen overlay */}
      <div className="r-snav-overlay" data-open={mobileOpen ? "true" : "false"} aria-hidden={!mobileOpen}>
        <div className="r-snav-overlay-inner">
          <button
            type="button"
            className="r-snav-overlay-close"
            aria-label="Close navigation"
            onClick={() => setMobileOpen(false)}
          >
            <span />
            <span />
          </button>

          <ul className="r-snav-overlay-list" role="list">
            {NAV.map((item, i) => (
              <li key={item.id} style={{ transitionDelay: mobileOpen ? `${80 + i * 60}ms` : "0ms" }}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className="r-snav-overlay-link"
                >
                  <span className="r-snav-overlay-no">{String(i + 1).padStart(2, "0")}</span>
                  <span className="r-snav-overlay-label">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>

          <Link
            to="/work-with-us"
            className="r-snav-overlay-cta"
            onClick={() => setMobileOpen(false)}
          >
            Book a call <span aria-hidden>→</span>
          </Link>
        </div>
      </div>

      <style>{`
        /* === GLOBAL HELPERS FOR REDESIGN === */
        .redesign-root section[id] { scroll-margin-top: 80px; }

        .redesign-root .r-reveal {
          opacity: 0;
          transform: translateY(28px);
          transition:
            opacity 680ms cubic-bezier(0.2, 0.6, 0.2, 1),
            transform 760ms cubic-bezier(0.2, 0.6, 0.2, 1);
          will-change: opacity, transform;
        }
        .redesign-root .r-reveal.r-revealed {
          opacity: 1;
          transform: translateY(0);
        }
        @media (prefers-reduced-motion: reduce) {
          .redesign-root .r-reveal {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
        }

        .r-snav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          background: rgba(241, 237, 229, 0.88);
          backdrop-filter: blur(12px) saturate(1.05);
          -webkit-backdrop-filter: blur(12px) saturate(1.05);
          border-bottom: 1px solid var(--ink-line);
          transform: translateY(-100%);
          opacity: 0;
          transition: transform 380ms cubic-bezier(0.2,0.6,0.2,1), opacity 280ms ease;
          pointer-events: none;
        }
        .r-snav[data-visible="true"] {
          transform: translateY(0);
          opacity: 1;
          pointer-events: auto;
        }

        .r-snav-progress {
          position: absolute;
          left: 0;
          bottom: -1px;
          height: 2px;
          background: var(--or);
          transition: width 120ms linear;
          max-width: 100%;
        }

        .r-snav-inner {
          max-width: 1440px;
          margin: 0 auto;
          padding: 14px 4vw;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }

        .r-snav-wordmark {
          font-family: var(--font-body);
          font-weight: 600;
          letter-spacing: 0.18em;
          font-size: 11px;
          text-decoration: none;
          color: var(--ink);
          line-height: 1;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .r-snav-period { color: var(--or); }

        .r-snav-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          align-items: center;
          gap: 28px;
        }
        .r-snav-link {
          position: relative;
          font-family: var(--font-body);
          font-weight: 500;
          font-size: 12.5px;
          letter-spacing: 0.04em;
          color: var(--ink);
          opacity: 0.62;
          text-decoration: none;
          padding: 8px 0;
          transition: opacity 200ms ease, color 200ms ease;
        }
        .r-snav-link::after {
          content: "";
          position: absolute;
          left: 0;
          right: 100%;
          bottom: 4px;
          height: 1.5px;
          background: var(--or);
          transition: right 280ms cubic-bezier(0.2,0.6,0.2,1);
        }
        .r-snav-link:hover { opacity: 1; }
        .r-snav-link[data-active="true"] { opacity: 1; color: var(--ink); }
        .r-snav-link[data-active="true"]::after { right: 0; }

        .r-snav-cta {
          font-family: var(--font-body);
          font-weight: 600;
          font-size: 12.5px;
          color: var(--cream);
          background: var(--ink);
          padding: 11px 18px;
          border-radius: 4px;
          text-decoration: none;
          transition: background 220ms ease, transform 150ms ease;
          line-height: 1;
          letter-spacing: 0.02em;
          flex-shrink: 0;
        }
        .r-snav-cta:hover { background: var(--or); transform: translateY(-1px); }

        .r-snav-burger {
          display: none;
          all: unset;
          width: 30px;
          height: 30px;
          cursor: pointer;
          position: relative;
          flex-shrink: 0;
        }
        .r-snav-burger-bar {
          position: absolute;
          left: 4px;
          right: 4px;
          height: 1.5px;
          background: var(--ink);
          transition: transform 280ms ease;
        }
        .r-snav-burger-bar:nth-child(1) { top: 11px; }
        .r-snav-burger-bar:nth-child(2) { top: 18px; }

        /* === OVERLAY (mobile) === */
        .r-snav-overlay {
          position: fixed;
          inset: 0;
          z-index: 100;
          background: var(--ink);
          color: var(--cream);
          opacity: 0;
          pointer-events: none;
          transition: opacity 320ms ease;
        }
        .r-snav-overlay[data-open="true"] {
          opacity: 1;
          pointer-events: auto;
        }

        .r-snav-overlay-inner {
          max-width: 800px;
          margin: 0 auto;
          padding: clamp(40px, 8vh, 80px) 6vw;
          height: 100%;
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .r-snav-overlay-close {
          all: unset;
          align-self: flex-end;
          width: 32px;
          height: 32px;
          position: relative;
          cursor: pointer;
        }
        .r-snav-overlay-close span {
          position: absolute;
          left: 4px;
          right: 4px;
          top: 50%;
          height: 1.5px;
          background: var(--cream);
        }
        .r-snav-overlay-close span:nth-child(1) { transform: rotate(45deg); }
        .r-snav-overlay-close span:nth-child(2) { transform: rotate(-45deg); }

        .r-snav-overlay-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 6px;
          flex: 1;
          justify-content: center;
        }
        .r-snav-overlay-list li {
          opacity: 0;
          transform: translateY(12px);
          transition: opacity 380ms ease, transform 380ms cubic-bezier(0.2,0.6,0.2,1);
        }
        .r-snav-overlay[data-open="true"] .r-snav-overlay-list li {
          opacity: 1;
          transform: translateY(0);
        }
        .r-snav-overlay-link {
          display: flex;
          align-items: baseline;
          gap: 20px;
          text-decoration: none;
          padding: 14px 0;
          border-bottom: 1px solid rgba(241,237,229,0.14);
          color: var(--cream);
          transition: color 200ms ease, padding-left 240ms ease;
        }
        .r-snav-overlay-link:hover {
          color: var(--or);
          padding-left: 8px;
        }
        .r-snav-overlay-no {
          font-family: var(--font-body);
          font-weight: 500;
          font-size: 12px;
          letter-spacing: 0.2em;
          color: var(--or);
        }
        .r-snav-overlay-label {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: clamp(28px, 6vw, 44px);
          letter-spacing: -0.015em;
        }

        .r-snav-overlay-cta {
          align-self: flex-start;
          padding: 16px 28px;
          background: var(--or);
          color: var(--cream);
          font-family: var(--font-body);
          font-weight: 600;
          font-size: 14px;
          text-decoration: none;
          border-radius: 6px;
          letter-spacing: 0.01em;
          transition: opacity 220ms ease, transform 150ms ease;
          line-height: 1;
        }
        .r-snav-overlay-cta:hover { opacity: 0.92; transform: translateY(-1px); }

        @media (max-width: 880px) {
          .r-snav-links, .r-snav-cta { display: none; }
          .r-snav-burger { display: inline-block; }
        }
      `}</style>
    </>
  );
};

export default StickyNav;
