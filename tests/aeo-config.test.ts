import assert from "node:assert/strict";
import test from "node:test";

import { createAeoConfig } from "../src/config/aeo.ts";
import { resolveSiteUrl } from "../src/config/site.ts";
import { MyProfile } from "../src/data/profile.ts";

void test("normalizes explicit site URLs", () => {
  assert.equal(
    resolveSiteUrl("portfolio.example.com/"),
    "https://portfolio.example.com",
  );
  assert.equal(
    resolveSiteUrl("http://localhost:3000/"),
    "http://localhost:3000",
  );
});

void test("prefers the canonical environment variable", () => {
  const previousSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const previousVercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;

  try {
    process.env.NEXT_PUBLIC_SITE_URL = "https://canonical.example.com/";
    process.env.VERCEL_PROJECT_PRODUCTION_URL = "deployment.vercel.app";

    assert.equal(resolveSiteUrl(), "https://canonical.example.com");
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

void test("defines complete, source-driven entries for every public route", () => {
  const config = createAeoConfig("https://portfolio.example.com/");

  assert.equal(config.url, "https://portfolio.example.com");
  assert.deepEqual(
    config.pages?.map((page) => page.pathname),
    ["/", "/about-me", "/pixi-fireworks"],
  );

  for (const page of config.pages ?? []) {
    assert.ok(page.title);
    assert.ok(page.description);
    assert.ok(page.content);
    assert.doesNotMatch(page.content, /amarilio\.tech|Press ctrl\+k|^close$/im);
  }

  const aboutPage = config.pages?.find((page) => page.pathname === "/about-me");
  assert.ok(aboutPage?.content?.includes(MyProfile.about.fullBio));
  assert.equal(config.schema?.organization?.url, config.url);
  assert.equal(
    config.og?.image,
    `${config.url}${MyProfile.seo.openGraph.image}`,
  );
});
