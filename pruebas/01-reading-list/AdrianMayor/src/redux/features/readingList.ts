import { Book } from "@/models/book.model";
import isValidBook from "@/utils/isValidBook";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface readingListSlice {
	value: Book[];
}

const initialState: readingListSlice = { value: [] };

export const readingListSlice = createSlice({
	name: "readingListSlice",
	initialState,
	reducers: {
		setList: (state, action: PayloadAction<Book[]>) => {
			let validBooks: Book[] = [];

			if (Array.isArray(action.payload)) {
				validBooks = action.payload.filter((book) => isValidBook(book));
			}

			state.value = validBooks;
		},
	},
});

export const { setList } = readingListSlice.actions;
export default readingListSlice.reducer;
