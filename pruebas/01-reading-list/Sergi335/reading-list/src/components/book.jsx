import { useList } from '../hooks/useList'
import './book.css'
export default function Book ({ books }) {
  const { addToList, removeFromList, list } = useList()
  console.log(list)
  const chekBookInList = book => {
    return list.some(item => item.book.ISBN === book.book.ISBN)
  }
  return (
    <main>
        <ul>
            {books.map(item => (
                <li className={chekBookInList(item)
                  ? 'opacity-50'
                  : 'opacity-100'} key={item.book.ISBN}>
                    <img
                        src= {item.book.cover}
                        alt= {item.book.title}
                    />
                    <div>
                        <strong>{item.book.title}</strong>
                        <p>{item.book.author.name}</p>
                        <p>{item.book.year}</p>
                        <p>{item.book.genre}</p>
                    </div>
                    <button onClick={() => {
                      console.log(chekBookInList(item))
                      chekBookInList(item)
                        ? removeFromList(item)
                        : addToList(item)
                    }}>
                        {
                            chekBookInList(item)
                              ? 'Quitar de la lista'
                              : 'Añadir a mi lista'
                        }
                    </button>
                </li>
            ))
            }
        </ul>
    </main>
  )
}
