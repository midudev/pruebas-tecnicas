import { useStore } from '../store/store'

export const GenreFilter = () => {
    const { library, listGenres, selectedGenre, setSelectedGenre, setFilteredBooks } = useStore(state => state)

    const filterGenre = (newGenre: string) => {
        setSelectedGenre(newGenre)
        setFilteredBooks(library.filter(item => newGenre === 'Todos' || item.book.genre === newGenre))
    }

    return (
        <div className='flex flex-wrap justify-center top-0'>
            <label>
            Generos:
                <select className='text-zinc-950' value={selectedGenre} onChange={async (e) => filterGenre(e.target.value)}>
                    {listGenres.map((genre, index) => (
                        <option key={index} value={genre}>
                            {genre}
                        </option>
                    ))}
                </select>
            </label>
        </div>
    )
}
