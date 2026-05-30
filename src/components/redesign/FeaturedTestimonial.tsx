const FeaturedTestimonial = () => {
  return (
    <section className="r-tt" id="testimonial">
      <div className="r-tt-grid-bg" aria-hidden />
      <div className="r-tt-glow" aria-hidden />

      <div className="r-tt-inner">
        <header className="r-tt-head">
          <div className="r-tt-eyebrow">
            <span className="r-tt-chapter">CHAPTER 06</span>
            <span className="r-tt-dash" aria-hidden />
            <span className="r-tt-label">IN THEIR WORDS</span>
          </div>
        </header>

        <figure className="r-tt-quote-fig">
          <div className="r-tt-mark" aria-hidden>“</div>

          <blockquote className="r-tt-quote">
            <p className="r-tt-quote-emph">
              Within approximately a week, quality leads started coming through —
              supported by Logan&rsquo;s ongoing communication, strategic input, and
              continual optimisation.
            </p>

            <p className="r-tt-quote-body">
              I had the pleasure of working with Emporom and Logan after experiencing
              a very disappointing outcome with a large Auckland-based Google AdWords
              lead generation company.
            </p>
          </blockquote>

          <div className="r-tt-rating" aria-label="Five out of five stars">
            <svg viewBox="0 0 100 16" className="r-tt-stars" aria-hidden>
              {[0, 1, 2, 3, 4].map((i) => (
                <polygon
                  key={i}
                  className="r-tt-star"
                  transform={`translate(${i * 20}, 0)`}
                  points="8,0 10,5.5 16,5.5 11,9 13,15 8,11.5 3,15 5,9 0,5.5 6,5.5"
                />
              ))}
            </svg>
            <span className="r-tt-rating-text">VERIFIED · 2026-05-22</span>
          </div>

          <figcaption className="r-tt-attr">
            <div className="r-tt-attr-l">
              <span className="r-tt-attr-no">№ 001</span>
              <div className="r-tt-attr-name-wrap">
                <span className="r-tt-attr-name">Brent Mitchell</span>
                <span className="r-tt-attr-role">Real Estate Agent · Tall Poppy Kāpiti</span>
              </div>
            </div>
            <div className="r-tt-attr-r">
              <div className="r-tt-attr-meta">
                <span className="r-tt-attr-meta-label">CLIENT SINCE</span>
                <span className="r-tt-attr-meta-value">EARLY 2026</span>
              </div>
              <div className="r-tt-attr-meta">
                <span className="r-tt-attr-meta-label">FOCUS</span>
                <span className="r-tt-attr-meta-value">100 SMALL NETS · KĀPITI</span>
              </div>
            </div>
          </figcaption>
        </figure>

        <div className="r-tt-context">
          <span className="r-tt-context-dot" aria-hidden />
          <span>
            Brent moved his lead-gen to Emporom in early 2026 after a disappointing run
            with a large Auckland-based Google Ads outfit. We rebuilt the campaign stack
            and the tracking from scratch.
          </span>
        </div>
      </div>

      <div className="r-tt-stamp" aria-hidden>№ 006 · 2026</div>

      <style>{`
        .r-tt {
          --tt-bg: #131313;
          --tt-text: #f1ede5;
          --tt-muted: rgba(241, 237, 229, 0.6);
          --tt-line: rgba(241, 237, 229, 0.13);
          --tt-line-strong: rgba(241, 237, 229, 0.22);
          position: relative;
          background: var(--tt-bg);
          color: var(--tt-text);
          padding: clamp(96px, 14vh, 168px) 4vw clamp(96px, 14vh, 160px);
          overflow: hidden;
          isolation: isolate;
        }

        .r-tt-grid-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          background-image:
            linear-gradient(rgba(241,237,229,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(241,237,229,0.03) 1px, transparent 1px);
          background-size: 96px 96px;
          opacity: 0.7;
          mask-image: radial-gradient(ellipse 100% 80% at 50% 40%, black 25%, transparent 80%);
        }
        .r-tt-glow {
          position: absolute;
          z-index: 0;
          pointer-events: none;
          width: 75vmax; height: 75vmax;
          top: 50%; left: 50%;
          margin-top: -37.5vmax; margin-left: -37.5vmax;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(237,94,28,0.24), rgba(237,94,28,0) 58%);
          filter: blur(100px);
          animation: r-tt-pulse 26s ease-in-out infinite;
        }
        @keyframes r-tt-pulse {
          0%, 100% { transform: translate(0,0) scale(1); opacity: 1; }
          50%      { transform: translate(-4vmax, 3vmax) scale(1.08); opacity: 0.84; }
        }

        .r-tt-inner {
          position: relative;
          z-index: 1;
          max-width: 1080px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: clamp(40px, 6vh, 64px);
        }

        /* === HEAD === */
        .r-tt-head {
          display: flex;
          align-items: baseline;
        }
        .r-tt-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 16px;
          font-family: var(--font-body);
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          font-size: 11px;
        }
        .r-tt-chapter { color: var(--or); }
        .r-tt-dash {
          display: inline-block;
          width: 26px; height: 1px;
          background: var(--tt-line);
        }
        .r-tt-label { color: var(--tt-muted); }

        /* === QUOTE === */
        .r-tt-quote-fig {
          position: relative;
          margin: 0;
          padding: clamp(24px, 4vh, 40px) 0;
          display: flex;
          flex-direction: column;
          gap: clamp(28px, 4vh, 44px);
        }
        .r-tt-mark {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: clamp(120px, 14vw, 200px);
          line-height: 0.8;
          color: var(--or);
          height: clamp(64px, 8vw, 110px);
          margin-bottom: -16px;
          user-select: none;
        }

        .r-tt-quote {
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: clamp(20px, 3vh, 32px);
        }
        .r-tt-quote-emph {
          font-family: var(--font-display);
          font-style: italic;
          font-weight: 500;
          font-size: clamp(28px, 3.6vw, 52px);
          line-height: 1.18;
          letter-spacing: -0.015em;
          color: var(--tt-text);
          margin: 0;
          max-width: 920px;
        }
        .r-tt-quote-body {
          font-family: var(--font-body);
          font-weight: 400;
          font-size: clamp(16px, 1.3vw, 18px);
          line-height: 1.6;
          color: var(--tt-muted);
          margin: 0;
          max-width: 720px;
        }

        /* === RATING === */
        .r-tt-rating {
          display: inline-flex;
          align-items: center;
          gap: 16px;
        }
        .r-tt-stars {
          width: 108px;
          height: 18px;
          display: block;
        }
        .r-tt-star { fill: var(--or); }
        .r-tt-rating-text {
          font-family: var(--font-body);
          font-weight: 500;
          font-size: 10px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--tt-muted);
        }

        /* === ATTRIBUTION === */
        .r-tt-attr {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: clamp(24px, 4vw, 48px);
          padding-top: clamp(24px, 4vh, 36px);
          border-top: 1px solid var(--tt-line);
          align-items: start;
        }
        .r-tt-attr-l {
          display: flex;
          align-items: baseline;
          gap: 18px;
        }
        .r-tt-attr-no {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: clamp(20px, 1.8vw, 26px);
          color: var(--or);
          letter-spacing: -0.01em;
          line-height: 1;
        }
        .r-tt-attr-name-wrap {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .r-tt-attr-name {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: clamp(20px, 1.8vw, 26px);
          letter-spacing: -0.01em;
          line-height: 1.1;
          color: var(--tt-text);
        }
        .r-tt-attr-role {
          font-family: var(--font-body);
          font-weight: 400;
          font-size: 13px;
          color: var(--tt-muted);
          letter-spacing: 0.04em;
          line-height: 1.4;
        }
        .r-tt-attr-r {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }
        .r-tt-attr-meta {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .r-tt-attr-meta-label {
          font-family: var(--font-body);
          font-weight: 500;
          font-size: 9.5px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--or);
        }
        .r-tt-attr-meta-value {
          font-family: var(--font-body);
          font-weight: 500;
          font-size: 12px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--tt-text);
        }

        /* === CONTEXT === */
        .r-tt-context {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding-top: clamp(20px, 3vh, 28px);
          border-top: 1px dashed var(--tt-line);
          font-family: var(--font-body);
          font-weight: 400;
          font-size: 13.5px;
          line-height: 1.6;
          color: var(--tt-muted);
        }
        .r-tt-context-dot {
          width: 5px; height: 5px;
          border-radius: 999px;
          background: var(--or);
          display: inline-block;
          flex-shrink: 0;
          margin-top: 9px;
        }

        .r-tt-stamp {
          position: absolute;
          bottom: 18px;
          right: 4vw;
          font-family: var(--font-body);
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          font-size: 10px;
          color: var(--tt-muted);
          z-index: 2;
        }

        @media (max-width: 880px) {
          .r-tt-attr { grid-template-columns: 1fr; gap: 20px; }
          .r-tt-attr-r { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 640px) {
          .r-tt { padding-left: 6vw; padding-right: 6vw; }
          .r-tt-attr-l { flex-direction: column; gap: 8px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .r-tt-glow { animation: none; }
        }
      `}</style>
    </section>
  );
};

export default FeaturedTestimonial;
