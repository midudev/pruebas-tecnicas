import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("https://reading-list-alber05.netlify.app/");

  // Verificar que el título de la página es "Reading List Alber05".
  await expect(page).toHaveTitle("Reading List Alber05");

  // Buscar el título "Juego de Tronos" en la página y verificar que existe.
  const titleElement = await page.locator("h3:has-text('Juego de Tronos')");
  await expect(await titleElement.isVisible()).toBeTruthy();

  // Verificar que el texto "Páginas" es visible en la página.
  await expect(page.getByText("Páginas")).toBeVisible();

  // Verificar que el texto "Lista de lectura" es visible en la página.
  await expect(page.getByText("Lista de lectura")).toBeVisible();
});
