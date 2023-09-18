import { BASE_URL } from "@/constants/global"

export async function fetchProductsByString(query: string) {
  const response = await fetch(`${BASE_URL}/api/items?query=${query}`, {
    cache: "force-cache"
  })
  const data = await response.json()
  return data.items
}
