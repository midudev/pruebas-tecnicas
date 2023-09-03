import { expect, test } from '@playwright/test';

test('Filter was expected to be hidden at first', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByTestId('filter')).toBeHidden();
});

test('Filter was expected to appear when filter type is "title"', async ({ page }) => {
	await page.goto('/');
	await page.getByTestId('filterType').selectOption('title');
	await expect(page.getByTestId('filter')).toBeVisible();
});

test('Filter was expected to stay hidden when filter type is "all" or "library"', async ({ page }) => {
	await page.goto('/');
	await page.getByTestId('filterType').selectOption('all');
	await expect(page.getByTestId('filter')).toBeHidden();
});