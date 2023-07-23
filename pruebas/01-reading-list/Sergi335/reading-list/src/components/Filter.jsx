import { useState } from 'react'

export default function Filter ({ changeFilters }) {
  const [minPages, setMinPages] = useState(0)
  const handleChangeMinPages = (event) => {
    setMinPages(event.target.value)
    changeFilters(prevState => ({
      ...prevState,
      pages: event.target.value
    }))
  }
  const handleChangeGenre = (event) => {
    changeFilters(prevState => ({
      ...prevState,
      genre: event.target.value
    }))
  }
  return (
        <div className="flex 2xl:gap-10 gap-2 my-0 border-slate-100 dark:border-[darkslategray] 2xl:border py-[5px] shadow-sm rounded px-[30px] dark:bg-[#100c18]">
            <div className='flex justify-center items-center gap-2 2xl:gap-8'>
                <label htmlFor="pages">Páginas</label>
                <input className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700'
                    type='range'
                    id='pages'
                    min='0'
                    max='1000'
                    onChange={handleChangeMinPages}
                />
                <span className='2xl:w-[49px] w-[102px]'>{minPages}</span>
            </div>
            <div className='flex justify-center items-center gap-2 2xl:gap-8'>
                <label htmlFor="genre">Género</label>
                <select className='bg-gray-50 border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block 2xl:w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus-visible:border-blue-500 outline-none' name="genre" id="genre" onChange={handleChangeGenre}>
                    <option value="all">Todos</option>
                    <option value="Fantasía">Fantasía</option>
                    <option value="Ciencia ficción">Ciencia ficción</option>
                    <option value="Zombies">Zombies</option>
                    <option value="Terror">Terror</option>
                </select>
            </div>
        </div>
  )
}
