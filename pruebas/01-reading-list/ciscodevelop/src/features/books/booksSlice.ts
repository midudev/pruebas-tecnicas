import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import dummyBooks from "../../../../books.json";
import { Book, Root } from "../../models/booksModel";
// Define a type for the slice state
interface bookState {
  booksList: Root;
  wishList: Book[];
}

// Define the initial state using that type
const initialState: bookState = {
  booksList: dummyBooks,
  wishList: [],
};

export const bookSlice = createSlice({
  name: "book",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addBookWish: (state, action: PayloadAction<Book>) => {
      const bookFind = state.wishList.find(
        (book) => book.ISBN === action.payload.ISBN
      );
      !bookFind
        ? state.wishList.push(action.payload)
        : alert("ya esta en la lista");
    },
    removeBookWish: (state, action: PayloadAction<Book>) => {
      if (window.confirm("estas seguro de querer eliminarlo?")) {
        state.wishList = state.wishList.filter(
          (book) => book.ISBN !== action.payload.ISBN
        );
      }
    },
  },
});

export const { addBookWish, removeBookWish } = bookSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.books.booksList;

export default bookSlice.reducer;
