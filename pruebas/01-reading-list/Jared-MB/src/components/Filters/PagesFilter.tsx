import { InfoIcon } from "..";
import { useBooks } from "../../store";
import FilterLayout from "./FilterLayout";

export default function PagesFilter() {

	const { setBooksByFilter, pages, filter, setPages } = useBooks()

	const handlePages = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPages(+e.target.value)
		setBooksByFilter(filter, +e.target.value)
	}

	const handleMessage = () => {
		if (pages === 0) {
			return 'Libros con cualquier cantidad de páginas'
		}
		else if (pages === 1500) {
			return 'Libros con más de 1500 páginas'
		}
		return `Libros entre ${pages} y ${pages + 99} páginas`
	}

	return (
		<FilterLayout>
			<InfoIcon message={(() => handleMessage())()} bg='text-zinc-300' />
			<label className='text-zinc-300 text-sm'>Páginas</label>
			<input value={pages} onChange={handlePages} type='range' step='100' min='0' max='1500' className='bg-transparent w-32' />
			<span>{pages || 'All'}</span>
		</FilterLayout >
	)
}