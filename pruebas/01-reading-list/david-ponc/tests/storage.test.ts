import { expect, test } from '@playwright/test';

test.describe('Storage behavior', () => {
	test.describe('Reading List', () => {
		test.beforeEach(async ({ page }) => {
			await page.goto('http://localhost:4173/');
			const firstBook = page.locator('section').getByRole('article').first();
			const middleBook = page.locator('section').getByRole('article').nth(5);
			const lastBook = page.locator('section').getByRole('article').last();

			await firstBook.getByLabel('Agregar a lista de lectura').click();
			await middleBook.getByLabel('Agregar a lista de lectura').click();
			await lastBook.getByLabel('Agregar a lista de lectura').click();
		});

		test('should be 10 books available', async ({ page }) => {
			const numberOfAvailableBooks = await page.locator('section').getByRole('article').count();
			expect(numberOfAvailableBooks).toBe(10);

			await page.reload();
			expect(numberOfAvailableBooks).toBe(10);
		});

		test('should be 3 books in reading list', async ({ page }) => {
			await expect(page.getByRole('button', { name: '3 Lista de lectura' })).toBeVisible();
			await page.reload();
			await expect(page.getByRole('button', { name: '3 Lista de lectura' })).toBeVisible();
		});
	});

	test('should maintain filters values after reload page', async ({ page }) => {
		await page.goto('http://localhost:4173/');
		await page.getByRole('combobox').selectOption('Ciencia ficción');
		await page.getByPlaceholder('Busqueda por nombre').click();
		await page.getByPlaceholder('Busqueda por nombre').fill('ne');
		await page.getByRole('slider').click();

		await page.reload();

		await expect(page).toHaveURL(
			'http://localhost:4173/?genre=Ciencia+ficci%C3%B3n&title=ne&pages=621'
		);

		const numberOfAvailableBooks = await page.locator('section').getByRole('article').count();
		expect(numberOfAvailableBooks).toBe(2);
	});
});
