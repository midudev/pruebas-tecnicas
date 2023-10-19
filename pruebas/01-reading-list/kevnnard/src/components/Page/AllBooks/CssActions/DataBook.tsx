import { IconsCatalog } from "@/Enums/Icons.enums";
import IconsComponent from "@/components/UI/Icons";
import { BookProps } from "@/interfaces/Book.interface";
import classNames from "classnames";
import { useState } from "react";
import AddToRead from "../DispatchActions/AddToRead";

const DataBook = ({ book }: { book: BookProps }) => {
  const cn = classNames;
  const [dataStatus, setDataStatus] = useState<boolean>(false);

  const handleClickOpen = () => {
    setDataStatus(true);
    setTimeout(() => {
      setDataStatus(false);
    }, 10000);
  };

  const classes: any = {
    watch: cn({
      "translate-x-0": dataStatus,
      "-translate-x-[1000rem]": !dataStatus,
    }),
  };
  return (
    <>
      <IconsComponent
        icon={IconsCatalog.SEE}
        icon2={IconsCatalog.SEE2}
        className="w-8 bg-neutral-800 p-1 rounded-full absolute bottom-1 right-1 z-10 hover:scale-[.90] cursor-pointer"
        fill="#f2f2f2"
        strokeWidth={2}
        onClick={handleClickOpen}
      />
      <div
        className={`${classes.watch} absolute top-0 bottom-0 left-0 right-0 backdrop-blur-md p-3 rounded-2xl flex flex-col justify-center items-start transition ease-in-out duration-200 select-none`}
      >
        <h3 className="text-4xl text-left pb-1">{book.book.title}</h3>
        <p className="text-sm">{book.book.synopsis}</p>
        <p className="text-md">Genero: {book.book.genre}</p>
        <p className="text-md">Año: {book.book.year}</p>
        <p className="text-md ">Autor: {book.book.author.name}</p>
        {/* ↓↓ ACCION_DISPATCH -  BOTON DE ACCION PARA AGREGAR LIBRO A LISTA DE LIBROS POR LEER - POR PARAMETRO SE PASA IDENTIFIACDOR DEL LIBRO ISBN */}
        <AddToRead book={book} />
      </div>
    </>
  );
};

export default DataBook;
