import { useBooks } from "../hooks/useBooks";
import AvailableBook from "./AvailableBook";
import {useReadListStore} from "../stores/BookStore";

export default function AvailableBooksSection() {
  const {books} = useBooks()
  const {read_list} = useReadListStore()

  return (
        <ul className="max-w-5xl h-auto mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 items-center sm:px-2 md:px-3">
            {books.map(({book})=>( 
              !read_list.some((instance)=>instance.ISBN === book.ISBN) && <AvailableBook book={book} inReadList={read_list.some((instance) => instance.ISBN === book.ISBN)} key={book.ISBN} />
            ))
          }
        </ul>
  )
}
