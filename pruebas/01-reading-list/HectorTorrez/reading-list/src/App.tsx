import books from '../books.json'
import { Book } from './components/Book'
function App() {
    const { library } = books
    
 return (
  <>
   {
    library.map(item => {
        return <Book key={item.book.title} book={item.book}/>
    })
   }
  </>
 )
}

export default App
