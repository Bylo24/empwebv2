## Vertical Spacing Audit

### Hero (`src/components/Hero.tsx`)
- Upper padding remains `pt-32` to give breathing room under the fixed navbar.
- Bottom padding was trimmed to `pb-20` so the hero headline no longer floats with excessive buffer, keeping the CTA row closer to the fold while still balanced with the top gap.
- Text blocks are centered with `gap-6` and consistent margins on headings/subheadings to avoid extra whitespace.

### Services (`src/components/Services.tsx`)
- Section padding reduced from `py-24` to `py-20` while keeping `px-6`; this aligns the Cards + tabs more tightly with adjacent sections and avoids a double handful of whitespace before the process module.
- Individual content cards retain the `p-8`/`md:p-12` padding so the interior breathing still feels generous despite the leaner outer frame.

### Process (`src/components/Process.tsx`)
- Outer vertical spacing now `py-20` so the gray background doesn’t push the flow too far apart from the preceding carousel. The internal grid spacing (`gap-6`) stays the same to keep the visual rhythm intact.

### About Us (`src/components/AboutUs.tsx`)
- Section padding normalized to `py-20` + `px-6` and wrapped in `relative overflow-hidden` so the new scroll-triggered `H²` overlay sits over the entire block without affecting layout.
- Paragraph stacking uses `space-y-4` within the `max-w-3xl` container to keep paragraph separation even, and the team grid uses `gap-12` with centered cards.

### FAQ (`src/components/FAQ.tsx`)
- Trimmed from `py-24` to `py-20` to align with the adjacent CTA block, while the accordion entries keep `py-5` spacing so each answer still reads like a contained chunk.

### CTA (`src/components/CTA.tsx`)
- Section spacing dialed down to `py-20` to mirror the rest of the page. `max-w-3xl` still handles horizontal constraints so the copy remains focused in the center.

### Form Screen (`src/components/Prequalifier.tsx`)
- Form container keeps `py-8` with `max-w-4xl` so the multi-step card stays compact, while the returned `Application Received!` state uses centered text + CTA without extra margins.
- Each individual step uses `space-y-6` and form controls with `py-3` so vertical rhythms stay consistent even when switching from selects to checkboxes.

### Footer (`src/components/Footer.tsx`)
- Padding is `py-12` to let the enlarged logo rest comfortably while avoiding a bottom-heavy feel.

This audit ensures each section now shares a deliberate `20`-unit vertical rhythm (with hero and footer providing their own visual anchors) so the page neither feels tight nor overly stretched.
