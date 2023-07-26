import BookList from './BookList'
import { useBooksStore } from '../../store/books'
import ListElement from '../ListElement'

export const BookListRead = () => {
  const listOfBooksToRead = useBooksStore(state => state.listOfBooksToRead)

  return (
    <section className='mb-6 flex h-[17rem]'>
      <div className=' w-[11rem] overflow-x-hidden overflow-y-scroll'>
        <BookList books={listOfBooksToRead} isReadList />
      </div>
      <div className='mr-1 max-w-[11rem] overflow-y-scroll px-2'>
        <div className=' flex flex-col'>
          <header className='flex items-center gap-3'>
            <h3 className='leading-2 text-slate-300'>Lista de lectura</h3>
            <div className=' grid  place-content-center  rounded-full bg-slate-700 px-1'>
              <span className='px-[2px] text-center font-primary text-[13px] text-slate-300'>
                {listOfBooksToRead.length}
              </span>
            </div>
          </header>
          <dl className=' min-w-[10rem] divide-y divide-gray-200 text-gray-900 dark:divide-gray-700 dark:text-white'>
            {listOfBooksToRead.map(book => (
              <ListElement
                key={book.bookId}
                principal={book.title}
                secondary={book.authorName}
              />
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
