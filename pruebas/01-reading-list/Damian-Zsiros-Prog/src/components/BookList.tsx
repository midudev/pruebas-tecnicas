import { Book, BookListT } from "../types/Books"
import BookEl from "./BookEl"

interface Props {
  bookList: BookListT
  setBookAtAdd: React.Dispatch<React.SetStateAction<Book>>
  numBooks: number
}
export default function BookList({ bookList, setBookAtAdd, numBooks }: Props) {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-3xl font-bold">Libros disponibles: {numBooks}</h2>
      <section className="flex justify-between gap-5 flex-wrap">
        {bookList.library?.map((library) => {
          return (
            <BookEl
              library={library}
              key={library.book.ISBN}
              setBookAtAdd={setBookAtAdd}
            />
          )
        })}
      </section>
    </section>
  )
}
