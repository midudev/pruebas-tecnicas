'use client'
import { useEffect, useState } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'

import BookList from '../components/bookList/BookList'
import initialBooksList from '../mocks/books.js'
import { LIST_NAME } from '../constant/constants'
import { moveAndReorder, reorder, isSameList } from '../utils/drag-and-drop'

export default function Home() {
    const { library } = initialBooksList
    const { AVAILABLE_BOOKS, BOOKS_SELECTED } = LIST_NAME
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

    function addBook(book) {
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

    function setBooks(books) {
        console.log(books)
        const localStorage = window.localStorage
        localStorage.setItem('bookList', JSON.stringify(books))
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
            source.droppableId === AVAILABLE_BOOKS
                ? bookAvailables
                : booksSeleted
        const destList =
            destination.droppableId === BOOKS_SELECTED
                ? booksSeleted
                : bookAvailables

        if (!isSameList(source.droppableId, destination.droppableId)) {
            const [book] = sourceList.splice(source.index, 1)

            if (destination.droppableId === AVAILABLE_BOOKS) {
                deleteBook(book)
                setBookAvailables(
                    moveAndReorder(book, destList, destination.index)
                )
                setBooksSeleted(loadBooksSelected())
            }

            if (destination.droppableId === BOOKS_SELECTED) {
                addBook(book)
                setBookAvailables(filterBooksAvailable())
                setBooksSeleted(
                    moveAndReorder(book, destList, destination.index)
                )
            }
        } else {
            const reorderListBook = reorder(
                sourceList,
                source.index,
                destination.index
            )
            if (source.droppableId === AVAILABLE_BOOKS) {
                setBookAvailables(reorderListBook)
            } else {
                setBooksSeleted(reorderListBook)
                setBooks(reorderListBook)
            }
        }
    }

    return (
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <main className="flex min-h-screen justify-evenly flex-wrap pt-20">
                <BookList
                    title={'Libros'}
                    books={bookAvailables}
                    droppableId={AVAILABLE_BOOKS}
                />
                <BookList
                    title={'Lista de Lectura'}
                    books={booksSeleted}
                    droppableId={BOOKS_SELECTED}
                />
            </main>
        </DragDropContext>
    )
}
