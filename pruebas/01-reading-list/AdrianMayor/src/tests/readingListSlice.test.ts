import { Book } from "../models/book.model";
import { readingListSlice, setList } from "../redux/features/readingList";

import { configureStore } from "@reduxjs/toolkit";

describe("Reading List Redux Slice", () => {
	it("should have an empty reading list initially", () => {
		const store = configureStore({
			reducer: { readingListSlice: readingListSlice.reducer },
		});

		const state = store.getState().readingListSlice.value;
		expect(state).toEqual([]);
	});

	it("should return the current state for an unknown action", () => {
		const initialState: Book[] = [];
		const store = configureStore({
			reducer: { readingListSlice: readingListSlice.reducer },
			preloadedState: { readingListSlice: { value: initialState } },
		});

		const unknownAction = { type: "UNKNOWN_ACTION" };
		store.dispatch(unknownAction);

		const state = store.getState().readingListSlice.value;
		expect(state).toEqual(initialState);
	});

	it("should set the reading list correctly", () => {
		const store = configureStore({
			reducer: { readingListSlice: readingListSlice.reducer },
		});

		const books: Book[] = [
			{
				title: "Book 1",
				pages: 300,
				genre: "Fiction",
				cover: "cover1.jpg",
				synopsis: "Synopsis of Book 1",
				year: 2023,
				ISBN: "1234567890",
				author: {
					name: "Author 1",
					otherBooks: [],
				},
				availability: true,
			},
		];

		store.dispatch(setList(books));

		const state = store.getState().readingListSlice.value;
		expect(state).toEqual(books);
	});
});
