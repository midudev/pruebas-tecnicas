import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { act, cleanup, fireEvent, render, screen } from '@testing-library/react'
import matchers from '@testing-library/jest-dom/matchers'

import { BookDashboard } from '@/components/BookDashboard'

import { BookListProvider } from '@/context/bookList'
import { FilterProvider } from '@/context/filter'

import { genres, listBooksAvailable } from '@/assets/values'
import { listTypes, nameStorage } from '@/assets/constants'

const labelButton = {
  [listTypes.available]: /^Agregar .* a la lista de lectura$/i,
  [listTypes.reading]: /^Remover .* de la lista de lectura$/i
}

const { available, reading } = listTypes

expect.extend(matchers)

describe('<BookDashboard />', () => {
  beforeEach(() => {
    render(
      <BookListProvider>
        <FilterProvider>
          <BookDashboard />
        </FilterProvider>
      </BookListProvider>
    )
  })
  afterEach(() => cleanup())

  it(`${listBooksAvailable.length} book should be displayed in the available list and 0 in the reading list`, () => {
    const booksAvailable = screen.getAllByLabelText(labelButton[available])
    const readingBooks = screen.queryAllByLabelText(labelButton[reading])

    expect(booksAvailable).toHaveLength(listBooksAvailable.length)
    expect(readingBooks).toHaveLength(0)
  })

  it('Books in the current genre are displayed. Changing it will display the corresponding books', () => {
    const inputGenre = screen.getByDisplayValue(genres[1])

    fireEvent.click(inputGenre)

    const displayBooks = listBooksAvailable.filter(({ genre }) => genre === genres[1])
    const booksAvailable = screen.getAllByLabelText(labelButton[available])

    expect(booksAvailable).toHaveLength(displayBooks.length)
  })

  it('Add a book from the list of available books. Adds a book to the reading list and decreases one to the list of available books', () => {
    const { available, reading } = listTypes
    let numberReadingBooks = 0

    const booksAvailable = screen.getAllByLabelText(labelButton[available])

    expect(booksAvailable).toHaveLength(listBooksAvailable.length)

    fireEvent.click(booksAvailable[0])
    numberReadingBooks++

    const readingBooks = screen.getAllByLabelText(labelButton[reading])

    expect(screen.getAllByLabelText(labelButton[available])).toHaveLength(
      booksAvailable.length - numberReadingBooks
    )
    expect(readingBooks).toHaveLength(numberReadingBooks)
    expect(localStorage.getItem(nameStorage.listOfReading)).not.toBeNull()

    expect(
      screen.getByText(`Libros disponibles ${booksAvailable.length - numberReadingBooks}`)
    ).toBeDefined()
    expect(screen.getByText(`Lista de lectura ${numberReadingBooks}`)).toBeDefined()
  })

  it('Removing a book from the reading list adds it to the list of available books. If the reading list runs out of items in the localStorage, the value "[]" is stored', () => {
    const { available, reading } = listTypes
    const addBooksToReadingList = 2
    let numberReadingBooks = 0

    const booksAvailable = screen.getAllByLabelText(labelButton[available])

    expect(booksAvailable).toHaveLength(listBooksAvailable.length)

    for (let action = 1; action <= addBooksToReadingList; action++) {
      fireEvent.click(booksAvailable[action])
      numberReadingBooks++
    }

    const readingBooks = screen.getAllByLabelText(labelButton[reading])

    expect(screen.getAllByLabelText(labelButton[available])).toHaveLength(
      booksAvailable.length - numberReadingBooks
    )
    expect(readingBooks).toHaveLength(numberReadingBooks)

    fireEvent.click(readingBooks[0])
    numberReadingBooks--

    expect(screen.getAllByLabelText(labelButton[reading])).toHaveLength(numberReadingBooks)
    expect(screen.getAllByLabelText(labelButton[available])).toHaveLength(
      booksAvailable.length - numberReadingBooks
    )

    expect(localStorage.getItem(nameStorage.listOfReading)).not.toBeNull()

    fireEvent.click(readingBooks[1])
    numberReadingBooks--

    expect(screen.queryAllByTitle(labelButton[reading])).toHaveLength(numberReadingBooks)
    expect(screen.getAllByLabelText(labelButton[available])).toHaveLength(
      booksAvailable.length - numberReadingBooks
    )

    expect(JSON.parse(localStorage.getItem(nameStorage.listOfReading) || '[]')).toHaveLength(
      numberReadingBooks
    )
  })

  it(`When searching for the book "${listBooksAvailable[0].title}", from the list of available books it should show only that book in the list`, () => {
    vi.useFakeTimers()

    const bookTitle = listBooksAvailable[0].title
    const searcher = screen.getByPlaceholderText('La llamada de Cthulhu')

    expect(searcher).toBeDefined()

    act(() => {
      fireEvent.change(searcher, { target: { value: bookTitle } })

      vi.advanceTimersByTime(400)
    })

    expect(screen.getByDisplayValue(bookTitle)).toBeDefined()

    expect(screen.getAllByLabelText(labelButton[available]).length).toBeGreaterThanOrEqual(1)

    vi.clearAllTimers()
  })

  it('When adding all the books to the list or if there are none, the message: "No hay libros disponibles" should be displayed on the screen', () => {
    const addBookButton = screen.getAllByLabelText(labelButton[available])

    act(() => {
      addBookButton.forEach((btn) => fireEvent.click(btn))
    })

    expect(screen.getByText('No hay libros disponibles')).toBeDefined()
  })

  it(`When searching for the book "${listBooksAvailable[0].title} 2", the list of available books should display the message: "No books found matching ${listBooksAvailable[0].title} 2"`, () => {
    vi.useFakeTimers()

    const bookTitle = `${listBooksAvailable[0].title} 2`
    const searcher = screen.getByPlaceholderText('La llamada de Cthulhu')

    expect(searcher).toBeDefined()

    act(() => {
      fireEvent.change(searcher, { target: { value: bookTitle } })

      vi.advanceTimersByTime(400)
    })

    const { getByDisplayValue, getByText, queryAllByLabelText } = screen

    expect(getByDisplayValue(bookTitle)).toHaveValue(bookTitle)

    expect(queryAllByLabelText(labelButton[available]).length).toEqual(0)

    expect(getByText(/^No se encontraron libros que coincidan con/i)).toBeDefined()

    vi.clearAllTimers()
  })
})
