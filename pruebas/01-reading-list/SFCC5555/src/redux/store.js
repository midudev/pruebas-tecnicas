// Import configureStore from Redux Toolkit to create the Redux store
import { configureStore } from "@reduxjs/toolkit"

// Import the individual reducer functions from their respective files
import libraryReducer from './librarySlice.js'
import darkModeReducer from './darkModeSlice.js'
import genreReducer from './genreSlice.js'
import pagesReducer from './pagesSlice.js'
import inputValueReducer from './inputValueSlice.js'

// Create the Redux store using configureStore
export const store = configureStore({
    // Combine the individual reducers into a root reducer using the 'reducer' property
    reducer: {
        library: libraryReducer,
        darkMode: darkModeReducer,
        genre: genreReducer,
        pages: pagesReducer,
        inputValue: inputValueReducer
    }
});