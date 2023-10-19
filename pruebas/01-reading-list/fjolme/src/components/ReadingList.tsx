import { Book } from '../types/types'
import { ReadingItem } from './ReadingItem'

interface Props {
  readingList: Book[],
  removeFromReadingList: (book: Book) => void
}

export const ReadingList = ({ readingList, removeFromReadingList }: Props) => {
  return (
    <section className='grow flex flex-col gap-6 p-4 overflow-y-auto'>
      {readingList.map(book =>
        <ReadingItem
          key={book.ISBN}
          book={book}
          removeFromReadingList={removeFromReadingList}
        />)
      }
    </section>
  )
}
