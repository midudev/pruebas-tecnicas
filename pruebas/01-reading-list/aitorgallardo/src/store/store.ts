import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit'
import { booksSlice } from './slices/books/booksSlice'

export const store = configureStore({
  reducer: {
    books: booksSlice.reducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

// Define AppThunk using ThunkAction
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;