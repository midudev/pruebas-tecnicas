import { test, expect } from '@playwright/test';

const LOCALHOST_URL = 'http://localhost:5173/';
const PREFIXIMAGE_URL = 'https://images-na.ssl-images-amazon.com/';

test('app display books cover images', async ({ page }) => {
	await page.goto(LOCALHOST_URL);

	const images = await page.$$eval('img', (elements) => {
		return elements.map((element) => element.src);
	});

	await expect(images[1]?.length).toBeGreaterThan(0);
	await expect(images[1]?.startsWith(PREFIXIMAGE_URL)).toBeTruthy();
});
