import { useAvailableBooks } from '../../hooks'

export const AvailableBooks = () => {
  const { availableBooks, availableReadList, availableFilteredBooks, isTheSameLength } = useAvailableBooks()

  return (
    <div className=" grid  max-w-7xl mx-auto">
      <h3 className="font-bold text-2xl">
        Available books: <span className=" text-blue-500">{availableBooks}</span>
      </h3>
      <h3 className="font-bold text-2xl">
        Readlist books: <span className=" text-blue-500">{availableReadList}</span>
      </h3>
      {!isTheSameLength && (
        <h4 className="font-semibold text-xl">
          Books found: <span className=" text-blue-500">{availableFilteredBooks}</span>
        </h4>
      )}
    </div>
  )
}
