"use client";
import Image from "next/image";
import useSWR from "swr";
import { Fragment, useState, useEffect } from "react";
import { Menu, Transition } from "@headlessui/react";
import SwiperCore from "swiper";
import {
  EffectCoverflow,
  EffectCards,
  Pagination,
  Navigation,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-cards";

import { ChevronDownIcon, FunnelIcon } from "@heroicons/react/20/solid";
import { GiBookshelf } from "react-icons/gi";
import { BiSort } from "react-icons/bi";
import { CiBookmarkRemove } from "react-icons/ci";

import BookItem from "./components/books/item";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

import { sortAsc, sortDesc, classNames } from "../../utilities";
import { BOOKS_ICONS } from "../../utilities/genders";

export default function Home() {
  const { data, error } = useSWR("api/books", fetcher);
  const [books, setBooks] = useState([]);
  const [listBooks, setListBooks] = useState([]);
  const [readingList, setReadingList] = useState([]);

  useEffect(() => {
    let sortedList;

    if (data?.library) {
      if (localStorage.getItem("books") === null) {
        sortedList = sortAsc(data.library);
      } else {
        sortedList = JSON.parse(localStorage.getItem("books"));
      }

      setBooks(sortedList);
      setListBooks(sortedList);
    }
  }, [data]);

  useEffect(() => {
    if (localStorage.getItem("readingList") !== null) {
      setReadingList(JSON.parse(localStorage.getItem("readingList")));
    }
  }, []);

  useEffect(() => {
    if (books.length > 0) {
      localStorage.setItem("readingList", JSON.stringify(readingList));
      localStorage.setItem("books", JSON.stringify(books));
    }
  }, [books, readingList]);

  if (error) return <div>¡ERROR! Recarga la página</div>;
  if (!data) return <div>Obteniendo listado de libros...</div>;

  SwiperCore.use([EffectCoverflow, EffectCards, Pagination, Navigation]);

  const sortOptions = [
    { name: "Título: A - Z", sortBy: "title_asc", current: true },
    { name: "Título: Z - A", sortBy: "title_desc", current: false },
  ];

  const genresSet = new Set(data.library.map((book) => book.book.genre));
  const pagesSet = new Set(data.library.map((book) => book.book.pages));
  const arrPages = Array.from(pagesSet).sort((a, b) => a - b);

  const handleFilterByGenre = (genre) => {
    if (!genre) {
      setListBooks(books);
    } else {
      const booksFiltered = books.filter((book) => book.book.genre === genre);

      setListBooks(booksFiltered);
    }
  };

  const handleFilterByPages = (pages) => {
    console.log(pages);
    const booksFiltered = books.filter((book) => book.book.pages <= pages);

    setListBooks(booksFiltered);
  };

  const handleSort = (sortBy) => {
    let sortedList;

    if (sortBy === "title_desc") {
      sortedList = sortDesc([...listBooks]);
    } else {
      sortedList = sortAsc([...listBooks]);
    }

    setListBooks(sortedList);
  };

  const addToReadingList = (isbn) => {
    const newListBooks = books.filter((book) => book.book.ISBN !== isbn);
    const readingBook = books.filter((book) => book.book.ISBN === isbn);

    const newReadingList = [...readingList, readingBook[0]];

    setBooks(newListBooks);
    setListBooks(newListBooks);
    setReadingList(newReadingList);
  };

  const removeFromReadingList = (isbn) => {
    const newReadingList = readingList.filter(
      (book) => book.book.ISBN !== isbn
    );
    const removedBook = readingList.filter((book) => book.book.ISBN === isbn);

    const newListBooks = [...books, removedBook[0]];

    const sortedList = sortAsc([...newListBooks]);

    setBooks(sortedList);
    setListBooks(sortedList);
    setReadingList(newReadingList);
  };

  return (
    <main className="w-full flex min-h-screen flex-col items-center justify-between p-4 md:p-24 pt-0">
      <section className="relative w-full my-5 flex justify-center items-center ">
        <div className="flex items-center justify-center w-full md:hidden">
          <Menu as="div" className="relative inline-block text-center">
            <div>
              <Menu.Button className="border-gray-200 border rounded-md px-4 py-2 inline-flex justify-center items-center font-medium text-gray-600 hover:text-gray-900 text-xl">
                <FunnelIcon className="w-4 mr-2 text-gray-400" /> Géneros
                <ChevronDownIcon
                  className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="w-full absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    <a
                      className="font-medium text-gray-900 block px-4 py-2 text-sm"
                      onClick={() => handleFilterByGenre()}
                    >
                      Todos
                    </a>
                  </Menu.Item>
                  {Array.from(genresSet).map((element) => (
                    <Menu.Item key={element}>
                      {({ active }) => (
                        <a
                          className={classNames(
                            "font-medium text-gray-900",
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm"
                          )}
                          onClick={() => handleFilterByGenre(element)}
                        >
                          {element}
                        </a>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>

        <ul className="hidden md:flex md:w-full md:justify-center md:items-center">
          <li className="mx-3" onClick={() => handleFilterByGenre()}>
            <div className="inline-flex items-center justify-center px-2 py-1 text-gray-500 bg-white border-2 border-gray-200 rounded-3xl cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
              <div className="block text-center">
                <div className="w-full text-sm font-semibold flex justify-between items-center">
                  <div className="p-1 rounded-3xl bg-black mr-2">
                    <GiBookshelf className="text-lg mx-auto text-white" />
                  </div>
                  Todos
                </div>
              </div>
            </div>
          </li>

          {Array.from(genresSet).map((element) => {
            return (
              <li
                className="mx-3"
                key={element}
                onClick={() => handleFilterByGenre(element)}
              >
                <div className="inline-flex items-center justify-center px-2 py-1 text-gray-500 bg-white border-2 border-gray-200 rounded-3xl cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                  <div className="block text-center">
                    <div className="w-full text-sm font-semibold flex justify-between items-center">
                      <div className="p-1 rounded-3xl bg-black mr-2">
                        {BOOKS_ICONS[element]}
                      </div>

                      {element}
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="w-full mb-32 float-left">
        <main className="w-full md:w-2/3 lg:mb-0 lg:text-left float-left px-4">
          <section className="flex items-center justify-between border-b border-gray-200 pb-2">
            <h1
              role="heading"
              className="text-4xl font-bold tracking-tight text-gray-900"
            >
              Libros ({listBooks.length})
            </h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    <BiSort className="text-xl" /> Ordenar
                    <ChevronDownIcon
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <a
                              className={classNames(
                                option.current
                                  ? "font-medium text-gray-900"
                                  : "text-gray-500",
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm"
                              )}
                              onClick={() => handleSort(option.sortBy)}
                            >
                              {option.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </section>
          <section className="w-full">
            <div className="my-5 w-full md:w-2/4 float-right">
              <label
                htmlFor="steps-range"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white float-right"
              >
                Filtrar por Páginas
              </label>
              <input
                id="steps-range"
                type="range"
                min="100"
                max={arrPages[arrPages.length - 1]}
                defaultValue={arrPages[arrPages.length - 1]}
                step="100"
                className="w-full h-2 bg-blue-300 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                onChange={(e) => {
                  handleFilterByPages(e.target.value);
                }}
              />

              <span className="float-left">100</span>
              <span className="float-right">
                {arrPages[arrPages.length - 1]}
              </span>
            </div>

            <div className="w-full grid text-center md:grid-cols-3 lg:text-left">
              {listBooks.map((book) => (
                <BookItem
                  key={book.book.ISBN}
                  book={book.book}
                  onClick={() => addToReadingList(book.book.ISBN)}
                />
              ))}
            </div>
          </section>
        </main>
        <aside className="w-full md:w-1/3 float-left p-4">
          <div className="flex flex-col w-full rounded-2xl border-solid border-gray-200 border">
            <span className="block w-full border-b border-solid border-gray-200 p-5 font-bold">
              Lista de Lectura ({readingList.length})
            </span>
            <section className="p-5 grid text-center xs:grid-cols-2 md:grid-cols-1 h-[400px] w-full">
              {readingList.length > 0 ? (
                <Swiper
                  effect={"cards"}
                  grabCursor={true}
                  centeredSlides={true}
                  slidesPerView={2}
                  cardsEffect={{
                    perSlideOffset: 10,
                    perSlideRotate: 2,
                    rotate: true,
                    slideShadows: false,
                  }}
                  pagination={true}
                  navigation
                  className="mySwiper w-full"
                >
                  {readingList.map((book) => (
                    <SwiperSlide key={book.book.ISBN}>
                      <div className="group relative w-full h-[300px]">
                        <div className="absolute w-full h-full top-0 left-0 z-10 flex items-center justify-center opacity-0 bg-opacity-90 bg-gray-950 group-hover:opacity-100 duration-500">
                          <CiBookmarkRemove
                            onClick={() =>
                              removeFromReadingList(book.book.ISBN)
                            }
                            className="text-amber-400 text-6xl z-20 hover:cursor-pointer"
                          />
                        </div>
                        <Image
                          src={book.book.cover}
                          alt=""
                          fill={true}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                <h2>No tienes libros por leer.</h2>
              )}
            </section>
          </div>
        </aside>
      </section>
    </main>
  );
}
