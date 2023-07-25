import { createContext, useReducer, useEffect } from 'react'
import { listOfLectureReducer, listOfLectureInitialState } from '../reducers/listReducer'

// Create the List Context
export const ListOfLecture = createContext()

function useListOfLectureReducer () {
  const [state, dispatch] = useReducer(listOfLectureReducer, listOfLectureInitialState)

  const addToLectureList = (book) => {
    dispatch({
      type: 'ADD_TO_LECTURE_LIST', payload: book
    })
  }

  const removeFromLectureList = (book) => {
    dispatch({
      type: 'REMOVE_FROM_LECTURE_LIST', payload: book
    })
  }

  const clearLectureList = () => {
    dispatch({ type: 'CLEAR_LECTURE_LIST' })
  }
  const setInitialState = () => {
    dispatch({ type: 'SET_INITIAL_STATE', payload: JSON.parse(window.localStorage.getItem('list')) })
  }

  const setNewListSorted = (newList) => {
    dispatch({ type: 'SET_NEW_LIST_SORTED', payload: newList })
  }

  return { state, addToLectureList, removeFromLectureList, clearLectureList, setInitialState, setNewListSorted }
}

// Provider
export function ListOfLectureProvider ({ children }) {
  const { state, addToLectureList, removeFromLectureList, clearLectureList, setInitialState, setNewListSorted } = useListOfLectureReducer()

  // Update the localStorage when the state changes
  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === 'list') {
        const storedState = JSON.parse(event.newValue)
        // Update the state only if the stored state is different from the current state
        setInitialState(storedState)
      }
    }

    // Listen for changes to the current state in localStorage
    window.addEventListener('storage', handleStorageChange)

    // Update the localStorage with the current state
    return () => {
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [])

  return (
    <ListOfLecture.Provider value={{ list: state, addToLectureList, removeFromLectureList, clearLectureList, setInitialState, setNewListSorted }}>
      {children}
    </ListOfLecture.Provider>

  )
}
