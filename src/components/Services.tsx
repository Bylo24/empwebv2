import { Reveal, Words } from "@/components/Premium";

function MetaVisual() {
  return (
    <div className="flex h-[110px] items-center justify-center gap-5 py-2">
      <div className="relative h-[98px] w-[55px] shrink-0 overflow-hidden rounded-lg border border-orange/30 bg-gradient-to-b from-orange/[0.16] via-orange/[0.06] to-transparent shadow-[0_6px_18px_-6px_rgba(255,91,5,0.35)] transition-transform duration-500 ease-premium group-hover:scale-105">
        <div className="absolute inset-x-1 top-1 flex gap-0.5">
          <span className="h-0.5 flex-1 rounded-full bg-orange" />
          <span className="h-0.5 flex-1 rounded-full bg-orange/45" />
          <span className="h-0.5 flex-1 rounded-full bg-charcoal/15" />
        </div>
        <div className="absolute left-1.5 top-3 flex items-center gap-1">
          <span className="h-2 w-2 rounded-full border border-orange/50 bg-orange/25" />
          <span className="h-0.5 w-5 rounded-full bg-charcoal/20" />
        </div>
        <span className="absolute inset-0 grid place-items-center">
          <span className="grid h-6 w-6 place-items-center rounded-full bg-orange text-[8px] text-white shadow-[0_4px_14px_-2px_rgba(255,91,5,0.5)]">▶</span>
        </span>
        <div className="absolute inset-x-1.5 bottom-1.5 space-y-1">
          <span className="block h-0.5 w-4/5 rounded-full bg-charcoal/22" />
          <span className="block h-0.5 w-3/5 rounded-full bg-charcoal/14" />
        </div>
      </div>
      <div className="flex flex-col items-start gap-1.5">
        {[
          { label: "Story · A", live: false },
          { label: "Reel · B", live: true },
          { label: "Hook · C", live: false },
        ].map((c) => (
          <span
            key={c.label}
            className={`whitespace-nowrap rounded-full border px-2.5 py-1 font-mono text-[0.56rem] font-bold transition-all duration-300 ${
              c.live ? "border-orange/35 bg-orange/[0.08] text-orange shadow-[0_2px_8px_-2px_rgba(255,91,5,0.2)]" : "border-charcoal/10 bg-charcoal/[0.02] text-charcoal/70"
            }`}
          >
            {c.label}
            {c.live && <span className="ml-1.5 text-[0.5rem] uppercase">live</span>}
          </span>
        ))}
      </div>
    </div>
  );
}

function GoogleVisual() {
  const bars = [30, 45, 38, 58, 50, 72, 66, 85, 78, 96];
  return (
    <div className="space-y-4 py-2">
      <div className="flex items-center gap-3 rounded-full border border-charcoal/10 bg-white px-4 py-2.5 shadow-[0_2px_8px_rgba(36,48,55,.07)]">
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 shrink-0 fill-none stroke-charcoal/38" strokeWidth="2.5" aria-hidden="true">
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-4-4" />
        </svg>
        <span className="text-xs text-charcoal/70">pest control wellington</span>
        <span className="ml-auto shrink-0 rounded border border-orange/35 px-1.5 py-0.5 font-mono text-[0.52rem] uppercase tracking-wide text-orange">Sponsored</span>
      </div>
      <div className="flex h-20 items-end gap-1.5 px-1">
        {bars.map((h, i) => (
          <div key={i} style={{ height: `${h}%` }} className={`flex-1 rounded-t transition-all duration-700 ${i > 5 ? "bg-orange shadow-[0_0_6px_rgba(255,91,5,0.22)]" : "bg-charcoal/10"}`} />
        ))}
      </div>
    </div>
  );
}

function SeoVisual() {
  return (
    <div className="space-y-2 py-2">
      {[
        { rank: "1", name: "yourbrand.co.nz", you: true },
        { rank: "2", name: "competitor-a.com", you: false },
        { rank: "3", name: "competitor-b.nz", you: false },
      ].map((r) => (
        <div
          key={r.rank}
          className={`flex items-center gap-3 rounded-lg border px-3.5 py-2.5 text-xs transition-all duration-300 ${
            r.you ? "border-orange/35 bg-gradient-to-r from-orange/[0.07] to-transparent font-bold text-charcoal shadow-[0_2px_8px_-2px_rgba(255,91,5,0.12)]" : "border-charcoal/10 bg-charcoal/[0.02] text-charcoal/70"
          }`}
        >
          <span className="font-mono shrink-0">{r.rank}.</span>
          {r.name}
          {r.you && <span className="ml-auto font-mono text-[0.58rem] text-orange shrink-0">▲ you</span>}
        </div>
      ))}
    </div>
  );
}

function CroVisual() {
  return (
    <div className="grid grid-cols-2 gap-3 py-2">
      {[
        { v: "A", rate: "2.1%", win: false },
        { v: "B", rate: "4.7%", win: true },
      ].map((t) => (
        <div
          key={t.v}
          className={`rounded-xl border p-4 text-center transition-all duration-300 ${
            t.win ? "border-orange/30 bg-gradient-to-b from-orange/[0.08] to-transparent shadow-[0_4px_12px_-4px_rgba(255,91,5,0.18)]" : "border-charcoal/10 bg-charcoal/[0.02] opacity-50"
          }`}
        >
          <p className="eyebrow text-charcoal/70">Variant {t.v}</p>
          <p className="mt-1.5 text-2xl font-extrabold text-charcoal">{t.rate}</p>
          {t.win && <p className="mt-0.5 font-mono text-[0.58rem] text-orange">winner</p>}
        </div>
      ))}
    </div>
  );
}

function EmailVisual() {
  return (
    <div className="space-y-2 py-2">
      {[
        { name: "Welcome flow", delay: "0ms" },
        { name: "Abandoned cart", delay: "2h" },
        { name: "Win-back", delay: "7d" },
      ].map((f, i) => (
        <div key={f.name} className="flex items-center gap-3 rounded-lg border border-charcoal/10 bg-charcoal/[0.025] px-3.5 py-2.5 transition-all duration-300 hover:border-orange/25" style={{ marginLeft: i * 12 }}>
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-orange/60" />
          <span className="text-xs font-medium text-charcoal/72">{f.name}</span>
          <span className="ml-auto font-mono text-[0.56rem] text-aqua-3">auto · {f.delay}</span>
        </div>
      ))}
    </div>
  );
}

function SocialVisual() {
  const tags = ["Reels", "TikTok", "Shorts", "Stories", "Carousels", "UGC", "Hooks", "Cutdowns"];
  return (
    <div className="overflow-hidden py-3 [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
      <div className="marquee-track flex w-max gap-3">
        {[...tags, ...tags].map((t, i) => (
          <span key={i} className="whitespace-nowrap rounded-full border border-charcoal/10 bg-charcoal/[0.03] px-4 py-1.5 text-xs font-semibold text-charcoal/70">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

const CELLS = [
  { span: "lg:col-span-4", visual: <MetaVisual />, name: "Meta Ads", desc: "Story & Reel creative, audience testing and offers that move, built around your margins instead of vanity reach.", accent: false },
  { span: "lg:col-span-8", visual: <GoogleVisual />, name: "Google Ads", desc: "Search and Performance Max, built and managed end to end. We rebuild the account structure first, because that's where most of the wasted spend hides.", accent: true },
  { span: "lg:col-span-4", visual: <SeoVisual />, name: "SEO", desc: "Technical fixes, content and local search that compounds so you're not renting every click forever.", accent: false },
  { span: "lg:col-span-4", visual: <CroVisual />, name: "Landing pages & CRO", desc: "Fast, focused pages built to convert the traffic you're paying for. Tested, not guessed.", accent: false },
  { span: "lg:col-span-4", visual: <EmailVisual />, name: "Email & lifecycle", desc: "Welcome, abandoned-cart and win-back flows that turn one-time buyers into repeat revenue while you sleep.", accent: false },
  { span: "lg:col-span-12", visual: <SocialVisual />, name: "Social & content", desc: "Short-form video and content systems that feed the funnel and keep your brand in front of the right people.", accent: false },
];

const Services = () => {
  return (
    <section id="services" className="border-t border-charcoal/10 bg-white py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow flex items-center justify-center gap-2.5 text-charcoal/70">
            <span className="blink inline-block h-1.5 w-1.5 rounded-full bg-orange shadow-[0_0_8px_#ff5b05]" />
            Services
          </p>
          <h2 className="font-display mt-5 text-[clamp(1.9rem,4vw,3rem)] font-extrabold leading-tight tracking-[-0.03em] text-balance text-charcoal">
            <Words text="One partner for the whole" tail={<span className="fade-word">growth engine.</span>} />
          </h2>
          <p className="mt-4 text-lg text-charcoal/70">
            Every service runs the same way: built properly, then scaled. Never bolted on and left to drift.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-12 gap-4">
          {CELLS.map((c, i) => (
            <Reveal key={c.name} delay={(i % 3) * 0.07} className={`col-span-12 ${c.span}`}>
              <div
                className={`group h-full rounded-[1.4rem] p-1 transition-all duration-500 ease-premium ${
                  c.accent ? "border border-orange/20 bg-orange/[0.04] hover:bg-orange/[0.06]" : "border border-charcoal/[0.06] bg-charcoal/[0.02] hover:border-charcoal/12"
                } shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-lift)] hover:-translate-y-1`}
              >
                <div className="sheen h-full overflow-hidden rounded-[calc(1.4rem-4px)] bg-white">
                  <div className={`px-7 pt-6 pb-4 ${c.accent ? "bg-gradient-to-b from-orange/[0.03] to-transparent" : "bg-charcoal/[0.015]"}`}>{c.visual}</div>
                  <div className="border-t border-charcoal/[0.06] p-7">
                    <h3 className="text-xl font-extrabold tracking-tight text-charcoal">{c.name}</h3>
                    <p className="mt-2 leading-relaxed text-charcoal/70">{c.desc}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
