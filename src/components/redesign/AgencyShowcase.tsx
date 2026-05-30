import { useEffect, useRef, useState } from "react";

const AgencyShowcase = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const [videoSrc, setVideoSrc] = useState<string | undefined>(undefined);

  /* lazy-load the 60MB video only when section nears viewport */
  useEffect(() => {
    if (!sectionRef.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVideoSrc("/agency-visual.m4v");
            obs.disconnect();
          }
        });
      },
      { rootMargin: "240px", threshold: 0.1 }
    );
    obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!videoSrc || !videoRef.current) return;
    const v = videoRef.current;
    v.muted = true;
    v.playsInline = true;
    const tryPlay = () => v.play().catch(() => {});
    v.addEventListener("canplay", tryPlay);
    const t = window.setTimeout(tryPlay, 50);
    return () => {
      v.removeEventListener("canplay", tryPlay);
      window.clearTimeout(t);
    };
  }, [videoSrc]);

  return (
    <section ref={sectionRef} className="r-show" id="agency">
      <div className="r-show-bg-grid" aria-hidden />
      <div className="r-show-glow" aria-hidden />

      <div className="r-show-inner">
        <div className="r-show-head">
          <div className="r-show-eyebrow">
            <span className="r-show-chapter">CHAPTER 02</span>
            <span className="r-show-dash" aria-hidden />
            <span className="r-show-label">INSIDE THE WORK</span>
          </div>

          <h2 className="r-show-title">
            <span className="r-show-line">Where strategy</span>
            <span className="r-show-line">meets <em>execution</em>.</span>
          </h2>

          <p className="r-show-sub">
            Built in Wellington. Run with a tight crew. Every campaign, landing page, and
            tracking pixel touched by a founder before it ships.
          </p>
        </div>

        <figure className="r-show-frame">
          <div className="r-show-frame-corners" aria-hidden>
            <span className="r-show-corner r-show-corner-tl" />
            <span className="r-show-corner r-show-corner-tr" />
            <span className="r-show-corner r-show-corner-bl" />
            <span className="r-show-corner r-show-corner-br" />
          </div>
          <div className="r-show-frame-meta r-show-frame-meta-l">REEL · 2026</div>
          <div className="r-show-frame-meta r-show-frame-meta-r">№ 002 / AGENCY</div>

          <div className="r-show-video-wrap">
            <video
              ref={videoRef}
              src={videoSrc}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="r-show-video"
            />
            {!videoSrc && <div className="r-show-video-placeholder" aria-hidden />}
          </div>

          <figcaption className="r-show-caption">
            <span>Live work, on set — clients, builds, paid-acquisition delivery.</span>
          </figcaption>
        </figure>

        <div className="r-show-team">
          <div className="r-show-team-item">
            <span className="r-show-team-no">01</span>
            <span className="r-show-team-name">Logan Hempel</span>
            <span className="r-show-team-role">Founder — Emporom Media</span>
          </div>
          <div className="r-show-team-divider" aria-hidden />
          <div className="r-show-team-item">
            <span className="r-show-team-no">02</span>
            <span className="r-show-team-name">Sam Howell</span>
            <span className="r-show-team-role">Co-founder — H² (H Squared)</span>
          </div>
          <div className="r-show-team-divider" aria-hidden />
          <div className="r-show-team-item">
            <span className="r-show-team-no">03</span>
            <span className="r-show-team-name">Wellington · NZ</span>
            <span className="r-show-team-role">Operating across Aotearoa</span>
          </div>
        </div>
      </div>

      <div className="r-show-stamp" aria-hidden>№ 002 · 2026</div>

      <style>{`
        .r-show {
          --show-bg: #161616;
          --show-bg-2: #1f1f1f;
          --show-text: #f1ede5;
          --show-text-muted: rgba(241, 237, 229, 0.62);
          --show-line: rgba(241, 237, 229, 0.14);
          position: relative;
          background: var(--show-bg);
          color: var(--show-text);
          padding: clamp(96px, 14vh, 160px) 4vw clamp(96px, 14vh, 160px);
          overflow: hidden;
          isolation: isolate;
        }

        /* hairline grid background — subtle architectural texture */
        .r-show-bg-grid {
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          background-image:
            linear-gradient(rgba(241,237,229,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(241,237,229,0.04) 1px, transparent 1px);
          background-size: 80px 80px;
          opacity: 0.6;
          mask-image: radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 80%);
        }
        .r-show-glow {
          position: absolute;
          z-index: 0;
          pointer-events: none;
          width: 65vmax;
          height: 65vmax;
          top: -18vmax;
          right: -16vmax;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(237,94,28,0.24), rgba(237,94,28,0) 62%);
          filter: blur(90px);
          animation: r-show-drift 32s ease-in-out infinite;
        }
        @keyframes r-show-drift {
          0%, 100% { transform: translate(0,0); }
          50% { transform: translate(-12vmax, 10vmax); }
        }

        .r-show-inner {
          position: relative;
          z-index: 1;
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          gap: clamp(48px, 7vh, 96px);
        }

        /* === HEAD === */
        .r-show-head {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: clamp(32px, 6vw, 96px);
          align-items: end;
        }
        .r-show-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 16px;
          font-family: var(--font-body);
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          font-size: 11px;
        }
        .r-show-chapter { color: var(--or); }
        .r-show-dash {
          display: inline-block;
          width: 26px;
          height: 1px;
          background: var(--show-line);
        }
        .r-show-label { color: var(--show-text-muted); }

        .r-show-title {
          margin: 0;
          font-family: var(--font-display);
          font-weight: 800;
          letter-spacing: -0.025em;
          line-height: 1.0;
          font-size: clamp(36px, 5.2vw, 76px);
          display: flex;
          flex-direction: column;
          gap: 8px;
          color: var(--show-text);
        }
        .r-show-line { display: block; }
        .r-show-line em {
          font-style: italic;
          color: var(--or);
          font-weight: 500;
        }

        .r-show-sub {
          grid-column: 1 / -1;
          font-family: var(--font-body);
          font-weight: 400;
          font-size: clamp(15px, 1.1vw, 17px);
          line-height: 1.55;
          color: var(--show-text-muted);
          max-width: 580px;
          margin: 0;
        }

        /* === FRAME === */
        .r-show-frame {
          position: relative;
          margin: 0;
          padding: 18px;
          border: 1px solid var(--show-line);
          border-radius: 2px;
        }
        .r-show-frame-corners { position: absolute; inset: 0; pointer-events: none; }
        .r-show-corner {
          position: absolute;
          width: 18px;
          height: 18px;
          border: 1.5px solid var(--or);
        }
        .r-show-corner-tl { top: -2px; left: -2px; border-right: 0; border-bottom: 0; }
        .r-show-corner-tr { top: -2px; right: -2px; border-left: 0; border-bottom: 0; }
        .r-show-corner-bl { bottom: -2px; left: -2px; border-right: 0; border-top: 0; }
        .r-show-corner-br { bottom: -2px; right: -2px; border-left: 0; border-top: 0; }

        .r-show-frame-meta {
          position: absolute;
          top: -10px;
          font-family: var(--font-body);
          font-weight: 500;
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--show-text-muted);
          background: var(--show-bg);
          padding: 0 12px;
          line-height: 1;
        }
        .r-show-frame-meta-l { left: 22px; }
        .r-show-frame-meta-r { right: 22px; color: var(--or); }

        .r-show-video-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          overflow: hidden;
          background: #0a0a0a;
        }
        .r-show-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .r-show-video-placeholder {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
        }
        .r-show-video-placeholder::after {
          content: "LOADING REEL";
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          font-family: var(--font-body);
          font-weight: 500;
          font-size: 11px;
          letter-spacing: 0.32em;
          color: rgba(241,237,229,0.32);
        }

        .r-show-caption {
          margin-top: 14px;
          font-family: var(--font-body);
          font-weight: 400;
          font-size: 12px;
          letter-spacing: 0.05em;
          color: var(--show-text-muted);
        }

        /* === TEAM ROW === */
        .r-show-team {
          display: grid;
          grid-template-columns: 1fr auto 1fr auto 1fr;
          gap: clamp(20px, 3vw, 48px);
          align-items: start;
          padding-top: clamp(32px, 5vh, 56px);
          border-top: 1px solid var(--show-line);
        }
        .r-show-team-item {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .r-show-team-no {
          font-family: var(--font-body);
          font-weight: 500;
          font-size: 10px;
          letter-spacing: 0.22em;
          color: var(--or);
        }
        .r-show-team-name {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: clamp(18px, 1.5vw, 22px);
          color: var(--show-text);
          letter-spacing: -0.01em;
          line-height: 1.1;
        }
        .r-show-team-role {
          font-family: var(--font-body);
          font-weight: 400;
          font-size: 13px;
          color: var(--show-text-muted);
          letter-spacing: 0.02em;
          line-height: 1.4;
        }
        .r-show-team-divider {
          width: 1px;
          height: 60%;
          background: var(--show-line);
          align-self: stretch;
          margin: 0 auto;
        }

        .r-show-stamp {
          position: absolute;
          bottom: 18px;
          right: 4vw;
          font-family: var(--font-body);
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          font-size: 10px;
          color: var(--show-text-muted);
          z-index: 2;
        }

        /* === RESPONSIVE === */
        @media (max-width: 900px) {
          .r-show-head {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .r-show-team {
            grid-template-columns: 1fr;
            gap: 28px;
          }
          .r-show-team-divider {
            width: 60%;
            height: 1px;
            margin: 0;
          }
        }
        @media (max-width: 640px) {
          .r-show { padding-left: 6vw; padding-right: 6vw; }
          .r-show-frame { padding: 12px; }
          .r-show-frame-meta-l { left: 14px; }
          .r-show-frame-meta-r { right: 14px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .r-show-glow { animation: none; }
        }
      `}</style>
    </section>
  );
};

export default AgencyShowcase;
