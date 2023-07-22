import { useEffect, useState } from "react";
import type { Library, Books } from "../types/interfaces";
import { filterForId } from "../services/filters";
import UnreadBooks from "./UnreadBooks";

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

    // TODO: usar esto
    const moveToReadList = (id: string) => {
        let storage: string | null = localStorage.getItem("books");

        // Previene que aparezca la palabra null al inicio de la cadena
        if (storage === null) storage = "";

        // Verifica si ya existe la id en la lista guardada, si no existe la agrega, ademas se fija si no hay ninguna id para no agregar una coma al principio de más
        if (!storage.split(",").includes(id)) {
            if (storage !== "") storage += `,${id}`;
            else storage += id;
            setReadlist(storage);
            localStorage.setItem("books", String(readlist));
        }
    };

    return (
        <div>
            <div>
                <h2>Hay {props.library.library.length} libros</h2>
                <button
                    onClick={() => console.log(localStorage.getItem("books"))}
                >
                    aaaa
                </button>
            </div>
            <div>
                <UnreadBooks unread={library} />
            </div>
        </div>
    );
};

export default Library;
