import React, { useEffect, useState } from "react";
import type { Library, Books } from "../types/interfaces";
import { filterForId, findBook } from "../services/filters";
import UnreadBooks from "./UnreadBooks";
import ReadingList from "./ReadingList";

interface Props {
    library: Books;
    readList: string | null;
}

const Library = (props: Props) => {
    const [library, setLibrary] = useState<Library[]>([]);
    const [readlist, setReadlist] = useState<string | null>(
        localStorage.getItem("books")
    );
    const [booksReadList, setBooksReadList] = useState<Library[]>([]);
    const [viewReadList, setViewReadList] = useState<boolean>(false);

    useEffect(() => {
        if (props.library && props.library.library.length > 0) {
            const booksLocalStorage: string[] = (readlist || "").split(",");
            const { readList, unread } = filterForId(
                booksLocalStorage,
                props.library.library
            );
            setBooksReadList(readList);
            setLibrary(unread);
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
            setReadlist(storage);
            localStorage.setItem("books", storage);
        }
    };

    const handleReadList = (visible: boolean) => setViewReadList(visible);

    const handleReadBook = (id: string) => {
        const book = findBook(id, booksReadList);
        if (book) {
            setLibrary((prev) => prev.concat(book));
            const storage: string[] =
                localStorage
                    .getItem("books")
                    ?.split(",")
                    .filter((id) => book.book.ISBN !== id) ?? [];
            localStorage.setItem("books", storage?.join(","));
            setBooksReadList((prev) =>
                prev.filter((book: Library) => book.book.ISBN !== id)
            );
        }
    };

    return (
        <div className="w-full pt-5">
            <div className="w-full flex justify-center">
                <div className="w-3/4 flex flex-col items-start gap-3">
                    <span className="text-3xl">
                        {library.length} libros disponibles
                    </span>
                    <span className="text-lg">
                        {booksReadList.length > 0
                            ? `${booksReadList.length} en la lista de lectura`
                            : "Sin libros en la lista de lectura"}
                    </span>
                    <button
                        className="btn"
                        onClick={() => handleReadList(!viewReadList)}
                    >
                        Lista de lectura
                    </button>
                </div>
            </div>
            <div className="mt-5">
                <UnreadBooks
                    unread={library}
                    moveToReadList={moveToReadList}
                />
                <ReadingList
                    visible={viewReadList}
                    handleVisible={handleReadList}
                    books={booksReadList}
                    handleReadingBook={handleReadBook}
                />
            </div>
        </div>
    );
};

export default Library;
