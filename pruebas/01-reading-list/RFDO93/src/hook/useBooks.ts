import { useEffect, useMemo, useReducer, useRef, useState } from "react";
import { BookInterface, BookPending, FilterBook } from "../types";
import { getBookList } from "../api/apiBooks";
import { BookReducer, initialStateBook } from "../reducer/BookReducer";
import { typeReducerBook } from "../constant/typeReducerBook";
import { compareStringsWithoutSpecials } from "../utils/valueString";

const useBooks = () => {

  const [filter, setFilter] = useState<FilterBook>({
    genre: '',
    search: '',
  })

  const [bookState, dispatch] = useReducer(BookReducer,initialStateBook)
  const { booksList, loading, error, bookPendingList } = bookState
  const listGenre = useRef([] as string[])

  useEffect(() => {
    getBookPendingList()
    getBooksForApi()

    window.addEventListener('storage',funEventStorage)

    return () => {
      window.removeEventListener('storage',funEventStorage)
    }
  },[])

  useEffect(() => {
    if(bookPendingList.length > 0) {
      localStorage.setItem('bookPendingList', JSON.stringify(bookPendingList))
    } else {
      localStorage.setItem('bookPendingList', JSON.stringify([]))
    }
  },[bookPendingList])

  const getBookPendingList = () => {
    const bookPendingList = localStorage.getItem('bookPendingList')
    if(bookPendingList) {
      dispatch({type: typeReducerBook.LIST_BOOK_PENDING, payload: JSON.parse(bookPendingList)})
    }
  }

  const getBooksForApi = async () => {
    dispatch({type: typeReducerBook.LOADING_BOOK, payload: booksList})
    try {
      const booksList = await getBookList() as BookInterface[]

      const setGenre = new Set<string>()

      booksList.forEach((book) => {
        setGenre.add(book.genre)
      })
      
      listGenre.current = setGenre.size > 0 ? Array.from(setGenre) : []

      dispatch({type: typeReducerBook.LIST_BOOK, payload: booksList})
    } catch (error) {
      dispatch({type: typeReducerBook.ERROR_BOOK, payload: booksList})
    }
  }

  const funEventStorage = (event: StorageEvent) => {
    if(event.key === 'bookPendingList') {
      getBookPendingList()
    }
  }
    
  const addBookPending = (book: BookInterface["ISBN"]) => {

    const findBook = booksList.find((bookList) => bookList.ISBN === book)

    if(!findBook) return console.log('No se ha encontrado el libro')

    const valueBookPending = bookPendingList.find((bookPending) => bookPending.ISBN === book)

    if(valueBookPending) return console.log('El libro ya esta en la lista de pendientes')

    const bookPending:BookPending = {
      ISBN: findBook.ISBN,
      title: findBook.title,
      cover: findBook.cover,
    }

    dispatch({type: typeReducerBook.ADD_BOOK_PENDING, payload: bookPending})
  }

  const isBookPending = (book: BookInterface["ISBN"]) => {
    const valueBookPending = bookPendingList.find((bookPending) => bookPending.ISBN === book)
    return valueBookPending ? true : false
  }

  const removeBookPending = (bookId: BookInterface["ISBN"]) => {
    dispatch({type: typeReducerBook.REMOVE_BOOK_PENDING, payload: bookId})
  }

  const funOnChangeGenre = (genreData:FilterBook['genre']) => {
    setFilter({
      ...filter,
      genre: genreData,
    })
  }

  const funOnChangeSearch = (searchData:FilterBook['search']) => {
    setFilter({
      ...filter,
      search: searchData,
    })
  }

  const getBookId = (idBook:BookInterface["title"]) => {
    const findBook = booksList.find((book) => {
      return book.title.replace(/\s+/g, '-').toLowerCase() === idBook
    })
    return findBook ? findBook : null
  }

  const numberBookPending = useMemo(() => bookPendingList.length, [bookPendingList])
  const { genre: selectGenre , search } = filter

  const booksListFilter = useMemo(() => {
    
    let booksListFilter = booksList

    if(selectGenre) {
      booksListFilter = booksListFilter.filter((book) => book.genre === selectGenre)
    }

    if(search) {
      booksListFilter = booksListFilter.filter((book) => compareStringsWithoutSpecials(book.title, search))
    }

    return booksListFilter

  },[booksList, selectGenre, search])

  return {
    booksList:booksListFilter,
    loading,
    error,
    bookPendingList,
    numberBookPending,
    listGenre:listGenre.current,
    selectGenre,
    search,

    addBookPending,
    isBookPending,
    removeBookPending,
    funOnChangeGenre,
    funOnChangeSearch,
    getBookId
  }

}

export { useBooks };