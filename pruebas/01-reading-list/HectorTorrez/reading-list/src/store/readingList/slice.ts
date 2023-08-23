import { createSlice } from "@reduxjs/toolkit";
import {  BooksState } from "../../types/book";


const initialState: BooksState[] = []

export const readingSlice = createSlice({
    name: 'reading',
    initialState:{
        readingList: initialState,
        quantity: 0
    },
    reducers:{
        addToReading: (state, action) => {
            const bookInReading = state.readingList.find((book) => book.title === action.payload.title)
            if(bookInReading == null){
                state.readingList.push({...action.payload})
                state.quantity++
            }
        },
        
        deleteToReading: (state, action) => {
            state.readingList = state.readingList.filter(book => book.title !== action.payload)
            state.quantity--
        }
    
    }
})


export const {addToReading, deleteToReading} = readingSlice.actions
export default readingSlice.reducer