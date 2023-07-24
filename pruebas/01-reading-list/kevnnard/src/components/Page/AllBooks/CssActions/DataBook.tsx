import { DataBookInterface } from "@/interfaces/Book.interface";
import classNames from "classnames";
import AddToRead from "../DispatchActions/AddToRead";

const DataBook = ({
  index,
  item,
  dataStatus,
  setDataStatus,
  accessKey,
  setAccessKey,
}: DataBookInterface) => {
  const cn = classNames;

  const handleOnMouseLeave = () => {
    setDataStatus(false);
    setAccessKey(0);
  };

  const classes: any = {
    info: cn({
      "translate-x-0": dataStatus,
      "translate-x-[1000rem]": !dataStatus,
    }),
  };
  return (
    <>
      {dataStatus && index === accessKey && (
        <div
          className={`${classes.info} absolute top-0 bottom-0 left-0 right-0 backdrop-blur-md p-3 rounded-2xl flex flex-col justify-center items-start transition ease-in-out duration-500 select-none`}
          onMouseLeave={handleOnMouseLeave}
        >
          <h3 className="text-4xl text-left pb-1">{item.book.title}</h3>
          <p className="text-sm">{item.book.synopsis}</p>
          <p className="text-md">Genero: {item.book.genre}</p>
          <p className="text-md">Año: {item.book.year}</p>
          <p className="text-md ">Autor: {item.book.author.name}</p>
          {/* ↓↓ ACCION_DISPATCH -  BOTON DE ACCION PARA AGREGAR LIBRO A LISTA DE LIBROS POR LEER - POR PARAMETRO SE PASA IDENTIFIACDOR DEL LIBRO ISBN */}
          <AddToRead item={item} />
        </div>
      )}
    </>
  );
};

export default DataBook;
