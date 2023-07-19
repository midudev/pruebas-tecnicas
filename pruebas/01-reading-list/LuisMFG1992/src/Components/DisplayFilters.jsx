import { useDispatch } from 'react-redux'
import { removeDropDownFilter } from '../redux/booksSlice'

const DisplayFilters = ({ selectedFilters }) => {
  const dispatch = useDispatch()
  return (
    <div className="flex flex-col items-center gap-5 lg:flex-row">
      {/* <div className="bg-gray-001 w-[200px] inline-flex gap-5 h-[4.5rem] items-center justify-center rounded-lg px-2 border border-purple-600">
        <p>Paginas:</p>
        <p className="bg-purple-600 rounded-lg px-2">100</p>
      </div> */}

      {/* <div className="flex flex-col gap-1 p-5 h-[4.5rem] min-w-[100px] bg-gray-001 items-center justify-center rounded-lg px-2 border border-purple-600">
        <p>Paginas:</p>
        <div className=" inline-flex gap-5  items-center justify-center ">
          <p className="bg-purple-600 rounded-lg px-2">100</p>
        </div>
      </div> */}

      {selectedFilters.length !== 0 ? (
        <div className="flex flex-col gap-1 p-5 h-[4.5rem] bg-gray-001 items-center justify-center rounded-lg px-2 border border-purple-600">
          <p>Generos seleccionados:</p>
          <div className=" inline-flex gap-5  items-center justify-center ">
            {selectedFilters.map((filter) => (
              <button
                className="bg-purple-600 rounded-lg px-2"
                key={filter}
                onClick={() => dispatch(removeDropDownFilter(filter))}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default DisplayFilters
