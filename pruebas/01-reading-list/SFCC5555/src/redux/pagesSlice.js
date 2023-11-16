import { createSlice } from "@reduxjs/toolkit"
import books from '../books.json'

// Initialize the initial state for the 'pages' slice based on the maximum number of pages in the 'books' data
const initialState = Math.max(...books.library.map(i => i.book.pages));

export const pagesSlice = createSlice({
    name: 'pages',
    initialState,
    reducers: {
        changePages: (state, action) => {
            // Update the 'pages' state to the value (max number of pages to filter the books) provided in the action's payload 
            state = action.payload;
            return state;
        }
    }
});

export const { changePages } = pagesSlice.actions;
export default pagesSlice.reducer;