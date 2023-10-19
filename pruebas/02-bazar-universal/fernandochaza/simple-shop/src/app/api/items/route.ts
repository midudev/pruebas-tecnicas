import { NextResponse } from "next/server"
import Data from "../../../data/products.json"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)

  const query =
    searchParams.get("query") !== "" ? searchParams.get("query") : null
  const category =
    searchParams.get("category") !== "" ? searchParams.get("category") : null

  const products = Data.products

  if (category !== null) {
    const items = products.filter((item) => item.category === category)

    if (items === null) {
      return new NextResponse("No items found!", { status: 404 })
    }

    return NextResponse.json({ message: "success", items }, { status: 200 })
  }

  if (query === null) {
    return new NextResponse("Missing query!", { status: 400 })
  }

  const items = products.filter((item) =>
    item.title.toLowerCase().includes(query)
  )

  if (items === null) {
    return new NextResponse("No items found!", { status: 404 })
  }

  return NextResponse.json({ message: "success", items }, { status: 200 })
}
