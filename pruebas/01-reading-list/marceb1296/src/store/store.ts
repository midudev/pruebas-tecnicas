import { PreloadedState, configureStore } from '@reduxjs/toolkit'
import reducer from "../reducer";

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer,
    preloadedState
  })
}

export const store = setupStore()

// Infer the `RootState` and `AppDispatch` types from the store itself

export type AppStore = ReturnType<typeof setupStore>

export type RootState = ReturnType<typeof reducer>
export type AppDispatch = AppStore["dispatch"]