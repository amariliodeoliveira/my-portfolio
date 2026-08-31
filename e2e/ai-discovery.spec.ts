import { expect, test } from "@playwright/test";

import { SITE_URL } from "@/config/site";

const publicRoutes = ["/", "/about-me", "/pixi-fireworks"] as const;
const discoveryFiles = [
  "/llms.txt",
  "/llms-full.txt",
  "/docs.json",
  "/ai-index.json",
  "/schema.json",
  "/robots.txt",
  "/sitemap.xml",
] as const;

test.describe("AI discovery metadata", () => {
  for (const route of publicRoutes) {
    test(`${route} exposes canonical, discovery links, and valid JSON-LD`, async ({
      page,
    }) => {
      await page.goto(route);

      const canonicalUrl = route === "/" ? SITE_URL : `${SITE_URL}${route}`;
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
        "href",
        canonicalUrl,
      );
      await expect(page.locator('link[rel="alternate"]')).toHaveCount(4);

      const schemas = await page
        .locator('script[type="application/ld+json"]')
        .allTextContents();
      expect(schemas.length).toBeGreaterThan(0);
      for (const schema of schemas) {
        expect(() => JSON.parse(schema)).not.toThrow();
      }
    });
  }

  test("serves every generated discovery artifact", async ({ request }) => {
    for (const filename of discoveryFiles) {
      const response = await request.get(filename);
      expect(response.ok(), `${filename} should be publicly available`).toBe(
        true,
      );
      const body = await response.body();
      expect(body.length).toBeGreaterThan(0);
    }
  });
});
