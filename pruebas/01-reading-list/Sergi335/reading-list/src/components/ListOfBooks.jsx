import Book from './book'
import './book.css'

export default function ListOfBooks ({ books }) {
  return (
    <section className='listOfBooks'>
      <ul>
        {books.map((item) => (
          <Book key={item.book.ISBN} item={item} />
        ))}
      </ul>
    </section>
  )
}
