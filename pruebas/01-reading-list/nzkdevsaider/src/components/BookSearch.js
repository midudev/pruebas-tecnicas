"use client";
import { Input } from "@myreading/components/ui/input";
import { Card } from "@myreading/components/ui/card";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Slider } from "@myreading/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@myreading/components/ui/select";
import {
  getBooks,
  getBookMaxPages,
  getBookGenres,
} from "@myreading/lib/bookSearch";
import { useContext } from "react";
import { BookContext } from "@myreading/context/BookContext";
import { Button } from "./ui/button";
import { PlusCircledIcon } from "@radix-ui/react-icons";

const BookSearch = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("all");
  const [pages, setPages] = useState(getBookMaxPages());
  const { watchlist, addWatchlist } = useContext(BookContext);

  const handleAddButton = (book) => {
    addWatchlist(book);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const search = event.target.value;
    setSearch(search);
  };

  useEffect(() => {
    const books = getBooks(search, genre, pages);
    const filter = books.filter(
      ({ book }) => !watchlist?.find((item) => item.ISBN === book.ISBN)
    );

    setBooks(filter);
  }, [search, genre, pages, watchlist]);

  return (
    <section className="search space-y-5">
      <div className="filter flex flex-col lg:flex-row justify-start lg:items-center gap-5">
        <div className="flex flex-col justify-start items-start space-y-3">
          <p className="text-sm mr-2 font-semibold">Filtrar por páginas</p>
          <span className="text-sm text-gray-500">{pages} páginas o menos</span>
          <Slider
            className="w-full lg:w-72"
            defaultValue={[pages]}
            max={getBookMaxPages()}
            step={10}
            onValueChange={setPages}
            inverted
          />
        </div>
        <div className="flex flex-col justify-start items-start space-y-3">
          <p className="text-sm mr-2 font-semibold">Filtrar por género</p>
          <Select onValueChange={setGenre}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Selecciona el género" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Género</SelectLabel>
                <SelectItem value="all">Todos</SelectItem>
                {getBookGenres().map((genre) => (
                  <SelectItem key={genre} value={genre}>
                    {genre}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <Input
        onChange={handleSearch}
        type="search"
        name="search"
        placeholder="Buscar"
      />

      <div className="grid  grid-cols-2 lg:grid-cols-3 gap-4">
        {books.map(({ book }) => (
          <Card
            key={book.ISBN}
            className="overflow-hidden lg:flex lg:justify-start hover:shadow-lg hover:border-slate-400 hover:border-opacity-50 transition-all duration-300 p-3 lg:max-w-2xl w-auto h-auto"
          >
            <div class="lg:flex space-y-3 lg:space-x-5">
              <div class="lg:shrink-0 flex justify-center items-center">
                <Image
                  src={book.cover}
                  alt={book.title}
                  className="rounded-sm"
                  width={100}
                  height={100}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div class="lg:flex lg:flex-col lg:justify-center space-y-4">
                <div className="lg:flex lg:flex-col lg:justify-center">
                  <h3 className="text-lg font-bold">{book.title}</h3>
                  <p className="text-sm text-gray-500">{book.author.name}</p>
                </div>
                <div className="flex flex-row justify-center lg:justify-start items-center gap-5">
                  <Button
                    onClick={() => {
                      handleAddButton(book);
                    }}
                    variant="outline"
                    size="icon"
                  >
                    <PlusCircledIcon className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
        {books.length === 0 && watchlist?.length > 0 && (
          <div className="col-span-full flex flex-col justify-center items-center">
            <h3 className="text-4xl font-bold">
              ¡Te has terminado de leer todo!
            </h3>
          </div>
        )}
        {books.length === 0 && watchlist?.length === 0 && (
          <div className="col-span-full flex flex-col justify-center items-center">
            <h3 className="text-2xl font-bold">No se encontraron libros.</h3>
            <p className="text-sm">Intenta con otro término de búsqueda.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default BookSearch;
