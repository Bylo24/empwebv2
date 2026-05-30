# 02 · Brand truths the new attempt MUST NOT re-invent

These are confirmed facts about Emporom Media. Treat them as load-bearing.

---

## Identity

- **Brand name:** Emporom Media (note: NOT "Empora Media" — the company filing uses Emporom; the parent group is Empora Group but the agency is **Emporom**). The period after `Emporom Media.` in the wordmark is part of the brand, orange.
- **Tagline / role in group:** "Acquire" — Emporom is the marketing-acquisition pillar of Empora Group (Emporom acquires, H² builds, Empora Intelligence compounds — per `~/.claude/projects/-Users-loganhempel/memory/reference_true_north_framework.md`).
- **Founded:** 2024 by Logan Hempel. Sam Howell joined late 2025.
- **Location:** Porirua / Wellington, NZ. Operates NZ-wide.

---

## Brand visual system (per Logan's brand image — screenshot supplied early in chat)

| Token | Spec | Notes |
|---|---|---|
| **Primary display font** | Sackers Gothic | Classical geometric all-caps. Paid (Monotype). |
| **Secondary / body font** | Garet | Modern humanist geometric sans. Paid (Indian Type Foundry). |
| **Base V1 — dark** | Near-black (`#1a1a1a` ish) | Used for dark surfaces |
| **Base V2 — cream** | Warm off-white (`#f1ede5` ish) | Used for light surfaces |
| **Secondary accent** | Burnt orange (`#ed5e1c` ish) | Used sparingly, never as a fill across whole regions |
| **Logo mark** | 4-point sparkle / spark with small orange satellite dot above-right + horizontal line ending in a second orange dot | Built as `src/components/redesign/Logo.tsx` — keep this |

### Free Google Fonts substitutes (if Sackers Gothic / Garet cannot be licensed)
- For **Sackers Gothic** (classical geometric all-caps): closest free is **Italiana** (elegant caps) or **Cinzel** (classical caps, slightly more ornate). Beware: many "alternatives" (Tenor Sans, Cormorant) read too cold or too generic.
- For **Garet** (humanist geometric): closest free is **Onest** or **Plus Jakarta Sans**. **Manrope** is rejected by Logan and on the premium-web-design skill blacklist class.

### Fonts that have already been tried and Logan disliked
- Inter (the default — boring)
- Tenor Sans (too cold)
- Outfit (too generic)
- Manrope (too generic)
- General Sans (Fontshare default, reads as AI)
- Newsreader italic (overused luxury serif)
- Playfair Display (the wedding-website serif)
- Fraunces with WONK=1 (experimental variable axis — renders inconsistently)
- Geist (clean but "horrible" per Logan)
- Geist Mono (same)
- Instrument Serif (still "not good")
- Inter Tight (still "not good")

**If the new chat tries a font, it MUST first show Logan a side-by-side typographic sample BEFORE applying it to the site.** Don't sweep across the codebase with a font choice unconfirmed.

---

## Real clients (from `~/.claude/projects/-Users-loganhempel/memory/`)

Current active marketing retainers: **5**
Named clients across the last 12 months (current + recent):

- Fantail Services (Chris Spayes, Wellington HVAC)
- Home and Beyond (Milena Souza, cleaning)
- 2in1 Cleaners (Nitin Sharma)
- Welly Lawns (Nitin Sharma)
- SIT (Riza Ambadar)
- Bloom HQ (Tamara)
- Howard & Co (Kieren — real estate, warm pipeline)
- Kombucha Bros
- Little City Kombucha
- Carnivore Crate
- Ultra Fast Pest Control
- Tall Poppy Kāpiti (Brent Mitchell — 100 Small Nets RE client)
- Water Well / Kohei

Do NOT invent ad-spend volumes, retainer counts, or revenue claims. The real number of active retainers is **5**. Last chat fabricated "12+ retainers · $1.4M+ in managed ad spend" — Logan called this out.

---

## Current offer / pricing (from `~/Downloads/Claude Storage Work/empora_overhaul_2026-05-20.md`)

- **Performance + Clarity Retainer** — Logan's working positioning. Google Ads + monthly strategy + ROI clarity. $850/mo base.
- 100 Small Nets RE pricing: Starter $990/mo · Growth $1,400/mo · Full System $2,000/mo. All + client's own ad spend (which stays in their accounts). No contracts.

---

## Tone of voice (from `~/New Real-estate offer/STRATEGY-NOTES.md`)

**Logan's writing rules:**
- No em-dashes in copy
- No corporate formality
- No motivational-speaker phrasing
- No AI-sounding language
- Conversational, direct, peer-to-peer
- Short sentences. No fluff.
- NZ tone: understated, genuine, self-aware humour welcome

**Specifically rejected vocabulary** (per humanizer / human-tone / stop-slop skills, plus Logan's own rules):
- leverage, synergy, streamline, empower, seamless, robust, cutting-edge, world-class, best-in-class, delve, underscore, foster, garner, holistic, intricate, journey, key, landscape, pivotal, tapestry, testament, transformative, unlock, utilize, valuable, vibrant
- "I hope this email finds you well" / "I came across your..."
- "Just checking in" / "thrilled to announce" / "stoked to share"
- "Whether you're X or Y" false ranges
- Rule of three forced cadence

---

## Sprint context (current as of 2026-05-22)

From `~/.claude/projects/-Users-loganhempel/memory/project_sprint_2026_05_20_to_07_09.md`:

- **Active sprint window:** 2026-05-20 → 2026-07-09 (50 days)
- **Sprint goal:** Sign 3 Wellington real estate agents to the 100 Small Nets retainer
- **Active sales focus:** 100 Small Nets RE offer
- **Other Empora Group businesses (H² + Empora Intelligence) are PARKED until sprint hits target**
- **The Emporom Media site needs to support this** — i.e., the new redesign should emphasise marketing services for ambitious SME operators AND link/feature the 100 Small Nets offer prominently as the current featured initiative.

---

## Existing deployed assets (don't break these)

- **Live site:** `emporom.media` (auto-deployed from `main` branch of `Bylo24/empwebv2` GitHub repo via Vercel)
- **`/100-small-nets.html`** — 214KB self-contained SPA copied into `public/` during Attempt 1. Lives at `emporom.media/100-small-nets.html`. The Real Estate deck. Linked from existing live site. Source of truth is in `~/New Real-estate offer/index.html`.
- **`/v1weblanding`** — separate landing page route, currently live. Don't touch unless asked.
- **`/work-with-us`** — multi-step prequalifier form via FormSubmit. Don't touch.
- **`/upload` + `/video/:slug`** — internal video tool. Don't touch.

---

## Skills + reference docs in the user's environment

| Type | Path |
|---|---|
| Memory | `~/.claude/projects/-Users-loganhempel/memory/` |
| Custom skills | `~/.claude/skills/` (10+ installed, see README) |
| Free skill .md files | `~/Downloads/Skill File/` |
| Empora context archive | `~/Downloads/Claude Storage Work/` |
| The 50-day plan / strategy bible | `~/Downloads/Claude Storage Work/empora_overhaul_2026-05-20.md` |
| 100 Small Nets strategy notes | `~/New Real-estate offer/STRATEGY-NOTES.md` |
| Fantail reference work | `~/Downloads/Fantail HVAC Work/` (template-only — DO NOT clone this) |
| Notion / Miro reference docs | `~/Downloads/Claude Storage Work/notion/`, `~/Downloads/Claude Storage Work/miro/` |
