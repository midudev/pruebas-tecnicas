import React, {useEffect} from 'react'
import './ReadingList.css'
import { useReadingList } from '../hooks/useReadingList'


export  function ReadingList() {
  const {readingList, clearReadingList}= useReadingList()

  useEffect(() => {
    // Guardar la lista de lectura en localStorage cada vez que cambie
    localStorage.setItem('readingList', JSON.stringify(readingList));
  }, [readingList]);

  console.log(readingList)

  return (
    <>
        <h2>
        Lista de lectura...!!!!!
        </h2>
        <aside className='ReadingList'>
        <h5>{readingList.length} libros en la lista de lectura</h5>
            <ul >
               {
                readingList.map(book => (
                  <li key={book.book.ISBN} onClick={()=> clearReadingList(book.book.ISBN)}>
                  <img src={book.book.cover} alt={book.book.title} />
                  <p>{book.book.synopsis}</p>
                  <h6>Año de publicación:{book.book.year}</h6>
                </li>
                ))} 
            </ul>

        </aside>
    </>
  )
}
