import {Library} from "../../models/BooksModel"

export const searchBooks = (array:Library[],keyword:string) => {
    return array.filter(books => {
        return books.book.title.toLowerCase().trim().includes(keyword.toLowerCase().trim())
    })

}