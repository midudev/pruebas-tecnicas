const key = import.meta.env.VITE_API_KEY

export async function fetchBooks(titleQuery, authorQuery) {
  const encodedTitle = titleQuery === '' ? '*' : encodeURIComponent(titleQuery)
  const encodedAuthor =
    authorQuery === '' ? '*' : encodeURIComponent(authorQuery)

  const url = `https://www.googleapis.com/books/v1/volumes?q=+intitle:${encodedTitle}+inauthor:${encodedAuthor}&key=${key}`
  
  const response = await fetch(url)
  const data = await response.json()

  return data.items
}
