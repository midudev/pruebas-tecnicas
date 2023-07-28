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

test.only('has book details', async ({ page }) => {
  await page.goto(TEST_URL)
  const bookTitle = 'El Señor de los Anillos'

  const firstBook = page.locator('section > li')
  console.log({ firstBook })
  // Realizar el hover sobre el primer elemento de la lista de libros
  // await firstBook.first().hover()

  // await page.getByRole('link').hover();
  await page.locator('section > li').hover()

  // // Asegúrate de que haya suficiente tiempo para que se muestren los detalles del libro
  // await page.waitForTimeout(1000)

  // // Localizar el elemento que contiene los detalles del libro después del hover
  // const bookDetailsElement = await page.locator('article > h2')

  // // Obtener el texto de los detalles del libro
  // const bookDetails = await bookDetailsElement.textContent()
  // console.log('Información del libro:', bookDetails)

  // Aquí puedes realizar las expectativas o aserciones sobre los detalles del libro si es necesario.
})
