import { configureStore } from "@reduxjs/toolkit";
import BookSlice from "./books/slice";
import readingSlice from "./readingList/slice";

const persistedState = (store: any) => (next: any) => (action: any) => {
  next(action);
  localStorage.setItem("books", JSON.stringify(store.getState()));
};

export const store = configureStore({
  reducer: {
    books: BookSlice,
    reading: readingSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(persistedState),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
