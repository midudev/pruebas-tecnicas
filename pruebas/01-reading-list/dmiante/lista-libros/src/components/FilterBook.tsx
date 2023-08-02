import { styled } from 'styled-components'
import { useBooksContext } from '../context/BooksContext'

export default function FilterBook () {
  const { books, setGenre, filteredUniqueGenre, page, onChangeRange } = useBooksContext()

  const pagesMapped = books.map(page => page.pages)

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
      <div className='pages'>
        <legend>Filtra por páginas:</legend>
        <input
          type='range'
          name='pages'
          min={0}
          max={Math.max(...pagesMapped)}
          value={page}
          onChange={onChangeRange}
        />
        <span>{page}</span>
      </div>
      <div className='available'>
        <span>Hay {books.length} libro{books.length <= 1 ? '' : 's'} disponible{books.length <= 1 ? '' : 's'}.</span>
      </div>
    </Filter>
  )
}

const Filter = styled.section`
  display: grid;
  grid-template-columns: 2fr repeat(2, 1fr);
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

  .pages {
    display: flex;
    flex-direction: column;
    gap: .5rem;
    padding: 0 2rem;
  }
  .pages input {
    margin-top: 1rem;
    cursor: grab;
  }
  .pages span {
    text-align: center;
  }

  .available {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

`
