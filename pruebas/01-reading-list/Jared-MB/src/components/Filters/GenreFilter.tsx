import { genres } from "../../models/types"
import { useBooks } from "../../store"

export default function GenreFilter() {

	const { setBooksByFilter, setFilter, pages, filter } = useBooks()

	const handleGenre = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const genre = e.target.value
		setFilter(genre)
		setBooksByFilter(genre, pages)
	}

	return (
		<div className='flex items-center gap-2 text-zinc-300'>
			<label className='text-zinc-300'>Filtrar por género:</label>
			<select data-testid='genre-filter' onChange={handleGenre} defaultValue={filter} className='bg-transparent border-b border-purple-700 text-purple-700 outline-none'>
				<option value='all' className='bg-zinc-900 text-zinc-300'>
					Todas
				</option>
				{
					genres.map((genre, idx) => (
						<option key={idx} value={genre} className='bg-zinc-900  text-zinc-300'>
							{genre}
						</option>
					))
				}
			</select>
		</div>
	)
}