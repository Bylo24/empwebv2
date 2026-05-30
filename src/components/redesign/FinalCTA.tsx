import { Link } from "react-router-dom";

const FinalCTA = () => {
  return (
    <section className="r-cta" id="contact">
      <div className="r-cta-grid-bg" aria-hidden />
      <div className="r-cta-glow" aria-hidden />

      <div className="r-cta-inner">
        <div className="r-cta-eyebrow">
          <span className="r-cta-chapter">CHAPTER 10</span>
          <span className="r-cta-dash" aria-hidden />
          <span className="r-cta-label">START HERE</span>
        </div>

        <h2 className="r-cta-title">
          <span className="r-cta-line">Let&rsquo;s run the</span>
          <span className="r-cta-line r-cta-line-or">numbers.</span>
        </h2>

        <p className="r-cta-sub">
          Thirty-minute call. No pitch. We&rsquo;ll tell you straight whether we&rsquo;re a fit
          and what we&rsquo;d run first.
        </p>

        <div className="r-cta-row">
          <Link to="/work-with-us" className="r-cta-primary">
            <span>Book a fit call</span>
            <span className="r-cta-primary-arrow" aria-hidden>→</span>
          </Link>
          <a href="mailto:logan@emporom.org" className="r-cta-secondary">
            <span>logan@emporom.org</span>
          </a>
        </div>

        <ul className="r-cta-meta" role="list">
          <li className="r-cta-meta-item">
            <span className="r-cta-meta-label">RESPONSE</span>
            <span className="r-cta-meta-value">Within one business day</span>
          </li>
          <li className="r-cta-meta-item">
            <span className="r-cta-meta-label">HOURS</span>
            <span className="r-cta-meta-value">Mon — Fri · 9am – 6pm NZT</span>
          </li>
          <li className="r-cta-meta-item">
            <span className="r-cta-meta-label">FIT</span>
            <span className="r-cta-meta-value">NZ operators · trades · retail · real estate</span>
          </li>
        </ul>
      </div>

      <div className="r-cta-stamp" aria-hidden>№ 010 · 2026</div>

      <style>{`
        .r-cta {
          --cta-bg: #131313;
          --cta-text: #f1ede5;
          --cta-muted: rgba(241, 237, 229, 0.62);
          --cta-line: rgba(241, 237, 229, 0.13);
          position: relative;
          background: var(--cta-bg);
          color: var(--cta-text);
          padding: clamp(112px, 18vh, 200px) 4vw clamp(96px, 14vh, 160px);
          overflow: hidden;
          isolation: isolate;
        }
        .r-cta-grid-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          background-image:
            linear-gradient(rgba(241,237,229,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(241,237,229,0.04) 1px, transparent 1px);
          background-size: 104px 104px;
          opacity: 0.55;
          mask-image: radial-gradient(ellipse 80% 70% at 50% 30%, black 30%, transparent 85%);
        }
        .r-cta-glow {
          position: absolute;
          z-index: 0;
          pointer-events: none;
          width: 70vmax; height: 70vmax;
          top: -20vmax; left: 50%;
          margin-left: -35vmax;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(237,94,28,0.28), rgba(237,94,28,0) 60%);
          filter: blur(100px);
          animation: r-cta-pulse 18s ease-in-out infinite;
        }
        @keyframes r-cta-pulse {
          0%, 100% { transform: scale(1) translateY(0); opacity: 1; }
          50%      { transform: scale(1.06) translateY(2vmax); opacity: 0.85; }
        }

        .r-cta-inner {
          position: relative;
          z-index: 1;
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: clamp(20px, 3vh, 32px);
        }

        .r-cta-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 16px;
          font-family: var(--font-body);
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          font-size: 11px;
        }
        .r-cta-chapter { color: var(--or); }
        .r-cta-dash {
          display: inline-block;
          width: 26px; height: 1px;
          background: var(--cta-line);
        }
        .r-cta-label { color: var(--cta-muted); }

        .r-cta-title {
          margin: 0;
          font-family: var(--font-display);
          font-weight: 800;
          letter-spacing: -0.03em;
          line-height: 0.95;
          font-size: clamp(56px, 9vw, 152px);
          display: flex;
          flex-direction: column;
          gap: 4px;
          color: var(--cta-text);
        }
        .r-cta-line { display: block; }
        .r-cta-line-or {
          font-style: italic;
          color: var(--or);
          font-weight: 500;
        }

        .r-cta-sub {
          font-family: var(--font-body);
          font-weight: 400;
          font-size: clamp(16px, 1.3vw, 19px);
          line-height: 1.55;
          color: var(--cta-muted);
          max-width: 580px;
          margin: 4px 0 0;
        }

        .r-cta-row {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 28px;
          margin-top: 18px;
        }
        .r-cta-primary {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 20px 32px;
          background: var(--or);
          color: var(--cream);
          font-family: var(--font-body);
          font-weight: 600;
          font-size: 15px;
          text-decoration: none;
          border-radius: 6px;
          letter-spacing: 0.01em;
          transition: opacity 220ms ease, transform 200ms ease, gap 220ms ease;
          line-height: 1;
        }
        .r-cta-primary:hover {
          opacity: 0.92;
          transform: translateY(-2px);
          gap: 18px;
        }
        .r-cta-primary-arrow { transition: transform 220ms ease; }
        .r-cta-primary:hover .r-cta-primary-arrow { transform: translateX(2px); }

        .r-cta-secondary {
          font-family: var(--font-body);
          font-weight: 500;
          font-size: 15px;
          color: var(--cta-text);
          text-decoration: none;
          border-bottom: 1px solid rgba(241, 237, 229, 0.24);
          padding-bottom: 5px;
          transition: color 220ms ease, border-color 220ms ease;
          line-height: 1;
        }
        .r-cta-secondary:hover { color: var(--or); border-color: var(--or); }

        .r-cta-meta {
          list-style: none;
          padding: 0;
          margin: clamp(40px, 6vh, 64px) 0 0;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
          width: 100%;
          max-width: 760px;
          border-top: 1px solid var(--cta-line);
        }
        .r-cta-meta-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          padding: 22px 14px 0;
          border-right: 1px solid var(--cta-line);
        }
        .r-cta-meta-item:last-child { border-right: 0; }
        .r-cta-meta-label {
          font-family: var(--font-body);
          font-weight: 500;
          font-size: 10px;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: var(--or);
        }
        .r-cta-meta-value {
          font-family: var(--font-body);
          font-weight: 500;
          font-size: 13px;
          color: var(--cta-muted);
          text-align: center;
          line-height: 1.45;
        }

        .r-cta-stamp {
          position: absolute;
          bottom: 18px;
          right: 4vw;
          font-family: var(--font-body);
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          font-size: 10px;
          color: var(--cta-muted);
          z-index: 2;
        }

        @media (max-width: 720px) {
          .r-cta { padding-left: 6vw; padding-right: 6vw; }
          .r-cta-meta { grid-template-columns: 1fr; }
          .r-cta-meta-item {
            border-right: 0;
            border-bottom: 1px solid var(--cta-line);
            padding-bottom: 18px;
          }
          .r-cta-meta-item:last-child { border-bottom: 0; }
          .r-cta-row { flex-direction: column; gap: 18px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .r-cta-glow { animation: none; }
        }
      `}</style>
    </section>
  );
};

export default FinalCTA;
