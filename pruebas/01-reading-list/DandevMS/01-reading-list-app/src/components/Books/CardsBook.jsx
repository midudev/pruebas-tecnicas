import { useState } from "react"
import data from '../../data/books.json'
import {BiBookAdd} from 'react-icons/bi'
 

function CardsBook() {

  const [library, setLibrary] = useState(data.library)
  

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 ">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">Listado de Libros</h2>

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
        {library.map((book, index) => (
          <div key={index} className="group relative border">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                src={book.book.cover}
                alt="books"
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="mt-4 flex justify-between h-32 max-h-32 p-2">
              <div>
                <h3 className="text-lg text-gray-700">
                  <a href="">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {book.book.title}
                  </a>
                </h3>
                <p>{book.book.synopsis}</p>
              </div>
            </div>
             <div className="flex justify-center items-center p-4 mt-2 ">
                <button className="p-3 bg-cyan-400 rounded-md flex justify-center items-center"><BiBookAdd className="mr-4 text-2xl" /> Add Book</button>
              </div>
          </div>
          
        ))}
      </div>
    </div>

  )
}

export default CardsBook