import { useEffect, useState } from 'react'
import data from './services/books.json'

const localStorage = window.localStorage
const crypto = window.crypto

export function App () {
  const [available, setAvailable] = useState([])
  const [myList, setMyList] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    if (myList.length === 0) {
      const availableBooks = data.library
      setAvailable(availableBooks)
    } else {
      const availableBooks = data.library.filter((el) => {
        const isInMyList = myList.some((book) => book.title === el.book.title)
        return !isInMyList
      })
      setAvailable(availableBooks)
    }
  }, [myList])

  function handleAddClick (book) {
    console.log('add ' + book.title + '  to my list')
    const toRead = [...myList, book]
    setMyList(toRead)
    localStorage.setItem('myList', JSON.stringify(toRead))

    let updateAvailable = available.filter((el) => el.book.title !== book.title)
    updateAvailable = [...updateAvailable]
    setAvailable(updateAvailable)
    localStorage.setItem('available', JSON.stringify(updateAvailable))
  }

  function handleRemoveClick (book) {
    console.log('remove ' + book.title + '  from my list')
    const updateList = myList.filter((el) => el.title !== book.title)
    setMyList(updateList)
    localStorage.setItem('myList', JSON.stringify(updateList))
  }

  useEffect(() => {
    const localStorageData = localStorage.getItem('myList')
    const storedData = JSON.parse(localStorageData)
    if (storedData) {
      setMyList(storedData)
    }
  }, [])

  let genres = new Set()

  available.forEach((el) => {
    genres.add(el.book.genre)
  })

  genres = Array.from(genres)

  function handleFilterClick (genre) {
    const newFilter = genre
    setFilter(newFilter)
    console.log(filter)
  }

  function handleResetClick () {
    setFilter('')
    console.log('filter was cleaned')
  }

  console.log(myList)
  return (
    <>
      <h1>Available now</h1>
      {filter === '' ? available.length + ' books available' : available.filter((el) => el.book.genre === filter).length + ' books available'}
      {genres.map((el) =>
        <button key={crypto.randomUUID()} onClick={() => handleFilterClick(el)}>{el}</button>
      )}
      <button onClick={handleResetClick}>Clean filter</button>

      <h1>Available books</h1>
      {available.filter((el) => el.book.genre === filter || filter === '').map((el) =>
        <article key={crypto.randomUUID()}>
          <li>{el.book.title}</li>
          <button
            onClick={() => handleAddClick(el.book)}
          >
            Add to my list
          </button>
        </article>
      )}

      <h1>My list</h1>
      {myList.length === 0 ? <p>There are no books in your list</p> : myList.length + ' books in your list'}
      {myList.map((el) =>
        <article key={crypto.randomUUID()}>
          <li>{el.title}</li>
          <button
            onClick={() => handleRemoveClick(el)}
          >
            Remove from my list
          </button>
        </article>
      )}
    </>
  )
}
