import { ReactNode, useCallback, useEffect, useReducer } from "react";
import { library } from "../api/books.json";
import useLocalStorage from "../hooks/useLocalStorage";
import { filteredBooksReducer } from "../reducers/filteredBooksReducer";
import { IBook } from "../types";
import { FilteredBooksContext } from "./FilteredBooksContext";

const initialState: IBook[] = []
const API_DATA = library.map(item => item.book)

export function FilteredBooksProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(filteredBooksReducer, initialState);
  const [readList] = useLocalStorage('read-list', initialState)

  useEffect(() => {
    const payload = API_DATA.filter(book => !readList.some(b => b.ISBN === book.ISBN))
    dispatch({ type: 'SET_FILTERED_BOOKS', payload })
  }, [readList])

  const setFilteredBooks = useCallback((books: IBook[]) => {
    dispatch({ type: 'SET_FILTERED_BOOKS', payload: books })
  }, [])

  return (
    <FilteredBooksContext.Provider value={{
      books: API_DATA,
      filteredBooks: state,
      setFilteredBooks
    }
    }>
      {children}
    </FilteredBooksContext.Provider>
  )
}