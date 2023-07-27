import { afterEach, describe, it, expect } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BooksProvider } from '@context/books-context'
import App from '@/App'

const setUp = async () => {
  const utils = render(
    <BooksProvider>
      <App />
    </BooksProvider>
  )
  const title = utils.container.querySelector('h1')
  const booksCards = utils.container.querySelectorAll(
    'article[aria-label="book card"]'
  )

  const filtersSection = await screen.findByRole('region', { name: 'filters' })
  const filtersSectionTitle = filtersSection.querySelector('h3')
  const genreSelect = filtersSection.querySelector('select')

  const readingListSection = await screen.findByRole('region', {
    name: 'reading list'
  })
  const readingList = readingListSection.querySelector('ul')

  return {
    title,
    booksCards,
    readingList,
    readingListSection,
    filtersSection,
    filtersSectionTitle,
    genreSelect,
    user: userEvent,
    ...utils
  }
}

describe('App.jsx', () => {
  afterEach(() => {
    cleanup()
  })

  it('The aplication is rendering correctly', async () => {
    const { booksCards, title, readingList } = await setUp()
    const initialBooksCards = booksCards.length
    const initialBooksNumber = +title.querySelector('span').textContent
    expect(initialBooksCards).toBe(13)
    expect(initialBooksNumber).toBe(13)
    expect(readingList.textContent).toBe('')
  })

  it('should add a book to the reading list', async () => {
    const { booksCards, user, readingList } = await setUp()
    const bookCardAddButton = booksCards[0].querySelector('button')
    await user.click(bookCardAddButton)
    const booksAdded = readingList.querySelectorAll('li')
    expect(booksAdded).toHaveLength(1)
  })

  it('should remove a book to the reading list', async () => {
    const { booksCards, user, readingList } = await setUp()
    const bookCardAddButton = booksCards[0].querySelector('button')
    await user.click(bookCardAddButton)
    const booksAdded = readingList.querySelectorAll('li')
    expect(booksAdded).toHaveLength(0)
    await user.click(bookCardAddButton)
    const removeBookAddedButton = readingList
      .querySelectorAll('li')[0]
      .querySelector('button')
    await user.click(removeBookAddedButton)
    expect(booksAdded).toHaveLength(0)
  })
})
