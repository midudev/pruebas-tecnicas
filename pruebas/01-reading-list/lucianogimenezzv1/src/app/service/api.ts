import data from '../../data/books.json'
import { Book } from '@/types'

export const getBooks = (): Promise<Book[]> => {
    return new Promise((resolve, reject) => {
        const books: Book[] = data.library.map((book) => book.book)

        if (!books) {
            reject("Unexpected error")
        }
        
        setTimeout(() => {
            resolve(books)
        }, 2000)
    })
}