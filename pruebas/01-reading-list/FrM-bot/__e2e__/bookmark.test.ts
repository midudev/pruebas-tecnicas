import { expect, test } from '@playwright/test'

const Labels = {
  toggleBookmarkButton: 'Bookmark',
  removeBookmarkButton: 'Remove book',
  openCloseBookmarksButton: 'Bookmarks'
}

const urlTest = 'http://localhost:4173/'

test('Add some books to bookmars correctly', async ({ page }) => {
  await page.goto(urlTest)
  await page
    .locator('article')
    .filter({ hasText: 'El Señor de los Anillos' })
    .getByLabel(Labels.toggleBookmarkButton)
    .click()

  await page
    .locator('article')
    .filter({ hasText: 'Juego de Tronos' })
    .getByLabel(Labels.toggleBookmarkButton)
    .click()

  await page
    .locator('article')
    .filter({ hasText: 'Harry Potter y la piedra filosofal' })
    .getByLabel(Labels.toggleBookmarkButton)
    .click()

  expect(await page.getByLabel(Labels.openCloseBookmarksButton).innerText()).toContain('3')

  await page.getByLabel(Labels.openCloseBookmarksButton).click()
  await page.locator('#main-header').getByText('Juego de Tronos').isVisible()
  await page.locator('#main-header').getByText('El Señor de los Anillos').isVisible()
  await page.locator('#main-header').getByText('Harry Potter y la piedra filosofal').isVisible()
})

test('Add and remove books from bookmars correctly', async ({ page }) => {
  await page.goto(urlTest)
  // agregamos el libro esde el botoón toggle a los marcadores
  await page
    .locator('article')
    .filter({ hasText: 'El Señor de los Anillos J.R.R. Tolkien' })
    .getByLabel(Labels.toggleBookmarkButton)
    .click()
  // abrimos el menú de los marcadores
  await page.getByLabel(Labels.openCloseBookmarksButton).click()

  // comprobamos si está el libro en los marcadores
  await page.locator('#main-header').getByText('El Señor de los Anillos').isVisible()

  // eliminamos desde el botoón toggle en la carta del libro de los marcadores
  await page
    .locator('article')
    .filter({ hasText: 'El Señor de los Anillos J.R.R. Tolkien' })
    .getByLabel(Labels.toggleBookmarkButton)
    .click()

  // el indicador debe ser '0'
  expect(await page.getByLabel(Labels.openCloseBookmarksButton).innerText()).toContain('0')

  // volvemos a agregar el libro esde el botoón toggle a los marcadores
  await page
    .locator('article')
    .filter({ hasText: 'El Señor de los Anillos J.R.R. Tolkien' })
    .getByLabel(Labels.toggleBookmarkButton)
    .click()

  // el indicador debe ser '1'
  expect(await page.getByLabel(Labels.openCloseBookmarksButton).innerText()).toContain('1')

  // eliminamos el libro con el botoón 'X' en la lista de los marcadores désde el menú en la parte superior derecha
  await page.getByLabel(Labels.removeBookmarkButton).click()

  // el indicador debe ser '0'
  expect(await page.getByLabel(Labels.openCloseBookmarksButton).innerText()).toContain('0')
})

test('Bookmarks sync in differents pages', async ({ page: originalPage, context }) => {
  const pageOne = await context.newPage()
  const pageTwo = await context.newPage()

  await originalPage.goto(urlTest)

  await pageOne.goto(urlTest)
  await pageTwo.goto(urlTest)

  // agregamos el libro a marcadores
  await originalPage
    .locator('article')
    .filter({ hasText: 'El Señor de los Anillos J.R.R. Tolkien' })
    .getByLabel(Labels.toggleBookmarkButton)
    .click()

  // verificamos que se hayan sicronizado los estados el las demás páginas (pag 1 y 2)
  expect(await pageOne.getByLabel(Labels.openCloseBookmarksButton).innerText()).toContain('1')
  expect(await pageTwo.getByLabel(Labels.openCloseBookmarksButton).innerText()).toContain('1')

  // abrimos el menú de los marcadores en una página diferente a la original (pag 2)
  await pageTwo.getByLabel(Labels.openCloseBookmarksButton).click()

  // quitamos el libro de los marcadores en una página diferente a la original (pag 2)
  await pageTwo.getByLabel(Labels.removeBookmarkButton).click()

  // verificamos que se hayan sicronizado los estados el las demás páginas (pag original y 1)
  expect(await originalPage.getByLabel(Labels.openCloseBookmarksButton).innerText()).toContain('0')
  expect(await pageOne.getByLabel(Labels.openCloseBookmarksButton).innerText()).toContain('0')

  // volvemos a agregar el libro a marcadores desde la pag 1
  await pageOne
    .locator('article')
    .filter({ hasText: 'El Señor de los Anillos J.R.R. Tolkien' })
    .getByLabel(Labels.toggleBookmarkButton)
    .click()

  // verificamos que se hayan sicronizado los estados el las demás páginas (pag original y 2)
  expect(await originalPage.getByLabel(Labels.openCloseBookmarksButton).innerText()).toContain('1')
  expect(await pageTwo.getByLabel(Labels.openCloseBookmarksButton).innerText()).toContain('1')

  // quitamos el libro de los marcadores en la página original
  await originalPage
    .locator('article')
    .filter({ hasText: 'El Señor de los Anillos J.R.R. Tolkien' })
    .getByLabel(Labels.toggleBookmarkButton)
    .click()

    // verificamos que se hayan sicronizado todos los estados páginas (pag original, 1 y 2)
    expect(await originalPage.getByLabel(Labels.openCloseBookmarksButton).innerText()).toContain('0')
    expect(await pageTwo.getByLabel(Labels.openCloseBookmarksButton).innerText()).toContain('0')
    expect(await pageTwo.getByLabel(Labels.openCloseBookmarksButton).innerText()).toContain('0')
})
