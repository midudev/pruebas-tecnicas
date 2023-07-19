import { Book } from '.'
import { useReadingListStore } from '../store/reading-list-store'

export const ReadingList = () => {
  const readingList = useReadingListStore((state) => state.readingList)

  console.log('ReadingList rendered')

  return (
    <aside className="col-start-4 col-end-5 ml-10 p-4 border-4 rounded-xl h-fit">
      {readingList.length === 0
        ? <span>Aun no has seleccionado ningun libro para leer</span>
        : <h2 className="mb-8 text-2xl font-bold leading-none tracking-tight">Libros de interés</h2>}

      <section className='grid grid-cols-2 gap-2'>
        {readingList.map(({ ISBN, title, author, cover, synopsis }) => (
          <Book key={ISBN}
            title={title}
            author={author}
            cover={cover}
            ISBN={ISBN}
            synopsis={synopsis}
            isReadListMode={true} />
        ))}
      </section>
    </aside>
  )
}
