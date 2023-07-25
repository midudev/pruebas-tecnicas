import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { shared } from 'use-broadcast-ts';
import libraryBooks from "../data/books.json";

const dataBooks = libraryBooks.library.map((book) => book.book)

export const useLibrary = create(
    shared(
        persist(
            (set) => ({
                books: dataBooks,
                list: [],
                data: dataBooks,
                setList: (book) => {
                    set((state) => ({
                        data: state.data.filter((item) => item.ISBN !== book.ISBN),
                        list: [...state.list, book ],
                        books: state.books.filter((item) => item.ISBN !== book.ISBN)
                    })) 
                },
                removeList: (book) => {
                    set((state) => ({
                        list: state.list.filter((list) => list.ISBN !== book.ISBN),
                        data: [...state.data, book],
                        books: [...state.books, book]/* .filter((e) => {
                            e.genre == state.filter
                        }) */
                    }))
                },
                filter: 'All',
                setFilter: (filter) => {
                    if (filter === 'All') {
                        set((state) => ({
                            books: state.data, 
                            filter: 'All'
                        }))
                    } else {
                        set((state) => ({
                            books: state.data.filter(
                                book => book.genre === filter
                            ),
                            filter: filter
                        }))
                    }
                }
            }),
            {
                name: 'readListStorage',
                storage: createJSONStorage(() => localStorage),
            }
        ),
        {
            name: 'readListBroadcast'
        }
    )
)
