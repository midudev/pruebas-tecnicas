import { ReactNode, useEffect, useReducer } from "react";
import { AppContextInitialStateType, IBook } from "../types";
import { AppContext } from "./AppContext";
import { AppReducer } from "./AppReducer";

const initialState: AppContextInitialStateType = {
  books: [],
  favoriteBooks: [],
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    dispatch({ type: 'SET_BOOKS' });
  }, [])

  function addToFavorites(book: IBook) {
    dispatch({ type: 'ADD_TO_FAVORITES', payload: book });
  }

  function removeFromFavorites(book: IBook) {
    dispatch({ type: 'REMOVE_FROM_FAVORITES', payload: book });
  }

  return (
    <AppContext.Provider value={{
      books: state.books,
      favoriteBooks: state.favoriteBooks,
      addToFavorites,
      removeFromFavorites
    }}>
      {children}
    </AppContext.Provider>
  )
}