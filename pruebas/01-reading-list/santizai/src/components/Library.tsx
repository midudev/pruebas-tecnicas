import { useEffect, useState } from "react";
import type { Library, Books } from "../types/interfaces";
import { filterForId } from "../services/filter";

interface Props {
    library: Books;
    readList: string | null;
}

const Library = (props: Props) => {
    const [library, setLibrary] = useState<Library[]>([]);
    const [readlist, setReadlist] = useState<string | null>(
        localStorage.getItem("books")
    );

    useEffect(() => {
        if (props.library && props.library.library.length > 0) {
            const booksLocalStorage: string[] = (readlist || "").split(",");
            const filteredLibrary = filterForId(
                booksLocalStorage,
                props.library.library
            );
            setLibrary(filteredLibrary);
        }
    }, [localStorage, readlist]);

    const moveToReadList = (id: string) => {
        let storage: string | null = localStorage.getItem("books");
        // Previene que aparezca la palabra null al inicio de la cadena
        if (storage === null) storage = "";
        // Verifica si ya existe la id en la lista guardada, si no existe la agrega, ademas se fija si no hay ninguna id para no agregar una coma al principio de más
        if (!storage.split(",").includes(id)) {
            if (storage !== "") storage += `,${id}`;
            else storage += id;
            localStorage.setItem("books", String(storage));
        }
    };

    return (
        <div>
            <div>
                <h2>Hay {props.library.library.length} libros</h2>
                <button onClick={() => console.log(readlist)}>aaaa</button>
                <button onClick={() => moveToReadList("978-0553103540")}>
                    move
                </button>
            </div>
        </div>
    );
};

export default Library;
