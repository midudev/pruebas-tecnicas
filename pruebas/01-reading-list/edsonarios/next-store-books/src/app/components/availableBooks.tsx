import { LibraryData, Library } from '@/types/library'

const AvailableBooks = ({ libraryData, selectBook }: { libraryData: LibraryData, selectBook: (book: Library) => void }) => {
  return (
    <div className='flex flex-wrap justify-center'>
      {libraryData.library.map((item, index) => (
        <div key={index} className='m-4 cursor-pointer' onClick={() => selectBook(item)}>
          <h2>{item.book.title}</h2>
          <img
            className='w-64 h-96 rounded-xl'
            src={item.book.cover} alt={item.book.title}
          />
        </div>
      ))}
    </div>
  )
}

export default AvailableBooks
