import { LibraryItem, dataBooks } from '../types'
import data from '../mocks/books.json'

interface MappedLibraryItem {
  book: {
    title: string
    numPages: number
    genre: string
    image: string
    synopsis: string
    publicationYear: number
    bookId: string
    authorName: string
    otherBooks: string[]
  }
}

function mapLibrary(data: dataBooks): MappedLibraryItem[] {
  const { library } = data
  return library.map((item: LibraryItem) => {
    const { book } = item
    const { author, ...bookInfo } = book

    return {
      book: {
        authorName: author.name,
        otherBooks: author.otherBooks,
        title: bookInfo.title,
        numPages: bookInfo.pages,
        genre: bookInfo.genre,
        image: bookInfo.cover,
        synopsis: bookInfo.synopsis,
        publicationYear: bookInfo.year,
        bookId: bookInfo.ISBN,
      },
    }
  })
}

export const mappedLibrary = mapLibrary(data)
