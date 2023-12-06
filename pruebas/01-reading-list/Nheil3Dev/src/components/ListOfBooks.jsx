import { Book } from './Book'
import style from './ListOfBooks.module.css'
import { PageSelector } from './PageSelector'

export function ListOfBooks({
	mainList,
	books,
	dispatchBooks,
	page,
	totalPages,
	genre,
	dispatchFilters,
	width,
	show
}) {
	if (width < 950 && show.readingList) return null
	if (width < 500 && show.filters) return null
	// console.log("--ListOfBooks");
	return (
		<section className={style.container}>
			<header className={style.header}>
				<p>
					{mainList.filter(el => !el.isReading).length} libros disponibles
					<span>
						{`${'/ '}${
							mainList.filter(el => el.isReading).length
						} en la lista de lectura`}
					</span>
					{genre !== 'Todos' && (
						<span>{`${'/ '}${
							books.filter(el => !el.isReading).length
						} libros disponibles del género '${genre}'`}</span>
					)}
				</p>

				{totalPages > 0 && (
					<PageSelector
						page={page}
						totalPages={totalPages}
						dispatchFilters={dispatchFilters}
					/>
				)}
			</header>
			<ul className={style.list}>
				{books.map(book => {
					return (
						<Book
							key={book.ISBN}
							book={book}
							style={style}
							dispatchBooks={dispatchBooks}
						/>
					)
				})}
			</ul>
			<footer></footer>
		</section>
	)
}
