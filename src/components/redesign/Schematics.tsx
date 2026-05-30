import { useEffect, useState } from "react";

type SchematicDef = {
  no: string;
  title: string;
  caption: string;
  Body: () => JSX.Element;
};

/* =============== 01 — Paid acquisition funnel =============== */
const PaidFunnel = () => (
  <svg viewBox="0 0 440 360" className="r-schem-svg" aria-hidden>
    <g className="r-funnel">
      <g className="r-tier-grp r-tier-grp-1">
        <rect className="r-tier" x="40" y="36" width="360" height="50" rx="2" />
        <text x="56" y="68" className="r-lbl">IMPRESSIONS</text>
        <text x="384" y="68" className="r-lbl r-lbl-r r-mono">10,420</text>
      </g>
      <g className="r-tier-grp r-tier-grp-2">
        <rect className="r-tier" x="80" y="118" width="280" height="50" rx="2" />
        <text x="96" y="150" className="r-lbl">CLICKS</text>
        <text x="344" y="150" className="r-lbl r-lbl-r r-mono">820</text>
      </g>
      <g className="r-tier-grp r-tier-grp-3">
        <rect className="r-tier" x="130" y="200" width="180" height="50" rx="2" />
        <text x="146" y="232" className="r-lbl">LEADS</text>
        <text x="294" y="232" className="r-lbl r-lbl-r r-mono">62</text>
      </g>
      <g className="r-tier-grp r-tier-grp-4">
        <rect className="r-tier r-tier-final" x="170" y="282" width="100" height="50" rx="2" />
        <text x="186" y="314" className="r-lbl r-lbl-or">BOOKED</text>
        <text x="254" y="314" className="r-lbl r-lbl-r r-mono r-lbl-or">11</text>
      </g>
      <g className="r-conns">
        <line className="r-conn r-conn-1" x1="220" y1="86" x2="220" y2="118" />
        <polygon className="r-conn-arr r-conn-1" points="220,118 215,110 225,110" />
        <line className="r-conn r-conn-2" x1="220" y1="168" x2="220" y2="200" />
        <polygon className="r-conn-arr r-conn-2" points="220,200 215,192 225,192" />
        <line className="r-conn r-conn-3" x1="220" y1="250" x2="220" y2="282" />
        <polygon className="r-conn-arr r-conn-3" points="220,282 215,274 225,274" />
      </g>
    </g>
  </svg>
);

/* =============== 02 — SEO climb (inverted Y) =============== */
const SeoClimb = () => (
  <svg viewBox="0 0 440 360" className="r-schem-svg" aria-hidden>
    <g className="r-schem-grid">
      <line x1="70" y1="50" x2="410" y2="50" />
      <line x1="70" y1="120" x2="410" y2="120" />
      <line x1="70" y1="190" x2="410" y2="190" />
      <line x1="70" y1="260" x2="410" y2="260" />
      <line className="r-schem-axis" x1="70" y1="40" x2="70" y2="270" />
      <line className="r-schem-axis" x1="70" y1="270" x2="410" y2="270" />
    </g>
    <text x="58" y="54" className="r-lbl r-lbl-r r-mono r-lbl-or">#1</text>
    <text x="58" y="124" className="r-lbl r-lbl-r r-mono">#10</text>
    <text x="58" y="194" className="r-lbl r-lbl-r r-mono">#30</text>
    <text x="58" y="264" className="r-lbl r-lbl-r r-mono">#50</text>
    <text x="70" y="28" className="r-lbl">SEARCH POSITION (LOWER IS BETTER)</text>

    <path className="r-area" d="M 110,260 L 180,224 L 250,168 L 320,108 L 390,56 L 390,260 Z" />
    <path className="r-line-draw" d="M 110,260 L 180,224 L 250,168 L 320,108 L 390,56" fill="none" />

    <circle className="r-pt r-pt-1" cx="110" cy="260" r="4" />
    <circle className="r-pt r-pt-2" cx="180" cy="224" r="4" />
    <circle className="r-pt r-pt-3" cx="250" cy="168" r="4" />
    <circle className="r-pt r-pt-4" cx="320" cy="108" r="4" />
    <circle className="r-pt r-pt-5" cx="390" cy="56" r="5.5" />
    <circle className="r-pt-halo r-pt-5" cx="390" cy="56" r="11" />

    <text x="110" y="290" className="r-lbl r-lbl-c r-mono">MONTH 1</text>
    <text x="180" y="290" className="r-lbl r-lbl-c r-mono">M2</text>
    <text x="250" y="290" className="r-lbl r-lbl-c r-mono">M3</text>
    <text x="320" y="290" className="r-lbl r-lbl-c r-mono">M4</text>
    <text x="390" y="290" className="r-lbl r-lbl-c r-mono r-lbl-or">M5</text>
    <text x="70" y="324" className="r-lbl">DELTA — 49 POSITIONS GAINED · 5 MONTHS</text>
  </svg>
);

/* =============== 03 — Channel mix =============== */
const ChannelMix = () => {
  const rows = [
    { label: "GOOGLE ADS", pct: 45, y: 60, delay: 80 },
    { label: "META ADS", pct: 28, y: 130, delay: 200 },
    { label: "SEO & CONTENT", pct: 18, y: 200, delay: 320 },
    { label: "EMAIL & CRM", pct: 9, y: 270, delay: 440 },
  ];
  const BAR_X = 30, BAR_W = 380, BAR_H = 14;
  return (
    <svg viewBox="0 0 440 360" className="r-schem-svg" aria-hidden>
      <text x="30" y="28" className="r-lbl">CHANNEL ALLOCATION</text>
      <text x="410" y="28" className="r-lbl r-lbl-r r-mono">100%</text>
      <line className="r-schem-axis" x1="30" y1="38" x2="410" y2="38" />
      {rows.map((r, i) => (
        <g key={i} className="r-bar-row">
          <text x={BAR_X} y={r.y - 6} className="r-lbl">{r.label}</text>
          <text x={BAR_X + BAR_W} y={r.y - 6} className="r-lbl r-lbl-r r-mono">{r.pct}%</text>
          <rect className="r-bar-bg" x={BAR_X} y={r.y} width={BAR_W} height={BAR_H} rx="2" />
          <rect
            className={`r-bar r-bar-${i + 1}`}
            x={BAR_X} y={r.y} height={BAR_H} rx="2"
            style={{
              ["--bar-target" as keyof React.CSSProperties]: `${(BAR_W * r.pct) / 100}px`,
              animationDelay: `${r.delay}ms`,
            } as React.CSSProperties}
          />
        </g>
      ))}
      <line className="r-schem-axis" x1="30" y1="312" x2="410" y2="312" />
      <text x="30" y="332" className="r-lbl">FULL-FUNNEL · MEASURED MONTHLY</text>
    </svg>
  );
};

/* =============== 04 — 30-day onboarding roadmap (vertical) =============== */
const OnboardingRoadmap = () => {
  const phases = [
    { i: "W1", title: "DISCOVERY", sub: "Audit · brief · benchmarks", y: 70 },
    { i: "W2", title: "TRACKING", sub: "GA4 · GTM · CallRail", y: 140 },
    { i: "W3", title: "LAUNCH", sub: "Campaigns · landing pages", y: 210 },
    { i: "W4", title: "REPORT", sub: "Insights · strategy call", y: 280 },
  ];
  const spineX = 110;
  return (
    <svg viewBox="0 0 440 360" className="r-schem-svg" aria-hidden>
      {/* header */}
      <text x="30" y="28" className="r-lbl">30-DAY ONBOARDING</text>
      <text x="410" y="28" className="r-lbl r-lbl-r r-mono">DAYS 1 — 30</text>
      <line className="r-schem-axis" x1="30" y1="38" x2="410" y2="38" />

      {/* spine — vertical, draws top→bottom */}
      <line
        className="r-rm-spine"
        x1={spineX}
        y1={phases[0].y}
        x2={spineX}
        y2={phases[phases.length - 1].y}
      />

      {phases.map((p, k) => (
        <g key={k}>
          {/* week eyebrow on the left */}
          <g className={`r-rm-week r-rm-week-${k + 1}`}>
            <text x={spineX - 24} y={p.y + 4} className="r-lbl r-lbl-r r-mono">
              {p.i}
            </text>
          </g>

          {/* node */}
          <g className={`r-rm-node r-rm-node-${k + 1}`}>
            {k === phases.length - 1 && (
              <circle className="r-rm-halo" cx={spineX} cy={p.y} r="14" />
            )}
            <circle cx={spineX} cy={p.y} r="7" />
          </g>

          {/* title + sub on the right */}
          <g className={`r-rm-lbl r-rm-lbl-${k + 1}`}>
            <text
              x={spineX + 22}
              y={p.y - 2}
              className={`r-rm-title ${k === phases.length - 1 ? "r-lbl-or" : ""}`}
            >
              {p.title}
            </text>
            <text x={spineX + 22} y={p.y + 16} className="r-rm-sub-text">
              {p.sub}
            </text>
          </g>
        </g>
      ))}

      {/* continuation cue at bottom */}
      <g className="r-rm-cont">
        <line
          x1={spineX}
          y1={phases[phases.length - 1].y + 14}
          x2={spineX}
          y2={phases[phases.length - 1].y + 38}
          className="r-rm-cont-line"
        />
        <polygon
          points={`${spineX},${phases[phases.length - 1].y + 38} ${spineX - 4},${phases[phases.length - 1].y + 32} ${spineX + 4},${phases[phases.length - 1].y + 32}`}
          className="r-rm-cont-arr"
        />
        <text
          x={spineX + 22}
          y={phases[phases.length - 1].y + 38}
          className="r-rm-sub-text r-lbl-or"
        >
          MONTHLY CADENCE →
        </text>
      </g>

      {/* footer */}
      <line className="r-schem-axis" x1="30" y1="332" x2="410" y2="332" />
      <text x="30" y="352" className="r-lbl">SIGNED RETAINER → FIRST REPORT</text>
    </svg>
  );
};

const SCHEMATICS: SchematicDef[] = [
  { no: "01", title: "Paid acquisition funnel", caption: "From impression to booked enquiry", Body: PaidFunnel },
  { no: "02", title: "SEO ranking climb", caption: "Position 50 → 1, gained over 5 months", Body: SeoClimb },
  { no: "03", title: "Channel mix", caption: "Where the spend goes — measured monthly", Body: ChannelMix },
  { no: "04", title: "30-day onboarding", caption: "From signed retainer to first monthly report", Body: OnboardingRoadmap },
];

const Schematics = () => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIdx((i) => (i + 1) % SCHEMATICS.length);
    }, 5400);
    return () => window.clearInterval(id);
  }, []);

  const active = SCHEMATICS[idx];

  return (
    <div className="r-schem-stage" aria-label="Service schematics">
      <div className="r-schem-head">
        <span className="r-schem-no">№ {active.no} / 04</span>
        <span className="r-schem-label">SCHEMATIC</span>
      </div>

      <div className="r-schem-canvas">
        {SCHEMATICS.map((s, i) => (
          <div
            key={i}
            className="r-schem-slot"
            data-active={i === idx ? "true" : "false"}
            aria-hidden={i !== idx}
          >
            {i === idx ? <s.Body key={`b-${i}-${idx}`} /> : <s.Body />}
          </div>
        ))}
      </div>

      <div className="r-schem-foot">
        <div className="r-schem-caption">
          <span className="r-schem-title">{active.title}</span>
          <span className="r-schem-sub">{active.caption}</span>
        </div>
        <div className="r-schem-dots" role="tablist">
          {SCHEMATICS.map((_, i) => (
            <button
              key={i}
              type="button"
              className="r-schem-dot"
              data-active={i === idx ? "true" : "false"}
              onClick={() => setIdx(i)}
              aria-label={`Schematic ${SCHEMATICS[i].no}`}
              role="tab"
              aria-selected={i === idx}
            />
          ))}
        </div>
      </div>

      <style>{`
        .r-schem-stage {
          width: 100%; max-width: 540px;
          background: rgba(241, 237, 229, 0.4);
          border: 1px solid var(--ink-line);
          border-radius: 6px;
          padding: 20px 22px 18px;
          display: flex; flex-direction: column; gap: 14px;
          margin-left: auto; backdrop-filter: blur(2px);
        }
        .r-schem-head {
          display: flex; align-items: baseline; justify-content: space-between;
          padding-bottom: 12px; border-bottom: 1px solid var(--ink-line);
        }
        .r-schem-no {
          font-family: var(--font-body); font-weight: 500;
          letter-spacing: 0.16em; font-size: 10px;
          color: var(--ink-muted); font-variant-numeric: tabular-nums;
        }
        .r-schem-label {
          font-family: var(--font-body); font-weight: 500;
          letter-spacing: 0.22em; text-transform: uppercase; font-size: 10px;
          color: var(--or);
        }
        .r-schem-canvas {
          position: relative; width: 100%;
          aspect-ratio: 440 / 360; min-height: 260px;
        }
        .r-schem-slot {
          position: absolute; inset: 0;
          opacity: 0; transform: scale(0.985);
          transition: opacity 540ms ease, transform 720ms cubic-bezier(0.2,0.6,0.2,1);
          pointer-events: none;
        }
        .r-schem-slot[data-active="true"] {
          opacity: 1; transform: scale(1); pointer-events: auto;
        }
        .r-schem-svg { width: 100%; height: 100%; display: block; }

        .r-schem-grid line { stroke: var(--ink-line); stroke-width: 1; }
        .r-schem-axis { stroke: var(--ink); stroke-width: 1; opacity: 0.3; }

        .r-lbl {
          font-family: var(--font-body); font-weight: 500; font-size: 10px;
          letter-spacing: 0.14em; text-transform: uppercase;
          fill: var(--ink); opacity: 0.78;
        }
        .r-lbl-r { text-anchor: end; }
        .r-lbl-c { text-anchor: middle; }
        .r-lbl-or { fill: var(--or); opacity: 1; font-weight: 600; }
        .r-mono { font-variant-numeric: tabular-nums; letter-spacing: 0.08em; }

        .r-tier {
          fill: none; stroke: var(--ink); stroke-width: 1.5;
          stroke-dasharray: 900; stroke-dashoffset: 900;
          animation: r-draw 900ms cubic-bezier(0.2,0.6,0.2,1) forwards;
        }
        .r-tier-final { stroke: var(--or); stroke-width: 2; }
        .r-tier-grp text { opacity: 0; animation: r-fade-in 320ms ease forwards; }
        .r-tier-grp-1 .r-tier { animation-delay: 80ms; }
        .r-tier-grp-1 text { animation-delay: 400ms; }
        .r-tier-grp-2 .r-tier { animation-delay: 280ms; }
        .r-tier-grp-2 text { animation-delay: 600ms; }
        .r-tier-grp-3 .r-tier { animation-delay: 480ms; }
        .r-tier-grp-3 text { animation-delay: 800ms; }
        .r-tier-grp-4 .r-tier { animation-delay: 680ms; }
        .r-tier-grp-4 text { animation-delay: 1000ms; }
        .r-conn {
          stroke: var(--ink); stroke-width: 1; stroke-dasharray: 3 3;
          opacity: 0; animation: r-fade-in 360ms ease forwards;
        }
        .r-conn-arr { fill: var(--ink); opacity: 0; animation: r-fade-in 360ms ease forwards; }
        .r-conn.r-conn-1, .r-conn-arr.r-conn-1 { animation-delay: 320ms; }
        .r-conn.r-conn-2, .r-conn-arr.r-conn-2 { animation-delay: 520ms; }
        .r-conn.r-conn-3, .r-conn-arr.r-conn-3 { animation-delay: 720ms; }

        .r-area { fill: var(--or); opacity: 0; animation: r-fade-in-area 800ms ease 1000ms forwards; }
        @keyframes r-fade-in-area { to { opacity: 0.08; } }
        .r-line-draw {
          stroke: var(--ink); stroke-width: 2;
          stroke-dasharray: 700; stroke-dashoffset: 700;
          animation: r-draw 2000ms cubic-bezier(0.2,0.6,0.2,1) 200ms forwards;
          stroke-linecap: round; stroke-linejoin: round;
        }
        .r-pt { fill: var(--ink); opacity: 0; animation: r-fade-in 320ms ease forwards; }
        .r-pt-1 { animation-delay: 280ms; }
        .r-pt-2 { animation-delay: 620ms; }
        .r-pt-3 { animation-delay: 960ms; }
        .r-pt-4 { animation-delay: 1300ms; }
        .r-pt-5 { animation-delay: 1640ms; fill: var(--or); }
        .r-pt-halo {
          fill: var(--or); opacity: 0;
          animation: r-pulse 2000ms ease-in-out 1900ms infinite;
        }
        @keyframes r-pulse {
          0%,100% { opacity: 0; transform: scale(1); transform-origin: 390px 56px; }
          50%     { opacity: 0.18; transform: scale(1.3); transform-origin: 390px 56px; }
        }

        .r-bar-bg { fill: var(--ink); opacity: 0.06; }
        .r-bar {
          fill: var(--ink); width: 0;
          animation: r-bar-fill 900ms cubic-bezier(0.2,0.6,0.2,1) forwards;
        }
        .r-bar-4 { fill: var(--or); }
        @keyframes r-bar-fill { to { width: var(--bar-target, 0); } }

        /* === Schematic 04 — Onboarding roadmap (vertical) === */
        .r-rm-spine {
          stroke: var(--ink);
          stroke-width: 1.5;
          stroke-dasharray: 280;
          stroke-dashoffset: 280;
          animation: r-draw 1600ms cubic-bezier(0.2,0.6,0.2,1) 200ms forwards;
        }
        .r-rm-week text {
          opacity: 0;
          animation: r-fade-in 320ms ease forwards;
        }
        .r-rm-week-1 text { animation-delay: 360ms; }
        .r-rm-week-2 text { animation-delay: 660ms; }
        .r-rm-week-3 text { animation-delay: 960ms; }
        .r-rm-week-4 text { animation-delay: 1260ms; }

        .r-rm-node circle {
          fill: var(--ink);
          opacity: 0;
          animation: r-fade-in 360ms cubic-bezier(0.2,1.6,0.4,1) forwards;
        }
        .r-rm-node-1 circle { animation-delay: 420ms; }
        .r-rm-node-2 circle { animation-delay: 720ms; }
        .r-rm-node-3 circle { animation-delay: 1020ms; }
        .r-rm-node-4 circle { animation-delay: 1320ms; fill: var(--or); }
        .r-rm-halo {
          fill: var(--or);
          opacity: 0;
          animation: r-rm-pulse 2200ms ease-in-out 1700ms infinite;
          transform-origin: 110px 280px;
          transform-box: fill-box;
        }
        @keyframes r-rm-pulse {
          0%, 100% { opacity: 0; transform: scale(1); }
          50%      { opacity: 0.22; transform: scale(1.4); }
        }

        .r-rm-lbl text {
          opacity: 0;
          animation: r-fade-in 380ms ease forwards;
        }
        .r-rm-lbl-1 text { animation-delay: 480ms; }
        .r-rm-lbl-2 text { animation-delay: 780ms; }
        .r-rm-lbl-3 text { animation-delay: 1080ms; }
        .r-rm-lbl-4 text { animation-delay: 1380ms; }
        .r-rm-title {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 14px;
          letter-spacing: 0.04em;
          fill: var(--ink);
          opacity: 0.95;
        }
        .r-rm-sub-text {
          font-family: var(--font-body);
          font-weight: 500;
          font-size: 10px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          fill: var(--ink);
          opacity: 0.6;
        }
        .r-rm-sub-text.r-lbl-or { fill: var(--or); opacity: 1; }
        .r-rm-cont {
          opacity: 0;
          animation: r-fade-in 420ms ease 1500ms forwards;
        }
        .r-rm-cont-line { stroke: var(--or); stroke-width: 1.5; stroke-dasharray: 3 3; }
        .r-rm-cont-arr  { fill: var(--or); }

        @keyframes r-draw { to { stroke-dashoffset: 0; } }
        @keyframes r-fade-in { to { opacity: 1; } }

        .r-schem-foot {
          display: flex; align-items: flex-end; justify-content: space-between;
          gap: 14px; padding-top: 12px; border-top: 1px solid var(--ink-line);
        }
        .r-schem-caption { display: flex; flex-direction: column; gap: 2px; }
        .r-schem-title {
          font-family: var(--font-display); font-weight: 700;
          font-size: 14px; color: var(--ink);
          letter-spacing: -0.005em; line-height: 1.2;
        }
        .r-schem-sub {
          font-family: var(--font-body); font-weight: 400;
          font-size: 11.5px; color: var(--ink-muted); letter-spacing: 0.02em;
        }
        .r-schem-dots { display: flex; align-items: center; gap: 6px; flex-shrink: 0; }
        .r-schem-dot {
          width: 22px; height: 2px; background: var(--ink-line);
          border: 0; padding: 0; cursor: pointer;
          transition: background 240ms ease, width 240ms ease;
        }
        .r-schem-dot[data-active="true"] { background: var(--or); width: 32px; }
        .r-schem-dot:hover { background: var(--ink); opacity: 0.6; }

        @media (max-width: 980px) { .r-schem-stage { max-width: 100%; margin-left: 0; } }
        @media (max-width: 720px) { .r-schem-canvas { min-height: 220px; } .r-schem-title { font-size: 13px; } }
        @media (prefers-reduced-motion: reduce) {
          .r-loop-spin { animation: none; }
          .r-pt-halo { animation: none; }
        }
      `}</style>
    </div>
  );
};

export default Schematics;
