import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/slice';
import filtersReducer from './filter/slice';

export const store = configureStore({
	reducer: {
		books: booksReducer,
		filters: filtersReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
