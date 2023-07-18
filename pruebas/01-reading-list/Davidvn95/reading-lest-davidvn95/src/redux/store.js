import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./booksSlice";

export const store = configureStore({
    reducer: {
        books: booksReducer,
    },
});
