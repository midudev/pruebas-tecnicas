import { useFilters } from "../hooks/useFilters";
import Book from "./Book";

export default function Books() {
  const { filterBooks } = useFilters()
  const filteredBooks = filterBooks()

  return (
    <section className="flex flex-col flex-1 gap-8">
      <ul className={`grid grid-cols-[repeat(auto-fit,minmax(135px,175px))] gap-8 justify-center md:${filteredBooks.length > 4 ? 'justify-center' : 'justify-start'}`}>
        {filteredBooks.map((book) => <Book key={book.title} book={book} />)}
      </ul>
    </section>
  )
}