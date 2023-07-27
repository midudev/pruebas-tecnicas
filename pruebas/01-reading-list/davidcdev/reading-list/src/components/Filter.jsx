export function Filter ({ available, filter, setFilter, crypto }) {
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

  return (
    <>
      <h1>Filter by Genre</h1>
      {filter === '' ? available.length + ' books available' : available.filter((el) => el.book.genre === filter).length + ' books available'}
      {genres.map((el) =>
        <button key={crypto.randomUUID()} onClick={() => handleFilterClick(el)}>{el}</button>
      )}
      <button onClick={handleResetClick}>Clean filter</button>
    </>
  )
}
