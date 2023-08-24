import { createSlice } from '@reduxjs/toolkit'
import { Books } from '../../types/book'
import libraryBoooks from '../../../../../books.json'




const initialState: Books[] = (()=>{
    const data = localStorage.getItem('books')
    if(data){
        return JSON.parse(data).books.books
    }
    return libraryBoooks.library
})()



export const bookSlice = createSlice({
    name: 'books',
    initialState: {
        books: initialState,
        filterByGenre: '',
        fitlerByPages: 0
    },
    reducers:{
        addToListAgain:(state, action) => {
            state.books.push(action.payload)
        },

        filterByGenre:(state, action)=>{
            state.filterByGenre = action.payload.toLowerCase()
           
        },
        filterByPages:(state, action)=> {
            state.fitlerByPages = action.payload
        },

        bookInList:(state, action) => {
            state.books = state.books.filter(item => item.book.title !== action.payload)
        }
    }

})


export const {filterByGenre,filterByPages, bookInList, addToListAgain} = bookSlice.actions
export default bookSlice.reducer





