# Authentic Project Evidence Plan

**Created:** 2026-11-08 18:03 EST

**Status:** Active revision after the student supplied real project screenshots and a repository link

**Relationship to earlier plans:** Preserves all earlier plans unchanged. This revision strengthens the Projects & Achievements evidence gate without changing the professional visual direction approved for PR #1.

## 1. Scope

Replace the Creator Intelligence placeholder illustration with the student's real product screenshot, add its supplied GitHub repository link, and add AI Fashion Trend Radar as a fourth substantive project using the supplied workflow screenshot. Preserve responsive performance, accessibility, truthful case-study structure, and the existing professional visual system. Create a separate branch and pull request for review. Reflection remains out of scope.

## 2. Assumptions

- The supplied screenshots are student-approved portfolio assets and may be committed to the private assignment repository.
- The Creator Intelligence repository URL supplied by the student is genuine and approved for publication.
- The Fashion Trend Radar screenshot plus the student's earlier portfolio description support the existence, purpose, signal sources, and report workflow, but not a quantified business outcome.
- The fashion case study will describe an observable working output/learning rather than inventing metrics, users, or impact.

## 3. User decisions needed

- Supply a Fashion Trend Radar repository/demo link if one becomes available.
- Confirm or revise the student's specific role, constraints, and any measured outcome for the fashion project if stronger evidence exists.
- Review screenshot cropping/readability and the fourth case-study copy in the PR.

## 4. Architecture

- Extend the typed project model with optional screenshot metadata and optional external links.
- Render screenshots through Next.js `Image` with declared intrinsic dimensions, responsive `sizes`, lazy loading below the fold, and meaningful alternative text.
- Retain the original SVG component for projects without real screenshots.
- Render only genuine links; use honest non-interactive availability text when a project has no supplied link.

## 5. Data and content needs

- Creator screenshot: supplied 2938×1490 PNG, optimized to a repository-local web asset.
- Fashion screenshot: supplied 1646×380 PNG, optimized without changing its wide workflow composition.
- Creator repository: `https://github.com/AsherJ07/purdue-youtube-ip-new`.
- Fashion copy: grounded in the screenshot and existing student portfolio statement that the system scores momentum, saturation, and visual signals from Google Trends, TikTok, and Pinterest.

## 6. Implementation phases

1. Save this plan and append the student prompt/evaluation to the prompt log.
2. Optimize and copy the screenshots into `public/images/projects/` with descriptive filenames.
3. Extend the project model and add the fourth mini case study.
4. Render responsive screenshots, captions, repository CTA, and honest unavailable-link state.
5. Update tests for four complete projects, real screenshot metadata, and the supplied repository URL.
6. Run lint, typecheck, unit tests, production build, Playwright/axe, and image/link checks.
7. Commit in auditable increments, push `codex/add-project-evidence`, and open a professional PR against `main`.

## 7. Risks

- **Large assets hurt performance:** resize/compress locally, use Next.js image optimization, declare dimensions, and lazy load.
- **Wide fashion workflow becomes illegible on mobile:** preserve the full image in a bounded surface with an accessible alt description; avoid aggressive cropping.
- **Unsupported fashion claims:** describe only visible workflow stages and the existing student-authored purpose; request stronger outcomes later.
- **External repository is unavailable:** verify the supplied URL before publication and use safe external-link attributes.
- **Screenshot exposes private data:** inspect images; neither supplied image visibly contains credentials or personal messages.

## 8. Tests

- Four projects satisfy non-empty context, contribution, result/learning, technologies, and evidence fields.
- Creator project exposes the exact supplied GitHub URL.
- Both screenshot assets resolve with useful alt text and intrinsic dimensions.
- No horizontal overflow at desktop or mobile; fashion screenshot remains contained.
- Axe reports no serious/critical findings; 404, form, reduced-motion, and link tests continue passing.
- Production build and standalone asset staging succeed.

## 9. Deployment work

This PR changes static assets and portfolio content only. After merge, the existing Cloud Run process must build/deploy the new main revision and the public URL must be checked for both images and the repository link. No new environment variables are required.

## 10. Excellent-level acceptance criteria

- At least four substantive projects are presented as mini case studies with context, contribution, result/learning, tools, and strong visuals.
- The Creator Intelligence card uses authentic product evidence and a working repository link.
- The Fashion Trend Radar uses authentic workflow evidence without invented metrics or links.
- Images are responsive, optimized, meaningful to screen-reader users, and free of layout shift.
- Tests, prompt evolution, commits, and PR evidence are recorded honestly.
