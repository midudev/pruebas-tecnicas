import { useEffect, useState } from "react";
import {saveBook, removeBook, useSavedBooks} from "../../../data/Store.js";
import "./SaveBookButton.css";


function SaveBook({book}) {

    const [isSaved, setIsSaved] = useState(false);

    const savedBooks = useSavedBooks();

    useEffect(() => {

        const exist = savedBooks[book.ISBN];

        if(exist) {

            setIsSaved(true);
        }
        else {

            setIsSaved(false);
        }
        
    }, [savedBooks]);

    const save = () => {

        const {ISBN, title, cover, author} = book;

        saveBook(ISBN, {ISBN, title, cover, author: author?.name})
        .then((result) => {

            console.log(result);
            if(result.ok) setIsSaved(true);
        })
    }

    const remove = () => {

        removeBook(book.ISBN)
        .then((result) => {

            console.log(result);
            if(result.ok) setIsSaved(false);
        })
    }

    return (<>
        {
            !isSaved ? 
                <button className="save-button" onClick={save} title="Guardar">
                    <i className="bi bi-bookmark-plus-fill" />
                </button>
            :
                <button className="remove-button" onClick={remove} title="Quitar de la lista" />
        }
    </>);
}

export default SaveBook;