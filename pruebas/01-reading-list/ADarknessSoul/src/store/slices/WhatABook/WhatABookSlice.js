import { createSlice, current } from '@reduxjs/toolkit';

export const WhatABookSlice = createSlice({

    name: 'WhatABook',  
    initialState: {

        books: [],
        booksAvailable: [],
        myBooks: [],

    },
    reducers: {

        setBooks: (state, action) => {

            state.books = action.payload.books;
            state.booksAvailable = action.payload.books;

        },

        pushMyBook: (state, action) => {

            state.myBooks.push(action.payload);
            

        },

        removeAvailableBook: (state, action) => {

            const { ISBN } = action.payload;
           state.booksAvailable = [...state.booksAvailable].filter(({book}) => book.ISBN != ISBN); 

        }

    },

});

export const { setBooks, pushMyBook, removeAvailableBook } = WhatABookSlice.actions;