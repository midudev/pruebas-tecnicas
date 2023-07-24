import {
	booksPerPageChanged,
	genreChanged,
	minPagesChanged,
	onlyAvailablesChanged,
	orderByChanged,
	orderToggled,
	searchChanged
} from '../actions/filtersActions'
import style from './Filters.module.css'
import GlassIcon from './icons/GlassIcon'

export function Filters({
	filterMinPages,
	filterGenre,
	booksPerPage,
	onlyAvailables,
	dispatchFilters,
	maxPages,
	allGenres,
	search,
	orderBy,
	order,
	show
}) {
	const handleChangeGenre = ev => {
		dispatchFilters(genreChanged(ev.target.value))
	}

	const handleChangeMinPages = ev =>
		dispatchFilters(minPagesChanged(ev.target.value))

	const handleChangeBooksPerPage = ev => {
		dispatchFilters(booksPerPageChanged(Number(ev.target.value)))
	}

	return (
		<div className={!show ? style.form : style.visible}>
			<div className={style.column}>
				<label htmlFor='search'>Buscar</label>
				<div className={style.searchContainer}>
					<input
						id='search'
						type='text'
						value={search}
						placeholder='Harry Potter...'
						onChange={ev => dispatchFilters(searchChanged(ev.target.value))}
					/>
					<label htmlFor='search'>
						<GlassIcon className={style.glass} />
					</label>
				</div>
			</div>
			<div className={style.filters}>
				<div className={style.column}>
					<label htmlFor='pages'>Filtrar por páginas</label>
					<div className={style.range}>
						<input
							id='pages'
							type='range'
							min={0}
							max={String(maxPages - 1)}
							value={filterMinPages}
							onChange={handleChangeMinPages}
						/>
						<span>&gt; {filterMinPages}</span>
					</div>
				</div>

				<div className={style.column}>
					<label htmlFor='genre'>Filtrar por género</label>
					<select id='genre' onChange={handleChangeGenre} value={filterGenre}>
						{allGenres.map((genre, index) => (
							<option key={index} value={genre}>
								{genre}
							</option>
						))}
					</select>
				</div>

				<div className={style.column}>
					<label htmlFor='booksPerPage'>Libros por página</label>
					<select
						id='booksPerPage'
						value={booksPerPage}
						onChange={handleChangeBooksPerPage}
					>
						<option value='4'>4</option>
						<option value='6'>6</option>
						<option value='8'>8</option>
						<option value='10'>10</option>
					</select>
				</div>

				<div className={style.row}>
					<label htmlFor='available'>Sólo disponibles</label>
					<input
						type='checkbox'
						id='available'
						checked={onlyAvailables}
						onChange={() => dispatchFilters(onlyAvailablesChanged())}
					/>
				</div>
			</div>
			<div className={style.column}>
				<label htmlFor='orderBy'>Ordenar</label>
				<select
					id='orderBy'
					value={orderBy}
					onChange={ev => dispatchFilters(orderByChanged(ev.target.value))}
				>
					<option value='default'>Por defecto</option>
					<option value='genre'>Por género</option>
					<option value='pages'>Por número de páginas</option>
					<option value='title'>Por título</option>
					<option value='year'>Por año</option>
				</select>
				{orderBy !== 'default' && (
					<select
						value={order}
						onChange={ev => dispatchFilters(orderToggled(ev.target.value))}
					>
						<option value='asc'>Ascendente</option>
						<option value='desc'>Descendiente</option>
					</select>
				)}
			</div>
		</div>
	)
}
