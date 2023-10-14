import test, { expect } from "@playwright/test"

test.describe('Index Page', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/')
    })

    test('should show the items sections', async ({ page }) => {
        await expect(page.getByRole('link')).not.toHaveCount(1)
    })

    test('should navigate to a item page', async ({ page }) => {
        await page.getByRole('link').nth(1).click();
        await expect(page).toHaveURL(/\/item\//)
    })

    test('should go to items page', async ({ page }) => {
        await page.getByRole('main').getByRole('textbox').click()
        await page.getByRole('main').getByRole('textbox').fill('apple')
        await page.getByRole('main').getByRole('textbox').press('Enter')

        await expect(page).toHaveURL('/items?search=apple')
    })
})