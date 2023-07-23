// @ts-check
import { test, expect } from '@playwright/test'

const LOCALHOST_URL = 'http://localhost:5173'
test('app shows text and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  await expect(page.getByText('Colección de libros')).toBeVisible()
  await expect(page.getByAltText('Harry Potter y la piedra filosofal')).toBeAttached()
})
