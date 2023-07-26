// import { Button } from "@/components/ui/button";
import { Book } from "./global/types";
import { Slider } from "@/components/ui/slider";
import { useState, useEffect } from "react";
import BookCard from "./components/BookCard";
import Favoritos from "./Favoritos";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Data {
  library: JsonBook[];
}

interface JsonBook {
  book: Book;
}

function App() {
  const [library, setLibrary] = useState<Data>();
  const [generos, setGeneros] = useState<string[]>([]);

  const fetchJson = () => {
    fetch("../../books.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setLibrary(data);
        const generos = data.library
          .map((item: JsonBook) => item.book.genre)
          .filter((value: string, index: number, self: string[]) => {
            return self.indexOf(value) === index;
          });
        setGeneros(generos);
      })
      .catch((e: Error) => {
        console.log(e.message);
      });
  };
  useEffect(() => {
    fetchJson();
  }, []);

  return (
    <div className="w-full h-screen overflow-y-auto flex flex-col justify-between items-center">
      <h2 className="my-6 scroll-m-20 border-b pb-2 text-4xl font-bold tracking-tight transition-colors">
        Reading List 📖
      </h2>
      <div className="p-4 w-full max-w-screen-2xl flex gap-16 justify-center items-start mb-4">
        <div className="w-1/3 flex flex-col gap-2">
          <h3 className="text-xl">Filtrar por páginas: <span className="font-medium text-slate-700">3000</span></h3>
          <Slider
            defaultValue={[33]}
            max={100}
            step={1}
            className="w-full mt-4"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-xl">Filtrar por género</h3>
          <Select >
            <SelectTrigger className="w-64">
              <SelectValue placeholder="Selecciona un género" />
            </SelectTrigger>
            <SelectContent defaultValue={"Todos"}>
              <SelectGroup>
                <SelectLabel>Géneros</SelectLabel>
                <SelectItem value="Todos">Todos</SelectItem>
                {generos.map((genero) => {
                  return <SelectItem value={genero}>{genero}</SelectItem>;
                })}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="w-full max-w-screen-2xl flex justify-center mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 pb-10">
          {library?.library.map((item: JsonBook) => {
            return <BookCard book={item.book} key={item.book.ISBN} />;
          })}
        </div>
        <Favoritos />
      </div>

      {/* sheet */}
    </div>
  );
}

export default App;
