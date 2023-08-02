import { expect, test } from '@playwright/test';

import { filteredResultsByGenre, filteredResultsByPages } from './data/filteredResults';

test.describe("On page load", () => {
	test('expect page title to be "DavBooks"', async ({ page }) => {
		await page.goto("/");
	
		await expect(page).toHaveTitle(/DavBooks/);
	});
	
	test('expect to have 13 books when page loads', async ({ page }) => {
		await page.goto("/");
	
		await expect(page.getByRole('listitem')).toHaveCount(13);
	});
})

test.describe("Filtering", () => {
	test.describe("By genre", () => {
		filteredResultsByGenre.forEach(({ genre, numBooks }) => {	
			test(`expect to have ${numBooks} books when filtering by ${genre}`, async ({ page }) => {
				await page.goto("/");
		
				page.selectOption('#genre', genre);
				await expect(page.getByRole('listitem')).toHaveCount(numBooks);
			});		
		})
	})

	test.describe("By pages", () => {
		filteredResultsByPages.forEach(({ maxPages, numBooks }) => {
			test(`expect to have ${numBooks} books when max range is in ${maxPages}`, async ({ page }) => {
				await page.goto("/");
				

				page.locator('#pages').fill(maxPages.toString());
				await expect(page.getByRole('listitem')).toHaveCount(numBooks);
			})
		})
	})
})

test.describe("Readling list", () => {
	test("expect to have 0 books when reading list is empty", async ({ page }) => {
		await page.goto("/");

		await expect(page.getByRole('complementary').getByRole('listitem')).toHaveCount(0);
	});

	test("expect to have 1 book when a books is clicked", async ({ page }) => {
		await page.goto("/");

		await page.getByRole('button', { name: 'Harry Potter y la piedra filosofal' }).click();
		await expect(page.getByRole('complementary').getByRole('listitem')).toHaveCount(1);
	});

	test("expect to remove the book clicked from reading list", async ({ page }) => {
		await page.goto("/");

		const bookToSelect = { name: 'Harry Potter y la piedra filosofal' };

		await page.getByRole('button', bookToSelect).click();

		const sidebar = page.getByRole('complementary');
		await expect(sidebar.getByRole('listitem')).toHaveCount(1);

		sidebar.getByRole('button', bookToSelect).click();
		await expect(sidebar.getByRole('listitem')).toHaveCount(0);
	})
})
