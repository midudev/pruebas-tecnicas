import { useEffect, useState } from 'react';
import './App.css';
import { Book } from './components/Book';
import {type Book as BookType } from './types';

function App() {
  const [data, setData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('src/assets/books.json');
        const jsonData = await response.json();
        const { library } = jsonData;
        setData(library);
        console.log(data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Lista de Lectura
      </h1>
      <div className='grid grid-cols-5'>
        {data.map(({book}:{book:BookType}) => (
          <Book {...book} />
        ))}
      </div>
    </>
  );
}

export default App;
