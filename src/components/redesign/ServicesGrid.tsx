import { Link } from "react-router-dom";

type ServicePillar = {
  no: string;
  name: string;
  blurb: string;
  bullets: string[];
};

const SERVICES: ServicePillar[] = [
  {
    no: "01",
    name: "Paid media",
    blurb:
      "Google, Meta and LinkedIn campaigns built to drive booked enquiries — not vanity metrics.",
    bullets: [
      "Google Search & Performance Max",
      "Meta paid social",
      "Retargeting & audiences",
      "Spend monitored weekly",
    ],
  },
  {
    no: "02",
    name: "Search & content",
    blurb:
      "On-page SEO, technical fixes, schema and content that earn ranking position over time.",
    bullets: [
      "Keyword & opportunity mapping",
      "Technical SEO audits",
      "Content briefs",
      "Schema & local SEO",
    ],
  },
  {
    no: "03",
    name: "Landing pages",
    blurb:
      "Pages built for conversion. Wireframe, copy, build, test. Every form tracked, every click attributed.",
    bullets: [
      "Conversion-led design",
      "Copy + build (Webflow / Vite)",
      "A/B testing",
      "Form & call tracking",
    ],
  },
  {
    no: "04",
    name: "Strategy & reporting",
    blurb:
      "Monthly cadence, clear attribution, real numbers. ROI you can defend to a CFO or your wife.",
    bullets: [
      "Monthly strategy call",
      "Attribution setup (GA4 + GTM)",
      "Dashboard build",
      "Quarterly review",
    ],
  },
];

const ServicesGrid = () => {
  return (
    <section className="r-svc" id="services">
      <div className="r-svc-bg" aria-hidden />

      <div className="r-svc-inner">
        <header className="r-svc-head">
          <div className="r-svc-eyebrow">
            <span className="r-svc-chapter">CHAPTER 03</span>
            <span className="r-svc-dash" aria-hidden />
            <span className="r-svc-label">WHAT WE DO</span>
          </div>

          <h2 className="r-svc-title">
            <span className="r-svc-line">Built for paid acquisition.</span>
            <span className="r-svc-line">
              Measured on <em>enquiries</em>.
            </span>
          </h2>

          <p className="r-svc-sub">
            Four pillars. One retainer. Performance + Clarity is what we sell — paid ads
            tied to attribution you can read in thirty seconds.
          </p>
        </header>

        <ol className="r-svc-grid" role="list">
          {SERVICES.map((s) => (
            <li key={s.no} className="r-svc-card">
              <div className="r-svc-card-top">
                <span className="r-svc-no">{s.no}</span>
                <span className="r-svc-meta">PILLAR / 04</span>
              </div>

              <h3 className="r-svc-name">{s.name}</h3>
              <p className="r-svc-blurb">{s.blurb}</p>

              <ul className="r-svc-bullets" role="list">
                {s.bullets.map((b) => (
                  <li key={b} className="r-svc-bullet">
                    <span className="r-svc-bullet-mark" aria-hidden />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <aside className="r-svc-retainer" aria-label="Performance + Clarity retainer">
          <div className="r-svc-retainer-l">
            <span className="r-svc-retainer-tag">FLAGSHIP OFFER</span>
            <h3 className="r-svc-retainer-title">
              Performance <em>+</em> Clarity Retainer
            </h3>
            <p className="r-svc-retainer-body">
              One monthly retainer covering paid media management, monthly strategy,
              attribution and reporting. Five active retainers in 2026. No subcontractors.
              No long contracts.
            </p>
          </div>

          <div className="r-svc-retainer-r">
            <div className="r-svc-price">
              <span className="r-svc-price-from">FROM</span>
              <span className="r-svc-price-num">$850</span>
              <span className="r-svc-price-unit">/ month NZD</span>
            </div>

            <div className="r-svc-retainer-ctas">
              <Link to="/work-with-us" className="r-svc-cta-primary">
                Book a fit call
              </Link>
              <a href="/100-small-nets.html" className="r-svc-cta-secondary">
                Real estate? See 100 Small Nets <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </aside>
      </div>

      <div className="r-svc-stamp" aria-hidden>№ 003 · 2026</div>

      <style>{`
        .r-svc {
          position: relative;
          background: var(--cream);
          color: var(--ink);
          padding: clamp(96px, 14vh, 160px) 4vw clamp(96px, 14vh, 160px);
          overflow: hidden;
          isolation: isolate;
        }
        .r-svc-bg {
          position: absolute;
          z-index: 0;
          pointer-events: none;
          width: 60vmax; height: 60vmax;
          top: -16vmax; right: -18vmax;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(237,94,28,0.10), rgba(237,94,28,0) 65%);
          filter: blur(90px);
          animation: r-svc-drift 36s ease-in-out infinite;
        }
        @keyframes r-svc-drift {
          0%, 100% { transform: translate(0,0); }
          50% { transform: translate(-12vmax, 10vmax); }
        }

        .r-svc-inner {
          position: relative;
          z-index: 1;
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          gap: clamp(48px, 7vh, 88px);
        }

        /* === HEAD === */
        .r-svc-head {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: clamp(32px, 6vw, 96px);
          align-items: end;
        }
        .r-svc-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 16px;
          font-family: var(--font-body);
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          font-size: 11px;
        }
        .r-svc-chapter { color: var(--or); }
        .r-svc-dash {
          display: inline-block;
          width: 26px; height: 1px;
          background: var(--ink-line);
        }
        .r-svc-label { color: var(--ink-muted); }

        .r-svc-title {
          margin: 0;
          font-family: var(--font-display);
          font-weight: 800;
          letter-spacing: -0.025em;
          line-height: 1.0;
          font-size: clamp(36px, 5.2vw, 76px);
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .r-svc-line { display: block; }
        .r-svc-line em {
          font-style: italic;
          color: var(--or);
          font-weight: 500;
        }
        .r-svc-sub {
          grid-column: 1 / -1;
          font-family: var(--font-body);
          font-weight: 400;
          font-size: clamp(15px, 1.1vw, 17px);
          line-height: 1.55;
          color: var(--ink-muted);
          max-width: 640px;
          margin: 0;
        }

        /* === GRID === */
        .r-svc-grid {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .r-svc-card {
          position: relative;
          border: 1px solid var(--ink-line);
          background: rgba(241, 237, 229, 0.4);
          padding: 24px 22px 26px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          transition: background 240ms ease, border-color 240ms ease, transform 240ms ease;
          border-radius: 4px;
        }
        .r-svc-card:hover {
          background: rgba(237, 94, 28, 0.04);
          border-color: rgba(237, 94, 28, 0.5);
          transform: translateY(-3px);
        }
        .r-svc-card-top {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--ink-line);
        }
        .r-svc-no {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 28px;
          color: var(--or);
          letter-spacing: -0.02em;
          line-height: 1;
        }
        .r-svc-meta {
          font-family: var(--font-body);
          font-weight: 500;
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--ink-muted);
        }
        .r-svc-name {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: clamp(18px, 1.5vw, 22px);
          letter-spacing: -0.01em;
          line-height: 1.15;
          color: var(--ink);
          margin: 0;
        }
        .r-svc-blurb {
          font-family: var(--font-body);
          font-weight: 400;
          font-size: 14px;
          line-height: 1.5;
          color: var(--ink);
          opacity: 0.82;
          margin: 0;
        }
        .r-svc-bullets {
          list-style: none;
          padding: 0;
          margin: 4px 0 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding-top: 14px;
          border-top: 1px dashed var(--ink-line);
        }
        .r-svc-bullet {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-body);
          font-weight: 500;
          font-size: 12.5px;
          letter-spacing: 0.02em;
          color: var(--ink);
          opacity: 0.78;
        }
        .r-svc-bullet-mark {
          width: 8px;
          height: 1px;
          background: var(--or);
          display: inline-block;
          flex-shrink: 0;
        }

        /* === RETAINER FLAGSHIP === */
        .r-svc-retainer {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: clamp(32px, 5vw, 72px);
          align-items: center;
          padding: clamp(36px, 5vh, 56px) clamp(28px, 4vw, 56px);
          background: var(--ink);
          color: var(--cream);
          border-radius: 6px;
          position: relative;
          overflow: hidden;
        }
        .r-svc-retainer::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 100% 0%, rgba(237,94,28,0.18), transparent 50%),
            radial-gradient(circle at 0% 100%, rgba(237,94,28,0.08), transparent 55%);
          pointer-events: none;
        }
        .r-svc-retainer-l, .r-svc-retainer-r {
          position: relative;
          z-index: 1;
        }
        .r-svc-retainer-tag {
          display: inline-block;
          font-family: var(--font-body);
          font-weight: 500;
          font-size: 10px;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: var(--or);
          margin-bottom: 14px;
        }
        .r-svc-retainer-title {
          font-family: var(--font-display);
          font-weight: 800;
          letter-spacing: -0.025em;
          line-height: 1.05;
          font-size: clamp(28px, 3.4vw, 44px);
          margin: 0 0 14px;
          color: var(--cream);
        }
        .r-svc-retainer-title em {
          font-style: italic;
          color: var(--or);
          font-weight: 500;
        }
        .r-svc-retainer-body {
          font-family: var(--font-body);
          font-weight: 400;
          font-size: 14.5px;
          line-height: 1.55;
          color: rgba(241, 237, 229, 0.72);
          max-width: 520px;
          margin: 0;
        }
        .r-svc-retainer-r {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 22px;
        }
        .r-svc-price {
          display: flex;
          align-items: baseline;
          gap: 8px;
          padding-bottom: 18px;
          border-bottom: 1px solid rgba(241, 237, 229, 0.16);
          width: 100%;
        }
        .r-svc-price-from {
          font-family: var(--font-body);
          font-weight: 500;
          font-size: 10px;
          letter-spacing: 0.22em;
          color: rgba(241, 237, 229, 0.6);
          text-transform: uppercase;
        }
        .r-svc-price-num {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: clamp(36px, 4vw, 52px);
          letter-spacing: -0.03em;
          color: var(--cream);
          line-height: 1;
        }
        .r-svc-price-unit {
          font-family: var(--font-body);
          font-weight: 500;
          font-size: 13px;
          color: rgba(241, 237, 229, 0.62);
          letter-spacing: 0.04em;
        }
        .r-svc-retainer-ctas {
          display: flex;
          flex-direction: column;
          gap: 14px;
          align-items: flex-start;
        }
        .r-svc-cta-primary {
          display: inline-flex;
          align-items: center;
          padding: 15px 26px;
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
        .r-svc-cta-primary:hover { opacity: 0.9; transform: translateY(-1px); }
        .r-svc-cta-secondary {
          font-family: var(--font-body);
          font-weight: 500;
          font-size: 13px;
          color: var(--cream);
          text-decoration: none;
          border-bottom: 1px solid rgba(241, 237, 229, 0.22);
          padding-bottom: 3px;
          transition: border-color 200ms ease, color 200ms ease;
          line-height: 1;
        }
        .r-svc-cta-secondary:hover { border-color: var(--or); color: var(--or); }

        .r-svc-stamp {
          position: absolute;
          bottom: 18px;
          right: 4vw;
          font-family: var(--font-body);
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          font-size: 10px;
          color: var(--ink-muted);
          z-index: 2;
        }

        @media (max-width: 1080px) {
          .r-svc-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 900px) {
          .r-svc-head { grid-template-columns: 1fr; gap: 24px; }
          .r-svc-retainer { grid-template-columns: 1fr; }
        }
        @media (max-width: 640px) {
          .r-svc { padding-left: 6vw; padding-right: 6vw; }
          .r-svc-grid { grid-template-columns: 1fr; gap: 16px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .r-svc-bg { animation: none; }
        }
      `}</style>
    </section>
  );
};

export default ServicesGrid;
