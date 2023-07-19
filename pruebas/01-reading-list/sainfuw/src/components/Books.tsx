import { useFilters } from "../hooks/useFilters";
import Book from "./Book";

export default function Books() {
  const { filterBooks } = useFilters()
  const filteredBooks = filterBooks()

  return (
    <section className="flex flex-col flex-1 gap-8">
      <ul className="grid grid-cols-[repeat(auto-fill,130px)] gap-8 justify-center">
        {filteredBooks.map((book) => <Book key={book.title} book={book} />)}
      </ul>
    </section>
  )
}