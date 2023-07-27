import { configureStore, type Middleware } from '@reduxjs/toolkit'
import filtersReducer from './reducers/filters'
import visibleListBookReducer from './reducers/visibleListBook'
import librariesReducer from './reducers/libraries'

const persistenceLocalStorageMiddleware: Middleware = (store) => (next) => (action) => {
  next(action)

  if (action.type.startsWith('visibleList')) {
    localStorage.setItem(
      '__REDUX__STORE__visibleList',
      JSON.stringify(store.getState().visibleListBookReducer)
    )
  }

  if (action.type.startsWith('filters')) {
    localStorage.setItem(
      '__REDUX__STORE__filters',
      JSON.stringify(store.getState().filtersReducer)
    )
  }
  
  if (action.type.startsWith('library')) {
    const { librariesReducer } = store.getState()
    const { countBooks, readingList } = librariesReducer

    localStorage.setItem(
      '__REDUX__STORE__library',
      JSON.stringify({
        countBooks,
        readingList
      })
    )
  }
}

export const store = configureStore({
  reducer: {
    filtersReducer,
    visibleListBookReducer,
    librariesReducer
  },
  middleware: [persistenceLocalStorageMiddleware]
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
