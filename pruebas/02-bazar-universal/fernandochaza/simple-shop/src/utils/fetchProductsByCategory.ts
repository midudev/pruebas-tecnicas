import { BASE_URL } from "@/constants/global"

export async function fetchProductsByCategory(category: string) {
  const response = await fetch(`${BASE_URL}/api/items?category=${category}`, {
    cache: "force-cache"
  })
  const data = await response.json()
  return data.items
}
