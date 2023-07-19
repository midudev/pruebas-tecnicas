import { useList } from '../hooks/useList'
import './ReadingList.css'
function ListItem ({ cover, title, genre, author, year, removeFromList }) {
  return (
    <ul>
        <li>
            <img src={cover} alt={title} />
            <div>
                <strong>{title}</strong>
                <p>{author.name}</p>
                <p>{year}</p>
                <p>{genre}</p>
            </div>
            <button onClick={removeFromList}>Quitar</button>
        </li>
    </ul>
  )
}
export default function ReadingList () {
  const { list, clearList, removeFromList } = useList()
  return (
        <section className="readingList">
          <h2>Lista De Lectura</h2>
          <span>Libros disponibles: {list.length}</span>
            {list.map(item => (

                <ListItem
                    key={item.book.ISBN}
                    removeFromList={() => removeFromList(item)}
                    {...item.book}
                />
            ))}
        </section>
  )
}
