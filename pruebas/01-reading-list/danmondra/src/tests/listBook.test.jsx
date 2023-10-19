import { render } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'

import { ListBook } from '@/components/ListBook'
import { LISTS_IDS } from '@/constants/details-of-lists'
import books from '@/mocks/books.json'

describe('<ListBook />', () => {
  const bookToTest = books.library[3].book
  const listIDToTest = LISTS_IDS.BOOKS_TO_BE_READ
  let component

  beforeEach(() => {
    component = render(
      <ListBook
        book={bookToTest}
        listId={listIDToTest}
      />
    )
  })

  it('should render the book in the list with its properties', () => {
    const { getByText } = component

    expect(getByText(bookToTest.title)).toBeInTheDocument()
    expect(getByText(bookToTest.genre)).toBeInTheDocument()
    expect(getByText(bookToTest.author.name)).toBeInTheDocument()
  })

  it('should have a data attribute with the listID provided', () => {
    expect(document.querySelector(`[data-listid="${listIDToTest}"]`))
      .toBeInTheDocument()
  })
})
