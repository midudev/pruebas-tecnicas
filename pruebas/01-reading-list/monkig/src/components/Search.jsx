import { BiSearchAlt } from 'react-icons/bi'
import { useState } from 'react'

export default function Search () {
  const input = document.querySelector('input')

  const [isFocused, setIsFocused] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const handleOnChangeValue = (e) => {
    setInputValue(e.target.value)
  }

  const handleOnClick = () => {
    setIsFocused(true)
    input.focus()
  }

  const handleOnBlur = () => {
    setIsFocused(false)
  }

  return (
    <form action="" className={`flex items-center bg-red-600 p-2 rounded-full active:outline-slate-300 ${isFocused && 'border-2'}`}
    onClick={handleOnClick}
    onBlur={handleOnBlur}
    onSubmit={(e) => e.preventDefault()}
    >
        <label htmlFor="" className='px-2 text-2xl'>
            <BiSearchAlt/>
        </label>
        <input className='text-sm p-1 bg-transparent outline-none placeholder-black' value={inputValue} type="text" name="searchBook" id="searchBook" placeholder='Programación... ' onChange={handleOnChangeValue}/>
    </form>
  )
}
