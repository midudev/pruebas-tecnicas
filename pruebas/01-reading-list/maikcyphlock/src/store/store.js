import { configureStore } from '@reduxjs/toolkit'
import BookSlice from './books/slice'

const persistanceLocalStorageMiddleware = (store) => (next) => (action) => {
  console.log(next(action))
  localStorage.setItem('maikcyphlock_books', JSON.stringify(store.getState().books))
}
const store = configureStore({
  reducer: {
    books: BookSlice
  },
  middleware: [persistanceLocalStorageMiddleware]
})

export default store
