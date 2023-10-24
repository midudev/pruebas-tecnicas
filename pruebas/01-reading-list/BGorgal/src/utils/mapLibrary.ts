import { Book, Author, LibraryItem, dataBooks } from '../types'
import { getBooks } from './getBooks'

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

export async function mapLibrary(): Promise<BookMapped[]> {
  const data: dataBooks = await getBooks() as dataBooks
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


