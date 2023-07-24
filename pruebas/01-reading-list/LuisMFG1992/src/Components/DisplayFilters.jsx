import { useDispatch } from 'react-redux'
import { removeDropDownFilter } from '../redux/booksSlice'
import { AiFillCloseCircle } from 'react-icons/ai'

const DisplayFilters = ({ selectedFilters }) => {
  const dispatch = useDispatch()
  return (
    <div className="flex flex-col items-center gap-5 lg:flex-row">
      {/* <div className="flex flex-col gap-1 bg-gray-001 w-[100px] p-3 h-[4.9rem] justify-center rounded-lg px-2 border border-purple-600">
        <p className="text-center">Paginas:</p>
        <div className="w-full inline-flex items-center justify-center">
          <button className="inline-flex items-center gap-1 justify-center bg-purple-600 rounded-lg px-2">
            100
            <AiFillCloseCircle />
          </button>
        </div>
      </div> */}

      {selectedFilters.length !== 0 ? (
        <div className="flex flex-col gap-2 sm:gap-1 p-3 min-h-[4.5rem] bg-gray-001 items-center justify-center rounded-lg px-2 border border-purple-600">
          <p className="text-center">Generos seleccionados:</p>
          <div className="inline-flex gap-4 items-center justify-center flex-wrap">
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
