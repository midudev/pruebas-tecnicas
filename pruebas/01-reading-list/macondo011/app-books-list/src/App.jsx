import './App.css'
import { Books } from './components/Books'
import { Header } from './components/Header';
import { useLibraryFilters } from './hooks/useFilters';
import {library as initialBooks} from '../../../books.json'
import { ReadingList } from './components/ReadingList';
import { ReadingListProvider } from './components/context/ReadingListContext';


function App() {
  const { filterBooks } = useLibraryFilters()
  const filteredBooks = filterBooks(initialBooks)
  return (
    <ReadingListProvider>
       <Header/>

        <div className='Body'>
          <section className='principal' >
            <Books books={filteredBooks}/>
          </section>
          <article className='article'>
            <ReadingList/>
          </article>
        </div>
    </ReadingListProvider> 
  )
}

export default App
