# 05 · Starter prompt for the new chat

Copy-paste this into the new chat as the first message. It loads context cleanly and sets the new attempt up to avoid Attempt 1's mistakes.

---

## ▼▼▼ COPY FROM HERE ▼▼▼

I'm restarting the Emporom Media website redesign in this new chat. The previous attempt failed and I'm starting over.

**First action you must take:**
Read every file in `~/Documents/GitHub/empwebv2/REDESIGN_RETRO/` in this order before anything else:

1. `REDESIGN_RETRO/README.md`
2. `REDESIGN_RETRO/01_attempts_summary.md`
3. `REDESIGN_RETRO/02_brand_truths.md`
4. `REDESIGN_RETRO/03_dont_repeat.md`
5. `REDESIGN_RETRO/04_kept_assets.md`

These document everything the last chat tried, what failed, what to NOT repeat, and what's been kept. Read all of them before forming any opinion on the design direction.

**The single rule you must follow:**
Do not propose a design direction, font, palette, layout, or section structure until I've sent you 2–3 reference URLs of sites I love. The previous chat's failure mode was inventing directions instead of mirroring real references. You have the `design-mirror` skill installed at `~/.claude/skills/design-mirror/` — use it once I send the references.

**Project basics:**
- Repo: `~/Documents/GitHub/empwebv2/` (also at `Bylo24/empwebv2` on GitHub, auto-deploys to `emporom.media` via Vercel on push to `main`)
- Branch in flight: `main-redesign-sandbox` (not yet pushed)
- Sandbox route: `/redesign` — currently byte-identical to live `/`. Build this out without touching live `/` ever.
- Dev server: should already be running on `localhost:8081` from a previous session. If not, `npm run dev` from the repo root.
- Skills installed: many (see README). The relevant ones for this work are `design-mirror`, `premium-web-design`, `frontend-design`, `humanizer`, `human-tone`, `stop-slop`. Skip `3d-web-experience`, `glassmorphism`, `bold`, `using-superpowers`.

**Brand facts you must not re-invent** (full detail in `02_brand_truths.md`):
- Name: Emporom Media (with orange period in wordmark)
- Founders: Logan Hempel (2024) + Sam Howell (late 2025). Porirua / Wellington NZ.
- Brand fonts: Sackers Gothic + Garet (both paid). Don't substitute without showing me a sample first.
- Palette: cream `#f1ede5` / dark `#1a1a1a` / orange `#ed5e1c`.
- Logo: 4-point sparkle SVG already built at `src/components/redesign/Logo.tsx` — keep it.
- 5 active marketing retainers. Do NOT inflate this number.
- Active sprint: signing 3 Wellington real estate agents to the 100 Small Nets retainer.
- 100 Small Nets RE deck is already deployed at `/100-small-nets.html` — featured offer.

**Voice / tone facts** (full detail in `02_brand_truths.md`):
- NZ peer voice. No corporate formality. No motivational-speaker phrasing.
- No em dashes in prose. No AI vocab (leverage, synergy, streamline, empower, seamless, robust, cutting-edge, world-class, etc.)
- Real numbers only.

**What I want you to do, in this exact order:**
1. Read all 5 retro files
2. Confirm you've read them and summarise back to me (under 200 words) what the last chat got wrong
3. Ask me for 2–3 reference URLs of sites I love
4. **Stop. Do not write any code until I send the references.**
5. Once I send references, use the `design-mirror` skill to extract their visual DNA, then propose a single direction (typography sample, color sample, hero comp — IMAGES OR DESCRIPTIONS, NOT CODE) for me to approve before building anything

If you find yourself wanting to write CSS, JSX, or font imports before step 5, stop. That was Attempt 1's main mistake.

## ▲▲▲ COPY TO HERE ▲▲▲

---

## Why this starter exists in this format

Attempt 1's chat had Logan repeatedly say *"this is getting worse"* across 5 different iterations. The fix isn't a different aesthetic direction — it's a different process. This starter enforces:

1. **Mandatory context-load** — new chat reads the retro before forming opinions
2. **No-design-without-references rule** — kills the inventing-a-direction failure mode
3. **Sample-before-sweep** — kills the font-swap-globally-without-validation failure mode
4. **One direction approved before code** — kills the layering-complexity-on-shaky-foundation failure mode

If the new chat skips step 1 or step 4, the same mistakes will repeat. Logan can paste this starter into any future re-attempt to enforce the new process.

---

## After the new chat is running — recommended cadence

Once Logan has sent references and a direction has been proposed and approved:

| Step | Action |
|---|---|
| 1 | Build the hero **only**, in isolation. Show as a single component preview. Logan confirms direction is right. |
| 2 | Build one supporting section (Services OR About — pick one). Show. Logan confirms. |
| 3 | Build the remaining sections one at a time, each with a checkpoint. |
| 4 | Performance audit pass (any animation, any scroll handler, any backdrop-filter) |
| 5 | Copy audit pass against `humanizer` / `stop-slop` / `human-tone` skills |
| 6 | Final review with Logan before merging redesign into `/`

Do not add wow-moments (scroll schematics, money-rip animations, side indexes, scroll-progress bars, custom cursors, paper-grain textures) before step 5. They are easy to add later. Adding them early hid whether the base direction was right.

---

*Last updated: 2026-05-24 at the close of Attempt 1.*
