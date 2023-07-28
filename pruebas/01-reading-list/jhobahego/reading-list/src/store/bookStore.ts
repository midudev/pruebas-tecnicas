import { defineStore } from 'pinia'
import { Book, Action, Genre } from '../types.d'
import { getAllBooks } from '../services/bookService'

interface State {
  availableBooks: Book[]
  readedBooks: Book[]
  filteredBooks: Book[]
}

export const useBookStore = defineStore({
  id: 'bookStore',

  state: (): State => ({
    availableBooks: [],
    readedBooks: [],
    filteredBooks: [],
  }),

  actions: {
    getBooks() {
      const books = getAllBooks()
      this.availableBooks = books
      this.filteredBooks = books
      // return this.availableBooks
    },

    handleAddbooks({ book, action }: { book: Book, action: Action }) {
      if (action === Action.ADD_TO_READED) {
        this.readedBooks = this.readedBooks.concat(book)
        this.availableBooks = this.availableBooks.filter(actualBook => actualBook.ISBN !== book.ISBN)
      }

      if (action === Action.ADD_TO_AVAILABLE) {
        this.availableBooks = this.availableBooks.concat(book)
        this.readedBooks = this.readedBooks.filter(actualBook => actualBook.ISBN !== book.ISBN)
      }

      this.filteredBooks = this.availableBooks
    },

    filterByGenre({ genre }: { genre: Genre }) {
      if (genre === "Todos") {
        this.filteredBooks = this.availableBooks
      } else {
        // Retorno un array de todos los documentos con el genero seleccionado
        this.filteredBooks = this.availableBooks.filter(book => book.genre === genre)
      }
    },

    filterBooks({ genre, pages }: { genre: Genre, pages: number }) {
      this.filterByGenre({ genre })
      this.filteredBooks = this.filteredBooks.filter(book => book.pages >= pages)
    },
  }
})