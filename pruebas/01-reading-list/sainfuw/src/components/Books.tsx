import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Book from "./Book";

export default function Books() {
  const { filteredBooks } = useContext(AppContext);

  return (
    <section className="flex flex-col flex-1 gap-8">
      <ul className="grid grid-cols-[repeat(auto-fill,165px)] gap-8 justify-center">
        {filteredBooks.map((book) => <Book key={book.title} book={book} />)}
      </ul>
    </section>
  )
}