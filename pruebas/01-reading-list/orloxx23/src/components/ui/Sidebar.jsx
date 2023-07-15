import React, { useContext, useEffect, useState } from "react";
import pageConfig from "@/utils/constants/pageConfig";
import { SiBookstack } from "react-icons/si";
import Link from "next/link";
import getCategories from "@/utils/functions/categories";
import { BooksContext } from "@/context/BooksContext";
import { CoreContext } from "@/context/CoreContext";
import { LeftList } from "..";

/**
 * Componente Sidebar
 * @returns {JSX.Element} - Elemento JSX que representa la barra lateral con opciones de filtrado y lista de lectura.
 */
export default function Sidebar() {
  const [categories, setCategories] = useState([]);
  const { filterBooksByCategory, filterCategories, list } =
    useContext(BooksContext);
  const { toggleDrawer, drawerOpen } = useContext(CoreContext);

  // Obtener categorías
  useEffect(() => {
    const res = getCategories();
    setCategories(res);
  }, []);

  return (
    <>
      {/* Fondo oscuro en pantallas pequeñas */}
      <div
        className={`w-screen h-screen bg-[#000000] fixed md:hidden z-20 ${
          drawerOpen ? "opacity-50" : "opacity-0 pointer-events-none"
        } duration-300`}
        onClick={toggleDrawer}
      ></div>

      {/* Barra lateral */}
      <aside
        className={`w-3/4 md:w-1/5 h-screen bg-text shadow-2xl flex-col z-20 md:z-10 flex fixed md:static duration-300 md:translate-x-0 overflow-y-hidden ${
          drawerOpen ? "" : "transform -translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="w-full p-[2.35rem] grid place-content-center">
          <Link href="/">
            <h1 className="font-bold text-3xl flex gap-2">
              <SiBookstack />
              {pageConfig.title}
            </h1>
          </Link>
        </div>

        <hr className="mx-4 opacity-50" />

        {/* Categorías */}
        <div className="h-full w-full">
          <ul className="w-full h-2/6 overflow-y-auto p-4 flex flex-col gap-2">
            {categories.map((category) => (
              <SidebarItem
                key={category}
                text={category}
                action={filterBooksByCategory}
                active={filterCategories?.includes(category)}
              />
            ))}
          </ul>
          <hr className="mx-4 my-2 opacity-50" />
          <p className="pl-4 font-bold text-xl">
            Lista de lectura ({list?.length || 0})
          </p>

          {/* Lista de lectura */}
          <LeftList />
        </div>
      </aside>
    </>
  );
}

/**
 * Componente SidebarItem
 * @param {string} text - Texto del elemento de categoría.
 * @param {function} action - Función para filtrar libros por categoría.
 * @param {boolean} active - Indica si el elemento de categoría está activo.
 * @returns {JSX.Element} - Elemento JSX que representa un elemento de categoría en la barra lateral.
 */
function SidebarItem({ text, action, active }) {
  return (
    <li
      className={`font-medium text-xl rounded-md cursor-pointer hover:bg-[#ffffff33] duration-200 ${
        active && "bg-[#ffffff22]"
      }`}
    >
      <button
        className="w-full p-2 flex justify-between"
        onClick={() => action(text)}
      >
        {text}
      </button>
    </li>
  );
}
