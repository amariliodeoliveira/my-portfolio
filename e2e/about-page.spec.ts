import { expect, test } from "@playwright/test";

const layoutViewports = [
  { name: "desktop", width: 1280, height: 800 },
  { name: "mobile", width: 390, height: 844 },
] as const;

test.describe("about page", () => {
  test("renders semantic about and career sections with the CV call to action", async ({
    page,
  }) => {
    await page.goto("/about-me");

    await expect(
      page.getByRole("heading", {
        level: 1,
        name: "Turning Coffee Into Code!",
      }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { level: 2, name: "My Career" }),
    ).toBeVisible();
    await expect(page.locator("article")).toHaveCount(4);

    const cvLink = page
      .getByRole("region", { name: "My Career" })
      .getByRole("link", { name: "Open CV PDF in a new tab" });

    await expect(cvLink).toHaveAttribute(
      "href",
      "/files/amarilio-de-oliveira-cv.pdf",
    );
    await expect(cvLink).toHaveAttribute("target", "_blank");
    await expect(cvLink).toHaveAttribute("rel", /noopener/);
    await expect(cvLink).toHaveAttribute("rel", /noreferrer/);
  });

  for (const viewport of layoutViewports) {
    test(`keeps the biography stable while the profile image loads on ${viewport.name}`, async ({
      page,
    }) => {
      await page.setViewportSize(viewport);

      let releaseImage: () => void;
      const imageCanLoad = new Promise<void>((resolve) => {
        releaseImage = resolve;
      });
      let markImageRequested: () => void;
      const imageRequested = new Promise<void>((resolve) => {
        markImageRequested = resolve;
      });

      await page.route(/profile-oficial/, async (route) => {
        markImageRequested();
        await imageCanLoad;
        await route.continue();
      });

      await page.goto("/about-me", { waitUntil: "domcontentloaded" });
      await imageRequested;

      const biography = page
        .locator("main p")
        .filter({ hasText: /^I've been curious about technology/ });
      await biography.waitFor({ state: "visible" });
      const beforeImageLoad = await biography.boundingBox();

      expect(beforeImageLoad).not.toBeNull();

      releaseImage!();
      const profileImage = page.getByRole("img", {
        name: "Amarilio de Oliveira",
      });
      await expect(profileImage).toBeVisible();
      await expect
        .poll(() =>
          profileImage.evaluate(
            (image) => (image as HTMLImageElement).complete,
          ),
        )
        .toBe(true);

      const afterImageLoad = await biography.boundingBox();

      expect(afterImageLoad).not.toBeNull();
      expect(afterImageLoad!.x).toBeCloseTo(beforeImageLoad!.x, 0);
      expect(afterImageLoad!.y).toBeCloseTo(beforeImageLoad!.y, 0);
      expect(afterImageLoad!.width).toBeCloseTo(beforeImageLoad!.width, 0);
    });
  }
});
