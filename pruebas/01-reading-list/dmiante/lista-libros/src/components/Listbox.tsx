import { styled } from 'styled-components'
import books from '../mocks/books.json'
// import { IBook, IAuthor } from '../types/Library.types'

export default function Listbox () {
  return (
    <ListBooks>
      <ul>
        {
          books.library.map(({ book }) => (
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

  img {
    width: 100%;
    height: 100%;
  }
`
