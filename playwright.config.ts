import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: "html",
  use: {
    baseURL: "http://localhost:3000",
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
  webServer: {
    // A production build serves every route pre-compiled, so navigation
    // assertions aren't racing Turbopack's on-demand dev compile.
    command: "npm run build && npm run start",
    url: "http://localhost:3000",
    // Reusing a stale local server can make tests exercise an older build.
    // Opt in explicitly when that is intentional.
    reuseExistingServer: process.env.PLAYWRIGHT_REUSE_SERVER === "true",
    gracefulShutdown: { signal: "SIGINT", timeout: 1000 },
    timeout: 120_000,
  },
});
