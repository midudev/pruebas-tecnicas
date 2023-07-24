// @ts-check
import { expect, test } from '@playwright/test'

const LOCALHOST_URL = 'http://localhost:5173/'

test('app shows title and book images', async ({ page }) => {
	await page.goto(LOCALHOST_URL)

	const h1 = await page.getByRole('heading', { level: 1 })
	const bookImgs = await page.getByRole('img', { name: /Portada del libro/ })

	const h1Content = await h1.textContent()
	const booksLength = await bookImgs.count()

	await expect(h1Content).toContain('Lista de libros')
	await expect(booksLength).toBeGreaterThan(0)
})
