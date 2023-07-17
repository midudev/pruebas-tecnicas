import { ReactNode, useEffect, useReducer } from "react";
import { library } from "../api/books.json";
import useLocalStorage from "../hooks/useLocalStorage";
import { appReducer } from "../reducers/appReducer";
import { AppContextInitialStateType, IBook } from "../types";
import { AppContext } from "./AppContext";

const initialState: AppContextInitialStateType = {
  books: [],
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

  function addToReadList(book: IBook) {
    setStoredValue([...readList, book]);
    dispatch({ type: 'ADD_TO_READ_LIST', payload: book });
  }

  function removeFromReadList(book: IBook) {
    setStoredValue(readList.filter(item => item.title !== book.title));
    dispatch({ type: 'REMOVE_FROM_READ_LIST', payload: book });
  }

  function getBookDetail(isbn: string) {
    return API_DATA.find(book => book.ISBN === isbn) as IBook;
  }

  return (
    <AppContext.Provider value={{
      books: state.books,
      readList: state.readList,
      addToReadList,
      removeFromReadList,
      getBookDetail
    }}>
      {children}
    </AppContext.Provider>
  )
}