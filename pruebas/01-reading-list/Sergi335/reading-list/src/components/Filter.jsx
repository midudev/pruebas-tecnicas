import { useState, useRef } from 'react'

export default function Filter ({ changeFilters }) {
  const [minPages, setMinPages] = useState(0)
  const [key, setKey] = useState(1)
  const [key2, setKey2] = useState(1)

  // Usar referencias para obtener los elementos correctos
  const labelPaginasRef = useRef(null)
  const labelGeneroRef = useRef(null)

  const handleChangeMinPages = (event) => {
    setMinPages(event.target.value)
    changeFilters((prevState) => ({
      ...prevState,
      pages: event.target.value
    }))
    const label = labelPaginasRef.current
    event.target.value > 0
      ? label.classList.remove('hidden')
      : label.classList.add('hidden')
  }

  const handleChangeGenre = (event) => {
    changeFilters((prevState) => ({
      ...prevState,
      genre: event.target.value
    }))
    const label = labelGeneroRef.current
    event.target.value !== 'all'
      ? label.classList.remove('hidden')
      : label.classList.add('hidden')
  }

  const handleResetPages = (event) => {
    changeFilters((prevState) => ({
      ...prevState,
      pages: 0
    }))
    setMinPages(0)
    setKey((prevKey) => prevKey + 1)

    // Usar la referencia para obtener el elemento correcto
    labelPaginasRef.current.classList.add('hidden')
  }

  const handleResetGenre = () => {
    changeFilters((prevState) => ({
      ...prevState,
      genre: 'all'
    }))
    setKey2((prevKey) => prevKey + 1)

    // Usar la referencia para obtener el elemento correcto
    labelGeneroRef.current.classList.add('hidden')
  }

  return (
    <div className="flex 2xl:gap-10 gap-2 my-0 border-slate-100 dark:border-[darkslategray] 2xl:border dark:2xl:border-0 py-[5px] 2xl:shadow-sm rounded px-[30px] dark:bg-[#100c18]">
      <div
        onClick={handleResetPages}
        ref={labelPaginasRef} // Agregar la referencia al elemento
        className="labelPaginas dark:bg-[#100c18] w-max top-[109px] p-[15px] cursor-pointer hidden absolute 2xl:right-[30%] 2xl:top-[91px] bg-blue-500 2xl:py-[17px] 2xl:px-[35px] rounded-md text-white"
      >
        <p>Número de páginas X</p>
      </div>
      <div
        onClick={handleResetGenre}
        ref={labelGeneroRef} // Agregar la referencia al elemento
        className="labelGenero cursor-pointer w-max right-[32px] dark:bg-[#100c18] top-[109px] p-[15px] hidden absolute 2xl:right-[23%] 2xl:top-[91px] bg-blue-500 2xl:py-[17px] 2xl:px-[35px] rounded-md text-white"
      >
        <p>Género X</p>
      </div>
            <div className='flex justify-center items-center gap-2 2xl:gap-8'>
                <label htmlFor="pages">Páginas</label>
                <input className='h-2 bg-gray-200 rounded-lg dark:bg-gray-700 w-[100%] 2xl:w-auto'
                    key={key}
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
                <select key={key2} className='bg-[#f3f3f3] border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block 2xl:w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus-visible:border-blue-500 outline-none p-1' name="genre" id="genre" onChange={handleChangeGenre}>
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
