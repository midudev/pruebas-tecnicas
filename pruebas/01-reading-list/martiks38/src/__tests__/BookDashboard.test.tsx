import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'

import { BookDashboard } from '@/components/BookDashboard'

import { BookListProvider } from '@/context/bookList'
import { FilterProvider } from '@/context/filter'

import { genres, listBooksAvailable } from '@/assets/values'
import { buttonTitles, listTypes, nameStorage } from '@/assets/constants'

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
    const { available, reading } = listTypes

    const booksAvailable = screen.getAllByTitle(buttonTitles[available])
    const readingBooks = screen.queryAllByTitle(buttonTitles[reading])

    expect(booksAvailable).toHaveLength(listBooksAvailable.length)
    expect(readingBooks).toHaveLength(0)
  })

  it('Books in the current genre are displayed. Changing it will display the corresponding books', () => {
    const inputGenre = screen.getByDisplayValue(genres[1])

    fireEvent.click(inputGenre)

    const displayBooks = listBooksAvailable.filter(({ genre }) => genre === genres[1])

    expect(screen.getAllByTitle(buttonTitles[listTypes.available])).toHaveLength(
      displayBooks.length
    )
  })

  it('Add a book from the list of available books. Adds a book to the reading list and decreases one to the list of available books', () => {
    const { available, reading } = listTypes
    let numberReadingBooks = 0

    const booksAvailable = screen.getAllByTitle(buttonTitles[available])

    expect(booksAvailable).toHaveLength(listBooksAvailable.length)

    fireEvent.click(booksAvailable[0])
    numberReadingBooks++

    const readingBooks = screen.getAllByTitle(buttonTitles[reading])

    expect(screen.getAllByTitle(buttonTitles[available])).toHaveLength(
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

    const booksAvailable = screen.getAllByTitle(buttonTitles[available])

    expect(booksAvailable).toHaveLength(listBooksAvailable.length)

    for (let action = 1; action <= addBooksToReadingList; action++) {
      fireEvent.click(booksAvailable[action])
      numberReadingBooks++
    }

    const readingBooks = screen.getAllByTitle(buttonTitles[reading])

    expect(screen.getAllByTitle(buttonTitles[available])).toHaveLength(
      booksAvailable.length - numberReadingBooks
    )
    expect(readingBooks).toHaveLength(numberReadingBooks)

    fireEvent.click(readingBooks[0])
    numberReadingBooks--

    expect(screen.getAllByTitle(buttonTitles[reading])).toHaveLength(numberReadingBooks)
    expect(screen.getAllByTitle(buttonTitles[available])).toHaveLength(
      booksAvailable.length - numberReadingBooks
    )

    expect(localStorage.getItem(nameStorage.listOfReading)).not.toBeNull()

    fireEvent.click(readingBooks[1])
    numberReadingBooks--

    expect(screen.queryAllByTitle(buttonTitles[reading])).toHaveLength(numberReadingBooks)
    expect(screen.getAllByTitle(buttonTitles[available])).toHaveLength(
      booksAvailable.length - numberReadingBooks
    )

    expect(JSON.parse(localStorage.getItem(nameStorage.listOfReading) || '[]')).toHaveLength(
      numberReadingBooks
    )
  })
})
