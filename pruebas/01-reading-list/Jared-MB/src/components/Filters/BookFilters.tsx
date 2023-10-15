import { GenreFilter, PagesFilter } from ".";

export default function BookFilters() {
	return (
		<div className='flex gap-2'>
			<GenreFilter />
			<PagesFilter />
		</div>
	)
}