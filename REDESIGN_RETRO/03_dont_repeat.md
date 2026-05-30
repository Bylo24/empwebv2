# 03 · Anti-patterns. Things this chat tried that explicitly failed.

The "active format" list. Each entry is **DON'T** + the specific reason. If a new chat catches itself about to do one of these, stop.

---

## Typography — don't repeat

| ❌ Don't | Why it failed |
|---|---|
| Use **General Sans** (Fontshare) | Logan called the result "bare bones and gross." Reads as AI template — every AI-built premium site uses it. |
| Use **Fraunces** with `WONK=1` or `SOFT=100` axes | Experimental variable axes that render inconsistently. Logan said "font is still not good." |
| Use **Manrope** | Logan rejected it. Also on the premium-web-design skill's effective blacklist class (Inter / Poppins / Montserrat / Raleway / Space Grotesk / Outfit). |
| Use **Playfair Display** | "Wedding website" cliché serif. Overused. |
| Use **Tenor Sans** | Logan said "too cold." Geometric all-caps but lacks warmth. |
| Use **Outfit / Inter / Poppins** | premium-web-design skill blacklist. Will read as AI template. |
| Use **Geist** or **Geist Mono** as primary | Logan rejected as "horrible" despite Vercel pedigree. |
| Use **Instrument Serif** | Logan rejected. Currently popular on Awwwards but Logan didn't connect with it. |
| Use **Newsreader italic** for accent | Borrowed from Fantail template — Logan recognised the lift. |
| Use **Inter Tight** as primary body | Allowed by skill but Logan still said "not good." Doesn't carry the brand. |
| Swap a font globally without Logan seeing a sample first | Five iterations of this failed. **Always show typographic specimen before sweeping the codebase.** |
| Apply variable-font axes for visual character | The WONK / SOFT axes on Fraunces caused the "horrible" feedback. Stick to standard weights + italic. |

---

## Structure — don't repeat

| ❌ Don't | Why it failed |
|---|---|
| Clone the Fantail HVAC premium template structure | Logan recognised it. He BUILT Fantail with Claude. Don't ship a competitor's clothes back to him. |
| Build **MORE than one pinned-scrollytelling section** per page | premium-web-design skill explicitly says one pinned narrative per page max. Attempt 1 had two (GrowthSystem + MoneyRip). |
| Layer **multiple "wow moments"** on top of an unconfirmed direction | Money Rip + Schematic + SideIndex + ScrollProgress + paper grain all built before Logan signed off on the base aesthetic. None of them composed cohesively. |
| Use the standard **logo-left / nav-centre / CTA-right** top nav | premium-web-design skill calls this the "easy default" — after three sites it reads as the agency's signature. |
| Use **§ section numbers + "DRAWING REV.A 2026" stamps** | Borrowed wholesale from the Fantail showcase page. Felt like template furniture. |
| Add a **SideIndex / fixed TOC** for marketing sites under 5000 words | Pretentious. TOCs belong on docs, blogs, long reads — not a 7-section marketing page. |
| Invent a **conceptual metaphor** ("Empora Ledger No. 01," "annual report," etc.) without Logan asking for one | Logan didn't ask for a metaphor. I invented one to justify aesthetic choices. The metaphor never landed. |

---

## Animation / interaction — don't repeat

| ❌ Don't | Why it failed |
|---|---|
| Use `filter: drop-shadow()` driven by scroll progress on complex SVGs (200+ paths) | The MoneyRip $100-bill tear used this. Logan called the section "broken and super clanky." Forces a fresh compositing layer per scroll frame. |
| Use `mix-blend-mode: multiply` on a position-fixed full-viewport overlay | The paper-grain texture used this. Forces the entire page into a separate composite layer — major perf hit on every scroll. |
| Stack **11+ staggered reveal classes** on Hero load | I orchestrated `r-eyebrow / r-line-1 / r-line-2 / r-line-3 / r-line-4 / r-sub / r-cta / r-hairline / r-strip-1 / r-strip-2 / r-strip-3 / r-margin` with timed setTimeouts. premium-web-design / ui-ux-pro-max skills both call for 1–2 reveal events max per view. |
| Use `backdrop-filter: blur(20px) saturate(1.4)` on the Navbar | Saturation on a blur doubles GPU cost on every scroll. Keep blur ≤ 12px and skip saturation. |
| Store scroll progress in **React state** and trigger re-renders for animation | First MoneyRip implementation did this. Caused the "clanky" feedback. CSS custom-property pattern (`el.style.setProperty('--p', value)`) is the only acceptable pattern for scroll-driven animation. |
| Build the **money-rip / bill-tear** wow moment as an SVG recreation | Logan asked specifically for a real high-resolution NZ $100 banknote image (Series 7, Sir Ernest Rutherford). My SVG recreation of the US $100 was rejected. **Need a real RBNZ-supplied or commercial-licensed image before building this.** |

---

## Content / copy — don't repeat

| ❌ Don't | Why it failed |
|---|---|
| Fabricate stats (retainer counts, ad spend volumes, tenure) | "12+ retainers · $1.4M+ in managed ad spend · 5 mo avg tenure" was made up. Real: 5 active retainers. |
| Use em dashes in prose copy (decorative eyebrow dashes are different) | Logan's writing rules explicitly forbid em dashes. Found and removed 8 in-prose em dashes during the audit pass. Keep them out from the start. |
| Use the rejected AI vocabulary (leverage / synergy / streamline / empower / etc.) | Audited and found 3 instances of "leverage." Replaced with concrete phrasing. See `02_brand_truths.md` for the full rejected list. |
| Open with "I hope this email finds you well" / corporate openers | Logan's tone is NZ-direct peer. Skip the throat-clearing. |
| Force rule-of-three cadence ("Built for X, Y, and Z") | Comes across as AI when forced. Vary cadence — twos, fours, or single statements work better. |
| Use "we believe..." / "our mission is..." | Logan's tone explicitly rejects mission-statement copy. State what you do, not what you believe. |
| Use **boastful** language ("award-winning," "industry-leading," "transformative") | NZ tone is understated. "6 enquiries in 5 weeks" lands better than "EXPLOSIVE GROWTH." |

---

## Workflow — don't repeat

| ❌ Don't | Why it failed |
|---|---|
| Iterate on a design direction WITHOUT 2–3 reference URLs from Logan | Root cause of every failed iteration. Get the references first. |
| Apply 4+ skills additively in one pass | Their guidance conflicts. The output becomes a smoothie of compromises. Pick one skill, apply, validate, then layer. |
| Add features (wow-moments, sections, animations) before Logan signs off on the BASE direction | Compounded complexity hides whether the foundation is right. |
| Trust GPT-style stats / numbers from memory without verification | Memory facts are point-in-time. "12+ retainers" was an inflated guess. Always check the actual memory file or ask Logan. |
| Skip the design-review round and go straight to code | Should have shown wireframes, hero comps, font specimens FIRST. |
| Pivot the visual direction mid-conversation without asking | I pivoted to dark/Playfair after the first hero rejection, then back to cream, then to Fraunces, etc. Each pivot was unauthorised. Ask before pivoting. |
| Pretend a Spline / fair-use Wikipedia image is licensed for the deployed commercial site | The classifier correctly blocked me from downloading the Wikipedia NZ $100 image because it's fair-use only. Get a licensed image (from the user, Unsplash commercial, or RBNZ's permission page) before building around it. |

---

## Skill-stack — don't repeat

| ❌ Don't | Why it failed |
|---|---|
| Invoke `using-superpowers` skill | Meta-skill that mandates invoking other skills before every response — recursive trap. |
| Apply `3d-web-experience` skill to an editorial agency site | Spline / WebGL for a marketing brand reads as showing off, not premium. Skip. |
| Apply `glassmorphism` design system | Opposite aesthetic to anything Logan's brand calls for. |
| Apply `Bold` design system (Archivo Black) | Conflicts with the refined direction Logan's brand spec calls for. |
| Apply `premium-web-design`'s Spline-mandate to a non-3D project | Skill says "every site built with this skill features 3D" — that's a default it warns about elsewhere. Editorial brands can skip 3D. |
| Apply UI-UX-Pro-Max's first design-system recommendation blindly | Its first output for "marketing agency editorial annual report" returned pink-pastel Brutalism + Playfair + Inter. That's its template, not Empora's brand. |
