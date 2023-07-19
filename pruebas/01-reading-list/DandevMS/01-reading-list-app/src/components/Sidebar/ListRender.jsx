import { useContext } from "react"
import { BooksContext } from "../../context/BooksContextProvider"



function ListRender() {

  const { readingList, removeFromReadingList} = useContext(BooksContext);

  console.log(readingList)

  return (
    <div className="grid grid-cols-2 gap-3 mt-4">
      {
        readingList.map((book, index) => (
          <div key={index} className="relative border ">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80 ">
            <img
              src={book.book.cover}
              alt="books"
              className="h-full w-full object-cover object-center lg:h-full lg:w-full hover:opacity-75"
            />
          </div>
          <div className="mt-4 flex justify-between h-56  p-2">
            <div>
              <h3 className="text-lg text-gray-800">
                <span aria-hidden="true" className="absolute inset-0" />
                {book.book.title}
                <small className="ml-3 font-light">{book.book.year}</small>
              </h3>
              <p>{book.book.synopsis}</p>
              <p>Año: {book.book.year}</p>
            </div>
          </div>
          {/* <div className="flex justify-center items-center p-4 mt-2 relative">
            <button onClick={() => addToRedingList(book)}  className="bg-cyan-400 p-4 rounded-md hover:bg-cyan-300 flex justify-center items-center">
              <BiBookAdd className="text-2xl mr-2" />
              add book
              </button>
           
          </div> */}
        </div>
        ))
      }
      
    </div>
  )
}

export default ListRender