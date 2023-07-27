import { create } from 'zustand'

export const useStore = create((set) => ({
  tourCompleted: false,
  books: [],
  readingList: [],
  genres: [],
  genre: '',
  pages: 0,
  maxPages: 0,
  showNotification: false,
  notificationMessage: '',
  notificationType: '',
  setTourCompleted: (tourCompleted) => set({ tourCompleted }),
  setBooks: (books) => set({ books }),
  addBook: (book) => set((state) => ({ books: [...state.books, book] })),
  removeBook: (ISBN) => set((state) => ({ books: state.books.filter(({ book }) => book.ISBN !== ISBN) })),
  setReadingList: (readingList) => set({ readingList }),
  addToReadingList: (book) => set((state) => ({ readingList: [...state.readingList, book] })),
  updateBookFromReadingList: (ISBN, book) => set((state) => ({ readingList: state.readingList.map((readingBook) => readingBook.book.ISBN === ISBN ? { book } : readingBook) })),
  removeFromReadingList: (ISBN) => set((state) => ({ readingList: state.readingList.filter(({ book }) => book.ISBN !== ISBN) })),
  setGenres: (genres) => set({ genres }),
  setGenre: (genre) => set({ genre }),
  setPages: (pages) => set({ pages }),
  setMaxPages: (maxPages) => set({ maxPages }),
  setShowNotification: (showNotification) => set({ showNotification }),
  setNotificationMessage: (notificationMessage) => set({ notificationMessage }),
  setNotificationType: (notificationType) => set({ notificationType })
}))
