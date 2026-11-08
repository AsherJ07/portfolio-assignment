# Original Portfolio Build Plan

**Created:** 2026-11-08 15:44 EST  
**Status:** Original plan - preserve unchanged  
**Owner:** Asher Javaid  
**AI platform:** Codex desktop app

## 1. Scope

Build, verify, document, and prepare for deployment an employer-ready personal portfolio that meets the Excellent-level requirements in the supplied MIS 58710 IA 3 rubric. The application will be a dynamic, framework-based web app, not a static HTML site. It will be containerized for Google Cloud Run and connected to a private GitHub repository so pushes to the selected deployment branch trigger a redeployment.

The in-scope product includes:

- a career-tailored landing experience;
- at least three project or achievement mini case studies;
- skills with honest, descriptive evidence of use;
- easy-to-find professional contact links and a validated contact form;
- intentional mobile, tablet, desktop, and intermediate responsive layouts;
- accessibility, performance, resilience, metadata, and error-state work;
- tests, a production build, a local production server, a local container, and deployment evidence;
- the required rules, plans, prompt log, deployment guide, testing evidence, and repository documentation.

The student's reflection is explicitly out of scope and will not be created or edited.

## 2. Evidence reviewed

The plan is informed by, but will not copy into the repository:

- the assignment instructions Markdown file, which establishes the framework, private GitHub, Cloud Run, deployment-trigger, plan, rules-file, prompt-log, archive, and submission requirements;
- the four-page assignment rubric PDF, especially its Excellent descriptors for career-tailored case studies, deliberate deployment work, iterative prompting, responsive polish, a distinctive professional identity, evolved rules/plans, and a working contact form;
- the current product-management/business-analytics resume, used as the primary source for positioning, experience, achievements, and potential case studies;
- the earlier data-analytics resume, used to cross-check earlier experience and academic-project descriptions;
- the unofficial graduate transcript, used only to confirm coursework and academic context.

No source document will be added to the repository or submission archive.

## 3. Assumptions

- Next.js with TypeScript is the preferred starting stack because it satisfies the dynamic-app requirement, supports server route handlers for the contact form and health check, and has a production server suitable for Cloud Run.
- The primary audience is recruiters and hiring teams for product management, technical product management, product analytics, and business/data analytics roles. This is inferred from the latest resume and must be confirmed by the student before final copy approval.
- The visual direction will be sleek, modern, spacious, and low-clutter. A restrained Swiss/editorial grid with data-inspired details will be used instead of a generic portfolio template.
- Resume claims may be used as supplied, but no new metrics, outcomes, links, testimonials, or personal claims will be inferred.
- A professional photo is optional. The first version can use an original code-native visual focal point so work is not blocked by a missing portrait.
- Where real screenshots or repository/demo links are unavailable, the site will use an honest, clearly illustrative visual treatment and omit unavailable links rather than inventing them.

## 4. Student decisions needed

These decisions are not blockers for the initial local implementation, but they are blockers for truthful final content or deployment:

1. Confirm target role priority: product management/technical product management, product analytics, data analytics, or a deliberate combination.
2. Confirm the preferred public email address. The supplied resumes contain two different addresses.
3. Confirm whether the supplied LinkedIn profile URL may be published.
4. Confirm whether phone number and current location should remain private or appear publicly. Default: omit phone number and show only a broad location if useful.
5. Supply or approve repository/live-demo links for featured work where available.
6. Supply project screenshots if preferred; otherwise approve original illustrative visuals that are explicitly not presented as screenshots.
7. Approve the featured case-study set and wording, especially material derived from employer or client work.
8. Select and authorize the contact-form delivery mechanism and destination. A provider requiring credentials will use environment variables only.
9. Identify the private GitHub repository, deployment branch, GCP project, billing account, region, and preferred CI/CD mechanism before external setup.
10. Approve any Cloud Run settings that can create ongoing cost and confirm when the service may be made public.

## 5. Proposed information architecture

The initial product will be a polished single-page narrative with durable section anchors and supporting framework routes:

- `/` - hero, positioning, selected impact, case studies, experience/education context, skills, and contact;
- `/projects/[slug]` - focused, directly navigable case-study pages if the available evidence supports useful detail;
- `/api/contact` - server-side validation, spam controls, and configured message delivery;
- `/api/health` - lightweight deployment health response;
- framework-provided not-found handling with a custom polished 404 experience.

Navigation will reach every major section and work with mouse, keyboard, touch, direct anchors, direct route entry, and refresh.

## 6. Content strategy and data needs

### Positioning

Proposed working direction: a product and analytics professional who combines computer science depth, customer discovery, experimentation, and data/AI systems to turn ambiguous problems into measurable products. Final wording requires student approval.

### Candidate featured case studies

The strongest initial candidates from the latest resume are:

1. Cloudflare WARP diagnostic analysis - product requirements, customer discovery, competitive research, AI diagnosis evaluation, rollout, and operational impact.
2. Google creator intelligence platform - product/data leadership, large-scale creator analysis, recommendation delivery, and stakeholder communication.
3. Multilingual AI fact-checking research - data pipeline leadership, prompting-strategy evaluation, multilingual robustness/bias analysis, and peer-reviewed publication.
4. Softaims lead-targeting analytics - experimentation, regression analysis, customer profiling, team leadership, and outreach outcomes.
5. Selected academic product/data work - AI Fashion Trend Radar, market expansion analysis, or CampusConnect, depending on available evidence and links.

Each published case study must separate context/problem, constraints, the student's role, approach/contribution, technologies, result/learning, visual evidence, and verified links.

### Skills

Skills will be grouped by demonstrated context rather than unsupported percentages. Example indicator language includes `Used in production`, `Applied in graduate coursework`, `Used across multiple projects`, and `Currently developing`. Evidence will come only from the supplied resumes, transcript, and later student confirmation.

### Missing content

- verified project URLs and demos;
- project screenshots or permission to use illustrative visuals;
- preferred public contact details;
- contact-form destination/provider;
- optional headshot and downloadable resume choice;
- final role priority and approved value proposition.

## 7. Technical architecture

- **Framework:** current maintained Next.js release available at implementation time, App Router, strict TypeScript.
- **Rendering:** server components by default; client components only for necessary navigation, form, and interaction state.
- **Styling:** custom CSS with documented design tokens. Avoid a large runtime UI library unless evidence shows it is needed.
- **Content model:** typed local data modules for projects, experience, education, and skills so content remains auditable and reusable.
- **Forms:** shared validation schema for client and server, accessible field errors, pending/success/failure states, honeypot and rate-limit strategy, provider adapter configured through environment variables.
- **Images:** local optimized assets and code-native visuals where practical; explicit dimensions and meaningful alternative text.
- **Testing:** unit/component tests for content and interactions, API tests for contact and health behavior, automated accessibility checks, end-to-end smoke tests, and scripted link/image checks.
- **Operations:** standalone production output where appropriate, multi-stage Dockerfile, non-root runtime, health endpoint, `.dockerignore`, CI quality gates, and branch-triggered Cloud Run deployment.

## 8. Visual system

The chosen direction adapts the generated page-specific UI guidance rather than accepting its generic master recommendation:

- spacious Swiss/editorial grid with crisp alignment and substantial white space;
- high-contrast neutral foundation with a restrained data-blue primary and a warm accent used sparingly;
- modern sans-serif typography with a technical mono accent only for labels or evidence, not long body text;
- compact evidence chips, thin rules, subtle depth, and original data-oriented visuals;
- minimal motion limited to useful state transitions and short reveal effects, all disabled or simplified under `prefers-reduced-motion`;
- no invented testimonials, decorative proficiency percentages, carousels, gratuitous gradients, or visual clutter.

Exact color and type tokens will be contrast-tested before implementation is considered stable.

## 9. Implementation phases

### Phase 0 - Repository and audit trail

**Current state:** in progress at plan creation.

- preserve this original plan unchanged;
- create and maintain `docs/prompt-log.md`;
- record genuine later plan revisions as new files;
- establish ignore rules and dependency/security conventions;
- make a documentation-first initial commit.

### Phase 1 - Application foundation

**Proposed.**

- scaffold Next.js with strict TypeScript and reproducible dependency lockfile;
- define scripts for lint, typecheck, test, build, and end-to-end checks;
- add typed content, global tokens, semantic layout, metadata, favicon/mark, 404, and health route;
- add unit and smoke-test foundations.

### Phase 2 - Portfolio experience

**Proposed.**

- implement accessible header, skip link, mobile menu, hero, case-study structure, skills, experience/education context, and contact area;
- create honest illustrative project visuals until real screenshots are available;
- implement deliberate responsive layouts around content-driven breakpoints;
- add reduced-motion-safe interaction polish.

### Phase 3 - Contact delivery and content approval

**Requires student decisions.**

- finalize preferred contact details, target-role emphasis, project set, links, and screenshots;
- connect the server route to the approved delivery provider;
- test success, provider failure, validation, spam mitigation, and network/error feedback end to end.

### Phase 4 - Quality verification

**Proposed.**

- run lint, typecheck, unit/component tests, production build, security audit, and production-server smoke tests;
- test links, images, direct routes, 404 behavior, hydration, and browser/server console output;
- run automated accessibility checks and a manual keyboard/focus/semantics/contrast pass;
- inspect at `375x812`, `768x1024`, `1440x900`, and widths around every breakpoint;
- run production Lighthouse and target 90+ in Performance, Accessibility, Best Practices, and SEO;
- record observed evidence and limitations in `docs/testing.md`.

### Phase 5 - Container and deployment

**Requires student authorization for external resources and any cost exposure.**

- build and run the multi-stage container locally and verify the health endpoint;
- document deliberate Cloud Run CPU, memory, concurrency, timeout, scaling, access, variables, and cost/latency tradeoffs;
- configure least-privilege GitHub-triggered deployment to the confirmed GCP project and branch;
- observe a successful deployment trigger, inspect logs/status, and test the public HTTPS URL and direct routes;
- document setup, rollback, logs, verification, and ongoing availability in `docs/deployment.md`.

### Phase 6 - Final audit and submission preparation

**Proposed.**

- complete a rubric-by-rubric evidence audit;
- verify repository cleanliness and secret scanning;
- create a clean archive that excludes source documents, dependencies, caches, build output, and credentials;
- provide a factual handoff with verified URL, evidence, remaining student actions, and Cloud Run availability/cost reminders.

## 10. Risks and mitigations

| Risk | Impact | Mitigation |
| --- | --- | --- |
| Missing project links/screenshots | Weakens visual and evidence quality | Use honest illustrative visuals initially; request verified links and screenshots before final approval |
| Employer/client confidentiality | Could expose inappropriate detail | Publish only resume-level facts unless the student explicitly approves more detail |
| Contact form lacks real delivery | Fails the Excellent contact gate | Do not claim completion until provider success and failure are tested end to end |
| Personal information exposed by default | Privacy risk | Omit phone and choose no public email until the student confirms |
| Unsupported proficiency claims | Reduces credibility | Use descriptive evidence of use, never percentages |
| Dependency or client-JS bloat | Performance regression | Prefer server components, local assets, and minimal libraries |
| Responsive gaps between target widths | Rubric failure | Test content-driven breakpoints and intermediate widths, not only three snapshots |
| Cloud Run or CI misconfiguration | Broken live grading URL or cost | Require explicit project/region/billing choices, use least privilege, cap scaling, and verify rollout |
| Prompt log lacks student evaluation | Loses iterative-prompting points | Add explicit student-annotation requests after meaningful checkpoints without inventing responses |
| Reflection scope drift | Violates project rules | Never create or edit the reflection |

## 11. Test strategy

Testing will produce observed evidence, not only checklists:

- static analysis: lint and strict TypeScript;
- unit/component: content completeness, navigation behavior, mobile menu focus handling, form state and validation;
- API: health response, valid/invalid form payloads, spam controls, provider success/failure behavior;
- build/runtime: reproducible production build, server startup, core routes, direct refresh, and 404;
- accessibility: automated axe/Lighthouse checks plus keyboard order, menu focus, skip link, visible focus, headings, landmarks, labels, errors, contrast, zoom, and reduced motion;
- responsive: required sizes plus intermediate widths around actual breakpoints, checking overflow, overlap, clipping, target size, line length, empty regions, and project-card reflow;
- integrity: internal/external links, image loads and alt text, metadata, console/server errors, and secret/source-document exclusion;
- performance: Lighthouse and bundle/asset review with documented limitations;
- container: image build, non-root process, startup on configurable `PORT`, health response, and shutdown behavior;
- deployment: trigger observation, Cloud Run status/logs, public HTTPS test, direct route refresh, form delivery, and rollback documentation.

## 12. Deployment work

The deployment design will be finalized only after the student confirms the GitHub repository, branch, GCP project, region, billing context, and preferred trigger mechanism. The default recommendation is a private repository with a protected deployment branch, quality checks before deploy, short-lived identity federation instead of a service-account key where feasible, Artifact Registry for the image, and a public Cloud Run service with conservative scaling suitable for a student portfolio.

No repository will be created, no remote push will occur, and no cloud or billable resource will be changed without confirmation of the target and impact.

## 13. Excellent-level acceptance criteria

The project will not be called complete until direct evidence supports all in-scope rubric gates:

- all required sections exist and at least three projects are presented as career-tailored mini case studies with problem, approach, result, strong visuals, and genuine links where available;
- the application is framework-based, stored in a private GitHub repository, served publicly over HTTPS from Cloud Run, and automatically redeployed by pushes to the selected branch;
- the Dockerfile and Cloud Run settings show deliberate work beyond defaults and are explained;
- the prompt log covers the whole build, includes follow-up prompts, source-document use, and student-authored evaluation/annotation without invented reflection;
- responsive layouts are intentionally polished at desktop, tablet, mobile, and intermediate widths;
- the design is distinctive, employer-ready, accessible, consistent, proofread, and free of broken links/images and template residue;
- the project contains the original plan plus genuine later plan revisions and only genuine rules evolution;
- professional links are easy to find and the contact form has validation plus verified success and failure feedback;
- lint, typecheck, tests, production build, local server, local container, accessibility, Lighthouse, and deployed-route verification are recorded with observed results;
- the repository and final archive contain no credentials, source-assignment documents, dependencies, caches, or generated build clutter;
- the public service remains available and unchanged until grading is complete.

