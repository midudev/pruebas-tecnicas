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
                <div className='flex flex-col gap-2'>
                    <label htmlFor='genre'>Genero</label>
                    <select name='genre' id='genre' onChange={(e) => filterByGenre(e.target.value)}>
                        <option value=''>Todos</option>
                        {genres.map((genre: string, index: number) => (
                            <option key={index} value={genre}>{genre}</option>
                        ))}
                    </select>
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor='genre'>Numero de pagina maximo: {pages ?? ''}</label>
                    <input type="range" min="100" max="1200" step="100" onChange={handlerChangePages} />
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor='genre'>Texto libre</label>
                    <input type='text' className='border-4' placeholder='Buscar' onChange={(e) => filterByText(e.target.value)} />
                </div>
            </fieldset>
        </form>
    )
}