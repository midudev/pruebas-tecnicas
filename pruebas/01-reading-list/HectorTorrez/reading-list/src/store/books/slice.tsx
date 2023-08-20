import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { Books } from '../../types/book'




const initialState: Books[] = []

export const bookSlice = createSlice({
    name: 'books',
    initialState: {
        books: initialState,
        filterByGenre: '',
    },
    reducers:{
        getBooks: (state, action: PayloadAction<Books>) => {
           const existingBook = state.books.find(item => item.book.title === action.payload.book.title)
           if(!existingBook){
            state.books.push(action.payload)
           }
        },

        filterByGenre:(state, action)=>{
            state.filterByGenre = action.payload.toLowerCase()
           
        }
    }

})


export const {getBooks,filterByGenre} = bookSlice.actions
export default bookSlice.reducer





