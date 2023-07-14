import { CardBook } from './CardBook'
import { useBookContext } from '../hooks/useBookContext'

function ContainerBook () {
  const { book, bookInList } = useBookContext()

  return (
        <div className='flex gap-5 flex-col'>
            <div className='flex flex-col gap-2'>
                <h3 className='text-center text-xl mt-2'>Available books: <span className='font-bold'>{book.length - bookInList.length}</span></h3>
                <h3 className='text-center text-xl'>List: <span className='font-bold'>{bookInList.length}</span></h3>
            </div>
            <main className='w-full grid grid-cols-[repeat(auto-fill,minmax(135px,1fr))] gap-3 grid-rows-[repeat(auto-fill,minmax(240px,240px))] p-5'>
                {
                    book.map((book, index) => (
                        <CardBook book={book.book} key={index} />
                    ))
                }
            </main>
        </div >
  )
}

export { ContainerBook }
