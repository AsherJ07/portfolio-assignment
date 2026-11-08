# Testing Evidence

This document records observed results as the portfolio is built. It distinguishes completed checks from planned or blocked verification. Dates and times use America/Indiana/Indianapolis.

## Environment

- Date: 2026-11-08
- Local OS: macOS
- Node.js: `v22.16.0`
- npm: `10.9.2`
- Framework: Next.js `16.4.5`, React `19.3.1`, TypeScript `6.0.3`
- Browser used for visual QA: Google Chrome
- Current verified UI commit: `a4f68ef`

## Automated quality checks

Run after the first portfolio UI and responsive fixes:

| Command | Observed result |
| --- | --- |
| `npm run lint` | Passed with zero warnings under `--max-warnings=0` |
| `npm run typecheck` | Passed with strict TypeScript and no emitted files |
| `npm test` | Passed: 3 test files, 4 tests |
| `npm run build` | Passed; `/`, custom not-found handling, `/api/health`, and `/icon.svg` generated successfully |
| `git diff --check` | Passed; no whitespace errors |

Tests currently cover:

- health endpoint status and JSON response;
- a minimum of three case studies with non-empty problem, contribution, result, technologies, and evidence;
- human-readable skill context without proficiency percentages;
- mobile navigation open/close state, Escape behavior, and focus restoration.

## Responsive visual checks

The production build was inspected with explicit browser viewport overrides. The first pass revealed and fixed a metric-label collision, hero-type breakpoint jumps, and an undersized footer target.

| Viewport or boundary | Observed result after fixes |
| --- | --- |
| `375x812` | Mobile navigation visible; CTA buttons stack; no horizontal overflow; project card reflows to one column |
| `768x1024` | Tablet layout uses one-column hero and mobile navigation; no horizontal overflow |
| `1440x900` | Desktop navigation and two-column hero visible; no horizontal overflow; project intro and visual use two columns |
| `479`, `480`, `481` px wide | No overflow or layout discontinuity around the narrow-layout breakpoint |
| `767`, `768`, `769` px wide | Navigation changes intentionally; hero scale changes by only 2.5px across the boundary; no overflow |
| `991`, `992`, `993` px wide | Project cards change from one to two columns without a font-size jump or overflow |
| `1024`, `1280`, `1440` px wide | Desktop layouts remain bounded by the maximum content width |

Additional observed measurements:

- widest desktop metric has a 16px gap before its label;
- mobile menu link heights are 52-53px;
- footer `Back to top` control is 44px high;
- first project card reports no internal horizontal overflow;
- heading order begins `h1`, then section `h2`, then item `h3` without a skipped level.

## Visual and interaction evidence

- Desktop hero inspected at `1440x900` after the final metric fix.
- Desktop selected-work section inspected after smooth-scroll settled; card border, split layout, text wrapping, and original SVG visual rendered cleanly.
- Tablet hero and evidence panel inspected at `768x1024`.
- Mobile hero, open navigation, and selected-work entry inspected at `375x812`.
- Mobile menu exposed the correct expanded state and four reachable navigation links.

## Known limitations and pending verification

- Contact form has not yet been implemented or connected to a delivery provider.
- Email and LinkedIn details shown locally require student confirmation before public deployment.
- Project repository/demo links and real screenshots have not been supplied; current visuals are intentionally labeled illustrations.
- Automated accessibility tooling and the full manual keyboard/zoom/contrast pass remain pending.
- External-link validation, spelling/grammar audit, console-log audit, and image/link crawler remain pending.
- Lighthouse scores have not yet been collected.
- Local multi-stage container build and health checks remain pending.
- Private GitHub trigger, Cloud Run rollout, public HTTPS routes, and production form delivery remain pending.

These pending checks prevent any claim that the assignment or Excellent-level rubric is complete.
