import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { library } from '../../books.json'
import { ILibrary, IISBNProp } from '../interfaces/interfacesComponents'

interface IInitialStateLibrary extends ILibrary {
  readingList: string[],
  countBooks: ICountBooks
}

export interface ICountBooks {
  available: number,
  readingList: number,
  filterForGenre: number
}

interface ICountBooksFiltered {
  countBookFiltered: number
}

const DEFAULT_STATE = {
  library,
  readingList: [],
  countBooks: {
    available: library.length,
    readingList: 0,
    filterForGenre: 0
  }
}

const initialState: IInitialStateLibrary = (() => {
  const dataStore = localStorage.getItem('__REDUX__STORE__library')

  return dataStore ? {
    library,
    countBooks: JSON.parse(dataStore).countBooks,
    readingList: JSON.parse(dataStore).readingList
  } : DEFAULT_STATE
})()

export const libraryReducer = createSlice({
  name: 'library',
  initialState,
  reducers: {
    addToReadingList: (state, action: PayloadAction<IISBNProp>) => {
      const { ISBN } = action.payload

      // Agrega el ISBN del libro si no existe en la lista de lectura
      if (!state.readingList.includes(ISBN)) {
        state.readingList.push(ISBN)
        // Aumenta en 1 la cantidad de libros
        // en la lista de lectura
        state.countBooks.readingList += 1
      }
    },

    removeFromReadingList: (state, action: PayloadAction<IISBNProp>) => {
      const { ISBN } = action.payload

      const newReadingList = state.readingList.filter(
        ISBNOfBook => ISBNOfBook !== ISBN
      )

      // Si no se eliminó ningún elemento de la lista
      // no se disminuye en 1 la cantidad de libros
      // de la lista de lectura
      if (newReadingList.length !== state.readingList.length) {
        state.countBooks.readingList -= 1
      }

      state.readingList = newReadingList
    },

    setCountBooksFilters: (state, action: PayloadAction<ICountBooksFiltered>) => {
      const { countBookFiltered } = action.payload

      state.countBooks.filterForGenre = countBookFiltered
    }
  }
})

export const {
  addToReadingList,
  removeFromReadingList,
  setCountBooksFilters
} = libraryReducer.actions

export default libraryReducer.reducer
