import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { Books } from '../../types/book'




const initialState: Books[] = []

export const bookSlice = createSlice({
    name: 'books',
    initialState: {
        books: initialState
    },
    reducers:{
        getBooks: (state, action: PayloadAction<Books>) => {
           const existingBook = state.books.find(item => item.book.title === action.payload.book.title)
           if(!existingBook){
            state.books.push(action.payload)
           }
        }
    }

})


export const {getBooks} = bookSlice.actions
export default bookSlice.reducer





