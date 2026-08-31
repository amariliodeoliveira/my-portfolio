import path from "node:path";

const buildEslintCommand = (filenames: string[]) =>
  `eslint ${filenames
    .map((f) => `"${path.relative(process.cwd(), f)}"`)
    .join(" ")}`;

const buildTypeCheckCommand = () => "tsc --noEmit";

const config = {
  "**/*.{js,jsx,ts,tsx}": [
    "prettier --write",
    "eslint --fix --fix-type layout",
    buildEslintCommand,
  ],
  "**/*.{ts,tsx}": [buildTypeCheckCommand],
  "**/*.{json,css,md,yml,yaml}": ["prettier --write"],
};

export default config;
