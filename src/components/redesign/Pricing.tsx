import { Link } from "react-router-dom";

type Plan = {
  name: string;
  price: string;
  unit?: string;
  desc: string;
  features: string[];
  featured?: boolean;
  cta: string;
};

const PLANS: Plan[] = [
  {
    name: "Launch",
    price: "$900",
    unit: "/ mo",
    desc: "One channel, done properly. Ideal for getting a single engine humming.",
    features: ["1 ad channel (Meta or Google)", "Conversion tracking setup", "Monthly report & call"],
    cta: "Start with Launch",
  },
  {
    name: "Growth",
    price: "$1,400",
    unit: "/ mo",
    desc: "The full demand engine for brands ready to scale spend with confidence.",
    features: ["Meta + Google managed", "Landing page & CRO", "Creative & social content", "Bi-weekly reporting"],
    featured: true,
    cta: "Book a strategy call",
  },
  {
    name: "Scale",
    price: "Custom",
    desc: "Multi-channel, full-funnel and lifecycle for established brands with real budget.",
    features: ["Everything in Growth", "SEO + email lifecycle", "Dedicated strategist", "Live dashboard access"],
    cta: "Talk to us",
  },
];

const Check = () => (
  <svg className="r-price-check" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M4 12l5 5L20 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Pricing = () => {
  return (
    <section className="r-price" id="pricing">
      <div className="r-price-bg" aria-hidden />

      <div className="r-price-inner">
        <header className="r-price-head">
          <div className="r-price-eyebrow">
            <span className="r-price-chapter">CHAPTER 08</span>
            <span className="r-price-dash" aria-hidden />
            <span className="r-price-label">PRICING</span>
          </div>
          <h2 className="r-price-title">
            <span className="r-price-line">Retainers that</span>
            <span className="r-price-line">
              scale <em>with you</em>.
            </span>
          </h2>
          <p className="r-price-sub">
            Monthly, no lock-in beyond the agreed term. A deposit secures your start date.
            Work begins once it's in.
          </p>
        </header>

        <ol className="r-price-grid" role="list">
          {PLANS.map((p) => (
            <li key={p.name} className={`r-price-card${p.featured ? " is-feat" : ""}`}>
              {p.featured && <span className="r-price-flag">POPULAR</span>}
              <span className="r-price-name">{p.name}</span>
              <div className="r-price-amt">
                {p.price}
                {p.unit && <span className="r-price-unit">{p.unit}</span>}
              </div>
              <p className="r-price-desc">{p.desc}</p>
              <ul className="r-price-feats" role="list">
                {p.features.map((f) => (
                  <li key={f} className="r-price-feat">
                    <Check />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link to="/work-with-us" className="r-price-cta">
                {p.cta}
              </Link>
            </li>
          ))}
        </ol>
      </div>

      <div className="r-price-stamp" aria-hidden>№ 008 · 2026</div>

      <style>{`
        .r-price {
          position: relative;
          background: var(--cream);
          color: var(--ink);
          padding: clamp(96px, 14vh, 160px) 4vw;
          overflow: hidden;
          isolation: isolate;
        }
        .r-price-bg {
          position: absolute;
          z-index: 0;
          pointer-events: none;
          width: 58vmax; height: 58vmax;
          top: -18vmax; right: -16vmax;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(237,94,28,0.09), rgba(237,94,28,0) 65%);
          filter: blur(90px);
        }
        .r-price-inner {
          position: relative;
          z-index: 1;
          max-width: 1180px;
          margin: 0 auto;
          display: grid;
          gap: clamp(44px, 6vh, 76px);
        }
        .r-price-eyebrow {
          display: inline-flex; align-items: center; gap: 16px;
          font-family: var(--font-body); font-weight: 500;
          letter-spacing: 0.22em; text-transform: uppercase; font-size: 11px;
        }
        .r-price-chapter { color: var(--or); }
        .r-price-dash { display: inline-block; width: 26px; height: 1px; background: var(--ink-line); }
        .r-price-label { color: var(--ink-muted); }
        .r-price-title {
          margin: 14px 0 0;
          font-family: var(--font-display); font-weight: 800;
          letter-spacing: -0.025em; line-height: 1.0;
          font-size: clamp(34px, 5vw, 70px);
          display: flex; flex-direction: column; gap: 6px;
        }
        .r-price-line em { font-style: italic; color: var(--or); font-weight: 500; }
        .r-price-sub {
          margin: 20px 0 0;
          font-family: var(--font-body); font-size: clamp(15px, 1.1vw, 17px);
          line-height: 1.55; color: var(--ink-muted); max-width: 560px;
        }

        /* === GRID === */
        .r-price-grid {
          list-style: none; padding: 0; margin: 0;
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;
          align-items: stretch;
        }
        .r-price-card {
          position: relative;
          border: 1px solid var(--ink-line);
          background: rgba(255,255,255,0.5);
          border-radius: 6px;
          padding: 32px 28px;
          display: flex; flex-direction: column;
          transition: transform 240ms ease, box-shadow 240ms ease, border-color 240ms ease;
        }
        .r-price-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 26px 56px -34px rgba(26,26,26,0.35);
          border-color: rgba(237,94,28,0.4);
        }
        .r-price-card.is-feat {
          background: var(--ink);
          border-color: var(--ink);
          color: var(--cream);
          box-shadow: 0 40px 80px -34px rgba(26,26,26,0.55);
        }
        .r-price-flag {
          position: absolute; top: 22px; right: 22px;
          font-family: var(--font-body); font-weight: 700;
          font-size: 10px; letter-spacing: 0.12em;
          background: var(--or); color: #fff;
          padding: 4px 10px; border-radius: 60px;
        }
        .r-price-name {
          font-family: var(--font-body); font-weight: 600;
          font-size: 12px; letter-spacing: 0.18em; text-transform: uppercase;
          color: var(--ink-muted);
        }
        .is-feat .r-price-name { color: var(--or); }
        .r-price-amt {
          font-family: var(--font-display); font-weight: 800;
          letter-spacing: -0.035em; line-height: 1;
          font-size: clamp(40px, 4vw, 52px);
          margin: 16px 0 2px;
        }
        .r-price-unit {
          font-family: var(--font-body); font-weight: 500;
          font-size: 15px; letter-spacing: 0; margin-left: 4px;
          color: var(--ink-muted);
        }
        .is-feat .r-price-unit { color: rgba(241,237,229,0.6); }
        .r-price-desc {
          font-family: var(--font-body); font-size: 14px; line-height: 1.5;
          color: var(--ink-muted); margin: 0 0 24px; min-height: 42px;
        }
        .is-feat .r-price-desc { color: rgba(241,237,229,0.66); }
        .r-price-feats { list-style: none; padding: 0; margin: 0 0 28px; display: flex; flex-direction: column; gap: 12px; }
        .r-price-feat {
          display: flex; gap: 11px; align-items: flex-start;
          font-family: var(--font-body); font-size: 14px; line-height: 1.4;
        }
        .r-price-check { width: 17px; height: 17px; flex: none; color: var(--or); margin-top: 2px; }
        .r-price-cta {
          margin-top: auto;
          display: inline-flex; align-items: center; justify-content: center;
          font-family: var(--font-body); font-weight: 600; font-size: 15px;
          padding: 14px 22px; border-radius: 60px; text-decoration: none;
          background: var(--cream-soft); color: var(--ink);
          border: 1px solid var(--ink-line);
          transition: background 220ms ease, color 220ms ease, transform 220ms ease;
        }
        .r-price-cta:hover { background: var(--ink); color: var(--cream); transform: translateY(-2px); }
        .is-feat .r-price-cta { background: var(--or); color: #fff; border-color: var(--or); }
        .is-feat .r-price-cta:hover { background: #ff7a33; color: #fff; }
        .r-price-stamp {
          position: absolute; bottom: 22px; right: 4vw; z-index: 1;
          font-family: var(--font-body); font-size: 11px; letter-spacing: 0.2em;
          color: var(--ink-muted);
        }
        @media (max-width: 860px) {
          .r-price-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};

export default Pricing;
