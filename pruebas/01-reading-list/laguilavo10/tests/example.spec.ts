import { test } from '@playwright/test'

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/')

  const counterReadingBooks = await page
    .locator('[data-test-id="counter of Libros Disponibles"]')
    .textContent()
  const counterReadingBooksNumber = parseInt(counterReadingBooks?.split(' ')[0] ?? '')
  if (counterReadingBooksNumber === undefined || counterReadingBooksNumber <= 0) {
    throw new Error('No hay libros disponibles')
  }

  await page
    .locator('[data-test-id="libro disponible #1"]')
    .getByRole('button')
    .click()
  const newCounterReadingBooks = await page
    .locator('[data-test-id="counter of Libros Disponibles"]')
    .textContent()
  const newCounterReadingBooksNumber = parseInt(newCounterReadingBooks?.split(' ')[0] ?? '')
  if (newCounterReadingBooksNumber === undefined || newCounterReadingBooksNumber >= counterReadingBooksNumber) {
    throw new Error('Hubo un error')
  }
})
