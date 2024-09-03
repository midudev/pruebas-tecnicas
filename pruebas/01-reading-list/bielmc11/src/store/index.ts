import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./books/slice";
import booksFilter from "./booksFilters/slice";
import myBooksReducer from "./MyListBooks/slice.ts";

/* const persistenceLocalStorageMiddleware: Middleware = (state) => (next) => (action: any) => {
  const { type, payload } = action
  // console.log(type)
  next(action)
} */

export const store = configureStore({
  reducer: {
    books: booksReducer,
    booksFilter,
    myBooks: myBooksReducer,
  },
  /* middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(persistenceLocalStorageMiddleware) */
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
