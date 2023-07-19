

function Cards({title, year, synopsis, cover, addToRedingList, book, index} = {}) {
  return (
      <div key={index} className="relative border">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80 ">
              <img
                src={cover}
                alt="books"
                className="h-full w-full object-cover object-center lg:h-full lg:w-full hover:opacity-75"
              />
            </div>
            <div className="mt-4 flex justify-between h-56  p-2">
              <div>
                <h3 className="text-lg text-gray-800">
                  <span aria-hidden="true" className="absolute inset-0" />
                  {title}
                  <small className="ml-3 font-light">{year}</small>
                </h3>
                <p>{synopsis}</p>
                <p>Año: {year}</p>
              </div>
            </div>
            <div className="flex justify-center items-center p-4 mt-2 relative">
              <button onClick={() => addToRedingList(book)}  className="bg-cyan-400 p-4 rounded-md hover:bg-cyan-300 flex justify-center items-center">
                <BiBookAdd className="text-2xl mr-2" />
                add book
              </button>
          </div>
      </div>
  )
}

export default Cards