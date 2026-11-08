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

