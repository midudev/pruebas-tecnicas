
import { useContext } from "react";
import { BooksContext } from "../../context/BooksContextProvider";
import { BiBookAdd } from "react-icons/bi";
import FilterBooks from "./FilterBooks";
import BooksAvaliable from "./BooksAvaliable";


function ListBooks() {

 /**
  * @description usando el contexto global para acceder a los estados y funciones
  */
  const {books, setBooks, setReadingList, readingList} = useContext(BooksContext);

  
  // agregar un libro a la lista de lectura y actualizar el localStorage
  const addToRedingList = (book) => {
    setReadingList((prevReadingList) => [...prevReadingList, book]);

    // obtener la data actualizada del localStorage
    const updateReadingList = [...readingList, book];

    localStorage.setItem(
      "readingList",
      JSON.stringify(updateReadingList)
    );

    // removemos el libro de la lista de libros
    setBooks((prevBooks) => prevBooks.filter((b) => b !== book));

    // eliminamos completamente el libro de la lista de libros
    localStorage.removeItem(book);
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 ">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Listado de Libros
        </h2>
        <FilterBooks/>
        <BooksAvaliable/>
      </div>

      <div className=" mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
        {books.map((book) => (
          <div key={book.book.ISBN} className="shadow-xl">
            <div className=" w-full overflow-hidden rounded-md bg-gray-200  lg:h-80 ">
              <img
                src={book.book.cover}
                alt="books"
                className="h-full w-full object-cover object-center lg:h-full lg:w-full hover:opacity-75"
              />
            </div>
            <div className="mt-4 flex justify-between h-56  p-2">
              <div>
                <h3 className="text-lg text-gray-800">
                  <span aria-hidden="true" className=" inset-0" />
                  {book.book.title}
                  <small className="ml-3 font-light">{book.book.year}</small>
                </h3>
                <p>{book.book.synopsis}</p>
                <p>Año: {book.book.year}</p>
              </div>
            </div>
            <div className="flex justify-center items-center p-4 mt-2 ">
              <button onClick={() => addToRedingList(book)}  className="bg-cyan-400 p-4 rounded-md hover:bg-cyan-300 flex justify-center items-center">
                <BiBookAdd className="text-2xl mr-2" />
                add book
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListBooks;
