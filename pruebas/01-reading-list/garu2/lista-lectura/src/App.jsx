import { useState } from 'react'

import ListsBooks from './components/ListsBooks'
import Sidebar from './components/Sidebar'

import listBooks from './data/books.json'
import './App.css'

function App() {
  const [data, setData] = useState(listBooks.library);
  const [category, setCategory] = useState('');
  const [myList, setMyList] = useState([]);

  console.log('data: ', data);
  console.log('myList: ', myList);

  return (
    <main>
      <h1 className='text-4xl font-bold'>Reading List</h1>
      <section className='flex'>

        <Sidebar 
          data={data} 
          setCategory={setCategory} 
          category={category} 
          myList={myList} 
          setMyList={setMyList}
          setData={setData}
        />
        <ListsBooks setMyList={setMyList} myList={myList} data={data} category={category} setData={setData}/>
      </section>
    </main>
  )
}

export default App
