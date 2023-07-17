'use client'
import { useEffect, useState } from 'react'
import Card from '../card/Card'
const BookList = () => {
    const [books, setBooks] = useState(loadBooksSelected())

    useEffect(() => {
        console.log('Test')
        const onStorageChange = (e) => {
            setBooks(loadBooksSelected())
        }
        window.addEventListener('storage', onStorageChange)
    }, [])

    function loadBooksSelected() {
        const localStorage = window.localStorage
        const readBooks = localStorage.getItem('bookList')
        const bookList = readBooks ? JSON.parse(readBooks) : []
        return bookList
    }
    return (
        <div className="flex items-center flex-col p-2">
            <h2 className="pb-4">Lista de Lectura</h2>
            {books.map((book) => {
                const { ISBN } = book.book //TODO Review destructuring
                return (
                    <div className="pb-4" key={ISBN}>
                        <Card>{book}</Card>
                    </div>
                )
            })}
        </div>
    )
}

export default BookList
