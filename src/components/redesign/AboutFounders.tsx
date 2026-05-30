type FounderCard = {
  no: string;
  name: string;
  role: string;
  org: string;
  period: string;
  bio: string;
  facts: { label: string; value: string }[];
};

const FOUNDERS: FounderCard[] = [
  {
    no: "01",
    name: "Logan Hempel",
    role: "Founder",
    org: "Emporom Media",
    period: "2024 — present",
    bio: "Founded Emporom Media after moving from South Africa to Porirua. Bootstrapped from scratch under working-visa restrictions. Operates the agency end-to-end — strategy, paid media, and client delivery.",
    facts: [
      { label: "BASED", value: "Porirua · Wellington" },
      { label: "ROLES", value: "Strategy · Paid · Delivery" },
      { label: "ALSO", value: "Youth Lead, YEA Aotearoa" },
    ],
  },
  {
    no: "02",
    name: "Sam Howell",
    role: "Co-founder",
    org: "H² (H Squared)",
    period: "Late 2025 — present",
    bio: "Co-founder of H² — the web and development arm of the wider Empora Group. Builds and ships the front-end side of every project Emporom puts live. Wellington-based.",
    facts: [
      { label: "BASED", value: "Wellington" },
      { label: "FOCUS", value: "Web · Build · Front-end" },
      { label: "ARM OF", value: "Empora Group" },
    ],
  },
];

const AboutFounders = () => {
  return (
    <section className="r-ab" id="about">
      <div className="r-ab-bg" aria-hidden />

      <div className="r-ab-inner">
        <header className="r-ab-head">
          <div className="r-ab-eyebrow">
            <span className="r-ab-chapter">CHAPTER 05</span>
            <span className="r-ab-dash" aria-hidden />
            <span className="r-ab-label">WHO WE ARE</span>
          </div>

          <h2 className="r-ab-title">
            <span className="r-ab-line">Built in Wellington.</span>
            <span className="r-ab-line">
              Run <em>lean</em>.
            </span>
          </h2>

          <p className="r-ab-sub">
            Emporom is the marketing arm of the Empora Group. Two founders, five active
            retainers, no subcontractors. Every campaign, page, and pixel passes through
            a founder before it ships.
          </p>
        </header>

        <ol className="r-ab-cards" role="list">
          {FOUNDERS.map((f) => (
            <li key={f.no} className="r-ab-card">
              <div className="r-ab-card-head">
                <span className="r-ab-card-no">{f.no}</span>
                <span className="r-ab-card-period">{f.period}</span>
              </div>

              <div className="r-ab-portrait" aria-hidden>
                <svg viewBox="0 0 120 120" className="r-ab-portrait-svg">
                  {/* simple monogram block — placeholder for a portrait */}
                  <rect x="2" y="2" width="116" height="116" rx="3" className="r-ab-portrait-frame" />
                  <text x="60" y="78" className="r-ab-portrait-letter" textAnchor="middle">
                    {f.name.split(" ").map((n) => n[0]).join("")}
                  </text>
                  <line x1="2" y1="98" x2="118" y2="98" className="r-ab-portrait-line" />
                </svg>
              </div>

              <h3 className="r-ab-name">{f.name}</h3>
              <p className="r-ab-role">
                <span>{f.role}</span>
                <span className="r-ab-role-sep" aria-hidden>—</span>
                <span className="r-ab-org">{f.org}</span>
              </p>

              <p className="r-ab-bio">{f.bio}</p>

              <dl className="r-ab-facts">
                {f.facts.map((fact) => (
                  <div key={fact.label} className="r-ab-fact">
                    <dt className="r-ab-fact-label">{fact.label}</dt>
                    <dd className="r-ab-fact-value">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </li>
          ))}
        </ol>

        <div className="r-ab-strap" aria-hidden>
          <span>EMPORA GROUP</span>
          <span className="r-ab-strap-dot" />
          <span>EMPOROM MEDIA · ACQUIRE</span>
          <span className="r-ab-strap-dot" />
          <span>H² · BUILD</span>
          <span className="r-ab-strap-dot" />
          <span>EMPORA INTELLIGENCE · COMPOUND</span>
        </div>
      </div>

      <div className="r-ab-stamp" aria-hidden>№ 005 · 2026</div>

      <style>{`
        .r-ab {
          position: relative;
          background: var(--cream);
          color: var(--ink);
          padding: clamp(96px, 14vh, 160px) 4vw clamp(96px, 14vh, 160px);
          overflow: hidden;
          isolation: isolate;
        }
        .r-ab-bg {
          position: absolute;
          z-index: 0;
          pointer-events: none;
          width: 60vmax; height: 60vmax;
          bottom: -16vmax; left: -18vmax;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(26,26,26,0.06), rgba(26,26,26,0) 65%);
          filter: blur(90px);
          animation: r-ab-drift 40s ease-in-out infinite;
        }
        @keyframes r-ab-drift {
          0%, 100% { transform: translate(0,0); }
          50% { transform: translate(10vmax, -8vmax); }
        }

        .r-ab-inner {
          position: relative;
          z-index: 1;
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          gap: clamp(48px, 7vh, 88px);
        }

        /* === HEAD === */
        .r-ab-head {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: clamp(32px, 6vw, 96px);
          align-items: end;
        }
        .r-ab-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 16px;
          font-family: var(--font-body);
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          font-size: 11px;
        }
        .r-ab-chapter { color: var(--or); }
        .r-ab-dash {
          display: inline-block;
          width: 26px; height: 1px;
          background: var(--ink-line);
        }
        .r-ab-label { color: var(--ink-muted); }

        .r-ab-title {
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
        .r-ab-line { display: block; }
        .r-ab-line em {
          font-style: italic;
          color: var(--or);
          font-weight: 500;
        }
        .r-ab-sub {
          grid-column: 1 / -1;
          font-family: var(--font-body);
          font-weight: 400;
          font-size: clamp(15px, 1.1vw, 17px);
          line-height: 1.55;
          color: var(--ink-muted);
          max-width: 640px;
          margin: 0;
        }

        /* === CARDS === */
        .r-ab-cards {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }
        .r-ab-card {
          position: relative;
          border: 1px solid var(--ink-line);
          background: rgba(241, 237, 229, 0.5);
          padding: 28px 28px 32px;
          display: grid;
          grid-template-columns: 96px 1fr;
          grid-template-rows: auto auto auto auto;
          column-gap: 22px;
          row-gap: 12px;
          align-items: start;
          border-radius: 4px;
          transition: border-color 240ms ease, background 240ms ease;
        }
        .r-ab-card:hover {
          border-color: rgba(237,94,28,0.4);
          background: rgba(237, 94, 28, 0.03);
        }

        .r-ab-card-head {
          grid-column: 1 / -1;
          grid-row: 1;
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          padding-bottom: 14px;
          border-bottom: 1px solid var(--ink-line);
        }
        .r-ab-card-no {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 28px;
          color: var(--or);
          letter-spacing: -0.02em;
          line-height: 1;
        }
        .r-ab-card-period {
          font-family: var(--font-body);
          font-weight: 500;
          font-size: 10px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--ink-muted);
        }

        .r-ab-portrait {
          grid-column: 1;
          grid-row: 2 / span 3;
          width: 96px;
          height: 96px;
        }
        .r-ab-portrait-svg { display: block; width: 100%; height: 100%; }
        .r-ab-portrait-frame {
          fill: var(--ink);
          stroke: var(--ink);
          stroke-width: 1;
        }
        .r-ab-portrait-letter {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 44px;
          fill: var(--cream);
          letter-spacing: -0.04em;
        }
        .r-ab-portrait-line { stroke: var(--or); stroke-width: 2; }

        .r-ab-name {
          grid-column: 2;
          grid-row: 2;
          font-family: var(--font-display);
          font-weight: 700;
          font-size: clamp(22px, 1.8vw, 28px);
          letter-spacing: -0.01em;
          line-height: 1.1;
          margin: 0;
          color: var(--ink);
        }
        .r-ab-role {
          grid-column: 2;
          grid-row: 3;
          font-family: var(--font-body);
          font-weight: 500;
          font-size: 13px;
          letter-spacing: 0.04em;
          color: var(--ink);
          opacity: 0.78;
          margin: -4px 0 0;
          display: inline-flex;
          gap: 8px;
          align-items: baseline;
          flex-wrap: wrap;
        }
        .r-ab-role-sep { color: var(--or); }
        .r-ab-org { font-weight: 600; color: var(--ink); opacity: 1; }

        .r-ab-bio {
          grid-column: 2;
          grid-row: 4;
          font-family: var(--font-body);
          font-weight: 400;
          font-size: 14.5px;
          line-height: 1.55;
          color: var(--ink);
          opacity: 0.82;
          margin: 4px 0 0;
        }

        .r-ab-facts {
          grid-column: 1 / -1;
          grid-row: 5;
          margin: 14px 0 0;
          padding-top: 16px;
          border-top: 1px dashed var(--ink-line);
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }
        .r-ab-fact { margin: 0; display: flex; flex-direction: column; gap: 4px; }
        .r-ab-fact-label {
          font-family: var(--font-body);
          font-weight: 500;
          font-size: 9.5px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--ink-muted);
        }
        .r-ab-fact-value {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 13px;
          letter-spacing: -0.005em;
          color: var(--ink);
          margin: 0;
        }

        /* === STRAP — group lineage strip === */
        .r-ab-strap {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
          padding: 18px 0;
          border-top: 1px solid var(--ink-line);
          border-bottom: 1px solid var(--ink-line);
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 12px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--ink);
          flex-wrap: wrap;
          text-align: center;
        }
        .r-ab-strap-dot {
          width: 4px; height: 4px;
          border-radius: 999px;
          background: var(--or);
          display: inline-block;
        }

        .r-ab-stamp {
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

        @media (max-width: 980px) {
          .r-ab-head { grid-template-columns: 1fr; gap: 24px; }
          .r-ab-cards { grid-template-columns: 1fr; }
        }
        @media (max-width: 640px) {
          .r-ab { padding-left: 6vw; padding-right: 6vw; }
          .r-ab-card { padding: 22px; column-gap: 16px; }
          .r-ab-portrait { width: 72px; height: 72px; }
          .r-ab-facts { grid-template-columns: 1fr 1fr; }
        }
        @media (prefers-reduced-motion: reduce) {
          .r-ab-bg { animation: none; }
        }
      `}</style>
    </section>
  );
};

export default AboutFounders;
