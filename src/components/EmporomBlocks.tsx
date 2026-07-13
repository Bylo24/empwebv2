import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Check, X, ArrowUp, Search, ClipboardList, Zap, RefreshCw } from "lucide-react";
import { Reveal, Words, EASE } from "@/components/Premium";

const ORANGE = "#FF5B05";
const ORANGE_2 = "#FF751F";
const AMBER = "#FFB24A";
const AQUA = "#1AA6AE";
const SHADOW_STACK =
  "0 0.6px 0.6px -0.5px rgba(16,20,25,0.04), 0 2.3px 2.3px -1px rgba(16,20,25,0.06), 0 10px 16px -1.5px rgba(16,20,25,0.10)";
const SHADOW_STACK_LIFT =
  "0 1px 1px -0.5px rgba(16,20,25,0.05), 0 5px 8px -1.5px rgba(16,20,25,0.09), 0 22px 34px -4px rgba(16,20,25,0.16)";
const hed = "font-display font-extrabold tracking-tight";

/* ── 0 · CASES — "Real accounts. Real fixes." ── */

const CASES = [
  {
    n: "01",
    sector: "Pest control",
    tags: ["Google Ads", "Rescue"],
    result: "Leads back in a week",
    story:
      "The account looked like it was dying after a website rebuild. Enquiries had flatlined, but they weren't gone. We took it over, found the break, fixed it, and the leads came straight back.",
  },
  {
    n: "02",
    sector: "E-commerce",
    tags: ["Meta Ads", "Email"],
    result: "4.2× campaign ROAS",
    story:
      "A/B tested Story and Reel creative around a seasonal push, backed by email flows that kept buyers coming back after the first order.",
  },
  {
    n: "03",
    sector: "Home services",
    tags: ["Google Ads", "CRO"],
    result: "Lower cost per lead",
    story:
      "Took the account apart, rebuilt the campaigns, and tightened the landing page so paid clicks actually had somewhere worth landing.",
  },
];

export function Cases() {
  return (
    <section id="work" className="border-t border-charcoal/10 bg-white py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className={`${hed} text-[clamp(1.9rem,4vw,3rem)] leading-tight tracking-[-0.03em] text-charcoal`}>
            Real accounts. Real fixes.
          </h2>
        </Reveal>

        <Reveal delay={0.06} className="mt-14">
          <article className="group relative overflow-hidden rounded-[1.4rem] border border-charcoal/10 shadow-[var(--shadow-soft)] transition-all duration-500 ease-premium hover:-translate-y-1 hover:border-orange/20 hover:shadow-[var(--shadow-lift)]">
            <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
              <div className="relative h-56 lg:h-auto overflow-hidden">
                <img
                  src="/video/city-hero-poster.jpg"
                  alt="City lights at night, the campaign creative backdrop"
                  className="h-full w-full object-cover transition-transform duration-700 ease-premium group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white lg:block hidden" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/10 to-transparent lg:hidden" />
                <div className="absolute top-4 left-4 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-3.5 py-1.5">
                  <span className="font-mono text-[0.6rem] font-bold text-white uppercase tracking-[0.16em]">{CASES[0].sector}</span>
                </div>
              </div>
              <div className="bg-white p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-2.5 mb-5">
                  <span className="font-mono text-sm font-bold text-orange">{CASES[0].n}</span>
                  <span className="h-px flex-1 bg-charcoal/10" />
                  <div className="flex gap-2">
                    {CASES[0].tags.map((t) => (
                      <span key={t} className="rounded-full border border-charcoal/10 px-3 py-1 font-mono text-[0.6rem] uppercase tracking-[0.1em] text-charcoal/48">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <h3 className="text-2xl font-extrabold leading-snug tracking-tight text-charcoal">{CASES[0].result}</h3>
                <p className="mt-4 leading-relaxed text-charcoal/58">{CASES[0].story}</p>
              </div>
            </div>
          </article>
        </Reveal>

        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          {CASES.slice(1).map((c, i) => (
            <Reveal key={c.n} delay={0.12 + i * 0.08}>
              <article className="group flex h-full flex-col rounded-[1.4rem] border border-charcoal/10 bg-white overflow-hidden shadow-[var(--shadow-soft)] transition-all duration-500 ease-premium hover:-translate-y-1 hover:border-orange/20 hover:shadow-[var(--shadow-lift)]">
                <div className="flex items-center justify-between border-b border-charcoal/10 px-8 py-4 bg-charcoal/[0.018]">
                  <span className="font-mono text-sm font-bold text-orange">{c.n}</span>
                  <span className="eyebrow text-charcoal/38">{c.sector}</span>
                </div>
                <div className="flex flex-col flex-1 p-8">
                  <h3 className="text-2xl font-extrabold leading-snug tracking-tight text-charcoal">{c.result}</h3>
                  <p className="mt-4 flex-1 leading-relaxed text-charcoal/58">{c.story}</p>
                  <div className="mt-6 flex gap-2">
                    {c.tags.map((t) => (
                      <span key={t} className="rounded-full border border-charcoal/10 px-3 py-1 font-mono text-[0.6rem] uppercase tracking-[0.1em] text-charcoal/48 transition-all duration-300 group-hover:border-orange/25">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── 1 · DASHBOARD — "Your marketing in one view" ── */

const DASH_NAV: { label: string; dot?: string; active?: boolean }[] = [
  { label: "Overview", active: true },
  { label: "Meta Ads", dot: ORANGE },
  { label: "Google Ads", dot: ORANGE_2 },
  { label: "SEO", dot: AMBER },
  { label: "Email", dot: AQUA },
];

const DASH_TILES = [
  { k: "Campaigns", v: "8", u: "live across channels", c: ORANGE },
  { k: "Creative", v: "5", u: "variants in test", c: ORANGE_2 },
  { k: "Content", v: "3", u: "pieces shipping", c: AMBER },
];

const DASH_BARS = [36, 44, 40, 55, 52, 66, 74, 90];

const DASH_FEED: { text: string; c: string }[] = [
  { text: "Meta: 2 new Reel variants pushed live", c: ORANGE },
  { text: "Google: search terms cleaned, negatives added", c: ORANGE_2 },
  { text: "SEO: 3 location pages published", c: AMBER },
];

function DashboardMock() {
  const barsRef = useRef<HTMLDivElement>(null);
  const inView = useInView(barsRef, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();
  return (
    <div
      className="relative overflow-hidden rounded-[18px] bg-white"
      style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.8), 0 0 0 1px rgba(36,48,55,0.07)" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "linear-gradient(125deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 44%)", mixBlendMode: "overlay" }}
      />
      <div className="relative flex items-center justify-between border-b border-charcoal/10 px-5 py-3.5">
        <div className="flex items-center gap-3">
          <span className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-charcoal/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-charcoal/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-charcoal/15" />
          </span>
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-charcoal/45">Emporom · your marketing</span>
        </div>
        <span
          className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[0.55rem] uppercase tracking-[0.14em]"
          style={{ background: `${ORANGE}12`, color: ORANGE }}
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full" style={{ background: ORANGE }} />
          Live
        </span>
      </div>

      <div className="relative grid sm:grid-cols-[140px_1fr]">
        <div className="hidden min-w-0 border-r border-charcoal/10 p-3 sm:block">
          <div className="space-y-0.5">
            {DASH_NAV.map((n) => (
              <div
                key={n.label}
                className="flex items-center gap-2 rounded-lg px-2.5 py-2 text-[0.72rem] font-medium"
                style={n.active ? { background: `${ORANGE}0f`, color: ORANGE } : { color: "rgba(36,48,55,0.55)" }}
              >
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: n.dot ?? (n.active ? ORANGE : "rgba(36,48,55,0.25)") }} />
                {n.label}
              </div>
            ))}
          </div>
        </div>

        <div className="min-w-0 p-4 sm:p-5">
          <div className="flex items-center justify-between">
            <p className={`${hed} text-sm text-charcoal`}>This week</p>
            <span className="font-mono text-[0.55rem] uppercase tracking-[0.14em] text-charcoal/40">1–7 Jul</span>
          </div>

          <div className="mt-3 grid grid-cols-3 gap-2 sm:gap-2.5">
            {DASH_TILES.map((t) => (
              <div key={t.k} className="min-w-0 rounded-xl border border-charcoal/10 bg-paper/60 p-2 sm:p-2.5">
                <span className="flex min-w-0 items-center gap-1.5">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: t.c }} />
                  <span className="truncate font-mono text-[0.5rem] uppercase tracking-[0.12em] text-charcoal/45">{t.k}</span>
                </span>
                <p className={`${hed} mt-1.5 text-base leading-none text-charcoal sm:text-lg`}>{t.v}</p>
                <p className="mt-1 text-[0.6rem] leading-tight text-charcoal/45">{t.u}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-xl border border-charcoal/10 p-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[0.55rem] uppercase tracking-[0.12em] text-charcoal/45">Work shipped · last 8 weeks</span>
              <span className="inline-flex items-center gap-0.5 rounded-full px-1.5 py-0.5 text-[0.55rem] font-bold" style={{ background: `${ORANGE}14`, color: ORANGE }}>
                <ArrowUp size={9} /> on track
              </span>
            </div>
            <div ref={barsRef} className="mt-3 flex h-16 items-end gap-1.5">
              {DASH_BARS.map((h, i) => (
                <motion.span
                  key={i}
                  className="flex-1 rounded-t-[3px]"
                  style={{ background: `linear-gradient(180deg, ${ORANGE_2}, ${ORANGE})`, transformOrigin: "bottom" }}
                  initial={reduce ? false : { height: 0 }}
                  animate={{ height: inView || reduce ? `${h}%` : 0 }}
                  transition={{ duration: 0.7, delay: reduce ? 0 : i * 0.05, ease: EASE }}
                />
              ))}
            </div>
          </div>

          <div className="mt-4 space-y-2">
            {DASH_FEED.map((f) => (
              <div key={f.text} className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: f.c }} />
                <span className="truncate text-[0.72rem] text-charcoal/62">{f.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function DashboardBand() {
  return (
    <section className="relative overflow-hidden border-t border-charcoal/10 bg-paper py-32">
      <div className="dotgrid pointer-events-none absolute inset-0 opacity-[0.35]" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[0.92fr_1.08fr]">
        <div>
          <h2 className={`${hed} display balance text-[clamp(2rem,4.3vw,3.1rem)] leading-[1.02] text-charcoal`}>
            <Words text="Your marketing," tail={<span>in one view.</span>} />
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-charcoal/58">
            Ads, SEO, landing pages and email don't live in five logins run by
            five freelancers who never talk. It's one team handling the lot,
            so you always know what's live, what's in test, and what ships next.
          </p>
          <ul className="mt-8 space-y-4">
            {[
              "One team on the whole engine, so nothing falls between the cracks.",
              "You see what's live, shipping and in test without chasing anyone.",
              "A plain-English update, not five dashboards to decode.",
            ].map((t) => (
              <li key={t} className="flex gap-3.5 text-[0.97rem] leading-relaxed text-charcoal/72">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-white" style={{ background: ORANGE }}>
                  <Check size={11} />
                </span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>

        <Reveal delay={0.12}>
          <div className="rounded-[26px] bg-charcoal/[0.04] p-1.5 ring-1 ring-charcoal/10" style={{ boxShadow: SHADOW_STACK_LIFT }}>
            <DashboardMock />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ── 2 · RECEIPT — "What a full-service agency replaces" ── */

const RECEIPT_ROWS = ["Paid ads (Google & Meta)", "SEO & content", "Landing pages", "Email / CRM", "Creative & design", "Reporting"];

export function ReceiptTable() {
  return (
    <section className="border-t border-charcoal/10 bg-white py-28">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className={`${hed} display balance text-[clamp(1.9rem,4.2vw,3rem)] leading-[1.02] text-charcoal`}>
            <Words text="What a full-service agency" tail={<span>replaces.</span>} />
          </h2>
          <p className="mt-4 text-lg text-charcoal/52">
            Every line below is usually its own freelancer or vendor. We run them as one team.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative mt-12 overflow-hidden rounded-2xl bg-white" style={{ border: "1px solid rgba(36,48,55,0.10)", boxShadow: SHADOW_STACK }}>
            <div className="grid grid-cols-[1.5fr_1fr_1fr] border-b border-charcoal/10 bg-paper/50">
              <div className="px-5 py-4 font-mono text-[0.6rem] uppercase tracking-[0.16em] text-charcoal/40">What you need</div>
              <div className="px-4 py-4 text-center font-mono text-[0.6rem] uppercase tracking-[0.16em] text-charcoal/40">The usual stack</div>
              <div className="px-4 py-4 text-center font-mono text-[0.6rem] uppercase tracking-[0.16em]" style={{ color: ORANGE }}>Emporom</div>
            </div>
            {RECEIPT_ROWS.map((r, i) => (
              <div key={r} className="grid grid-cols-[1.5fr_1fr_1fr] items-center" style={{ borderTop: i === 0 ? "none" : "1px solid rgba(36,48,55,0.06)" }}>
                <div className="px-5 py-4 text-[0.92rem] font-medium text-charcoal/80">{r}</div>
                <div className="flex items-center justify-center gap-2 px-4 py-4 text-[0.82rem] text-charcoal/45">
                  <X size={13} className="text-charcoal/30" />
                  <span className="hidden sm:inline">Separate vendor</span>
                </div>
                <div className="flex items-center justify-center gap-2 px-4 py-4 text-[0.82rem] font-semibold" style={{ background: `${ORANGE}06`, color: ORANGE }}>
                  <Check size={13} />
                  <span className="hidden sm:inline">In-house</span>
                </div>
              </div>
            ))}
            <div className="grid grid-cols-[1.5fr_1fr_1fr] items-center border-t-2 border-charcoal/12 bg-paper/40">
              <div className={`${hed} px-5 py-5 text-sm text-charcoal`}>What you deal with</div>
              <div className="px-4 py-5 text-center text-[0.82rem] leading-tight text-charcoal/55">5+ vendors<br />nobody owns it</div>
              <div className="px-4 py-5 text-center text-[0.82rem] font-bold leading-tight" style={{ background: `${ORANGE}0c`, color: ORANGE }}>1 team<br />we own it</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ── 3 · TIMELINE — Audit → Plan → Launch → Optimise ── */

const TIMELINE: { icon: React.ReactNode; title: string; when: string; body: string }[] = [
  { icon: <Search size={15} />, title: "Audit", when: "Week 1", body: "We open the accounts, fix what's broken and stop the budget bleeding into the wrong places. No pitch deck." },
  { icon: <ClipboardList size={15} />, title: "Plan", when: "Week 1", body: "One plan across ads, SEO, pages and email, and one person who picks up the phone. You approve it before anything spends." },
  { icon: <Zap size={15} />, title: "Launch", when: "Weeks 2–3", body: "We ship: campaigns go live, landing pages get built, creative goes into test. You don't lift a finger." },
  { icon: <RefreshCw size={15} />, title: "Optimise", when: "Ongoing", body: "We keep what's working, kill what isn't, and hand you a plain-English update, not another login to check." },
];

export function OnboardTimeline() {
  return (
    <section className="border-t border-charcoal/10 bg-paper py-32">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal className="max-w-2xl">
          <h2 className={`${hed} display balance text-[clamp(1.9rem,4.2vw,3rem)] leading-[1.02] text-charcoal`}>
            <Words text="From first call to" tail={<span>handled.</span>} />
          </h2>
        </Reveal>

        <div className="relative mt-14 pl-2">
          <span className="absolute bottom-6 left-[19px] top-3 w-px" style={{ background: "rgba(36,48,55,0.14)" }} aria-hidden />
          <div className="space-y-8">
            {TIMELINE.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <div className="relative flex items-start gap-5">
                  <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-charcoal" style={{ border: "1px solid rgba(36,48,55,0.14)", boxShadow: SHADOW_STACK }}>
                    <span style={i === TIMELINE.length - 1 ? { color: ORANGE } : undefined}>{s.icon}</span>
                  </span>
                  <div className="flex flex-1 flex-wrap items-baseline justify-between gap-x-4 gap-y-1 pt-1">
                    <div className="max-w-lg">
                      <h3 className={`${hed} text-lg text-charcoal`}>{s.title}</h3>
                      <p className="mt-1.5 text-[0.95rem] leading-relaxed text-charcoal/58">{s.body}</p>
                    </div>
                    <span className="rounded-full border px-3 py-1 font-mono text-[0.58rem] uppercase tracking-[0.16em]" style={{ borderColor: `${ORANGE}2a`, color: ORANGE }}>
                      {s.when}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── 4 · APPROACH — process steps + credentials card ── */

const STEPS = [
  { n: "1", name: "Audit & takeover", desc: "Before anything runs, we take the account apart and fix what's broken. Most of the wasted spend hides here." },
  { n: "2", name: "Strategy & offer", desc: "Channel mix, budget and the offer itself, built around your margins rather than vanity metrics." },
  { n: "3", name: "Build & launch", desc: "Creative, landing pages and campaigns shipped fast, tested properly." },
  { n: "4", name: "Scale & update", desc: "Double down on what works, kill what doesn't, and keep you posted in plain English. Never homework." },
];

const CREDS = [
  { label: "One team owns your account", sub: "No outsourced hand-offs, no runaround" },
  { label: "Month-to-month", sub: "No long lock-ins, we earn the renewal" },
  { label: "You own everything", sub: "Accounts, pixels and pages, handed over on exit" },
  { label: "Wellington, Aotearoa", sub: "Local and reachable" },
];

export function Approach() {
  return (
    <section id="process" className="border-t border-charcoal/10 bg-paper py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <Reveal>
            <h2 className={`${hed} text-[clamp(1.9rem,4vw,3rem)] leading-tight tracking-[-0.03em] text-balance text-charcoal`}>
              A clear process, nothing hidden.
            </h2>
          </Reveal>
          <div className="mt-10 space-y-1">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.07}>
                <div className="group flex gap-6 rounded-xl p-5 transition-all duration-400 ease-premium hover:bg-white hover:shadow-[var(--shadow-soft)]">
                  <span className="mt-0.5 font-mono text-sm font-bold text-orange shrink-0">{s.n} /</span>
                  <div>
                    <h3 className="text-lg font-extrabold tracking-tight text-charcoal">{s.name}</h3>
                    <p className="mt-1 leading-relaxed text-charcoal/58">{s.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.15}>
          <div className="rounded-[1.6rem] border border-white/8 bg-charcoal/10 p-1.5 shadow-[0_40px_80px_-24px_rgba(36,48,55,0.22)]">
            <div className="relative isolate overflow-hidden rounded-[calc(1.6rem-6px)] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
              <img
                src="/brands/emporom/wave2.jpg"
                alt="Sweeping light-trail curve over the harbour at dusk"
                className="absolute inset-0 h-full w-full object-cover -z-10"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-charcoal/96 via-charcoal/82 to-charcoal/58" />
              <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-orange/45 to-transparent" />
              <div className="grain absolute inset-0 -z-10 opacity-[0.025]" />

              <div className="flex items-center gap-2 px-7 pt-6 pb-4 border-b border-white/8">
                <span className="h-1.5 w-1.5 rounded-full bg-orange shadow-[0_0_8px_#ff5b05]" />
                <span className="font-mono text-[0.58rem] uppercase tracking-[0.2em] text-white/40">How we operate</span>
              </div>

              <div className="p-7 space-y-5">
                {CREDS.map((item) => (
                  <div key={item.label} className="group flex items-start gap-3.5">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-orange/20 text-orange transition-colors duration-300 group-hover:bg-orange group-hover:text-white">
                      <Check size={10} />
                    </span>
                    <div>
                      <p className="font-semibold text-white leading-snug">{item.label}</p>
                      <p className="mt-0.5 eyebrow text-white/40">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="px-7 pb-6 pt-2 border-t border-white/8">
                <p className="font-mono text-[0.56rem] uppercase tracking-[0.18em] text-white/30">Wellington, Aotearoa</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
