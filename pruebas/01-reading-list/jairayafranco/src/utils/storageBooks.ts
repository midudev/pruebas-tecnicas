import { newJSONBook as JSONBooks } from '../config/jsonBookProps'
import { Book, Books } from '../interfaces/Book'

const localStorageBooks = localStorage.getItem('books')
const localStorageToReadBooks = localStorage.getItem('toReadBooks')

export const setStorage = ({ name, data }: { name: string, data: Book[] | Books }) => localStorage.setItem(name, JSON.stringify(data))

if (!localStorageBooks) {
    setStorage({ name: 'books', data: JSONBooks })
}

if (!localStorageToReadBooks) {
    setStorage({ name: 'toReadBooks', data: [] })
}

export const getLocalStorageBooks = () => JSON.parse(localStorage.getItem('books') || "{ library: [] }") as Books;
export const getLocalStorageToReadBooks = () => JSON.parse(localStorage.getItem('toReadBooks') || "[]") as Book[];

export const setLocalStorageBooks = (book: Book) => {
    const toReadBooks = getLocalStorageToReadBooks()
    const newToReadBooks = [...toReadBooks, book]
    setStorage({ name: 'toReadBooks', data: newToReadBooks })

    const books = getLocalStorageBooks()
    const newBooks = {
        library: [
            ...books.library.filter(({ book: { ISBN } }) => ISBN !== book.ISBN)
        ]
    }

    setStorage({ name: 'books', data: newBooks })
}

export const setLocalStorageToReadBooks = (books: Book[]) => {
    setStorage({ name: 'toReadBooks', data: books })
}

export const removeLocalStorageBooks = (book: Book) => {
    const toReadBooks = getLocalStorageToReadBooks()
    const newToReadBooks = toReadBooks.filter(({ ISBN }) => ISBN !== book.ISBN)
    setStorage({ name: 'toReadBooks', data: newToReadBooks })

    const books = getLocalStorageBooks()
    const newBooks = { library: [...books.library, { book }] }
    setStorage({ name: 'books', data: newBooks })
}