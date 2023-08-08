import {createContext} from 'react'
import { useBooks } from '../hook/useBooks'

export const BookContext = createContext({})

type Props = {
  children: JSX.Element | JSX.Element[]
}

function BookProvider({children}:Props) {

  const {
    booksList,
    bookPendingList,
    numberBookPending,
    listGenre,
    selectGenre,
    search,

    addBookPending,
    isBookPending,
    removeBookPending,
    funOnChangeGenre,
    funOnChangeSearch,
    getBookId,
  } = useBooks()

  return (
    <BookContext.Provider value={{
      booksList,
      bookPendingList,
      numberBookPending,
      listGenre,
      selectGenre,
      search,

      addBookPending,
      isBookPending,
      removeBookPending,
      funOnChangeGenre,
      funOnChangeSearch,
      getBookId
    }}>
      {children}
    </BookContext.Provider>
  )
}

export default BookProvider