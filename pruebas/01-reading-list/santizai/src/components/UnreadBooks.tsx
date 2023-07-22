import { useEffect, useState } from "react";
import type { Library } from "../types/interfaces";

interface Props {
    unread: Library[];
}

const UnreadBooks = (props: Props) => {
    const [books, setBooks] = useState<Library[]>([]);
    const [filteredBooks, setFilteredBooks] = useState<Library[]>([]);

    useEffect(() => {
        setBooks(props.unread)
        setFilteredBooks(props.unread)
    }, [props.unread])

    const filterForPages = (pages: number) => {
        const filtered = books.filter((book: Library) => book.book.pages <= pages);
        setFilteredBooks(filtered)
    };

    return (
        <div className="w-full flex flex-col justify-center items-center">
            <div className="w-3/4 text-start">
                <h2>Filtros</h2>
                <input
                    type="range"
                    min="0"
                    max="1500"
                    step="50"
                    onChange={(e) => filterForPages(Number(e.target.value))}
                />
            </div>
            <div className="w-3/4 flex flex-wrap gap-3">
                {filteredBooks.map((book: Library) => {
                    return (
                        <div
                            key={book.book.ISBN}
                            className="w-48 bg-red-200"
                        >
                            <img
                                src={book.book.cover}
                                className="w-full h-full"
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default UnreadBooks;
