import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

// SLICES DISPONIBLES
import booksReducer from "./slices/books";
import snackbarReducer from "./slices/snackbar";

import createWebStorage from "redux-persist/lib/storage/createWebStorage";
const createNoopStorage = () => {
  return {
    getItem(_key: any) {
      return Promise.resolve(null);
    },
    setItem(_key: any, value: any) {
      return Promise.resolve(value);
    },
    removeItem(_key: any) {
      return Promise.resolve();
    },
  };
};
const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

const reducer = combineReducers({
  books: persistReducer(
    {
      key: "books",
      storage: storage,
      keyPrefix: "array-",
    },
    booksReducer
  ),
  snackbar: snackbarReducer,
});

export default reducer;
