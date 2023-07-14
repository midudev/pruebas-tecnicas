import { useGlobalContext } from "../context/globalContext"
import Book from "./Book"

export default function ReadingList() {
  const { readingList, removefromReadingList } = useGlobalContext()
  return (
    <aside style={{ width: '35%', display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2.5rem' }} >Lista de Lectura</h2>
      <div style={{ display: 'flex', gap: '10px ', flexWrap: 'wrap', justifyContent: 'center', marginTop: '50px' }} >

        {
          readingList.map(book => {
            const { title, cover } = book
            return (
              <Book someAction={removefromReadingList} key={title} title={title} cover={cover} />
            )
          })
        }
      </div>

    </aside>

  )
}