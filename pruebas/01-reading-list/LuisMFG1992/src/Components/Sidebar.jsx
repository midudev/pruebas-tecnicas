import { HiChevronDoubleRight } from 'react-icons/hi'
import { useDispatch } from 'react-redux'
import { addRemoveBookReadingList } from '../redux/booksSlice'

import { AiFillStar } from 'react-icons/ai'

const Sidebar = ({ handelSidabar, readingList }) => {
  const dispatch = useDispatch()

  const isReadingListEmpthy = readingList.length === 0

  return (
    <div className="inline-flex">
      <div
        className="w-full min-h-[100vh] [z-index:100] backdrop-blur fixed top-0"
        onClick={handelSidabar}
      ></div>
      <div className="flex flex-col gap-4 w-full xs:w-[70%] [z-index:100] xs:min-w-[350px] sm:w-[50%] sm:min-w-[400px] lg:w-[50%] max-w-[600px] bg-gray-001 min-h-screen fixed top-0 right-0 p-4">
        <HiChevronDoubleRight size={'2rem'} onClick={handelSidabar} />
        <p className="text-center text-3xl font-semibold">Lista de lectura</p>

        <div
          className={`flex bg-gray-002 rounded-2xl gap-4 justify-center ${
            isReadingListEmpthy ? 'items-center' : 'items-start'
          } p-4 h-[85vh] overflow-hidden overflow-y-auto`}
        >
          <div className="flex flex-wrap gap-4 justify-center items-center">
            {isReadingListEmpthy ? (
              <p className="text-2xl">No hay libros en tu lista</p>
            ) : (
              readingList?.map((element) => (
                <div
                  key={element.book.ISBN}
                  className="max-w-[130px] max-h-[200px] relative overflow-hidden transition-transform active:scale-110"
                  onClick={() => dispatch(addRemoveBookReadingList(element))}
                >
                  <img src={element.book.cover} className="object-scale-down" />
                  <AiFillStar
                    className="absolute top-1 right-1 text-purple-600 bg-white rounded-full border border-purple-500"
                    size={'1.5rem'}
                  />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
