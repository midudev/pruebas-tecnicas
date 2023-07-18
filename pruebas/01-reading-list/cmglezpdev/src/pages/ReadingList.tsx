import { useEffect, useState } from "react"
import { Book } from "../types";
import { BookItem } from "../components/BookItem";

export const ReadingList = () => {

  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const lsbooks = JSON.parse(localStorage.getItem('reading-book') || '[]');
    setBooks(lsbooks);
  }, []);

  return (
    <main>
      <section className='library'>
        {
          books.map(book => (
            <BookItem key={book.ISBN} book={book} />
          ))
        }
      </section>
    </main>
  )
}
