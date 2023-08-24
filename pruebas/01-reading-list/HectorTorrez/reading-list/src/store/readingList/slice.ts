import { createSlice } from "@reduxjs/toolkit";
import {  BooksState } from "../../types/book";


const initialState: BooksState[] = (()=>{
    const books = localStorage.getItem('books') 
    if(books != null) return JSON.parse(books).reading.readingList 
    return []
})()

const quantityState = (()=>{
    const books = localStorage.getItem('books') 
    if(books != null) return JSON.parse(books).reading.quantity 
    return 0
})()

export const readingSlice = createSlice({
    name: 'reading',
    initialState:{
        readingList: initialState,
        quantity: quantityState
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