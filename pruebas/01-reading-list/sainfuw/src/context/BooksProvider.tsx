import { ReactNode } from "react";
import { library } from "../api/books.json";
import { BooksContext } from "./BooksContext";

const API_DATA = library.map(item => item.book)

export function BooksProvider({ children }: { children: ReactNode }) {
  const uniqueGenres = [...new Set(API_DATA.map(book => book.genre))]

  return (
    <BooksContext.Provider value={{
      books: API_DATA,
      genres: uniqueGenres
    }
    }>
      {children}
    </BooksContext.Provider>
  )
}