import { useFilters } from "../hooks/useFilters";
import Book from "./Book";

export default function Books() {
  const { filterBooks } = useFilters()
  const filteredBooks = filterBooks()

  return (
    <section id="books-list" className="flex flex-col flex-1 h-full gap-8 rounded-lg bg-background-light">
      <ul className={`grid grid-cols-[repeat(auto-fit,minmax(135px,170px))] gap-8 p-8 justify-center ${filteredBooks.length > 4 ? 'md:justify-center' : 'md:justify-start'}`}>
        {filteredBooks.map((book) => <Book key={book.title} book={book} />)}
      </ul>
    </section>
  )
}