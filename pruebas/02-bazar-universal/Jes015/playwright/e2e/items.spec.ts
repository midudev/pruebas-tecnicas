import test, { expect } from "@playwright/test"

test.describe('Items Page', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/items?search=apple')
    })

    test('should search items', async ({ page }) => {
        await expect(page.getByRole('main').getByRole('link')).toHaveCount(3)
    })

    test('should navigate to a item page', async ({ page }) => {
        await page.getByRole('main').getByRole('link').nth(0).click({ timeout: 20000 })
        await expect(page).toHaveURL(/\/item\//, { timeout: 20000 })
    })
})