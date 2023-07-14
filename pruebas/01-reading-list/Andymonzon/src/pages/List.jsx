import { CardList } from '../components/CardList'
import { useBookContext } from '../hooks/useBookContext'

function List () {
  const { bookInList } = useBookContext()
  console.log(bookInList)
  return (
    <div>
      <h2 className='text-center font-bold text-2xl my-5'>My List</h2>
      <main className='w-full grid grid-cols-[repeat(auto-fill,minmax(135px,1fr))] gap-3 grid-rows-[repeat(auto-fill,minmax(240px,240px))] p-5'>
        {
          bookInList.map((book, index) => (
           <CardList book={book} key={index}/>
          ))
        }
      </main>
    </div>
  )
}

export { List }
