import { SearchIcon } from "../utils/Icons";
import {
  AtributoBook,
  AtributoBookNames,
  BookStatus,
} from "@/context/helpers/interfaces/types";
import useLibrary from "@/hooks/useLibrary";
import Swal from "sweetalert2";

function SearchMyBooks({ setBooks }: any) {
  const { getMyLibraryFilter, getDashboardBiblioteca, getMyBooksFilter }: any =
    useLibrary();

  const handleBook = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const { data, filtro } = Object.fromEntries(new window.FormData(form));

    if (filtro === "Filtro") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Debe seleccionar un filtro",
      });
      return;
    }

    const filteredBooks = getMyLibraryFilter(data, filtro);

    if (filteredBooks == null || filteredBooks.books.length === 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No hay resultados",
      });
      return;
    }

    setBooks(filteredBooks?.books);
  };

  function handleChangeBooks(status: BookStatus) {
    const booksNews = getMyBooksFilter(status);
    setBooks(booksNews);
  }
  const { totalRead, totalReading, totalLibrary } = getDashboardBiblioteca();

  return (
    <section className="w-full flex flex-col gap-y-8 lg:gap-y-0 lg:flex-row justify-between items-center pb-10">
      <div className="flex flex-col gap-y-3 md:flex-row md:gap-y-0 justify-start md:gap-x-5 items-center md:w-2/4">
        <button
          disabled={totalLibrary === 0}
          className={`${
            totalLibrary === 0
              ? "bg-gray-300"
              : "bg-white  hover:bg-slate-300/90 cursor-pointer focus:ring-blue-300 focus:ring-4 focus:outline-none"
          } flex items-center shrink-0 shadow-sm rounded-lg px-5 py-3 text-black`}
          onClick={() => handleChangeBooks(BookStatus.IN_LIBRARY)}
        >
          {totalLibrary} En Biblioteca
        </button>
        <button
          disabled={totalReading === 0}
          className={`${
            totalReading === 0
              ? "bg-gray-300"
              : "bg-white  hover:bg-slate-300/90 cursor-pointer focus:ring-blue-300 focus:ring-4 focus:outline-none"
          } flex items-center shrink-0 rounded-lg px-5 py-3 text-black shadow-sm`}
          onClick={() => handleChangeBooks(BookStatus.READING)}
        >
          {totalReading} Leyendo
        </button>
        <button
          disabled={totalRead === 0}
          className={`${
            totalRead === 0
              ? "bg-gray-300"
              : "bg-white  hover:bg-slate-300/90 cursor-pointer focus:ring-blue-300 focus:ring-4 focus:outline-none"
          } flex items-center shrink-0 rounded-lg px-5 py-3 text-black shadow-sm`}
          onClick={() => handleChangeBooks(BookStatus.READ)}
        >
          {totalRead} Leidos
        </button>
      </div>

      <form onSubmit={handleBook} className="flex flex-col md:flex-row gap-5">
        <div className="relative mx-auto md:mx-0">
          <input
            type="text"
            name="data"
            placeholder="Buscar..."
            className="w-full rounded-full border-gray-200 py-4 px-6 shadow-sm text-lg md:text-xl"
          />

          <span className="absolute inset-y-0 end-3 grid w-10 place-content-center">
            <button type="submit" className="text-gray-600 hover:text-gray-700">
              <SearchIcon />
            </button>
          </span>
        </div>

        <select
          name="filtro"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-lg md:text-xl rounded-xl focus:ring-blue-500 focus:border-blue-500 p-2.5 max-w-[350px] mx-auto md:mx-0"
        >
          <option defaultValue="true">Filtro</option>
          {Object.keys(AtributoBookNames).map((key) => (
            <option key={key} value={key}>
              {AtributoBookNames[key as AtributoBook]}
            </option>
          ))}
        </select>
      </form>
    </section>
  );
}

export default SearchMyBooks;
