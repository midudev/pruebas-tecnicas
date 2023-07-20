import { useState } from "react";
import type { Books } from "../types/interfaces";

interface Props {
    books: Books;
}

const Library = (props: Props) => {
    return (
        <div>
            <div>
                <h2>Hay {props.books.library.length} libros</h2>
            </div>
        </div>
    );
};

export default Library;
