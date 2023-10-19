import { configureStore } from "@reduxjs/toolkit";
import {
  useDispatch as useAppDispatch,
  useSelector as useAppSelector,
} from "react-redux";
import { persistStore } from "redux-persist";
import reducer from "./reducer";

const store = configureStore({
  reducer: reducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false, immutableCheck: false }),
});

const persister = persistStore(store);

const { dispatch } = store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const useDispatch = () => useAppDispatch();
const useSelector = useAppSelector;

export { dispatch, persister, store, useDispatch, useSelector };
