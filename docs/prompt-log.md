# Prompt Log

This log records the student's real requests or faithful concise summaries, the work produced from them, and the resulting prompt-strategy evolution. Every entry explicitly separates what worked, what did not, why, and how the next prompt or action changed. When the student has not supplied an evaluation, the log says so and requests an annotation instead of inventing one. Assignment text is recorded as a source requirement, never as a student prompt. Secrets and unnecessary personal data are excluded.

## 2026-11-08 15:18 EST - Repository rules confirmation

**Build stage:** Intake and repository audit  
**Student prompt (faithful summary):** Confirm that the repository has an `AGENTS.md` file and provide a brief overview.  
**Action/output:** Verified the 221-line project rules file in the repository and summarized its mission, Next.js preference, documentation requirements, truthfulness constraints, rubric gates, testing expectations, container/deployment requirements, and definition of done. No files were changed.  
**Relevant file:** `AGENTS.md`

**What worked:** The requested repository check was completed directly and established that a detailed project-specific rules file existed before planning. The student did not provide an evaluation of the overview itself, so no positive student judgment is inferred.

**What did not work:** At this stage, the prompt log did not yet exist, so the interaction was only reconstructed when the log was created. The student has not identified any problem with the overview itself.

**Why:** The repository began with only `AGENTS.md`; prompt-history infrastructure was created during the next build stage.

**How the next prompt changed:** The student moved from confirming governance to supplying the assignment sources, personal source documents, quality target, coding expectations, and visual preference.

**Student annotation needed:** Confirm whether the overview was sufficiently clear and whether anything should have been clarified before implementation.

## 2026-11-08 15:36 EST - Assignment kickoff and source-document review

**Build stage:** Discovery and original planning  
**Student prompt (faithful summary):** Use the assignment instructions, rubric, prior resumes, transcript, and `AGENTS.md` to build a portfolio that reaches Excellent in every criterion. Follow proper coding practices, make meaningful commits, follow the rubric where specific, and use modern sleek, low-clutter design principles where it is vague. Pause for additional information when missing details would prevent the top result.  
**Action/output:** Audited the empty repository; read the assignment instructions; extracted and visually reviewed all pages of the rubric, two resumes, and graduate transcript; separated assignment requirements from student-authored requests; identified truthful career positioning and candidate case studies; generated UI/UX design guidance; rejected an overly colorful/testimonial-heavy generic result in favor of a restrained, spacious, data-oriented page direction; created the immutable original build plan and started this prompt log. No application code was written before the plan.  
**Sources used:** Assignment instructions Markdown; four-page assignment rubric PDF; current product-management/business-analytics resume; earlier data-analytics resume; unofficial graduate transcript. These source documents remain outside the repository.  
**Relevant files:** `docs/plans/01-original-plan.md`, `docs/prompt-log.md`, `design-system/asher-javaid-portfolio/MASTER.md`, `design-system/asher-javaid-portfolio/pages/home.md`

**What worked:** The source documents produced a concrete, evidence-based plan: resume claims shaped the initial positioning and candidate case studies; the transcript confirmed relevant coursework; and the rubric was converted into explicit acceptance gates. The student has not yet evaluated the proposed content or visual direction, so no student approval is claimed.

**What did not work:** The first version of this prompt log used a generic `Student annotation needed` line instead of explicitly documenting what worked, what did not, why, and how prompting evolved. The student later identified this as insufficient for the Excellent rubric descriptor.

**Why:** The AI captured actions, sources, and an annotation request but did not mirror the rubric's required evaluative structure closely enough.

**How the next prompt changed:** The student paused implementation and specifically required retroactive and future `what worked / what did not / why / next change` annotations, while also reiterating that every other Excellent-level requirement must be audited.

**Student annotation needed:** After reviewing the first implemented design checkpoint, explain what feels aligned or misaligned with your target roles and sleek/modern preference, what should change, and why.

## 2026-11-08 15:54 EST - Prompt-log correction and rubric-control refinement

**Build stage:** Process correction before portfolio UI implementation

**Student prompt (faithful summary):** Pause because the prompt log is not explicitly annotating what worked, what did not, and why, as required by the Excellent rubric. Correct the previous entries, use that structure for future entries, continue the build, and ensure every other Excellent-level instruction is followed rather than waiting for the student to catch omissions.

**Action/output:** Paused UI implementation before any portfolio-interface files were changed; audited the existing log; rewrote the earlier entries with explicit evaluation and prompt-evolution fields; preserved unknown student opinions as annotation requests; and created a second saved plan focused on prompt quality and a recurring rubric-control audit.

**Sources used:** The student's correction supplied the evaluation; the rubric's Prompt Log & Iterative Refinement descriptor defined the required structure; `AGENTS.md` supplied the non-invention rule and the requirement to preserve later plans separately.

**Relevant files:** `docs/prompt-log.md`, `docs/plans/02-prompt-strategy-and-rubric-control.md`

**What worked:** The prompt log was created at the start of the project and the build was still early enough to correct its structure without reconstructing a long missing history. The student explicitly identified the grading gap and the desired correction.

**What did not work:** The AI treated an open-ended annotation request as sufficient evidence of iterative refinement. It was not sufficient because it omitted the rubric's explicit evaluative fields and did not show the causal link between evaluation and the next prompt.

**Why:** The AI followed the general prompt-log rule but did not perform a close enough field-by-field check against the Excellent descriptor before continuing.

**How the next prompt/action changed:** Future entries will always include the prompt, action/output, sources, what worked, what did not, why, and the resulting change. At each milestone, the AI will also run a full Excellent-level rubric audit so prompt logging is not the only criterion checked closely.

**Student annotation needed:** Confirm whether this revised structure captures the level of evaluation you intended. After the first visual checkpoint, add your own assessment of the actual design and content so the next refinement is genuinely student-driven.

## 2026-11-08 16:10 EST - First portfolio experience and responsive QA

**Build stage:** Initial content-rich UI implementation and first rubric-control checkpoint

**Student prompt (carried forward):** Continue the build after correcting the prompt log, apply the explicit evaluation structure to future entries, and ensure all other Excellent-level rubric instructions are followed.

**Action/output:** Built and committed the first complete portfolio narrative: accessible global navigation and mobile menu, tailored hero, three resume-grounded case studies, original illustrative SVG visuals, descriptive skill indicators, experience and education, professional contact links, metadata, favicon, and a custom 404. Added content and mobile-menu tests. Ran lint, strict TypeScript, tests, and a production build. Inspected the site in Chrome at the three required viewports and widths immediately around all CSS breakpoints, then fixed issues found during visual QA. Commit: `a4f68ef` (`feat: build responsive portfolio experience`).

**Sources used:** The latest resume informed the product/analytics positioning, case-study facts, metrics, experience, education, and contact links. The earlier analytics resume cross-checked project and experience descriptions. The transcript informed the graduate-coursework summary. The rubric drove the mini-case-study structure, descriptive proficiency indicators, responsive checks, and professional-polish gate. The student's sleek/modern/low-clutter preference drove the spacious editorial layout and restrained visual system.

**What worked:** The server-component-first implementation produced a small, fast-building page with only the mobile menu as client JavaScript. Three case studies visibly separate context, contribution, and result; every visual is original and honestly labeled as illustrative. Automated checks passed: 3 test files, 4 tests, lint, strict type checking, and production build. Browser checks found no horizontal overflow at the required viewports or breakpoint-adjacent widths. The mobile navigation exposed 52-53px link targets and correctly closed with Escape while restoring focus in its component test.

**What did not work:** The first desktop rendering crowded the `300K+` evidence value against its label. The hero font size changed abruptly at the `768/769` and later `992/993` transitions. The footer's `Back to top` link was initially below the 44px touch-target goal. Directly launching the raw standalone server omitted CSS because `.next/static` had not been staged beside the standalone output. The Excellent contact-form requirement, real project links/screenshots, container, Lighthouse/accessibility audit, private GitHub trigger, Cloud Run deployment, and public verification are still incomplete.

**Why:** The evidence-board columns were too narrow for the widest metric; separate mobile/intermediate font formulas created discontinuities at media-query boundaries; the footer link had no explicit minimum height; and Next.js standalone output requires runtime copying of both the standalone server and static assets. Remaining rubric items belong to later implementation, user-decision, infrastructure, and verification phases.

**How the next prompt/action changed:** CSS was revised to guarantee a measured 16px gap between the widest metric and label, use a continuous fluid hero scale, and give the footer control a 44px height. Breakpoint checks were expanded to widths on both sides of every media query rather than only the three rubric sizes. The Docker runtime plan now explicitly includes `.next/static` alongside standalone output. The next implementation phase prioritizes the validated contact form and honest unconfigured-delivery behavior before containerization.

**Student annotation needed:** Review the local visual direction and content. Identify which parts feel strongest, which feel off-brand or too dense/sparse, whether the product-management and analytics balance matches your target roles, and why you want the next design/content change. Also confirm whether the Gmail address and LinkedIn URL shown locally are the contact details you want published.

## 2026-11-08 16:15 EST - Validated contact pipeline

**Build stage:** Contact implementation and second rubric-control checkpoint

**Student prompt (carried forward):** Continue the build, preserve explicit prompt evaluation, and satisfy every in-scope Excellent-level requirement.

**Action/output:** Implemented and committed a contact form with visible labels, native client constraints, shared server validation, field/form errors, pending/success/failure states, honeypot, minimum-completion-time check, best-effort per-instance rate limiting, and a Resend delivery adapter driven only by server environment variables. Added tests for valid/invalid schemas, unconfigured delivery, provider rejection, and provider acceptance. Visually checked desktop and mobile layouts, submitted synthetic data locally, verified honest unconfigured-delivery feedback, and confirmed zero browser console warnings/errors. Commit: `19c39e1` (`feat: add validated contact delivery pipeline`).

**Sources used:** The Excellent contact descriptor required a working validated form with confirmation or error feedback in addition to professional links. `AGENTS.md` added client/server validation, spam mitigation, pending/success/error states, an agreed delivery mechanism, and end-to-end verification without exposing credentials.

**What worked:** Lint, strict type checking, production build, and 10 tests across 5 files passed. The API returns success only after the provider accepts the message; provider and network failures return explicit errors. The live local form displayed the expected unconfigured-delivery error rather than silently discarding the message. Desktop and `375x812` layouts had no horizontal overflow, and the console contained no warnings or errors.

**What did not work:** End-to-end delivery to a real inbox is not yet possible because no provider account, verified sender, API key, or approved private destination has been supplied. Therefore the Excellent contact gate is still only partial even though the application behavior is implemented and locally tested. The in-memory rate limiter is intentionally best-effort per Cloud Run instance, not a globally durable abuse-control service.

**Why:** External delivery requires a student-owned account/credential decision and may involve a third-party service, domain verification, or usage limits. A global rate-limit datastore would add cost and operational complexity that is disproportionate for a small portfolio unless later evidence shows it is necessary.

**How the next prompt/action changed:** The form now fails honestly while unconfigured and directs visitors to the visible email fallback. Final deployment will inject secrets through Cloud Run rather than source control and must include a real success/failure inbox test. Local work can continue with containerization, CI documentation, accessibility, and quality checks while the delivery decision remains open.

**Student annotation needed:** Approve Resend or choose another delivery provider, confirm the private destination inbox, and confirm the public sender identity/domain. Do not paste an API key into chat or commit it; credentials will be configured through approved secret/environment tooling later.

## 2026-11-08 16:19 EST - Standalone runtime and deployment preparation

**Build stage:** Local runtime hardening, container preparation, and third rubric-control checkpoint

**Student prompt (carried forward):** Continue with proper coding practices, meaningful commits, and every in-scope Excellent-level requirement while pausing only when missing information blocks top quality.

**Action/output:** Added a pinned three-stage non-root Dockerfile, strict `.dockerignore`, standalone static-asset staging, current GitHub Actions quality workflow, README, deployment guide, and honest rules-evolution ledger. Verified current action majors against official GitHub release pages before choosing version 7. Ran lint, typecheck, 10 tests, production build, and a production-only dependency audit. Started the self-contained standalone server, verified health JSON, CSS, responsive styling, and 404 behavior. Saved a third plan for the revised deployment/QA path. Commit: `149e370` (`build: prepare standalone container deployment`).

**Sources used:** `AGENTS.md` supplied container, health, non-root, Cloud Run, least-privilege, documentation, and verification requirements. Next.js runtime behavior observed during earlier QA drove static-asset staging. Official GitHub action release pages established the maintained checkout/setup-node majors. The assignment rubric drove deliberate deployment work beyond defaults.

**What worked:** The standalone server now starts with `npm start`, honors an explicit `PORT`, binds on `0.0.0.0`, serves CSS, returns `{"status":"ok"}` from `/api/health`, renders the responsive application, and returns 404 for a missing path. The production dependency audit found zero vulnerabilities. The runtime image definition copies only self-contained output and runs as a dedicated unprivileged user.

**What did not work:** Docker commands could not run because neither the Docker CLI nor Docker Desktop is installed. Therefore the image build, non-root process inspection, container health check, and containerized route/form checks remain unverified. The branch-triggered deploy workflow cannot be finalized without confirmed GitHub/GCP targets, branch, region, billing context, and identity choices.

**Why:** Container execution needs software not currently available and installing it changes the student's machine. Cloud deployment choices affect external resources, public exposure, identity, and possible cost, which `AGENTS.md` explicitly reserves for student confirmation.

**How the next prompt/action changed:** The build records container verification as blocked rather than passed, adds a post-install command matrix, and preserves cloud setup as proposed documentation only. The next local phase focuses on accessibility, link integrity, proofreading, and Lighthouse-style quality checks. Before actual container/cloud work, the student must approve a container runtime and identify the private repository/deployment branch, GCP project, region, and billing/public-access choices.

**Student annotation needed:** Confirm whether you want Docker Desktop installed for the required local container test. Also confirm the intended private GitHub repository/deployment branch and GCP project/region, but do not send credentials or secret values.

## 2026-11-08 16:36 EST - Student visual correction and release reprioritization

**Build stage:** First student visual review, design pivot, and review-release planning

**Student prompt (faithful summary):** Continue after the usage limit reset. The earlier pixelated portfolio at `/Users/asher/Documents/ChatGPT/Resume` is a design the student really likes, while the current portfolio feels bland. Use the earlier site as inspiration without weakening any rubric requirement. Because another interruption is possible, prioritize the tests necessary for a working portfolio, then push the work to the supplied GitHub repository on a separate branch and open a professionally written pull request for review.

**Action/output:** Created the dedicated `codex/pixel-inspired-portfolio` branch while preserving the in-progress accessibility work. Inspected the earlier portfolio's HTML, CSS, JavaScript, and visual system. Identified its reusable design language—pixel display type, monospaced supporting type, warm paper and dark ink, red/blue/lime accents, hard borders, offset shadows, game-window framing, quest/stat/inventory metaphors, and restrained step-style interaction. Reviewed UI/UX accessibility and web-performance rules, rejected an off-topic generated dashboard override, and saved this new design/release plan before changing application UI.

**Sources used:** The student's direct evaluation established the design problem and preferred reference. The local earlier portfolio supplied concrete visual evidence. The rubric and `AGENTS.md` keep truthful content, accessibility, responsive behavior, testing, private GitHub, and Cloud Run gates binding. The UI/UX guidance informed touch targets, typography limits, contrast, reduced motion, performance, form feedback, and responsive checks.

**Relevant files:** `docs/plans/04-pixel-identity-and-release-plan.md`, `docs/prompt-log.md`; reference inspected outside the repository at `/Users/asher/Documents/ChatGPT/Resume`

**What worked:** The student explicitly likes the earlier portfolio's pixelated UI, giving the project a concrete and authentic visual reference instead of an inferred style preference. The existing framework app already contains the stronger rubric-oriented architecture, truthful case studies, accessible navigation, validated form, responsive structure, and automated test foundation that should be preserved.

**What did not work:** The current restrained editorial design feels bland to the student. The earlier AI interpretation of “sleek, modern, and less cluttered” removed too much character and did not test the visual direction against the student's existing work before committing to it. The process also had not yet prioritized a reviewable remote branch despite the risk of another usage interruption.

**Why:** “Sleek” was treated primarily as minimalism and whitespace rather than as polish within the student's established pixel-art identity. The earlier local portfolio was not part of the initial source set, so its stronger stylistic evidence was unavailable during the first design decision.

**How the next prompt/action changed:** The next iteration will keep the current app's semantic and rubric-complete foundation but replace its visual skin and framing with a professional pixel/brutalist system grounded in the supplied reference. A boot/loading gate, unsupported game levels, excessive animation, and unverified old claims will not be carried forward. Work is now sequenced around a tested, separately branched pull request first; GCP deployment follows once the required project, region, billing/public-access, identity, and secret decisions are confirmed.

**Student annotation needed:** Review the pull request and identify which pixel-inspired elements feel most authentic, which still feel too subdued or too game-like, and why. Also confirm the public contact details and the required GCP deployment choices listed in the revision plan.

## 2026-11-08 16:47 EST - Professional-polish correction and PR-first checkpoint

**Build stage:** Second student visual review before release

**Student prompt (faithful summary):** After rereading the Professional Polish rubric, the student is concerned that a strongly pixelated design may lose marks for not appearing employer-ready. Keep the site professional, add enough color to avoid blandness, confirm all rubric/instruction requirements are present, run the basic tests needed for the assignment, and create the pull request before additional tests.

**Action/output:** Paused the pixel-heavy direction before publishing it. Saved a new plan that makes employer-ready hierarchy the controlling design constraint, then removed literal game copy, pixel typography, arcade framing, and the decorative game scene. Retained a restrained warm-paper, blue, coral, and lime palette; original project visuals; a colored evidence panel; soft elevation; accessible interaction states; and conventional professional typography. Ran lint, strict type checking, 10 unit/component/API tests, a production build, and 12 Playwright browser/axe checks. The first browser pass found a 3.39:1 coral label; after darkening the text accent, all 12 desktop/mobile checks passed.

**Sources used:** The student's direct rubric interpretation and visual correction; the rubric's Professional Polish descriptor; `AGENTS.md` requirements for honest plans, testing evidence, accessibility, and auditable increments.

**Relevant files:** `docs/plans/05-professional-polish-and-pr-plan.md`, `docs/prompt-log.md`, `docs/testing.md`, `src/app/globals.css`, `playwright.config.ts`, `tests/e2e/portfolio.spec.ts`. Commits: `833146d` (`test: add browser accessibility release gate`) and `2cd65a1` (`feat: refine portfolio with professional color identity`). Review: GitHub pull request #1.

**What worked:** The student still wants more visual character than the first restrained design and explicitly supports adding color. The existing app's information architecture, case-study depth, original visuals, accessibility work, and production structure remain useful and do not need to be rebuilt.

**What did not work:** The first design was too bland; the immediate correction swung too far toward literal pixel/game styling. That could make the theme compete with the professional evidence and introduce grading ambiguity under Employer-ready Professional Polish.

**Why:** The first interpretation underweighted identity, while the second over-weighted the old portfolio's surface language. The rubric requires both distinction and professional judgment, so neither extreme is appropriate.

**How the next prompt/action changed:** The release candidate will use conventional professional typography, spacing, surfaces, and content labels with selective coral, blue, lime, and warm-paper accents. Literal game terminology, pixel typography, hard arcade framing, and decorative game scenes will be removed. The build sequence is now explicitly: essential automated checks, meaningful commits, safe remote inspection, branch push, professional PR, then extended tests and cloud work.

**Student annotation needed:** In the pull request review, state whether the revised balance feels distinctive enough without becoming themed, and identify any section that still looks too generic or too playful.

**Release checkpoint:** Pushed `codex/pixel-inspired-portfolio` to the supplied GitHub repository and opened pull request #1, “Add accessible browser QA and professional color refinement,” against `main`. Both GitHub Actions quality runs completed successfully. Remote inspection showed the repository is currently public; this conflicts with the project rule requiring a private repository unless the student explicitly chooses otherwise, so visibility remains a student decision rather than an unapproved change.

## 2026-11-08 18:03 EST - Authentic project evidence and fourth case study

**Build stage:** Post-deployment project-evidence refinement

**Student prompt (faithful summary):** Confirmed that contact-form delivery now works. Supplied a real Creator Intelligence platform screenshot and its GitHub repository URL, requested that the screenshot replace the placeholder visual and that the repository link be added. Supplied a second screenshot of the AI Fashion Trend Radar workflow and requested that it become an additional project with that image. Required a separate branch and review pull request.

**Action/output:** Verified that PR #1 was merged, fetched the updated `main`, and created `codex/add-project-evidence`. Inspected both screenshots and their dimensions, verified the supplied Creator repository, and audited existing Fashion Trend Radar source material. Saved a dedicated plan before application changes. Resized the oversized Creator capture to 1800×913, retained the already compact 1646×380 Fashion workflow, and integrated both through Next.js Image with intrinsic dimensions, responsive sizes, useful alt text, and project-specific captions. Added the Creator repository CTA and a fourth Fashion mini case study with an explicit non-commercial result statement. Updated unit and browser coverage. Lint, strict TypeScript, 11 unit/component/API tests, production build, and 14 desktop/mobile Playwright checks passed. A visual browser pass confirmed both screenshots remain contained and legible in the professional card system.

**Sources used:** The student's screenshots establish authentic product/workflow visuals. The supplied GitHub URL establishes the Creator project link. The student's earlier portfolio supplies the Fashion Trend Radar purpose and data-source description. The rubric and `AGENTS.md` require strong visuals, working links where available, truthful mini case studies, optimized assets, meaningful alt text, and no invented outcomes.

**Relevant files:** `docs/plans/06-authentic-project-evidence-plan.md`, `docs/prompt-log.md`, `src/data/portfolio.ts`, `src/app/page.tsx`, `public/images/projects/creator-intelligence-platform.png`, `public/images/projects/ai-fashion-trend-radar.png`, and the project test suites; earlier portfolio at `/Users/asher/Documents/ChatGPT/Resume/index.html`

**What worked:** The contact delivery configuration now works according to the student's direct report. The Creator project now has both a real product screenshot and a genuine repository URL, directly strengthening two previously documented rubric gaps. The Fashion screenshot provides concrete evidence of a multi-stage agent workflow and supports a stronger fourth project than an illustrative placeholder.

**What did not work:** The current Creator card still uses a labeled placeholder illustration and has no working repository CTA. The portfolio contains only three featured case studies. The available Fashion evidence does not establish a quantified result, public repository, demo URL, or detailed constraints.

**Why:** Real project assets and the Creator URL were not available during the original build. The Fashion project was previously mentioned only briefly in the student's older portfolio and original planning shortlist, so promoting it earlier would have required unsupported assumptions.

**How the next prompt/action changed:** The typed project model will support real screenshot metadata and genuine optional links. Creator Intelligence will use the supplied screenshot and repository. Fashion Trend Radar will be added as a fourth mini case study with an honest output/learning statement, the supplied workflow image, and no fabricated link or metric. The new branch will receive a separate tested PR.

**Student annotation needed:** In the PR, confirm whether the Fashion Trend Radar role/contribution and output are accurate, and provide any genuine constraints, measured result, repository, or demo that would make the case study stronger.

