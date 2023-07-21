'use client'
import { DragDropContext } from 'react-beautiful-dnd'
import { useEffect } from 'react'
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

    function handleOnDragEnd(result) {
        const { source, destination } = result
        if (!destination) return

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

    return (
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <main className="flex justify-evenly flex-wrap pt-20">
                <BookList
                    title={'Libros'}
                    books={booksAvailable}
                    droppableId={AVAILABLE_BOOKS}
                />
                <BookList
                    title={'Lista de Lectura'}
                    books={booksSelected}
                    droppableId={BOOKS_SELECTED}
                />
            </main>
        </DragDropContext>
    )
}
