import { useList } from '../hooks/useList'
import Book from './book'

export default function ReadingList () {
  const { list, removeFromList } = useList()
  const visible = 'block'
  return (
        <section className="readingList bg-slate-50 border-l w-[34vw] p-8 fixed top-[146px] right-0 translate-x-full transition-transform h-[89vh] overflow-y-scroll shadow-md">
          <header className='flex justify-between'>
            <h2>Lista De Lectura</h2>
            <span>Tienes {list.length} libros</span>
          </header>
          <ul className=' w-[100%] h-auto flex flex-wrap gap-8 p-0 justify-center pt-12'>
            {list.map(item => (
                <Book key={item.book.ISBN} removeFromList={() => removeFromList(item)} item={item} className={visible} />
            ))}
          </ul>
        </section>
  )
}
