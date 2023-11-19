import { test, expect } from '@playwright/test'
const PORT = process.env.PORT ?? 5173

test('allow to add book to book list', async ({ page }) => {
  await page.goto(`http://localhost:${PORT}/`)

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Librería/)
  await expect(page.locator('.bookList').first()).not.toBeVisible()
  await page.getByRole('img', { name: 'Juego de Tronos' }).click()
  await expect(page.locator('.bookList .book-item img').first()).toHaveAttribute('alt', /Juego de Tronos/)
  await expect(page.getByTestId('books').getByRole('img', { name: 'Juego de Tronos' }).locator('..')).toHaveClass('book-item selected')
})
