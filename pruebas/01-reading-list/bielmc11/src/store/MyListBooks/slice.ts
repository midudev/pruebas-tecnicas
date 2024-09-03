import { Library } from "@/interfaces/interfaces";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";


const initialState: Library[] = localStorage.getItem("myBooks") && localStorage.getItem("myBooks") !== 'null'
  ? JSON.parse(localStorage.getItem("myBooks") || '[]')
  : [];

const myBooks = createSlice({
  name: "myBooks",
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<Library>) => {
      state.push(action.payload);
      localStorage.setItem("myBooks", JSON.stringify(state));
    },
    removeBook: (state, action: PayloadAction<string>) => {
      const newState = state.filter(
        (book) => book.book.ISBN !== action.payload
      );
      localStorage.setItem("myBooks", JSON.stringify(newState));
      return newState;
    },
  },
});

export default myBooks.reducer;
export const { addBook, removeBook } = myBooks.actions;
