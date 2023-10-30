import { useContext } from 'react'
import { SearchIcon } from './Icons'
import { GlobalContext } from '../context/GlobalContext'

export function Search () {
  const { updateInputValue } = useContext(GlobalContext)

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleChange = (e) => {
    updateInputValue(e.target.value)
  }

  return (
    <form className='w-full max-w-[300px]' onSubmit={handleSubmit} action="">
      <div className='relative'>
        <input onChange={handleChange} placeholder="Harry Potter" className="text-sm bg-gray-200 placeholder:text-gray-500 rounded-full px-3 py-2 w-full" type="text" name="" id="" />
        <SearchIcon className='absolute right-3 top-1/2 -translate-y-1/2' />
      </div>
    </form>
  )
}
