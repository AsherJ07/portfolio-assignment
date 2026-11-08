# Project Layout and Deployment Evidence Plan

**Created:** 2026-11-08 18:20 EST

**Status:** Active refinement after the student's review of the merged project-evidence layout

**Relationship to earlier plans:** Preserves all earlier plans unchanged. This revision narrows the Fashion Trend Radar presentation and clarifies how the existing container and Cloud Run work will satisfy the rubric's beyond-default deployment criterion.

## 1. Scope

Move the Fashion Trend Radar image into the same split text/media card layout used by the other projects, reduce its visual footprint without cropping the workflow, remove all visible screenshot-source captions without replacement, verify the responsive result, and document the concrete deployment evidence needed for the Excellent rubric level. Reflection remains out of scope.

## 2. Assumptions

- Screenshot authorship text is unnecessary on the public portfolio because the images are already presented within the student's own case studies and have meaningful alt text.
- The Fashion workflow should use the same desktop split-card structure as Creator Intelligence and collapse to the established single-column mobile layout.
- The custom domain example in the rubric is optional because the repository already includes two qualifying beyond-default choices: a hand-tuned multi-stage Dockerfile and deliberate Cloud Run settings.
- Rubric credit depends on implementing and evidencing those choices, not merely proposing them in documentation.

## 3. User decisions needed

- Confirm the actual Cloud Run region, service name, CPU, memory, concurrency, timeout, min/max instances, ingress, authentication, and deployed public URL so the repository can replace proposed settings with an observed deployment record.
- Confirm whether a custom domain is desired; it is not required to satisfy this criterion and may create cost or DNS work.

## 4. Architecture

- Keep the typed screenshot model and Next.js Image optimization.
- Remove the screenshot-only `wide` presentation branch and optionalize captions so illustrations can retain disclosure while authentic screenshots render without visible attribution text.
- Preserve intrinsic dimensions, responsive `sizes`, lazy loading, alt text, and existing card breakpoints.
- Keep the three-stage container, pinned Node runtime, non-root user, health check, standalone output, strict build context, and deliberate Cloud Run configuration.

## 5. Data and content needs

- No new project claims or assets are needed.
- Deployment evidence still needs the student's actual GCP settings, URL, revision, deployment mechanism, and verification outcomes; secrets and private message contents must not be recorded.

## 6. Implementation phases

1. Record this student feedback and plan before code changes.
2. Remove screenshot captions from the project data and conditionally render captions only when present.
3. Remove the Fashion wide-media override and unused CSS.
4. Verify desktop split layout, mobile stacking, image containment, alt text, and no overflow.
5. Run lint, typecheck, unit tests, production build, and browser/axe coverage.
6. Commit, push `codex/refine-project-layout`, and open a focused pull request.
7. After the student provides actual GCP values, update `docs/deployment.md` and `docs/testing.md` with observed settings and live evidence.

## 7. Risks

- **Workflow becomes illegible when smaller:** use `object-fit: contain`, preserve the full aspect ratio, and keep the original image accessible through browser zoom rather than cropping it.
- **Caption removal weakens accessibility:** retain complete alt text; visible captions are not required when they add no user-facing context.
- **Rubric evidence remains only proposed:** clearly distinguish existing implementation from deployed settings and request the exact GCP values needed for verification.
- **Custom domain adds unnecessary scope:** rely on the implemented Dockerfile and deliberate Cloud Run settings unless the student explicitly chooses a domain.

## 8. Tests

- Fashion and Creator screenshots remain present and decode successfully.
- Fashion uses the normal split card on desktop and established stacked card on mobile.
- No screenshot caption text is rendered.
- No horizontal overflow at `1440x900` and `375x812`.
- Axe reports no serious/critical findings.
- Lint, typecheck, unit/component/API tests, production build, and Playwright pass.

## 9. Deployment work

The repository already implements beyond-default deployment work through a pinned multi-stage non-root Dockerfile, minimal standalone runtime, health check, strict `.dockerignore`, and a documented Cloud Run configuration with explicit cost/latency tradeoffs. To earn the rubric credit, record the actual deployed values and verification evidence, and ideally automate main-branch redeployment. A custom domain is optional rather than necessary.

## 10. Excellent-level acceptance criteria

- All project cards share a coherent professional desktop structure and deliberate mobile reflow.
- Authentic screenshots have meaningful alt text and no unnecessary attribution captions.
- The container and Cloud Run choices are implemented, not merely described.
- `docs/deployment.md` explains each non-default choice and tradeoff.
- `docs/testing.md` records the deployed revision, public URL, health/routes/form checks, and observed settings without secrets.
- The follow-up branch and PR remain focused, tested, and reviewable.
