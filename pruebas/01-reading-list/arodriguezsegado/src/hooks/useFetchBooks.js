import { useState, useEffect } from "react";
import { getBooks } from "../helpers/getBooks";

export const useFetchBooks = () => {
    const [books, setBooks] = useState([]);
    const getLibrary = async() => {
        const books = await getBooks();
        setBooks(books);
    }
    useEffect(() => {
        getLibrary();
    }, []);

    return { books };
}