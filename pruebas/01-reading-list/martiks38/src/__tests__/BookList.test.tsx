import { afterEach, describe, expect, it } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'

import { BookList, generateLabelListOfBooks } from '@/components/BookList'
import { BookListProvider } from '@/context/bookList'

import { listBooksAvailable } from '@/assets/values'
import { listTypes } from '@/assets/constants'

function renderingWithoutContext() {
  return render(<BookList books={listBooksAvailable} listType={listTypes.available} />)
}

function renderWithContent(listType: 'available' | 'reading') {
  return render(
    <BookListProvider>
      <BookList books={listBooksAvailable} listType={listType} />
    </BookListProvider>
  )
}

describe('<BookList />', () => {
  afterEach(() => cleanup())

  it('Without context', () => {
    expect(() => renderingWithoutContext()).toThrowError(/must be used within a/i)
  })

  it(`The book ${listBooksAvailable[0].title} is in the list on the screen`, () => {
    renderWithContent(listTypes.available)

    expect(screen.getByText(listBooksAvailable[0].title)).toBeDefined()
  })

  it(`Renders the ${listBooksAvailable.length} elements of the list`, () => {
    const { available } = listTypes

    renderWithContent(available)

    expect(screen.getAllByLabelText(/^Agregar/i)).toHaveLength(listBooksAvailable.length)
  })

  it(`The list button of type "available" must have an aria-label with value: "${generateLabelListOfBooks(
    listTypes.available,
    listBooksAvailable[0].title
  )}"`, () => {
    renderWithContent(listTypes.available)

    expect(
      screen.getByLabelText(
        generateLabelListOfBooks(listTypes.available, listBooksAvailable[0].title)
      )
    ).toBeDefined()
  })

  it(`The list button of type "reading" must have an aria-label with value: "${generateLabelListOfBooks(
    'reading',
    listBooksAvailable[0].title
  )}"`, () => {
    renderWithContent(listTypes.available)

    expect(
      screen.getByLabelText(
        generateLabelListOfBooks(listTypes.available, listBooksAvailable[0].title)
      )
    ).toBeDefined()
  })
})
