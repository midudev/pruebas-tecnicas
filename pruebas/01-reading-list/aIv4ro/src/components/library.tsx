import { BookList } from './book-list'
import { BooksFilters } from './books-filters'
import { ReadingList } from './reading-list'

export function Library () {
  return (
    <>
      <BooksFilters />
      <div className='grid grid-cols-2 2xl:grid-cols-3 p-2'>
        <section className='2xl:col-span-2'>
          <BookList />
        </section>
        <section>
          <ReadingList />
        </section>
      </div>
    </>
  )
}
