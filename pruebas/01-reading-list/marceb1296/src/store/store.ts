import { configureStore } from '@reduxjs/toolkit'
import reducer from "../reducer";

export const store = configureStore({
  reducer
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch