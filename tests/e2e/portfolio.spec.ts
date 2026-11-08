import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test("home page has no serious or critical automated accessibility violations", async ({
  page,
}) => {
  await page.goto("/");

  const results = await new AxeBuilder({ page }).analyze();
  const blockingViolations = results.violations.filter(
    (violation) => violation.impact === "serious" || violation.impact === "critical",
  );

  expect(blockingViolations).toEqual([]);
});

test("core content and direct anchors remain reachable without horizontal overflow", async ({
  page,
}) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "I turn complex signals",
  );
  expect(await page.getByRole("heading", { level: 3 }).count()).toBeGreaterThanOrEqual(11);

  const anchors = ["work", "approach", "capabilities", "contact"];
  for (const anchor of anchors) {
    await expect(page.locator(`#${anchor}`)).toBeAttached();
  }

  const hasHorizontalOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth > window.innerWidth,
  );
  expect(hasHorizontalOverflow).toBe(false);
});

test("contact form exposes labels and honest unconfigured feedback", async ({ page }) => {
  await page.goto("/#contact");
  await page.getByLabel("Name", { exact: true }).fill("Jordan Lee");
  await page.getByLabel("Email", { exact: true }).fill("jordan@example.com");
  await page
    .getByLabel("Message", { exact: true })
    .fill("I would like to discuss a product analytics opportunity.");
  await page.locator('input[name="formStartedAt"]').evaluate((input: HTMLInputElement) => {
    input.value = String(Date.now() - 5_000);
  });
  await page.getByRole("button", { name: "Send message" }).click();

  await expect(page.getByText(/Form delivery is not configured yet/)).toBeVisible();
});

test("custom missing page returns a useful recovery action", async ({ page }) => {
  const response = await page.goto("/missing-for-e2e");

  expect(response?.status()).toBe(404);
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "This path doesn't lead to a case study",
  );
  await expect(page.getByRole("link", { name: "Return to the portfolio" })).toBeVisible();
});

test("reduced-motion preference disables smooth scrolling and long transitions", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");

  const motion = await page.evaluate(() => ({
    scrollBehavior: getComputedStyle(document.documentElement).scrollBehavior,
    buttonTransition: getComputedStyle(document.querySelector(".button")!).transitionDuration,
  }));

  expect(motion.scrollBehavior).toBe("auto");
  expect(Number.parseFloat(motion.buttonTransition)).toBeLessThanOrEqual(0.001);
});

test("links are non-empty and local hash links resolve to real targets", async ({ page }) => {
  await page.goto("/");

  const links = await page.locator("a[href]").evaluateAll((elements) =>
    elements.map((element) => element.getAttribute("href")),
  );

  expect(links.length).toBeGreaterThan(0);
  for (const href of links) {
    expect(href).toBeTruthy();
    if (href?.startsWith("#")) {
      await expect(page.locator(href)).toBeAttached();
    }
  }
});

test("real project screenshots load and the supplied repository link is exposed", async ({
  page,
}) => {
  await page.goto("/#work");

  const creatorScreenshot = page.getByAltText(
    /YouTube Creator Insights benchmarking interface/,
  );
  const fashionScreenshot = page.getByAltText(/AI Fashion Trend Radar workflow/);

  await creatorScreenshot.scrollIntoViewIfNeeded();
  await expect(creatorScreenshot).toBeVisible();
  await fashionScreenshot.scrollIntoViewIfNeeded();
  await expect(fashionScreenshot).toBeVisible();

  await expect
    .poll(() => creatorScreenshot.evaluate((image: HTMLImageElement) => image.naturalWidth))
    .toBeGreaterThan(0);
  await expect
    .poll(() => fashionScreenshot.evaluate((image: HTMLImageElement) => image.naturalWidth))
    .toBeGreaterThan(0);

  await expect(page.getByRole("link", { name: "View project repository" })).toHaveAttribute(
    "href",
    "https://github.com/AsherJ07/purdue-youtube-ip-new",
  );

  await expect(page.getByText(/supplied by Asher Javaid/i)).toHaveCount(0);

  if ((page.viewportSize()?.width ?? 0) > 1088) {
    const fashionHeading = page.getByRole("heading", {
      level: 3,
      name: "Turning fragmented fashion signals into a structured trend brief",
    });
    const positions = await Promise.all([
      fashionHeading.evaluate((element) => element.getBoundingClientRect().left),
      fashionScreenshot.evaluate((element) => element.getBoundingClientRect().left),
    ]);

    expect(positions[1]).toBeGreaterThan(positions[0]);
  }
});

test("background treatment spans the viewport while content stays bounded", async ({ page }) => {
  await page.goto("/");

  const geometry = await page.locator(".background-section").evaluate((section) => {
    const inner = section.querySelector<HTMLElement>(":scope > .section-shell");

    if (!inner) {
      throw new Error("Background section is missing its inner content shell");
    }

    const sectionBox = section.getBoundingClientRect();
    const innerBox = inner.getBoundingClientRect();

    return {
      sectionLeft: sectionBox.left,
      sectionRight: sectionBox.right,
      innerLeft: innerBox.left,
      innerRight: innerBox.right,
      viewportWidth: window.innerWidth,
    };
  });

  expect(geometry.sectionLeft).toBe(0);
  expect(geometry.sectionRight).toBe(geometry.viewportWidth);
  expect(geometry.innerLeft).toBeGreaterThan(geometry.sectionLeft);
  expect(geometry.innerRight).toBeLessThan(geometry.sectionRight);
});
