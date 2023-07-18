import { ReactNode, useCallback, useEffect, useReducer } from "react";
import { library } from "../api/books.json";
import useLocalStorage from "../hooks/useLocalStorage";
import { appReducer } from "../reducers/appReducer";
import { AppContextInitialStateType, IBook } from "../types";
import { AppContext } from "./AppContext";

const initialState: AppContextInitialStateType = {
  books: [],
  filteredBooks: [],
  readList: [],
}

const API_DATA = library.map(item => item.book)

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const [readList, setStoredValue] = useLocalStorage('read-list', initialState.readList)

  useEffect(() => {
    const books = API_DATA
    const payload = books.filter(book => !readList.some(fav => fav.title === book.title))
    dispatch({ type: 'SET_BOOKS', payload });
  }, [readList])

  useEffect(() => {
    dispatch({ type: 'SET_READ_LIST', payload: readList });
  }, [readList])

  const setReadList = useCallback((payload: IBook[]) => {
    setStoredValue(payload);
    dispatch({ type: 'SET_READ_LIST', payload });
  }, [setStoredValue]);

  const addToReadList = useCallback((book: IBook) => {
    setStoredValue([...readList, book]);
    dispatch({ type: 'ADD_TO_READ_LIST', payload: book });
  }, [readList, setStoredValue]);

  const removeFromReadList = useCallback((book: IBook) => {
    setStoredValue(readList.filter((item) => item.title !== book.title));
    dispatch({ type: 'REMOVE_FROM_READ_LIST', payload: book });
  }, [readList, setStoredValue]);

  const setFilteredBooks = useCallback((books: IBook[]) => {
    dispatch({ type: 'SET_FILTERED_BOOKS', payload: books })
  }, [])

  const values = {
    books: state.books,
    readList: state.readList,
    addToReadList,
    removeFromReadList,
    setReadList,
    filteredBooks: state.filteredBooks,
    setFilteredBooks,
  }

  return (
    <AppContext.Provider value={values}>
      {children}
    </AppContext.Provider>
  )
}