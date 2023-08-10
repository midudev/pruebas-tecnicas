import { BiBookAdd } from "react-icons/bi";
import { useContext } from "react";
import { BooksContext } from "../../context/BooksContextProvider";

function CardBooks({dataBooks, addRemove}) {

  // usando el contexto global
  const { addToRedingList, removeBook} = useContext(BooksContext);

  return (
    <>
    {dataBooks?.map((item) => (
      <div key={item.book.ISBN} className="shadow-xl">
        <div className=" w-full h-auto overflow-hidden rounded-md bg-gray-200  ">
          <img
            src={item.book.cover}
            alt="books"
            className="h-full w-full object-cover object-center lg:h-full lg:w-full hover:opacity-75"
          />
        </div>
        <div className="mt-4 flex justify-between h-56  p-2">
          <div>
            <h3 className="text-lg text-gray-800">
              <span aria-hidden="true" className=" inset-0" />
              {item.book.title}
              <small className="ml-3 font-light">{item.book.year}</small>
            </h3>
            <p>{item.book.synopsis}</p>
            <p>Año: {item.book.year}</p>
          </div>
        </div>
        <div className="flex justify-center items-center p-4 mt-2 ">
          {addRemove ? (
             <button onClick={() => removeBook(item.book.ISBN)} className="bg-red-400 p-4 rounded-md hover:bg-red-300 flex justify-center items-center">Eliminar</button>
          ) : (
            <button onClick={() => addToRedingList(item.book.ISBN)} className="bg-cyan-400 p-4 rounded-md hover:bg-cyan-300 flex justify-center items-center"><BiBookAdd className="text-white text-2xl" /> Agregar</button>
          )
          }
        </div>
      </div>
    ))}
  </>
  )
}

export default CardBooks;
