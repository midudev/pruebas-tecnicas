import { IconsCatalog } from "@/Enums/Icons.enums";
import { useAppSelector } from "@/Hooks/useRedux";
import IconsComponent from "@/components/UI/Icons";
import { useState } from "react";
import BooksToRead from "./BooksToRead";

const SideBarHeader = () => {
  const [statusSidebar, setStatusSidebar] = useState<boolean>(false);

  const { booksToRead } = useAppSelector((state) => state.books);

  const handleShowSidebar = async () => {
    setStatusSidebar((state) => !state);
    document.body.classList.toggle("cart-open");
  };

  return (
    <>
      {/* ↓↓ COMPONENTE PARA UTILZIAR ICONOS SVG POR MEDIO DE UN CATALOGO "IconsCatalog" ↓↓  */}
      <IconsComponent
        icon={IconsCatalog.LIKE}
        fill="#000"
        isSolid
        className="w-14 fixed z-[200] top-[50%] right-0 p-1 rounded-s-lg bg-white hover:bg-neutral-200 hover:scale-[1.1] transition ease-in-out duration-300 cursor-pointer"
        onClick={handleShowSidebar}
      />
      {/* ↓↓ CANTIDAD DE LIBROS AÑADIDOS A LISTA DE LIBROS POR LEER ↓↓ */}
      <span className="fixed z-[200] top-[49%] right-11 bg-red-500 px-2 rounded-full text-white font-Anton">
        {booksToRead.length}
      </span>
      {/* ↓↓ SUB-COMPONENT PARA ORGANIZAR Y MOSTRAR LOS LIBROS AGREGADOS A LEER ↓↓ */}
      <BooksToRead
        statusSidebar={statusSidebar}
        handleShowSidebar={handleShowSidebar}
      />
    </>
  );
};

export default SideBarHeader;
