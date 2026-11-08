# AGENTS.md

## Mission

Build, verify, document, and deploy an employer-ready personal portfolio that earns the **Excellent** level in every in-scope category of the Purdue MIS 58710 IA 3 rubric. Treat the rubric as a set of minimum acceptance tests, not as design inspiration.

The finished application must be a dynamic, framework-based web app in a private GitHub repository, deployed publicly over HTTPS to Google Cloud Run, with pushes to the deployed branch triggering redeployment.

## Scope exclusion

The student's reflection is entirely out of scope. Do not create or edit it.

## Authority and precedence

1. Follow the student's current direct request.
2. Follow this file.
3. Follow the assignment instructions and rubric supplied by the student.
4. Follow established repository conventions.

If requirements conflict or a choice would materially affect cost, public exposure, personal information, GitHub, or GCP resources, stop and ask the student. Never invent personal details, career goals, project outcomes, contact information, repository links, credentials, or deployment status.

## Required working method

### Plan before implementation

- Inspect the repository and source documents before proposing architecture.
- Before writing application code, create an original, timestamped Markdown plan under `docs/plans/` and preserve it unchanged.
- Save later revised plans as new files rather than overwriting earlier plans. Use names such as `01-original-plan.md`, `02-design-and-content-revision.md`, and `03-deployment-and-qa-plan.md`.
- Each plan must include scope, assumptions, user decisions needed, architecture, data/content needs, implementation phases, risks, tests, deployment work, and rubric acceptance criteria.
- Keep plans honest: distinguish proposed work, completed work, blockers, and user-owned tasks.

### Preserve an authentic prompt trail

- Maintain `docs/prompt-log.md` from the beginning through final verification.
- Record the date/time, build stage, the student's actual prompt or a faithful concise summary, the action/output, and links to relevant commits/files when available.
- Never copy assignment text and present it as a student prompt.
- Never invent the student's evaluation, feelings, or reasoning. Add clearly marked `Student annotation needed` prompts for the student to explain what worked, what did not, why, and how the next prompt changed.
- Capture follow-up prompts and corrective iterations, not only initial requests.
- Use source documents deliberately and note which requirement or rubric criterion they informed.
- Do not put secrets, tokens, private keys, or sensitive personal data in the prompt log.

### Evolve this rules file transparently

- Treat `AGENTS.md` as the required rules file equivalent.
- Update it only when a real project decision, discovered constraint, or repeated failure justifies a rule change.
- Append a short dated entry to `docs/rules-evolution.md` describing what changed, why, and what evidence prompted it. Do not manufacture evolution for grading.

### Work in auditable increments

- Prefer small, coherent changes that can be tested independently.
- Do not claim a feature, test, link, deployment, or score without direct evidence.
- Preserve user changes. Do not overwrite content or configuration without inspecting it first.
- Keep credentials out of source control. Provide `.env.example` with names and safe descriptions only.
- Before any external write or billable cloud action, state the target and expected impact. Obtain the student's decision when account, billing, region, domain, identity, or public-data choices are unresolved.

## Technical direction

Use a current, maintained framework that produces a genuinely runnable web application suitable for Cloud Run. Prefer **Next.js with TypeScript** unless the repository already uses another assignment-approved framework or the student chooses differently. Do not deliver a plain HTML/CSS/JavaScript site.

For a new Next.js implementation:

- Use the App Router, strict TypeScript, reusable components, semantic HTML, and a clean feature-oriented structure.
- Ensure production runs from a server process that honors Cloud Run's `PORT` environment variable and listens on `0.0.0.0`.
- Use optimized local assets where practical. Every remote asset must have a reliable source and appropriate configuration.
- Keep dependencies minimal, justified, maintained, and free of known high-severity issues at final verification.
- Add linting, type checking, tests, and a reproducible production build.

The exact stack may change during planning, but any replacement must preserve all rubric, accessibility, testing, container, and deployment requirements.

## Content rules

Before finalizing portfolio copy or visuals, obtain or confirm:

- the student's preferred name and professional headline;
- target roles, industries, and career goals;
- a short, truthful value proposition;
- at least three real projects or notable achievements;
- for each project: problem/context, constraints, the student's role, approach, technologies, result/impact, image, and available repository/demo link;
- technical skills and an honest, explainable proficiency description;
- approved professional contact links and form destination/behavior;
- resume or other source documents the student explicitly wants used.

Use clearly labeled placeholders while information is missing. Never convert assumptions into claims. Do not invent metrics, employers, awards, testimonials, or proficiency percentages. If project links or screenshots are unavailable, use an intentional and honest fallback while prompting the student to supply stronger evidence.

## Product requirements and Excellent-level gates

### 1. Landing experience

- Include a professional introduction, concise value proposition, strong visual focal point, and obvious calls to action.
- Provide navigation to every major section. Navigation must work with mouse, keyboard, touch, and direct URLs/anchors.
- Make the content visibly tailored to the student's target career, not a generic portfolio template.

### 2. Projects and achievements

- Show at least three substantive projects or notable achievements.
- Present every item as a mini case study with **problem/context, approach/contribution, and result/learning**.
- Include title, description, technologies/tools, strong visual, and working repository/live-demo link where genuinely available.
- Make the student's role and contribution unambiguous.
- Use a polished, consistent card/grid/detail structure and meaningful alternative text.

### 3. Skills

- Include relevant technical skills, tools, and technologies the student knows or is learning.
- Use honest proficiency indicators with human-readable context (for example, `Used in 3 projects` or `Currently learning`), not decorative or unsupported percentages.
- Keep indicators accessible without relying on color alone.

### 4. Contact

- Provide easy-to-find, working professional contact links in addition to the form.
- Implement a working contact form with accessible labels, client- and server-side validation, spam mitigation, and clear pending, success, and field/form error feedback.
- Do not silently discard messages. The form must have an agreed delivery mechanism or clearly honest behavior that can be verified end to end.
- Do not expose private credentials or unnecessary personal information.

### 5. Responsive behavior

- Design intentionally for mobile, tablet, and desktop; do not merely make desktop content shrink.
- Include a usable mobile navigation pattern and deliberate project-card reflow.
- Test at minimum `375x812`, `768x1024`, and `1440x900`, plus intermediate widths around every layout breakpoint.
- At all tested widths: no horizontal overflow, overlap, clipped focus indicators, unreadably small text, unreachable controls, or awkward empty regions.

### 6. Professional polish

- Establish a distinctive, employer-ready visual identity with documented colors, typography, spacing, radius, elevation, and motion tokens.
- Maintain clear hierarchy, consistent alignment, restrained motion, and strong content density.
- Respect `prefers-reduced-motion`; avoid animation that delays access to content.
- Include useful metadata, favicon/brand mark, social preview metadata, and a polished 404/not-found experience when the framework supports it.
- No broken links/images, placeholder filler, console errors, spelling errors, grammar errors, hydration errors, or obvious template residue.

### 7. Accessibility

- Target WCAG 2.2 AA for core pages and interactions.
- Use semantic landmarks and heading order, a skip link, descriptive link text, visible keyboard focus, sufficient contrast, useful alt text, and properly associated form errors.
- All functionality must be keyboard operable. Dialogs, menus, and mobile navigation must manage focus correctly.
- Run automated accessibility checks and complete a manual keyboard pass. Fix serious and critical findings before deployment.

### 8. Performance and resilience

- Optimize images, fonts, and client JavaScript. Avoid unnecessary client components and large libraries.
- Set reasonable performance targets for the production build: no serious Core Web Vitals regression and Lighthouse scores of at least 90 for Performance, Accessibility, Best Practices, and SEO on representative pages, unless a documented tool/environment limitation prevents it.
- Handle loading, empty, invalid-input, network-error, and not-found states deliberately.
- Ensure direct navigation and refresh work for every deployed route.

## Container and Cloud Run requirements

- Create a hand-tuned, reproducible multi-stage Dockerfile with separate dependency, build, and minimal runtime stages.
- Run as a non-root user where the chosen framework permits it.
- Add a `.dockerignore`; do not copy development clutter, source documents, `.git`, secrets, or local environment files into the image.
- Pin an appropriate runtime version and document important choices.
- Build and run the image locally, then test the containerized app before cloud deployment.
- Add a lightweight health endpoint suitable for deployment verification.
- Use deliberate Cloud Run settings appropriate to a small portfolio, such as region, memory/CPU, concurrency, request timeout, min/max instances, public access, and environment variables. Explain the chosen values and cost/latency tradeoffs in `docs/deployment.md`.
- Do not enable paid resources or choose settings with meaningful ongoing cost without the student's approval.
- Keep the service public and live until grading is complete. Do not delete, stop, privatize, or knowingly break the graded service.

## GitHub-triggered deployment

- The repository must be private unless the student explicitly chooses otherwise and confirms assignment compatibility.
- Configure pushes to the selected deployment branch to build and redeploy to Cloud Run. Use the course-required mechanism if one is specified; otherwise prefer a secure, documented GitHub Actions or Cloud Build workflow.
- Use least-privilege authentication and secret storage. Prefer short-lived identity federation over long-lived service-account keys when feasible.
- Protect against accidental deployments from pull requests or untrusted contexts.
- Document initial setup, required roles, secret names, trigger branch, rollback, log inspection, and verification steps without exposing secret values.
- Confirm deployment by observing a successful trigger, checking service status/logs, and testing the public HTTPS URL after the rollout.

## Repository deliverables

The final repository should contain at least:

- `AGENTS.md` - project-specific agent rules;
- `docs/plans/01-original-plan.md` - the original AI-produced plan, preserved unchanged;
- multiple additional saved plans showing genuine revisions across build stages;
- `docs/prompt-log.md` - whole-build prompt history and student annotation prompts;
- `docs/rules-evolution.md` - genuine changes to project rules;
- `docs/deployment.md` - container, trigger, Cloud Run settings, troubleshooting, rollback, and live verification;
- `docs/testing.md` - viewport matrix, browser checks, accessibility, links, form, container, and deployment evidence;
- `README.md` - purpose, stack, local setup, scripts, architecture summary, and documentation links;
- application source, tests, production dependency manifests/lockfile, Dockerfile, `.dockerignore`, `.gitignore`, CI/CD configuration, and `.env.example`.

Do **not** add the assignment source documents to the repository or submission archive.

## Verification commands and evidence

Adapt commands to the selected stack, but define equivalent scripts and run them before declaring completion:

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

Also verify:

- production server startup and core routes;
- multi-stage Docker image build and local container health;
- form validation, delivery, success, and failure behavior;
- every internal and external link and every image;
- responsive layouts at the required and intermediate sizes;
- keyboard navigation, focus behavior, contrast, semantics, and automated accessibility results;
- production Lighthouse results on representative pages;
- GitHub deployment trigger and public Cloud Run HTTPS URL;
- direct-route refresh, 404 behavior, and absence of browser console/server errors.

Record commands, environment, date, and outcomes in `docs/testing.md`. A checklist alone is not evidence; include concise observed results and any limitations. Do not store secrets or unnecessary personal data in screenshots or logs.

## Definition of done

Do not describe the assignment as complete until all of the following are true:

- every in-scope Excellent-level rubric gate above is implemented and evidenced;
- content is truthful, career-tailored, proofread, and approved by the student;
- there are at least three strong project mini case studies;
- contact links work and the validated contact form succeeds and fails clearly in real testing;
- desktop, tablet, mobile, and intermediate layouts are polished;
- the production build and local container pass;
- the private GitHub repository has push-triggered Cloud Run deployment;
- the public HTTPS URL loads correctly and remains available for grading;
- the original plan, multiple later plans, prompt log, rules evolution, deployment guide, and test evidence are present;
- the repository contains no secrets, broken assets, or source-assignment documents;
- a clean repository archive can be created with all required files and without local caches, dependencies, build output, credentials, or source documents.

At handoff, give the student a short, factual list of completed work, evidence, remaining student-owned actions, the verified live URL, and any ongoing Cloud Run cost or availability considerations. Remind the student to keep the deployed site public and unchanged until grading is complete.
