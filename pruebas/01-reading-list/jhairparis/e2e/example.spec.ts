import { test, expect } from "@playwright/test";

test("add ReadingList", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.click("[id='978-0618640157']");
  expect(
    page
      .locator("[id='chakra-modal--body-:R7diuja:']")
      .locator("[id='978-0618640157']")
  ).toBeTruthy();
});
