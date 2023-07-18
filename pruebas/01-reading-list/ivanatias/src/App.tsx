import books from '@/data/books.json'

function App() {
  return <div className='text-6xl'>{JSON.stringify(books)}</div>
}

export default App
