import { configureStore } from "@reduxjs/toolkit";
import { createStateSyncMiddleware, initMessageListener } from "redux-state-sync";
import genresAvailableReducer from "./features/genresAvailable";
import readingListReducer from "./features/readingList";

// With the middleware createStateSyncMiddleware we connect state across all tabs.
export const store = configureStore({
	reducer: {
		readingListReducer,
		genresAvailableReducer,
	},
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware().prepend(createStateSyncMiddleware());
	},
});

initMessageListener(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
