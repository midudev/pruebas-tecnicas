import { useState, useEffect, createContext } from "react";
import { getBooks } from "../services/getBooks";
import { ERROR_MESSAGES } from "../constants/errorMessages"

export const BooksContext = createContext();

export function BooksProvider({ children }) {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const initBooks = async () => {

      try {
        setLoading(true);

        const query = await getBooks();

        const mappedBooks = query?.library?.map(({ book }) => {
          return {
            title: book.title,
            pages: book.pages,
            genre: book.genre,
            cover: book.cover,
            synopsis: book.synopsis,
            year: book.year,
            ISBN: book.ISBN,
            author: {
              name: book.author.name,
              otherBooks: book.author.otherBooks,
            },
          };
        });
        setBooks(mappedBooks);
      } catch (e) {
        console.error("Hubo un error: ", e);
        setError(ERROR_MESSAGES.FETCH_ERROR);

      } finally {
        setLoading(false);
      }
    };

    initBooks();
  }, []);

  return (
    <BooksContext.Provider value={{ books, loading, setLoading, error, setError }}>{children}</BooksContext.Provider>
  );
}
