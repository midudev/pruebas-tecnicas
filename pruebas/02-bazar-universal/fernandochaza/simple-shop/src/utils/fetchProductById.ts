import { BASE_URL } from "@/constants/global"

export async function fetchProductById(id: number) {
  try {
    const response = await fetch(`${BASE_URL}/api/items/${id}`, {
      cache: "force-cache"
    })
    const data = await response.json()
    return data.item
  } catch (error) {
    console.error(error)
  }
}
