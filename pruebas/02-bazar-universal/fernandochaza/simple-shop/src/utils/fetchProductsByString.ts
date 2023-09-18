const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://www."
    : "http://localhost:3000"

export async function fetchProductsByString(query: string) {
  const response = await fetch(`${baseUrl}/api/items?query=${query}`, {
    cache: "force-cache"
  })
  const data = await response.json()
  return data.items
}
