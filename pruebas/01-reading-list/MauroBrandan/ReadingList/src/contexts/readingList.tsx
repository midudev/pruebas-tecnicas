import { useReducer, createContext, ReactNode } from 'react'
import { readingListReducer, initialState, ACTION_TYPES } from '../reducers/readingList'
import type { BookType, ReadingListContextType } from '../types'

export const ReadingListContext = createContext<ReadingListContextType | object>({})

function useReadingListReducer () {
  const [state, dispatch] = useReducer(readingListReducer, initialState)

  const addToList = (book: BookType) => dispatch({
    type: ACTION_TYPES.ADD_TO_LIST,
    payload: book
  })

  const removeFromList = (book: BookType) => dispatch({
    type: ACTION_TYPES.REMOVE_FROM_LIST,
    payload: book
  })

  const clearList = () => dispatch({ type: ACTION_TYPES.CLEAR_LIST })

  return { state, addToList, removeFromList, clearList }
}

export function ReadingListProvider ({ children }: {children: ReactNode}) {
  const { state, addToList, removeFromList, clearList } = useReadingListReducer()

  const isInList = (book: BookType) => {
    return state.some(item => item.ISBN === book.ISBN)
  }

  return (
    <ReadingListContext.Provider value={{
      state,
      addToList,
      removeFromList,
      clearList,
      isInList
    }}
    >
      {children}
    </ReadingListContext.Provider>
  )
}
