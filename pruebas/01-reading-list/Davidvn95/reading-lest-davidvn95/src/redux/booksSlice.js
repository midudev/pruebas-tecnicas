import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    render: [],
    genres: [],
    all: [],
    reading: [],
    authors: [],
};

export const booksSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        addToReading: (state, action) => {
            state.reading.push(action.payload);
        },
        removeToReading: (state, action) => {
            state.reading = state.reading.filter((book) => book.book?.ISBN !== action.payload);
        },
        getAllBooks: (state, action) => {
            state.all = action.payload;
            state.render = action.payload;
            const authors = new Set(action.payload.map((book) => book.book?.author));
            state.authors = [...authors];
            const genres = new Set(action.payload.map((book) => book.book?.genre));
            state.genres = [...genres];
        },
        findBooks: (state, action) => {
            const byTitle = state.all.filter((book) =>
                book.book?.title.toLowerCase().includes(action.payload?.toLowerCase())
            );
            const byAuthors = state.all.filter((book) =>
                book.book?.author.name.toLowerCase().includes(action.payload?.toLowerCase())
            );
            state.render = [...byTitle, ...byAuthors];
        },
    },
});

export const { addToReading, removeToReading, getAllBooks, findBooks } = booksSlice.actions;
export default booksSlice.reducer;
