import { Book } from '../interfaces/Book'
import CardBook from './CardBook'

interface ReadingListProps {
  titleSection: string
  readingList: Book[]
  addToBookList: (book: Book) => void
}

const ReadingList = ({
  titleSection,
  readingList,
  addToBookList,
}: ReadingListProps) => {
  return (
    <section className='pt-4'>
      <div className='navbar grid grid-cols-3 '>
        <div className='flex-1  col-span-1'>
          <div className='indicator'>
            <span className='indicator-item indicator-top indicator-end badge bg-orange-300 text-slate-700 text-xs font-semibold'>
              {readingList.length}
            </span>
            <p className='btn btn-ghost btn-sm pb-1 font-serif text-center font-semibold text-lg text-gray-600 pl-3 capitalize hover:bg-transparent'>
              {titleSection}
            </p>
          </div>
        </div>
      </div>
      {/* CARD BOOK COMPONENT */}
      <div className='grid grid-cols-3 gap-4 p-8 rounded-lg overflow-y-auto max-h-80'>
        {readingList.length > 0 ? (
          readingList.map(book => (
            <li className='flex items-center justify-center' key={book.ISBN}>
              <CardBook
                book={book}
                fromComponent='ReadingList'
                addToBookList={addToBookList}
              />
            </li>
          ))
        ) : (
          <p className='text-center text-gray-600 font-light text-md col-span-3'>
            No <b>books</b> in your <b>reading list</b>..
          </p>
        )}
      </div>
      {/* END CARD BOOK COMPONENT */}
    </section>
  )
}

export default ReadingList
