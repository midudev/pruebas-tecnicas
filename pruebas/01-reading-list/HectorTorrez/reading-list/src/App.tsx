
import books from '../books.json'
import { Book } from './components/Book'
import { useAppDispatch, useAppSelector } from './hooks/store'
import { useEffect } from 'react';
import { getBooks } from './store/books/slice';
import { Filters } from './components/Filters';

function App() {
    const { library } = books
    const disptach = useAppDispatch()
     const books1 = useAppSelector((state) => state.books.books)

 
    useEffect(()=>{
        library.forEach((item) => {
            disptach(getBooks(item))
        })
    },[library])
 

 return (
  <>
  <Filters/>
  <section className="grid md:w-1/2 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
   {
    books1.map(item => {
        return <Book key={crypto.randomUUID()} book={item.book}/>
    })
   }
   </section>
  </>
 )
}

export default App
