import { test, expect } from '@playwright/test'

test('app show book images covers', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  await expect(page).toHaveTitle("Reading List");

  const bookCover = await page.getByRole('img', { name: /cover/ })

	const booksLength = await bookCover.count()

	await expect(booksLength).toBeGreaterThan(0)

});
