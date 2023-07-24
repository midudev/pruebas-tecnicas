import useBooks from "../hooks/useBooks"

type Props = {
    filterByGenre: (genre: string) => void
}

export default function Form({ filterByGenre }: Props) {
    const { genres } = useBooks()

    return (
        <form>
            <fieldset className='flex justify-between'>
                <legend className='text-lg font-bold'>Filtrar por:</legend>
                <div className='flex gap-2'>
                    <label htmlFor='genre'>Genero</label>
                    <select name='genre' id='genre' onChange={(e) => filterByGenre(e.target.value)}>
                        <option value=''>Todos</option>
                        {genres.map((genre: string, index: number) => (
                            <option key={index} value={genre}>{genre}</option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <input type='text' className='border-4' placeholder='Buscar' />
        </form>
    )
}