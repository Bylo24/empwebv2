import { useState } from "react";

type FAQItem = {
  no: string;
  q: string;
  a: string;
  meta?: string;
};

const FAQ_ITEMS: FAQItem[] = [
  {
    no: "01",
    q: "How much does it cost?",
    a: "Performance + Clarity Retainer starts at $850 NZD/month base, scaling with the channels and complexity you run. Your ad spend lives in your own Google and Meta accounts and stays yours — we never touch it or mark it up. No setup fees. No long contracts.",
    meta: "PRICING",
  },
  {
    no: "02",
    q: "How long until I see results?",
    a: "First reportable signals (live tracking, optimisations, early data) inside thirty days. Real, defensible compounding shows up around month three. Anyone promising week-one ROAS is either lying or running fake metrics.",
    meta: "TIMELINE",
  },
  {
    no: "03",
    q: "What if I'm not a fit?",
    a: "We'll say so on the thirty-minute call. If you'd be better off with a freelancer, a larger agency, or running it in-house, we'll tell you — and point you somewhere useful. We don't sell against your interest.",
    meta: "FIT",
  },
  {
    no: "04",
    q: "Do I need to bring my own ad spend?",
    a: "Yes. Your spend lives in your accounts, charged to your card, owned by you. We manage the campaigns; the budget is yours. Most clients run $1k – $10k NZD/month in spend on top of the retainer.",
    meta: "AD SPEND",
  },
  {
    no: "05",
    q: "What kind of businesses do you work with?",
    a: "Trades, retail, real estate, and service operators across Aotearoa — usually turning over $300k+ a year and serious about enquiry pipeline. We don't take on enterprise contracts or pre-revenue startups.",
    meta: "FIT",
  },
  {
    no: "06",
    q: "Can I cancel?",
    a: "Anytime. Thirty days' notice. We earn the retainer month by month — if we're not delivering, you shouldn't be paying us.",
    meta: "TERMS",
  },
];

const FAQRedesign = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="r-faq" id="faq">
      <div className="r-faq-glow r-faq-glow-a" aria-hidden />
      <div className="r-faq-glow r-faq-glow-b" aria-hidden />

      <div className="r-faq-inner">
        <header className="r-faq-head">
          <div className="r-faq-eyebrow">
            <span className="r-faq-chapter">CHAPTER 09</span>
            <span className="r-faq-dash" aria-hidden />
            <span className="r-faq-label">COMMON QUESTIONS</span>
          </div>

          <h2 className="r-faq-title">
            <span className="r-faq-line">Six questions we get</span>
            <span className="r-faq-line">
              on every <em>fit call</em>.
            </span>
          </h2>

          <p className="r-faq-sub">
            Direct answers. No marketing-speak. If you have a seventh, it's the call.
          </p>
        </header>

        <ol className="r-faq-list" role="list">
          {FAQ_ITEMS.map((item, i) => {
            const open = openIdx === i;
            return (
              <li
                key={item.no}
                className="r-faq-row"
                data-open={open ? "true" : "false"}
              >
                <button
                  type="button"
                  className="r-faq-trigger"
                  aria-expanded={open}
                  onClick={() => setOpenIdx(open ? null : i)}
                >
                  <span className="r-faq-no">{item.no}</span>
                  <span className="r-faq-q-wrap">
                    {item.meta && <span className="r-faq-meta">{item.meta}</span>}
                    <span className="r-faq-q">{item.q}</span>
                  </span>
                  <span className="r-faq-toggle" aria-hidden>
                    <span className="r-faq-toggle-bar r-faq-toggle-h" />
                    <span className="r-faq-toggle-bar r-faq-toggle-v" />
                  </span>
                </button>
                <div className="r-faq-answer">
                  <p>{item.a}</p>
                </div>
              </li>
            );
          })}
        </ol>

        <footer className="r-faq-foot">
          <p className="r-faq-foot-copy">
            Still on the fence? Book the call — it's a thirty-minute conversation, not a pitch.
          </p>
          <a href="#contact" className="r-faq-foot-cta">
            Skip to the call <span aria-hidden>→</span>
          </a>
        </footer>
      </div>

      <div className="r-faq-stamp" aria-hidden>№ 009 · 2026</div>

      <style>{`
        .r-faq {
          position: relative;
          background: var(--cream);
          color: var(--ink);
          padding: clamp(96px, 14vh, 160px) 4vw clamp(96px, 14vh, 160px);
          overflow: hidden;
          isolation: isolate;
        }
        .r-faq-glow {
          position: absolute;
          z-index: 0;
          pointer-events: none;
          border-radius: 50%;
          filter: blur(90px);
          will-change: transform;
        }
        .r-faq-glow-a {
          width: 50vmax;
          height: 50vmax;
          top: -16vmax;
          right: -18vmax;
          background: radial-gradient(circle, rgba(237,94,28,0.13), rgba(237,94,28,0) 65%);
          animation: r-faq-drift-a 34s ease-in-out infinite;
        }
        .r-faq-glow-b {
          width: 44vmax;
          height: 44vmax;
          bottom: -18vmax;
          left: -16vmax;
          background: radial-gradient(circle, rgba(26,26,26,0.07), rgba(26,26,26,0) 65%);
          animation: r-faq-drift-b 42s ease-in-out infinite;
        }
        @keyframes r-faq-drift-a {
          0%, 100% { transform: translate(0,0); }
          50% { transform: translate(-10vmax, 8vmax); }
        }
        @keyframes r-faq-drift-b {
          0%, 100% { transform: translate(0,0); }
          50% { transform: translate(8vmax, -6vmax); }
        }
        @media (prefers-reduced-motion: reduce) {
          .r-faq-glow { animation: none; }
        }

        .r-faq-inner {
          position: relative;
          z-index: 1;
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          gap: clamp(48px, 7vh, 80px);
        }

        /* === HEAD === */
        .r-faq-head {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: clamp(32px, 6vw, 96px);
          align-items: end;
        }
        .r-faq-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 16px;
          font-family: var(--font-body);
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          font-size: 11px;
        }
        .r-faq-chapter { color: var(--or); }
        .r-faq-dash {
          display: inline-block;
          width: 26px; height: 1px;
          background: var(--ink-line);
        }
        .r-faq-label { color: var(--ink-muted); }

        .r-faq-title {
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
        .r-faq-line { display: block; }
        .r-faq-line em {
          font-style: italic;
          color: var(--or);
          font-weight: 500;
        }
        .r-faq-sub {
          grid-column: 1 / -1;
          font-family: var(--font-body);
          font-weight: 400;
          font-size: clamp(15px, 1.1vw, 17px);
          line-height: 1.55;
          color: var(--ink-muted);
          max-width: 580px;
          margin: 0;
        }

        /* === LIST === */
        .r-faq-list {
          list-style: none;
          padding: 0;
          margin: 0;
          border-top: 1px solid var(--ink-line);
        }
        .r-faq-row {
          border-bottom: 1px solid var(--ink-line);
          transition: background 240ms ease;
        }
        .r-faq-row[data-open="true"] { background: rgba(237, 94, 28, 0.025); }
        .r-faq-row:hover .r-faq-q { color: var(--or); }

        .r-faq-trigger {
          all: unset;
          display: flex;
          align-items: flex-start;
          gap: 24px;
          width: 100%;
          padding: clamp(22px, 3vh, 30px) 56px clamp(22px, 3vh, 30px) clamp(8px, 2vw, 24px);
          cursor: pointer;
          position: relative;
          box-sizing: border-box;
          transition: padding-left 240ms ease;
        }
        .r-faq-trigger:focus-visible {
          outline: 2px solid var(--or);
          outline-offset: 2px;
        }
        .r-faq-row:hover .r-faq-trigger { padding-left: clamp(12px, 2.5vw, 28px); }

        .r-faq-no {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: clamp(26px, 2.2vw, 34px);
          color: var(--or);
          letter-spacing: -0.02em;
          line-height: 1;
          flex: 0 0 56px;
          padding-top: 2px;
        }
        .r-faq-q-wrap {
          display: flex;
          flex-direction: column;
          gap: 6px;
          min-width: 0;
          flex: 1 1 auto;
        }
        .r-faq-meta {
          font-family: var(--font-body);
          font-weight: 500;
          font-size: 10px;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: var(--ink-muted);
          line-height: 1;
        }
        .r-faq-q {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: clamp(18px, 1.7vw, 24px);
          letter-spacing: -0.012em;
          line-height: 1.25;
          color: var(--ink);
          transition: color 220ms ease;
          word-break: break-word;
        }

        .r-faq-toggle {
          position: absolute;
          right: 18px;
          top: 50%;
          margin-top: -8px;
          width: 16px;
          height: 16px;
          flex-shrink: 0;
        }
        .r-faq-toggle-bar {
          position: absolute;
          background: var(--ink);
          transition: transform 280ms cubic-bezier(0.2,0.6,0.2,1), background 200ms ease, opacity 200ms ease;
        }
        .r-faq-toggle-h {
          left: 0; right: 0; top: 50%;
          height: 1.5px;
          transform: translateY(-50%);
        }
        .r-faq-toggle-v {
          top: 0; bottom: 0; left: 50%;
          width: 1.5px;
          transform: translateX(-50%);
        }
        .r-faq-row[data-open="true"] .r-faq-toggle-v {
          transform: translateX(-50%) rotate(90deg);
          opacity: 0;
        }
        .r-faq-row[data-open="true"] .r-faq-toggle-bar { background: var(--or); }

        .r-faq-answer {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 320ms cubic-bezier(0.2,0.6,0.2,1);
        }
        .r-faq-row[data-open="true"] .r-faq-answer {
          grid-template-rows: 1fr;
        }
        .r-faq-answer > p {
          overflow: hidden;
          margin: 0;
          padding: 0 56px clamp(24px, 3vh, 34px) calc(56px + 24px + clamp(8px, 2vw, 24px));
          font-family: var(--font-body);
          font-weight: 400;
          font-size: clamp(15px, 1.05vw, 17px);
          line-height: 1.65;
          color: var(--ink);
          opacity: 0.84;
          max-width: 820px;
        }

        /* === FOOT === */
        .r-faq-foot {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          padding-top: clamp(28px, 4vh, 44px);
          border-top: 1px solid var(--ink-line);
          flex-wrap: wrap;
        }
        .r-faq-foot-copy {
          font-family: var(--font-body);
          font-weight: 400;
          font-size: 14.5px;
          line-height: 1.55;
          color: var(--ink-muted);
          margin: 0;
          max-width: 540px;
        }
        .r-faq-foot-cta {
          font-family: var(--font-body);
          font-weight: 600;
          font-size: 13px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--ink);
          text-decoration: none;
          padding: 14px 24px;
          border: 1px solid var(--ink-line);
          border-radius: 4px;
          transition: background 220ms ease, color 220ms ease, border-color 220ms ease;
          line-height: 1;
        }
        .r-faq-foot-cta:hover {
          background: var(--ink);
          color: var(--cream);
          border-color: var(--ink);
        }

        .r-faq-stamp {
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

        @media (max-width: 720px) {
          .r-faq { padding-left: 6vw; padding-right: 6vw; }
          .r-faq-head { grid-template-columns: 1fr; gap: 20px; }
          .r-faq-trigger {
            gap: 16px;
            padding: 18px 40px 18px 0;
          }
          .r-faq-no { font-size: 22px; flex-basis: 38px; }
          .r-faq-toggle { right: 4px; }
          .r-faq-answer > p {
            padding: 0 40px 22px calc(38px + 16px);
          }
          .r-faq-foot { flex-direction: column; align-items: flex-start; }
        }
      `}</style>
    </section>
  );
};

export default FAQRedesign;
