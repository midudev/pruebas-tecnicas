import { useContext } from "react";
import { BooksContext } from "../../context/BooksContextProvider";
/* import FilterBooks from "./FilterBooks"; */
import BooksAvaliable from "./BooksAvaliable";
import CardBooks from "./CardBooks";
import {useBooks} from "../../hooks/useBooks";


function ListBooks() {

  // usando el contexto global
  const {books} = useContext(BooksContext);

  // usando el hook personalizado
  const dataBooks = useBooks(books);

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 ">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Listado de Libros
        </h2>
       {/*  <FilterBooks/> */}
        <BooksAvaliable/>
      </div>

      {/* lista de libros */}
      <div className=" mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
        <CardBooks dataBooks={dataBooks} addRemove={false}/>
      </div>
      
    </div>
  );
}

export default ListBooks;
