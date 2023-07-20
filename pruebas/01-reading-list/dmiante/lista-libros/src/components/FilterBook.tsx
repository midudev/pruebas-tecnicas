import { styled } from 'styled-components'
import { useBooksContext } from '../context/BooksContext'

export default function FilterBook () {
  const { books, genre, setGenre, filteredUniqueGenre } = useBooksContext()

  return (
    <Filter>
      <div className='filter'>
      <label htmlFor='filter' >Selecciona una categoría:</label>
        <select
          id='filter'
          autoComplete='off'
          onChange={(e) => { setGenre(e.target.value) }}
        >
          <option>Todos</option>
          {
            filteredUniqueGenre.map(genres => (
              <option
                key={genres}
              >
                {genres}
              </option>
            ))
          }
        </select>
        <p>Hay {books.length} libros con categoría {genre}</p>
      </div>
      <div>
        <span>{books.length} libro{books.length <= 1 ? '' : 's'} disponibles</span>
      </div>
    </Filter>
  )
}

const Filter = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  height: auto;
  /* border: 1px solid white; */
  padding: 1rem;
  
  .filter {
    display: flex;
    flex-direction: column;
    max-width: fit-content;
    padding: 0 1rem 2rem 0;
  }

  select {
    padding: .5rem 2rem;
  }
`
