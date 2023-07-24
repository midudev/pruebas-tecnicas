/* eslint-disable @next/next/no-img-element */
import { IconsCatalog } from "@/Enums/Icons.enums";
import { useAppSelector } from "@/Hooks/useRedux";
import IconsComponent from "@/components/UI/Icons";
import { BookProps } from "@/interfaces/Book.interface";
import classNames from "classnames";
import ChangePriority from "../DispatchActions/ChangePriority";
import RemoveBook from "../DispatchActions/RemoveBook";
import SortByPriority from "../DispatchActions/SortByPriority";

const BooksToRead = ({
  statusSidebar,
  handleShowSidebar,
}: {
  statusSidebar: boolean;
  handleShowSidebar: () => void;
}) => {
  const cn = classNames;
  const { booksToRead } = useAppSelector((state) => state.books);

  const classes = {
    sidebar: cn({
      "translate-x-0 opacity-1": statusSidebar,
      "translate-x-[1000rem] opacity-0": !statusSidebar,
    }),
  };
  return (
    <aside
      className={`${classes.sidebar} fixed top-0 left-0 w-full h-[100vh] backdrop-blur-xl z-[300] transition ease-in-out duration-500`}
    >
      <div className="bg-neutral-900 fixed w-[80%] xl:max-w-[30%] h-screen right-0 top-0 p-10 overflow-y-scroll">
        {/* ↓↓ COMPONENTE PARA UTILZIAR ICONOS SVG POR MEDIO DE UN CATALOGO "IconsCatalog" ↓↓  */}
        <IconsComponent
          icon={IconsCatalog.CLOSE}
          fill="#f2f2f2"
          className="w-14 fixed top-[50%] right-0 p-1 rounded-s-lg bg-black hover:bg-neutral-900 hover:scale-[1.1] transition ease-in-out duration-300 cursor-pointer"
          onClick={handleShowSidebar}
        />
        <h2 className="text-3xl">Libros por Leer = {booksToRead.length} </h2>
        {/* ↓↓ SELECT - ACCION PARA ORDENAR POR PRIORIDAD EN LISTA DE LIBROS POR LEER ↓↓  */}
        <SortByPriority />
        {/* ↓↓  MAPEO DE LIBROS EN LA LISTA DE LIBROS POR LEER booksToRead ↓↓  */}
        <ul className="grid grid-cols-2 p-5 gap-5 overflow-y-auto">
          {booksToRead.length > 0 ? (
            booksToRead.map((item: BookProps, index: number) => (
              <li key={index} className="relative">
                <img
                  src={item.book.cover}
                  alt={item.book.title}
                  width="100%"
                  height="100%"
                />
                {/* ↓↓  SUB-COMPONENTE PARA ELIMINAR LIBROS DE LA LISTA LIBROS POR LEER - ICONO X  ↓↓  */}
                <RemoveBook item={item} />
                {/* ↓↓ SUB-COMPONENTE PARA CAMBIAR PRIORIDAD DE LIBRO DE 1 A 3 ESTRELLAS - ICONOS DE ESTRELLAS */}
                <ChangePriority item={item} />
              </li>
            ))
          ) : (
            <p>No Hay Libros para Leer</p>
          )}
        </ul>
      </div>
    </aside>
  );
};

export default BooksToRead;
