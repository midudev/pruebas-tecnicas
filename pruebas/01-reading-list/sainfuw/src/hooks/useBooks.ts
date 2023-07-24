import { library } from "../api/books.json";

export function useBooks() {
  const API_DATA = library.map(item => item.book)
  const uniqueGenres = [...new Set(API_DATA.map(book => book.genre))]

  return { books: API_DATA, genres: uniqueGenres }
}