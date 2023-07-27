import { styled } from 'styled-components'
import { useBooksContext } from '../context/BooksContext'

export default function Listbook () {
  const { books, addReadingList } = useBooksContext()

  return (
    <ListBooks>
      <ul>
        {
          books.map((book) => (
              <li
                key={book.ISBN}
                onClick={() => { addReadingList(book) }}
              >
                <img
                  className='cover'
                  src={book.cover}
                  alt={book.title}
                />
                <h4>{book.title}</h4>
              </li>
            // </div>
          ))
        }
      </ul>
    </ListBooks>
  )
}

const ListBooks = styled.section`
  margin-bottom: 3rem;
  color: #272935;

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 5rem;
  }

  li {
    display: flex;
    flex-direction: column;
    align-items: start;
    cursor: pointer;
  }

  .cover {
    object-fit: fill;
    height: 22rem;
    -webkit-box-shadow: -19px 26px 31px -4px rgba(0,0,0,0.29);
    -moz-box-shadow: -19px 26px 31px -4px rgba(0,0,0,0.29);
    box-shadow: -19px 26px 31px -4px rgba(0,0,0,0.29);
    width: 100%;
    max-width: 100%;
    transition: transform .3s ease-in-out;
  }
  .cover:hover {
    transform: scale(1.1);
  }

  h4 {
    margin-top: 3rem;
  }

`
