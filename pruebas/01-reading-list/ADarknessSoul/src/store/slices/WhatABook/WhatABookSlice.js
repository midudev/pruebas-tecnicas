import { createSlice, current } from '@reduxjs/toolkit';

export const WhatABookSlice = createSlice({

    name: 'WhatABook',  
    initialState: {

        books: [],
        booksAvailable: [],
        myBooks: [],
        currentBook: 0,
        myFavs: [],
        isFav: false,
        isModal: false,
        canSave: false,

    },
    reducers: {

        setBooks: (state, action) => {

            state.books = action.payload.books;
            state.booksAvailable = action.payload.books;

        },

        pushMyBook: (state, action) => {

            state.myBooks.push({book: action.payload});
            

        },

        pushAvailableBooks: (state, action) => {

            state.booksAvailable.push({book: action.payload});

        },

        removeMyBook: (state, action) => {

            
            const { ISBN } = action.payload;
            state.myBooks = [...state.myBooks].filter(({book}) => book.ISBN != ISBN);
            state.currentBook = 0;

        },

        removeFavorite: (state, action) => {

            const { ISBN } = action.payload;
            state.myFavs = [...state.myFavs].filter(({book}) => book.ISBN != ISBN);
            state.currentBook = 0;

        },

        removeAvailableBook: (state, action) => {

            const { ISBN } = action.payload;
           state.booksAvailable = [...state.booksAvailable].filter(({book}) => book.ISBN != ISBN); 

        },

        incrementCurrentBook: (state) => {

            if(state.currentBook < state.myBooks.length - 1 && !state.isFav) {

                console.log(state.isFav);
                state.currentBook += 1;

            } else if(state.currentBook < state.myFavs.length - 1) {

                console.log("hola");
                state.currentBook += 1;

            }

        },

        decrementCurrentBook: (state) => {

            if(state.currentBook > 0) {

                state.currentBook -= 1;

            }

        },

        resetCurrentBook: (state) => {

            state.currentBook = 0;

        },

        pushMyFavs: (state, action) => {

            const { ISBN } = action.payload;
            if([...state.myFavs].find(({book}) => book.ISBN === ISBN) === undefined) {

                state.myFavs.push({book: action.payload});

            };

        },

        setIsFav: (state) => {

            state.isFav = true;

        },

        setAll: (state) => {

            state.isFav = false;

        },

        setIsModal: (state, action) => {

            state.isModal = action.payload;

        },

        searchBook: (state, action) => {

            const search = action.payload;
            search.toLowerCase();
            

        },

        saveLocalStorage: (state) => {

            try {

                const { canSave, isModal, ...stateToSave } = state; // Extract "canSave" from the state
                const serializedState = JSON.stringify(stateToSave);
                localStorage.setItem('reduxState', serializedState);

            } catch(error) {

                console.error("Error saving in local storage: ", error);

            }

        },

        getLocalStorage: (state) => {

            try {

                const serializedState = localStorage.getItem('reduxState');
                if(serializedState === null) {

                    return;

                }
                const parsedState = JSON.parse(serializedState);
                state.books = parsedState.books || [];
                state.booksAvailable = parsedState.booksAvailable || [];
                state.myBooks = parsedState.myBooks || [];
                state.currentBook = parsedState.currentBook || 0;
                state.myFavs = parsedState.myFavs || [];
                state.isFav = parsedState.isFav || false;
                state.isModal = parsedState.isModal || false;

            } catch(error) {

                console.error("Error retrieving data from local storage: ", error);

            }

        },

        allowSave: (state) => {

            state.canSave = true;

        }

    },

});

export const { 

    setBooks, 
    pushMyBook, 
    removeAvailableBook, 
    incrementCurrentBook, 
    decrementCurrentBook, 
    pushAvailableBooks, 
    removeMyBook, 
    pushMyFavs, 
    resetCurrentBook, 
    setIsFav, 
    setAll, 
    removeFavorite, 
    setIsModal, 
    saveLocalStorage, 
    getLocalStorage,
    allowSave,

} = WhatABookSlice.actions;