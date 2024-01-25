import { Product } from "./types"

export async function getProductById({
  itemId,
}: { itemId?: number } = {}): Promise<Product[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/items/${itemId}`,
    {
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    }
  )
  const data = await res.json()
  return [data]
}

export async function getProductsBySearch({
  searchProducts = "",
  currentPage,
}: { searchProducts?: string; currentPage?: number } = {}): Promise<Product[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/items?search=${searchProducts}&page=${currentPage}`,
    {
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    }
  )
  const data = await res.json()
  return data
}

export async function getTotalPagesProducts({
  searchProducts = "",
}: {
  searchProducts?: string
}) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/items/count?search=${searchProducts}`,
    {
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    }
  )
  const data = await res.json()

  return data
}
