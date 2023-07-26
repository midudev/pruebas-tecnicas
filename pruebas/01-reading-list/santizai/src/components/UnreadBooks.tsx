import React, { useEffect, useState } from "react";
import type { Library } from "../types/interfaces";
import { obtainGenres } from "../services/filters";
import DropdownMenu from "./DropdownMenu";

interface Props {
    unread: Library[];
    moveToReadList: (id: string) => void;
}

const UnreadBooks = (props: Props) => {
    const [books, setBooks] = useState<Library[]>([]);
    const [filteredBooks, setFilteredBooks] = useState<Library[]>([]);
    const [genres, setGenres] = useState<string[]>([]);
    const [pages, setPages] = useState<number>();

    useEffect(() => {
        setBooks(props.unread);
        setFilteredBooks(props.unread);
        setGenres(obtainGenres(props.unread));
    }, [props.unread]);

    const filterForPages = (pages: number) => {
        setPages(pages);
        const filtered = books.filter(
            (book: Library) => book.book.pages <= pages
        );
        setFilteredBooks(filtered);
    };

    const filterForGenre = (genre: string) => {
        const filtered = books.filter(
            (book: Library) => book.book.genre === genre
        );
        setFilteredBooks(filtered);
    };

    return (
        <div className="w-full flex flex-col justify-center items-center">
            <div className="w-3/4 text-start">
                <h2>Filtros</h2>
                <div className="flex gap-5">
                    <div className="flex gap-2">
                        <input
                            type="range"
                            min="0"
                            max="1500"
                            step="50"
                            onChange={(e) =>
                                filterForPages(Number(e.target.value))
                            }
                        />
                        <span>{pages}</span>
                    </div>
                    <DropdownMenu
                        options={genres}
                        filter={filterForGenre}
                    />
                </div>
            </div>
            <div className="w-3/4 flex flex-wrap gap-3">
                {filteredBooks.map((book: Library) => {
                    return (
                        <div
                            key={book.book.ISBN}
                            className="w-48"
                            onClick={() => props.moveToReadList(book.book.ISBN)}
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
