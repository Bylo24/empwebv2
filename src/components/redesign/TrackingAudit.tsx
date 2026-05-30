import { useEffect, useRef, useState } from "react";

const V_BEFORE = 148;
const V_AFTER = 271;

const TrackingAudit = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const numRef = useRef(V_BEFORE);
  const rafRef = useRef<number>();
  const [audited, setAudited] = useState(false);
  const [num, setNum] = useState(V_BEFORE);

  // auto-reveal the "after" state once the card scrolls into view
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setAudited(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            io.unobserve(e.target);
            window.setTimeout(() => setAudited(true), 650);
          }
        });
      },
      { threshold: 0.45 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // count-up between the two figures
  useEffect(() => {
    const target = audited ? V_AFTER : V_BEFORE;
    const start = numRef.current;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      numRef.current = target;
      setNum(target);
      return;
    }
    const t0 = performance.now();
    const dur = 900;
    const tick = (t: number) => {
      const p = Math.min((t - t0) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const v = Math.round(start + (target - start) * eased);
      numRef.current = v;
      setNum(v);
      if (p < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [audited]);

  return (
    <section className="r-audit" id="tracking">
      <div className="r-audit-bg" aria-hidden />

      <div className="r-audit-inner">
        <header className="r-audit-head">
          <div className="r-audit-eyebrow">
            <span className="r-audit-chapter">CHAPTER 07</span>
            <span className="r-audit-dash" aria-hidden />
            <span className="r-audit-label">THE FASTEST WIN</span>
          </div>
          <h2 className="r-audit-title">
            <span className="r-audit-line">See what your</span>
            <span className="r-audit-line">
              tracking is <em>hiding</em>.
            </span>
          </h2>
          <p className="r-audit-sub">
            Most accounts we inherit are quietly losing conversions to broken pixels and
            untracked calls. Flip the switch. That gap is usually the fastest win in the account.
          </p>
        </header>

        <div
          ref={cardRef}
          className={`r-audit-card${audited ? " is-audited" : ""}`}
        >
          <div className="r-audit-toggle" role="tablist" aria-label="Tracking state">
            <button
              type="button"
              className={`r-audit-tg${!audited ? " on" : ""}`}
              role="tab"
              aria-selected={!audited}
              onClick={() => setAudited(false)}
            >
              Reported
            </button>
            <button
              type="button"
              className={`r-audit-tg t-after${audited ? " on" : ""}`}
              role="tab"
              aria-selected={audited}
              onClick={() => setAudited(true)}
            >
              After audit
            </button>
          </div>

          <div className="r-audit-grid">
            <div className="r-audit-chart">
              <svg viewBox="0 0 480 230" preserveAspectRatio="none" aria-hidden>
                <defs>
                  <linearGradient id="r-ag" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#ed5e1c" stopOpacity="0.24" />
                    <stop offset="1" stopColor="#ed5e1c" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <g stroke="rgba(26,26,26,0.08)" strokeWidth="1">
                  <line x1="0" y1="58" x2="480" y2="58" />
                  <line x1="0" y1="116" x2="480" y2="116" />
                  <line x1="0" y1="174" x2="480" y2="174" />
                </g>
                <path className="a-gap" d="M0 150 L80 142 L160 138 L240 128 L320 124 L400 118 L480 112 L480 188 L400 186 L320 182 L240 180 L160 176 L80 172 L0 170 Z" />
                <path className="a-fill" d="M0 150 L80 142 L160 138 L240 128 L320 124 L400 118 L480 112 L480 230 L0 230 Z" />
                <path className="a-actual" d="M0 150 L80 142 L160 138 L240 128 L320 124 L400 118 L480 112" />
                <path className="a-reported" d="M0 170 L80 172 L160 176 L240 180 L320 182 L400 186 L480 188" />
                <circle className="a-dot" cx="480" cy="112" r="5.5" fill="#ed5e1c" />
              </svg>
            </div>

            <div className="r-audit-read">
              <div className="r-audit-lead">
                {audited ? "Conversions actually happening" : "Conversions reported"}
              </div>
              <div className="r-audit-fig">{num}</div>
              <p className="r-audit-readsub">
                {audited
                  ? "What was really converting once the tracking was fixed."
                  : "What the platform credited before we touched the tracking."}
              </p>
              <span className="r-audit-recovered">
                ▲ {V_AFTER - V_BEFORE} conversions recovered
              </span>
            </div>
          </div>

          <div className="r-audit-foot">Illustrative example · real recovery depends on the account</div>
        </div>
      </div>

      <div className="r-audit-stamp" aria-hidden>№ 007 · 2026</div>

      <style>{`
        .r-audit {
          position: relative;
          background: var(--cream-soft);
          color: var(--ink);
          padding: clamp(96px, 14vh, 160px) 4vw;
          overflow: hidden;
          isolation: isolate;
        }
        .r-audit-bg {
          position: absolute;
          z-index: 0;
          pointer-events: none;
          width: 56vmax; height: 56vmax;
          bottom: -20vmax; left: -16vmax;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(237,94,28,0.08), rgba(237,94,28,0) 65%);
          filter: blur(90px);
        }
        .r-audit-inner {
          position: relative;
          z-index: 1;
          max-width: 1160px;
          margin: 0 auto;
          display: grid;
          gap: clamp(40px, 6vh, 72px);
        }
        .r-audit-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 16px;
          font-family: var(--font-body);
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          font-size: 11px;
        }
        .r-audit-chapter { color: var(--or); }
        .r-audit-dash { display: inline-block; width: 26px; height: 1px; background: var(--ink-line); }
        .r-audit-label { color: var(--ink-muted); }
        .r-audit-title {
          margin: 14px 0 0;
          font-family: var(--font-display);
          font-weight: 800;
          letter-spacing: -0.025em;
          line-height: 1.0;
          font-size: clamp(34px, 5vw, 70px);
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .r-audit-line em { font-style: italic; color: var(--or); font-weight: 500; }
        .r-audit-sub {
          margin: 20px 0 0;
          font-family: var(--font-body);
          font-size: clamp(15px, 1.1vw, 17px);
          line-height: 1.55;
          color: var(--ink-muted);
          max-width: 560px;
        }

        /* === CARD === */
        .r-audit-card {
          background: #fbf9f4;
          border: 1px solid var(--ink-line);
          border-radius: 6px;
          padding: clamp(26px, 3vw, 40px);
          box-shadow: 0 30px 70px -44px rgba(26,26,26,0.4);
        }
        .r-audit-toggle {
          display: inline-flex;
          gap: 4px;
          background: var(--cream-soft);
          border: 1px solid var(--ink-line);
          border-radius: 60px;
          padding: 5px;
          margin-bottom: 30px;
        }
        .r-audit-tg {
          border: none;
          background: none;
          cursor: pointer;
          font-family: var(--font-body);
          font-weight: 600;
          font-size: 14px;
          color: var(--ink-muted);
          padding: 10px 22px;
          border-radius: 60px;
          transition: background 280ms ease, color 280ms ease;
        }
        .r-audit-tg.on { background: var(--ink); color: var(--cream); }
        .r-audit-card.is-audited .r-audit-tg.t-after.on { background: var(--or); color: #fff; }

        .r-audit-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: clamp(28px, 4vw, 48px);
          align-items: center;
        }
        .r-audit-chart { position: relative; min-height: 230px; }
        .r-audit-chart svg { width: 100%; height: 230px; display: block; }
        .a-reported { stroke: #b9b3a6; stroke-width: 3; fill: none; stroke-dasharray: 5 6; stroke-linecap: round; }
        .a-actual {
          stroke: var(--or); stroke-width: 3.5; fill: none; stroke-linecap: round; stroke-linejoin: round;
          stroke-dasharray: 680; stroke-dashoffset: 680;
          transition: stroke-dashoffset 1.4s cubic-bezier(0.16,1,0.3,1);
        }
        .is-audited .a-actual { stroke-dashoffset: 0; }
        .a-fill { fill: url(#r-ag); opacity: 0; transition: opacity 1s ease 0.3s; }
        .is-audited .a-fill { opacity: 1; }
        .a-gap { fill: rgba(237,94,28,0.10); opacity: 0; transition: opacity 0.6s ease; }
        .is-audited .a-gap { opacity: 1; }
        .a-dot { opacity: 0; transition: opacity 0.4s ease 1.1s; }
        .is-audited .a-dot { opacity: 1; }

        .r-audit-lead {
          font-family: var(--font-body);
          font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase;
          color: var(--ink-muted);
        }
        .r-audit-fig {
          font-family: var(--font-display);
          font-weight: 800; letter-spacing: -0.04em; line-height: 1;
          font-size: clamp(48px, 6vw, 64px);
          margin: 6px 0;
          color: var(--ink);
        }
        .r-audit-readsub {
          font-family: var(--font-body);
          color: var(--ink-muted); line-height: 1.5; max-width: 300px; margin: 0;
          font-size: 14px;
        }
        .r-audit-recovered {
          margin-top: 22px;
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(237,94,28,0.12); color: #c2480f;
          font-family: var(--font-body); font-weight: 700; font-size: 14px;
          padding: 11px 18px; border-radius: 60px;
          opacity: 0; transform: translateY(8px);
          transition: opacity 0.5s ease 0.6s, transform 0.5s cubic-bezier(0.16,1,0.3,1) 0.6s;
        }
        .is-audited .r-audit-recovered { opacity: 1; transform: none; }
        .r-audit-foot {
          font-family: var(--font-body);
          font-size: 11px; letter-spacing: 0.06em; text-transform: uppercase;
          color: var(--ink-muted); margin-top: 26px;
        }
        .r-audit-stamp {
          position: absolute; bottom: 22px; right: 4vw; z-index: 1;
          font-family: var(--font-body); font-size: 11px; letter-spacing: 0.2em;
          color: var(--ink-muted);
        }
        @media (max-width: 860px) {
          .r-audit-grid { grid-template-columns: 1fr; gap: 32px; }
        }
      `}</style>
    </section>
  );
};

export default TrackingAudit;
