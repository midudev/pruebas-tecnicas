import { expect, test } from '@playwright/test';

test.describe('Reading List', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('http://localhost:4173/');
	});

	test('should be 13 books available', async ({ page }) => {
		await expect(page.locator('section').getByText('13 libros')).toBeVisible();
		const numberOfAvailableBooks = await page.locator('section').getByRole('article').count();
		expect(numberOfAvailableBooks).toBe(13);
	});

	test('should not have books in reading list', async ({ page }) => {
		await expect(page.getByRole('button', { name: '0 Lista de lectura' })).toBeVisible();
	});
});

test.describe('Add book to reading list', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('http://localhost:4173/');
		const book = page.locator('section').getByRole('article').first();
		await book.getByLabel('Agregar a lista de lectura').click();
	});

	test('should be 12 books available', async ({ page }) => {
		await expect(page.locator('section').getByText('12 libros')).toBeVisible();
		const numberOfAvailableBooks = await page.locator('section').getByRole('article').count();
		expect(numberOfAvailableBooks).toBe(12);
	});

	test('should be 1 book in reading list', async ({ page }) => {
		const drawer = page.getByRole('dialog');
		const buttonReadingList = page.getByRole('button', { name: '1 Lista de lectura' });

		await expect(buttonReadingList).toBeVisible();
		await buttonReadingList.click();

		expect(await drawer.getAttribute('data-state')).toBe('open');
		expect(await drawer.locator('section>header>p').textContent()).toStrictEqual('1 libros');
	});
});

test.describe('Remove books to reading list', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('http://localhost:4173/');
		const book = page.locator('section').getByRole('article').first();
		await book.getByLabel('Agregar a lista de lectura').click();

		const drawer = page.getByRole('dialog');
		const buttonReadingList = page.getByRole('button', { name: '1 Lista de lectura' });

		await expect(buttonReadingList).toBeVisible();
		await buttonReadingList.click();

		expect(await drawer.getAttribute('data-state')).toBe('open');
		expect(await drawer.locator('section>header>p').textContent()).toStrictEqual('1 libros');

		const bookOfReadingList = drawer.getByRole('article').first();
		await bookOfReadingList.getByLabel('Quitar de lista de lectura').click();
	});

	test('should not have books in reading list', async ({ page }) => {
		const drawer = page.getByRole('dialog');
		expect(await drawer.getByRole('article').count()).toBe(0);
	});

	test('should be 13 books available again', async ({ page }) => {
		await expect(page.locator('section').getByText('13 libros')).toBeVisible();
		const numberOfAvailableBooks = await page.locator('section').getByRole('article').count();
		expect(numberOfAvailableBooks).toBe(13);
	});
});
