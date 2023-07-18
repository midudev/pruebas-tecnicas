import { Book } from '.'
import { useReadingListStore } from '../store/reading-list-store'

export const ReadingList = () => {
  const readingList = useReadingListStore((state) => state.readingList)

  console.log('ReadingList rendered')

  return (
    <aside className="p-4 bg-emerald-800 w-[400px]">
      <h2 className=''>Libros de interés</h2>
      <section className='grid grid-cols-2 gap-2'>
        {readingList.map(({ ISBN, title, author, cover }) => (
          <Book key={ISBN}
          title={title}
          author={author}
          cover={cover}
          ISBN={ISBN}
          isReadListMode={true} />
        ))}
      </section>
    </aside>
  )
}
