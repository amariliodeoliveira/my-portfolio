import { mkdtemp, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";

import { generateAEOFiles, resolveConfig } from "aeo.js";
import { expect, it } from "vitest";

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

it("generates complete and internally consistent discovery artifacts", async () => {
  const outputDirectory = await mkdtemp(path.join(tmpdir(), "portfolio-aeo-"));
  const siteUrl = "https://portfolio.example.com";

  try {
    const config = resolveConfig({
      ...createAeoConfig(siteUrl),
      outDir: outputDirectory,
    });
    const result = await generateAEOFiles(config);

    expect(result.errors).toEqual([]);
    expect(
      new Set(result.files.map((filename) => path.basename(filename))),
    ).toEqual(new Set(expectedFiles));

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

    expect(aiIndex.entries).toHaveLength(3);
    expect(
      aiIndex.entries
        .find((entry) => entry.url.endsWith("/about-me"))
        ?.content.includes(MyProfile.about.fullBio),
    ).toBe(true);
    expect(aiIndexSource).not.toMatch(/amarilio\.tech|Press ctrl\+k|^close$/im);
    expect(sitemap).toContain(`${siteUrl}/about-me`);
    expect(sitemap).toContain(`${siteUrl}/pixi-fireworks`);
    expect(robots).toContain(`Sitemap: ${siteUrl}/sitemap.xml`);
    expect(llms).toContain(`${siteUrl}/ai-index.json`);
    expect(new Set(Object.keys(schema.pages))).toEqual(
      new Set(["/", "/about-me", "/pixi-fireworks"]),
    );
  } finally {
    await rm(outputDirectory, { recursive: true, force: true });
  }
});
