import { useRef } from 'react'
import { useBookZustandStore } from '../hooks/useBookZustandStore'
import { useBooksCategories } from '../hooks/useBooksCategories'
import { getAllBooks } from '../services/api/getBooks'

export function Select () {
  const { updateBooks } = useBookZustandStore()
  const { booksCategories } = useBooksCategories()

  const handleChange = async (e) => {
    const allBooks = await getAllBooks()
    const category = e.target.value

    if (category === 'Todas') {
      updateBooks(allBooks)
      return
    }

    const filterBooks = allBooks?.filter(({ book }) => book.genre === category)
    updateBooks(filterBooks)
  }

  useRef(() => {
    console.log('render')
  }, [])
  return (
    <label htmlFor='' className=''>
      Fitrar libros por generos
      <select name='' id='' className=' px-5 py-1 block mt-3 mx-auto bg-[#0a0a0a] border border-[#404040] ' onChange={handleChange}>
        {
            booksCategories?.map((category, index) => {
              return <option key={index} value={category}>{category}</option>
            })
        }
      </select>
    </label>
  )
}
