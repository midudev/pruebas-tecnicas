import { expect, test } from '@playwright/test'

test('page has expected h1', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { name: 'Mis lecturas' })).toBeVisible()
})

test('page has expected h2', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { name: 'Filtros' })).toBeVisible()
})

test('page has "filtros", "disponible" and "seleccionado" sections', async ({ page }) => {
  await page.goto('/')
  const sections = page.locator('section')
  const filtros = sections.filter({ has: page.getByRole('heading', { name: 'filtros' }) })
  const availableBooksGrid = sections.filter({ has: page.getByRole('heading', { name: 'disponible' }) })
  const selectedBooksGrid = sections.filter({ has: page.getByRole('heading', { name: 'seleccionado' }) })

  await expect(filtros).toBeVisible()
  await expect(availableBooksGrid).toBeVisible()
  await expect(selectedBooksGrid).toBeVisible()
})

test('page has 13 books in "disponible" list', async ({ page }) => {
  await page.goto('/')
  const sections = page.locator('section')
  const availableBooksGrid = sections.filter({ has: page.getByRole('heading', { name: 'disponible' }) })
  const availableBookItems = availableBooksGrid.getByRole('listitem')
  await expect(availableBookItems).toHaveCount(13)
})

test('page has 0 books in "seleccionado" list', async ({ page }) => {
  await page.goto('/')
  const sections = page.locator('section')
  const selectedBooksGrid = sections.filter({ has: page.getByRole('heading', { name: 'seleccionado' }) })
  const selectedBookItems = selectedBooksGrid.getByRole('listitem')
  await expect(selectedBookItems).toHaveCount(0)
})

test('page has "El Señor de los Anillos"', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByAltText('Portada del libro El Señor de los Anillos')).toBeVisible()
})

test('click on "El Señor de los Anillos" moves it to the "seleccionado" list', async ({ page }) => {
  await page.goto('/')
  await page.getByAltText('Portada del libro El Señor de los Anillos').click()

  const sections = page.locator('section')

  const availableBooksGrid = sections.filter({ has: page.getByRole('heading', { name: 'disponible' }) })
  const availableBookItems = availableBooksGrid.getByRole('listitem')

  const selectedBooksGrid = sections.filter({ has: page.getByRole('heading', { name: 'seleccionado' }) })
  const selectedBookItems = selectedBooksGrid.getByRole('listitem')

  await expect(availableBookItems).toHaveCount(12)
  await expect(selectedBookItems).toHaveCount(1)
})
