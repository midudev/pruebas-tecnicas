import { CardList } from '../components/CardList'
import { useBookContext } from '../hooks/useBookContext'

function List () {
  const { bookInList } = useBookContext()

  return (
    <div>
      <div className='flex flex-col gap-2'>
        <h2 className='text-center font-bold text-2xl'>My List</h2>
        <h3 className='text-center text-xl'>List: <span className='font-bold'>{bookInList.length}</span></h3>
      </div>
      <main className='w-full grid grid-cols-[repeat(auto-fill,minmax(135px,1fr))] gap-3 grid-rows-[repeat(auto-fill,minmax(240px,240px))] p-5'>
        {
          bookInList.map((book, index) => (
            <CardList book={book} key={index} />
          ))
        }
      </main>
    </div>
  )
}

export { List }
