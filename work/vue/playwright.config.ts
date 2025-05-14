import { defineConfig } from '@playwright/test'
export default defineConfig({
  testDir: 'tests/e2e',
  reporter: [
    ['list'],
    ['html', { open: 'never'}]
  ],
  use: {
    headless: true,
  }
})
