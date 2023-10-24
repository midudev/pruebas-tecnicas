// @ts-check
import { test, expect } from '@playwright/test'

const LOCALHOST_URL = 'http://localhost:5173/'

test('app shows header, title, filters and book lists', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  const header = await page.getByRole('heading', { name: 'Midureads' })
  const title = await page.getByRole('heading', { name: 'Inicia tu viaje a través de las páginas' })
  const searchFilter = await page.getByLabel('Título o autor')
  const genresFilter = await page.getByRole('button', { name: 'Todos los géneros' })
  const pagesFilter = await page.getByLabel('Número de páginas')
  const bookList = await page.getByRole('heading', { name: /libros disponibles/ })
  const readingList = await page.getByRole('heading', { name: /Lista de lectura/ })

  expect(await header.isVisible()).toBeTruthy()
  expect(await title.isVisible()).toBeTruthy()
  expect(await searchFilter.isVisible()).toBeTruthy()
  expect(await genresFilter.isVisible()).toBeTruthy()
  expect(await pagesFilter.isVisible()).toBeTruthy()
  expect(await bookList.isVisible()).toBeTruthy()
  expect(await readingList.isVisible()).toBeTruthy()
})
