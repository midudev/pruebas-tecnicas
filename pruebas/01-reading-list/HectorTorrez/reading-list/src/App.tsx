

import { Book } from './components/Book'
import { useAppSelector } from './hooks/store'

import { Filters } from './components/Filters';
import { Info } from './components/Info';
import { ReadingList } from './components/ReadingList';

function App() {

     const booksStore = useAppSelector((state) => state.books.books)
     const filterByGenre = useAppSelector((state) => state.books.filterByGenre)
     const filterByPages = useAppSelector((state) => state.books.fitlerByPages)
     const filterByName = useAppSelector((state) => state.books.filterByName)
     const bookReadingList = useAppSelector((state) => state.reading.quantity)
     const booksInList = useAppSelector(state => state.reading.readingList)


 
  
 
    const data = booksStore.filter(item => {
        const byGenre = item.book.genre.toLowerCase().includes(filterByGenre)
        const byPages = item.book.pages >= filterByPages
        const byName = item.book.title.toLowerCase().includes(filterByName)
        return byGenre && byPages && byName
    })

    const maxPages = data.reduce((maxPages, book)=>{
        return book.book.pages > maxPages ? book.book.pages : maxPages
    }, -Infinity)


 return (
  <>
        <Info text={`${data.length} libros disponibles`} secondText={`${bookReadingList} en la lista de lectura`}/>
        <Filters maxPages={maxPages}/>
        <section className='flex  '>
            <section className="grid grid-cols-1 md:w-full gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {
                data.map(item => {
                    return <Book key={crypto.randomUUID()} book={item.book}/>
                })
            }
            </section>
            <section className='flex flex-col w-2/4 gap-y-5'>
                <p className='font-bold text-3xl mb-5'>Libros en lista de lectura</p>
                {
                    booksInList.map(item => {
                        return <ReadingList key={item.title}  {...item}/>
                        
                    })
                }
            </section>
        </section>
  </>
 )
}

export default App
