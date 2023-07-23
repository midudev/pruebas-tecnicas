// @ts-check
import { test, expect } from '@playwright/test'

const TEST_URL = process.env.PLAYWRIGHT_TEST_URL || 'http://localhost:3000'

test('has title', async ({ page }) => {
  await page.goto(TEST_URL)

  const title = await page.getByText('Lista de libros')
  await expect(title).toBeVisible()
})

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/')

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click()

//   // Expects the URL to contain intro.
//   await expect(page).toHaveURL(/.*intro/)
// })
