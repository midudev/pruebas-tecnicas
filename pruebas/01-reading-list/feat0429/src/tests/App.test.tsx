import { describe, test, expect, it, beforeAll } from 'vitest'
import { render, screen, act, within, fireEvent } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import App from '../App.tsx'
import { Genre } from '../constants/genres.ts'
import { RESULT_MESSAGES, TEXT_CONTENT } from '../constants/DOM-text.ts'
import { getBooks } from '../services/getBooks.ts'
import { type Book as BookType } from '../type'
import { Globals } from '@react-spring/web'
import { countBooksByGenre } from '../utils.ts'
import { ARIA_LABELS } from '../constants/aria-labels.ts'

const getListFromLocalStorage = () => {
  const localStorageStore = JSON.parse(localStorage.getItem('reading list store') ?? '[]')

  return localStorageStore.state.booksInList as BookType[]
}
const getNumberFromElement = (element: HTMLElement) => {
  const number = element.innerHTML.match(/\d+/)

  if (number != null) {
    return Number(number[0])
  }
}

describe('End-to-end Test', () => {
  beforeAll(() => {
    Globals.assign({
      skipAnimation: true
    })
  })

  it('should add books to list and remove them', async () => {
    const fetchedBooks = await getBooks()
    const avaialbleBooksTitleText = new RegExp(`${TEXT_CONTENT.AvailableBooksTitle}`)

    const user = userEvent.setup()

    await act(async () => {
      render(<App />)
    })
    const availableBooksTitle = screen.getByText(avaialbleBooksTitleText)
    const availableBooks = screen.getAllByRole('article', { name: ARIA_LABELS.AvailableBookCard })
    const availableBooksCountElement = within(availableBooksTitle).getByText(/\d+/)
    const readingListButton = screen.getByRole('button', { name: ARIA_LABELS.ShowReadingList })

    expect(getNumberFromElement(availableBooksCountElement)).toBe(fetchedBooks.length)

    await user.click(readingListButton)

    const noBooksInListMessage = screen.getByText(RESULT_MESSAGES.NoBooksInList)
    expect(noBooksInListMessage).toBeDefined()

    const readingListCount = within(readingListButton).getByText(/\d+/)

    expect(getNumberFromElement(readingListCount)).toBe(0)

    const addBookToListButton = within(availableBooks[0]).getByRole('button', { name: ARIA_LABELS.AddBookToList })

    await user.click(addBookToListButton)

    expect(Number(readingListCount.innerHTML)).toBe(1)
    expect(getNumberFromElement(availableBooksCountElement)).toBe(fetchedBooks.length - 1)

    const removeBookFromListButton = within(availableBooks[0]).getByRole('button', { name: ARIA_LABELS.RemoveBookFromList })

    await user.click(removeBookFromListButton)

    expect(Number(readingListCount.innerHTML)).toBe(0)
    expect(getNumberFromElement(availableBooksCountElement)).toBe(fetchedBooks.length)
  })

  test('if reading list is persisted in localstorage', async () => {
    const user = userEvent.setup()

    const availableBooks = screen.getAllByRole('article', { name: ARIA_LABELS.AvailableBookCard })
    const addBookToListButton = within(availableBooks[0]).getByRole('button', { name: ARIA_LABELS.AddBookToList })

    expect(getListFromLocalStorage()).toHaveLength(0)

    await user.click(addBookToListButton)

    expect(getListFromLocalStorage()).toHaveLength(1)
  })

  test('if genre counts properly when a books is added and removed from list', async () => {
    const fetchedBooks = await getBooks()
    const fantasyBooksNumber = countBooksByGenre(fetchedBooks, Genre.Fantasy)

    const user = userEvent.setup()

    const genreFilter: HTMLSelectElement = screen.getByRole('combobox', { name: ARIA_LABELS.GenreFilter })

    const genreOptions: HTMLOptionElement[] = screen.getAllByRole('option')
    expect(genreOptions).toHaveLength(Object.values(Genre).length)

    await user.selectOptions(genreFilter, Genre.Fantasy)

    const fantasyOption: HTMLOptionElement = screen.getByRole('option', { name: Genre.Fantasy })
    expect(fantasyOption.selected).toBeTruthy()

    const countByGenre = screen.getByText(new RegExp(`${Genre.Fantasy} \\(\\d+\\)`))
    expect(getNumberFromElement(countByGenre)).toBe(fantasyBooksNumber)

    const books = screen.getAllByRole('article', { name: 'Libro disponible' })
    const addBookToListButton = within(books[0]).getByRole('button', { name: ARIA_LABELS.AddBookToList })

    await user.click(addBookToListButton)

    expect(getNumberFromElement(countByGenre)).toBe(fantasyBooksNumber - 1)

    const removeBookFromListButton = within(books[0]).getByRole('button', { name: ARIA_LABELS.RemoveBookFromList })

    await user.click(removeBookFromListButton)

    expect(getNumberFromElement(countByGenre)).toBe(fantasyBooksNumber)

    await user.selectOptions(genreFilter, Genre.All)
  })

  it('should filter books by pages and genres', async () => {
    const user = userEvent.setup()

    const genreFilter: HTMLSelectElement = screen.getByRole('combobox', { name: ARIA_LABELS.GenreFilter })

    const genreOptions: HTMLOptionElement[] = screen.getAllByRole('option')
    expect(genreOptions).toHaveLength(Object.values(Genre).length)

    await user.selectOptions(genreFilter, Genre.Fantasy)

    const fantasyOption: HTMLOptionElement = screen.getByRole('option', { name: Genre.Fantasy })
    expect(fantasyOption.selected).toBeTruthy()

    const pagesFilter: HTMLInputElement = screen.getByRole('slider', { name: ARIA_LABELS.PagesFilter })

    await act(async () => {
      fireEvent.change(pagesFilter, { target: { value: 400 } })
    })

    expect(Number(pagesFilter.value)).toEqual(400)

    const books = screen.getAllByRole('article', { name: ARIA_LABELS.AvailableBookCard })

    books.forEach((book) => {
      const pagesElement = within(book).getByText(new RegExp(TEXT_CONTENT.PagesAbbreviation))

      const pagesNumber = pagesElement.innerHTML.match(/\d+/)

      const genreElement = within(book).getByText(Genre.Fantasy)
      expect(genreElement.innerHTML).toBe(Genre.Fantasy)

      if (pagesNumber != null) {
        expect(Number(pagesNumber[0]) >= 400)
      }
    })
  })
})
