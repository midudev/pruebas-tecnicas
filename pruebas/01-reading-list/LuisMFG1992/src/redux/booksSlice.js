import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchBooks = createAsyncThunk('books/fetch', async () => {
  const response = await fetch('../../data/books.json')
  const data = await response.json()
  return data.library
})

// To create a new book in the state

export const saveBook = createAsyncThunk('book/save', async (book) => {
  const response = await fetch('../../data/books.json', {
    method: 'POST',
    headers: {
      'Context-Type': 'application/json',
    },
    body: {
      book,
    },
  })
  const data = await response.json()
  return data
})

export const booksSlice = createSlice({
  name: 'books',
  initialState: {
    booksList: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.booksList = action.payload
    })
    builder.addCase(saveBook.fulfilled, (state, action) => {
      state.books.push(action.payload)
    })
  },
})

// Todo: Create the actions needed
export const { getBooksList } = booksSlice.actions

export default booksSlice.reducer
