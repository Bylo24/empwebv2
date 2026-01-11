# Full site audit

## Visual & layout polish
- **Hero** — vertical rhythm intentionally keeps `pt-32` to clear the fixed navbar while trimming the bottom padding, so the top CTA sits closer to the fold; the highlighted keywords now use a soft orange pill that inherits font sizing.
- **Services / Process / CTA / FAQ** — each section uses `py-20` so the gray Process block, CTA, and FAQ line up with the rest of the feed; the CTA headline uses the same pill-style highlight to match other headers without altering typography.
- **About** — the text reuses the orange keyword treatment sparingly, the paragraph stack is spaced `space-y-4`, and the social icons were removed from this section to keep it focused on the story.
- **Footer** — navigation links, social icons, and the new `logan@emporom.org` email now share the same center column with even gaps so the block feels cohesive, while the logo on the left and the copyright note on the right serve as anchors.

## Interaction & content accuracy
- The FAQ entry for “How do I get started?” now points people toward the “Apply to Work With Us” intake instead of referencing a non-existent Contact Us button.
- Social links (LinkedIn + Instagram) live in the footer, keeping the body copy and about section cleaner and letting the footer serve as the single connection point.
- Work-with-us flow remains the multi-step prequalifier form page with FormSubmit integration; no regressions were introduced.

## Styling & technical hygiene
- `.text-keyword` now grants the orange background pill while inheriting the surrounding font weight and line height, so highlighted words no longer look tiny or bold relative to neighbors.
- `src/index.css` now imports the Inter font before the Tailwind directives, eliminating the `@import must precede all other statements` warning during the Vite build.
- The footer layout uses flexbox `gap` utilities rather than forcing spacing with margin hacks, so the nav/social row stays balanced on wide screens.

## Testing & verification
- `npm run build` (Vite 5.4.19) completes cleanly besides the standard Browserslist notice, confirming the site compiles with the new CSS order and highlight utilities.

## Remaining polish considerations
- Keep monitoring vertical spacing as you add new sections—the 20-unit rhythm now used by most sections can help you spot outliers quickly.
- If you need further animation/refinement on the Work With Us form or hero (scrolling H²), add targeted tests to ensure form state persists across the multi-step flow.
