import type { PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {
  webServer: {
    command: 'npm run build && npm run preview',
    port: 4173
  },
  testDir: '__e2e__',
  testMatch: /(.+\.)?(test|spec)\.[jt]s/,
  timeout: 5 * 1000
}

export default config
