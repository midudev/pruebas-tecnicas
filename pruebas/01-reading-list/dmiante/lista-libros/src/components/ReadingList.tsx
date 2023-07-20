import { styled } from 'styled-components'
import { useBooksContext } from '../context/BooksContext'

export default function ReadingList () {
  const { readingList, removeReadingList } = useBooksContext()
  return (
    <List>
      <h2>Books to read</h2>
      <span>{readingList.length} libro{readingList.length <= 1 ? '' : 's'} por leer</span>
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
  color: white;

  h2 {
    color: white;
    margin: 1rem 0;
  }

  ul {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    background-color: #151716;
    border-radius: .4rem;
    padding: 1rem;
    height: 10rem;
    margin-bottom: 3rem;
    filter: drop-shadow(0 25px 25px rgb(0 0 0 / 0.50));
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
    max-width: 100%;
  }

  .deleteIcon {

  }
`
