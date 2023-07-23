import { test, expect } from '@playwright/test'

test.describe('Reading app', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('App has title', async ({ page }) => {
    await expect(page).toHaveTitle(/oscarprdev reading-list/)
  })

  test.describe('Books list', () => {
    test('section is visible', async ({ page }) => {
      const booksList = page.getByTestId('books-list')

      await expect(booksList).toBeVisible()
    })

    test('renders books properly', async ({ page }) => {
      const bookItems = await page.getByTestId('book-item').all()

      for (const [index, value] of bookItems.entries()) {
        const image = page.getByTestId(`book-item-image-${index}`)
        const title = page.getByTestId(`book-item-title-${index}`)

        await expect(value).toBeVisible()
        await expect(image).toBeVisible()
        await expect(title).toBeVisible()
      }
    })

    test('add book to reading list when clicks on proper icon', async ({
      page,
    }) => {
      // Hover on a book item
      const bookItem = page.getByTestId('book-item').first()
      await bookItem.hover()

      // Clicks on add book to reading list icon
      const addBookIcon = page.getByTestId('add-book-icon')
      await expect(addBookIcon).toBeVisible()
      await addBookIcon.click()

      // Confirm the book is added
      const readingList = page.getByTestId('reading-list')
      await expect(readingList).toBeVisible()
      const readingListItem = page.getByTestId('reading-list-item')
      await expect(readingListItem).toBeVisible()
    })
  })
})
