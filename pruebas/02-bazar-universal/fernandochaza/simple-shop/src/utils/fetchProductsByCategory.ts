const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://www."
    : "http://localhost:3000"

export async function fetchProductsByCategory(category: string) {
  const response = await fetch(
    `${baseUrl}/api/items?category=${category}`,
    {
      cache: "force-cache"
    }
  )
  const data = await response.json()
  return data.items
}
