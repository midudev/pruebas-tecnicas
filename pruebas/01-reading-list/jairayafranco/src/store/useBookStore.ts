import { create } from 'zustand'
import { Store } from '../types/Store'
import { getLocalStorageBooks, getLocalStorageToReadBooks, setLocalStorageBooks, removeLocalStorageBooks, setLocalStorageToReadBooks } from '../utils/storageBooks'
import { syncTabs } from '../utils/syncTabs'

const initialFilterParams = {
    genre: "Todas",
    pageCount: 0,
    name: ""
}

export const useBookStore = create<Store>()((set, get) => {
    syncTabs((books) => {
        if (books.books) {
            set(() => ({ books: books.books }))
        }

        if (books.toReadBooks) {
            set(() => ({ toReadBooks: books.toReadBooks }))
        }
    })

    return {
        books: getLocalStorageBooks(),
        toReadBooks: getLocalStorageToReadBooks(),
        filterParams: initialFilterParams,
        modalBook: null,

        getPageCount: () => {
            const storeBooks = getLocalStorageBooks()
            const pages = storeBooks.library.map(({ book }) => book.pages)
            const pagesLength = pages.length ? pages : [0]
            const minPageCount = Math.min(...pagesLength)
            const maxPageCount = Math.max(...pagesLength)

            return { minPageCount, maxPageCount }
        },

        getBookGenres: () => {
            const tempStoreBooks = getLocalStorageBooks()
            const genres = tempStoreBooks.library.map(({ book }) => book.genre)
            return [...new Set(genres)]
        },

        setFilterBookParams(name, value) {
            set((state) => ({
                filterParams: {
                    ...state.filterParams,
                    [name]: value
                }
            }))
        },

        filterBooks: () => {
            const tempStoreBooks = getLocalStorageBooks()
            const { genre, pageCount, name } = get().filterParams

            const filteredBooks = tempStoreBooks.library.filter(({ book }) => {
                const isGenre = genre && genre !== "Todas" ? book.genre === genre : true
                const isPageCount = pageCount ? book.pages >= pageCount : true
                const isName = name ? book.title.toLowerCase().includes(name.toLowerCase()) : true

                return isGenre && isPageCount && isName
            })

            set(() => ({
                books: {
                    library: filteredBooks
                },
            }))
        },

        resetFilterBooksParams: () => {
            set((state) => ({ filterParams: initialFilterParams, rangeValue: state.getPageCount().minPageCount }))
            get().filterBooks()
        },

        handleBookList: (book, action) => {
            if (action === 'add') {
                setLocalStorageBooks(book)

                set((state) => ({
                    books: {
                        library: state.books.library.filter(({ book: UiBook }) => UiBook !== book)
                    },
                    toReadBooks: [...state.toReadBooks, book]
                }))
            }

            if (action === 'remove') {
                removeLocalStorageBooks(book)

                set((state) => ({
                    books: {
                        library: [...state.books.library, { book }]
                    },
                    toReadBooks: state.toReadBooks.filter((toReadBook) => toReadBook !== book)
                }))
            }
        },

        sortReadListBooks: (newReadList) => {
            setLocalStorageToReadBooks(newReadList)
            set(() => ({ toReadBooks: newReadList }))
        },

        setModalBook: (book) => {
            set(() => ({ modalBook: book }))
        }
    }
})
