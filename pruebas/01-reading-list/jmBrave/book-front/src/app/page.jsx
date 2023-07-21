'use client'
import { DragDropContext } from 'react-beautiful-dnd'
import { useState, useEffect } from 'react'
import BookList from '../components/bookList/BookList'
import initialBooksList from '../mocks/books.js'
import { LIST_NAME } from '../constant/constants'
import { moveAndReorder, reorder, isSameList } from '../utils/drag-and-drop'
import {
    addBook,
    setBooks,
    deleteBook,
    getBooksCurrentlist,
} from '../utils/localstorage'

import useBooks from '../hooks/useBooks'

export default function Home() {
    const { library } = initialBooksList
    const { AVAILABLE_BOOKS, BOOKS_SELECTED } = LIST_NAME

    const {
        books: booksAvailable,
        handleAddAllBooks: handleAddAllBooksAvailable,
        handleFilterBooks: handleFilterBooksAvailable,
    } = useBooks()
    const {
        books: booksSelected,
        handleAddAllBooks: handleAddAllBooksSelected,
    } = useBooks()

    const [draggingBook, setDraggingBook] = useState({
        isDraggingBook: false,
        source: {},
    })

    useEffect(() => {
        handleFilterBooksAvailable(library, getBooksCurrentlist())
        handleAddAllBooksSelected(getBooksCurrentlist())

        const onStorageChange = (e) => {
            handleFilterBooksAvailable(library, getBooksCurrentlist())
            handleAddAllBooksSelected(getBooksCurrentlist())
        }
        window.addEventListener('storage', onStorageChange)
        return () => window.removeEventListener('storage', onStorageChange)
    }, [])

    function handleOnDragEnd(events) {
        const { source, destination } = events
        if (!destination) return

        setDraggingBook({ isDraggingBook: false, source: {} })

        const sourceList =
            source.droppableId === AVAILABLE_BOOKS
                ? booksAvailable
                : booksSelected
        const destList =
            destination.droppableId === BOOKS_SELECTED
                ? booksSelected
                : booksAvailable

        if (!isSameList(source.droppableId, destination.droppableId)) {
            const [book] = sourceList.splice(source.index, 1)

            if (destination.droppableId === AVAILABLE_BOOKS) {
                deleteBook(book)
                handleAddAllBooksAvailable(
                    moveAndReorder(book, destList, destination.index)
                )
                handleAddAllBooksSelected(getBooksCurrentlist())
            }

            if (destination.droppableId === BOOKS_SELECTED) {
                addBook(book)
                handleFilterBooksAvailable(library, getBooksCurrentlist())
                handleAddAllBooksSelected(
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
                handleAddAllBooksAvailable(reorderListBook)
            } else {
                setBooks(reorderListBook)
                handleAddAllBooksSelected(reorderListBook)
            }
        }
    }

    function handleOnDragStart(event) {
        setDraggingBook({
            isDraggingBook: true,
            source: event.source.droppableId,
        })
    }

    const Drop = () => {
        return (
            <div class="fixed inset-x-0 top-0 flex justify-center items-center min-h-full">
                <div class="round ">
                    <div id="cta">
                        <span class="arrow primera next "></span>
                        <span class="arrow segunda next "></span>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <DragDropContext
            onDragEnd={handleOnDragEnd}
            onDragStart={handleOnDragStart}
        >
            <main className="flex justify-evenly flex-wrap pt-20">
                <BookList
                    title={'Libros'}
                    books={booksAvailable}
                    droppableId={AVAILABLE_BOOKS}
                />
                {draggingBook.isDraggingBook ? <Drop /> : null}
                <BookList
                    title={'Lista de Lectura'}
                    books={booksSelected}
                    droppableId={BOOKS_SELECTED}
                />
            </main>
        </DragDropContext>
    )
}
