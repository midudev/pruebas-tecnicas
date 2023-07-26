import { useContext } from 'react'
import ContextBook, { IContextBook } from '../../context/BookContext'
import { IBook, IBookCard } from '../../interfaces/IBooks'

interface PropsMove {
  book: IBookCard
  left: boolean
}

const useBooks = () => {
  const {
    saveReadingList,
    deleteBook,
    deleteReadingList,
    saveBook,
    books,
    replaceBooks,
    replaceReadingList,
  } = useContext(ContextBook) as IContextBook

  const AddFav = ({ book }: IBook) => {
    saveReadingList({ book })
    deleteBook({ book })
  }

  const deleteFav = ({ book }: IBook) => {
    console.log('entra')
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

  const filterByGenre = (genre: string) => {
    replaceBooks(
      books.filter((book) => {
        return book.book.genre === genre
      })
    )
  }

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
  }
}
export default useBooks
