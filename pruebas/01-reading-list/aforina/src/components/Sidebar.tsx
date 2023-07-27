import { useEffect, useState, useRef } from 'react'
import { useBooks } from '../store/useBooks'
import { useLocation } from 'wouter'
import { BookList } from '../domain/BookList'
import { Book } from '../domain/Book'

export const Sidebar = () => {
  const { availableBooks, setOrder, category, setCategory, pages, setPages } =
    useBooks()
  const [categories, setCategories] = useState<string[]>([])
  const [filterText, setFilterText] = useState<string>('')
  const [, setLocation] = useLocation()

  const longerBook = BookList.longerBook(availableBooks)
  const maxPages = Book.pages(longerBook)

  const [value, onChange] = useState(maxPages)
  const newestRef = useRef<HTMLInputElement | null>(null)
  const oldestRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    const queryString = new URLSearchParams(window.location.search).get(
      'filter'
    )

    setFilterText(queryString ?? '')

    const auxCategories: string[] = []
    availableBooks.map(book => {
      if (!auxCategories.includes(book.book.genre)) {
        auxCategories.push(book.book.genre)
      }
    })

    setCategories(auxCategories)
  }, [])

  useEffect(() => {
    const ele = document.querySelector('.buble')
    if (ele) {
      const bubbleElement = ele as HTMLElement
      bubbleElement.style.left = `${Number(value / 4)}px`
    }
  })

  const handleDeleteClick = () => {
    setOrder('')
    if (newestRef.current) {
      newestRef.current.checked = false
    }
    if (oldestRef.current) {
      oldestRef.current.checked = false
    }
  }

  return (
    <section className='h-fit w-[300px] flex flex-col bg-customLight text-black text-sm rounded-md border-1 border-black divide-y-1 divide-black'>
      <div className='p-4'>
        <p className='font-bold'>Books</p>
        <p className='text-customGray text-[12px]'>
          {availableBooks.length} units
        </p>

        <label className='w-full bg-white flex items-center rounded-sm gap-x-2 p-2 border-1 border-black'>
          <span className='i-lucide-search'></span>
          <input
            className='outline-none'
            placeholder='Search by title name'
            value={filterText}
            aria-label='search'
            onChange={e => {
              setLocation('?filter=' + e.target.value)
              setFilterText(e.target.value)
            }}
            onBlur={e => {
              e.target.value === '' && setLocation('/')
            }}
          ></input>
        </label>
      </div>
      <div className='p-4 flex flex-col'>
        <div className='flex justify-between'>
          <p>Sort by:</p>
          <span
            onClick={handleDeleteClick}
            className='underline cursor-default hover:text-slate-600'
          >
            delete
          </span>
        </div>
        <div className='flex gap-x-2 items-center'>
          <label>
            <input
              type='radio'
              name='option'
              onClick={() => {
                setOrder('Newest')
              }}
              className='mx-1'
              ref={newestRef}
            ></input>
            Newest
          </label>
          <label>
            <input
              type='radio'
              name='option'
              className='ml-4 mx-1'
              onClick={() => {
                setOrder('Oldest')
              }}
              ref={oldestRef}
            ></input>
            Oldest
          </label>
        </div>
      </div>
      <div className='p-4'>
        <div className='flex justify-between'>
          <p>Filters:</p>
          <span
            onClick={() => {
              setCategory('')
            }}
            className='underline cursor-default hover:text-slate-600'
          >
            delete
          </span>
        </div>
        <div className='w-full'>
          <select
            className='p-2 w-full border-1 border-black rounded-sm'
            onChange={e => setCategory(e.target.value)}
            value={category}
          >
            <option value=''>Select All</option>
            {categories.map((category, index) => (
              <option key={index}>{category}</option>
            ))}
          </select>
        </div>
        <div className='w-full mt-2'>
          <p>Pages:</p>
          <div className='relative w-full flex gap-x-4'>
            <input
              type='range'
              min='0'
              max={maxPages}
              step='10'
              value={value}
              onChange={({ target: { value: radius } }) => {
                onChange(parseInt(radius))
                setPages(parseInt(radius))
              }}
              className='w-[80%] custom-slider'
            />
            <div className='flex items-center gap-x-1 w-[70px]'>
              <button
                onClick={() => {
                  const auxPages = pages - 1
                  if (auxPages >= 0) {
                    onChange(auxPages)
                    setPages(auxPages)
                  }
                }}
                className='w-[16px] bg-transparent border-1 border-black rounded-sm'
              >
                -
              </button>
              <div className='buble'>{value}</div>
              <button
                onClick={() => {
                  const auxPages = value + 1
                  if (auxPages <= maxPages) {
                    onChange(auxPages)
                    setPages(auxPages)
                  }
                }}
                className='w-[16px] bg-transparent border-1 border-black rounded-sm'
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
