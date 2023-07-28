import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

import bookReducer from "./bookSlice";
import themeReducer from "./themeSlice";

//combine reducers
const allReducers = combineReducers({
  books: bookReducer,
  theme: themeReducer,
});

const secretKey = import.meta.env.VITE_SECRET_STORE || "";

//create config to save in storage
const persistConfig = {
  key: "App",
  storage,
  transforms: [
    encryptTransform({
      secretKey: secretKey,
    }),
  ],
};

const persistedReducer = persistReducer(persistConfig, allReducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persist = persistStore(store);
