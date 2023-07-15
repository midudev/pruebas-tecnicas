import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    show: [],
    all: [],
    available: [],
    reading: [],
    authors: [],
    genres: [],
};

export const booksSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        addToReading: (state, action) => {
            const { ISBN } = action.payload.book;
            state.reading.push(action.payload);
            state.available = state.available.filter((book) => book.book?.ISBN !== ISBN);
            state.show = state.show.filter((book) => book.book?.ISBN !== ISBN);
        },
        removeToReading: (state, action) => {
            state.reading = state.reading.filter((book) => book.book?.ISBN !== action.payload);
        },
        getAllBooks: (state, action) => {
            state.all = action.payload;
            state.show = action.payload;
            state.available = action.payload;
            const authors = new Set(action.payload.map((book) => book.book?.author));
            state.authors = [...authors];
            const genres = new Set(action.payload.map((book) => book.book?.genre));
            state.genres = [...genres];
        },
        findBooks: (state, action) => {
            const byTitle = state.available.filter((book) =>
                book.book?.title.toLowerCase().includes(action.payload?.toLowerCase())
            );
            const byAuthors = state.available.filter((book) =>
                book.book?.author.name.toLowerCase().includes(action.payload?.toLowerCase())
            );
            const finded = new Set([...byTitle, ...byAuthors]);
            state.show = [...finded];
        },
        filerByGenre: (state, action) => {
            if (action.payload === "All genres") {
                state.show = state.available;
            } else {
                state.show = state.available.filter(
                    (book) => book.book?.genre === action.payload
                );
            }
        },
        filterByRange: (state, action) => {
            state.show = state.available.filter((book) => book.book.pages >= action.payload);
        },
    },
});

export const {
    addToReading,
    removeToReading,
    getAllBooks,
    findBooks,
    filerByGenre,
    filterByRange,
} = booksSlice.actions;
export default booksSlice.reducer;
