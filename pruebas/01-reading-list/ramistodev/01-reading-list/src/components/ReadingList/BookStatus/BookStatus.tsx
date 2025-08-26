import { useBookStatus } from "./useBookStatus";
import { BookList } from "../../../types.d";

export function BookStatus() {
  const { books, selectedBooks, bookStatus, updateBookStatus } =
    useBookStatus();

  return (
    <nav className="sm:[w-full] md:w-[700px] lg:w-[1000px] xl:w-[1200px] relative  flex gap-10 justify-start items-center px-5 border-b-[2px] border-slate-950 ">
      <div
        onClick={() => updateBookStatus(BookList.AVAILABLE)}
        className={`relative z-10 text-xs md:text-sm lg:text-lg font-semibold p-2 cursor-pointer border-b-[4px]  ${bookStatus === BookList.AVAILABLE ? "border-b-slate-950 opacity-100" : "border-b-transparent opacity-50"} transition-all duration-300`}
      >
        <p>Libros Disponibles ({books.length})</p>
      </div>
      <div
        onClick={() => updateBookStatus(BookList.SELECTED)}
        className={`relative z-10 text-xs md:text-sm lg:text-lg font-semibold p-2 cursor-pointer border-b-[4px] ${bookStatus === BookList.SELECTED ? "border-b-slate-950 opacity-100" : "border-b-transparent opacity-50"} transition-all duration-300`}
      >
        <p>
          Libros Selecionados (
          {selectedBooks === null ? 0 : selectedBooks.length})
        </p>
      </div>
    </nav>
  );
}
