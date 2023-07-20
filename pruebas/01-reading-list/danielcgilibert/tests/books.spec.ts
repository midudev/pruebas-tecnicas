import { test, expect } from '@playwright/test'

test('has title', async ({ page }) => {
  await page.goto('http://localhost:5173/')

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Prueba 01-reading-list - Danielcgilibert/)
})

test('verification of book load ', async ({ page }) => {
  await page.goto('http://localhost:5173/')
  await page.waitForSelector('.book')
  const books = await page.$$('.book')
  expect(books.length).toBeGreaterThan(0)
})
