import { useContext } from "react"
import ItemBook from "./ItemBook"
import { BookContext } from "../context/BookContext"
import { PropBookContext } from "../types"

function ListBook() {

  const bookCont = useContext(BookContext) as PropBookContext
  const bookList = bookCont.booksList
 
  return (
    <section className="flex flex-1 h-full rounded-xl bg-primary p-6 overflow-y-auto">
      <div role="list-book" className="w-full h-full grid auto-rows-[20rem] grid-cols-[repeat(auto-fill,minmax(min(100%,15rem),1fr))] gap-6">
        {bookList.map((book) => <ItemBook key={book.ISBN} book={book} />)}
      </div>
    </section>
  )
}

export default ListBook