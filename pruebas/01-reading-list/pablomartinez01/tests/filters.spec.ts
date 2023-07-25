import { test, expect } from '@playwright/test';
const URL = "http://localhost:5173"

test('has title', async ({ page }) => {
  const OPTION = "Fantasía"
  await page.goto(URL);
  await page.locator(".filter-select > select").selectOption(OPTION)
  const categories = await page.locator(".category").allTextContents()


  
  await expect(categories.every(item => item === OPTION)).toBeTruthy()
  
});

