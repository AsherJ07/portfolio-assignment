# Final Public Documentation and Evidence Plan

**Created:** 2026-11-08 19:20 EST  
**Status:** Proposed before implementation

## Scope

- Rewrite the README as polished public project documentation rather than an internal status report.
- Re-audit every in-scope Excellent-level rubric criterion against repository, test, GitHub, Cloud Build, Cloud Run, and public-site evidence.
- Update the rubric audit with current evidence and clearly distinguish verified completion from any remaining limitation.
- Preserve the assignment-required plans, prompt trail, testing evidence, rules history, and deployment guide.
- Publish the work on a separate branch and open a final review pull request.

## Assumptions

- Pull request #5 is merged and its GitHub quality checks passed.
- The connected Cloud Build trigger should have run from the merged `main` commit, but its result and the resulting public revision must be observed before being marked complete.
- Public-facing polish does not justify deleting assignment-required audit artifacts; the README can present them professionally and concisely.

## User decisions needed

- The student reviews and merges the final documentation pull request.
- Any remaining credential rotation, repository-visibility, billing, IAM, or Cloud Run-setting change remains student-owned unless separately authorized.

## Architecture

- `README.md` serves recruiters, reviewers, and developers with project purpose, capabilities, architecture, local use, deployment, quality, and documentation links.
- `docs/rubric-audit.md` serves as a concise evidence matrix tied to observable artifacts rather than internal commentary.
- `docs/testing.md` and `docs/deployment.md` remain the detailed evidence sources.

## Data and content needs

- Current assignment/rubric wording from the supplied source documents.
- Current GitHub PR/check state, Cloud Build trigger result, Cloud Run revision/image/settings, public URL, health response, and public page behavior.
- Current local quality, browser, accessibility, link/image, and performance results.

## Implementation phases

1. Re-read the assignment instructions and Excellent rubric descriptors.
2. Inspect repository deliverables and run local automated checks.
3. Verify the merged Cloud Build run and public Cloud Run service without exposing secrets.
4. Rewrite the README and rubric audit from verified evidence.
5. Update testing, deployment, and prompt-log records with the final checkpoint.
6. Commit in coherent increments, push the branch, and open a professional pull request.

## Risks

- Marking an unobserved deployment or test as complete would weaken the audit; statuses must remain evidence-based.
- Public documentation can accidentally expose private environment values or internal contact data; record only safe metadata.
- Removing the required prompt/planning trail for aesthetic reasons would violate the assignment; keep it accessible but professionally described.
- A Cloud Build failure may require IAM or trigger changes outside this documentation pass.

## Tests

- `npm run lint`
- `npm run typecheck`
- `npm test -- --run`
- `npm run build`
- browser checks at required viewports, keyboard/accessibility checks, link/image validation, and production console review
- Lighthouse or equivalent production performance/accessibility/SEO evidence where available
- public `/api/health`, home, direct navigation, not-found behavior, assets, and contact-state checks
- GitHub/Cloud Build/Cloud Run source-to-revision traceability

## Deployment work

- No deployment configuration change is planned unless verification exposes a defect.
- Observe the `main` Cloud Build run created by pull request #5 and verify the active Cloud Run revision/image corresponds to that merge.
- Preserve the existing public URL and runtime environment configuration.

## Rubric acceptance criteria

- README reads as professional project documentation with no stale internal status banner.
- Every in-scope rubric row cites direct, current evidence and does not overclaim.
- Required repository artifacts remain present and linked.
- The public HTTPS service is tied to the deployed `main` commit and passes representative route/interaction checks.
- The final branch passes repository quality checks and is delivered through a reviewable pull request.
