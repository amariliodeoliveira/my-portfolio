import { generateAEOFiles, resolveConfig } from "aeo.js";

import { createAeoConfig } from "../src/config/aeo.ts";

const config = resolveConfig(createAeoConfig());
const result = await generateAEOFiles(config);

if (result.errors.length > 0) {
  throw new Error(`AEO generation failed:\n${result.errors.join("\n")}`);
}

console.log(
  `[aeo.js] Generated ${result.files.length} files from shared site data`,
);
