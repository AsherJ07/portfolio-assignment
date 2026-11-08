# Background Band and Deployment Visibility Plan

**Created:** 2026-11-08 18:52 EST  
**Status:** Proposed before implementation

## Scope

- Correct the Background section's cut-out border and surface treatment at large desktop widths.
- Preserve the existing content width, responsive timeline layout, accessibility, and visual tokens.
- Verify that the Fashion screenshot remains in the standard side-by-side project-card layout on the review branch.
- Clarify that the public deployment will not show branch changes until pull request #3 is merged and the `main` deployment trigger completes.

## Assumptions

- The supplied screenshot is from the currently deployed `main` revision rather than the unmerged review branch.
- The Background section should read as a full-width page band, consistent with Work, Approach, and Contact, while its text and cards remain bounded by the shared content container.

## User decisions needed

- No new design decision is required for the contained fix.
- The student must review and merge pull request #3 before the Fashion layout and this border fix can reach the `main` deployment.

## Architecture

- Keep `background-section` on the semantic `section` as the full-width visual band.
- Add an inner `section-shell` wrapper for the heading and two-column background grid.
- Leave the existing breakpoint-driven grid behavior unchanged.

## Data and content needs

- No content changes.
- No new assets or personal claims.

## Implementation phases

1. Refactor the Background section wrapper without changing its semantic heading or content.
2. Add a browser regression assertion that the band spans the viewport while its inner content remains bounded.
3. Run lint, type checking, unit tests, production build, browser checks, and a desktop visual pass.
4. Record results in the prompt log/testing evidence and update pull request #3.

## Risks

- Moving `section-shell` inward could alter mobile gutters if both wrappers receive width rules.
- Full-width borders can reveal horizontal overflow if any child exceeds its container.
- The deployed site can continue to appear unchanged until the branch is merged and redeployed.

## Tests

- Existing lint, strict TypeScript, unit/component/API tests, production build, and Playwright suite.
- Desktop geometry assertion for the full-width band and bounded inner shell.
- Existing Fashion desktop side-by-side assertion and mobile responsive checks.
- Visual inspection at a large desktop viewport.

## Deployment work

- No cloud setting change is required for this UI fix.
- Merge the reviewed branch into `main`, then observe the configured Cloud Build/Cloud Run trigger and verify the resulting public revision.

## Rubric acceptance criteria

- Background section has consistent full-width visual treatment with no clipped or floating border edges.
- Content remains aligned to the global container and responsive at required widths.
- Fashion media remains beside its project narrative on desktop and stacks intentionally on smaller screens.
- No horizontal overflow, accessibility regression, broken content, or undocumented deployment claim.
