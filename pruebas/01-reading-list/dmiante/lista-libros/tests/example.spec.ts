import { test, expect } from '@playwright/test';


test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Libroverso/);
});

test('show cover', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  const cover = await page.getByRole('img')

  await expect(cover).toBeTruthy()
});