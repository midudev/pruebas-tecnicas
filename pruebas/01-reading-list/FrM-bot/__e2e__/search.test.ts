import { test, expect } from '@playwright/test'
// import { expect, test } from '@playwright/test';

// test('index page has expected h1', async ({ page }) => {
//   await page.goto('/')
//   await expect(page.getByRole('heading', { name: 'Welcome to SvelteKit' })).toBeVisible()
// })

test('search feature works correctly', async ({ page }) => {
  await page.goto('http://localhost:4173/')
  await page.getByPlaceholder('Dune, 1984...').click()
  await page.getByPlaceholder('Dune, 1984...').fill('dune')
  await page.getByPlaceholder('Dune, 1984...').press('Enter')
  await page.getByRole('link', { name: 'Dune' }).click()
  await page.getByRole('heading', { name: 'Dune' }).isVisible()
})
