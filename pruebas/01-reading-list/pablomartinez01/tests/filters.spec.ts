import { test, expect } from '@playwright/test';
const URL = "http://localhost:5173"

const OPTIONS = ['Fantasía','Ciencia ficción', 'Zombies','Terror']

for (const option of OPTIONS){
  test(`filter by genre: ${option}`, async ({ page }) => {

    await page.goto(URL);
    await page.locator(".filter-select > select").selectOption(option)
    const genres = await page.locator(".category").allTextContents()
    
    await expect(genres.every(item => item === option)).toBeTruthy()
    
  });
}



