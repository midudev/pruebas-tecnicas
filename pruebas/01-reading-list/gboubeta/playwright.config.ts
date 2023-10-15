import type { PlaywrightTestConfig } from "@playwright/test";
import { devices } from "@playwright/test";

/**
 * See https://playwright.dev/docs/test-configuration.
 */
const config: PlaywrightTestConfig = {
  testDir: "./tests",
  /* Run tests in files in parallel */
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 2,
  workers: process.env.CI ? 1 : undefined,
  reporter: [["list"], ["html"], ["./tools/md-reporter.ts"]],
  use: {
    actionTimeout: 0,
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "Desktop Chrome",
      testMatch: /.*e2e.spec.ts/,
      use: {
        ...devices["Desktop Chrome"],
      },
    },
    {
      name: "Mobile Safari",
      testMatch: /.*e2e.mobile.spec.ts/,
      use: {
        ...devices["iPhone 13"],
      },
    },
    // {
    //   name: 'webkit',
    //   use: {
    //     ...devices['Desktop Safari'],
    //   },
    // },
  ],

  webServer: {
    command: "npm run preview",
    port: 4173,
  },
};

export default config;
