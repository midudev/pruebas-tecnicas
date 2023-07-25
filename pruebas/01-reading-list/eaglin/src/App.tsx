import './App.css'

import BookListToRead from './components/BookListToRead'

import BookList from './components/BookList'

import HeaderComponent from './components/Header'
import { useSetBooks } from './hooks/useSetBooks'

import { useFilterBooks } from './hooks/useFilterBooks'

function App () {
  const { library, readingBooks, addReading } = useSetBooks()
  const { filterBooks } = useFilterBooks(library)
  return <div className='main-container' style={{ }}>
   <HeaderComponent/>
    <div style={{ display: 'flex', marginTop: 20 }}>
     <BookList addElement={addReading} library={filterBooks} style={{ flexDirection: 'row', flexWrap: 'wrap', display: 'flex', maxWidth: '60vw', gap: 40, flex: 1 }} />
     <BookListToRead addElement={addReading} library={readingBooks} imgHeight={150} imgWidth={100}/>
     </div>
  </div>
}

export default App
