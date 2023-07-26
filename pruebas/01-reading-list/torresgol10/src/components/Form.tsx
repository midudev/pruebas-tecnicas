import { useState } from "react"
import useBooks from "../hooks/useBooks"

type Props = {
    filterByGenre: (genre: string) => void,
    filterByText: (text: string) => void,
    filterByPages: (pages: number) => void
}

export default function Form({ filterByGenre, filterByText, filterByPages }: Props) {
    const { genres } = useBooks()
    //Variable para controlar el numero de pagina y mostrarlo en el label
    const [pages, setPages] = useState<number | null>(null)

    const handlerChangePages = (e: React.FormEvent<HTMLInputElement>) => {
        const nPages = parseInt(e.currentTarget.value)
        setPages(nPages)
        filterByPages(nPages)
    }

    return (
        <form>
            <fieldset className='flex justify-start gap-10'>
                <legend className='text-lg font-bold'>Filtrar por:</legend>
                <div className="flex flex-col gap-2">
                    <label htmlFor='genre'>Genero</label>
                    <div className="inline-block relative w-64 h-full">
                        <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" name='genre' id='genre' onChange={(e) => filterByGenre(e.target.value)}>
                        <option value=''>Todos</option>
                            {genres.map((genre: string, index: number) => (
                                <option key={index} value={genre}>{genre}</option>
                            ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor='genre'>Numero de pagina maximo: {pages ?? ''}</label>
                    <input className="h-full accent-black" type="range" min="100" max="1200" step="100" onChange={handlerChangePages} />
                </div>

                <div className='flex flex-col gap-2'>
                    <label htmlFor='genre'>Texto libre</label>
                    <input type='text' className='h-full shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Buscar' onChange={(e) => filterByText(e.target.value)} />
                </div>
            </fieldset>
        </form>
    )
}