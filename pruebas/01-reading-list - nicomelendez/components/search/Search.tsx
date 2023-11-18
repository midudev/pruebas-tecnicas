import { SearchIcon } from "../utils/Icons";
import {
  AtributoBook,
  AtributoBookNames,
} from "@/context/helpers/interfaces/types";
import useLibrary from "@/hooks/useLibrary";
import Swal from "sweetalert2";

function Search() {
  const {
    getBooksFilter,
    changeFilteredBooks,
    resetFilteredBooks,
    getFueraDeBiblioteca,
    getLibrosGeneros,
    getChecked,
    changeChecked,
  }: any = useLibrary();

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

    const filteredBooks = getBooksFilter(data, filtro);

    if (filteredBooks == null || filteredBooks.books.length === 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No hay resultados",
      });
      return;
    }

    changeFilteredBooks(filteredBooks);
  };

  function handleChangeFilter() {
    changeChecked(!getChecked());

    if (getChecked()) {
      resetFilteredBooks();
      return;
    }
    getFueraDeBiblioteca();
  }

  return (
    <section className="w-full flex flex-col gap-y-8 lg:gap-y-0 lg:flex-row justify-between items-center pb-10">
      <div className="text-center pb-5 md:py-0 lg:text-left">
        <h3 className="font-bold text-black text-xl md:text-2xl lg:text-3xl">
          Cada libro cuenta una historia única.
        </h3>

        <p className="mt-1.5 text-sm md:text-lg text-gray-500">
          {getLibrosGeneros()}
        </p>
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

        <div className="flex flex-col items-center cursor-pointer">
          <p>{!getChecked() ? "Todos" : "Disponibles"}</p>
          <label
            htmlFor="AcceptConditions"
            className="relative h-8 w-12 cursor-pointer"
          >
            <input
              type="checkbox"
              id="AcceptConditions"
              className="peer sr-only"
              onClick={handleChangeFilter}
            />

            <span className="absolute inset-0 m-auto h-2 rounded-full bg-white"></span>

            <span className="absolute inset-y-0 start-0 m-auto h-6 w-6 rounded-full bg-blue-300 transition-all peer-checked:start-6 peer-checked:[&_>_*]:scale-0">
              <span className="absolute inset-0 m-auto h-4 w-4 rounded-full bg-white transition"></span>
            </span>
          </label>
        </div>
      </form>
    </section>
  );
}

export default Search;
