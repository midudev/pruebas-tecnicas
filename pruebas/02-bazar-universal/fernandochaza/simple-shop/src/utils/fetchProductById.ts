export async function fetchProductById(id: Number) {
  const response = await fetch(`http://localhost:3000/api/items/${id}`, {
    cache: "force-cache"
  })
  const data = await response.json()
  return data.item
}
