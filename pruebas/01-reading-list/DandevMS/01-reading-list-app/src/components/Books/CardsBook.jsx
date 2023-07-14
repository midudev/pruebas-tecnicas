import { useState } from "react"
import data from '../../data/books.json'


function CardsBook() {

  const [library, setLibrary] = useState(data.library)
  

  return (
    <div >
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">Listado de Libros</h2>

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {library.map((book, index) => (
          <div key={index} className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                src={book.book.cover}
                alt="books"
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <a href="">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {book.book.title}
                  </a>
                </h3>

                <p>{book.book.synopsis}</p>
              
              </div>
             
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default CardsBook