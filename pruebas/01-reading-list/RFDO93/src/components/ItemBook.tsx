import { useContext } from "react"
import {Link} from 'react-router-dom';
import { BookContext } from "../context/BookContext"
import { BookInterface, PropBookContext } from "../types"
import BookCloseIcon from "../assets/icons/BookCloseIcon"
import BookOpenIcon from "../assets/icons/BookOpenIcon"

interface ItemBookProps {
  book: BookInterface
}

function ItemBook({ book }: ItemBookProps) {

  const bookCont = useContext(BookContext) as PropBookContext
  const {
    addBookPending,
    isBookPending
  } = bookCont

  const isActiveBookPending = isBookPending(book.ISBN)

  const handleAddBook = (id:BookInterface["ISBN"]) => {
    addBookPending(id)
  }

  const titleToRoute = (title:BookInterface['title']) => {
    return title.replace(/\s+/g, '-').toLowerCase()
  }

  return (
    <article role="list-book-item" className="bg-secondary rounded-lg overflow-hidden cursor-pointer relative shadow-[0_10px_6px_3px_rgba(0,0,0,0.2)] hover:scale-105 transition-all duration-100 ease-in-out">
      <Link to={`/book/${titleToRoute(book.title)}`} relative="path">
        <img src={book.cover} className="object-cover w-full h-auto m-auto z-0 " />
      </Link>
      <footer 
        className="bg-tertiary bg-opacity-80 absolute w-full p-2 min-h-16 cursor-default bottom-0 z-30 flex justify-between items-center gap-2" 
      >
        <div className="w-[83%]">
          <h4 className=" text-primary text-lg font-bold">{book.title}</h4>
          <p className=" text-primary text-sm">{`${book.genre} - ${book.year}`}</p>
        </div>
        <div >
          {!isActiveBookPending ? 
            <button className="w-8 h-8" onClick={() => handleAddBook(book.ISBN)}>
              <BookCloseIcon />
            </button>
          :
            <div className="w-8 h-8">
              <BookOpenIcon />
            </div>
          }
        </div>
      </footer>
    </article>
  )
}

export default ItemBook