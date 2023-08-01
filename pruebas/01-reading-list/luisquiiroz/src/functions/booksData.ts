import books from '../mocks/books.json'
import { BookType, SaveToLocalStorageParams } from '../types/types'

export const storage = {
  books: '__books__',
  readingList: '__reading_list__'
}

export const booksData = () => {
  const { library } = books

  const formattedBooks: BookType[] = library.map(({ book }) => ({
    title: book.title ?? 'Sin título',
    pages: book.pages ?? 0,
    genre: book.genre ?? 'Sin genero',
    cover: book.cover ?? 'Sin imagen',
    synopsis: book.synopsis ?? 'Sin sinopsis',
    year: book.year ?? 0,
    isbn: book.ISBN ?? 'Sin isbn',
    author: book.author ?? { name: 'Desconocido', otherBooks: [''] },
    reading: false
  }))

  const genreOfBooks: string[] = Array.from(new Set(formattedBooks.map((book) => book.genre)))

  const pagesOfBooks = ['0', '200', '400', '600', '800', '1000']

  const saveToLocalStorage = ({ books, readingList }: SaveToLocalStorageParams) => {
    localStorage.setItem(storage.books, JSON.stringify(books))
    localStorage.setItem(storage.readingList, JSON.stringify(readingList))
  }

  const getBooksFromLocalStorage: BookType[] = JSON.parse(localStorage.getItem(storage.books) ?? '[]')

  const getReadingListFromLocalStorage: BookType[] = JSON.parse(localStorage.getItem(storage.readingList) ?? '[]')

  return {
    formattedBooks,
    genreOfBooks,
    pagesOfBooks,
    saveToLocalStorage,
    getBooksFromLocalStorage,
    getReadingListFromLocalStorage
  }
}
