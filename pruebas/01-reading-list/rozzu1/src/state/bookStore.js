import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import data from '../assets/books.json';




export const bookStore = create(persist((set) => ({
    books: [],
    readingList: [],
    booksOnList: 0,
    booksNotOnList: 0,
    selectedGenre: '',
    searchBook: '',
    fetchBooks: async () => {
        try {
            const fetchedBooks = data.library;
            const totalBooks = fetchedBooks.length;
            set((state) => ({
                books: fetchedBooks,
                booksNotOnList: state.booksNotOnList || totalBooks,
            }));
        } catch (error) {
            console.error('Error:', error);
        }
    },
    addBook: (book) => {
        set((state) => ({ readingList: [...state.readingList, book], booksOnList: state.booksOnList + 1, booksNotOnList: state.booksNotOnList - 1 }));
    },
    removeBook: (ISBN) => {
        set((state) => ({ readingList: state.readingList.filter(({ book }) => book.ISBN !== ISBN), booksOnList: state.booksOnList - 1, booksNotOnList: state.booksNotOnList + 1 }));
    },
    setSelectedGenre: (genre) => {
        set({ selectedGenre: genre });
    },
    setSearchBook: (name) => {
        set({ searchBook: name })
    }
}), {
    name: 'book-store',
    storage: createJSONStorage(() => localStorage),
}));
