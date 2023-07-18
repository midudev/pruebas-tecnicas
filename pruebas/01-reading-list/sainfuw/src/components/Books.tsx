import { useContext } from "react";
import { FilteredBooksContext } from "../context/FilteredBooksContext";
import Book from "./Book";

export default function Books() {
  const { filteredBooks } = useContext(FilteredBooksContext);

  return (
    <section className="flex flex-col flex-1 gap-8">
      <ul className="grid grid-cols-[repeat(auto-fill,160px)] gap-8 justify-center">
        {filteredBooks.map((book) => <Book key={book.title} book={book} />)}
      </ul>
    </section>
  )
}