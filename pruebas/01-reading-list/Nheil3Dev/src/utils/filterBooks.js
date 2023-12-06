function filterAvailables(books, onlyAvailables) {
	if (!onlyAvailables) return [...books]

	return books.filter(book => !book.isReading)
}

function filterByGenre(books, genre) {
	if (genre === 'Todos') return [...books]
	return books.filter(book => book.genre === genre)
}

function filterByMinPages(books, pages) {
	if (pages === 0) return [...books]
	return books.filter(book => book.pages >= pages)
}

function paginateBooks(books, page, booksPerPage) {
	const firstBook = (page - 1) * booksPerPage
	const lastBook = firstBook + booksPerPage
	const totalPages = Math.ceil(books.length / booksPerPage)

	const paginatedBooks = books.slice(firstBook, lastBook)

	return { totalPages, paginatedBooks }
}

function filterBySearch(books, search) {
	if (search === '') return [...books]
	return books.filter(book =>
		book.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
	)
}

function orderBooks(books, orderBy) {
	if (orderBy === 'default') return [...books]
	switch (orderBy) {
		case 'genre':
			return [...books].sort((a, b) => {
				if (b.genre > a.genre) return -1
				if (b.genre < a.genre) return 1
				return 0
			})

		case 'pages':
			return [...books].sort((a, b) => {
				if (b.pages > a.pages) return -1
				if (b.pages < a.pages) return 1
				return 0
			})

		case 'title':
			return [...books].sort((a, b) => {
				if (b.title > a.title) return -1
				if (b.title < a.title) return 1
				return 0
			})

		case 'year':
			return [...books].sort((a, b) => {
				if (b.year > a.year) return -1
				if (b.year < a.year) return 1
				return 0
			})

		default:
			throw new Error('Invalid orderBy')
	}
}

function toggleOrder(books, order) {
	if (order === 'asc') return [...books]
	return [...books].reverse()
}

export function getBooksToDisplay(
	books,
	genre,
	minPages,
	page,
	booksPerPage,
	onlyAvailables,
	search,
	orderBy,
	order
) {
	const booksAvailables = filterAvailables(books, onlyAvailables)
	const booksFilteredByGenre = filterByGenre(booksAvailables, genre)
	const booksFilteredMinPages = filterByMinPages(booksFilteredByGenre, minPages)
	const booksFilteredBySearch = filterBySearch(booksFilteredMinPages, search)
	const booksOrdered = orderBooks(booksFilteredBySearch, orderBy)
	const booksOrderToggle = toggleOrder(booksOrdered, order)
	const { paginatedBooks, totalPages } = paginateBooks(
		booksOrderToggle,
		page,
		booksPerPage
	)

	return { paginatedBooks, totalPages }
}
