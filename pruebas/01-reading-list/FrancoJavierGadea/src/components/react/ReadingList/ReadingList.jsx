import { useEffect, useMemo, useRef, useState } from "react";
import { useSavedBooks } from "../../../data/BooksStore";
import SavedBookCard from "../SavedBookCard/SavedBookCard";

import "./ReadingList.css";
import SortList from "../DragAndSort/SortList";

import BooksImage from "../../../assets/BooksImage";


function ReadingList() {

    const savedBooks = useSavedBooks();

    useEffect(() => {

        //console.log('reading books', savedBooks);

    }, []);

    const numberOfBooks = useMemo(() => {

        return Object.keys(savedBooks).length;

    }, [savedBooks]);

    return (<div className="Reading-list">

        <header className="pt-3 pb-2 mb-4 d-flex align-items-baseline">

            <h3 className="Reading-list-title m-0"> <i className="bi bi-book-half" /> Lista de lectura</h3>

            <h5 className="Reading-list-total m-0 ms-auto">
                <span>Total: </span>
                <strong>{numberOfBooks}</strong>
            </h5>

        </header>

        <div className="Reading-list-content d-flex flex-column">

            <SortList books={savedBooks} />
        </div>

        <BooksImage className="books-img" />
    </div>);
}

export default ReadingList;