import BookList from './components/BookList.tsx';
import './App.css'

function App() {

  return (
    <main className='w-full h-full bg-slate-900'>
      <h1 className='text-3xl font-bold text-slate-300 text-center p-3'>Reading List</h1>
      <div className='flex'>
        <BookList/>
        <div>Lista de lectura</div>
      </div>
    </main>
  )
}

export default App
