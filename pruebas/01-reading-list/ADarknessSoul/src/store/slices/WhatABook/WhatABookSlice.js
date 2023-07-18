import { createSlice } from '@reduxjs/toolkit';

const books = [];

// const getBooks = async() => {

//     try {

//         const response = await fetch("/src/assets/books/books.json");
//         const data = await response.json();
    
//         const { library } = data;
//         library.forEach(book => {
    
//             books.push(book);
    
//         });

//     } catch(error) {

//         console.error("Error retrieving the books: ", error);

//     }

//     console.log(books);

// }

// getBooks();

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