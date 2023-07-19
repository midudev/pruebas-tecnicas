import { ReactNode, useCallback, useEffect, useReducer } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { readListReducer } from "../reducers/readListReducer";
import { IBook } from "../types";
import { ReadListContext } from "./ReadListContext";

const initialState: IBook[] = []

export function ReadListProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(readListReducer, initialState);
  const [readList, setStoredValue] = useLocalStorage('read-list', initialState)

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

  const values = {
    readList: state,
    addToReadList,
    removeFromReadList,
    setReadList,
  }

  return (
    <ReadListContext.Provider value={values}>
      {children}
    </ReadListContext.Provider>
  )
}