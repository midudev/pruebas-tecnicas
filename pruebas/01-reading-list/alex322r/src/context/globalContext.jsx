
import { useContext } from "react";
import { createContext } from "react";
import data from '../mooks/books.json'
import reducer from "../reducer/reducer";
import { useReducer } from "react";
import { useEffect } from "react";

const books = data.library.map(item => {
    const { book } = item
    return book
})

const initialState = JSON.parse(localStorage.getItem('state')) || {
    library: books,
    readingList: [],
    filters: {
        category: 'all',
    }
}

export const GlobalStateContext = createContext()

export const GlobalStateProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        localStorage.setItem('state', JSON.stringify(state))

    }, [state])

    useEffect(() => {
        const handleStorageChange = (event) => {
            if (event.key === 'state') {
                dispatch({ type: 'SYNC', payload: JSON.parse(event.newValue) })
            }
        }
        window.addEventListener('storage', handleStorageChange)

        return () => {
            window.removeEventListener('storage', handleStorageChange)
        }
    }, [])


    const addToReadingList = (id) => {
        dispatch({ type: 'ADD_BOOK_TO_READING_LIST', payload: id })
        dispatch({ type: 'REMOVE_BOOK_FROM_LIBRARY', payload: id })

    }

    const removefromReadingList = (id) => {
        dispatch({ type: 'ADD_BOOK_TO_LIBRARY', payload: id })
        dispatch({ type: 'REMOVE_BOOK_FROM_READING_LIST', payload: id })
    }

    const changeFilters = (filters) => {
        dispatch({ type: 'CHANGE_FILTERS', payload: filters })
    }

    return (
        <GlobalStateContext.Provider value={{ ...state, addToReadingList, removefromReadingList, changeFilters }} >
            {children}
        </GlobalStateContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(GlobalStateContext)
}

