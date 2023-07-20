import { useEffect, useState } from "react";
import type { Book, Books } from "../types/interfaces";
import { filterForId } from "../services/filter";

interface Props {
    books: Books;
}

const Library = (props: Props) => {
    const [library, setLibrary] = useState<Book[]>([]);
    const [readlist, setReadlist] = useState<string | null>(
        localStorage.getItem("books")
    );

    // hacer que ande este useeffect
    // poder tomar si hay en localStorage libros para setear readList y posterior setear la libreria con los que no estan guardados en la lista

    useEffect(() => {
        console.log(
            filterForId(props.books.library[0].book.ISBN, props.books.library)
        );
        /* if (readlist !== null) {
            
        } */
    }, []);

    console.log(props.books.library[0].book.ISBN);

    return (
        <div>
            <div>
                <h2>Hay {props.books.library.length} libros</h2>
            </div>
        </div>
    );
};

export default Library;
