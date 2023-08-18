import { useState, useEffect, createContext } from "react";
import { getBooks } from "../services/getBooks";

export const BooksContext = createContext();

export function BooksProvider({ children }) {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

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
        console.error("murió: ", e);
        console.log('no cargó xd')
        
      } finally {
        setLoading(false);
      }
    };

    initBooks();
  }, []);

  return (
    <BooksContext.Provider value={{ books, loading }}>{children}</BooksContext.Provider>
  );
}
