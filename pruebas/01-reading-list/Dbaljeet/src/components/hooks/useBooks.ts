import { useContext } from 'react'
import ContextBook, { IContextBook } from '../../context/BookContext'
import { IBook, IBookCard } from '../../interfaces/IBooks'

interface PropsMove {
  book: IBookCard
  left: boolean
}

const useBooks = () => {
  const {
    saveBooksFav,
    deleteBook,
    deleteFavsBooks,
    saveBook,
    books,
    replaceBooks,
  } = useContext(ContextBook) as IContextBook

  const AddFav = ({ book }: IBook) => {
    saveBooksFav({ book })
    deleteBook({ book })
  }

  const deleteFav = ({ book }: IBook) => {
    console.log('entra')
    saveBook({ book })
    deleteFavsBooks({ book })
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

  return { AddFav, deleteFav, MoveBook, filterByGenre }
}
export default useBooks
