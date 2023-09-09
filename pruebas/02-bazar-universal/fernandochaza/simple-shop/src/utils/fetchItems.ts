export async function fetchItems(query: string) {
  const response = await fetch(`http://localhost:3000/api/items?query=${query}`)
  const data = await response.json()
  return data.items
}
