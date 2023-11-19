import React, { useState } from 'react'
import { library } from '../../books.json'
export const BooksContext = React.createContext()

const BooksProvider = ({ children }) => {
    const [books, setBooks] = useState(library)
    // () => {
    //     const storedData = localStorage.getItem('allBooks')
    //     return storedData ? JSON.parse(storedData) : library
    // }
    const [cartBooks, setCartBooks] = useState([])
    // () => {
    //     const storedData = localStorage.getItem('cartBooks')
    //     return storedData ? JSON.parse(storedData) : []
    // }
    const handleBooks = (infoBook) => {
        setCartBooks([...cartBooks, infoBook])
        setBooks(books.filter(book => book.book.ISBN !== infoBook.book.ISBN))
    }
    const handleRemoveBooks = (bookToRemove) => {
        setBooks([...books, bookToRemove])
        setCartBooks(cartBooks.filter(book => book.book.ISBN !== bookToRemove.book.ISBN))
    }
    return (
        <BooksContext.Provider value={{ books, cartBooks, handleBooks, handleRemoveBooks, setCartBooks, setBooks }}>
            {children}
        </BooksContext.Provider>
    )
}
export default BooksProvider
