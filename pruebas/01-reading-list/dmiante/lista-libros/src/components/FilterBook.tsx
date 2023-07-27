import { styled } from 'styled-components'
import { useBooksContext } from '../context/BooksContext'

export default function FilterBook () {
  const { books, setGenre, filteredUniqueGenre } = useBooksContext()

  return (
    <Filter>
      <div className='filter'>
        <fieldset
          className='category'
          onChange={(e) => { setGenre((e.target as HTMLInputElement).value) }}
        >
          <legend>Selecciona una categoría:</legend>
          {
            filteredUniqueGenre.map((genre, index) => (
              <label key={genre}>
                <input
                  type='radio'
                  defaultChecked={index === 0}
                  name='genre'
                  value={genre}
                  className='radio'
                />
                <div className='name'>
                  {genre}
                </div>
              </label>
            ))
          }
        </fieldset>
      </div>
      <div>
        <span>Hay {books.length} libro{books.length <= 1 ? '' : 's'} disponible{books.length <= 1 ? '' : 's'}.</span>
      </div>
    </Filter>
  )
}

const Filter = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: auto;
  margin-bottom: 4rem;

  .category {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    padding: 1rem 0;
    border-style: none;
  }

  legend, span {
    font-size: larger;
    font-weight: 500;
  }

  .radio {
    display: none;
  }

  .name {
    padding: .8rem 1.5rem;
    border-radius: 5rem;
    cursor: pointer;
    transition: background-color .3s ease;
  }

  .radio:checked + .name {
    background-color: #e36065;
    color: #fff;
  }

  .name:hover {
    color: #e36065;
  }

`
