import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { type Library } from '../../interfaces/interfaces'
import { getBooks } from '../../services/books'

export const fetchGetBooks = createAsyncThunk(
  'books/fetchGetBooks',
  async () => {
    const myBooks = await getBooks
    return myBooks
  })

interface booksSliceInterface {
  data: Library[]
  loanding: null | boolean
  error: null | boolean
}

//! AÑADIR OPERSISTENCIA AL INITIALS STATE
const initialState = (): booksSliceInterface => {
  const persistantBooks = localStorage.getItem('__general__books__')
  if (persistantBooks !== null) {
    return {
      data: JSON.parse(persistantBooks),
      loanding: null,
      error: null
    }
  }

  return {
    data: [
      {
        book: {
          ISBN: '-',
          title: '-',
          pages: 0,
          genre: '-',
          cover: '-',
          synopsis: '-',
          year: 0,
          author: {
            name: '-',
            otherBooks: []
          }

        }
      }
    ],
    loanding: null,
    error: null
  }
}

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGetBooks.pending, (state) => {
      state.loanding = true
    })

    builder.addCase(fetchGetBooks.fulfilled, (state, action) => {
      state.data = action.payload
      state.loanding = false
    }) 

    builder.addCase(fetchGetBooks.rejected, (state) => {
      console.log('ocurrio un error men')
      state.error = true
    })
  }
})

export default booksSlice.reducer
