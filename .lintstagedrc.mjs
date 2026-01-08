import path from "path";

const buildEslintCommand = (filenames) =>
  `eslint --max-warnings=0 ${filenames
    .map((f) => `"${path.relative(process.cwd(), f)}"`)
    .join(" ")}`;

export default {
  "**/*.{js,jsx,ts,tsx}": ["prettier --write", buildEslintCommand],
};
