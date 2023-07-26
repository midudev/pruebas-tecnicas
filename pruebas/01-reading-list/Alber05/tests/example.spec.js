import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("https://hilarious-malabi-400e7f.netlify.app/");

  await expect(page).toHaveTitle("Reading List Alber05");

  // Buscar el título "Juego de Tronos" en la página y verificar que existe.
  const titleElement = await page.locator("h3:has-text('Juego de Tronos')");
  await expect(await titleElement.isVisible()).toBeTruthy();
});
