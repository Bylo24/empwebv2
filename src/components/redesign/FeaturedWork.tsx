import { Link } from "react-router-dom";

type CaseRow = {
  no: string;
  name: string;
  vertical: string;
  region: string;
  services: string[];
  blurb: string;
};

const CASES: CaseRow[] = [
  {
    no: "01",
    name: "Fantail Services",
    vertical: "HVAC · Trades",
    region: "Wellington",
    services: ["Google Ads", "Landing pages", "Call tracking"],
    blurb:
      "Built the conversion stack from scratch — paid search, dedicated landing pages, and CallRail attribution wired through to GA4. Steady enquiry flow inside eight weeks.",
  },
  {
    no: "02",
    name: "Carnivore Crate",
    vertical: "Shopify · DTC retail",
    region: "Aotearoa",
    services: ["Meta Ads", "Creative direction", "CRO"],
    blurb:
      "Meta paid social with A/B-tested Story and Reel creative. Mother's Day campaigns ran lean — every dollar tied back to a SKU and a revenue line.",
  },
  {
    no: "03",
    name: "Ultra Fast Pest Control",
    vertical: "Trades · Service",
    region: "Wellington",
    services: ["Google Ads", "Phone tracking", "Site audit"],
    blurb:
      "Inherited an account bleeding spend after a botched site migration. Diagnosed broken phone tracking, rebuilt the conversion path, brought ROAS back inside one cycle.",
  },
];

const FeaturedWork = () => {
  return (
    <section className="r-fw" id="work">
      <div className="r-fw-glow" aria-hidden />
      <div className="r-fw-grid-bg" aria-hidden />

      <div className="r-fw-inner">
        <header className="r-fw-head">
          <div className="r-fw-eyebrow">
            <span className="r-fw-chapter">CHAPTER 04</span>
            <span className="r-fw-dash" aria-hidden />
            <span className="r-fw-label">FEATURED WORK</span>
          </div>

          <h2 className="r-fw-title">
            <span className="r-fw-line">Three industries.</span>
            <span className="r-fw-line">
              One <em>playbook</em>.
            </span>
          </h2>

          <p className="r-fw-sub">
            Selected client work from the current roster. Each project follows the same
            four-pillar method — adapted to the channel, the audience and the unit economics.
          </p>
        </header>

        <ol className="r-fw-list" role="list">
          {CASES.map((c, i) => (
            <li
              key={c.no}
              className="r-fw-row"
              style={{ animationDelay: `${i * 90}ms` }}
            >
              <div className="r-fw-row-no" aria-hidden>{c.no}</div>

              <div className="r-fw-row-main">
                <div className="r-fw-row-meta">
                  <span className="r-fw-vertical">{c.vertical}</span>
                  <span className="r-fw-meta-dot" aria-hidden />
                  <span className="r-fw-region">{c.region}</span>
                </div>

                <h3 className="r-fw-name">{c.name}</h3>

                <p className="r-fw-blurb">{c.blurb}</p>

                <ul className="r-fw-tags" role="list">
                  {c.services.map((s) => (
                    <li key={s} className="r-fw-tag">{s}</li>
                  ))}
                </ul>
              </div>

              <div className="r-fw-row-cta">
                <span className="r-fw-cta-link">
                  Read case <span aria-hidden>→</span>
                </span>
                <span className="r-fw-cta-sub">{c.no} / 03</span>
              </div>
            </li>
          ))}
        </ol>

        <footer className="r-fw-foot">
          <p className="r-fw-foot-copy">
            Twelve more active and recent projects across NZ — retail, trades, real estate,
            and naturopathy.
          </p>
          <Link to="/work-with-us" className="r-fw-foot-cta">
            Brief us on your project <span aria-hidden>→</span>
          </Link>
        </footer>
      </div>

      <div className="r-fw-stamp" aria-hidden>№ 004 · 2026</div>

      <style>{`
        .r-fw {
          --fw-bg: #131313;
          --fw-bg-2: #1c1c1c;
          --fw-text: #f1ede5;
          --fw-muted: rgba(241, 237, 229, 0.6);
          --fw-line: rgba(241, 237, 229, 0.13);
          --fw-line-strong: rgba(241, 237, 229, 0.22);
          position: relative;
          background: var(--fw-bg);
          color: var(--fw-text);
          padding: clamp(96px, 14vh, 160px) 4vw clamp(96px, 14vh, 160px);
          overflow: hidden;
          isolation: isolate;
        }

        .r-fw-glow {
          position: absolute;
          z-index: 0;
          pointer-events: none;
          width: 65vmax; height: 65vmax;
          bottom: -18vmax; left: -16vmax;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(237,94,28,0.24), rgba(237,94,28,0) 62%);
          filter: blur(90px);
          animation: r-fw-drift 38s ease-in-out infinite;
        }
        @keyframes r-fw-drift {
          0%, 100% { transform: translate(0,0); }
          50% { transform: translate(12vmax, -10vmax); }
        }
        .r-fw-grid-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          background-image:
            linear-gradient(rgba(241,237,229,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(241,237,229,0.035) 1px, transparent 1px);
          background-size: 96px 96px;
          opacity: 0.7;
          mask-image: radial-gradient(ellipse 90% 70% at 50% 50%, black 30%, transparent 85%);
        }

        .r-fw-inner {
          position: relative;
          z-index: 1;
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          gap: clamp(48px, 7vh, 88px);
        }

        /* === HEAD === */
        .r-fw-head {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: clamp(32px, 6vw, 96px);
          align-items: end;
        }
        .r-fw-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 16px;
          font-family: var(--font-body);
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          font-size: 11px;
        }
        .r-fw-chapter { color: var(--or); }
        .r-fw-dash {
          display: inline-block;
          width: 26px; height: 1px;
          background: var(--fw-line);
        }
        .r-fw-label { color: var(--fw-muted); }

        .r-fw-title {
          margin: 0;
          font-family: var(--font-display);
          font-weight: 800;
          letter-spacing: -0.025em;
          line-height: 1.0;
          font-size: clamp(36px, 5.2vw, 76px);
          display: flex;
          flex-direction: column;
          gap: 8px;
          color: var(--fw-text);
        }
        .r-fw-line { display: block; }
        .r-fw-line em {
          font-style: italic;
          color: var(--or);
          font-weight: 500;
        }
        .r-fw-sub {
          grid-column: 1 / -1;
          font-family: var(--font-body);
          font-weight: 400;
          font-size: clamp(15px, 1.1vw, 17px);
          line-height: 1.55;
          color: var(--fw-muted);
          max-width: 620px;
          margin: 0;
        }

        /* === CASE LIST === */
        .r-fw-list {
          list-style: none;
          padding: 0;
          margin: 0;
          border-top: 1px solid var(--fw-line);
        }
        .r-fw-row {
          display: grid;
          grid-template-columns: 88px 1fr 200px;
          gap: clamp(20px, 4vw, 48px);
          padding: clamp(28px, 4vh, 44px) clamp(8px, 2vw, 24px);
          border-bottom: 1px solid var(--fw-line);
          align-items: start;
          transition: background 280ms ease, padding-left 280ms ease;
          position: relative;
        }
        .r-fw-row::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 0;
          background: var(--or);
          transition: width 280ms cubic-bezier(0.2,0.6,0.2,1);
        }
        .r-fw-row:hover { background: rgba(241,237,229,0.025); }
        .r-fw-row:hover::before { width: 3px; }
        .r-fw-row:hover .r-fw-cta-link { color: var(--or); border-color: var(--or); }
        .r-fw-row:hover .r-fw-row-no { color: var(--or); }

        .r-fw-row-no {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: clamp(48px, 5vw, 72px);
          color: var(--fw-text);
          letter-spacing: -0.04em;
          line-height: 0.9;
          opacity: 0.92;
          transition: color 280ms ease;
        }
        .r-fw-row-main { display: flex; flex-direction: column; gap: 14px; min-width: 0; }
        .r-fw-row-meta {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          font-family: var(--font-body);
          font-weight: 500;
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--fw-muted);
        }
        .r-fw-vertical { color: var(--or); }
        .r-fw-meta-dot {
          width: 4px; height: 4px; border-radius: 999px;
          background: var(--fw-muted);
          display: inline-block;
        }
        .r-fw-name {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: clamp(26px, 2.6vw, 38px);
          letter-spacing: -0.015em;
          line-height: 1.05;
          color: var(--fw-text);
          margin: 0;
        }
        .r-fw-blurb {
          font-family: var(--font-body);
          font-weight: 400;
          font-size: clamp(14.5px, 1vw, 16px);
          line-height: 1.55;
          color: var(--fw-muted);
          max-width: 620px;
          margin: 0;
        }
        .r-fw-tags {
          list-style: none;
          padding: 0;
          margin: 6px 0 0;
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .r-fw-tag {
          font-family: var(--font-body);
          font-weight: 500;
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--fw-text);
          padding: 6px 12px;
          border: 1px solid var(--fw-line-strong);
          border-radius: 2px;
        }

        .r-fw-row-cta {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 12px;
          padding-top: 6px;
        }
        .r-fw-cta-link {
          font-family: var(--font-body);
          font-weight: 500;
          font-size: 13px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--fw-text);
          border-bottom: 1px solid var(--fw-line-strong);
          padding-bottom: 4px;
          transition: color 220ms ease, border-color 220ms ease;
          cursor: pointer;
        }
        .r-fw-cta-sub {
          font-family: var(--font-body);
          font-weight: 500;
          font-size: 10px;
          letter-spacing: 0.22em;
          color: var(--fw-muted);
          text-transform: uppercase;
        }

        /* === FOOT === */
        .r-fw-foot {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          padding-top: clamp(28px, 4vh, 44px);
          border-top: 1px solid var(--fw-line);
          flex-wrap: wrap;
        }
        .r-fw-foot-copy {
          font-family: var(--font-body);
          font-weight: 400;
          font-size: 14px;
          line-height: 1.55;
          color: var(--fw-muted);
          margin: 0;
          max-width: 540px;
        }
        .r-fw-foot-cta {
          font-family: var(--font-body);
          font-weight: 600;
          font-size: 13px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--fw-text);
          text-decoration: none;
          padding: 14px 24px;
          border: 1px solid var(--fw-line-strong);
          border-radius: 4px;
          transition: background 220ms ease, color 220ms ease, border-color 220ms ease;
          line-height: 1;
        }
        .r-fw-foot-cta:hover {
          background: var(--or);
          color: var(--cream);
          border-color: var(--or);
        }

        .r-fw-stamp {
          position: absolute;
          bottom: 18px;
          right: 4vw;
          font-family: var(--font-body);
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          font-size: 10px;
          color: var(--fw-muted);
          z-index: 2;
        }

        @media (max-width: 980px) {
          .r-fw-head { grid-template-columns: 1fr; gap: 20px; }
          .r-fw-row {
            grid-template-columns: 64px 1fr;
            gap: 18px;
          }
          .r-fw-row-cta {
            grid-column: 1 / -1;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding-top: 4px;
            padding-left: 82px;
          }
          .r-fw-row-no { font-size: 44px; }
          .r-fw-name { font-size: clamp(22px, 5vw, 30px); }
        }
        @media (max-width: 640px) {
          .r-fw { padding-left: 6vw; padding-right: 6vw; }
          .r-fw-row { padding: 24px 0; }
          .r-fw-row-cta { padding-left: 0; flex-wrap: wrap; gap: 12px; }
          .r-fw-foot { flex-direction: column; align-items: flex-start; }
        }
        @media (prefers-reduced-motion: reduce) {
          .r-fw-glow { animation: none; }
        }
      `}</style>
    </section>
  );
};

export default FeaturedWork;
