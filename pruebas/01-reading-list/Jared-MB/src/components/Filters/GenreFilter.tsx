import { BiFilterAlt } from 'react-icons/bi'

import { genres } from "../../models/types"
import { useBooks } from "../../store"
import FilterLayout from './FilterLayout'

export default function GenreFilter() {

	const { setBooksByFilter, setFilter, pages, filter } = useBooks()

	const handleGenre = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const genre = e.target.value
		setFilter(genre)
		setBooksByFilter(genre, pages)
	}

	return (
		<FilterLayout>
			<BiFilterAlt className='text-sm' />
			<select data-testid='genre-filter' onChange={handleGenre} defaultValue={filter} className='bg-transparent outline-none text-sm'>
				<option value='all' className='bg-zinc-900'>
					Todas
				</option>
				{
					genres.map((genre, idx) => (
						<option key={idx} value={genre} className='bg-zinc-900'>
							{genre}
						</option>
					))
				}
			</select>
		</FilterLayout>
	)
}