import { NextResponse } from "next/server"

export async function fetchProductById(id: Number) {
  try {
    const response = await fetch(`http://localhost:3000/api/items/${id}`, {
      cache: "force-cache"
    })
    const data = await response.json()
    return data.item
  } catch (error) {
    console.error(error)
  }
}
