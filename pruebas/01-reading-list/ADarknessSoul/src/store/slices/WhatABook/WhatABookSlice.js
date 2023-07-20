import { createSlice } from '@reduxjs/toolkit';

export const WhatABookSlice = createSlice({

    name: 'WhatABook',  
    initialState: {

        books: [],

    },
    reducers: {

        setBooks: (state, action) => {

            state.books = action.payload.books;

        }

    },

});

export const { setBooks } = WhatABookSlice.actions;