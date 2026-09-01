import { describe, expect, it } from "vitest";

import packageManifestJson from "../package.json" with { type: "json" };

type PackageManifest = {
  devDependencies?: Record<string, string>;
  release?: {
    plugins?: Array<string | [string, Record<string, unknown>]>;
  };
};

const packageManifest = packageManifestJson as PackageManifest;

describe("release configuration", () => {
  it("publishes from protected main without creating release commits", () => {
    const pluginNames = (packageManifest.release?.plugins ?? []).map(
      (plugin) => (typeof plugin === "string" ? plugin : plugin[0]),
    );

    expect(packageManifest.devDependencies).toHaveProperty("semantic-release");
    expect(packageManifest.devDependencies).not.toHaveProperty(
      "@semantic-release/git",
    );
    expect(pluginNames).toEqual([
      "@semantic-release/commit-analyzer",
      "@semantic-release/release-notes-generator",
      "@semantic-release/github",
    ]);
  });
});
