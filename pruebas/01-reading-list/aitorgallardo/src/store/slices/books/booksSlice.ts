import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { type Book as BookTypes } from '../../../types';

interface BooksState{
  bookList:BookTypes[],
  readingList:BookTypes[]
}

const initialState:BooksState = {
    bookList: [],
    readingList: [],
  };


  export const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
      setBookList: (state, action) => {
        state.bookList = action.payload;
      },
      setReadingList: (state, action) => {
        state.readingList = action.payload;
      },
    },
  });


  export const {
    setBookList,
    setReadingList,
  } = booksSlice.actions;