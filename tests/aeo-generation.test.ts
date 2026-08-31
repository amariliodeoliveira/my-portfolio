import assert from "node:assert/strict";
import { mkdtemp, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";

import { generateAEOFiles, resolveConfig } from "aeo.js";

import { createAeoConfig } from "../src/config/aeo.ts";
import { MyProfile } from "../src/data/profile.ts";

const expectedFiles = [
  "about-me.md",
  "ai-index.json",
  "docs.json",
  "index.md",
  "llms-full.txt",
  "llms.txt",
  "pixi-fireworks.md",
  "robots.txt",
  "schema.json",
  "sitemap.xml",
] as const;

void test("generates complete and internally consistent discovery artifacts", async () => {
  const outputDirectory = await mkdtemp(path.join(tmpdir(), "portfolio-aeo-"));
  const siteUrl = "https://portfolio.example.com";

  try {
    const config = resolveConfig({
      ...createAeoConfig(siteUrl),
      outDir: outputDirectory,
    });
    const result = await generateAEOFiles(config);

    assert.deepEqual(result.errors, []);
    assert.deepEqual(
      new Set(result.files.map((filename) => path.basename(filename))),
      new Set(expectedFiles),
    );

    const readArtifact = (filename: string) => {
      // Filenames come from the fixed expectedFiles list and stay inside the
      // dedicated temporary directory created by this test.
      // eslint-disable-next-line security/detect-non-literal-fs-filename
      return readFile(path.join(outputDirectory, filename), "utf8");
    };
    const [aiIndexSource, sitemap, robots, llms, schemaSource] =
      await Promise.all([
        readArtifact("ai-index.json"),
        readArtifact("sitemap.xml"),
        readArtifact("robots.txt"),
        readArtifact("llms.txt"),
        readArtifact("schema.json"),
      ]);

    const aiIndex = JSON.parse(aiIndexSource) as {
      entries: Array<{ url: string; content: string }>;
    };
    const schema = JSON.parse(schemaSource) as {
      pages: Record<string, unknown>;
    };

    assert.equal(aiIndex.entries.length, 3);
    assert.ok(
      aiIndex.entries
        .find((entry) => entry.url.endsWith("/about-me"))
        ?.content.includes(MyProfile.about.fullBio),
    );
    assert.doesNotMatch(
      aiIndexSource,
      /amarilio\.tech|Press ctrl\+k|^close$/im,
    );
    assert.match(sitemap, new RegExp(`${siteUrl}/about-me`));
    assert.match(sitemap, new RegExp(`${siteUrl}/pixi-fireworks`));
    assert.match(robots, new RegExp(`Sitemap: ${siteUrl}/sitemap\\.xml`));
    assert.match(llms, new RegExp(`${siteUrl}/ai-index\\.json`));
    assert.deepEqual(
      new Set(Object.keys(schema.pages)),
      new Set(["/", "/about-me", "/pixi-fireworks"]),
    );
  } finally {
    await rm(outputDirectory, { recursive: true, force: true });
  }
});
