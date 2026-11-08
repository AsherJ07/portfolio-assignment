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
