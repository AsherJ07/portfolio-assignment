# Pixel Identity and Release Plan

**Created:** 2026-11-08 16:36 EST

**Status:** Active revision prompted by the student's first visual review and deployment priority

**Relationship to earlier plans:** Preserves `01-original-plan.md` unchanged. This plan supersedes only the visual direction and near-term sequencing in plans 02 and 03; their prompt-control, QA, container, and deployment requirements remain binding.

## 1. Scope

Rework the existing Next.js portfolio into a polished, pixel-inspired experience grounded in the student's earlier portfolio, retain every Excellent-level accessibility and content gate, complete the highest-value local tests, publish the work on a dedicated GitHub branch, and open a professional pull request for student review. Reflection remains out of scope.

## 2. Assumptions

- The earlier portfolio at `/Users/asher/Documents/ChatGPT/Resume` is a visual reference, not a source of automatically approved claims.
- Its strongest reusable cues are the warm paper palette, dark ink, red/blue/lime accents, pixel display type, monospaced body type, hard borders and shadows, game-window framing, and quest/inventory language.
- The existing framework app's truthful case studies, accessible navigation, descriptive skill indicators, contact validation, metadata, and server architecture remain the baseline.
- A pixel identity can remain professional when it is systematic, legible, restrained, and paired with conventional semantics.
- GitHub publication and a reviewable pull request are authorized by the student's direct request. GCP writes still require the unresolved project, region, billing, public-access, and identity decisions required by `AGENTS.md`.

## 3. User decisions needed

1. Review the pull request's visual direction and approve or request revisions.
2. Confirm whether the public Gmail address and LinkedIn URL are approved.
3. Supply or approve genuine repository/demo links and project screenshots if available.
4. Confirm the GCP project ID, region, service/registry names, billing context, public access, and proposed scaling before cloud resource changes.
5. Approve the contact provider, sender identity, destination inbox, and secret-injection approach.
6. Approve a local container runtime if Docker verification remains required on this machine.

## 4. Architecture

- Retain Next.js App Router, strict TypeScript, server-first rendering, standalone Node runtime, health endpoint, and validated contact API.
- Express the new identity primarily through semantic React structure and CSS design tokens; do not add a large animation or component library.
- Use local framework-managed fonts to avoid runtime third-party font requests and layout instability.
- Keep motion limited to state feedback and optional lightweight reveals; render content immediately and fully honor `prefers-reduced-motion`.
- Preserve native links, buttons, headings, landmarks, form controls, direct anchors, and mobile-menu focus management.

## 5. Data and content needs

- Reuse only resume/transcript-supported facts already present in the app.
- Do not carry over unsupported statements, decorative proficiency levels, or extra projects from the earlier static portfolio without verification.
- Retain honest illustrative project visuals until the student supplies real screenshots.
- Keep assignment sources, resumes, transcript, secrets, and private messages outside the repository.

## 6. Implementation phases

### Phase 1 - Evidence and documentation

- Record the student's actual visual feedback and its causal effect on the next iteration.
- Inspect the earlier portfolio's markup, styling, interactions, and assets.
- Save this revision plan before application UI changes.
- Reconcile pixel-art recommendations with web accessibility and performance guidance.

### Phase 2 - Pixel-inspired redesign

- Replace the restrained editorial skin with a cohesive pixel/brutalist token system.
- Add a distinctive game-window hero focal point without blocking access or delaying content.
- Reframe metrics, projects, process, experience, skills, and contact as professional quests/stats/inventory while retaining plain-language headings and descriptions.
- Use sharp borders, consistent offset shadows, intentional accent blocks, and pixel-style decorative SVG/CSS shapes.
- Keep one dominant hero CTA, clear secondary actions, readable line lengths, 16px mobile body text, and at least 44px controls.
- Ensure the contact form, 404, navigation, focus states, and form feedback share the same visual system.

### Phase 3 - Necessary local verification

- Run lint, strict type checking, unit/component/API tests, production build, production dependency audit, and Playwright/axe coverage.
- Test `375x812`, `768x1024`, `1440x900`, breakpoint-adjacent widths, and mobile landscape for overflow and reachability.
- Repeat keyboard navigation, menu focus/Escape behavior, reduced motion, link integrity, 404, contact failure, and console checks.
- Run representative mobile and desktop Lighthouse checks; record variance and limitations honestly.

### Phase 4 - Auditable GitHub handoff

- Commit the accessibility harness and redesigned experience in small coherent commits.
- Add the student-supplied GitHub repository as `origin`, fetch before pushing, and inspect remote history to avoid overwriting work.
- Push `codex/pixel-inspired-portfolio` without force.
- Open a professional pull request with visual rationale, rubric mapping, test evidence, known limitations, and remaining student/cloud actions.

### Phase 5 - Authorized cloud deployment

**Blocked on required GCP decisions.**

- After approval, configure least-privilege branch-triggered deployment.
- Build and test the container where an approved runtime is available.
- Deploy deliberate Cloud Run settings, verify public HTTPS and form behavior, and record the revision, logs, health, rollback, cost, and availability evidence.

## 7. Risks

| Risk | Mitigation |
| --- | --- |
| Pixel styling becomes novelty or clutter | Limit the palette and motifs; preserve hierarchy, whitespace, and conventional content labels |
| Display font harms readability | Reserve it for short headings/labels; use a legible mono/sans body face and responsive sizes |
| Old portfolio contains unsupported claims | Reuse visual language only; retain verified content from the current app |
| Animation delays content or hurts accessibility | No boot screen; immediate rendering; minimal transform/opacity effects; reduced-motion fallback |
| GitHub remote has unrelated history | Fetch and inspect before integration; never force-push |
| Deployment rush bypasses cloud decisions | Complete the PR first; ask for the exact account/region/cost/public choices before writes |
| Token/time limits interrupt work | Prioritize a tested, reviewable branch and preserve evidence at each milestone |

## 8. Tests

Required pre-PR evidence:

- `npm run lint`, `npm run typecheck`, `npm test`, `npm run build`;
- `npm run test:e2e` with axe, responsive overflow, anchors, contact errors, 404, links, and reduced motion;
- production-only high-severity audit;
- manual keyboard/focus and mobile-menu pass;
- required viewport and mobile-landscape checks;
- representative Lighthouse runs with all sub-90 results investigated and documented.

Container, real inbox delivery, GitHub-triggered deployment, and public Cloud Run checks remain required for final completion, not for the initial review PR when blocked by unresolved student-owned inputs.

## 9. Deployment work

The immediate release target is a reviewable GitHub pull request, not an unapproved cloud environment. Cloud deployment will follow `docs/deployment.md` once the student confirms the target project, region, service, registry, public access, scaling, billing context, and secret strategy. The workflow must deploy only after a successful push to the approved deployment branch, never from pull requests.

## 10. Excellent-level acceptance criteria

- The redesign is recognizably tailored to the student's pixel-art preference while remaining employer-ready, uncluttered, responsive, and WCAG-oriented.
- All three projects retain clear context, contribution, result/learning, technologies, visuals, and honest link states.
- Skills remain human-readable and evidence-based rather than decorative percentages or levels.
- Navigation, form, 404, metadata, responsive behavior, reduced motion, and keyboard operation remain functional.
- Prompt history explicitly records what worked, what did not, why, and how this feedback changed the work.
- Automated and manual checks are rerun after the redesign and captured as observed evidence.
- The dedicated branch and pull request are professional, auditable, non-destructive, and ready for student review.
- Final assignment completion still requires the real contact-delivery test, local container evidence, private GitHub push-triggered Cloud Run deployment, and verified public HTTPS URL.
