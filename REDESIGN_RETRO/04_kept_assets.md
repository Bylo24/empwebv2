# 04 · Things from Attempt 1 that ARE correct — keep these

The revert kept these intact. They should survive into the new attempt.

---

## Repo / Git state

- **Branch:** `main-redesign-sandbox` (off `main`, off `Bylo24/empwebv2`). Local-only. Never pushed.
- **Live `/` route:** Completely untouched throughout the entire chat. Production is safe.
- **Backup of pre-work state:** `~/Documents/GitHub/empwebv2-backup/` — frozen clone with `origin` removed. If anything goes sideways, this is the safety net.

---

## Files to keep

| File | Why |
|---|---|
| `src/components/redesign/Logo.tsx` | The 4-point sparkle SVG mark + wordmark component. Brand-aligned with Logan's brand image. Three variants: `mark` / `full` / `wordmark`. Useful in any future direction. |
| `public/100-small-nets.html` | 214KB self-contained SPA — the Real Estate deck. Copied from `~/New Real-estate offer/index.html` during Attempt 1. Logan asked to wire this in. Now served at `emporom.media/100-small-nets.html`. Featured offer for the current sprint. |
| `vercel.json` SPA rewrite | Already configured. Static `.html` files in `public/` are served before the SPA rewrite kicks in — confirmed by checking that `dist/100-small-nets.html` appears in build output. |
| `src/pages/IndexRedesign.tsx` (current reverted state) | Imports baseline components from `redesign/` folder, no `.redesign-root` wrapper. Renders byte-identical to live `/`. Clean foundation to rebuild from. |
| `src/App.tsx` route entry for `/redesign` | Already wired. Don't remove. |

---

## Patterns / decisions that were right

| Decision | Why keep |
|---|---|
| **Sandbox-via-route** (`/redesign` instead of touching live `/`) | Allowed every iteration to be visible to Logan without risking the production site. This pattern should continue. |
| **`.redesign-root` CSS-scoping pattern** | When you DO add scoped overrides for the redesign, the pattern of nesting them under `.redesign-root { ... }` keeps live `/` styles isolated. Re-introduce this if/when scoped styling is needed (currently removed since /redesign mirrors /). |
| **Copy 100-small-nets.html into `public/`** instead of linking to a separate Vercel deployment | One domain, one deploy, cleaner. Keep. |
| **Real client roster verified against memory** | The marquee names (Fantail Services, Home & Beyond, 2in1 Cleaners, Welly Lawns, Bloom HQ, Howard & Co, Tall Poppy Kāpiti, Kombucha Bros, Little City Kombucha, Carnivore Crate, Ultra Fast Pest Control, SIT Hamilton) are real and verified. Use these in any new attempt. |

---

## Tone-of-voice findings (validated against humanizer / human-tone / stop-slop skills)

These voice principles passed Logan's check and should carry forward:

- No em-dashes in prose copy (decorative eyebrow dashes are fine)
- Peer-tone NZ voice, never corporate-formal
- Real numbers, never inflated
- Active voice, "you" beats "people"
- Short sentences mixed with one longer one for rhythm
- "We" used sparingly when it actually means Logan + Sam, not "the company"
- Single CTA per section, never three

---

## Skills setup that was useful

| Skill | Verdict |
|---|---|
| `design-mirror` | **Highest leverage — use first in new attempt.** Logan installed this; it's literally for mirroring a reference site's visual style. Should be the FIRST skill invoked after collecting reference URLs. |
| `premium-web-design` | Useful for the "what's a structural DNA" framework and the catalogue of structural concepts. But its 3D-Spline mandate doesn't fit an editorial brand — be selective. |
| `humanizer` / `human-tone` / `stop-slop` | All three are good and overlap. Apply for any copy audit. Already used in Attempt 1 to find em dashes and AI vocab. |
| `frontend-design` | Useful for the "avoid generic AI vibe" reminders. Apply as a final audit check, not as a primary direction-setter. |
| `schematic-animation` | Useful IF the new direction calls for a Fantail-HVAC-style scroll schematic. Don't apply by default — Logan saw the result of applying it (the GrowthSystem section) and it felt forced for a marketing agency. |
| `ui-ux-pro-max` | Python bug at line 437 of `design_system.py` — patched during Attempt 1. CLI now works. Data CSVs (typography, ux-guidelines, ui-reasoning) are useful reference. But its top-level `--design-system` recommendation for "marketing agency editorial" returned generic pink Brutalism — treat its output as one data point, not a directive. |

---

## File state at handover

```
~/Documents/GitHub/empwebv2/
├── src/
│   ├── components/
│   │   └── redesign/
│   │       ├── AboutUs.tsx          (reverted to mirror /)
│   │       ├── CTA.tsx              (reverted)
│   │       ├── FAQ.tsx              (reverted)
│   │       ├── Footer.tsx           (reverted)
│   │       ├── Hero.tsx             (reverted)
│   │       ├── Logo.tsx             ✅ KEEP — Attempt 1 sparkle SVG component
│   │       ├── Navbar.tsx           (reverted)
│   │       ├── PersonalBrandVisual.tsx (reverted)
│   │       ├── Process.tsx          (reverted)
│   │       ├── RotatingWord.tsx     (reverted — unused in baseline)
│   │       └── Services.tsx         (reverted)
│   ├── pages/
│   │   └── IndexRedesign.tsx        (reverted — mirrors live / route exactly)
│   └── index.css                    (restored to original 199 lines)
├── public/
│   └── 100-small-nets.html          ✅ KEEP — RE deck, copied from ~/New Real-estate offer/
├── REDESIGN_RETRO/                  ✅ THIS FOLDER — the handoff
│   ├── README.md
│   ├── 01_attempts_summary.md
│   ├── 02_brand_truths.md
│   ├── 03_dont_repeat.md
│   ├── 04_kept_assets.md            (this file)
│   └── 05_next_chat_starter.md
└── ... (rest of repo unchanged)
```

The components currently labelled "reverted" are byte-identical copies of the live `/` route's components. They render the existing live site if you visit `localhost:8081/redesign` (or the equivalent Vercel preview when the branch is pushed).
