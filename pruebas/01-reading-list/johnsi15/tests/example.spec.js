// @ts-check
import { test, expect } from '@playwright/test'

const TEST_URL = process.env.PLAYWRIGHT_TEST_URL || 'http://localhost:3000'

test('has title', async ({ page }) => {
  await page.goto(TEST_URL)

  const title = await page.getByText('El Viaje De Tus Lecturas')
  await expect(title).toBeVisible()
})

test('has book list', async ({ page }) => {
  await page.goto(TEST_URL)

  const books = page.locator('section > ul li')
  // const bookDetails = await page.locator('section > ul li', { has: page.getByRole('heading', { name: 'El Señor de los Anillos' }) }).first().hover()
  // console.log(bookDetails)

  // const rowLocator = page.getByRole('listitem');
  await expect(books.first()).toBeVisible()
  await expect(books).toHaveCount(13)
})
