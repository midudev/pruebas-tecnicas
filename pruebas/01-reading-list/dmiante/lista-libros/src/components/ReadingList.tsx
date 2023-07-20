import { useContext } from 'react'
import { styled } from 'styled-components'
import { BookContext } from '../context/BooksContext'

export default function ReadingList () {
  const { readingList, removeReadingList } = useContext(BookContext)
  return (
    <List>
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
              {/* <div className='deleteIcon'>x</div> */}
            </li>
          ))
        }
      </ul>
    </List>
  )
}

const List = styled.section`

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
