import { expect, test } from "@playwright/test";

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
});
