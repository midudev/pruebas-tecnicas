// @ts-check
import { test, expect } from '@playwright/test'

const TEST_URL = process.env.PLAYWRIGHT_TEST_URL || 'http://localhost:3000'

test('has title', async ({ page }) => {
  await page.goto(TEST_URL)

  const title = await page.getByText('El Viaje De Tus Lecturas')
  await expect(title).toBeVisible()
})

test('has book list', async ({ page }) => {
  await page.goto(TEST_URL)

  const books = page.locator('section > ul li')
  // const bookDetails = await page.locator('section > ul li', { has: page.getByRole('heading', { name: 'El Señor de los Anillos' }) }).first().hover()
  // console.log(bookDetails)

  // const rowLocator = page.getByRole('listitem');
  await expect(books.first()).toBeVisible()
  await expect(books).toHaveCount(13)
})

test('has book details', async ({ page }) => {
  await page.goto(TEST_URL)
  const bookTitle = 'El Señor de los Anillos'

  const firstBook = page.locator('section ul > li').first()
  await firstBook.hover()

  // Localizar el elemento que contiene los detalles del libro después del hover
  const bookDetailsElement = page.locator('article > h2')

  // Obtener el texto de los detalles del libro
  const bookDetails = await bookDetailsElement.textContent()

  // Verificar que el elemento esté visible y que el texto sea el esperado
  await expect(bookDetailsElement).toBeVisible()
  expect(bookDetails).toEqual(bookTitle)
})

test.only('add book to reading list', async ({ page }) => {
  await page.goto(TEST_URL)
  const bookTitle = 'El Señor de los Anillos'

  const firstBook = page.locator('section ul > li').first()
  await firstBook.hover()

  const bookDetailsElement = page.locator('article > h2')
  const bookDetails = await bookDetailsElement.textContent()

  await expect(bookDetailsElement).toHaveText(bookTitle)

  const bookButton = page.getByRole('button', { name: 'Agregar a la lista' })
  await bookButton.click()

  const readingListImg = page.locator('div > ul li figure > img')
  const altText = await readingListImg.getAttribute('alt')
  await expect(readingListImg).toBeVisible()
  expect(altText).toEqual(bookDetails)
})
