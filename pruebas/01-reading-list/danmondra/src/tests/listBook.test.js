import { cleanup, render } from '@testing-library/react'
import { afterEach, describe, it } from 'vitest'
import { ListBook } from '../components/ListBook'
import { LISTS_IDS } from '../constants/details-of-lists'
import books from '../data/books.json'

describe('ListBook', () => {
  afterEach(cleanup)

  it('should render the book in the list with its properties', () => {
    render(
      <ListBook
        book={books.library[0].book}
        listId={LISTS_IDS.BOOKS_TO_BE_READ}
      />
    )
  })
})
