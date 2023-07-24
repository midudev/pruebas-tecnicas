import { useState } from 'react'

import ListsBooks from './components/ListsBooks'
import Filter from './components/Filter'

import listBooks from './data/books.json'
import './App.css'

function App() {
  const [data, setData] = useState(listBooks.library);
  const [category, setCategory] = useState('');
  const [myList, setMyList] = useState([]);

  console.log('data: ', data);

  return (
    <main>
      <h1 className='text-4xl font-bold'>Reading List</h1>
      <section className='flex'>
        <Filter data={data} setData={setData} setCategory={setCategory} category={category}/>
        <ListsBooks setMyList={setMyList} data={data} category={category}/>
      </section>
    </main>
  )
}

export default App
