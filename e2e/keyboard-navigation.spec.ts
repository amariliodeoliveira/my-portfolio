import { expect, test } from "@playwright/test";

const NAVIGATOR_MODAL = "#navigation_modal";
const SEARCH_INPUT = "#navigation_search";

test.describe("navigator modal", () => {
  test("Ctrl+K opens the modal and focuses the search input", async ({
    page,
  }) => {
    await page.goto("/");
    await expect(page.locator(NAVIGATOR_MODAL)).not.toBeVisible();

    await page.keyboard.press("Control+k");

    await expect(page.locator(NAVIGATOR_MODAL)).toBeVisible();
    await expect(page.locator(SEARCH_INPUT)).toBeFocused();
  });

  test("the header menu button opens the modal too", async ({ page }) => {
    await page.goto("/");

    await page.getByRole("button", { name: "Open menu" }).click();

    await expect(page.locator(NAVIGATOR_MODAL)).toBeVisible();
  });

  test("Escape closes the modal", async ({ page }) => {
    await page.goto("/");
    await page.keyboard.press("Control+k");
    await expect(page.locator(NAVIGATOR_MODAL)).toBeVisible();

    await page.keyboard.press("Escape");

    await expect(page.locator(NAVIGATOR_MODAL)).not.toBeVisible();
  });

  test("typing a query never triggers a shortcut, even when it starts with a shortcut letter", async ({
    page,
  }) => {
    await page.goto("/");
    await page.keyboard.press("Control+k");

    await page.keyboard.type("home");

    await expect(page.locator(SEARCH_INPUT)).toHaveValue("home");
    await expect(page).toHaveURL("/");
    await expect(page.locator(NAVIGATOR_MODAL)).toBeVisible();
  });

  test("pressing a shortcut letter (once focus has left the search box) navigates and closes the modal", async ({
    page,
  }) => {
    await page.goto("/");
    await page.keyboard.press("Control+k");
    await page.keyboard.press("Tab"); // move focus off the search input

    await page.keyboard.press("a");

    await expect(page).toHaveURL("/about-me");
    await expect(page.locator(NAVIGATOR_MODAL)).not.toBeVisible();
  });

  test("pressing 'c' copies the current URL and closes the modal", async ({
    page,
    context,
  }) => {
    await context.grantPermissions(["clipboard-read", "clipboard-write"]);
    await page.goto("/about-me");
    await page.keyboard.press("Control+k");
    await page.keyboard.press("Tab");

    await page.keyboard.press("c");

    await expect(page.locator(NAVIGATOR_MODAL)).not.toBeVisible();
    const clipboardText = await page.evaluate(() =>
      navigator.clipboard.readText(),
    );
    expect(clipboardText).toContain("/about-me");
  });

  test("social links open in a new tab with rel=noopener noreferrer", async ({
    page,
  }) => {
    await page.goto("/");
    await page.keyboard.press("Control+k");

    const linkedInLink = page
      .locator(NAVIGATOR_MODAL)
      .getByRole("link", { name: /linkedin/i });
    await expect(linkedInLink).toHaveAttribute("target", "_blank");
    await expect(linkedInLink).toHaveAttribute("rel", /noopener/);
    await expect(linkedInLink).toHaveAttribute("rel", /noreferrer/);
  });

  test("the 'Portfolio' entry only ever lists real, navigable routes", async ({
    page,
  }) => {
    await page.goto("/");
    await page.keyboard.press("Control+k");

    await expect(
      page.getByRole("link", { name: "PixiJS - Fireworks Presentation" }),
    ).toHaveAttribute("href", "/pixi-fireworks");
    await expect(
      page.getByRole("link", { name: "Portfolio", exact: true }),
    ).toHaveCount(0);
  });
});
