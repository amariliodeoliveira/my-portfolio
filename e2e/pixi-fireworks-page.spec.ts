import { expect, test } from "@playwright/test";

const demoUrl = "https://fireworks-pixi-project.vercel.app/";
const repositoryUrl =
  "https://github.com/amariliodeoliveira/fireworks-pixi-project";

test.describe("pixi fireworks page", () => {
  test("renders semantic content and project actions", async ({ page }) => {
    await page.goto("/pixi-fireworks");

    const unavailableHeading = page.getByRole("heading", {
      level: 1,
      name: "Demo unavailable",
    });

    if (await unavailableHeading.isVisible().catch(() => false)) {
      await expect(
        page.getByRole("link", { name: "View repository" }),
      ).toHaveAttribute("href", repositoryUrl);
      await expect(
        page.getByRole("link", { name: "Back to home" }),
      ).toHaveAttribute("href", "/");
      return;
    }

    await expect(
      page.getByRole("heading", {
        level: 1,
        name: "PixiJS Fireworks Presentation",
      }),
    ).toBeVisible();

    const resourcesNavigation = page.getByRole("navigation", {
      name: "PixiJS fireworks resources",
    });

    const liveDemoLink = resourcesNavigation.getByRole("link", {
      name: "Open live demo",
    });
    await expect(liveDemoLink).toHaveAttribute("href", demoUrl);
    await expect(liveDemoLink).toHaveAttribute("target", "_blank");
    await expect(liveDemoLink).toHaveAttribute("rel", /noopener/);
    await expect(liveDemoLink).toHaveAttribute("rel", /noreferrer/);

    const repositoryLink = resourcesNavigation.getByRole("link", {
      name: "View repository",
    });
    await expect(repositoryLink).toHaveAttribute("href", repositoryUrl);
    await expect(repositoryLink).toHaveAttribute("target", "_blank");

    await expect(
      page.getByRole("heading", {
        level: 2,
        name: "Embedded PixiJS fireworks demo",
      }),
    ).toBeAttached();

    const demoFrame = page.locator(
      'iframe[title="PixiJS fireworks interactive demo"]',
    );
    await expect(demoFrame).toHaveAttribute("src", demoUrl);

    const detailsSection = page.getByRole("region", {
      name: "What the project covers",
    });
    await expect(
      detailsSection.getByRole("heading", {
        level: 2,
        name: "What the project covers",
      }),
    ).toBeVisible();
    await expect(detailsSection.locator("article")).toHaveCount(4);
  });
});
