import { styled } from 'styled-components'
import { useBooksContext } from '../context/BooksContext'

export default function ReadingList () {
  const { readingList, removeReadingList } = useBooksContext()
  return (
    <List>
      <div className='header'>
        <h2>Tienes <span className='number'>{readingList.length}</span> libro{readingList.length <= 1 ? '' : 's'} para  leer.</h2>
        <span>Haz click en un libro para retirarlo de la lista.</span>
      </div>
      <ul>
        {
          readingList.map(books => (
            <li
              key={books.ISBN}
              onClick={() => { removeReadingList(books) }}
            >
              <img
                src={books.cover}
                alt={books.title}
              />
            </li>
          ))
        }
      </ul>
    </List>
  )
}

const List = styled.section`
  color: #272935;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: end;
  }

  h2 {
    margin: 1rem 0;
  }

  .number {
    color: #e36065;
  }

  ul {
    display: flex;
    gap: 2rem;
    background-color: #fdfcf7;
    border-radius: .4rem;
    padding: 2rem;
    height: 20rem;
    margin-bottom: 3rem;
    -webkit-box-shadow: -19px 26px 31px -4px rgba(0,0,0,0.29);
    -moz-box-shadow: -19px 26px 31px -4px rgba(0,0,0,0.29);
    box-shadow: -19px 26px 31px -4px rgba(0,0,0,0.29);
    overflow-x: auto;
    scroll-snap-type: x mandatory;
  }

  li {
    cursor: pointer;
    border-radius: 10rem;
  }

  li:hover {
    outline: solid #0065ff;
    outline-offset: .3rem;
    border-radius: .4rem;
  }

  img {
    height: 100%;
    width: 10rem;
    border-radius: .4rem;
  }

`
