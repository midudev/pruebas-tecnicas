import { useAppSelector } from "@/Hooks/useRedux";
import { BookProps } from "@/interfaces/Book.interface";
import { useState } from "react";
import CanvasBook from "./CanvasBook3D";
import DataBook from "./CssActions/DataBook";
import Info from "./CssActions/Info";
import FilterBooks from "./DispatchActions/FilterBooks";

const AllBooksComponent = () => {
  const [dataStatus, setDataStatus] = useState<boolean>(false);
  const [accessKey, setAccessKey] = useState<number>();

  const { booksAvailable, filter } = useAppSelector((state) => state.books);

  const handleOnMouseEnter = (index: number) => {
    setAccessKey(index);
    setDataStatus(true);
  };

  return (
    <section className="py-20 bg-[#121212]">
      <h1 className="text-5xl py-10 text-center">
        Todos los libros disponibles - {booksAvailable.length}
      </h1>
      <div className="flex flex-col lg:flex-row justify-center lg:justify-start books-center lg:items-start px-10">
        {/* ↓↓ ACCION_DISTPACH - FILTROS DE LIBROS DISPONIBLES [ GENERO - PAGINAS - TITULO ] ↓↓ */}
        <FilterBooks filter={filter} />
        <ul className="w-full min-h-[50vh] flex flex-wrap gap-24 justify-center items-center">
          {booksAvailable.map((book: BookProps, index: number) => (
            <ol
              className="relative w-[350px] h-[350px] rounded-2xl"
              key={index}
              onDoubleClick={() => handleOnMouseEnter(index)}
            >
              {/* ↓↓ ACCION_CSS PARA MOSTRAR UNA BREVE INSTRUCCION AL PASAR EL MOUSE EN EL ICONO DE INFORMACION - HOVER ↓↓  */}
              <Info />
              {/* ↓↓ SUB-COMPONENTE PARA RENDERIZAR EL MODELO 3D CON SU RESPECTIVA PORTADA SE PASA COMO PARAMETRO IDENTIFICADOR DE LIBRO ISBN  img > 978-9****** ↓↓ */}
              <CanvasBook img={book.book.ISBN} />
              {/* ↓↓ ACCION_CSS PARA MOSTRAR LA DATA DEL LIBRO AL HACER DOBLE CLICK ↓↓ */}
              <DataBook
                index={index}
                item={book}
                dataStatus={dataStatus}
                setDataStatus={setDataStatus}
                accessKey={accessKey}
                setAccessKey={setAccessKey}
              />
            </ol>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AllBooksComponent;
