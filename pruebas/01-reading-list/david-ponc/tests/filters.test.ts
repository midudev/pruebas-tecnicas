import { expect, test } from '@playwright/test';

test.describe('Filters usage', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('http://localhost:4173/');
	});

	test('should show 2 filtered books', async ({ page }) => {
		await page.getByRole('combobox').selectOption('Ciencia ficción');
		await page.getByPlaceholder('Busqueda por nombre').click();
		await page.getByPlaceholder('Busqueda por nombre').fill('ne');
		await page.getByRole('slider').click();

		await expect(page).toHaveURL(
			'http://localhost:4173/?genre=Ciencia+ficci%C3%B3n&title=ne&pages=621'
		);

		const numberOfAvailableBooks = await page.locator('section').getByRole('article').count();
		expect(numberOfAvailableBooks).toBe(2);
	});

	test('should not display any books', async ({ page }) => {
		await page.getByPlaceholder('Busqueda por nombre').click();
		await page.getByPlaceholder('Busqueda por nombre').fill('aprendiendo');

		await expect(page).toHaveURL('http://localhost:4173/?title=aprendiendo');

		const numberOfAvailableBooks = await page.locator('section').getByRole('article').count();
		expect(numberOfAvailableBooks).toBe(0);
	});
});
