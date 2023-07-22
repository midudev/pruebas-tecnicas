import { useList } from '../hooks/useList'
import { useEffect, useRef } from 'react'
import Book from './book'

export default function ReadingList ({ isOpen, togglePanel }) {
  const { list, removeFromList } = useList()
  const panelRef = useRef(null)
  const panelClass = isOpen
    ? 'abierto'
    : 'translate-x-full'
  console.log(isOpen)
  // Efecto para que cuando se clique fuera del panel se esconda
  useEffect(() => {
    const handleClickOutside = (event) => {
      const boton = document.querySelector('.buttonToggle')
      if (isOpen && panelRef.current && !panelRef.current.contains(event.target) && !boton.contains(event.target)) {
        togglePanel()
      }
    }
    document.addEventListener('mousedown', handleClickOutside, true)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside, true)
    }
  }, [isOpen])
  const visible = 'block'
  return (
        <section ref={panelRef} className={panelClass + ' readingList bg-slate-50 border-l w-[34vw] p-8 fixed top-[146px] right-0 transition-transform h-[89vh] overflow-y-scroll shadow-md'}>
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
