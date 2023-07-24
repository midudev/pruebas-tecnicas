import useBooks from "../hooks/useBooks"

type Props = {
    filterByGenre: (genre: string) => void,
    filterByText: (text: string) => void
}

export default function Form({ filterByGenre, filterByText }: Props) {
    const { genres } = useBooks()

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
                    <label htmlFor='genre'>Numero de pagina</label>
                    <input type="range" min="20" max="500" step="50" />
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor='genre'>Texto libre</label>
                    <input type='text' className='border-4' placeholder='Buscar' onChange={(e) => filterByText(e.target.value)} />
                </div>
            </fieldset>
        </form>
    )
}