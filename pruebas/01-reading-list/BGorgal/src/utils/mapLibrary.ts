import data from '../mocks/books.json'
import { Book, Author, LibraryItem, dataBooks } from '../types'

export interface BookMapped {
  title: Book['title']
  numPages: Book['pages']
  genre: Book['genre']
  image: Book['cover']
  synopsis: Book['synopsis']
  publicationYear: Book['year']
  bookId: Book['ISBN']
  authorName: Author['name']
  otherBooks: Author['otherBooks']
}

function mapLibrary(data: dataBooks): BookMapped[] {
  const { library } = data
  return library.map((item: LibraryItem) => {
    const { book } = item
    const { author, ...bookInfo } = book

    return {
      authorName: author.name,
      otherBooks: author.otherBooks,
      title: bookInfo.title,
      numPages: bookInfo.pages,
      genre: bookInfo.genre,
      image: bookInfo.cover,
      synopsis: bookInfo.synopsis,
      publicationYear: bookInfo.year,
      bookId: bookInfo.ISBN,
    }
  })
}

export const books = mapLibrary(data)
