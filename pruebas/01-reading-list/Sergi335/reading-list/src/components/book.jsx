import styles from './book.css'
export default function Book ({ books }) {
  return (
    <main>
        <ul>
            {books.map(item => (
                <li key={item.book.ISBN}>
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
                </li>
            ))
            }
        </ul>
    </main>
  )
}
