function filterBooks (list, genre) {
  let filteredBooks = list

  if (genre) {
    if (genre === 'Todos') {
      return filteredBooks
    }
    filteredBooks = list.filter(elem => elem.genre === genre)
  }

  return filteredBooks
}

export { filterBooks }
