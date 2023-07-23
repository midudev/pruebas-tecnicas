import { afterEach, describe, expect, it } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import matchers from '@testing-library/jest-dom/matchers'

import { BookList, generateLabelListOfBooks } from '@/components/BookList'
import { BookListProvider } from '@/context/bookList'

import { listBooksAvailable } from '@/assets/values'
import { buttonTitles, listTypes } from '@/assets/constants'

expect.extend(matchers)

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
    expect(() => renderingWithoutContext()).toThrowError(/must be used within a/)
  })

  it(`The book ${listBooksAvailable[0].title} is in the list on the screen`, () => {
    renderWithContent(listTypes.available)

    expect(screen.getByText(listBooksAvailable[0].title)).toBeDefined()
  })

  it(`Renders the ${listBooksAvailable.length} elements of the list`, () => {
    const { available } = listTypes

    renderWithContent(available)

    expect(screen.getAllByTitle(buttonTitles[available])).toHaveLength(listBooksAvailable.length)
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

  it(`The list of type "${listTypes.available}", the button must have title="${
    buttonTitles[listTypes.available]
  }"`, () => {
    const [book] = listBooksAvailable
    const { available } = listTypes

    render(
      <BookListProvider>
        <BookList books={[book]} listType={available} />
      </BookListProvider>
    )

    const title = screen.getByTitle(buttonTitles[available])

    expect(title).toBeDefined()
  })
})
