# Prompt Strategy and Rubric-Control Revision

**Created:** 2026-11-08 15:54 EST  
**Status:** Active process revision  
**Relationship to original plan:** Supplements, but does not replace or modify, `01-original-plan.md`

## 1. Scope

This revision corrects the build's documentation and quality-control method after the student identified that the prompt log did not explicitly capture what worked, what did not, why, and how the next prompt changed. It also adds a recurring audit against every in-scope Excellent-level rubric descriptor so the student is not responsible for finding other omissions.

Application scope remains unchanged: build and verify a dynamic, polished, accessible Next.js portfolio, package it for Cloud Run, and document a private-GitHub push-triggered deployment. The reflection remains out of scope.

## 2. Assumptions

- The student's correction is a genuine iterative prompt and must be preserved as evidence, not normalized away.
- Honest missing evaluation is better than invented student sentiment; unknown opinions remain clearly marked `Student annotation needed`.
- The initial career positioning and case-study candidates remain provisional until the student evaluates the first visual/content checkpoint.
- The technical and visual architecture in the original plan remains suitable unless implementation evidence or student feedback warrants another saved revision.

## 3. User decisions needed

- Confirm that the revised prompt-log structure reflects the intended level of evaluation.
- At the first visual checkpoint, identify specific design/content elements that worked or failed and why.
- All original unresolved decisions remain open: target-role priority, preferred email, public LinkedIn approval, project links/screenshots, contact delivery, GitHub/GCP targets, and cost/public-access choices.

## 4. Architecture impact

The application architecture does not change: Next.js App Router, strict TypeScript, server components by default, minimal client components, typed local content, server-side contact handling, health endpoint, tests, standalone output, and multi-stage containerization.

The process architecture changes by adding two controls:

1. Every prompt-log entry uses fixed fields for prompt, action/output, sources, what worked, what did not, why, and resulting next change.
2. Every major milestone ends with a rubric-control pass covering required sections/case studies, dynamic deployment, prompt refinement, responsive behavior, polish, rules/plans, contact, and all repository evidence required by `AGENTS.md`.

## 5. Data and content impact

No new personal claims are introduced. Resume and transcript evidence continues to inform content, but student approval is still required before final publication. The prompt log must identify which source informed each major decision without copying source documents or exposing unnecessary personal data.

## 6. Revised implementation phases

### Phase A - Immediate correction

**Completed by this revision:** restructure earlier prompt-log entries, record the student's correction, save this new plan, and commit the documentation change before UI work resumes.

### Phase B - First visual/content checkpoint

**Next:** implement the portfolio narrative and responsive UI from the already verified foundation. Run lint, typecheck, tests, build, and a preliminary rubric audit. Present the checkpoint for student evaluation.

### Phase C - Student-driven refinement

Use the student's concrete evaluation to update design/content. Record what worked, what did not, why, and how the corrective prompt changed the implementation. Save another plan only if feedback materially changes architecture, content strategy, deployment, or verification scope.

### Phase D - Contact, infrastructure, and final QA

Proceed as described in the original plan, with rubric audits after contact delivery, container verification, deployment, and final submission-archive preparation.

## 7. Risks and mitigations

| Risk | Mitigation |
| --- | --- |
| Prompt entries become action summaries without evaluation | Require all fixed evaluative fields before each documentation commit |
| AI invents what the student liked | Label AI-observed outcomes separately and request missing student annotations |
| One rubric criterion receives deep attention while others drift | Run the full Excellent-level audit at every major milestone |
| Later changes overwrite evidence of evolution | Preserve the original plan and save genuine revisions as new numbered files |
| Source use becomes vague | Name the source type and the decision it informed in each relevant entry |
| Documentation claims exceed verification | Link claims to files, commands, commits, or observed deployment evidence |

## 8. Tests and evidence

In addition to the technical tests in the original plan, documentation QA will verify:

- every real student prompt is present or faithfully summarized;
- each entry includes all fixed evaluation fields;
- unknown student opinions are not presented as facts;
- corrective prompts visibly change the next action or implementation;
- source documents are credited by purpose but remain outside the repository;
- commit hashes and file links are added when available;
- rubric-control results distinguish passed, pending, blocked, and student-owned items.

Technical verification remains lint, strict type checking, unit/component/API tests, production build/runtime, accessibility, responsive viewports and breakpoints, link/image integrity, Lighthouse, container health, deployment trigger, and public HTTPS behavior.

## 9. Deployment impact

Deployment architecture and authorization boundaries are unchanged. No GitHub or GCP write will occur until the student confirms the private repository, branch, project, region, billing context, identity method, and public-access/cost choices. Deployment documentation must include observed trigger, rollout, log, route, form, and rollback evidence.

## 10. Excellent-level acceptance criteria

The original acceptance criteria remain binding. This revision adds the following documentation gates:

- the prompt log covers the entire build and explicitly annotates what worked, what did not, why, and how subsequent prompting changed;
- the log contains genuine student evaluation at meaningful checkpoints or clearly marked requests where evaluation is still pending;
- source documents are tied to concrete planning/content decisions;
- the rules file and original plan remain intact, while later plans show real changes in approach;
- every major milestone includes a complete rubric audit rather than checking only the criterion most recently discussed;
- no in-scope Excellent-level criterion is marked complete without direct evidence.

