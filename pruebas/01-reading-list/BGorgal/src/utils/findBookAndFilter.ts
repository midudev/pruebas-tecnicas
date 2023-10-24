import { BookMapped } from "./mapLibrary"

export const findBookAndFilter = (books: BookMapped[], bookId: string) => {
  const bookFromList = books.find(book => bookId === book.bookId)
  const filteredBooks = books.filter(book => bookId !== book.bookId)
  return { bookFromList, filteredBooks }
}
