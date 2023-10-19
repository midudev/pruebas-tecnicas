import { Book, BookListT } from "../types/Books"
import BookEl from "./BookEl"

interface Props {
  bookList: BookListT
  setBookAtAdd: React.Dispatch<React.SetStateAction<Book>>
  numBooks: number
}
export default function ReadListBooks({
  bookList,
  setBookAtAdd,
  numBooks
}: Props) {
  return (
    <section className="bg-slate-500 p-4 text-white min-w-[500px]">
      <h2 className="text-2xl font-bold my-4 ">
        Reading List:
        <span className=" text-black font-bold text-3xl"> {numBooks}</span>
      </h2>
      <section className="flex justify-between gap-5 flex-wrap">
        {bookList.library?.map((library) => {
          return (
            <BookEl
              key={library.book.ISBN}
              library={library}
              setBookAtAdd={setBookAtAdd}
            />
          )
        })}
      </section>
    </section>
  )
}
