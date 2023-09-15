export async function fetchProductsByCategory(category: string) {
  const response = await fetch(
    `http://localhost:3000/api/items?category=${category}`,
    {
      cache: "force-cache"
    }
  )
  const data = await response.json()
  return data.items
}
