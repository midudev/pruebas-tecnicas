import { useContext } from "react"
import { BookInterface, BookPending, PropBookContext } from "../../types"
import DeleteIcon from "./DeleteIcon"
import { BookContext } from "../../context/BookContext"
import { Link } from "react-router-dom"

interface BookItemPendingProps {
  bookPending: BookPending
}

function BookItemPending({bookPending}:BookItemPendingProps) {

  const {removeBookPending} = useContext(BookContext) as PropBookContext

  const handleRemoveBook = (bookId:BookPending["ISBN"]) => {
    removeBookPending(bookId)
  }

  const titleToRoute = (title:BookInterface['title']) => {
    return title.replace(/\s+/g, '-').toLowerCase()
  }

  return (
    <li 
      role="list-book-pending-item"
      className={`w-full rounded-lg overflow-hidden relative group cursor-pointer`}
    >
      <button 
        className="absolute top-2 right-2 w-8 h-8 bg-primary rounded-full p-[1px] z-30 hidden group-hover:block"
        onClick={() => handleRemoveBook(bookPending.ISBN)}
      >
        <DeleteIcon />
      </button>
      <Link to={`/book/${titleToRoute(bookPending.title)}`} className="z-0">
        <img 
          className="object-cover m-auto"
          src={bookPending.cover}
        />
      </Link>
    </li>
  )
}

export default BookItemPending