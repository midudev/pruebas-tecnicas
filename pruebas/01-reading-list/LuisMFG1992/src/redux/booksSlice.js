import { createSlice } from '@reduxjs/toolkit'

export const booksSlice = createSlice({
  name: 'books',
  initialState: {
    booksList: 'booksList',
  },
  reducers: {
    // Todo: add reducer needed
    getBooksList: (state, action) => {
      state.books = action.payload
    },
  },
})

// Todo: Create the actions needed
export const { getBooksList } = booksSlice.actions

export default booksSlice.reducer
