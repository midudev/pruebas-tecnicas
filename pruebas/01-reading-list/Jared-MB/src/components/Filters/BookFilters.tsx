import { GenreFilter, PagesFilter } from ".";

export default function BookFilters() {
	return (
		<div className='flex items-center w-96 gap-2 flex-col h-full'>
			<GenreFilter />
			<PagesFilter />
		</div>
	)
}