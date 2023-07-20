// @ts-check
import { test, expect } from '@playwright/test'

test('show books in page', async ({ page }) => {
  await page.goto('http://localhost:5173/')
  const list = page.locator('main > ul > li')
  await expect(list).toHaveCount(13)
})
