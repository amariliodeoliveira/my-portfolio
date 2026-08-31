import { describe, expect, it } from "vitest";

import { createAeoConfig } from "../src/config/aeo.ts";
import { resolveSiteUrl } from "../src/config/site.ts";
import { MyProfile } from "../src/data/profile.ts";

describe("site URL resolution", () => {
  it("normalizes explicit site URLs", () => {
    expect(resolveSiteUrl("portfolio.example.com/")).toBe(
      "https://portfolio.example.com",
    );
    expect(resolveSiteUrl("http://localhost:3000/")).toBe(
      "http://localhost:3000",
    );
  });

  it("prefers the canonical environment variable", () => {
    const previousSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;
    const previousVercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;

    try {
      process.env.NEXT_PUBLIC_SITE_URL = "https://canonical.example.com/";
      process.env.VERCEL_PROJECT_PRODUCTION_URL = "deployment.vercel.app";

      expect(resolveSiteUrl()).toBe("https://canonical.example.com");
    } finally {
      if (previousSiteUrl === undefined) {
        delete process.env.NEXT_PUBLIC_SITE_URL;
      } else {
        process.env.NEXT_PUBLIC_SITE_URL = previousSiteUrl;
      }

      if (previousVercelUrl === undefined) {
        delete process.env.VERCEL_PROJECT_PRODUCTION_URL;
      } else {
        process.env.VERCEL_PROJECT_PRODUCTION_URL = previousVercelUrl;
      }
    }
  });
});

it("defines complete, source-driven entries for every public route", () => {
  const config = createAeoConfig("https://portfolio.example.com/");

  expect(config.url).toBe("https://portfolio.example.com");
  expect(config.pages?.map((page) => page.pathname)).toEqual([
    "/",
    "/about-me",
    "/pixi-fireworks",
  ]);

  for (const page of config.pages ?? []) {
    expect(page.title).toBeTruthy();
    expect(page.description).toBeTruthy();
    expect(page.content).toBeTruthy();
    expect(page.content).not.toMatch(/amarilio\.tech|Press ctrl\+k|^close$/im);
  }

  const aboutPage = config.pages?.find((page) => page.pathname === "/about-me");
  expect(aboutPage?.content).toContain(MyProfile.about.fullBio);
  expect(config.schema?.organization?.url).toBe(config.url);
  expect(config.og?.image).toBe(
    `${config.url}${MyProfile.seo.openGraph.image}`,
  );
});
