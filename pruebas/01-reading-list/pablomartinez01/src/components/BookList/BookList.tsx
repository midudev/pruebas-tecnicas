import { useReadList } from '../../hooks/useReadList'
import { type Book } from '../../types'
import { BookItem } from '../BookItem/BookItem'
import './bookList.css'

interface Props {
  books: Book[]
}

export const BookList: React.FC<Props> = ({ books }) => {
  const { addBookToList, isBookInList } = useReadList()
  return (
    <ul className="book-list">
      {books.map((item) => (
          <BookItem
            key={item.ISBN}
            book={item}
            onAdd={addBookToList}
            isSelected={isBookInList(item)}
          />
      ))}
    </ul>
  )
}
