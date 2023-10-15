import { setBooks } from "./WhatABookSlice";

export const getBooks = () => {

    return async(dispatch, getState) => {

        const resp = await fetch("../../../assets/books/books.json");
        const data = await resp.json();

        const { library } = data;

        dispatch( setBooks({books: library}) )

    }

}