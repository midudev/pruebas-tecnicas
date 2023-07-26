'use client'
import { Library } from '@/types/library'
import { useStore } from '@/app/store/store'

const SelectedBooks = () => {
  const { library, setLibrary, selectedBooks, setSelectedBooks, filteredBooks, setFilteredBooks, selectedGenre } = useStore(state => state)

  const deselectBook = (deselectedBook: Library) => {
    setSelectedBooks(selectedBooks.filter(book => book !== deselectedBook))
    setLibrary([...library, deselectedBook])
    if (selectedGenre === 'All' || deselectedBook.book.genre === selectedGenre) {
      setFilteredBooks([...filteredBooks, deselectedBook])
    }
  }

  return selectedBooks.length > 0 && (
    <>
      <div className='fixed right-0 top-0 w-60 p-4 bg-gray-800 text-white z-10'>
        <h2>Libros Seleccionados: {selectedBooks.length}</h2>
      </div>
      <div className='fixed right-0 top-0 pt-20 h-full w-60 p-4 bg-gray-800 bg-opacity-50 overflow-y-auto'>
        <div className='flex flex-col items-center'>
          {selectedBooks.map((item, index) => (
            <div key={index} className='m-1 relative'>
              <div className='absolute top-0 right-0 p-2 cursor-pointer bg-gray-800 bg-opacity-50' onClick={() => deselectBook(item)}>
                <span className='text-white text-sm'>X</span>
              </div>
              <img
                className='w-48 h-72 rounded-md'
                src={item.book.cover} alt={item.book.title}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default SelectedBooks
