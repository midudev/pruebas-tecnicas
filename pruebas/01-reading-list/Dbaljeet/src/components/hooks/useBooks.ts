import { useCallback, useContext } from 'react'

import { IBook, IBookCard } from '../../interfaces/IBooks'

import ContextBook, { IContextBook } from '../../context/BookContext'

interface PropsMove {
  book: IBookCard
  left: boolean
}

interface PropsMoveBookDragDrop {
  sourceIndex: number
  droppableIndex: number
  left: boolean
}

const useBooks = () => {
  const {
    saveReadingList,
    deleteBook,
    deleteReadingList,
    saveBook,
    books,
    readingList,
    replaceBooks,
    replaceReadingList,
  } = useContext(ContextBook) as IContextBook

  const AddFav = useCallback(
    ({ book }: IBook) => {
      saveReadingList({ book })
      deleteBook({ book })
    },
    [deleteBook, saveReadingList]
  )

  const deleteFav = ({ book }: IBook) => {
    saveBook({ book })
    deleteReadingList({ book })
  }

  const MoveBook = ({ book, left }: PropsMove) => {
    if (!left) {
      deleteFav({ book })
    } else {
      AddFav({ book })
    }
  }

  const MoveBookDragDrop = ({
    sourceIndex,
    droppableIndex,
    left,
  }: PropsMoveBookDragDrop) => {
    const booksAux = [...books]
    const readingListAux = [...readingList]
    if (left) {
      const [deleted] = booksAux.splice(sourceIndex, 1)
      readingListAux.splice(droppableIndex, 0, deleted)
      replaceBooks(booksAux)
      replaceReadingList(readingListAux)
    } else {
      const [deleted] = readingListAux.splice(sourceIndex, 1)
      booksAux.splice(droppableIndex, 0, deleted)
      replaceReadingList(readingListAux)
      replaceBooks(booksAux)
    }
  }

  const filterByGenre = useCallback(
    (genre: string) => {
      replaceBooks(
        books.filter((book) => {
          return book.book.genre === genre
        })
      )
    },
    [books, replaceBooks]
  )

  const reorderBooks = (
    booksAux: IBook[],
    startIndex: number,
    endIndex: number
  ) => {
    const result = Array.from(booksAux)
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)
    replaceBooks(result)
  }

  const reorderReading = (
    readingList: IBook[],
    startIndex: number,
    endIndex: number
  ) => {
    const result = Array.from(readingList)
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)
    replaceReadingList(result)
  }

  return {
    AddFav,
    deleteFav,
    MoveBook,
    filterByGenre,
    reorderBooks,
    reorderReading,
    MoveBookDragDrop,
  }
}
export default useBooks
