import { useMemo } from 'react'
import './App.css'
import { Filters } from './components/Filters'
import { Header } from './components/Header'
import { ListOfBooks } from './components/ListOfBooks'
import { ReadingList } from './components/ReadingList'
import { useBooks } from './hooks/useBooks'
import { useFilters } from './hooks/useFilters'
import { useInterface } from './hooks/useInterface'
import { getBooksToDisplay } from './utils/filterBooks'

function App() {
	const { filters, dispatchFilters } = useFilters()

	const { mainList, readingList, dispatchBooks, allGenres, maxPages } =
		useBooks()

	const { paginatedBooks, totalPages } = useMemo(
		() =>
			getBooksToDisplay(
				mainList,
				filters.filterGenre,
				filters.filterMinPages,
				filters.page,
				filters.booksPerPage,
				filters.onlyAvailables,
				filters.search,
				filters.orderBy,
				filters.order
			),
		[filters, mainList]
	)

	const { width, show, toggleFilters, toogleReadingList } = useInterface()

	// console.log("App");

	return (
		<>
			<Header
				elements={readingList.length}
				toggleFilters={toggleFilters}
				toogleReadingList={toogleReadingList}
			/>
			<main>
				<Filters
					{...filters}
					dispatchFilters={dispatchFilters}
					maxPages={maxPages}
					allGenres={allGenres}
					show={show.filters}
				/>

				<ListOfBooks
					mainList={mainList}
					books={paginatedBooks}
					dispatchBooks={dispatchBooks}
					page={filters.page}
					totalPages={totalPages}
					genre={filters.filterGenre}
					dispatchFilters={dispatchFilters}
					width={width}
					show={show}
				/>

				<ReadingList
					readingBooks={readingList.filter(el => el.isReading)}
					dispatchBooks={dispatchBooks}
					show={show.readingList}
				/>
			</main>
		</>
	)
}

export default App
