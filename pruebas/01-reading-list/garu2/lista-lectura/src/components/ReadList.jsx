import Delete from "./icon/Delete"

import { removeBook } from "../helpers/removeBook"

const ReadList = ({ myList, setMyList, setData, data }) => {

  const removeRead = (item) => {
    setMyList(removeBook(myList, item))
    setData([...data, item])
  }

  return (
    <div>
      <h2 className='font-semibold text-left mt-5 mb-3 text-2xl'>Lista de Lectura</h2>
      <div className='flex flex-wrap gap-3 '>
        {
          myList.map(item => (
            <div key={item.book.ISBN} className='shadow rounded w-[100px] relative'>
              <img
                className='h-[100%] object-cover rounded'
                src={item.book.cover}
                alt={item.book.title}
              />
              <div
                className='text-[#f4b002] absolute top-1 right-1 cursor-pointer hover:text-[#ef4444]'
                onClick={() => removeRead(item)}
                title="Eliminar Libro"
              >
                <Delete />
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ReadList