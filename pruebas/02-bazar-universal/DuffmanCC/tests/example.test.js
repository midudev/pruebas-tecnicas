import { expect, test } from "@playwright/test";

test("should navigate to lista de pructos", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.click("text=Buscar");
  await expect(page).toHaveURL("http://localhost:3000/items");
  await expect(page.locator("h1")).toContainText(
    "Lista de productos en nuestro bazar"
  );
});

test("should find two iPhones", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  const searchInput = page.locator("input[name=search]");
  await searchInput.fill("iphone");

  const searchButton = page.locator("button[type=submit]");
  await searchButton.click();

  await expect(page).toHaveURL("http://localhost:3000/items?search=iphone");
  // find two iphones products
  const products = page.locator("h2");
  await expect(products).toHaveCount(2);
});

test("should add two iphones to the cart and check the price in the cart", async ({
  page,
}) => {
  await page.goto("http://localhost:3000/items?search=iphone");

  // Find all "Add to Cart" buttons and retrieve their elements
  const addToCartButtons1 = page.locator("ul > li > button").first();
  const addToCartButtons2 = page.locator("ul > li > button").last();

  await addToCartButtons1.click({ clickCount: 1 });
  await addToCartButtons2.click({ clickCount: 3 });

  const cartButton = page.locator("header > div > button");
  await cartButton.click();

  const totalPrice = page.locator("aside > div > div > div").last();
  await expect(totalPrice).toHaveText("$3,246");
});
