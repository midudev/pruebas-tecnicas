export const getAllGenres = books => {
	const genres = books.map(book => book.genre)

	const genresSet = new Set(genres)

	const allGenres = [...genresSet]

	allGenres.unshift('Todos')

	return allGenres
}
