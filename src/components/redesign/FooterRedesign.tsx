import { Link } from "react-router-dom";

const COLUMNS = [
  {
    title: "Work",
    links: [
      { label: "Featured cases", href: "#work" },
      { label: "100 Small Nets (RE)", href: "/100-small-nets.html" },
      { label: "Brief us", href: "/work-with-us" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Paid media", href: "#services" },
      { label: "Search & content", href: "#services" },
      { label: "Landing pages", href: "#services" },
      { label: "Strategy & reporting", href: "#services" },
    ],
  },
  {
    title: "Agency",
    links: [
      { label: "About", href: "#about" },
      { label: "Inside the work", href: "#agency" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "logan@emporom.org", href: "mailto:logan@emporom.org" },
      { label: "Wellington · NZ", href: "#contact" },
      { label: "Mon — Fri · 9 – 6 NZT", href: "#contact" },
    ],
  },
];

const FooterRedesign = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="r-foot" aria-label="Site footer">
      <div className="r-foot-glow" aria-hidden />
      <div className="r-foot-inner">
        <div className="r-foot-top">
          <div className="r-foot-brand">
            <Link to="/" className="r-foot-wordmark">
              EMPOROM&nbsp;MEDIA<span className="r-foot-period">.</span>
            </Link>
            <p className="r-foot-tag">
              Performance marketing for trades, real estate and retail operators across Aotearoa.
            </p>
            <div className="r-foot-group">
              <span className="r-foot-group-label">EMPORA GROUP</span>
              <span className="r-foot-group-pipe" aria-hidden />
              <span className="r-foot-group-arms">
                <span>EMPOROM</span>
                <span className="r-foot-group-dot" aria-hidden />
                <span>H²</span>
                <span className="r-foot-group-dot" aria-hidden />
                <span>INTELLIGENCE</span>
              </span>
            </div>
          </div>

          <nav className="r-foot-cols" aria-label="Footer navigation">
            {COLUMNS.map((col) => (
              <div key={col.title} className="r-foot-col">
                <h3 className="r-foot-col-title">{col.title}</h3>
                <ul className="r-foot-col-list" role="list">
                  {col.links.map((l) => {
                    const isInternal = l.href.startsWith("/") && !l.href.endsWith(".html");
                    return (
                      <li key={l.label}>
                        {isInternal ? (
                          <Link to={l.href} className="r-foot-link">{l.label}</Link>
                        ) : (
                          <a href={l.href} className="r-foot-link">{l.label}</a>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="r-foot-rule" aria-hidden />

        <div className="r-foot-bottom">
          <span className="r-foot-copy">
            © {year} Emporom Media. All rights reserved.
          </span>
          <span className="r-foot-built">
            Built in Wellington <span className="r-foot-dot" aria-hidden /> Aotearoa NZ
          </span>
          <span className="r-foot-version">№ 001 / 2026 / V4</span>
        </div>
      </div>

      <style>{`
        .r-foot {
          --foot-bg: #0f0f0f;
          --foot-text: #f1ede5;
          --foot-muted: rgba(241, 237, 229, 0.5);
          --foot-line: rgba(241, 237, 229, 0.1);
          position: relative;
          background: var(--foot-bg);
          color: var(--foot-text);
          padding: clamp(72px, 10vh, 112px) 4vw clamp(32px, 5vh, 56px);
          isolation: isolate;
          overflow: hidden;
        }
        .r-foot-glow {
          position: absolute;
          z-index: 0;
          pointer-events: none;
          width: 65vmax;
          height: 65vmax;
          top: -28vmax;
          left: 50%;
          margin-left: -32.5vmax;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(237,94,28,0.22), rgba(237,94,28,0) 60%);
          filter: blur(100px);
          animation: r-foot-drift 38s ease-in-out infinite;
        }
        @keyframes r-foot-drift {
          0%, 100% { transform: translate(0,0); }
          50%      { transform: translate(8vmax, 6vmax); }
        }
        @media (prefers-reduced-motion: reduce) {
          .r-foot-glow { animation: none; }
        }

        .r-foot-inner {
          position: relative;
          z-index: 1;
          max-width: 1280px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: clamp(40px, 6vh, 64px);
        }

        /* === TOP === */
        .r-foot-top {
          display: grid;
          grid-template-columns: 1.2fr 2fr;
          gap: clamp(40px, 6vw, 96px);
          align-items: start;
        }

        .r-foot-brand {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .r-foot-wordmark {
          font-family: var(--font-body);
          font-weight: 600;
          letter-spacing: 0.18em;
          font-size: 13px;
          text-decoration: none;
          color: var(--foot-text);
          line-height: 1;
          white-space: nowrap;
        }
        .r-foot-period { color: var(--or); }
        .r-foot-tag {
          font-family: var(--font-body);
          font-weight: 400;
          font-size: 14px;
          line-height: 1.55;
          color: var(--foot-muted);
          max-width: 320px;
          margin: 0;
        }
        .r-foot-group {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding-top: 16px;
          border-top: 1px solid var(--foot-line);
          font-family: var(--font-body);
          font-weight: 500;
          font-size: 10px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          flex-wrap: wrap;
        }
        .r-foot-group-label { color: var(--or); }
        .r-foot-group-pipe {
          display: inline-block;
          width: 1px; height: 10px;
          background: var(--foot-line);
        }
        .r-foot-group-arms {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: var(--foot-text);
        }
        .r-foot-group-dot {
          width: 3px; height: 3px;
          border-radius: 999px;
          background: var(--foot-muted);
          display: inline-block;
        }

        /* === COLUMNS === */
        .r-foot-cols {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        .r-foot-col {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .r-foot-col-title {
          font-family: var(--font-body);
          font-weight: 600;
          font-size: 11px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--or);
          margin: 0;
        }
        .r-foot-col-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .r-foot-link {
          font-family: var(--font-body);
          font-weight: 400;
          font-size: 13.5px;
          color: var(--foot-text);
          opacity: 0.82;
          text-decoration: none;
          transition: opacity 200ms ease, color 200ms ease, padding-left 200ms ease;
          display: inline-block;
        }
        .r-foot-link:hover {
          color: var(--or);
          opacity: 1;
          padding-left: 4px;
        }

        .r-foot-rule {
          height: 1px;
          background: var(--foot-line);
        }

        /* === BOTTOM === */
        .r-foot-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
          font-family: var(--font-body);
          font-weight: 500;
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--foot-muted);
        }
        .r-foot-dot {
          display: inline-block;
          width: 4px; height: 4px;
          border-radius: 999px;
          background: var(--or);
          margin: 0 8px;
          vertical-align: middle;
        }
        .r-foot-version {
          font-variant-numeric: tabular-nums;
          letter-spacing: 0.18em;
        }

        @media (max-width: 980px) {
          .r-foot-top { grid-template-columns: 1fr; }
          .r-foot-cols { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .r-foot { padding-left: 6vw; padding-right: 6vw; }
          .r-foot-bottom { justify-content: flex-start; }
        }
      `}</style>
    </footer>
  );
};

export default FooterRedesign;
