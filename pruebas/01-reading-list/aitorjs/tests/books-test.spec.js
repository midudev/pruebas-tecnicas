import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:5173/')
})

test('append book, filter, de-append book and filter again', async ({ page }) => {
  await page.locator('#books p >> nth=0').click()
  const readList1 = page.locator('#readList p')
  await expect(readList1).toHaveCount(1)

  await page.locator('#genreFilter').selectOption('Fantasía')
  const list1 = page.locator('#books p')
  await expect(list1).toHaveCount(2)

  await page.locator('#readList p a >> nth=0').click()
  const readList2 = page.locator('#readList p')
  await expect(readList2).toHaveCount(0)

  await page.locator('#genreFilter').selectOption('Fantasía')
  const list2 = page.locator('#books p')
  await expect(list2).toHaveCount(3)
})

test('show books in page at page start', async ({ page }) => {
  const list = page.locator('#books p')
  await expect(list).toHaveCount(13)
})

test('click on genre filter', async ({ page }) => {
  await page.locator('#genreFilter').selectOption('Zombies')
  const list = page.locator('#books p')
  await expect(list).toHaveCount(1)
})

test('click on genre filter, then all', async ({ page }) => {
  await page.locator('#genreFilter').selectOption('Zombies')
  await page.locator('#genreFilter').selectOption('')
  const list = page.locator('#books p')
  await expect(list).toHaveCount(13)
})

test('click on page range', async ({ page }) => {
  // await page.locator("#pageFilter").valueOption({ value: 400 });
  await page.fill('[id="pageFilter"]', '400')
  const list = page.locator('#books p')
  await expect(list).toHaveCount(7)
})

test('click on page range and genre1', async ({ page }) => {
  // await page.locator("#pageFilter").valueOption({ value: 400 });
  await page.fill('[id="pageFilter"]', '600')
  await page.locator('#genreFilter').selectOption('Ciencia ficción')
  const list = page.locator('#books p')
  await expect(list).toHaveCount(5)
})

test('click on page range and genre2', async ({ page }) => {
  // await page.locator("#pageFilter").valueOption({ value: 400 });
  await page.fill('[id="pageFilter"]', '400')
  await page.locator('#genreFilter').selectOption('Ciencia ficción')
  const list = page.locator('#books p')
  await expect(list).toHaveCount(4)
})

test('append book to reading list', async ({ page }) => {
  await page.locator('#books p >> nth=0').click()
  const readList = page.locator('#readList p')
  await expect(readList).toHaveCount(1)
})

test('de-append book to reading list', async ({ page }) => {
  await page.locator('#books p >> nth=0').click()
  await page.locator('#readList p a >> nth=0').click()
  const readList = page.locator('#readList p')
  await expect(readList).toHaveCount(0)
})
