import { useState, useEffect } from 'react'

import ListsBooks from './components/ListsBooks'
import Sidebar from './components/Sidebar'

import listBooks from './data/books.json'

import './App.css'

function App() {

  const dataLS = JSON.parse(localStorage.getItem('alllistbooks'))
  const dataMyList = JSON.parse(localStorage.getItem('mylistbooks'))

  const [data, setData] = useState(dataLS ? dataLS : listBooks.library);
  const [myList, setMyList] = useState(dataMyList ? dataMyList : []);
  const [category, setCategory] = useState("");

  useEffect(() => {
    localStorage.setItem('alllistbooks', JSON.stringify(data));
  }, [data])
  useEffect(() => {
    localStorage.setItem('mylistbooks', JSON.stringify(myList));
  }, [myList])

  window.addEventListener('storage', (e) => {
    if (e.key === "alllistbooks") {
      setData(JSON.parse(localStorage.getItem('alllistbooks')))
    } else if (e.key === "mylistbooks") {
      setMyList(JSON.parse(localStorage.getItem('mylistbooks')))
    }
  })

  return (
    <main>
      <h1 className='text-5xl font-bold mb-14'>Lista de Lectura 📚</h1>
      <section className='flex'>

        <Sidebar
          data={data}
          setCategory={setCategory}
          category={category}
          myList={myList}
          setMyList={setMyList}
          setData={setData}
        />
        <ListsBooks 
          setMyList={setMyList} 
          myList={myList} 
          data={data} 
          category={category} 
          setData={setData} 
        />
      </section>
    </main>
  )
}

export default App
