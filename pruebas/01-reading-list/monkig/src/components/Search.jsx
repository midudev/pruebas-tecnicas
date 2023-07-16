import { BiSearchAlt } from 'react-icons/bi'
import { useState, useRef, useContext } from 'react'
import { BooksContext } from '../context/BooksContext'

export default function Search () {
  const { booksFilter } = useContext(BooksContext)
  const inputRef = useRef(null)
  const [isFocused, setIsFocused] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const handleOnChangeValue = (e) => {
    const value = e.target.value
    if (value === '') {
      setInputValue(value)
      booksFilter.setBooksFilter({
        ...booksFilter.booksFilter,
        title: 'any'
      })
      return
    }
    setInputValue(value)
    booksFilter.setBooksFilter({
      ...booksFilter.booksFilter,
      title: value
    })
  }

  const handleOnClick = () => {
    setIsFocused(true)
    inputRef.current.focus()
  }

  const handleOnBlur = () => {
    setIsFocused(false)
  }

  return (
    <form title='Search' className={`flex mr-2 items-center bg-[#220934] p-2 rounded-full  ${isFocused && 'border-2 border-[#3f0a6e]'}`}
    onClick={handleOnClick}
    onBlur={handleOnBlur}
    onSubmit={(e) => e.preventDefault()}
    >
        <label htmlFor="searchBook" className='px-2 text-2xl'>
            <BiSearchAlt/>
        </label>
        <input ref={inputRef} className='text-sm p-1 bg-transparent outline-none' value={inputValue} type="text" name="searchBook" id="searchBook" placeholder='Search' autoComplete='off' onChange={handleOnChangeValue}/>

    </form>
  )
}
