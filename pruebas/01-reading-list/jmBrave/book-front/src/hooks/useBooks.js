import { useState } from 'react'
export default function useBooks() {
    const [books, setBooks] = useState([])

    function handleAddAllBooks(books) {
        setBooks(books)
    }

    function handleFilterBooks(sourceBooks, books) {
        const ISBN_SELECTED = books.map((book) => book.book.ISBN)
        const filterBooksAvailable = sourceBooks.filter(
            (bookAvailable) => !ISBN_SELECTED.includes(bookAvailable.book.ISBN)
        )
        setBooks(filterBooksAvailable)
    }

    return {
        books,
        handleAddAllBooks,
        handleFilterBooks,
    }
}
