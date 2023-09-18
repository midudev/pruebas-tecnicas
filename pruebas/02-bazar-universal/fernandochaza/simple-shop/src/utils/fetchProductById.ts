const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://simple-shop-nine.vercel.app"
    : "http://localhost:3000"

export async function fetchProductById(id: Number) {
  try {
    const response = await fetch(`${baseUrl}/api/items/${id}`, {
      cache: "force-cache"
    })
    const data = await response.json()
    return data.item
  } catch (error) {
    console.error(error)
  }
}
