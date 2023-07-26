import { useState, useEffect } from 'react'

import ListsBooks from './components/ListsBooks'
import Sidebar from './components/Sidebar'

import listBooks from './data/books.json'
import './App.css'

function App() {
  const dataLS = JSON.parse(localStorage.getItem('alllistbooks'))
  const dataMyList = JSON.parse(localStorage.getItem('mylistbooks'))

  const [data, setData] = useState(dataLS?dataLS:listBooks.library);
  const [myList, setMyList] = useState(dataMyList?dataMyList:[]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    localStorage.setItem('alllistbooks', JSON.stringify(data));
  }, [data])
  useEffect(() => {
    localStorage.setItem('mylistbooks', JSON.stringify(myList));
  }, [myList])

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
