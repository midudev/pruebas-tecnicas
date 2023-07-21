import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:5173/");
});

test("show books in page at page start", async ({ page }) => {
  const list = page.locator("#books p");
  await expect(list).toHaveCount(13);
});

test("click on genre filter", async ({ page }) => {
  await page.locator("#genreFilter").selectOption("Zombies");
  const list = page.locator("#books p");
  await expect(list).toHaveCount(1);
});

test("click on genre filter, then all", async ({ page }) => {
  await page.locator("#genreFilter").selectOption("Zombies");
  await page.locator("#genreFilter").selectOption("");
  const list = page.locator("#books p");
  await expect(list).toHaveCount(13);
});

test("click on page range", async ({ page }) => {
  // await page.locator("#pageFilter").valueOption({ value: 400 });
  await page.fill('[id="pageFilter"]', "400");
  const list = page.locator("#books p");
  await expect(list).toHaveCount(7);
});
