import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:4321/')
})

test('has title Bazar Online', async ({ page }) => {
  await expect(page).toHaveTitle(/Welcome to Bazar Online./)
})

test('get started link Smart', async ({ page }) => {
  const searching = page.getByPlaceholder('Iphone 9')
  searching.fill('smart')
  page.getByText('Search').click()
  await expect(page.getByText('Result of Search smart : 5')).toBeVisible()
  page.getByText('iPhone 9').click()
  await expect(page.getByText('94 available')).toBeVisible()
})

test('Not found item', async ({ page }) => {
  const searching = page.getByPlaceholder('Iphone 9')
  searching.fill('not found item')
  page.getByText('Search').click()
  await expect(page.getByText('Sorry, we could\'t find any result :(')).toBeVisible()
})