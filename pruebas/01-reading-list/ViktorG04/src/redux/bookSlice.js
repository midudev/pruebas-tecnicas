import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriteBooks: [],
  inLibrary: 0,
  available: 0,
  inList: 0,
};

export const bookSlice = createSlice({
  name: "books",
  initialState,

  reducers: {
    hasInLibrary: (state, action) => {
      state.inLibrary = action.payload;
      state.available = action.payload;
    },
    addBook: (state, action) => {
      state.favoriteBooks = [...state.favoriteBooks, action.payload];
      state.inList = state.favoriteBooks.length;
      state.available = state.inLibrary - state.inList;
    },
    deleteBook: (state, action) => {
      state.favoriteBooks = state.favoriteBooks.filter(
        (book) => book.ISBN !== action.payload
      );
      state.inList = state.favoriteBooks.length;
      state.available = state.inLibrary - state.inList;
    },
  },
});

export const { hasInLibrary, addBook, deleteBook } = bookSlice.actions;
export default bookSlice.reducer;
