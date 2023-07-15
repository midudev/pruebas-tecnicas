import { BooksContext } from "@/context/BooksContext";
import { CoreContext } from "@/context/CoreContext";
import React, { useContext, useEffect } from "react";
import { IoMenuOutline, IoCloseSharp } from "react-icons/io5";
import { SlOptions } from "react-icons/sl";

/**
 * Componente Header
 * @returns {JSX.Element} - Elemento JSX que representa el encabezado de la página con opciones de filtrado y búsqueda.
 */
export default function Header() {
  // Obtener funciones y datos del contexto BooksContext
  const {
    filterCategories,
    bookCountByCategory,
    filterBooksByCategory,
    books,
    clearFilters,
    filterBooksByQuery,
    sortBooks,
    setPages,
    maxPages,
  } = useContext(BooksContext);

  // Obtener función del contexto CoreContext
  const { toggleDrawer } = useContext(CoreContext);

  // Estado para controlar la apertura de las opciones
  const [optionsOpen, setOptionsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-10 shadow-lg">
      <div className="md:h-28 w-full p-2 md:p-4 bg-primary flex items-center z-[9]">
        {/* Botón de menú móvil */}
        <div
          className="rounded-lg p-2 mr-2 grid place-content-center  md:hidden"
          onClick={toggleDrawer}
        >
          <IoMenuOutline size={32} />
        </div>

        <div className="w-full h-full flex justify-between items-center">
          <div className="flex flex-col gap-2 w-2/3 text-xl">
            <h2 className="md:text-3xl font-bold">
              Disponibles ({books.length})
            </h2>

            {/* Categorías seleccionadas */}
            <ul className="overflow-x-auto w-full gap-4 hidden md:flex">
              {filterCategories.length > 0 && (
                <li>
                  <button
                    onClick={clearFilters}
                    className="hover:bg-[#ffffff33] w-full px-2 py-1 duration-200 rounded-lg"
                  >
                    <p className="font-bold text-xs md:text-base">
                      Limpiar filtros
                    </p>
                  </button>
                </li>
              )}

              {filterCategories.map((category) => (
                <HeaderItem
                  key={category}
                  category={category}
                  count={bookCountByCategory[`${category}`] || 0}
                  action={filterBooksByCategory}
                />
              ))}
            </ul>
          </div>

          {/* Opciones */}
          <div className="w-1/3 flex gap-4 justify-end">
            {/* Abrir menú en pantallas pequeñas */}
            <div
              className="md:hidden p-4 hover:bg-[#ffffff33] rounded-lg text-white cursor-pointer"
              onClick={() => setOptionsOpen(!optionsOpen)}
            >
              {optionsOpen ? (
                <IoCloseSharp size={24} color="white" />
              ) : (
                <SlOptions size={24} />
              )}
            </div>

            {/* Opciones: Buscar, Ordenar y filtrar por número de páginas */}
            <div className="hidden md:flex gap-4">
              <SearchBar onChange={filterBooksByQuery} />
              <SortOptions onChange={sortBooks} />
              <FilterPages onChange={setPages} maxPages={maxPages} />
            </div>
          </div>
        </div>
      </div>

      {/* Menú de opciones para pantallas pequeñas */}
      <MobileHeaderOptions
        active={optionsOpen}
        functions={{ filterBooksByQuery, sortBooks, setPages }}
        params={{ maxPages }}
      />
    </header>
  );
}

/**
 * Componente HeaderItem
 * @param {string} category - Categoría del libro.
 * @param {number} count - Número de libros en la categoría.
 * @param {function} action - Función para filtrar libros por categoría.
 * @returns {JSX.Element} - Elemento JSX que representa un elemento de categoría en el encabezado.
 */
function HeaderItem({ category, count, action }) {
  return (
    <li
      key={category}
      className="bg-secondary text-xs md:text-md min-w-max text-white rounded-full px-3 py-1 flex justify-center items-center gap-4"
    >
      <p>
        {category}: {count}
      </p>
      <button onClick={() => action(category)} className="font-semibold">
        x
      </button>
    </li>
  );
}

/**
 * Componente MobileHeaderOptions
 * @param {boolean} active - Indica si las opciones están abiertas o cerradas.
 * @param {object} functions - Objeto que contiene las funciones de filtrado y búsqueda.
 * @param {object} params - Objeto que contiene los parámetros necesarios para las opciones.
 * @returns {JSX.Element} - Elemento JSX que representa las opciones del encabezado para pantallas pequeñas.
 */
function MobileHeaderOptions({ active, functions, params }) {
  return (
    <>
      <div
        className={`md:hidden fixed flex flex-col gap-2 w-full p-4 bg-primary overflow-x-auto z-[1] duration-300 ${
          !active && "translate-x-full"
        }`}
      >
        <SearchBar onChange={functions.filterBooksByQuery} />
        <SortOptions onChange={functions.sortBooks} />
        <FilterPages onChange={functions.setPages} maxPages={params.maxPages} />
      </div>
    </>
  );
}

/**
 * Componente SearchBar
 * @param {function} onChange - Función para manejar el cambio en la búsqueda de libros.
 * @returns {JSX.Element} - Elemento JSX que representa la barra de búsqueda en el encabezado.
 */
function SearchBar({ onChange }) {
  return (
    <>
      <input
        type="search"
        placeholder="Buscar..."
        className="px-4 py-2 bg-darkText rounded-lg border-none outline-none text-text"
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
}

/**
 * Componente SortOptions
 * @param {function} onChange - Función para manejar el cambio en la opción de ordenamiento.
 * @returns {JSX.Element} - Elemento JSX que representa las opciones de ordenamiento en el encabezado.
 */
function SortOptions({ onChange }) {
  return (
    <select
      className="px-4 py-2 bg-darkText text-text rounded-lg border-none outline-none"
      onChange={(e) => onChange(e.target.value)}
      defaultValue={"ordenar"}
    >
      <option disabled value="ordenar">
        Ordenar
      </option>
      <option value="asc">A-z</option>
      <option value="desc">Z-a</option>
    </select>
  );
}

/**
 * Componente FilterPages
 * @param {function} onChange - Función para manejar el cambio en el filtro de número de páginas.
 * @param {number} maxPages - Número máximo de páginas.
 * @returns {JSX.Element} - Elemento JSX que representa el filtro por número de páginas en el encabezado.
 */
function FilterPages({ onChange, maxPages }) {
  const [pages, setPages] = React.useState(0);

  useEffect(() => {
    onChange(pages);
  }, [pages]);

  return (
    <label className="flex flex-col-reverse gap-2 justify-center items-center">
      <input
        className="border-none outline-none appearance-none w-full h-2 bg-darkText rounded-lg cursor-ew-resize"
        type="range"
        min={0}
        max={maxPages}
        value={pages}
        onChange={(e) => {
          setPages(e.target.value);
        }}
      />
      <input
        type="number"
        className="w-full text-center bg-darkText text-text rounded-lg border-none outline-none "
        max={maxPages}
        value={pages}
        onChange={(e) => setPages(e.target.value)}
      />
    </label>
  );
}
