import { BiSearchAlt } from 'react-icons/bi'
import { useState, useRef } from 'react'

export default function Search () {
  const inputRef = useRef(null)
  const [isFocused, setIsFocused] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const handleOnChangeValue = (e) => {
    setInputValue(e.target.value)
  }

  const handleOnClick = () => {
    setIsFocused(true)
    inputRef.current.focus()
  }

  const handleOnBlur = () => {
    setIsFocused(false)
  }

  return (
    <form action="" className={`flex mr-2 items-center bg-red-600 p-2 rounded-full active:outline-slate-300 ${isFocused && 'border-2'}`}
    onClick={handleOnClick}
    onBlur={handleOnBlur}
    onSubmit={(e) => e.preventDefault()}
    >
        <label htmlFor="" className='px-2 text-2xl'>
            <BiSearchAlt/>
        </label>
        <input ref={inputRef} className='text-sm p-1 bg-transparent outline-none' value={inputValue} type="text" name="searchBook" id="searchBook" placeholder='Search' onChange={handleOnChangeValue}/>
    </form>
  )
}
