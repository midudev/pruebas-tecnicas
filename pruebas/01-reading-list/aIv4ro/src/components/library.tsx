import { BookList } from './book-list'
import { BooksFilters } from './books-filters'

export function Library () {
  return (
    <>
      <BooksFilters />
      <BookList />
    </>
  )
}
