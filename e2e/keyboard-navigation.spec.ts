import { expect, type Page, test } from "@playwright/test";

const NAVIGATOR_MODAL = "#navigation_modal";
const SEARCH_INPUT = "#navigation_search";

async function openNavigatorModal(page: Page) {
  await page.getByRole("button", { name: "Open menu" }).click();
  await expect(page.locator(NAVIGATOR_MODAL)).toBeVisible();
  await expect(page.locator(SEARCH_INPUT)).toBeFocused();
}

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

  test("modal menu content is only mounted after the modal opens", async ({
    page,
  }) => {
    await page.goto("/");

    await expect(page.locator(`${NAVIGATOR_MODAL} a`)).toHaveCount(0);

    await page.getByRole("button", { name: "Open menu" }).click();

    await expect(
      page.locator(NAVIGATOR_MODAL).getByRole("link"),
    ).not.toHaveCount(0);
  });

  test("Escape closes the modal", async ({ page }) => {
    await page.goto("/");
    await openNavigatorModal(page);

    await page.keyboard.press("Escape");

    await expect(page.locator(NAVIGATOR_MODAL)).not.toBeVisible();
  });

  test("typing a query never triggers a shortcut, even when it starts with a shortcut letter", async ({
    page,
  }) => {
    await page.goto("/");
    await openNavigatorModal(page);

    await page.keyboard.type("home");

    await expect(page.locator(SEARCH_INPUT)).toHaveValue("home");
    await expect(page).toHaveURL("/");
    await expect(page.locator(NAVIGATOR_MODAL)).toBeVisible();
  });

  test("pressing a shortcut letter (once focus has left the search box) navigates and closes the modal", async ({
    page,
  }) => {
    await page.goto("/");
    await openNavigatorModal(page);
    await page.keyboard.press("Tab"); // move focus off the search input

    await page.keyboard.press("a");

    await expect(page).toHaveURL("/about-me");
    await expect(page.locator(NAVIGATOR_MODAL)).not.toBeVisible();
  });

  test("the CV shortcut opens the PDF in a new tab", async ({ page }) => {
    await page.addInitScript(() => {
      globalThis.open = (url, target, features) => {
        globalThis.sessionStorage.setItem(
          "lastWindowOpen",
          JSON.stringify({ url, target, features }),
        );

        return null;
      };
    });

    await page.goto("/");
    await openNavigatorModal(page);
    await page.keyboard.press("Tab"); // move focus off the search input

    await page.keyboard.press("d");
    const windowOpenCall = await page.evaluate(() =>
      JSON.parse(globalThis.sessionStorage.getItem("lastWindowOpen") ?? "{}"),
    );

    expect(windowOpenCall).toMatchObject({
      url: "/files/amarilio-de-oliveira-cv.pdf",
      target: "_blank",
      features: "noopener,noreferrer",
    });
    await expect(page).toHaveURL("/");
    await expect(page.locator(NAVIGATOR_MODAL)).not.toBeVisible();
  });

  test("pressing 'c' copies the current URL and closes the modal", async ({
    page,
    context,
  }) => {
    await context.grantPermissions(["clipboard-read", "clipboard-write"]);
    await page.goto("/about-me");
    await openNavigatorModal(page);
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
    await openNavigatorModal(page);

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
    await openNavigatorModal(page);

    await expect(
      page.getByRole("link", { name: "PixiJS - Fireworks Presentation" }),
    ).toHaveAttribute("href", "/pixi-fireworks");
    await expect(
      page.getByRole("link", { name: "Portfolio", exact: true }),
    ).toHaveCount(0);
  });
});

test.describe("header navigation", () => {
  test("closes the portfolio dropdown after navigating to a sublink", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto("/");

    const portfolioDropdown = page.locator("details").filter({
      has: page.locator("summary", { hasText: "Portfolio" }),
    });

    await page.getByText("Portfolio").click();
    await expect(portfolioDropdown).toHaveAttribute("open", "");

    await page
      .getByRole("link", { name: "PixiJS - Fireworks Presentation" })
      .click();

    await expect(page).toHaveURL("/pixi-fireworks");
    await expect(portfolioDropdown).not.toHaveAttribute("open", "");
  });
});
