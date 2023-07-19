import { useDispatch } from 'react-redux'
import { removeDropDownFilter } from '../redux/booksSlice'
import { AiFillCloseCircle } from 'react-icons/ai'

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
        <div className="flex flex-col gap-2 sm:gap-1 p-3 min-h-[4rem] bg-gray-001 items-center justify-center rounded-lg px-2 border border-purple-600">
          <p className="text-center">Generos seleccionados:</p>
          <div className=" inline-flex gap-4 items-center justify-center flex-wrap">
            {selectedFilters.map((filter) => (
              <button
                className="inline-flex items-center gap-1 justify-center bg-purple-600 rounded-lg px-2"
                key={filter}
                onClick={() => dispatch(removeDropDownFilter(filter))}
              >
                {filter}
                <AiFillCloseCircle />
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
