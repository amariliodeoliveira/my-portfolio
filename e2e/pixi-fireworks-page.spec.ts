import { expect, test } from "@playwright/test";

const demoUrl = "https://fireworks-pixi-project.vercel.app/";
const repositoryUrl =
  "https://github.com/amariliodeoliveira/fireworks-pixi-project";

test.describe("pixi fireworks page", () => {
  test("renders semantic content and project actions", async ({ page }) => {
    // Keep this route test deterministic and independent from the external demo
    // deployment. The embed's error and unavailable states are covered by the
    // component tests; this browser test verifies the loaded page contract.
    await page.route(`${demoUrl}**`, (route) =>
      route.fulfill({
        status: 200,
        contentType: "text/html",
        body: "<!doctype html><html><body>PixiJS demo</body></html>",
      }),
    );
    await page.goto("/pixi-fireworks", { waitUntil: "commit" });

    const unavailableHeading = page.getByRole("heading", {
      level: 1,
      name: "Demo unavailable",
    });
    const demoHeading = page.getByRole("heading", {
      level: 1,
      name: "PixiJS Fireworks Presentation",
    });

    await expect(unavailableHeading).toBeHidden();
    await expect(demoHeading).toBeVisible();

    const resourcesNavigation = page.getByRole("navigation", {
      name: "PixiJS fireworks resources",
    });
    await expect(
      resourcesNavigation.getByRole("link", { name: "Open live demo" }),
    ).toHaveAttribute("href", demoUrl);
    await expect(
      resourcesNavigation.getByRole("link", { name: "View repository" }),
    ).toHaveAttribute("href", repositoryUrl);
    await expect(
      page.getByRole("heading", {
        level: 2,
        name: "Embedded PixiJS fireworks demo",
      }),
    ).toBeAttached();
    await expect(
      page.locator('iframe[title="PixiJS fireworks interactive demo"]'),
    ).toHaveAttribute("src", demoUrl);
    const detailsSection = page.getByRole("region", {
      name: "What the project covers",
    });
    await expect(detailsSection.locator("article")).toHaveCount(4);
  });
});
