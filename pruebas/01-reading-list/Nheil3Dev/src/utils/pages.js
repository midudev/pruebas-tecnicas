export const getMaxPages = books => {
	const pages = books.map(book => book.pages)
	const sortedPages = pages.sort((a, b) => a - b)
	return sortedPages[sortedPages.length - 1]
}
