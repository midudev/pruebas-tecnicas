import { test, expect } from '@playwright/test';

test('has filters', async ({ page }) => {
  await page.goto('http://localhost:5173');
  const genreFilter = await page.getByLabel('Filtrar por género:');
  await expect(genreFilter).toBeVisible()

  const pagesFilter = await page.getByLabel('Filtrar por cantidad de páginas:');
  await expect(pagesFilter).toBeVisible()
})

test('filter by genre', async ({ page }) => {
  await page.goto('http://localhost:5173');
  const genreFilter = await page.getByLabel('Filtrar por género:');
  await genreFilter.selectOption({ value: 'Fantasía' })
  await expect(genreFilter).toHaveValue('Fantasía')
  const main = page.getByRole('main')
  const list = await main.getByRole('list')
  const items = await list.getByRole('listitem')
  await expect(items).toHaveCount(3)
  await expect(items.nth(1)).toContainText('Fantasía')
})
