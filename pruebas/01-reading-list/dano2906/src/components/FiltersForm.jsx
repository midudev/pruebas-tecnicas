import { useState } from 'react'

export default function FiltersForm ({ setFilterGenre, setFilterPages }) {
  const [pages, setPages] = useState(0)

  function handleChangeRange (e) {
    setPages(e.target.value)
    setFilterPages(Number(e.target.value))
  }

  function handleChangeGenre (e) {
    setFilterGenre(e.target.value)
  }

  return (
    <form className='w-full sm:w-[50%] h-auto mx-auto p-2 flex flex-col sm:flex-row items-center justify-center gap-0 sm:gap-6 text-blue-400 font-semibold text-lg'>
      <div className='w-[60%] flex flex-col items-center justify-start gap-y-6 sm:gap-y-9'>
        <label htmlFor='cantPages' className='text-lg sm:text-2xl text-center'>Cantidad mínima de páginas: <span>{pages}</span></label>
        <input type='range' name='cantPages' id='cantPages' min={0} max={2000} step={200} className='w-full h-0.5 sm:h-1 mb-6 bg-blue-400 rounded-lg appearance-none cursor-pointer range-sm' onChange={handleChangeRange} />
      </div>
      <div className='w-[40%] flex flex-col items-center justify-start gap-y-4'>
        <label htmlFor='genre' className='text-lg sm:text-2xl text-center'>Género literario: </label>
        <select name='genre' id='genre' className='bg-slate-500 border border-blue-600 text-blue-400 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2 sm:p-3' defaultValue='Todos' onChange={handleChangeGenre}>
          <option value='Todos'>Todos</option>
          <option value='Fantasía'>Fantasía</option>
          <option value='Ciencia ficción'>Ciencia ficción</option>
          <option value='Zombies'>Zombies</option>
          <option value='Terror'>Terror</option>
        </select>
      </div>
    </form>
  )
}
