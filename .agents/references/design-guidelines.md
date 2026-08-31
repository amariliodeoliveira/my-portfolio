# Design guidelines

## Layout and spacing

- Give centered max-width flex items an explicit full width so auto margins do not shrink them to content.
- Use the Tailwind spacing scale. Prefer multiples of 8px between distinct groups and 4px for tightly related items.
- Keep internal padding no larger than the gap separating sibling groups.
- Verify responsive changes at mobile and desktop sizes in a browser or Playwright test.

## Typography and copy

- Use at least `400` weight for body text and an explicit medium or stronger weight for controls.
- Keep interactive text at least 14px and body line-height around 1.4–1.6.
- Keep product copy in English and use specific, action-oriented labels.
- Preserve the site's concise, professional voice; do not add generic marketing filler.

## Interaction and accessibility

- Prefer semantic HTML and visible, programmatically associated labels.
- Ensure keyboard access, visible focus, accessible names, and adequate non-color state cues.
- Respect reduced-motion preferences for non-essential animation.
- Loading skeletons must preserve layout, remain hidden from assistive technology, and expose a concise status message separately.
- External links opened in a new tab use `noopener noreferrer`.

## Visual verification

- Test behavior and semantics automatically where practical.
- Inspect layout, animation, spacing, and responsive behavior visually; jsdom and class-name assertions do not prove appearance.
