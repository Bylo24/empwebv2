# Emporom Media Redesign — Retrospective from Attempt 1

**Status:** Attempt 1 abandoned. `/redesign` route reverted to byte-identical copy of live `/`.
**Date abandoned:** 2026-05-24
**Reason:** Direction kept missing despite multiple iterations and skill applications. Logan's feedback over the chat: *"the structure, sizing, fonts, information, animations, reveals, content, positioning, branding etc etc just continues downhill."*

---

## How to use this folder

This is a **handoff for a new chat that will start the redesign over from scratch**. Read these files in order:

1. **`README.md`** (this file) — overview and how to operate
2. **`01_attempts_summary.md`** — every direction Attempt 1 tried, in order, and why each failed
3. **`02_brand_truths.md`** — confirmed brand facts the new attempt should not lose or re-invent
4. **`03_dont_repeat.md`** — the active "do-not" list. Specific anti-patterns to refuse on sight
5. **`04_kept_assets.md`** — things from Attempt 1 that are correct and should survive into the new attempt
6. **`05_next_chat_starter.md`** — a copy-pasteable opener for the new chat that loads all this context cleanly

---

## The single most important takeaway

> **Get 2–3 reference URLs from Logan before writing any code.**

Attempt 1's core failure was inventing a design direction ("Empora Ledger No. 01" editorial annual report metaphor) instead of mirroring real reference sites Logan actually responded to. Every subsequent iteration was a refinement *within the wrong direction*.

The `design-mirror` skill (installed at `~/.claude/skills/design-mirror/`) exists for exactly this. Use it. Ask for the references first. Don't propose a direction yourself.

---

## Quick stats from Attempt 1 (for the new chat to know what was attempted)

| Metric | Count |
|---|---|
| Components written / rewritten | ~13 |
| Font systems tried | 6 (Inter / Tenor Sans + Outfit / Manrope + Playfair / Fraunces WONK + Geist / Instrument Serif + Inter Tight / Cormorant variants) |
| Distinct visual directions attempted | 4 (Fantail clone / dark Playfair / cream Ledger / Instrument editorial) |
| User "this is getting worse" moments | 4 |
| Skills invoked or referenced | 9 (premium-website-design, schematic-animation, frontend-design, ui-ux-pro-max, premium-web-design, plus typeui.sh: refined/clean/paper, plus humanizer/stop-slop/human-tone) |
| Custom wow-moments built then deleted | 3 (GrowthSystem scroll-schematic, MoneyRip $100-bill-tear, RealEstateBubble feature card) |

---

## Where the project stands right now

- **Branch:** `main-redesign-sandbox` (not pushed)
- **`/redesign` route:** byte-identical to live `/` — clean revert
- **`/100-small-nets.html`:** present in `public/`, served at `emporom.media/100-small-nets.html` (Logan asked for this; keep it)
- **`src/components/redesign/`:** only the originals + `Logo.tsx` (sparkle SVG component, brand-aligned, keep)
- **`src/index.css`:** original state, no `.redesign-root` sandbox overrides
- **Live `/` route:** completely untouched throughout this chat
- **Backup clone:** `~/Documents/GitHub/empwebv2-backup/` — frozen at the state before any work began

---

## Skills installed during Attempt 1 (available for new chat)

These are in `~/.claude/skills/`:
- `premium-website-design` (Sam Crawford synthesis — psychology of premium)
- `premium-web-design` (Awwwards-quality React component skill)
- `frontend-design` (distinctive aesthetic, avoid AI vibe)
- `schematic-animation` (scroll-driven SVG — Fantail HVAC reference)
- `scroll-experience` (parallax / cinematic)
- `design-mirror` (replicate visual style of any URL) ← **USE THIS FIRST**
- `web-design-guidelines` (UI compliance review)
- `frontend-dev-guidelines` (React/TS patterns)
- `ui-ux-pro-max` (design intelligence DB — has Python bug, patched in line 437)
- `humanizer` / `stop-slop` / `human-tone` (anti-AI-tell copy editing — in `~/Downloads/Skill File/`)
- `interactive-portfolio`, `3d-web-experience`, `using-superpowers` (installed, not applied)

The relevant skill files in `~/Downloads/Skill File/`:
- `SKILL.md` (Refined design system from typeui.sh)
- `SKILL-2.md` (Clean), `SKILL-3.md` (Paper), `SKILL-4.md` (Bold), `SKILL-5.md` (Glassmorphism)
- `Cold-Email SKILL.md`, `Human Tone SKILL.md`, `Humaniser SKILL.md`, `Stop-Slop SKILL.md`
