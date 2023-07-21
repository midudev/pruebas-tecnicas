import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import libraryBooks from "../data/books.json";

export const books = () => {
    const getBooks = libraryBooks.library.map((book) => book.book)
    return getBooks
}

export const useLibrary = create(
    persist(
        (set) => ({
            books: books(),
            list: [],
            setList: (book) => {
                set((state) => ({
                    list: [...state.list, book ],
                    books: state.books.filter((item) => item.ISBN !== book.ISBN)
                })) 
            },
            removeList: (book) => {
                set((state) => ({
                    list: state.list.filter((list) => list.ISBN !== book.ISBN),
                    books: [...state.books, book]
                }))
            }
        }),
        {
            name: 'readListStorage',
            storage: createJSONStorage(() => localStorage),
        }
    )
)
