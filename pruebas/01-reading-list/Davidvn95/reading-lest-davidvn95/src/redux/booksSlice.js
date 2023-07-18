import { createSlice } from "@reduxjs/toolkit";

const isReading = JSON.parse(localStorage.getItem("isReading"));
const show = JSON.parse(localStorage.getItem("show"));

const initialState = {
    show: show || [],
    copyShow: [],
    all: show || [],
    reading: isReading || [],
    genreFilter: '',
    genres: [],
    counters: {
        total: 0,
        readings: 0,
        byGenre: 0,
        numPages: 0,
    },
};

export const booksSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        // agrega libros a la lista de lectura
        addToReading: (state, action) => {
            const data = { readings: true, ...action.payload };
            state.reading.push(data);
            const newShow = state.show.map((book) => {
                if (book.book?.ISBN === action.payload.book?.ISBN) {
                    book.readings = true;
                    return book;
                }
                return book;
            });
            const newData = state.all.map((book) => {
                if (book.book?.ISBN === action.payload.book?.ISBN) {
                    book.readings = true;
                    return book;
                }
                return book;
            });
            state.show = newShow;
            state.copyShow = newData;
            state.all = newData;
            state.counters.readings = state.reading.length;
            localStorage.setItem("isReading", JSON.stringify(state.reading));
            localStorage.setItem("show", JSON.stringify(state.copyShow));
        },
        // elimina libros de la lista de lectura
        removeToReading: (state, action) => {
            state.reading = state.reading.filter((book) => book.book?.ISBN !== action.payload);
            const newData = state.show.map((book) => {
                if (book.book?.ISBN === action.payload) {
                    book.readings = false;
                    return book;
                }
                return book;
            });
            state.show = newData;
            state.copyShow = newData;
            state.all = newData;
            state.counters.readings = state.reading.length;
            localStorage.setItem("isReading", JSON.stringify(state.reading));
            localStorage.setItem("show", JSON.stringify(state.show));
        },
        // carga el estado inicial
        getAllBooks: (state, action) => {
            // state.all = action.payload;
            state.show = state.show.length ? state.show : action.payload;
            state.copyShow = state.show.length ? state.show : action.payload;
            state.all = state.show.length ? state.show : action.payload;
            const authors = new Set(action.payload.map((book) => book.book?.author));
            state.authors = [...authors];
            const genres = new Set(action.payload.map((book) => book.book?.genre));
            state.genres = [...genres];
            state.counters.total = action.payload.length;
            state.counters.readings = state.reading.length;
            state.counters.byGenre = state.show.length;
        },
        // Busca libros por titulo y autor
        findBooks: (state, action) => {
            if (action.payload === "") {
                state.show = state.copyShow.filter(
                    (book) => book.book.pages >= state.counters.numPages
                );
                return;
            }
            const byTitle = state.all.filter((book) =>
                book.book?.title.toLowerCase().includes(action.payload?.toLowerCase())
            );
            const byAuthors = state.all.filter((book) =>
                book.book?.author.name.toLowerCase().includes(action.payload?.toLowerCase())
            );
            const finded = new Set([...byTitle, ...byAuthors]);
            state.show = [...finded];
        },
        // filtra por genero
        filerByGenre: (state, action) => {
            state.genreFilter = action.payload;
            if (action.payload === "All genres") {
                state.copyShow = state.all;
                state.show = state.all.filter(
                    (book) => book.book.pages >= state.counters.numPages
                );
            } else {
                const filtered = state.all.filter(
                    (book) => book.book?.genre === action.payload
                );
                state.copyShow = [...filtered];
                state.show = filtered.filter(
                    (book) => book.book.pages >= state.counters.numPages
                );
            }
            state.counters.byGenre = state.show.length;
        },
        // filtra por rango de paginas
        filterByRange: (state, action) => {
            state.counters.numPages = action.payload;
            state.show = state.copyShow.filter((book) => book.book.pages >= action.payload);
            state.counters.byGenre = state.show.length;
        },

        syncsTabs: (state, action) => {
            const { key, value } = action.payload;
            if (key === "show") {
                state.show = value;
                state.all = value;
            } else {
                state.reading = value;
                state.counters.readings = value.length;
            }
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
    syncsTabs,
} = booksSlice.actions;

export default booksSlice.reducer;
