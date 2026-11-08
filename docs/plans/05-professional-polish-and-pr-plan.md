# Professional Polish and PR Plan

**Created:** 2026-11-08 16:47 EST

**Status:** Active refinement after the student's second visual review

**Relationship to earlier plans:** Preserves the original plan unchanged. Narrows plan 04's pixel-art direction in response to the student's concern that a strongly themed interface could weaken the rubric's employer-ready Professional Polish assessment.

## 1. Scope

Refine the portfolio into a professional, employer-ready interface with a distinctive but restrained color identity; verify the assignment's basic required application checks; then publish the dedicated branch and open the requested pull request before extended audits. Reflection remains out of scope.

## 2. Assumptions

- Professional hierarchy, legibility, content credibility, and accessible interactions take precedence over a literal pixel-art theme.
- Distinctiveness will come from a controlled ink/paper palette, selective coral/blue/lime accents, an evidence-oriented hero panel, original project visuals, and consistent detail—not game metaphors or novelty typography.
- The existing Next.js architecture, truthful content, form pipeline, container files, and documentation remain the baseline.
- Passing lint, strict type checking, unit/component/API tests, production build, and the existing browser suite is sufficient for the pre-PR checkpoint; deeper Lighthouse/container/cloud evidence follows without being misrepresented as complete.

## 3. User decisions needed

- Review and approve the professional visual balance in the pull request.
- Confirm public contact details, project links/screenshots, GCP target and region, billing/public-access settings, container runtime, and contact delivery configuration as previously documented.

## 4. Architecture

- No architectural change: Next.js App Router, strict TypeScript, server-first rendering, standalone runtime, health endpoint, validated contact API, and minimal client JavaScript.
- Visual changes remain CSS/token driven and do not add UI or animation dependencies.

## 5. Data and content needs

- Keep the current resume/transcript-supported content and three substantive case studies.
- Do not introduce content from the old portfolio merely to support a visual concept.
- Retain honest illustrative labels and missing-link states until real evidence is supplied.

## 6. Implementation phases

1. Record the student's second design evaluation and this plan.
2. Remove literal game framing and pixel-style copy from the application.
3. Retain a restrained accent palette, strong evidence panel, original project visuals, and accessible interaction details.
4. Run lint, type checking, unit/component/API tests, production build, and Playwright browser tests.
5. Fix basic regressions, update concise evidence, and create meaningful commits.
6. Fetch the supplied remote safely, push the dedicated branch without force, and open a professional pull request.
7. Continue extended viewport, Lighthouse, container, delivery, and Cloud Run verification after the review checkpoint and required student/cloud decisions.

## 7. Risks

- **Too bland:** preserve selective accents, original visuals, and strong content framing rather than returning to a generic monochrome template.
- **Too themed:** remove game terminology, pixel typography, grid/noise backgrounds, and hard arcade styling.
- **Rushed PR:** require the basic automated suite and production build before pushing; label unresolved external checks honestly.
- **Remote history conflict:** fetch and inspect before pushing; never force.

## 8. Tests

Pre-PR: lint, strict type check, 10 unit/component/API tests, production build, Playwright/axe browser suite, direct anchors, no horizontal overflow, contact failure feedback, 404, reduced motion, and link integrity.

Post-PR/final: extended viewport/manual keyboard pass, production Lighthouse, container build/run/non-root evidence, real contact delivery, GitHub-triggered Cloud Run rollout, and public HTTPS verification.

## 9. Deployment work

The immediate deployment artifact is the review branch and pull request. Cloud writes remain gated by the explicit GCP decisions in `AGENTS.md`; the final deployment workflow must be branch-restricted and verified on public Cloud Run.

## 10. Excellent-level acceptance criteria

- Employer-ready hierarchy and restrained distinctive identity.
- All content, project, skill, form, responsive, accessibility, metadata, documentation, container, and deployment requirements remain represented and honestly tracked.
- The pre-PR automated suite passes and the PR lists remaining external verification clearly.
- The prompt trail shows both design evaluations, why each changed the strategy, and what will be reviewed next.
