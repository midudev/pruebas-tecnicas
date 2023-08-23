
import books from '../books.json'
import { Book } from './components/Book'
import { useAppDispatch, useAppSelector } from './hooks/store'
import { useEffect } from 'react';
import { getBooks } from './store/books/slice';
import { Filters } from './components/Filters';
import { Info } from './components/Info';
import { ReadingList } from './components/ReadingList';

function App() {
    const { library } = books
    const disptach = useAppDispatch()
     const booksStore = useAppSelector((state) => state.books.books)
     const filterByGenre = useAppSelector((state) => state.books.filterByGenre)
     const filterByPages = useAppSelector((state) => state.books.fitlerByPages)
     const bookReadingList = useAppSelector((state) => state.reading.quantity)
     const booksInList = useAppSelector(state => state.reading.readingList)

 
    useEffect(()=>{
        library.forEach((item) => {
            disptach(getBooks(item))
        })
    },[library])
 
    const data = booksStore.filter(item => {
        const byGenre = item.book.genre.toLowerCase().includes(filterByGenre)
        const byPages = item.book.pages >= filterByPages
        return byGenre && byPages
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
            <section className='flex flex-col w-1/3 '>
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
