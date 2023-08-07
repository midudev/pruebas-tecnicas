"use client";

import booksData from "../../../../books.json"
import { useEffect, useMemo, useState } from "react";
import { paytone_One } from "../utils/fonts"
import { gsap } from "gsap-trial";
import SplitType from "split-type";
import { Book } from "./Book";

export default function BooksContainer() {
    const { library } = booksData;
    const booksLibrary = library.map((bookItem) => bookItem.book);

    const [isbnArr, setIsbnArr] = useState([]);
    const [myListBook, setMyListBook] = useState([]);
    const [genreSelected, setGenreSelected] = useState("Todos");
    const [genreMyListBookSelected, setGenreMyListBookSelected] =
        useState("Todos");
    const [myListBookState, setMyListBookState] = useState(false);
    const [searchBook, setSearchBook] = useState("");
    const [pagesFilter, setPagesFilter] = useState(1400);

    function handleLocalStorage() {
        function getMyListBook(e) {
            if (e.key === "myBooks") {
                const booksInList = JSON.parse(localStorage.getItem("myBooks") ?? "[]");
                setMyListBook(booksInList);
                setIsbnArr(booksInList.map((item2) => item2.ISBN));
            }
        }
        window.addEventListener("storage", getMyListBook);
        return () => window.removeEventListener("storage", getMyListBook);
    }

    const addMyListBook = (bookSelected) => {
        console.log("entra");
        const check = myListBook.find((item) => item.ISBN == bookSelected.ISBN)
            ? myListBook.filter((book) => book.ISBN != bookSelected.ISBN)
            : [...myListBook, bookSelected];
        setIsbnArr(check.map((item2) => item2.ISBN));
        setMyListBook(check);
        localStorage.setItem("myBooks", JSON.stringify(check));
    };

    const handleSearch = (e) => {
        setSearchBook(e.target.value);
    };

    const handlePageFilter = (e) => {
        setPagesFilter(e.target.value);
    };

    function filterByGenre(books) {
        return books.filter((item) => {
            if (
                item.title
                    .toString()
                    .toLowerCase()
                    .includes(searchBook.toLowerCase()) &&
                item.pages <= pagesFilter
            ) {
                return item;
            }
        });
    }

    const booksFilter = useMemo(() => {
        if (genreSelected === "Todos") {
            setGenreSelected("Todos");
            return filterByGenre(booksLibrary);
        } else {
            const genreFilter = booksLibrary.filter((book) => {
                if (book.genre != genreSelected) return false;
                setGenreSelected(book.genre);
                return true;
            });
            return filterByGenre(genreFilter);
        }
    }, [genreSelected, searchBook, pagesFilter]);

    const myListBookFilter = useMemo(() => {
        if (genreMyListBookSelected === "Todos") {
            setGenreMyListBookSelected("Todos");
            return filterByGenre(myListBook);
        } else {
            const genreFilter = myListBook.filter((book) => {
                if (book.genre != genreMyListBookSelected) return false;
                setGenreMyListBookSelected(book.genre);
                return true;
            });
            return filterByGenre(genreFilter);
        }
    }, [
        genreMyListBookSelected,
        myListBookState,
        myListBook,
        searchBook,
        pagesFilter,
    ]);

    const genreList = booksLibrary.reduce((acc, item) => {
        if (!acc.includes(item.genre)) {
            acc.push(item.genre);
        }
        return acc;
    }, []);

    const getNumberGenre = useMemo(() => {
        const isMyList = myListBookState ? myListBook : booksLibrary;
        const genreListNumber = genreList.map((genre) => {
            const genreItem = {
                genre: genre,
                count: 0,
            };
            return genreItem;
        });
        const arrTest = [];
        for (let i = 0; i < genreListNumber.length; i++) {
            for (let a = 0; a < isMyList.length; a++) {
                if (genreListNumber[i].genre == isMyList[a].genre) {
                    genreListNumber[i].count = genreListNumber[i].count + 1;
                }
            }
            arrTest.push(genreListNumber[i]);
        }
        return arrTest;
    }, [myListBookState, myListBook]);

    useEffect(() => {
        const booksInList = JSON.parse(localStorage.getItem("myBooks") ?? "[]");
        setIsbnArr(booksInList.map((item2) => item2.ISBN));
        setMyListBook(booksInList);

        const listenLocalStorage = handleLocalStorage();
        return () => listenLocalStorage();
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
        let title = new SplitType(".title");
        let chars = title;

        const tl = gsap.timeline({ paused: true });

        tl.play();

        tl.from(".char", {
            yPercent: 130,
            stagger: 0.04,
        });

        tl.fromTo(
            "h1",
            { ease: "power3.inOut", yPercent: 150, duration: 1, scale: 1.4 },
            { ease: "power3.inOut", yPercent: 0, duration: 1, scale: 1 },
            "-=.5"
        );
        tl.fromTo(
            ".books-options",
            { opacity: 0, duration: 0.5 },
            { opacity: 1, duration: 0.5 },
            "-=.4"
        );
        tl.fromTo(
            "nav div",
            { yPercent: 100, duration: 0.5 },
            { yPercent: 0, duration: 0.5 },
            "-=.4"
        );
    }, []);

    return (
        <div className={`h-auto p-4 w-full max-w-7xl mx-auto`}>
            <div className="flex justify-center">
                <h1
                    className={`title text-white text-4xl md:text-6xl text-center mb-4 ${paytone_One.className} max-w-sm sm:max-w-md`}
                >
                    Books Store📚
                </h1>
            </div>

            <section className="books-options">
                <div className="h-auto p-2 w-full flex justify-center items-center mb-10">
                    <h2 className="w-full max-w-xl text-center text-base md:text-2xl text-white/70">
                        Descubre tesoros literarios en nuestra librería: una ventana a la
                        imaginación y el conocimiento, donde cada página te invita a soñar y
                        aprender.
                    </h2>
                </div>
                <h3
                    className={` md:text-left text-center text-white text-2xl md:text-4xl mb-10 ${paytone_One.className}`}
                >
                    {" "}
                    Libros en total: {booksLibrary.length - myListBook.length}
                </h3>
                <h3
                    className={` md:text-left text-white text-2xl md:text-4xl text-center mb-10 ${paytone_One.className}`}
                >
                    {" "}
                    Mi lista de libros: {myListBook.length}
                </h3>
                <nav className="sticky top-4 z-10 mb-10 flex items-center justify-center overflow-hidden">
                    <div className="flex justify-between gap-4 w-full bg-[#222a] backdrop-blur-sm p-2 lg:flex-row flex-col rounded-md lg:max-w-none max-w-md">
                        <select
                            className="text-black p-2 h-10 rounded-md font-bold outline-none  hover:bg-[#ddd] transition-all"
                            value={genreSelected}
                            onChange={(e) => {
                                setGenreMyListBookSelected(e.target.value);
                                setGenreSelected(e.target.value);
                            }}
                        >
                            <option key={0} value="Todos">{`Todos (${!myListBookState ? booksLibrary.length : myListBookFilter.length
                                })`}</option>
                            {getNumberGenre.map((genre) => (
                                <option
                                    key={genre.genre}
                                    className="text-black"
                                    value={genre.genre}
                                >{`${genre.genre} (${genre.count})`}</option>
                            ))}
                        </select>
                        <div className="flex flex-col">
                            <input
                                onChange={handlePageFilter}
                                className="text-white bg-white/25 rounded-sm"
                                type="range"
                                min={0}
                                max={1400}
                                value={pagesFilter}
                            />
                            <output className="text-center text-sm text-white">
                                Número de páginas: Menos de {pagesFilter}
                            </output>
                        </div>
                        <div className="flex w-72 items-center h-10 justify-center rounded-md border border-white/20 focus-within:border-white">
                            <input
                                onChange={handleSearch}
                                value={searchBook}
                                placeholder="¿Qué libro estás buscando?"
                                className="h-full w-full rounded-r-md p-1 text-left font-bold text-white outline-none bg-transparent"
                            />
                        </div>
                        <button
                            onClick={() => setMyListBookState((prev) => !prev)}
                            className="h-10 text-center p-2 font-bold rounded-md bg-white text-black hover:bg-white/90 transition-all"
                        >
                            {!myListBookState
                                ? `Mis libros: (${myListBook.length})`
                                : `Book Store`}
                        </button>
                    </div>
                </nav>
                <ul className="flex flex-col gap-8 h-auto items-center justify-center relative">
                    {!myListBookState ? (
                        booksFilter.length != 0 ? (
                            booksFilter.map((book) => (
                                <Book
                                    isbnArr={isbnArr}
                                    book={book}
                                    pagesFilter={pagesFilter}
                                    addMyListBook={addMyListBook}
                                    key={book.ISBN}
                                    genreSelected={genreSelected}
                                    myListBookState={myListBookState}
                                    searchBook={searchBook}
                                />
                            ))
                        ) : (
                            <p className={`${paytone_One.className} text-xl text-white`}>
                                No hay resultados
                            </p>
                        )
                    ) : myListBookFilter.length != 0 ? (
                        myListBookFilter.map((book) => (
                            <Book
                                isbnArr={isbnArr}
                                book={book}
                                pagesFilter={pagesFilter}
                                addMyListBook={addMyListBook}
                                key={book.ISBN}
                                genreSelected={genreSelected}
                                myListBookState={myListBookState}
                                searchBook={searchBook}
                            />
                        ))
                    ) : (
                        <p className={`${paytone_One.className} text-xl text-white`}>
                            No hay resultados
                        </p>
                    )}
                </ul>
            </section>
        </div>
    );
}
