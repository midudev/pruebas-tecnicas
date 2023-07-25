import { Book, BookSelectable } from "../types";

const LongestBook = (bookList: BookSelectable[]) => {
    let longestBook = bookList[0];
    bookList.forEach(book => {
        if (book.pages > longestBook.pages) longestBook = book
    })
    return longestBook;
}

export const BookList = {
    LongestBook
}

export const pages = (book: Book) => book.pages || 0