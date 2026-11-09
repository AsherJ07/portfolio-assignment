# Testing Evidence

This document records observed results as the portfolio is built. It distinguishes completed checks from planned or blocked verification. Dates and times use America/Indiana/Indianapolis.

## Environment

- Date: 2026-11-08
- Local OS: macOS
- Node.js: `v22.16.0`
- npm: `10.9.2`
- Framework: Next.js `16.4.5`, React `19.3.1`, TypeScript `6.0.3`
- Browser used for visual QA: Google Chrome
- Current verified application branch: `codex/refine-project-layout`

## Automated quality checks

Run after the first portfolio UI and responsive fixes:

| Command | Observed result |
| --- | --- |
| `npm run lint` | Passed with zero warnings under `--max-warnings=0` |
| `npm run typecheck` | Passed with strict TypeScript and no emitted files |
| `npm test` | Passed after authentic project evidence integration: 5 test files, 11 tests |
| `npm run build` | Passed; `/`, custom not-found handling, `/api/contact`, `/api/health`, and `/icon.svg` generated successfully |
| `npm audit --omit=dev --audit-level=high` | Passed after network-enabled retry: zero production vulnerabilities |
| `git diff --check` | Passed; no whitespace errors |

Tests currently cover:

- health endpoint status and JSON response;
- a minimum of four case studies with non-empty problem, contribution, result/learning, technologies, and evidence;
- human-readable skill context without proficiency percentages;
- mobile navigation open/close state, Escape behavior, and focus restoration;
- valid and invalid contact payloads and accessible field-error mapping;
- honest unconfigured-delivery response;
- delivery-provider failure response without false success;
- success only after the provider accepts the message.

### Pre-PR release gate - 2026-11-08

The professionally refined color direction was checked before remote publication:

| Command | Observed result |
| --- | --- |
| `npm run lint` | Passed with zero warnings |
| `npm run typecheck` | Passed with no TypeScript errors |
| `npm test -- --run` | Passed: 5 files, 10 tests |
| `npm run build` | Passed; standalone assets staged and all expected routes generated |
| `npm run test:e2e` | Passed after one contrast correction: 12/12 Playwright tests across desktop Chrome and `375x812` mobile Chrome |
| GitHub Actions `Quality checks` | Both push and pull-request runs passed on `codex/pixel-inspired-portfolio`; PR #1 is open and mergeable |

The first browser run found the small coral `Case study` label at 3.39:1 on white. It was darkened from `#e95e4f` to `#a9322a`, then both desktop and mobile axe checks passed with no serious or critical findings. The suite also observed no horizontal overflow, reachable direct anchors, honest unconfigured contact feedback, a useful 404 recovery action, reduced-motion behavior, and valid local hash/link targets.

The initial non-escalated Playwright attempt could not bind `0.0.0.0:3010` (`EPERM`) under the filesystem sandbox. The same committed suite ran successfully with local-server permission; this was an environment constraint, not an application failure.

An audit retry during this checkpoint could not reach `registry.npmjs.org` because DNS/network access was restricted. The earlier network-enabled production audit result of zero vulnerabilities remains the latest completed audit evidence; no new passing result is inferred.

Remote evidence: [pull request #1](https://github.com/AsherJ07/portfolio-assignment/pull/1). GitHub reported the repository as public during verification; changing visibility requires student approval and remains a compliance blocker before submission.

### Authentic project evidence checkpoint - 2026-11-08

- Creator Intelligence now uses the supplied dashboard capture, resized from 2938×1490 to 1800×913 while preserving its aspect ratio and readable interface content.
- AI Fashion Trend Radar uses the supplied 1646×380 workflow image without cropping its wide process structure.
- Both images render through Next.js Image with declared dimensions, responsive `sizes`, lazy loading, and descriptive alt text.
- The Creator repository URL was independently resolved through GitHub and is rendered as a descriptive external link.
- The Fashion case study intentionally has no repository/demo link or quantified business outcome because neither was supplied.
- `npm run test:e2e` passed 14/14 checks across desktop Chrome and `375x812` mobile Chrome, including axe, overflow, image decoding, and the exact Creator repository URL.
- A desktop visual pass confirmed that the Creator screenshot remains readable in the split card. The initially full-width Fashion workflow was later revised after student review; see the checkpoint below.

### Project-card consistency checkpoint - 2026-11-08

- Removed the visible Creator and Fashion screenshot provenance captions while preserving descriptive image alternatives for screen-reader users.
- Returned AI Fashion Trend Radar to the same responsive card layout as the other case studies: narrative on the left and a contained image on the right at desktop widths, then a single-column reflow on mobile.
- Deleted the now-unused Fashion-specific wide-media CSS and rendering branch.
- `npm run lint`, `npm run typecheck`, `npm test -- --run`, and `npm run build` all passed.
- `npm run test:e2e` passed 14/14 checks across desktop Chrome and `375x812` mobile Chrome. The suite now asserts that the removed caption is not visible and that the Fashion screenshot sits to the right of its heading at desktop width.
- A production-browser visual pass at desktop width confirmed the smaller workflow is contained beside the text, remains uncropped, and introduces no awkward empty media row.

### Background-band correction checkpoint - 2026-11-08

- Refactored the Background section into a full-width semantic band with an inner shared content shell, removing the container-edge border and surface cutoffs visible in the deployed screenshot.
- Preserved the two-column Experience/Education grid, mobile reflow, heading order, and content without changing personal claims.
- `npm run lint`, `npm run typecheck`, `npm test -- --run`, and `npm run build` passed; the unit/component/API result remains 5 files and 11 tests.
- The initial Playwright attempt hit the previously documented sandbox `EPERM` restriction on port 3010. The permitted retry passed 16/16 checks across desktop and `375x812` mobile Chrome.
- New browser coverage verifies that `.background-section` reaches both viewport edges while its direct `.section-shell` child remains bounded inside them.
- A desktop production-browser pass confirmed the Fashion workflow is beside its narrative on the review branch and the Background surface now continues cleanly across the viewport without clipped border endpoints.

## Responsive visual checks

The production build was inspected with explicit browser viewport overrides. The first pass revealed and fixed a metric-label collision, hero-type breakpoint jumps, and an undersized footer target.

| Viewport or boundary | Observed result after fixes |
| --- | --- |
| `375x812` | Mobile navigation visible; CTA buttons stack; no horizontal overflow; project card reflows to one column |
| `768x1024` | Tablet layout uses one-column hero and mobile navigation; no horizontal overflow |
| `1440x900` | Desktop navigation and two-column hero visible; no horizontal overflow; project intro and visual use two columns |
| `479`, `480`, `481` px wide | No overflow or layout discontinuity around the narrow-layout breakpoint |
| `767`, `768`, `769` px wide | Navigation changes intentionally; hero scale changes by only 2.5px across the boundary; no overflow |
| `991`, `992`, `993` px wide | Project cards change from one to two columns without a font-size jump or overflow |
| `1024`, `1280`, `1440` px wide | Desktop layouts remain bounded by the maximum content width |

Additional observed measurements:

- widest desktop metric has a 16px gap before its label;
- mobile menu link heights are 52-53px;
- footer `Back to top` control is 44px high;
- first project card reports no internal horizontal overflow;
- heading order begins `h1`, then section `h2`, then item `h3` without a skipped level.

## Visual and interaction evidence

- Desktop hero inspected at `1440x900` after the final metric fix.
- Desktop selected-work section inspected after smooth-scroll settled; card border, split layout, text wrapping, and original SVG visual rendered cleanly.
- Tablet hero and evidence panel inspected at `768x1024`.
- Mobile hero, open navigation, and selected-work entry inspected at `375x812`.
- Mobile menu exposed the correct expanded state and four reachable navigation links.
- Desktop contact layout inspected at `1440x900`; labels, helper text, direct contact links, and form remained readable with no internal overflow.
- Mobile contact layout inspected at `375x812`; form reflowed below the contact links with no horizontal overflow.
- Submitted synthetic local contact data with delivery intentionally unconfigured; the visible live-region message correctly stated that delivery was not configured and directed the visitor to email.
- Browser console inspection after contact interactions returned zero warnings or errors.

## Standalone production runtime

The build now stages `.next/static` and optional public assets inside `.next/standalone` before runtime verification.

| Check | Observed result |
| --- | --- |
| `PORT=3005 npm start` | Standalone server ready immediately on `0.0.0.0:3005` |
| `GET /api/health` | `200` with `{"status":"ok"}` |
| `GET /` | HTML returned with a reachable generated CSS asset |
| Browser at `375x812` | CSS loaded, hero computed to `48.75px`, no horizontal overflow |
| Missing route | HTTP `404` with the custom not-found experience |

Docker CLI and Docker Desktop were not installed on this Mac. Cloud Build and the active Cloud Run revision provide the container build/run evidence recorded below; no unsupported local result is inferred.

## Final verification checkpoint - 2026-11-08

### Repository and local release candidate

| Check | Observed result |
| --- | --- |
| `npm run check` | Passed: lint with zero warnings, strict TypeScript, 5 test files/11 tests, and production build |
| `npm run test:e2e:run` | Passed: 16/16 desktop/mobile Chrome checks |
| Automated accessibility | No serious or critical axe violations at desktop or mobile widths |
| Responsive behavior | Required and breakpoint-adjacent viewports passed without horizontal overflow |
| Metadata build input | Cloud Build now passes the verified public HTTPS origin into the Docker builder; generated production HTML reported that origin in `og:url` |

### GitHub, container, and Cloud Run

- Pull request #5 merged as `4f83257495735ff06ca2cafba3334d101164ec72`.
- GitHub Actions run `42539147070` passed on that `main` commit.
- Cloud Build `6a23e5cb-baed-4c5a-a6e5-9c7596b9929d` built the committed multi-stage Dockerfile and completed successfully.
- Cloud Run revision `portfolio-00009-28h` is Ready, receives 100% of traffic, and has a commit label and image tag matching the merge commit.
- The resolved production image digest is `sha256:8856cf9651caad0c097f7597027fa7d7037316f3d83884e7a878c37808e4e389`.
- The public health endpoint returned HTTP 200 with `{"status":"ok"}`; the home page returned 200 and a missing route returned 404.

### Live browser and link evidence

- Read-only Chrome passes at `375x812`, `768x1024`, and `1440x900` observed no horizontal overflow, browser console errors, or page errors.
- Both authentic project screenshots completed loading with non-zero natural widths at all three live viewports.
- The removed “supplied by Asher Javaid” captions are absent from the public page.
- The Creator Intelligence repository returned HTTP 200. LinkedIn returned its automated-client status 999, which is an anti-bot response rather than evidence of a malformed profile URL.
- The student confirmed that the live Resend-backed contact form delivered successfully after configuration. Automated tests independently cover validation, provider acceptance/failure, and user feedback states without sending or recording private message content.

### Lighthouse

| Profile | Performance | Accessibility | Best Practices | SEO | Key observations |
| --- | ---: | ---: | ---: | ---: | --- |
| Desktop production | 100 | 100 | 100 | 100 | FCP 0.3s, LCP 0.5s, TBT 0ms, CLS 0 |
| Mobile production | 82 | 100 | 100 | 100 | FCP 1.0s, LCP 1.9s, CLS 0; one run reported 700ms TBT, including a 571ms unattributable task |

The desktop representative page exceeds the repository's 90-point target in every category. The mobile result preserves strong visual-loading and stability metrics but leaves a documented performance-variance opportunity outside the scored course rubric.

### Explicit limitations

- A local Docker CLI was not available, so the image was not run on this Mac. The same committed Dockerfile was built successfully by Cloud Build and verified through the Ready Cloud Run revision and live health/routes.
- The GitHub repository is public by student choice; the assignment instructions specify a private repository.
- The deployed provider credential should be stored through Secret Manager and rotated if it was ever exposed during console review. No credential value is present in source or this evidence record.

All seven in-scope implementation criteria have current evidence. The separate reflection remains student-owned.
