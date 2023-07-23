import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchBooks = createAsyncThunk('books/fetch', async () => {
  const response = await fetch('../../data/books.json')
  const data = await response.json()
  return data.library
})

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
    genres: [],
    selectedFilters: [],
    readingList: [],
  },

  reducers: {
    addDropDownFilter: (state, action) => {
      state.selectedFilters.push(action.payload)
      state.genres = state.genres.filter((genero) => genero !== action.payload)
    },
    removeDropDownFilter: (state, action) => {
      state.genres.push(action.payload)
      state.selectedFilters = state.selectedFilters.filter(
        (genero) => genero !== action.payload
      )
    },
    addBookToReadingList: (state, action) => {
      const alreadyInTheList = state.readingList.some(
        (element) => element.book.ISBN === action.payload.book.ISBN
      )
      if (!alreadyInTheList) state.readingList.push(action.payload)
    },
    // removeBookFromReadingList: (state, action) => {},
  },

  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.booksList = action.payload

      const setGenre = new Set(
        state.booksList.map((element) => element.book.genre)
      )
      const filterGenre = [...setGenre]
      state.genres = filterGenre
    })
    builder.addCase(saveBook.fulfilled, (state, action) => {
      state.books.push(action.payload)
    })
  },
})

export const { addDropDownFilter, removeDropDownFilter, addBookToReadingList } =
  booksSlice.actions

export default booksSlice.reducer
