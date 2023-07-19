import { useContext } from 'react'
import { styled } from 'styled-components'
import { BookContext } from '../context/BooksContext'

export default function Listbox () {
  const { books } = useContext(BookContext)
  // console.log(books)

  return (
    <ListBooks>
      <ul>
        {
          books.map(({ book }) => (
            <li key={book.ISBN}>
              <img
                src={book.cover}
                alt={book.title}
              />
            </li>
          ))
        }
      </ul>
    </ListBooks>
  )
}

const ListBooks = styled.section`

  ul {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 16px;
  }

  li {
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 4%;
  }
`
