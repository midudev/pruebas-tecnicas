// @ts-check
import { test, expect } from '@playwright/test'

const LOCALHOST_URL = 'http://localhost:5173/'
const IMAGE_PREFIX_URL = 'https://images-na.ssl-images-amazon.com'

test('app shows list of books', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  const imgs = await page.$$('img')
  for (const img of imgs) {
    const src = await img.getAttribute('src')
    await expect(src?.startsWith(IMAGE_PREFIX_URL)).toBeTruthy()
  }

})
