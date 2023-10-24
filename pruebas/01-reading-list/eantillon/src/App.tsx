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
  const [filtros, setFiltros] = useState({
    genero: "Todos",
    paginas: 0,
    max: 0,
  });

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
        const max = data.library.reduce((prev: JsonBook, current: JsonBook) => {
          return prev.book.pages > current.book.pages ? prev : current;
        }).book.pages;

        setFiltros((prev) => {
          return {
            ...prev,
            max,
          };
        });
      })
      .catch((e: Error) => {
        console.log(e.message);
      });
  };
  useEffect(() => {
    fetchJson();
  }, []);
  useEffect(() => {
    async function actualizarLibros() {
      const data = await fetch("../../books.json");
      const json = await data.json();

      let libros = json.library;

      if (filtros.genero === "Todos") {
        if (filtros.paginas != 0) {
          libros = json.library.filter((item: JsonBook) => {
            return item.book.pages <= filtros.paginas;
          });
        } else {
          libros = json.library;
        }
      }
      if (filtros.genero !== "Todos") {
        libros = json.library.filter((item: JsonBook) => {
          return item.book.genre === filtros.genero;
        });
      }

      if (filtros.paginas != 0) {
        libros = libros.filter((item: JsonBook) => {
          return item.book.pages <= filtros.paginas;
        });
      }

      setLibrary(() => {
        return {
          library: libros,
        };
      });
    }
    actualizarLibros();
  }, [filtros]);

  return (
    <div className="w-full h-screen overflow-y-auto flex flex-col justify-between items-center">
      <h2 className="my-6 scroll-m-20 border-b pb-2 text-4xl font-bold tracking-tight transition-colors">
        Reading List 📖
      </h2>
      <div className="p-4 w-full max-w-screen-xl flex flex-col  sm:flex-row  gap-6 sm:gap-16 justify-center items-start mb-4">
        <div className="w-full sm:w-1/3 flex flex-col gap-2">
          <h3 className="text-xl">
            Filtrar por páginas:{" "}
            <span className="font-medium text-slate-700 text-lg text-ellipsis">
              {filtros.paginas}
            </span>
          </h3>
          <Slider
            defaultValue={[0]}
            max={filtros.max}
            step={1}
            className="w-full mt-4"
            onValueChange={(value) => {
              console.log({ value });
              setFiltros((prev) => {
                return {
                  ...prev,
                  paginas: value[0],
                };
              });
            }}
          />
        </div>
        <div className="w-full sm:w-auto flex flex-col gap-2">
          <h3 className="text-xl">Filtrar por género</h3>
          <Select
            onValueChange={(value) => {
              setFiltros((prev) => {
                return {
                  ...prev,
                  genero: value,
                };
              });
            }}
          >
            <SelectTrigger className="w-full sm:w-64 ">
              <SelectValue placeholder="Selecciona un género" />
            </SelectTrigger>
            <SelectContent defaultValue={"Todos"}>
              <SelectGroup>
                <SelectLabel>Géneros</SelectLabel>
                <SelectItem value="Todos">Todos</SelectItem>
                {generos.map((genero, index) => {
                  return (
                    <SelectItem value={genero} key={"genero" + index}>
                      {genero}
                    </SelectItem>
                  );
                })}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="w-full max-w-screen-xl flex justify-center mx-auto">
        <div className="grid grid-cols-1 px-8 sm:grid-cols-3 lg:grid-cols-4 gap-4 pb-10 justify-center">
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
