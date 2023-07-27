import { defineStore } from 'pinia'
import { Book, Action, Genre } from '../types.d'
import { getAllBooks } from '../services/bookService'

interface State {
  availableBooks: Book[]
  readedBooks: Book[]
}

export const useBookStore = defineStore({
  id: 'bookStore',

  state: (): State => ({
    availableBooks: [],
    readedBooks: [],
  }),

  actions: {
    getBooks() {
      this.availableBooks = getAllBooks()
      
      return this.availableBooks
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
    },

    filterByGenre({ genre }: { genre: Genre }) {
      if (genre === "Todos") {
        return this.availableBooks
      }
    
      // Retorno un array de todos los documentos con el genero seleccionado
      return this.availableBooks.filter(book => book.genre === genre)
    },
    
    filterBooks({ genre, pages }: { genre: Genre, pages: number }) {
      const filtered = this.filterByGenre({ genre })
      return filtered.filter(book => book.pages >= pages)
    },
  }
})