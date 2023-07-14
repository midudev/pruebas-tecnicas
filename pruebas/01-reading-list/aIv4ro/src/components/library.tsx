import { BookList } from './book-list'
import { BooksFilters } from './books-filters'
import { ReadingList } from './reading-list'

export function Library () {
  return (
    <>
      <BooksFilters />
      <div className='grid grid-cols-3'>
        <section className='col-span-2'>
          <BookList />
        </section>
        <section>
          <ReadingList />
        </section>
      </div>
    </>
  )
}
