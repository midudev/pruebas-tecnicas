import { createSlice, type PayloadAction } from '@reduxjs/toolkit'


interface BooksState {
    title: string
    pages: number
    genre: string
    cover: string
    synopsis: string
    year: string
    ISBN: string
    author: AuthorType
}

interface AuthorType {
    name: string
    otherBooks: string[]
}

const initialState: BooksState[] = []

export const bookSlice = createSlice({
    name: 'books',
    initialState: {
        books: initialState
    },
    reducers:{
        prueba: (state, action: PayloadAction<BooksState>) => {
            console.log(state)
            console.log(action)
        }
    }

})


export const {prueba} = bookSlice.actions
export default bookSlice.reducer





