import { Library } from '@/types/library'

const AvailableBooks = ({ libraryData, selectBook, selectedGenre }: { libraryData: Library[], selectBook: (book: Library) => void, selectedGenre: string }) => {
  if (libraryData.length === 0) {
    return <h2>There are no books available in this genre.</h2>
  }

  return (
    <div className='flex flex-wrap justify-center'>
      {libraryData.map((item, index) => (
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
