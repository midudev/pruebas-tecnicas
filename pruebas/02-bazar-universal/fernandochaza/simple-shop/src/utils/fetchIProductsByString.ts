export async function fetchProductsByString(query: string) {
  const response = await fetch(
    `http://localhost:3000/api/items?query=${query}`,
    {
      cache: "force-cache"
    }
  )
  const data = await response.json()
  return data.items
}
