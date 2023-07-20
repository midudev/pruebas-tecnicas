import { useList } from '../hooks/useList'
function ListItem ({ cover, title, genre, author, year, removeFromList }) {
  return (
        <li>
            <img className="aspect-[317/475]" src={cover} alt={title} />
            <div>
                <strong>{title}</strong>
                <p>{author.name}</p>
                <p>{year}</p>
                <p>{genre}</p>
            </div>
            <button onClick={removeFromList}>Quitar</button>
        </li>
  )
}
export default function ReadingList () {
  const { list, clearList, removeFromList } = useList()
  return (
        <section className="readingList bg-gradient-to-r from-cyan-500 to-blue-500 w-[34vw] p-8">
          <h2>Lista De Lectura</h2>
          <span>Libros disponibles: {list.length}</span>
          <ul className=' w-[100%] h-auto'>
            {list.map(item => (

                <ListItem
                    key={item.book.ISBN}
                    removeFromList={() => removeFromList(item)}
                    {...item.book}
                />
            ))}
          </ul>
        </section>
  )
}
