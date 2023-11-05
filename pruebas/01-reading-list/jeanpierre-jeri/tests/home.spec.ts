import { test, expect } from '@playwright/test'

const URL = 'http://localhost:3000'

test.beforeEach(async ({ page }) => {
  await page.goto(URL)
})

test('has title', async ({ page }) => {
  await expect(page).toHaveTitle(/Lista de Lectura/)
})

test('has description', async ({ page }) => {
  const metaDescription = await page.locator('meta[name="description"]')
  await expect(metaDescription).toHaveAttribute(
    'content',
    'App de una lista de libros para leer, proyecto midudev'
  )
})

test('should have a book list', async ({ page }) => {
  await page.waitForSelector('section[data-testid="book-list"]')
  const bookList = await page.locator('section[data-testid="book-list"]')
  const articleCount = await bookList.locator('article').count()
  expect(bookList).toBeTruthy()
  expect(articleCount).toBeGreaterThan(0)
})
