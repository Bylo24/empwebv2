type Stat = {
  no: string;
  unit?: string;
  label: string;
  context: string;
};

const STATS: Stat[] = [
  { no: "5", label: "Active retainers", context: "Currently running across NZ" },
  { no: "10", label: "Brands in the book", context: "Trades · retail · real estate" },
  { no: "2", label: "Founders", context: "Owner-led on every project" },
  { no: "0", label: "Subcontractors", context: "Built in-house, end to end" },
];

const StatsStrip = () => {
  return (
    <section className="r-stats" aria-label="Agency credentials">
      <div className="r-stats-glow" aria-hidden />
      <div className="r-stats-inner">
        <div className="r-stats-edge r-stats-edge-l" aria-hidden>
          <span className="r-stats-edge-dot" />
          <span className="r-stats-edge-label">EMPOROM · 2026</span>
        </div>

        <ul className="r-stats-grid" role="list">
          {STATS.map((s, i) => (
            <li key={i} className="r-stats-cell">
              <div className="r-stats-num-wrap">
                <span className="r-stats-num">{s.no}</span>
                {s.unit && <span className="r-stats-unit">{s.unit}</span>}
              </div>
              <span className="r-stats-label">{s.label}</span>
              <span className="r-stats-context">{s.context}</span>
            </li>
          ))}
        </ul>

        <div className="r-stats-edge r-stats-edge-r" aria-hidden>
          <span className="r-stats-edge-label">VERIFIED · NZ</span>
          <span className="r-stats-edge-dot" />
        </div>
      </div>

      <style>{`
        .r-stats {
          position: relative;
          background: var(--cream-soft);
          color: var(--ink);
          border-top: 1px solid var(--ink-line);
          border-bottom: 1px solid var(--ink-line);
          padding: clamp(28px, 5vh, 44px) 4vw;
          overflow: hidden;
          isolation: isolate;
        }
        .r-stats-glow {
          position: absolute;
          z-index: 0;
          pointer-events: none;
          width: 60vmax;
          height: 30vmax;
          top: 50%;
          left: 50%;
          margin-top: -15vmax;
          margin-left: -30vmax;
          border-radius: 50%;
          background: radial-gradient(ellipse, rgba(237,94,28,0.10), rgba(237,94,28,0) 65%);
          filter: blur(60px);
          animation: r-stats-drift 30s ease-in-out infinite;
        }
        @keyframes r-stats-drift {
          0%, 100% { transform: translateX(0); }
          50%      { transform: translateX(8vmax); }
        }

        .r-stats-inner {
          position: relative;
          z-index: 1;
          max-width: 1440px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: auto 1fr auto;
          gap: clamp(20px, 4vw, 64px);
          align-items: stretch;
        }

        .r-stats-edge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-body);
          font-weight: 500;
          font-size: 10px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--ink-muted);
          align-self: center;
        }
        .r-stats-edge-dot {
          width: 6px; height: 6px;
          border-radius: 999px;
          background: var(--or);
          display: inline-block;
          animation: r-stats-blink 2200ms ease-in-out infinite;
        }
        @keyframes r-stats-blink {
          0%, 100% { opacity: 1; }
          50%      { opacity: 0.35; }
        }

        .r-stats-grid {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
          border-left: 1px solid var(--ink-line);
        }
        .r-stats-cell {
          padding: 4px clamp(16px, 2.5vw, 32px);
          border-right: 1px solid var(--ink-line);
          display: flex;
          flex-direction: column;
          gap: 6px;
          align-items: flex-start;
          transition: background 220ms ease;
          position: relative;
        }
        .r-stats-cell:hover { background: rgba(237, 94, 28, 0.04); }
        .r-stats-cell:hover .r-stats-num { color: var(--or); }

        .r-stats-num-wrap {
          display: inline-flex;
          align-items: baseline;
          gap: 4px;
        }
        .r-stats-num {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: clamp(38px, 4.4vw, 64px);
          color: var(--ink);
          letter-spacing: -0.035em;
          line-height: 0.95;
          transition: color 240ms ease;
          font-variant-numeric: tabular-nums;
        }
        .r-stats-unit {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: clamp(20px, 2vw, 28px);
          color: var(--or);
          letter-spacing: -0.02em;
        }
        .r-stats-label {
          font-family: var(--font-body);
          font-weight: 600;
          font-size: 12px;
          letter-spacing: 0.04em;
          color: var(--ink);
          line-height: 1.2;
        }
        .r-stats-context {
          font-family: var(--font-body);
          font-weight: 400;
          font-size: 11px;
          letter-spacing: 0.06em;
          color: var(--ink-muted);
          text-transform: uppercase;
          line-height: 1.3;
        }

        @media (max-width: 980px) {
          .r-stats-inner {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .r-stats-edge-l, .r-stats-edge-r {
            justify-content: center;
          }
        }
        @media (max-width: 720px) {
          .r-stats { padding-left: 6vw; padding-right: 6vw; }
          .r-stats-grid {
            grid-template-columns: repeat(2, 1fr);
            border-left: 0;
          }
          .r-stats-cell {
            padding: 18px 16px;
            border-right: 1px solid var(--ink-line);
            border-bottom: 1px solid var(--ink-line);
          }
          .r-stats-cell:nth-child(2n) { border-right: 0; }
          .r-stats-cell:nth-child(n+3) { border-bottom: 0; }
        }
        @media (max-width: 420px) {
          .r-stats-num { font-size: 36px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .r-stats-edge-dot { animation: none; }
          .r-stats-glow { animation: none; }
        }
      `}</style>
    </section>
  );
};

export default StatsStrip;
