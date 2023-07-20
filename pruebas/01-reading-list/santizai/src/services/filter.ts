import type { Library } from "../types/interfaces";

export const filterForId = (id: string, books: Library[]) => {
    return books.find(book => book.book.ISBN === id)
}