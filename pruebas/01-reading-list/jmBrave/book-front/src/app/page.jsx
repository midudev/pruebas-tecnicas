'use client'
const _ = require('lodash')
import { useEffect, useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import BookList from '../components/bookList/BookList'
import initialBooksList from '../mocks/books.js'

export default function Home() {
    const { library } = initialBooksList
    const [bookAvailables, setBookAvailables] = useState(filterBooksAvailable())
    const [booksSeleted, setBooksSeleted] = useState(loadBooksSelected())

    useEffect(() => {
        const onStorageChange = (e) => {
            setBooksSeleted(loadBooksSelected())
        }
        window.addEventListener('storage', onStorageChange)
        return () => window.removeEventListener('storage', onStorageChange)
    }, [])

    function loadBooksSelected() {
        const localStorage = window.localStorage
        const readBooks = localStorage.getItem('bookList')
        const bookList = readBooks ? JSON.parse(readBooks) : []
        return bookList
    }

    function filterBooksAvailable() {
        const booksSelected = loadBooksSelected()
        const ISBN_SELECTED = booksSelected.map((book) => book.book.ISBN)
        const filterBooksAvailable = library.filter(
            (bookAvailable) => !ISBN_SELECTED.includes(bookAvailable.book.ISBN)
        )
        return filterBooksAvailable
    }

    function setBook(book) {
        const localStorage = window.localStorage
        const booksCurrentlist = localStorage.getItem('bookList')

        if (!booksCurrentlist) {
            localStorage.setItem('bookList', JSON.stringify([book]))
        }
        if (booksCurrentlist) {
            const currentBooks = JSON.parse(booksCurrentlist)
            localStorage.setItem(
                'bookList',
                JSON.stringify([...currentBooks, book])
            )
        }
        window.dispatchEvent(new Event('storage'))
    }

    function deleteBook(book) {
        const localStorage = window.localStorage
        const readBooks = localStorage.getItem('bookList')
        const bookList = readBooks ? JSON.parse(readBooks) : []

        const filtered = bookList.filter(
            (bookSelected) => bookSelected.book.ISBN !== book.book.ISBN
        )

        localStorage.setItem('bookList', JSON.stringify(filtered))
        window.dispatchEvent(new Event('storage'))
    }

    function handleOnDragEnd(result) {
        const { source, destination } = result
        if (!destination) return

        const sourceList =
            source.droppableId === 'list1' ? bookAvailables : booksSeleted
        const destList =
            destination.droppableId === 'list2' ? booksSeleted : bookAvailables

        if (source.droppableId === destination.droppableId) {
            const reorderedList = reorder(
                sourceList,
                source.index,
                destination.index
            )

            if (source.droppableId === 'list1') {
                setBookAvailables(reorderedList)
            } else {
                setBooksSeleted(reorderedList)
            }
        } else {
            const [removed] = sourceList.splice(source.index, 1)

            if (destination.droppableId === 'list2') setBook(removed)
            if (destination.droppableId === 'list1') deleteBook(removed)

            setBookAvailables(filterBooksAvailable())
            setBooksSeleted(loadBooksSelected())
        }
    }

    function reorder(list, startIndex, endIndex) {
        const newList = Array.from(list)
        const [removed] = newList.splice(startIndex, 1)
        newList.splice(endIndex, 0, removed)
        return newList
    }
    return (
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <main className="flex min-h-screen justify-evenly flex-wrap pt-20">
                <BookList
                    title={'Libros'}
                    books={bookAvailables}
                    droppableId="list1"
                />
                <BookList
                    title={'Lista de Lectura'}
                    books={booksSeleted}
                    droppableId="list2"
                />
            </main>
        </DragDropContext>
    )
}
