import test, { expect } from "@playwright/test"

test.describe('Item Page', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/item/1')
    })

    test('should render the item data', async ({ page }) => {
        await expect(page.getByRole('heading')).toHaveCount(1)
    })

    test('should have at least 1 image', async ({ page }) => {
        await expect(page.getByRole('main').getByRole('img')).toHaveCount(4, { timeout: 8000 })
    })

})