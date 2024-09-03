import { type FilterBooks, Genre } from "@/interfaces/interfaces";
import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: FilterBooks = {
  maxPages: null,
  genre: Genre.ALL,
  bookToSearch: "",
};

const booksFilter = createSlice({
  name: "booksFilter",
  initialState,
  reducers: {
    setMaxPages: (state, action: PayloadAction<number>) => {
      state.maxPages = action.payload;
    },
    setGenre: (state, action) => {
      state.genre = action.payload;
    },
    setBookToSearch: (state, action: PayloadAction<string>) => {
      state.bookToSearch = action.payload;
    },
  },
});

export const { setMaxPages, setGenre, setBookToSearch } =
  booksFilter.actions;

export default booksFilter.reducer;
