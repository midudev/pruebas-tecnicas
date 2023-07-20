import { styled } from 'styled-components'
import { useBooksContext } from '../context/BooksContext'

export default function Listbook () {
  const { books, addReadingList } = useBooksContext()
  // console.log(books)

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
  margin-bottom: 3rem;

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1.25rem;
    width: 100%;
    border-radius: .4rem;
    transition: all ease-in-out 0.25s;
    background-color: #151716;
    padding: 1rem;
    filter: drop-shadow(0 25px 25px rgb(0 0 0 / 0.50));
  }

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: transform .2s ease-in;

    &:hover {
      transform: scale(1.03);
    }
  }
  
  img {
    height: 100%;
    max-width: 100%;
    border-radius: 0.4rem;
  }
  img:hover {
    /* transition: background 4s, transform 1s; */
    /* transform: scale(1.25); */
    /* transition: background 1s linear; */
  }

`
