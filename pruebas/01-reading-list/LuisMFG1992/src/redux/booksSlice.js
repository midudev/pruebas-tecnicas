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
  },
  reducers: {
    handleDropDownFilter: (state, action) => {
      state.selectedFilters.push(action.payload)
    },
    handleSelectedGenres: (state, action) => {
      state.genres = state.genres.filter((genero) => genero !== action.payload)
    },
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

// Todo: Create the actions needed
export const { handleDropDownFilter, handleSelectedGenres } = booksSlice.actions

export default booksSlice.reducer
