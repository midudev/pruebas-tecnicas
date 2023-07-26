import { useState } from 'react'
export default function useBooks() {
    const [books, setBooks] = useState([])
    const [genres, setGenres] = useState([])
    const [genreSelected, setGenreSelected] = useState('Todas')

    function handleAddAllBooks(books) {
        setBooks(books)
    }

    function handleGetAllGenres(books) {
        const set = new Set(books.map((book) => book.book.genre))
        const allGenres = Array.from(set)
        setGenres(['Todas', ...allGenres])
    }

    function handleFilterBooks(sourceBooks, books) {
        const ISBN_SELECTED = books.map((book) => book.book.ISBN)
        const filterBooksAvailable = sourceBooks.filter(
            (bookAvailable) => !ISBN_SELECTED.includes(bookAvailable.book.ISBN)
        )

        if (genreSelected !== 'Todas') {
            const filterByGenre = filterBooksAvailable.filter(
                (book) => book.book.genre === genreSelected
            )
            setBooks(filterByGenre)
        } else {
            setBooks(filterBooksAvailable)
            return filterBooksAvailable
        }
    }

    function handleFilterBooksGenre(genre) {
        setGenreSelected(genre)
    }

    return {
        books,
        genres,
        genreSelected,
        handleAddAllBooks,
        handleFilterBooks,
        handleFilterBooksGenre,
        handleGetAllGenres,
    }
}
