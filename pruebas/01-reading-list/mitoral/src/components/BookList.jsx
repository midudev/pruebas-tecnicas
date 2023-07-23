import { TextInput, MultiSelect, MultiSelectItem } from '@tremor/react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { Books } from './Books'
import { getBooks, getGenres, getMaxPages, getMinPages } from '../services/books.service'
import { useState } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'

export function BookList () {
  const minPages = getMinPages()
  const maxPages = getMaxPages()
  const genres = getGenres()
  const [filter, setFilter] = useState({
    search: '',
    genre: [],
    pages: maxPages
  })

  const [books, setBooks] = useState(getBooks())
  const [readingList, setReadingList] = useState([])

  const handleChange = (e) => {
    if (e.target.id === 'search') setFilter({ ...filter, search: e.target.value })
    if (e.target.id === 'pages') setFilter({ ...filter, pages: e.target.value })
  }

  const handleGenresChange = (selectedItems) => {
    setFilter({ ...filter, genre: selectedItems })
  }

  const handleDragEnd = ({ source, destination }) => {
    if (!destination) return

    const sourceDroppableId = source.droppableId
    const destinationDroppableId = destination.droppableId

    const sourceIndex = source.index - 1
    const destinationIndex = destination.index - 1

    if (sourceDroppableId === 'catalog' && destinationDroppableId === 'catalog') return

    const newBooks = structuredClone(books)
    const newReadingList = structuredClone(readingList)

    if (sourceDroppableId === 'catalog' && destinationDroppableId === 'reading') {
      const [bookToMove] = newBooks.splice(sourceIndex, 1)
      newReadingList.splice(destinationIndex, 0, bookToMove)
      setBooks(newBooks)
      setReadingList(newReadingList)
    }

    if (sourceDroppableId === 'reading' && destinationDroppableId === 'catalog') {
      const [bookToMove] = newReadingList.splice(sourceIndex, 1)
      newBooks.splice(destinationIndex, 0, bookToMove)
      setBooks(newBooks)
      setReadingList(newReadingList)
    }

    if (sourceDroppableId === 'reading' && destinationDroppableId === 'reading') {
      const [bookToMove] = newReadingList.splice(sourceIndex, 1)
      newReadingList.splice(destinationIndex, 0, bookToMove)
      setReadingList(newReadingList)
    }
  }

  return (
    <>
      <main className='mt-10 flex flex-col gap-10 max-w-[1280px] mx-auto'>

        <section className='flex justify-between gap-10'>
          <div className='flex flex-col gap-1 w-2/4'>
            <label className='font-bold' htmlFor='search'>Título o autor</label>
            <TextInput id='search' icon={MagnifyingGlassIcon} placeholder='George Orwell' value={filter.search} onChange={handleChange} />
          </div>
          <div className='flex flex-col gap-1 w-1/4'>
            <label className='font-bold' htmlFor='genre'>Género</label>
            <MultiSelect id='genre' placeholder='Todos los géneros' value={filter.genre} onValueChange={handleGenresChange}>
              {
                genres.map((genre) => (
                  <MultiSelectItem key={genre} value={genre}>{genre}</MultiSelectItem>
                ))
              }
            </MultiSelect>
          </div>
          <div className='flex flex-col gap-1 w-1/4'>
            <label className='font-bold' htmlFor='pages'>Número de páginas</label>
            <div className='flex gap-2'>
              <TextInput type='number' className='w-min min-w-[85px]' id='pages' placeholder='' value={filter.pages} onChange={handleChange} />
              <input className='w-full' id='pages' type='range' min={minPages} max={maxPages} step={1} value={filter.pages} onChange={handleChange} />
            </div>
          </div>
        </section>

        <DragDropContext onDragEnd={handleDragEnd}>
          <section className='flex gap-20'>
            <article className='w-full'>
              <h3 className='text-2xl font-bold mb-5'>Catálogo de libros disponibles</h3>
              <Books droppableId='catalog' books={books} />
            </article>
            <article className='w-full'>
              <h3 className='text-2xl font-bold mb-5'>Lista de lectura</h3>
              <Books droppableId='reading' books={readingList} />
            </article>
          </section>
        </DragDropContext>

      </main>
    </>
  )
}
