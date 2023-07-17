'use client'
import { useEffect, useState } from 'react'
import Card from '../card/Card'
import initialBooksList from '../../mocks/books.js'
const BookList = ({ title }) => {
    const { library } = initialBooksList
    const isBooksSelected = () => title !== 'Libros' //TODO Review
    const [books, setBooks] = useState(
        isBooksSelected() ? loadBooksSelected() : library
    )

    useEffect(() => {
        if (isBooksSelected()) {
            const onStorageChange = (e) => {
                setBooks(loadBooksSelected())
            }
            window.addEventListener('storage', onStorageChange)
            return () => window.removeEventListener('storage', onStorageChange)
        }
    }, [])

    function loadBooksSelected() {
        const localStorage = window.localStorage
        const readBooks = localStorage.getItem('bookList')
        const bookList = readBooks ? JSON.parse(readBooks) : []
        return bookList
    }
    return (
        <div className="flex items-center flex-col p-2">
            <h2 className="pb-4">{title}</h2>
            {books.map(({ book }) => {
                const { ISBN } = book
                return (
                    <div className="pb-4" key={ISBN}>
                        <Card book={book} isSelected={isBooksSelected} />
                    </div>
                )
            })}
        </div>
    )
}

export default BookList
