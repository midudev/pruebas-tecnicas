'use client'
import { DragDropContext } from 'react-beautiful-dnd'
import { useState, useEffect } from 'react'
import BookList from '../components/bookList/BookList'
import Filter from '../components/filter/Filter'
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
    const {
        AVAILABLE_BOOKS,
        BOOKS_SELECTED,
        BOOKS_SELECTED_TITTLE,
        AVAILABLE_BOOKS_TITTLE,
    } = LIST_NAME

    const {
        books: booksAvailable,
        handleAddAllBooks: handleAddAllBooksAvailable,
        handleFilterBooks: handleFilterBooksAvailable,
        handleFilterBooksGenre: handleFilterBooksGenreAvailable,
        genres: genresAvailable,
        genreSelected,
        handleGetAllGenres,
    } = useBooks()

    const {
        books: booksSelected,
        handleAddAllBooks: handleAddAllBooksSelected,
    } = useBooks()

    const [draggingBook, setDraggingBook] = useState({
        source: {},
        isShown: false,
    })

    useEffect(() => {
        handleFilterBooksAvailable(library, getBooksCurrentlist())
        handleAddAllBooksSelected(getBooksCurrentlist())
        handleGetAllGenres(library)

        const onStorageChange = (_) => {
            handleFilterBooksAvailable(library, getBooksCurrentlist())
            //handleAddAllBooksSelected(getBooksCurrentlist())
            //handleFilterBooksGenreAvailable()
        }
        window.addEventListener('storage', onStorageChange)
        return () => window.removeEventListener('storage', onStorageChange)
    }, [genreSelected])

    function handleOnDragEnd(events) {
        const { source, destination } = events
        if (!destination) return

        setDraggingBook({ source: {}, isShown: false })

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
        if (booksSelected.length === 0)
            setDraggingBook({
                isShown: true,
                source: event.source.droppableId,
            })
    }

    const Drop = () => {
        return (
            <div className="fixed inset-x-0 top-0 flex justify-center items-center min-h-full">
                <div className="round ">
                    <div id="cta">
                        <span className="arrow primera next "></span>
                        <span className="arrow segunda next "></span>
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
            <main className="pt-20">
                <Filter
                    genres={genresAvailable}
                    handleFilterBooksGenreAvailable={
                        handleFilterBooksGenreAvailable
                    }
                />
                <div className="flex justify-evenly flex-wrap rounded-lg">
                    <BookList
                        title={AVAILABLE_BOOKS_TITTLE}
                        books={booksAvailable}
                        droppableId={AVAILABLE_BOOKS}
                        id={AVAILABLE_BOOKS}
                    />
                    {draggingBook.isShown ? ( //TODO Review behavior
                        <Drop />
                    ) : null}
                    <BookList
                        title={BOOKS_SELECTED_TITTLE}
                        books={booksSelected}
                        droppableId={BOOKS_SELECTED}
                        id={BOOKS_SELECTED}
                    />
                </div>
            </main>
        </DragDropContext>
    )
}
