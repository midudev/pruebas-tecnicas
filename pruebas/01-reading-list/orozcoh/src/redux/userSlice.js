import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  name: "Anon",
  bookmarks: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetBookmarks: (state) => {
      state.bookmarks = [];
    },
    addBook: (state, action) => {
      console.log("------Adding bookmark--------");
      state.bookmarks = [...state.bookmarks, action.payload];
    },
    removeBook: (state, action) => {
      console.log("------Removing bookmark--------");
      console.log("book to remove:", action.payload);
      console.log("1:", state);

      state.bookmarks = current(state.bookmarks).filter((item) => {
        console.log("item", item);
        return item !== action.payload;
      });
    },
  },
});

export const { addBook, removeBook } = userSlice.actions;

export default userSlice.reducer;
