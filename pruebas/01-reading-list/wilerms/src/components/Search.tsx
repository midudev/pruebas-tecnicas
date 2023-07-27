import { SearchIcon } from 'icons'
import { useState, type FormEvent, type ChangeEvent } from 'react'

export const Search = () => {
  const [text, setText] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log({ text })
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value)
  }

  return (
    <form className="w-full h-full py-5 px-6" onSubmit={handleSubmit}>
      <div className="w-full flex gap-[30px]">
        <div className="w-full bg-[#f8efe5] rounded-full flex items-center shadow-inner shadow-[#0000000a]">
          <label className="mt-1 pl-5" htmlFor="search">
            <SearchIcon width={24} height={24} />
          </label>
          <input
            id="search"
            type="text"
            autoComplete="off"
            className="w-full outline-none p-5 pl-3 bg-transparent placeholder:text-[#6b5047]"
            placeholder="Buscar un libro"
            value={text}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="w-[200px] bg-slate-700 rounded-full text-white"
        >
          Buscar
        </button>
      </div>
    </form>
  )
}
